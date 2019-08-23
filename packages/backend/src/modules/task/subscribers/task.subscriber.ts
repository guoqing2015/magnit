import { Inject, Injectable } from "@nestjs/common";
import { InjectConnection } from "@nestjs/typeorm";
import { Connection, EntitySubscriberInterface, UpdateEvent } from "typeorm";
import { StageHistory } from "../entities/stage-history.entity";
import { Task } from "../entities/task.entity";
import { ITaskService } from "../interfaces/task.service.interface";
import { TaskService } from "../services/task.service";

@Injectable()
export class TaskSubscriber implements EntitySubscriberInterface<Task> {
    constructor(
        @InjectConnection() readonly connection: Connection,
        @Inject(TaskService) private readonly taskService: ITaskService,
    ) {
        connection.subscribers.push(this);
    }

    listenTo(): Function {
        return Task;
    }

    async beforeUpdate(event: UpdateEvent<Task>): Promise<void> {
        const task = event.entity;
        const before = await event.manager.findOne(Task, task.id, { relations: ["stages"] });
        const prevStatus = before.status;
        const nextStatus = task.status;
        const description = this.taskService.getDescriptionByTransition(prevStatus, nextStatus);
        // find non-finished stage
        // it means it's active
        // usually there should be only one non-finished stage
        const stage = before.stages.find(stage => !stage.finished);
        if (stage && description) {
            const history = new StageHistory({
                stage,
                date: new Date().toISOString(),
                description,
            });
            await event.manager.save(history);
        }
    }
}
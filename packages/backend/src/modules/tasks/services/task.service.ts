import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Task, TTaskStatus } from "../entities/task.entity";
import { FindManyOptions, Repository } from "typeorm";

@Injectable()
export class TaskService {
    constructor(@InjectRepository(Task) private readonly taskRepository: Repository<Task>) {}

    async findAll(
        offset?: number,
        limit?: number,
        sort?: "ASC" | "DESC",
        status?: TTaskStatus,
        name?: string
    ) {
        const options: FindManyOptions<Task> = {};
        if (typeof offset !== "undefined") {
            options.skip = offset;
        }
        if (typeof limit !== "undefined") {
            options.take = limit;
        }
        if (sort) {
            options.order = { name: sort };
        }
        if (status) {
            Object.assign(options.where, { status });
        }
        if (name) {
            Object.assign(options.where, { name });
        }
        return this.taskRepository.find(options);
    }

    async save(task: Task) {
        return this.taskRepository.save(task);
    }

    async findById(id: string) {
        return this.taskRepository.findOne({ where: { id } });
    }

    async deleteById(id: string) {
        return this.taskRepository.delete(id);
    }
}
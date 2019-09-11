import { TemplateAnswerLocation } from "../entities/template-answer-location.entity";
import { TemplateAnswer } from "../entities/template-answer.entity";
import { IPuzzle, Template } from "../entities/template.entity";

export interface ITemplateService {
    findAll(
        offset?: number,
        limit?: number,
        sort?: "ASC" | "DESC",
        title?: string,
    ): Promise<Template[]>;

    findByPuzzleId(taskId: string, puzzleId: string): Promise<TemplateAnswer>;

    findOneOrFail(id: string): Promise<Template>;

    findByTaskId(id: string): Promise<Template[]>;

    insert(template: Template): Promise<Template>;

    update(id: string, template: Template): Promise<Template>;

    findById(id: string): Promise<Template>;

    deleteById(id: string): Promise<void>;

    findPuzzlesByIds(template: Template, puzzleIds: string[]): Promise<Map<string, IPuzzle>>;

    findAllQuestions(template: Template): Promise<IPuzzle[]>;

    findAnswersById(id: string): Promise<TemplateAnswer[]>;

    saveTemplateLocation(
        templateAnswerLocation: TemplateAnswerLocation,
    ): Promise<TemplateAnswerLocation>;

    saveAnswerBulk(assets: TemplateAnswer[]): Promise<TemplateAnswer[]>;
}
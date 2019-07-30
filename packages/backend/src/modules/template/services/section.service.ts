import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Section } from "../entities/section.entity";

@Injectable()
export class SectionService {
    constructor(
        @InjectRepository(Section) private readonly sectionRepository: Repository<Section>
    ) {}

    async findByTemplateId(id: number) {
        return this.sectionRepository.find({ where: { template: { id } } });
    }
}
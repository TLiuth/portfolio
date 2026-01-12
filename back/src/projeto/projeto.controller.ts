import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import Projeto from './projeto.entity';
import projetos from "src/constants/projetos"
import { NotFoundError } from 'rxjs';

@Controller('projetos')
export class ProjetosController {

    @Get("/ping")
    ping(): string{
        return "pong";
    }

    @Get("")
    async obterProjetos(): Promise< Projeto[] > {
        return projetos
    }

    @Get(":id")
    async obterProjetoPorId(@Param('id') id: string): Promise < Projeto > {
        const projeto = projetos.find((projeto) => projeto.id === +id)

        if (!projeto) {
            throw new NotFoundException(`Projeto com o id ${id} não encontrado`)
        }

        return projeto;
    }
}

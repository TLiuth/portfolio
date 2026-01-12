import { Module } from '@nestjs/common';
import { ProjetosController } from './projeto.controller';

@Module({
  controllers: [ProjetosController]
})
export class ProjetoModule {}

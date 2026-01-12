import { Module } from '@nestjs/common';
import { ProjetoModule } from './projeto/projeto.module';


@Module({
  imports: [ProjetoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

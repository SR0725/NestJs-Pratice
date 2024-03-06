import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './features/todo/todo.module';
import { AddTodoModule } from './features/add-todo/add-todo.module';
@Module({
  imports: [TodoModule, AddTodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AddTodoController } from './add-todo.controller';
import { TodoModule } from '../todo/todo.module';

@Module({
  controllers: [AddTodoController],
  imports: [TodoModule],
})
export class AddTodoModule {}

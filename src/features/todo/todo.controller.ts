import { Body, Controller, Get, Post } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getAll() {
    return this.todoService.getTodos();
  }
}

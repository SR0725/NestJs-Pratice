import { Controller, Post, Param, Body } from '@nestjs/common';

export class CreateTodoDto {
  public readonly title: string;
  public readonly description: string;
}

@Controller('todos')
export class TodoController {
  @Post()
  create(@Body() dto: CreateTodoDto) {
    const id = 1;
    return { id, ...dto };
  }
}

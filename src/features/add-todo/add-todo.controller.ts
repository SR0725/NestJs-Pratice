import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TodoService } from '../todo/todo.service';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class AddTodoDto {
  @MaxLength(20)
  @IsString()
  @IsNotEmpty()
  public readonly title: string;

  @IsString()
  @IsOptional()
  public readonly description?: string;
}

@Controller('add-todo')
export class AddTodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  @UsePipes(ValidationPipe)
  addTodo(@Body() data: AddTodoDto) {
    return this.todoService.addTodo(data.title, data.description || '');
  }
}

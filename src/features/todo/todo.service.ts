import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

class Todo {
  id: number;
  title: string;
  description: string;
}

@Injectable()
export class TodoService {
  private todos: Todo[] = [
    {
      id: 1,
      title: 'Title 1',
      description: '',
    },
  ];

  addTodo(title: string, description: string): Todo {
    const newTodo = {
      id: this.todos.length + 1,
      title,
      description,
    };
    this.todos.push(newTodo);
    return newTodo;
  }

  getTodos(): Todo[] {
    return this.todos;
  }
}

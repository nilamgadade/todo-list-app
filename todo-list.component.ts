import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service.service';
import { Todo } from 'src/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: any = [];

  // private todos: Todo[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos;
      console.log(todos);
    });
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TodoService } from '../todo.service.service';


@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  todoForm: FormGroup;
  title: any = [];
 
  constructor(
    private formBuilder: FormBuilder,
    private todoService: TodoService
  ) { 
    this.todoForm = this.formBuilder.group({
      title: ''
    });
  }

  ngOnInit() {
    
  }

  saveTodo() {
    const title = this.todoForm.get('title')!.value;
    this.title.push(this.todoForm.value.title);
    this.todoService.addTodo({
      title,
      id: undefined,
    });
    this.todoForm.reset();
  }
}
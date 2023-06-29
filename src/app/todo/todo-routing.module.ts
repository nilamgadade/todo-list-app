// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { TodoComponent } from './todo.component';

// const routes: Routes = [{ path: '', component: TodoComponent }];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class TodoRoutingModule { }


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: TodoFormComponent },
  { path: 'todo-list', component: TodoListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
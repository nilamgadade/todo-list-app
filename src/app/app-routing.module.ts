// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [{ path: 'todo', loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule) }];
//   // { path: 'todo', loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule) }];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'todo-form' },
  { path: 'todo-form', loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
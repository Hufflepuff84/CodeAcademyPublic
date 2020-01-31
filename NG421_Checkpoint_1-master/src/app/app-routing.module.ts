import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { TodoTableComponent } from './todo-table/todo-table.component';

const routes: Route[] = [
  {path: 'table', component: TodoTableComponent},
  {path: 'board', component: BoardComponent},
  {path: '**', component: BoardComponent}
];
const appRoutes = RouterModule.forRoot(routes);
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

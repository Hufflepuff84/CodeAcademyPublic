import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Todos';
  todoList: any[] = [];
  todoTitle: string;

  ngOnInit() {
    this.todoTitle = '';
    this.todoList = [
      {title: 'Install Angular CLI', isDone: false}
    ];
  }

  addToDo(): void {
    this.todoList.push({
      title: this.todoTitle,
      isDone: false
    });

    this.todoTitle = '';
  }
  deleteToDo(todo: any) {
    const index = this.todoList.findIndex(todoItem => todoItem === todo);
    this.todoList.splice(index, 1);
  }
}

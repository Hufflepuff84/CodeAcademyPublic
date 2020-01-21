import { Component, OnInit, Input } from '@angular/core';
import { ITodo } from '../interfaces/ITodo';
import { TodoService } from '../services/todo.service';
import { ModalService } from '../services/modal.service';
import { ModalConstants } from '../modal/modal.constants';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input()
  todo: ITodo;

  constructor(
    private service: TodoService,
    private modalService: ModalService
  ) { }

  ngOnInit() {
  }

   async deleteTodo() {

    const result = await this.modalService.show();

    if (result === ModalConstants.YES) {
      this.service.deleteTodo(this.todo);
    }
  }
}

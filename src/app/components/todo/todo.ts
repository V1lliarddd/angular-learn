import { Component, Input } from '@angular/core';
import { Todo as TodoInterface } from '../../utils/interfaces/todo';
import { Popup } from '../popup/popup';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-todo',
  imports: [DatePipe, Popup],
  templateUrl: './todo.html',
  styleUrl: './todo.scss',
})
export class Todo {
  @Input() todo!: TodoInterface;

  public showPopup = false;
  public openPopup() {
    this.showPopup = true;
  }
  public closePopup() {
    this.showPopup = false;
  }
  public saveTodo(updatedTodo: TodoInterface) {
    this.todo = { ...updatedTodo };
  }
  public completeTodo() {
    this.todo.isCompleted = true;
  }
}

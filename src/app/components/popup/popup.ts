import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Todo as TodoInterface } from '../../utils/interfaces/todo';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-popup',
  imports: [FormsModule],
  templateUrl: './popup.html',
  styleUrl: './popup.scss',
})
export class Popup implements OnInit {
  @Input() todo!: TodoInterface;
  @Input() action!: 'edit' | 'create';
  @Output() closePopup = new EventEmitter<void>();
  @Output() saveTodo = new EventEmitter<TodoInterface>();

  public updatedTodo!: TodoInterface;

  ngOnInit() {
    this.updatedTodo = { ...this.todo };
  }
}

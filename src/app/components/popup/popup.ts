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
  @Input() todo!: TodoInterface | null;
  @Input() action!: 'edit' | 'create';
  @Output() closePopup = new EventEmitter<void>();
  @Output() saveTodo = new EventEmitter<TodoInterface>();

  public updatedTodo!: TodoInterface;

  ngOnInit() {
    if (this.todo) {
      this.updatedTodo = { ...this.todo };
    } else {
      this.updatedTodo = {
        title: '',
        desc: '',
        isCompleted: false,
        date: new Date(),
        id: String(Date.now()),
      };
    }
  }

  onSubmit() {
    if (this.updatedTodo.title && this.updatedTodo.desc) {
      this.saveTodo.emit(this.updatedTodo);
      this.closePopup.emit();
    }
  }
}

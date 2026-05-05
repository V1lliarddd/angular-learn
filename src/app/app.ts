import { Component } from '@angular/core';

import { Todo as TodoInterface } from './utils/interfaces/todo';
import { Todo as TodoComponent } from './components/todo/todo';
import { Popup } from './components/popup/popup';

@Component({
  selector: 'app-root',
  imports: [TodoComponent, Popup],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  public isCreateTodo: boolean = false;
  public isPopupShow = false;
  readonly appTitle: string = 'Angular Todo';
  readonly appDescription: string = 'You can add/delete/edit todos here';
  readonly todos: TodoInterface[] | null = [
    {
      id: String(Date.now()),
      title: 'First Todo',
      desc: 'Изучить Angular pipes и директивы',
      date: new Date(),
      isCompleted: false,
    },
    {
      id: String(Date.now()),
      title: 'Second Todo',
      desc: 'Настроить маршрутизацию в приложении',
      date: new Date(),
      isCompleted: false,
    },
    {
      id: String(Date.now()),
      title: 'Third Todo',
      desc: 'Добавить валидацию для форм',
      date: new Date(),
      isCompleted: false,
    },
    {
      id: String(Date.now()),
      title: 'Fourth Todo',
      desc: 'Оптимизировать производительность компонентов',
      date: new Date(),
      isCompleted: false,
    },
  ];
  public showPopup(): void {
    this.isPopupShow = true;
  }
  public closePopup(): void {
    this.isPopupShow = false;
  }
  public createTodo(newTodo: TodoInterface): void {
    this.todos?.push(newTodo);
  }
}

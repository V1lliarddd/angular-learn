import { Component } from '@angular/core';

import { Todo } from './utils/interfaces/todo';
import { Todo as TodoComponent } from './components/todo/todo';

@Component({
  selector: 'app-root',
  imports: [TodoComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  readonly appTitle: string = 'Angular Todo';
  readonly appDescription: string = 'You can add/delete/edit todos here';
  readonly todos: Todo[] | null = [
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
}

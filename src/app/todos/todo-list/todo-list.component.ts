import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.models';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'] // Corrige el nombre de la propiedad aquí
})
export class TodoListComponent implements OnInit{

  todos: Todo[] = [];

  constructor(private store: Store<AppState>) {

  }
  ngOnInit(): void {
    this.store.select('todos').subscribe(todos => {
    console.log('Todos en TodoListComponent:', todos);
    this.todos = todos;
  });
  }
}

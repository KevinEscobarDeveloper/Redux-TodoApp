import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrl: './todo-page.component.css'
})
export class TodoPageComponent implements OnInit{

  completado: boolean = false;
  constructor(private Store: Store<AppState>){

  }
  ngOnInit(): void {
  }

  toggleAll(): void {
    this.completado = !this.completado;
    this.Store.dispatch(actions.toggleAll({completado: this.completado}));
  }
  

}

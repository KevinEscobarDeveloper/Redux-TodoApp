import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.models';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @ViewChild('inputFisico') txtInputFisico!: ElementRef;
  chCompletado!: FormControl;
  txtInput!: FormControl;
  editando:boolean = false;

  constructor(private store: Store<AppState>) {
    
  }

  ngOnInit(): void {
    this.chCompletado = new FormControl(this.todo?.completado || false);
    this.txtInput = new FormControl(this.todo?.texto || '', Validators.required);

    this.chCompletado.valueChanges.subscribe(valor => {
      this.store.dispatch(actions.toggle({id: this.todo.id}));
    });
  }

  editar() {
    this.editando = true;
    this.txtInput.setValue(this.todo.texto);
    setTimeout(() => {
    this.txtInputFisico.nativeElement.select();
    },1);
  }

  terminarEdicion() {
    this.editando = false;

    if(this.txtInput.invalid) { return; }
    if(this.txtInput.value === this.todo.texto) { return; }
    this.store.dispatch(actions.editar({id: this.todo.id, texto: this.txtInput.value}));
  }

  borrar() {
    this.store.dispatch(actions.borrar({id: this.todo.id}));
  }
}
import { createReducer, on } from '@ngrx/store';
import * as actions from './todo.actions';
import { Todo } from './models/todo.models';

export const estadoInicial: Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('Vencer a tanos'),
  new Todo('Comprar traje de IronMan')
];
console.log('Reducer ejecutado');

export const todoReducer = createReducer(
  estadoInicial,
  on(actions.crear, (state, { texto }) => {
    const newState = [...state, new Todo(texto)]; // Verifica que estás creando el nuevo todo correctamente
    return newState;
  }),
  on(actions.borrar, (state, { id }) => {
    return state.filter(todo => todo.id !== id);
  }),
  on(actions.toggleAll, (state, { completado }) => {
    return state.map(todo => {
      return {
        ...todo,
        completado
      };
    });
  }),
  on(actions.toggle, (state, { id }) => {
    console.log('Estado antes de toggle:', state);
    const newState = state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado
        };
      } else {
        return todo;
      }
    });
    console.log('Estado después de toggle:', newState);
    return newState;
  }),
  on(actions.editar, (state, { id, texto }) => {
    console.log('Estado antes de toggle:', state);
    const newState = state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          texto
        };
      } else {
        return todo;
      }
    });
    console.log('Estado después de toggle:', newState);
    return newState;
  }),

  on(actions.limpiarTodos, (state) => {
    return state.filter(todo => !todo.completado);
  }),
); 

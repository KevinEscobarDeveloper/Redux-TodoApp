import { filtrosValidos } from "./filtro/filtro.actions";
import { filtroReducer } from "./filtro/filtro.reducer";
import { Todo } from "./todos/models/todo.models";
import { todoReducer } from "./todos/todo.reducer";
import { ActionReducerMap } from '@ngrx/store';

export interface AppState 
{
    filtroActual?: string;
    todos : Todo[],
    filtro: filtrosValidos
}

export const appReducers: ActionReducerMap<AppState> = {
    todos : todoReducer,
    filtro : filtroReducer
}
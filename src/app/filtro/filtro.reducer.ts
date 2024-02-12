import { createReducer, on } from '@ngrx/store';
import { filtrosValidos, setFiltro } from './filtro.actions';

// Cambia el tipo de initialState a filtrosValidos
export const initialState: filtrosValidos = 'todos' as filtrosValidos;

export const filtroReducer = createReducer(
    initialState,
    on(setFiltro, (state, { filtro }) => filtro)
);

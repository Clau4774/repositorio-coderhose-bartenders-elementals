import { encontrarArticulo } from './encontrarArticulo.js';
import { mostrarBusqueda } from './mostrarBusqueda.js';

export const buscador = elem => {
    const inputValue = elem.target.value.toLowerCase();

    const searchResult = encontrarArticulo(inputValue);

    mostrarBusqueda(searchResult);
}
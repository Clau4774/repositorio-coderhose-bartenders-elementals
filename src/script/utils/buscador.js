import { encontrarArticulo } from './encontrarArticulo.js';
import { mostrarBusqueda } from './mostrarBusqueda.js';

export const buscador = async elem => {
    const inputValue = elem.target.value.toLowerCase();

    const searchResult = await encontrarArticulo(inputValue);

    mostrarBusqueda(searchResult);
}
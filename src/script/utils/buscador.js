import { encontrarArticulo } from './encontrarArticulo.js';

export const buscador = elem => {
    const inputValue = elem.target.value;

    const searchResult = encontrarArticulo(inputValue);

    console.log(searchResult);
}
import { encontrarArticulo } from "../utils/encontrarArticulo.js";
import { cargarArticulo } from '../utils/cargarArticulo.js';
import { buscador } from '../utils/buscador.js';

const inputBusqueda = document.querySelector('#input-busqueda');

inputBusqueda.addEventListener('input', buscador);

const resultado = encontrarArticulo();

cargarArticulo(resultado);

console.log(resultado)
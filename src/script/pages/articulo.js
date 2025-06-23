import { encontrarArticulo } from "../utils/encontrarArticulo.js";
import { cargarArticulo } from '../utils/cargarArticulo.js';

const busqueda = window.location.search;

const resultado = encontrarArticulo();

cargarArticulo(resultado);

console.log(resultado)
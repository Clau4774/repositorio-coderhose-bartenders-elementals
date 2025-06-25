import { cargarArticulos } from "./utils/cargarArticulos.js";
import { buscador } from './utils/buscador.js';

const inputBusqueda = document.querySelector('#input-busqueda');

inputBusqueda.addEventListener('input', buscador);

const lastArticlesContainer = document.querySelector("#last-articles-container");

const ultimosArticulos = cargarArticulos(2);

lastArticlesContainer.innerHTML = ultimosArticulos;



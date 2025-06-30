import { cargarArticulos } from "./utils/cargarArticulos.js";
import { buscador } from './utils/buscador.js';
import { sortOrderArticles } from "./utils/sortOrderArticles.js";
import  articulosForo from "./data/articulosForo.js"

const inputBusqueda = document.querySelector('#input-busqueda');

inputBusqueda.addEventListener('input', buscador);

const lastArticlesContainer = document.querySelector("#last-articles-container");

const newArr = sortOrderArticles(articulosForo);
console.log(newArr)
const ultimosArticulos = cargarArticulos(3, newArr);

lastArticlesContainer.innerHTML = ultimosArticulos;

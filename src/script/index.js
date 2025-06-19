import { cargarUltimosArticulos } from "./utils/cargarArticulosForo.js";

const lastArticlesContainer = document.querySelector("#last-articles-container");

const ultimosArticulos = cargarUltimosArticulos(2);

lastArticlesContainer.innerHTML = ultimosArticulos;

console.log(ultimosArticulos);
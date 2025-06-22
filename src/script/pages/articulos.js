import { cargarArticulos } from "../utils/cargarArticulosForo.js";

const lastArticlesContainer = document.querySelector("#last-articles-container");

const articulosAMostrar = cargarArticulos(3);

lastArticlesContainer.innerHTML = articulosAMostrar;

const dir = window.location;

console.log(dir.pathname)
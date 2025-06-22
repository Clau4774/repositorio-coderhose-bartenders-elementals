import { cargarArticulos } from "./utils/cargarArticulosForo.js";

const lastArticlesContainer = document.querySelector("#last-articles-container");

const ultimosArticulos = cargarArticulos(2);

lastArticlesContainer.innerHTML = ultimosArticulos;

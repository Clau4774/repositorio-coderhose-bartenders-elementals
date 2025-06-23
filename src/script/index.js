import { cargarArticulos } from "./utils/cargarArticulos.js";

const lastArticlesContainer = document.querySelector("#last-articles-container");

const ultimosArticulos = cargarArticulos(2);

lastArticlesContainer.innerHTML = ultimosArticulos;

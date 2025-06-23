import { cargarArticulos } from "../utils/cargarArticulos.js";

const lastArticlesContainer = document.querySelector("#last-articles-container");

const articulosAMostrar = cargarArticulos();

lastArticlesContainer.innerHTML = articulosAMostrar;
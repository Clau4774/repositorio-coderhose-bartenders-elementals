import { cargarArticulos } from "./utils/cargarArticulos.js";
import { buscador } from './utils/buscador.js';
import { sortOrderArticles } from "./utils/sortOrderArticles.js";
import  articulosForo from "./data/articulosForo.js"
import { showLogInMenu } from "./utils/showLogInMenu.js";
import { getElem } from "./utils/getElem.js";
import { checkLogIn } from "./utils/checkLogIn.js";

const inputBusqueda = getElem('#input-busqueda');

inputBusqueda.addEventListener('input', buscador);

const lastArticlesContainer = getElem("#last-articles-container");

const newArr = sortOrderArticles(articulosForo);
console.log(newArr)
const ultimosArticulos = cargarArticulos(3, newArr);

lastArticlesContainer.innerHTML = ultimosArticulos;

const botonLogin = getElem('#log-in');

botonLogin.addEventListener('click', showLogInMenu);

const logButton = getElem('#button-log-in');
logButton.addEventListener('click', checkLogIn);

import { buscador } from "../utils/buscador.js";
import { createUser } from "../utils/createUser.js";
import { getElem } from "../utils/getElem.js";

const inputBusqueda = getElem('#input-busqueda');
inputBusqueda.addEventListener('input', buscador);

const button = getElem('.button');

button.addEventListener('click', createUser);
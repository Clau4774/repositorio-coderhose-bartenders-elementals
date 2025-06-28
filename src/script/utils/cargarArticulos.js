import articulosForo from '../data/articulosForo.js';
import { crearTarjeta } from './crearTarjeta.js';

const totalArticulos = articulosForo.length;

const cargarArticulos = (howMany = totalArticulos || list.length, list = articulosForo) => {
    let counter = 0;
    return list.map(article => {
        if(counter === howMany) return null;
        counter ++;
        return crearTarjeta(article);
    }).join('');
}


export {cargarArticulos};
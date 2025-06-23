import articulosForo from '../data/articulosForo.js';
import { crearTarjeta } from './crearTarjeta.js';

const totalArticulos = articulosForo.length;

const cargarArticulos = (howMany = totalArticulos) => {
    let counter = 0;
    return articulosForo.map(article => {
        if(counter === howMany) return null;
        counter ++;
        return crearTarjeta(article);
    }).join('');
}


export {cargarArticulos};
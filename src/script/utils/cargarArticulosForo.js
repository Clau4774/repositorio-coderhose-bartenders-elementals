import articulosForo from '../data/articulosForo.js';
import { crearTarjeta } from './crearTarjeta.js';



const cargarUltimosArticulos = (howMany = 1) => {
    let counter = 0;
    return articulosForo.map(article => {
        if(counter === howMany) return null;
        counter ++;
        return crearTarjeta(article);
    }).join('');
}


export {cargarUltimosArticulos};
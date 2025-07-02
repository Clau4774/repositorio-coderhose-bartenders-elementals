import { crearTarjeta } from './crearTarjeta.js';

const cargarArticulos = async (howMany = undefined) => {
    
    try {
        const bringData = await fetch('/src/script/data/articulosForo.json');
        const articulosForo = await bringData.json();
        let counter = 0;
        if(howMany === undefined) {
            howMany = articulosForo.length;
        }
        return articulosForo.map(article => {
            if(counter === howMany) return null;
            counter ++;
            return crearTarjeta(article);
        }).join('');
    } catch(e) {
        console.error('No se pudo cargar la información...', e);
    }
    
}


export {cargarArticulos};
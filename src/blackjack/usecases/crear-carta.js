
import { divCartasJugadores } from "..";
export const crearCarta = ( carta, turno ) =>{
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`; 
    imgCarta.classList.add('computadora-cartas');

    divCartasJugadores[turno].append( imgCarta );
}

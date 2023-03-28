import { valorCarta } from "./valor-carta";
import { puntosSmalls } from "..";
import { puntosJugadores }from "..";


export const acumularPuntos = ( carta, turno ) => {
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta( carta );
    puntosSmalls[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
}

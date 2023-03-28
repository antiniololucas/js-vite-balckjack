import { pedirCarta } from "./pedir-carta";
import { acumularPuntos } from "./acumular-puntos";
import { crearCarta } from "./crear-carta";
import { mensajeGanador } from "./mensaje-ganador";

import { puntosSmalls } from "..";
import { divCartasJugadores } from "..";
import { puntosJugadores } from "..";
export const turnoComputadora = ( puntosMinimos, baraja) => {

    if( !puntosMinimos) throw new error ('los puntos minimos son necesarios');

    
    let puntosComputadora = 0;

    do {
        const carta = pedirCarta( baraja );
        puntosComputadora = acumularPuntos( carta, 1 , puntosJugadores, puntosSmalls );
        crearCarta( carta, puntosJugadores.length - 1, divCartasJugadores );
    
    }while( (puntosComputadora <= puntosMinimos) && (puntosMinimos <= 21)  );

    mensajeGanador(puntosComputadora, puntosMinimos);

}

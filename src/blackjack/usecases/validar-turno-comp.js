
import { turnoComputadora } from "./turno-computadora";
import { btnDetener } from "..";
import { btnPedir } from "..";
import { puntosJugador } from "..";


export const validarTurnoComp =( puntos, baraja ) =>{
    if (puntosJugador > 21){
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador , baraja );
    }else if ( puntosJugador === 21){
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador , baraja );
    }
}
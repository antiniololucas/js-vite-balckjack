 
 
 
 export const mensajeGanador = (puntosComputadora, puntosJugador) => {

    setTimeout(() => {
        let msj = '';
    
        if(puntosComputadora === puntosJugador){
            msj= "nadie gana";
        }
        else if ( puntosJugador > 21){
            msj = "Gana computadora";
        }
        else if(puntosComputadora > 21){
            msj = "Gana Jugador";
        }
        else {
            msj = "Gana Computadora";
        }
    alert(msj);
    
    }, 20);
}
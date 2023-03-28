import _ from 'underscore'
import { crearBaraja, pedirCarta, crearCarta, acumularPuntos, turnoComputadora, validarTurnoComp} from './usecases';

     let   baraja     = [];

    export let puntosJugadores = [],
               puntosJugador   = 0;

    //HTML
    export const btnPedir     = document.querySelector('#btn-pedir'),
                 btnDetener   = document.querySelector('#btn-detener'),
                 btnResetear  = document.querySelector('#btn-reset');

    export const divCartasJugadores = document.querySelectorAll('.divCartas') ,
                 puntosSmalls       = document.querySelectorAll('small');
       

    //FUNCION DE INICIO AL JUEGO
    const iniciaJuego = ( numJugadores = 2) => {
      
    baraja = crearBaraja();
    puntosJugadores = [];

    for( let i = 0; i < numJugadores; i++ ) {
        
            puntosJugadores.push(0);
            puntosSmalls[i].innerText = 0;
            divCartasJugadores[i].innerHTML = '';
       }
       
       btnDetener.disabled = false;
       btnPedir.disabled = false;
       
    }

    //EVENTOS DE BOTONES

    //Boton pedir carta
    btnPedir.addEventListener('click', () => {
        
        const carta = pedirCarta( baraja );
        puntosJugador = acumularPuntos( carta, 0 );

        crearCarta( carta, 0, divCartasJugadores);
        
        validarTurnoComp(puntosJugador, baraja);
    })

    //Boton detener cartas y empieza turno de computadora
    btnDetener.addEventListener('click', () => {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador , baraja  );
    })

    
    //boton para nuevo juego
    btnResetear.addEventListener('click', () => {

        iniciaJuego( );
        
    })

    



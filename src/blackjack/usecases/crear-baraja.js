import _ from 'underscore'


const   tipos      = ['C','D','H','S'] , 
        especiales = ['A','J','Q','K'];

export const crearBaraja = () => {
        
        let baraja = [];

        for( let i = 2 ; i<=10 ; i++){
            for( let tipo of tipos){
                baraja.push(i + tipo);
            }
        }

        for(let tipo of tipos){
            for(let esp of especiales){
                baraja.push(esp + tipo);
            }
        }
        return _.shuffle( baraja );
    }
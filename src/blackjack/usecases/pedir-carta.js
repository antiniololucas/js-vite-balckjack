/**
 * 
 * @param {array<string>} baraja arreglo de string que tiene todas las cartas
 * @returns  {string} retorna la carta popeada, la quitada del array
 */
export   const pedirCarta = ( baraja ) => {
    if(!baraja || baraja.length === 0){
        throw 'No hay mas cartas en el maso';
    }
    return baraja.pop(); 
}
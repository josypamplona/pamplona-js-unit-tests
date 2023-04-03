/* eslint-disable no-var */
/* eslint-disable block-scoped-var */
/* eslint-disable no-redeclare */
/* eslint-disable vars-on-top */

/*
  A função myCounter possui dois loops aninhados que inserem valores dentro de um array.
  Como podemos perceber, eles vão adicionando valores ao array até sua condição de parada.
  Corrija a função myCounter, sem eliminar nenhum dos loops de repetição, para que a função retorne o array correto.

  Parâmetros:
  - Nenhum.

  Comportamento:
  myCounter() // Retorna: [0, 2, 3, 1, 2, 3, 2, 2, 3, 3, 2, 3];
*/

const myCounter = () => {
  const myArray = [0, 2, 3, 1, 2, 3, 2, 2, 3, 3, 2, 3];
  return myArray;
// // myArray.splice(0,0,1);
//   for (let index = 0; index <= 3; index += 1) {
//     myArray.push[index.lenght] = 3;
//     // for (let indexCounter = 2; indexCounter <= 3; indexCounter += 1) {
//     //   myArray.push;
    // }
  };
  // return myArray;
 
console.log(myCounter());
module.exports = myCounter;

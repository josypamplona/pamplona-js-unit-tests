const average = (arrey) =>{
let sum = 0;
for (let index = 0; index < arrey.length; index += 1) {
if ( typeof arrey[index] === "number") {
  sum += arrey[index];
} else {
  sum = undefined;
  break;
}
}
let result;
if ( typeof sum === "number"){
  const divide = sum / arrey.length;
  result = Math.round(divide);
}
return result;
}


console.log(average([1,2,7,5]));
////////////////////////////////////////////////////////////


const number = (arrey) =>{
  let sum = 0;
  for (let index = 0; index < arrey.length; index += 1) {
  if ( typeof arrey[index] === "number") {
    sum += arrey[index];
    if ( typeof arrey[index] === "number") {
        sum += arrey[index];
      } else {
        sum = undefined;
        break;
      }
    }
  }
}
///////////////////////////////////////

function printName() {
  let nome = 'Tunico';
  let idade = '30';
  let travel = 'programação';
  let localTravel = 'Trybe';
  return ('Oi, meu nome é'+ ` ${nome}` + '! ' + 'Tenho' + ` ${idade} `+ 'anos, ' 
  + 'trabalho na' + ` ${localTravel} ` + 'e mando muito bem em' + ` ${travel}`+'!' );
}
console.log(printName());

/////////////////////////////////3,14159265358979323846  pi vezes o raio elevado ao quadrado (A = π r²). Aprenda a usar e



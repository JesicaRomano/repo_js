//tirar dos dados y que salga doble 5. Tiene 3 intentos

let inputValue1 = Number(prompt('Tire el dado 1 y saque 5'));
let inputValue2 = Number(prompt('Tire el dado 2 y saque 5'));
let counter = 0;

while((inputValue1 !==5 || inputValue2 !==5) && counter !==2){
    console.log("Mala suerte, no obtuvo doble 5.");
    inputValue1 = Number(prompt('Tire el dado 1'));
    inputValue2 = Number(prompt('Tire el dado 2'));
    counter++;
}
if(counter<2){
    alert('Felicitaciones, obtuvo doble 5 😁');
}else{
    alert('No puede seguir intentando ☹');
}




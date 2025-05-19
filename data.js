

function sommaArray (arr){

  let somma = 0
  for (i=0; i<arr.length;i++){
    somma = somma+arr[i]
  }
  return somma;
}

console.log(sommaArray([0,1,2,3,4,66,89]))


function sommaArray (arr){

  let somma = 0
  for (i=0; i<arr.length;i++){
    somma = somma+arr[i]
  }
  return somma;
}

console.log(sommaArray([0,1,2,3,4,66,89]))

function sommaArray (arr){

  let somma = 0
  for (i=0; i<arr.length;i++){
    somma = somma+arr[i]
  }
  return somma;
}

console.log(sommaArray([0,1,2,3,4,66,89]))

function sommaArray (arr){

  let somma = 0
  for (i=0; i<arr.length;i++){
    somma = somma+arr[i]
  }
  return somma;
}

console.log(sommaArray([0,1,2,3,4,66,89]))

function tabell (n){

  for (i=0; i<n;i++){
    console.log(`${i}X${i}=${i*i}`)
  }
}

tabell(10);

const button = document.getElementById('button')

button.onclick = function saluto (){
  alert('CIAO!')
}

function vocalcounter (string){
  
  let counter = 0
  for (i=0; i<string.length;i++){
      if (string[i] == 'a' || string[i] == 'e' || string[i] == 'i' || string[i] == 'o' || string[i] == 'u'){
    counter++;
  }
  }
 

  return counter;
}

console.log(vocalcounter('ciao'))

const numerino = document.getElementById('numerino')
const numerone = document.getElementById('numerone')
const diminuire = document.getElementById('diminuire')
const aggiungi = document.getElementById('aggiungi')
let counterB = 0
let counterm = 0

function counterp(){

  counterB++;
  counterm++;

  return{
    counterB,
    counterm
  };
}

function counters(){
  counterB--;
  counterm++;
  if (counterB < 0){
    counterB = 0
  }

   return{
    counterB,
    counterm
  };
}

diminuire.addEventListener('click', ()=>{
  counters();
  numerino.innerHTML = counterm;
  numerone.innerHTML = counterB;
})

aggiungi.addEventListener('click', ()=>{
  counterp();
  numerino.innerHTML = counterm;
  numerone.innerHTML = counterB;
})


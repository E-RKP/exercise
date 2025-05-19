

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
const azzera = document.getElementById('buttonn')
const popup = document.getElementById('popup')
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


azzera.onclick = function azzera (){

  counterB = 0
  counterm = 0
  numerino.innerHTML = counterm;
  numerone.innerHTML = counterB;
  
}

const numerozero = document.getElementById('numero0')
const numerouno = document.getElementById('numero1')
const numerodue = document.getElementById('numero2')
const numerotre = document.getElementById('numero3')
const numeroquattro = document.getElementById('numero4')
const numerocinque = document.getElementById('numero5')
const numerosei = document.getElementById('numero6')
const numerosette = document.getElementById('numero7')
const numerootto = document.getElementById('numero8')
const numeronove = document.getElementById('numero9')

function somma (a,b){

  return a+b;
}

const numeroa = document.getElementById('om')
const numerob = document.getElementById('on')
const sommer = document.getElementById('somma')
const menus = document.getElementById('menos')
const moltiplicazionee = document.getElementById ('moltiplicazione')
const divisionee = document.getElementById('divisione')
const risultante = document.getElementById('lol')


function somma (a,b){
return a+b;
}
function sottrazione (a,b){
return a-b;
}
function divisione (a,b){
return a/b;
}
function moltiplicazione (a,b){
return a*b;
}

sommer.addEventListener('click', ()=>{
  risultante.textContent = ` il risultato è ${(somma(Number(numeroa.value), Number(numerob.value)))}`
  
})

menus.addEventListener('click', ()=>{
  risultante.textContent = `il risultato della sottrazione è ${sottrazione(Number(numeroa.value), Number(numerob.value))}`
})

divisionee.addEventListener('click', ()=>{
  risultante.textContent = `il risultato della divisione è ${divisione (Number(numeroa.value), Number(numerob.value))}`
})

moltiplicazionee.addEventListener('click', ()=>{
  risultante.textContent = `il risultato della moltiplicazione è ${moltiplicazione (Number(numeroa.value), Number(numerob.value))}`
})
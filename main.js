import countries from "./data.js";

const dataCountries = countries;

const doc = document;

const firstBtn = doc.querySelector('#btn__init--letter'); 
const secondBtn = doc.querySelector('#btn__any--word');
const thirdBtn = doc.querySelector('#btn__alfabetical--order');


const containerGral = doc.querySelector('.container-gral');
const numberCountries = doc.querySelector('#number-count');
numberCountries.append(dataCountries.length) 

const btn = doc.querySelector('.btn');

const input = doc.querySelector('#input');
let p = doc.createElement('p')
p.classList.add('p-insert')


let paises = [];
const startingWord = () => {
dataCountries.forEach((item) => {
  if(item.toLowerCase().startsWith(input.value.toLowerCase())){
    paises.push(item);
  }
  
})
containerGral.innerHTML = '';
for(let i = 0; i < paises.length; i++){

    containerGral.innerHTML += `
    <div id="country" class="country">
    <p class="name-paragraph">${paises[i]}</p>
    </div>
    `
  
  }
  if(paises.length > 1){
  p.innerHTML = ''
  p.innerHTML = `<p>Countries start with <span class="span-letra"> ${input.value}</span> are <span class="span-cantidad"> ${paises.length}</span>`
}else{
  p.innerHTML = `<p>Countries start with <span class="span-letra"> ${input.value}</span> is <span class="span-cantidad"> ${paises.length}</span>`
}
if(input.value === ''){
  p.innerHTML = ''
}

paises = [];


btn.insertAdjacentElement('beforebegin', p)
}



const includesAnyWord = () => {

  dataCountries.forEach((item) => {
    for(let i = 0; i < item.length; i++){
      if(item[i].toLowerCase().includes(input.value.toLowerCase())){
        paises.push(item)
      }
    }
  })


  containerGral.innerHTML = ''
  for(let i = 0; i < paises.length; i++){
    containerGral.innerHTML += `
     <div id="country" class="country">
     <p class="name-paragraph">${paises[i]}</p>
     </div>
     `
  
  }

  
  if(paises.length > 1){
  p.innerHTML = ''
  p.innerHTML = `<p>Countries start with <span class="span-letra"> ${input.value}</span> are <span class="span-cantidad"> ${paises.length}</span>`
}else{
  p.innerHTML = `<p>Countries start with <span class="span-letra"> ${input.value}</span> is <span class="span-cantidad"> ${paises.length}</span>`
}
if(input.value === ''){
  p.innerHTML = ''
}
paises = []
btn.insertAdjacentElement('beforebegin', p)
}


firstBtn.addEventListener('click', () => {
  firstBtn.classList.toggle('clicked')
  input.addEventListener('keyup', startingWord)
   startingWord()
 })

secondBtn.addEventListener('click', () =>{
  secondBtn.classList.toggle('clicked');
  
  includesAnyWord()
})

thirdBtn.addEventListener('click', () => {


  if(containerGral.classList.contains('container-reverse')){
    containerGral.classList.remove('container-reverse')
  }else{
    containerGral.classList.add('container-reverse')
  }

})
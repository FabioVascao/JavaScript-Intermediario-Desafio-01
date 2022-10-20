const buttonForest = document.querySelector('#forest')
const buttonRain = document.querySelector('#rain')
const buttonMarket = document.querySelector('#market')
const buttonFire = document.querySelector('#fire')

const buttonPressForest = new Audio("https://github.com/FabioVascao/JavaScript-Intermediario-Desafio-01/blob/main/sounds/Floresta.wav?raw=true")
const buttonPressRain = new Audio('https://github.com/FabioVascao/JavaScript-Intermediario-Desafio-01/blob/main/sounds/Chuva.wav?raw=true')
const buttonPressMarket = new Audio('https://github.com/FabioVascao/JavaScript-Intermediario-Desafio-01/blob/main/sounds/Cafeteria.wav?raw=true')
const buttonPressFire = new Audio('https://github.com/FabioVascao/JavaScript-Intermediario-Desafio-01/blob/main/sounds/Lareira.wav?raw=true')

function pressButtonForest() {
  buttonPressForest.play();
}

function pressButtonRain(){
  buttonPressRain.play();
}

function pressButtonMarket(){
  buttonPressMarket.play();
}

function pressButtonFire(){
  buttonPressFire.play();
}

buttonForest.addEventListener('click', function(){ 
  pressButtonForest();
})

buttonRain.addEventListener('click', function(){ 
  pressButtonRain();
})

buttonMarket.addEventListener('click', function(){ 
  pressButtonMarket();
})

buttonFire.addEventListener('click', function(){ 
  pressButtonFire();
})



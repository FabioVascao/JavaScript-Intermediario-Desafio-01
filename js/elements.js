const buttonForest = document.querySelector('#forest')
const buttonRain = document.querySelector('#rain')
const buttonMarket = document.querySelector('#market')
const buttonFire = document.querySelector('#fire')

const buttonPressForest = new Audio("https://github.com/FabioVascao/JavaScript-Intermediario-Desafio-01/blob/main/sounds/Floresta.wav?raw=true")
const buttonPressRain = new Audio('https://github.com/FabioVascao/JavaScript-Intermediario-Desafio-01/blob/main/sounds/Chuva.wav?raw=true')
const buttonPressMarket = new Audio('https://github.com/FabioVascao/JavaScript-Intermediario-Desafio-01/blob/main/sounds/Cafeteria.wav?raw=true')
const buttonPressFire = new Audio('https://github.com/FabioVascao/JavaScript-Intermediario-Desafio-01/blob/main/sounds/Lareira.wav?raw=true')

export {
  buttonForest,
  buttonRain,
  buttonMarket,
  buttonFire,
  buttonPressForest,
  buttonPressRain,
  buttonPressMarket,
  buttonPressFire
}
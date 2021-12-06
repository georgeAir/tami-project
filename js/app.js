console.log('tamagachi');


////////////////////////////// OBJECT ////////////////////////////////////////
class Tamagachi {
  constructor (name) {
    this.hunger= 4
    this.sleepiness= 5
    this.boredom= 1
    this.age=1
  }
  

}

const pet = new Tamagachi('steve')
console.log(pet);


////////////////////////////////// BUTTONS ///////////////////////////////////

const aButton = document.querySelector('.food')
const bButton = document.querySelector('.lights')
const cButton = document.querySelector('.play')

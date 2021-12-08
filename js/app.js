console.log('tamagachi');

////////////////////////////// Naming Your Pet////////////////////////////////////////
const petName = document.querySelector('.inputName')
const inputName = prompt ('What would you like to name your pet')
petName.innerText = `Pet Name: ${inputName}`

////////////////////////////// OBJECT and METHODS////////////////////////////////////////
class Tamagachi {
  constructor (name) {
    this.hunger= 2
    this.sleepiness= 5
    this.boredom= 1
    this.age=1
    // this.health = 10
    this.timer = 100
  }
  startGame(){
    const intervalID = setInterval(() => {
      // need to get the #timer element from the DOM
      // const timer = document.querySelector('#timer')
      // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText
      // timer.innerText = `timer: ${this.timer}s`


      //// accessing the DOM
      timer.innerText = `Timer: ${pet.timer}`
      hungerElement.innerText = `Hunger: ${pet.hunger}`
      sleepinessElement.innerText = `Sleepiness: ${pet.sleepiness}`
      boredomElement.innerText = `Boredom: ${pet.boredom}`
      // healthElement.innerText = `Health: ${pet.health}`



      // decrement the timer variables
      this.timer--
      this.hunger++
      this.age++
      this.sleepiness++
      this.boredom++


      if (this.timer <= 0) {
        clearInterval(intervalID)
        document.querySelector('#end').disabled = false
        aButton.disabled = true
        bButton.disabled = true
        cButton.disabled = true
        let endGame = alert('Thank You For Playing')
      }else if(this.hunger >= 15 && this.hunger <= 16){
        let feedPet = confirm('Your pet is too hungry. Please feed to continue')
      }else if(this.boredom >= 6 && this.boredom <= 7){
        let playWithPet = confirm('Your pet needs attention and wants to play.')
      } else if (){

      }

    }, 1000)
}
  Food(){
    console.log(`Your pets new hunger property is ${this.hunger}`);
    console.log(`Your pets new sleepiness property is ${this.sleepiness}`);
      this.hunger--
      this.sleepiness++
      if (this.hunger <= 0) {
        console.log('Your pet has died!');
      }
  }

  lights(){
    daytimeImage.classList.add('daytime')
    nighttime.classList.remove('nighttime')
    nighttime.classList.add('nighttime')
    daytimeImage.classList.remove('daytime')

  }

  play(){
    console.log(`Your pets new boredom property is ${this.boredom}`);
    console.log(`Your pets new sleepiness property is ${this.sleepiness}`);
    this.boredom--
    this.sleepiness++
    if (this.boredom <= 0) {
    }
  }
  increaseAge(){
    if (this.age < 10){
      this.age++
    }

  }

}

const pet = new Tamagachi(inputName)
console.log(pet);


////////////////////////////////// BUTTONS and VARIABLES ///////////////////////////////////

const beginButton = document.querySelector('#begin')
const aButton = document.querySelector('.food')
const bButton = document.querySelector('.lights')
const cButton = document.querySelector('.play')

const daytimeImage = document.querySelector('.daytime');
const nighttime = document.querySelector('.nighttime');

const timer = document.querySelector('#timer')
// timer.innerText = `Timer: ${pet.timer}`

const hungerElement = document.querySelector('.hunger')
// hungerElement.innerText = `Hunger: ${pet.hunger}`

const sleepinessElement = document.querySelector('.sleepiness')
// sleepinessElement.innerText = `Sleepiness: ${pet.sleepiness}`

const boredomElement = document.querySelector('.boredom')
// boredomElement.innerText = `Boredom: ${pet.boredom}`

const healthElement = document.querySelector('.health')
// healthElement.innerText = `Health: ${pet.health}`


////////////////////////////////// EVENT LISTENERS ///////////////////////////////////

beginButton.addEventListener('click', (event) => {
  event.target.disabled = true
  pet.startGame()

})


aButton.addEventListener('click', (event) => {
  // event.target.disabled = true

  pet.Food()
  hungerElement.innerText = `Hunger: ${pet.hunger}`

  if(pet.timer <= 0){
    event.target.disabled = true
  }

})


bButton.addEventListener('click', (event) => {
  if(pet.timer <= 0){
    event.target.disabled = true
  }
})

cButton.addEventListener('click', (event) => {
  // event.target.disabled = true
  pet.play()
  boredomElement.innerText = `Boredom: ${pet.boredom}`

  if(pet.timer <= 0){
    event.target.disabled = true
  }
})

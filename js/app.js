console.log('tamagachi');

////////////////////////////// Naming Your Pet////////////////////////////////////////
const petName = document.querySelector('.inputName')
const inputName = prompt ('What would you like to name your pet')
petName.innerText = `Pet Name: ${inputName}`
////////////////////////////// OBJECT and METHODS////////////////////////////////////////
class Tamagachi {
  constructor (name) {
    this.hunger= 2
    this.sleepiness= 1
    this.boredom= 1
    this.age=1
    // this.health = 10
    this.timer = 100
  }
  startGame(){
    const intervalID = setInterval(() => {

      // healthElement.innerText = `Health: ${pet.health}`
      // decrement the timer variables
      this.timer--
      this.hunger++
      this.sleepiness++
      this.boredom++


      //// accessing the DOM
      timer.innerText = `Timer: ${pet.timer}`
      hungerElement.innerText = `Hunger: ${pet.hunger}`
      sleepinessElement.innerText = `Sleepiness: ${pet.sleepiness}`
      boredomElement.innerText = `Boredom: ${pet.boredom}`
      ageElement.innerText = `Current Age: ${pet.age}`



      if (this.timer <= 0 || this.hunger >= 10 || this.sleepiness >= 10 || this.boredom >= 10) {
        clearInterval(intervalID)
        document.querySelector('#end').disabled = false
        aButton.disabled = true
        bButton.disabled = true
        cButton.disabled = true
        let endGame = alert('Thank You For Playing')
      }else if(this.hunger >= 7 && this.hunger <= 8){
        let feedPet = confirm('Your pet is too hungry. Please feed to continue')
      }else if(this.boredom >= 3 && this.boredom <= 3){
        let playWithPet = confirm('Your pet needs attention and wants to play.')
      } else if(this.sleepiness >= 4 && this.sleepiness <= 4){
        let timeToSleep = confirm('Your pet looks sleepy. Turn off the lights so it can rest.')
      }
    }, 2000)
}
  Food(){
    console.log(`Your pets new hunger property is ${this.hunger}`);
    console.log(`Your pets new sleepiness property is ${this.sleepiness}`);
      this.hunger--
      // this.sleepiness++
  }

  lights(){
    console.log('lights');

  }

  play(){
    console.log(`Your pets new boredom property is ${this.boredom}`);
    console.log(`Your pets new sleepiness property is ${this.sleepiness}`);
    this.boredom--
    this.sleepiness++
  }
  ageIncrease(){
    const levelUp = setInterval(() => {
      this.age++
    }, 6000)

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

const ageElement = document.querySelector('.age')
// ageElement.innerText = `Current Age: ${pet.age}`

////////////////////////////////// EVENT LISTENERS ///////////////////////////////////

beginButton.addEventListener('click', (event) => {
  event.target.disabled = true
  pet.startGame()
  pet.ageIncrease()
})


aButton.addEventListener('click', (event) => {

  pet.Food()
  hungerElement.innerText = `Hunger: ${pet.hunger}`

})


bButton.addEventListener('click', (event) => {
  document.querySelector('#background').style.opacity = "75%";
})

cButton.addEventListener('click', (event) => {
  // event.target.disabled = true
  pet.play()
  boredomElement.innerText = `Boredom: ${pet.boredom}`

})

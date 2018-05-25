// Talk about programming languages
// How javascript works- dynamically typed vs strongly typed
// Data Structures - Arrays and Objects
// Function
var sayHi = function(greeting) {
  console.log(greeting + ', how are you? I hope your having a good day.')
}

// Variables- a variable can be thought of like a bucket.
var bmw = 'bmw 5Series'
var audi = 'audi a8'
var dodge = 'dodge challenger'

// Arrays - are a list of values

var cars = ['bmw','audi','dodge']

// Loops - a loop is a construct that allows me to repeat a specified task.
for (var x=0; x<cars.length; x++) {
  if(cars[x] == 'bmw') {
    console.log(bmw)
    sayHi('Hola')
  }
  if(cars[x] == 'audi') {
    console.log(audi)
  }
  if(cars[x] == 'dodge') {
    console.log(dodge)
  }
}

sayHi('Sup')

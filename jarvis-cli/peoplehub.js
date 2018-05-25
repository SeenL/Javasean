// Import Sean.js into the people class

var Person = require('./person.js')


let Sean = new Person({type:'outgoing'})	  
let Kaela = new Person({type:'introverted'})  
let Zoe = new Person({type:'outgoing'})  
let Maddie = new Person({type:'outgoing'})


Sean.sayHi()
Kaela.sayHi()
Zoe.sayHi()
Maddie.sayHi()

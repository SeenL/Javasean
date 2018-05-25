// object oriented programming using js
//Need to create a class as well, like an advanced object


//Example of a Sean  object
//var sean = {
// name: "Sean Lataker",
//want the program to do something with a function
// sayHi: function() {
//console.log('sup')
//}
//}

//sean.sayHi()

//need to call function by adding brackets

//Sean clas examples


class Person{
constructor(personality) {

 this.personality_type = personality.type
  //constructor = can define the class/blueprintand can define them and what they do

}

sayHi() {

 if (this.personality_type == 'outgoing'){
    console.log('Hi! How are you!?')
    }
 if (this.personality_type == 'introverted'){
    console.log('Hi...')
   }
 
  }
}



module.exports = Person 

 //makes class available in another folder











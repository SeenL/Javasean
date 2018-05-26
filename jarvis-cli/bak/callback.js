
 let sayHi = function() {
  console.log('hi')
 
}
let sayBye = function(callback) {
setTimeout(function() {
  console.log('bye')
  callback()
  },2000)
}

sayHi()
sayBye(function(){
  console.log('...')
})


/* setTimeout(function() {
  console.log('bye')
},5000)
*/



//Synchronous and Asynchronous

//Synchronous - Will wait until step 1 is completed, then go down from there... in order

//step1
//step2
//step3

//Callback Functions - Higher ordered functions - Funcrtions that is passed to another function as a parameter, and then executed within that function. Are functions that are called after the execution of a specific process



//Asynchroonous factors in time if an operation takes more time, it will not wait for the operation, will block everything else from being executed 

//Promises -

//sayHi()
//.then(console.log())
//.then






  

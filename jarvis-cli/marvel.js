var api = require('marvel-api') 

  class Marvel{
    constructor(config) {
 this.marvel = api.createClient({
  publicKey : config.publicKey,
  privateKey : config.privateKey
  });



}

 /* getFirst100() {
  this.marvel.characters.findAll(100)
   .then(function(res) {
   for (var index = 0; index < res.data.length; index++) {
   console.log((index + 1) + ' ' + res.data[index].name)
   }
  })
   .fail(console.error)
   .done();

   
}

*/ 
 
 getSpiderman(){
 this.marvel.characters.findByName('spider-man')
  .then(console.log)
  .fail(console.error)
  .done();
}
getThor(){

 this.marvel.characters.findByName('thor')
  .then(console.log)
  .fail(console.error)
  .done();

}

getFalcon(){

 this.marvel.characters.findByName('falcon')
  .then(console.log)
  .fail(console.error)
  .done();

}


getHulk(){

 this.marvel.characters.findByName('hulk')
  .then(console.log)
  .fail(console.error)
  .done();

} 

getQuicksilver(){

 this.marvel.characters.findByName('quicksilver')
  .then(console.log)
  .fail(console.error)
  .done();

}

 
getHawkeye(){

 this.marvel.characters.findByName('hawkeye')
  .then(console.log)
  .fail(console.error)
  .done();

} 

getVision(){

 this.marvel.characters.findByName('vision')
  .then(console.log)
  .fail(console.error)
  .done();

} 

getWasp(){

 this.marvel.characters.findByName('wasp')
  .then(console.log)
  .fail(console.error)
  .done();

}

}  

module.exports = Marvel                    

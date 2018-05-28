var api = require('marvel-api') 



 var marvel = api.createClient({
   publicKey : 'd4d99791cfab71966cc8545ad4fbc6d2',
   privateKey : 'ccfe3ec34335993e9d48dcc47901e80ee7362536'
   });

  class Marvel{
    constructor(){


}

  getFirst100() {
  marvel.characters.findAll(100)
   .then(function(res) {
   for (var index = 0; index < res.data.length; index++) {
   console.log((index + 1) + ' ' + res.data[index].name)
   }
  })
   .fail(console.error)
   .done();

   }
}  

module.exports = Marvel                    

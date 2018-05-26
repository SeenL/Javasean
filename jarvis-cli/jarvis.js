#!/usr/bin/env node 
var api = require('marvel-api')
 var program = require('commander')
 var colors = require('colors')
 
var marvel = api.createClient({
  publicKey: 'd4d99791cfab71966cc8545ad4fbc6d2'
, privateKey: 'ccfe3ec34335993e9d48dcc47901e80ee7362536'
});


  program
  .version('0.1.0')
  .option('-p, --peppers', 'Add peppers')
  .option('-P, --pineapple', 'Add pineapple')
  .option('-b, --bbq-sauce', 'Add bbq sauce')
  .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
  .parse(process.argv);
 
marvel.characters.findAll(30)
  .then(function(res){
  for (var index = 0; index < res.data.length; index++) {

  
   console.log((index + 1) + ' ' + res.data[index].name)
   }
  })
  .fail(console.error)
  .done();

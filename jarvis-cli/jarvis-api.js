let express = require('express')
let app = express()
let Marvel = require('./avengers')


app.use(function(req, res, next){
 res.header("Access-Control-Allow-Origin", "*")
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
 next()
})


app.get('/', function(request,response) {

 var avengers = new Marvel({
 publicKey : 'd4d99791cfab71966cc8545ad4fbc6d2',
 privateKey : 'ccfe3ec34335993e9d48dcc47901e80ee7362536'
 })
 avengers.assemble(function(avengers){
  response.send(JSON.parse(avengers))
})

})

app.listen('4000', function() {
  console.log('running on port 4000')
})

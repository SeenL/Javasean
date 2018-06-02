// we need a button to click
// we need a function to go and hit my jarvis api - using XMLHttpRequest
//<button onclick="myFunction()">Click me</button>
 

 var getAvengers = function() {
  var req = new XMLHttpRequest()
  req.onreadystatechange = function() {
   if(this.readyState == 4){
     console.log(JSON.parse(this.responseText))

     }
   }
     req.open('Get', 'http://localhost:4000')
     req.send()
 }

//HTTP Verbs GET = Read Data, POST = Give Data (Write Data), PUT = Update data, DELETE = Deletes data


 var content = document.getElementById('content')
 var button = document.createElement('button')
 button.onclick = getAvengers 
 button.innerHTML = 'Get Avengers'

// Add a w3 CSS card with Image
var card = document.createElement('div')
card.className = 'w3-card-4'
var img = document.createElement('img')
img.src = '/assets/littlehulk.png'
card.append(img) 
var cardContainer = document.createElement('div')
cardContainer.className = 'w3-container w3-center'

 


 var h1 = document.createElement('h2')
 h1.innerHTML = 'Avengers Assemble' 
 content.appendChild(h1)
 content.append(card)
 content.append(button)
 
 

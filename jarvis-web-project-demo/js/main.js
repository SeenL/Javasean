//// we need a button to click
// we need a function to go and hit my jarvis api - using XMLHttpRequest
//<button onclick="myFunction()">Click me</button>


 
 var createCard = function(arr) {
 for (var x=0; x<arr.length; x++){
var card = document.createElement('div')
 card.style.width = '25%'
 card.className = 'w3-card-4'
 var img = document.createElement('img')
 if(arr[x].name == 'Hulk'){


  img.src = '/assets/littlehulk.png'
 }
 card.append(img)
 var cardContainer = document.createElement('div')
 cardContainer.className = 'w3-container w3-center'
 card.append(cardContainer) 
 var note = document.createElement('p')
 note.innerHTML = arr[x].description
 cardContainer.append(note)


 content.append(card)


  }

 }
 var getAvengers = function() {
  var req = new XMLHttpRequest()
  req.onreadystatechange = function() {
   if(this.readyState == 4){
     createCard(JSON.parse(this.responseText)) 
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



 var h1 = document.createElement('h2')
 h1.innerHTML = 'Avengers Assemble' 
 content.appendChild(h1)
 content.append(button)
 
 

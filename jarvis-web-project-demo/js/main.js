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

 var h1 = document.createElement('h2')
 h1.innerHTML = 'Avengers Assemble' 
 content.appendChild(h1)
 content.append(button)

 

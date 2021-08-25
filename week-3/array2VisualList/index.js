for (i = 0; i < 10; i++){
    var h1 = document.createElement('h1')
    h1.textContent = "Hello World"
    document.body.appendChild(h1).style.color='red'; 
}
const names = ["steve", "larry", "joe", "shirley", "steph", "nate", "rick", "emily"];
var newName = document.createElement('ul');
for(i = 0; i < names.length; i++){
    document.body.appendChild(newName).innerHTML += '<li>' + names[i] 
}
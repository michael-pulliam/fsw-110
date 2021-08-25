//NavBar
let navBar = document.createElement("nav")
document.body.appendChild(navBar);

let anchor = document.createElement("a")
anchor.textContent = "Home "
navBar.appendChild(anchor);
anchor.href = "index.html";

let anchor2 = document.createElement("a")
anchor2.textContent = " Resource"
navBar.appendChild(anchor2);
anchor2.href = "index2.html"

//Header
let h1 = document.createElement("h1")
h1.textContent = "Hello FSW-100"
document.body.appendChild(h1);

//Paragragh
let para = document.createElement("p")
para.textContent = "JavaScript isn't easy, but I love working with JavaScript!"
document.body.appendChild(para);

//List
let list = document.createElement("ol");
document.body.appendChild(list);

let item1 = document.createElement("li")
    item1.textContent = "First on the list"

let item2 = document.createElement("li")
    item2.textContent = "Second on the list"

list.appendChild(item1);
list.appendChild(item2);

//footer
let footer = document.createElement("footer")
footer.textContent = "This is my first footer"
document.body.appendChild(footer)


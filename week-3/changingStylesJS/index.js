for (i = 0; i < 5; i++){
var list = document.createElement("h2");
list.textContent = "This is how you change a style in JavaScript!!"
list.setAttribute("style", "Font-size: 20px; Font-weight: lighter; Font-family: sans-serif; Color: cornflowerblue")
list.setAttribute("class", "border")
document.body.appendChild(list)
}
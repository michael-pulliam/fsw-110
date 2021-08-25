var button = document.createElement("button");
document.body.appendChild(button);

document.addEventListener("DOMContentLoaded", function(){
    document.body.appendChild(button).style.backgroundColor = "black";
});
document.addEventListener("mousedown", function(){
    document.body.appendChild(button).style.backgroundColor = "yellow";
});
document.addEventListener("mouseup", function(){
    document.body.appendChild(button).style.backgroundColor = "blue";
});
document.addEventListener("mouseover", function(){
    document.body.appendChild(button).style.backgroundColor = "green";
});
document.addEventListener("wheel", function(){
    document.body.appendChild(button).style.backgroundColor = "purple";
});
document.addEventListener("dblclick", function(){
    document.body.appendChild(button).style.backgroundColor = "red";
});

document.addEventListener("keypress", function (event) {
    
    if (event.key === "r") {
        document.body.appendChild(button).style.backgroundColor = "red";
    } else if (event.key === "g") {
        document.body.appendChild(button).style.backgroundColor = "green";
    }
    else if (event.key === "p") {
        document.body.appendChild(button).style.backgroundColor = "purple";
    }
    else if (event.key === "y") {
        document.body.appendChild(button).style.backgroundColor = "yellow";
    }
    else if (event.key === "b") {
        document.body.appendChild(button).style.backgroundColor = "blue";
    }
});


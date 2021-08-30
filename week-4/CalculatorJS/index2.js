
function calc() {
    let num1 = Number(document.querySelector("#num1").value);
    let num2 = Number(document.querySelector("#num2").value);
    let num3 = Number(document.querySelector("#num3").value);
    let num4 = Number(document.querySelector("#num4").value);
    let num5 = Number(document.querySelector("#num5").value);
    let num6 = Number(document.querySelector("#num6").value);
    let add = num1 + num2;
    let sub = num3 - num4;
    let mult = num5 * num6;
    document.getElementById("add").value = add;
    document.getElementById("sub").value = sub;
    document.getElementById("mult").value = mult;
    
}

/*
function addition (num1, num2){
    return(num1+num2);
}
function subtraction (num1, num2){
    return(num1-num2);
}
function multiplication (num1, num2){
    return(num1*num2);
}​
document.getElementById("add").addEventListener("click", function(){
    document.getElementById("answer").textContent = addition(Number(document.getElementById("firstnum").value), Number(document.getElementById("secondnum").value));
})
document.getElementById("sub").addEventListener("click", function(){
    document.getElementById("answer").textContent = subtraction(Number(document.getElementById("firstnum2").value), Number(document.getElementById("secondnum2").value));
})
document.getElementById("mult").addEventListener("click", function(){
    document.getElementById("answer").textContent = multiplication(Number(document.getElementById("firstnum3").value), Number(document.getElementById("secondnum3").value));
})
​*/
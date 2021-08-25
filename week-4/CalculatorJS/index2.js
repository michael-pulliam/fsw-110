
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
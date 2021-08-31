

function myFunction(){
    var input = document.getElementById("name").value
    var last = document.getElementById("last").value
    var age = document.getElementById("age").value
    let userExperience = document.getElementById("rating").value

    const rbs = document.querySelectorAll('input[name="newShopper"]');
//
    let firstTimeShopper;
    for (const rb of rbs) {
        if (rb.checked) {
            firstTimeShopper = rb.value;
            break;
        }
    }
    const form = document.form
    const checkedInputs = []
    
    for(let i = 0; i < form.vehicle.length; i++){
        if(form.vehicle[i].checked){
            checkedInputs.push(form.vehicle[i].value)
        }
    }
    /*
    var bike = document.getElementById("checkbox1").value;
    if (bike.checked === true){
        bike.checked = true;
    }else{
        bike.checked = false;
    }
    var car = document.getElementById("checkbox2").value;
    if (car.checked == true);
    var boat = document.getElementById("checkbox3").value;
    if (boat.checked === true);
*/



    alert(`First Name: ${input}\nLast Name: ${last}\n Age: ${age}\n First time Shopping with Us: ${firstTimeShopper}\n Rating: ${userExperience}\n Interested In: ${checkedInputs} `);
   
}


function myFunction(){
    //userInput firstName/lastName/Age
    var input = document.getElementById("name").value
    var last = document.getElementById("last").value
    var age = document.getElementById("age").value
    //select menu
    let userExperience = document.getElementById("rating").value
    //radio
    const rbs = document.querySelectorAll('input[name="newShopper"]');
    let firstTimeShopper;
    for (const rb of rbs) {
        if (rb.checked) {
            firstTimeShopper = rb.value;
            break;
        }
    }
    //checkbox
    const form = document.form
    const checkedInputs = []
    for(let i = 0; i < form.vehicle.length; i++){
        if(form.vehicle[i].checked){
            checkedInputs.push(form.vehicle[i].value)
        }
    }
    alert(`First Name: ${input}\nLast Name: ${last}\n Age: ${age}\n First time Shopping with Us: ${firstTimeShopper}\n Rating: ${userExperience}\n Interested In: ${checkedInputs} `);
   
}
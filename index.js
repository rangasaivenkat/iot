var state = false;

function toggleState() {
    state = !state;
    if (state == false) {
        console.log('Washing Machine is off');
        status_color.style.backgroundColor = 'red';
        status_text.innerHTML = 'OFF';
        desc.innerHTML = "The Washing machine is available for use."

    }
    else if (state == true) {
        console.log('Washing Machine is running');
        status_color.style.backgroundColor = 'green';
        status_text.innerHTML = 'ON';
        desc.innerHTML = "The Washing machine is busy."
    }
    return state;
}

var status_color = document.querySelector(".dot");
var status_text = document.getElementById
    ('status_text');
var desc = document.querySelector(".description");


const url = 'https://blynk.cloud/external/api/get?token=iS-vaaxXxW9BM6lm-zHk5BcgjjHNWvit&v0';
async function getWashingMachineStatus() {
    // const Http = new XMLHttpRequest();
    
    // Http.open("GET", url);
    // Http.send();
    
    // Http.onreadystatechange = (e) => {
    //     console.log(Http.responseText)
    // }
    const response = await fetch(url);
    const value = await response.json();
    console.log(value);
    if (value ==0) {
        console.log('Washing Machine is off');
        status_color.style.backgroundColor = 'red';
        status_text.innerHTML = 'OFF';
        desc.innerHTML = "The Washing machine is available for use."

    }
    else if (value==1) {
        console.log('Washing Machine is running');
        status_color.style.backgroundColor = 'green';
        status_text.innerHTML = 'ON';
        desc.innerHTML = "The Washing machine is busy."
    }

}

setInterval(getWashingMachineStatus, 1000);

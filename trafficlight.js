const lights = document.querySelectorAll(".light");

let current = 0;

function changeSignal() {

    lights.forEach(light => light.classList.remove("active"));

    lights[current].classList.add("active");

    current++;

    if(current > 2){

        current = 0;

    }

}

setInterval(changeSignal,3000);
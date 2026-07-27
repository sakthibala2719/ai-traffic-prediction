function updateStats(){

    document.getElementById("vehicles").innerHTML =
        Math.floor(Math.random()*600+1000);

    document.getElementById("congestion").innerHTML =
        Math.floor(Math.random()*40+50)+"%";

    document.getElementById("accidents").innerHTML =
        Math.floor(Math.random()*5);

    document.getElementById("speed").innerHTML =
        Math.floor(Math.random()*30+30)+" km/h";

}

setInterval(updateStats,3000);

updateStats();
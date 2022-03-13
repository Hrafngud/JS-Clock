let clock = document.getElementById("clock");
let time = document.getElementById("time")
let hour = document.getElementById("hour")

setInterval(function(){

    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);

setInterval(function(){

    let date = new Date();
    time.innerHTML = date.toLocaleDateString();
}, 1000);

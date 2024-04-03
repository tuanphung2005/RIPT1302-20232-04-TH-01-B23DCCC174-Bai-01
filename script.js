function clock() {
    
    full = false;
    var clock = new Date();

    var hours = clock.getHours();
    var minutes = clock.getMinutes();
    var seconds = clock.getSeconds();

    // if (hours > 12) {hours = hours - 12;}  

    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);


    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
    document.getElementById('period').textContent = period;

}

setInterval(clock, 1000)
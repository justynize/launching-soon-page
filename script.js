
let countDownDate;

if (localStorage.getItem("countDownDate")) {
    countDownDate = parseInt(localStorage.getItem("countDownDate"));
} else {
    // If not saved, set it to 30 days from now and save it
    countDownDate = new Date().getTime() + (30 * 24 * 60 * 60 * 1000);
    localStorage.setItem("countDownDate", countDownDate);
}

// Countdown Timer

var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    //Stop countdown and reset storage when done

    if (distance < 0) {
        clearInterval(x);
        localStorage.removeItem("countDownDate");
        document.querySelector(".launch-time").innerHTML = "Launched!";
    }
}, 1000);

function getGreeting() {
    var today = new Date();
    var hour = today.getHours();

    if (hour >= 6 && hour < 12) {
        return "God morgen";
    } else if (hour >= 12 && hour < 18) {
        return "God ettermiddag";
    } else {
        return "God kveld";
    }
}

function displayGreeting() {
    var greeting = getGreeting();
    document.getElementById("greeting").innerHTML = greeting;
}
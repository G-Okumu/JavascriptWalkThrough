let displayMeOnScreen = document.getElementById("placeOfName");

function alertMe() {
    alert("Muraya is learning Javascript and HTMl today");
}

function collectNumber() {
    prompt("Enter phone number");
}

function collectsUserNameAndDisplaysItOnScreen() {
    let yourName = prompt("Enter your Name");
    if (yourName === "Muraya") {
        displayMeOnScreen.innerHTML = "This is your real name " + yourName;
    } else {
        displayMeOnScreen.innerHTML = yourName + " Oooooops! Not your real name ";
    }
}

function addTemps() {
    let temp1 = parseInt(prompt("Enter Number 1"));
    let temp2 = parseInt(prompt("Enter number 2"));
    let result = temp1 + temp2;

    if (result > 40) {
        alert("Kindly wear sun glasses");
    } else if (result < 30) {
        alert("Kindly carry an umbrella it might rain");
    } else(
        alert("Unrecognized temp")
    )
    document.getElementById("result").innerHTML = "Total Temps = " + result;

}
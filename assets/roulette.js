const button = document.getElementById('button');
const button0 = document.getElementById('button0');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');
const button5 = document.getElementById('button5');
const button6 = document.getElementById('button6');
const button7 = document.getElementById('button7');
const button8 = document.getElementById('button8');
const button9 = document.getElementById('button9');
const button10 = document.getElementById('button10');
const button11 = document.getElementById('button11');
const button12 = document.getElementById('button12');
const button13 = document.getElementById('button13');
const button14 = document.getElementById('button14');


const cheatDiv = document.getElementById("cheat");
const timerDiv = document.getElementById("timer");
const out = document.getElementById("out");
const buttonDiv = document.getElementById("button_text");
const roulette_area = document.getElementById("roulette_area");


const numbers = {
    0: 525,
    1: 0,
    2: 150,
    3: 300,
    4: 450,
    5: 675,
    6: 825,
    7: 975,
    8: 1050,
    9: 900,
    10: 750,
    11: 600,
    12: 375,
    13: 225,
    14: 75,
};
let rolling = false;
let cheat = false;
let x = 999;






// Cheat Panel "Open-Close"

if (cheat == true) {
    cheatDiv.style.visibility = "visible";
    button.innerHTML = "Close Cheat Panel";
} else {
    cheatDiv.style.visibility = "hidden";
    button.innerHTML = "Open Cheat Panel";
}

button.addEventListener('click', function () {
    if (cheat == true) {
        cheatDiv.style.visibility = "hidden";
        button.innerHTML = "Open Cheat Panel";
        cheat = false;
    } else {
        cheatDiv.style.visibility = "visible";
        button.innerHTML = "Close Cheat Panel";
        cheat = true;
    }
});




// Cheat Panel Buttons Event

button0.addEventListener('click', function () { x = 0; });
button1.addEventListener('click', function () { x = 1; });
button2.addEventListener('click', function () { x = 2; });
button3.addEventListener('click', function () { x = 3; });
button4.addEventListener('click', function () { x = 4; });
button5.addEventListener('click', function () { x = 5; });
button6.addEventListener('click', function () { x = 6; });
button7.addEventListener('click', function () { x = 7; });
button8.addEventListener('click', function () { x = 8; });
button9.addEventListener('click', function () { x = 9; });
button10.addEventListener('click', function () { x = 10; });
button11.addEventListener('click', function () { x = 11; });
button12.addEventListener('click', function () { x = 12; });
button13.addEventListener('click', function () { x = 13; });
button14.addEventListener('click', function () { x = 14; });






// Roulete Spin Functions

function roll() {
    if (rolling == false) {
        rolling = true;



        if (x == 999) { number = Math.floor(Math.random() * 14); }
        else if (x == 0) { number = 0; }
        else if (x == 1) { number = 1; }
        else if (x == 2) { number = 2; }
        else if (x == 3) { number = 3; }
        else if (x == 4) { number = 4; }
        else if (x == 5) { number = 5; }
        else if (x == 6) { number = 6; }
        else if (x == 7) { number = 7; }
        else if (x == 8) { number = 8; }
        else if (x == 9) { number = 9; }
        else if (x == 10) { number = 10; }
        else if (x == 11) { number = 11; }
        else if (x == 12) { number = 12; }
        else if (x == 13) { number = 13; }
        else if (x == 14) { number = 14; }
        const cycles = Math.floor(randomKaanNumber(2, 4));                                                 //Generating the number 2 or 3 for the cylces. This is setting the number of rounds of the roulette.
        const scrollForNumber = randomKaanNumber(0, 72);                                                   //IDK how can i to explain it. I think you can understand. All blocks are 75px and the middle line is 3px...
        const scrollAmount = ((825 + numbers[number]) + scrollForNumber) + (1125 * cycles);                //Calculates how many pixels to return by combining all values                                                                                                                       */
        roulette_area.classList.remove("spin_animation");
        setTimeout(function () {
            roulette_area.classList.remove("spin_animation_back");
            roulette_area.classList.add("spin_animation");
            roulette_area.style.backgroundPositionX = "-262.5px";                                           //Turns the roulette green at the start of each round
            roulette_area.style.backgroundPositionX = "-" + scrollAmount + "px";                            //Rotates the roulette by the number of pixels found
            console.log("Number: " + number + " Scroll Amount: " + scrollAmount + " D: " + scrollForNumber + " Cycles: " + cycles);
        }, 10);


        setTimeout(function () { x = 999; }, 6000);
        rolling = false;
        timerDiv.style.width = "100%";
        timerDiv.style.opacity = "0";
        out.innerHTML = "IT'S " + number;



        setTimeout(function () { timerDiv.style.width = "0%"; }, 1);
        setTimeout(function () { out.style.opacity = "1"; out.style.animation = "out .5s ease-out forwards"; }, 6000);
        setTimeout(function () { out.style.opacity = "0" }, 7000);
        setTimeout(function () { out.style.animation = "" }, 7200);
    }
}

function loops() {
    setTimeout(function () { roulette_area.classList.remove("spin_animation"); roulette_area.classList.add("spin_animation_back"); roulette_area.style.backgroundPositionX = "-262.5px"; }, 3800);
    timerDiv.style.width = "0%";
    timerDiv.style.opacity = "1";
    setTimeout(function () { timerDiv.style.width = "100%" }, 1);
    setTimeout(roll, 5000);                              //The roll funtion works when timer finished
}

loops();                                                 //Starting LOOP
setInterval(loops, 12000);                               //1 tour total 12 seconds (5 seconds timer, 6 seconds roulette roll, 1 second "IT'S ..." text)

function randomKaanNumber(min, max) {
    return Math.random() * (max - min) + min;
}

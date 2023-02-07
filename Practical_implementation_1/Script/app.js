"use strict";

let nameUser = prompt("Hello, what's your name?", "");

alert(`Hello ${nameUser}, good afternoon.`);

let ageUser = prompt("How old are you?", "");

if (ageUser >= 18) {
    alert(`${nameUser} welcome to the website!`);
} else {
    alert("You are denied access!")
}
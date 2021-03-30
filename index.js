// import Darkmode from 'darkmode-js';
 
const header = document.getElementById("section1");
const headerTwo = document.getElementById("section2");
const profilePic = document.getElementById("profile-pic");

// function myFunction() {
//     document.getElementById("profile-pic").style.borderRadius = "55px";
//   }

profilePic.addEventListener("mouseover", (event) => {
    profilePic.style.borderRadius = "50%"
    profilePic.style.boxShadow = "0px 0px 20px rgb(0,0,0.9)"
    profilePic.style.filter = "grayscale(100%)"
    profilePic.style.transition = "1.5s";

});
profilePic.addEventListener("mouseout", (event) => {
    profilePic.style.borderRadius = "10px"
    profilePic.style.border = "none"
    profilePic.style.filter = "none"
    profilePic.style.boxShadow = "none"
    profilePic.style.transition = "1.5s";
});

header.addEventListener("mouseover", (event) => {
    header.classList.toggle("red");
    document.body.style.backgroundColor = "#f05454";
    document.body.style.transition = "2.5s";
});

header.addEventListener("mouseout", (event) => {
    document.body.style.transition = "2.5s";
    document.body.style.backgroundColor = "rgb(15, 15, 15";

});

headerTwo.addEventListener("mouseover", (event) => {

    document.body.style.backgroundColor = "#2b2e4a";
    document.body.style.transition = "2.5s";
});

headerTwo.addEventListener("mouseout", (event) => {
    document.body.style.transition = "1.5s";
    document.body.style.backgroundColor = "rgb(15, 15, 15";
});





// Test Below ->

// const anime = require('animejs');
// const h2 = document.getElementById("headerTwoo")

// h2.addEventListener("mouseover", (event) =>{
//     document.getElementById("headerTwoo").innerHTML = "This is who i am";
//   });

//   h2.addEventListener("mouseout", (event) =>{
//     document.getElementById("headerTwoo").innerHTML = "This is who i am and this is what i do";
//   });



// Dark mode function
// function addDarkmodeWidget() {
//     new Darkmode().showWidget();
//     option.backgroundColor = "red"
// }
// window.addEventListener('load', addDarkmodeWidget);
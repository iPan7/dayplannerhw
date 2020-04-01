// $(document).ready(function() {
// });
var tasks;

let d = new Date()

let year = d.getFullYear();
let month = d.getMonth()+1;
let day = d.getDate();

let output =
(month<10 ? '0' : '') + month + '/' +
(day<10 ? '0' : '') + day + '/' + year;

$('.date').text(output);

// create time and date at top

var eventField = [];

setup();
showEvent();
setColors ();

function setup (){
    eventField["0900"] = document.getElementById("0900");
    eventField["1000"] = document.getElementById("1000");
    eventField["1100"] = document.getElementById("1100");
    eventField["1200"] = document.getElementById("1200");
    eventField["1300"] = document.getElementById("1300");
    eventField["1400"] = document.getElementById("1400");
    eventField["1500"] = document.getElementById("1500");
    eventField["1600"] = document.getElementById("1600");
    eventField["1700"] = document.getElementById("1700");
}

function addEvent (clickId){
    console.log(clickId);
    if (clickId == "addEvent1"){
        alert(clickId);
        localStorage.setItem("0900",eventField["0900"].value);
    }
    else if (clickId == "addEvent2"){
        alert(clickId);
        localStorage.setItem("1000",eventField["1000"].value);
    }
    else if (clickId == "addEvent3"){
        alert(clickId);
        localStorage.setItem("1100",eventField["1100"].value);
    }
    else if (clickId == "addEvent4"){
        alert(clickId);
        localStorage.setItem("1200",eventField["1200"].value);
    }
    else if (clickId == "addEvent5"){
        alert(clickId);
        localStorage.setItem("1300",eventField["1300"].value);
    }
    else if (clickId == "addEvent6"){
        alert(clickId);
        localStorage.setItem("1400",eventField["1400"].value);
    }
    else if (clickId == "addEvent7"){
        alert(clickId);
        localStorage.setItem("1500",eventField["1500"].value);
    }
    else if (clickId == "addEvent8"){
        alert(clickId);
        localStorage.setItem("1600",eventField["1600"].value);
    }
    else if (clickId == "addEvent9"){
        alert(clickId);
        localStorage.setItem("1700",eventField["1700"].value);
    }
    console.log(localStorage);
}

function showEvent (){
    if (localStorage.getItem("0900") != null){
        eventField["0900"].value = localStorage.getItem("0900");
    }
    else if (localStorage.getItem("1000") != null){
        eventField["1000"].value = localStorage.getItem("1000");
    }
    else if (localStorage.getItem("1100") != null){
        eventField["1100"].value = localStorage.getItem("1100");
    }
    else if (localStorage.getItem("1200") != null){
        eventField["1200"].value = localStorage.getItem("1200");
    }
    else if (localStorage.getItem("1300") != null){
        eventField["1300"].value = localStorage.getItem("1300");
    }
    else if (localStorage.getItem("1400") != null){
        eventField["1400"].value = localStorage.getItem("1400");
    }
    else if (localStorage.getItem("1500") != null){
        eventField["1500"].value = localStorage.getItem("1500");
    }
    else if (localStorage.getItem("1600") != null){
        eventField["1600"].value = localStorage.getItem("1600");
    }
    else if (localStorage.getItem("1700") != null){
        eventField["1700"].value = localStorage.getItem("1700");
    }
}

function clearEvent (clickId){
    console.log(clickId);
    if (clickId == "clearEvent1"){
        alert(clickId);
        localStorage.removeItem("0900");
        eventField["0900"].value = null;
    }
    else if (clickId == "clearEvent2"){
        alert(clickId);
        localStorage.removeItem("1000");
        eventField["1000"].value = null;
    }
}

function setColors (){
    let time = moment().format('LT');
    let hour = time.split(":")[0];
    var AmPm = time.slice(-2);
    // var milTimeHour = hour + (AmPm == "PM" ? 12 : 0);
    var milTimeHour = 10;
console.log(milTimeHour);

    //check time
    //checking 0900
    if (milTimeHour > 9){
        eventField["0900"].classList.add("old");
    }
    else if (milTimeHour == 9){
        eventField["0900"].classList.add("current");
    }
    else {
        eventField["0900"].classList.add("new");
    }
    //checking 1000
    if (milTimeHour > 10){
        eventField["1000"].classList.add("old");
    }
    else if (milTimeHour == 10){
        eventField["1000"].classList.add("current");
    }
    else {
        eventField["1000"].classList.add("new");
    }
    //checking 1100
        if (milTimeHour > 11){
        eventField["1100"].classList.add("old");
    }
    else if (milTimeHour == 11){
        eventField["1100"].classList.add("current");
    }
    else {
        eventField["1100"].classList.add("new");
    }
    //checking 1200
        if (milTimeHour > 12){
        eventField["1200"].classList.add("old");
    }
    else if (milTimeHour == 12){
        eventField["1200"].classList.add("current");
    }
    else {
        eventField["1200"].classList.add("new");
    }
}
$(document).ready(function() {

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

//

// $( "" ).addClass( "green" );
// $(document).ready(function() {
// });

// var tasks = document.getElementById("tasks");
// let tasks = JSON.parse(localStorage.getItem("tasks"));
// localStorage.setItem("tasks")

// const saveBtn = document.getElementsByClassName("saveBtn");
addEvent1.addEventListener('click', addEvent, task1);
addEvent2.addEventListener('click', addEvent);
addEvent3.addEventListener('click', addEvent);
addEvent4.addEventListener('click', addEvent);
addEvent5.addEventListener('click', addEvent);
addEvent6.addEventListener('click', addEvent);
addEvent7.addEventListener('click', addEvent);
addEvent8.addEventListener('click', addEvent);
addEvent9.addEventListener('click', addEvent);

const field1 = document.querySelector("field1");

function task1(){
    console.log(task1);
    let field1_seriaized = JSON.stringify(field1)
    console.log(field1_seriaized);

    localStorage.setItem("field1", field1_serialized)
    console.log(localstorage);
}
let field1_deserialized = JSON.parse(localStorage.getItem("field1"));

console.log(field1_deserialized);

function addEvent(){
    alert("task saved!");
}


//   // function to update row color
//   function updateRowColor ($hourRow,hour) { 

//     if (test) { console.log("rowColor ",nowHour24, hour); }

//     if ( hour < nowHour24) {
//       // $hourRow.css('')
//       if (test) { console.log("lessThan"); }
//       $hourRow.css("background-color","lightgrey")
//     } else if ( hour > nowHour24) {
//       if (test) { console.log("greaterthan"); }
//       $hourRow.css("background-color","lightgreen")
//     } else {
//       if (test) { console.log("equal"); }
//       $hourRow.css("background-color","tomato")
//     }
//   };


//   // saves to local storage
//   // onclick function to listen for user clicks on plan area
//   $(document).on('click','i', function(event) {
//     event.preventDefault();  

//     if (test) { console.log('click pta before '+ planTextArr); }

//     let $index = $(this).attr('save-id');

//     let inputId = '#input-'+$index;
//     let $value = $(inputId).val();

//     planTextArr[$index] = $value;


//     if (test) { console.log('value ', $value); }
//     if (test) { console.log('index ', $index); }
//     if (test) { console.log('click pta after '+ planTextArr); }

//     // remove shawdow pulse class
//     $(`#saveid-${$index}`).removeClass('shadowPulse');
//     localStorage.setItem("storedPlans", JSON.stringify(planTextArr));
//   });  

});
// !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place. 

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments. 
"use strict";

var min=document.getElementById("number").min;
var max=document.getElementById("number").max;

function checknumber(){
  var value = document.getElementById("number").value;
  if (value<min||value>max) return alert("Age is not in the range");
}

function validatename(){
  var name= document.getElementById("name").value;
  var re = /\S/;
  if (!re.test(name)) return alert("You must put a valid name");
}
function validatemail(){
  var mail= document.getElementById("email").value;
  //alert(mail);
  var re = /\S+@\S+\.\S+/;
  if (!re.test(mail)) return alert("Wrong email address");
}
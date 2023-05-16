//The code in this file is based on how I thought through this challenge
//each submit button triggers the next step
//I used simple if-else logic for most of the code.


let startingMinutes = 1;
let time = startingMinutes * 60;
let coundownEl = document.getElementById('countdown');
let userNam = document.querySelector("#userNam");
let welcomeEle = document.querySelector("#welcomeEle");
let rulesOne = document.querySelector("#rules-one");
let rulesTwo = document.querySelector("#rules-two");
let headerText = document.querySelector("#headerText");
let greetingInput = document.querySelector("#greetingInput");
let quiz = document.querySelector("#quiz");
let answerA = document.querySelector("#answerA");
let answerB = document.querySelector("#answerB");
let answerC = document.querySelector("#answerC");
let answerD = document.querySelector("#answerD");
let question = document.querySelector("#question");
let qn1Button = document.querySelector("#qn1Button");
let qn2Button = document.querySelector("#qn2Button");
let qn3Button = document.querySelector("#qn3Button");
let qn4Button = document.querySelector("#qn4Button");
let qn5Button = document.querySelector("#qn5Button");
var saveButton = document.getElementById("save");
let playerName = document.getElementById("saved-name");
let playerScore = document.getElementById("saved-score");
let grades = document.getElementById("#grades");
let card = document.querySelector("#card");
let qnChoice = "";
let indexNumber = 0;
let score = 0;


//Array of questions

let questionList = [ 'Q1. Inside which HTML element do we put the JavaScript?', 
    'Q2. Where is the correct place to insert a JavaScript?',
    'Q3. How can you add a comment in a JavaScript?', 
    'Q4. Which event occurs when the user clicks on an HTML element?',
    'Q5. How do you declare a JavaScript variable?'
    
    
];

// Arrays with answers options

let aAnswerList = [ "a. script element", "a. in the HTML head", "a. by using *", "a. onclick", "a.VAR carName;" ];
let bAnswerList = [ "b. Inside a 'div' tag", "b. in the header", "b. using  #", "b. onmouseclick", "b. Variable carName;"  ];
let cAnswerList = [ "c. Inside a 'javascript' tag", "c. in a div tag", "c. using /" , "c.onchange", "c. v.carName; " ];
let dAnswerList = [ "d. inside a 'java' tag", "d. in the body", "d. using !", "d.onevent", "d. var carName;" ];

// In order to prevent these item from displaying initially, I used - style.display=none

quiz.style.display = "none";
qn1Button.style.display = "none";
qn2Button.style.display = "none";
qn3Button.style.display = "none";
qn4Button.style.display = "none";
qn5Button.style.display = "none";
saveButton.style.display = "none"
card.style.display = "none";


//Resets the questions and options after an answer has been clicked and submitted

function reset(){
    question.innerHTML= questionList[indexNumber];
    answerA.innerHTML = aAnswerList[indexNumber];
    answerB.innerHTML = bAnswerList[indexNumber];
    answerC.innerHTML = cAnswerList[indexNumber];
    answerD.innerHTML = dAnswerList[indexNumber];
    qn1Button.style.display = "none";
    qn2Button.style.display = "block";
    answerA.style.color = "rgb(68, 68, 68)";
    answerB.style.color = "rgb(68, 68, 68)";
    answerC.style.color = "rgb(68, 68, 68)";
    answerD.style.color = "rgb(68, 68, 68)";  
    
}

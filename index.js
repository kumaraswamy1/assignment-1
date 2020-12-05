let readlineSync = require("readline-sync");

let score = 0;


let userName = readlineSync.question("What's your name?");


console.log("\nWelcome👋 " + userName )
console.log("__________________________________\n")
console.log("\nAnswer few questions about me\n")

let highScores = [
  {
    name: "Niki",
    score: 20,
  },

  {
    name: "hamsa",
    score: 20,
  },
]

function play(question, answer) {
let userAnswer = readlineSync.question(question);

  if (userAnswer=== answer) { // branching
    console.log("right!");
    score = score + 10;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: " + score  +"\n");
 
}

let questions = [{
  question: "Where do I live? ",
  answer: "Bangalore"
}, {
  question: "Which University do I study? ",
  answer: "DSCE"
}]


for (let i=0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log("You SCORED: " + score);

console.log("Check out the scores")


for (let j=0; j<highScores.length; j++) {
 
console.log( highScores[j].name + ": " + highScores[j].score);
}



console.log("\nSend screenshot of your scores to me \n" + "Thank you" + " Have a nice day😄")
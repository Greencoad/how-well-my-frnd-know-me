var readlinesync = require("readline-sync");

var score = 0;
var username = readlinesync.question("what is your name: ");

console.log("welcome", username, "to How Well do you know me?");

function play(question, answer) {
  var useranswer = readlinesync.question(question);

  if (useranswer === answer) {
    console.log(" YaY..! you are Correct ");
    score = score+1;
  }
  else {
    console.log("Ohh..! you are incorrect ");
    score = score - 1;
  }
  console.log("your Current Score is :", score)
  console.log("*****************")
}
  var questions = [{
     question: "what is my Favorit colour (red/green/blue): ", answer: "green" }, { question: "What would I prefer (choclate/icecream): ", answer: "choclate" }, { question: "what is my favorit Bird(dove/owl/hornbill):", answer: "owl" }];

  for (var i = 0; i < questions.length; i++) {
    var currentquestion = questions[i];
    play(currentquestion.question, currentquestion.answer);
  }
  if(score === 3)
  {
    console.log("congratulation perfect score");
  }
  else
  {
    console.log(" you missed the perfect score")
  }
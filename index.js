const readlinesync=require('readline-sync');
const chalk=require('chalk');

console.log("JS Quiz App by Manpreet Singh");
console.log("Do you think you know Javascript?");
console.log("\n");

var username=readlinesync.question("What is your name?");
console.log("Welcome "+chalk.bgCyan.bold.white(username)+"!");
console.log("\n")
var yourscore=0;
function playJS(question,answer){
  var userAns=readlinesync.question(question);
  if(userAns.toUpperCase()===answer.toUpperCase()){
    yourscore++;
    console.log(chalk.blue("Your current score "+yourscore));
  }
  else{
    console.log(chalk.redBright("Wrong.."))
  }
 console.log("\n");
}

var questions=[{
  question:"Q 1 - Which of the following is true about typeof operator in JavaScript?\n A - The typeof is a unary operator that is placed before its single operand, which can be of any type.\nB - Its value is a string indicating the data type of the operand.\nC - Both of the above.\nD - None of the above.",
  answer:"c"
},
{
question:"Q 2 - Can you assign a anonymous function to a variable?\nA - true\nB - false",
answer:"a"
},
{
  question:"Q 3 - Which of the following type of variable takes precedence over other if names are same?\nA - global variable\nB - local variable \n C - Both of the above.\nD - None of the above.",
answer:"b"
},
{
  question:"Q 4 - Which of the following function of Number object formats a number with a specific number of digits to the right of the decimal?\nA - toExponential()\nB - toFixed()\nC - toPrecision()\nD - toLocaleString()",
  answer:"b"
},
{
  question:"Q 5 - Which of the following function of String object returns the primitive value of the specified object.\nA - toLocaleUpperCase()\nB - toUpperCase()\nC - toString()\nD - valueOf()",
  answer:"d"
}];

for(var i=0;i<questions.length;i++){
  playJS(questions[i].question,questions[i].answer);
}
if(yourscore==0){
  console.log(chalk.redBright("Its too bad...try again"));
}
var high_score=[
  {
    user:"Manpreet",
    score:4
  }
]

var count=high_score.length;
for(let i=0;i<high_score.length;i++){
  if(yourscore>=high_score[i].score)
  count--;
}
console.log(chalk.green("Your total score: "+yourscore));
if(count===0)
{
   console.log(chalk.bold.yellowBright("You beat the high score!"));
}








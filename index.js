var chalk = require('chalk')

console.log(chalk.blue(`Welcome to Prakash\'s Quiz\n`));

var readlineSync = require('readline-sync');

var score = 0;

var highScores = [
  {
    name: 'Pooja',
    score: 5
  },
  {
    name: 'Vimal',
    score: 7
  },
  {
    name: 'Glen',
    score: 3
  }
];
var name = readlineSync.question('Whats your name? ');

function welcome(){ 
  console.log(chalk.yellow.italic('\nWelcome '+name+', let\'s see how well do you know me\n' ));
}



function play(question, answer){
  var userAnswer = readlineSync.question(question);
  console.log('You entered ' + userAnswer);

  if (userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log(chalk.green.bold('You are right'));
    score++;
    boostMessage();
  }else{
    console.log(chalk.red.bold('You are wrong!\n' + chalk.green('Correct answer: ' + answer + '\n')));
  }
}

var questionAnswerList = [

  {
    question: `Q: Where do I live?
a: Mumbai
b: Mysore
c: Pune
d: Hyderabad 

Enter your answer here: `,
    answer: 'a'
  },

  {
    question: `Q: Am I a Doctor(yes/no)? 

Enter your answer here: `,
    answer: 'no'
  },
  
  {
  question: `Q: I can't live without 
a: Coffee
b: Boost
c: Tea

Enter your answer here: `,
  answer: 'c'
  },


  {
  question: `Q: What is my favourite sport? 
a: Hockey
b: Football
c: Badminton
d: None of the above

Enter your answer here: `,
  answer: 'b'
  },

  {
    question: `Q: What is the name of my engineering college? 
a: M.G.M
b: R.A.I.T
c: D.Y Patil
d: S.I.E.S
    
Enter your answer here: `,
    answer: 'd'
  }, 

  {
  question: `Q: Which is my favourite cuisine? 
a: Indian Chinese
b: Mughlai
c: Italian
d: All of the above

Enter your answer here: `,
  answer: 'd'
  },

  {
  question: `Q: Where do I work? 
a: BotLab Learning LLP
b: Embedded Mastrex InfoTech
c: IntelliCode
d: None of the above

Enter your answer here: `,
answer: 'a'
  },

  {
  question: `Q: What is my mother tongue?
a: Tamil
b: Telugu
c: Marathi
d: Malayalam 

Enter your answer here: `,
answer: 'b'
  },

  {
  question: `Q: Which one of the following is my home town? 
a: Maharashtra
b: Tamil Nadu
c: Andhra Pradesh
d: Telangana

Enter your answer here: `,
  answer: 'c'
  },

  {
  question: `Q: If I have to choose between Tea and Indian Chinese. What will I choose? 
a: Indian Chinese
b: Tea

Enter your answer here: `,
  answer: 'b'
  }
  
];


function boostMessage(){
  var msg = ['Woah, you know me well!!!', 'That was smooth!!!!','I am impressed!!', 'You are awesome...']

  var randomItem = msg[Math.floor(Math.random() * msg.length)];

  console.log(chalk.magenta(randomItem + '\n'));
}


function game(){
  for (var i=0; i<questionAnswerList.length; i++){
  var currentQuestion = questionAnswerList[i];
  play(currentQuestion.question, currentQuestion.answer)
}
}

function showScore(){
  console.log(chalk.red.bold('Yeah!! ' + name + ', your total score: ' + score));
}

function topScorer(){
  var leader = highScores[0].score
  for (var j=0; j<highScores.length; j++){
    if (leader < highScores[j].score){
      leader = highScores[j].score;
    }   
  }
  if (score > leader){
    console.log(chalk.green('Congratulations, you have beaten the previous high score!\nKindly send a screen shot of this message and I will update the leaders board'));
  }else{
    console.log(chalk.yellow(`Hope you had a great time playing the quiz.
You can try again anytime to beat the high score`));
    console.log('\nCheck out high score of some of our players');
    for (var j=0; j<highScores.length; j++){
    var currentValue = highScores[j];
    console.log(chalk.blue(currentValue.name + ' : ' + currentValue.score));
  }
  }
}

welcome();
game();
showScore();
topScorer();
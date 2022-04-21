/*Final Exam - Part 03*/
/*Samantha Duffy*/
var score = 0;
const myQuestions = [
    {
        question: "What is the meaning of JS?",
        answers: {a:"JavaScript", b:"HTML", c:"Style Sheets", d:"None"},
        correctAnswer: "a"
    },
    {
        question: "what is the meaning of HTML?",
        answers: { a:"JavaScript", b:"Nodes", c:"HyperText Markup Language", d:"Style Sheets"},
        correctAnswer: "c"
    },
    {
        question: "what is the meaning of CSS?",
        answers: { a: "HyperText Markup Language", b:"Nodes", c:"JavaScript", d:"Cascading Style Sheets"},
        correctAnswer: "d"
    },
    {
        question: "what is the meaning of SQL?",
        answers: { a: "HyperText Markup Language", b:"Nodes", c:"Structured Query Language", d:"Cascading Style Sheets"},
        correctAnswer: "c"
    },
    {
        question: "what is the meaning of PL?",
        answers: { a: "HyperText Markup Language", b:"Structured Query Language", c:"JavaScript", d:"Procedural Language"},
        correctAnswer: "d"
    },
];
for (var testQuestion in myQuestions){
    var yourAnswer = prompt(myQuestions[testQuestion].question + '\n'+
    'a)' + myQuestions[testQuestion].answers.a + '\n' +
    'b)' + myQuestions[testQuestion].answers.b + '\n' + 
    'c)' + myQuestions[testQuestion].answers.c + '\n' +
    'd)' + myQuestions[testQuestion].answers.d+ '\n');
if (yourAnswer == myQuestions[testQuestion].correctAnswer) {
    alert('Answer is Correct');
    score ++;
}
else {
    alert('Answer is wrong');
}
}
alert('Your Score is ' + score + '/' + myQuestions.length);

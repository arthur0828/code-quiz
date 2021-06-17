//DOM 
const timeDisplay = document.querySelector('#time-left');
const startBtn = document.querySelector('#start-btn');


//Timer Function
var timeLeft = 30
function countDown(){
    setInterval(function(){
    if(timeLeft <= 0 ){
        clearInterval(timeLeft = 0)
    }
    timeDisplay.innerHTML = timeLeft
            timeLeft -=1
    }, 1000)
}
    startBtn.addEventListener('click', countDown);



//Code Question Variables
var codeQuestions = [
    {
        question: "What does HTML Stand for?",
        answers: {
            a: 'Hyper Text Manual Language',
            b: 'Hyper Tool Markup Language',
            c: 'Hyper Text Markup Language',
            d: 'Hyper Tool Manual Language'
        },
        corectAnswer: 'c'
    },
    {
        question: "What does CSS Stand for?",
        answers: {
            a: 'Casscading Style Show', 
            b: 'Casscading Style Sheets',
            c: 'Casscading Style Symbols',
            d: 'Casscading Style Switch'
        },
        corectAnswer: 'b'
    }
];


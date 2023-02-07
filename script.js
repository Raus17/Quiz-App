const quizData = [
    {
        question : 'How old i am',
        a:'21',
        b:'17',
        c:'22',
        d:'25',
        correct : 'a'
    },
    {
        question : 'best programming language for beginner',
        a:'Java',
        b:'C',
        c:'C++',
        d:'Python',
        correct : 'a'
    },
    {
        question : 'PM Modi full name',
        a:'Narendra modi',
        b:'Narendra D modi',
        c:'Monkey D modi',
        d:'Nerandra damodar Das Modi',
        correct : 'd'
    },
    {
        question : 'Minimum Age for marriage',
        a:'21',
        b:'17',
        c:'22',
        d:'25',
        correct : 'a'
    },
    {
        question : 'Minimum age for voting in India',
        a:'21',
        b:'18',
        c:'22',
        d:'25',
        correct : 'b'
    },
    {
        question : 'How old i am',
        a:'21',
        b:'17',
        c:'22',
        d:'25',
        correct : 'a'
    }
]

const questionEl = document.getElementById('question')
const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById('quiz');
const  a_text = document.getElementById('a_text')
const  b_text = document.getElementById('b_text')
const  c_text = document.getElementById('c_text')
const  d_text = document.getElementById('d_text')

const submitBtm = document.getElementById('submit');

let currentQuiz = 0 ;
let score = 0;

loadQuiz();

function loadQuiz(){

    deselectAnswer();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.c;
    
}

function getSelected(){

    let answer = undefined;

    answerEls.forEach((answerEl) =>{
        if(answerEl.checked){
            answer =  answerEl.id;
        }
    });

    return answer;

}

function deselectAnswer(){
    answerEls.forEach((answerEl) =>{
        answerEl.checked = false;
    })
}

submitBtm.addEventListener('click' , ()=> {
    
    const answer = getSelected();

    console.log(answer)

    if(answer){

        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;

        if(currentQuiz < quizData.length - 1){
        loadQuiz();
        } else {
        // alert("You Finished");
        quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length -1} 
                            question</h2> <button onClick ="location.reload()">Reload</button>`
        }
    }
   
})
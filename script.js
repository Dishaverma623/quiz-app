const quizDB=[
    {
        question: "Q1: What is the full form of HTML?",
        a: "Hello to my land ",
        b: "Hy to my land",
        c: "Hypertext makeup language",
        d: "Hypertext markup language",
        ans: "ans4"
    },
    {
        question: "Q2: What is the full form of CSS?",
        a: "Cascading style sheets ",
        b: "Cascading style sheep",
        c: "Cartoon style sheet",
        d: "Cartoon super sheet",
        ans: "ans1"
    },
    {
        question: "Q3: What is the full form of HTTP?",
        a: "Hello to this place ",
        b: "Hy to this place",
        c: "Hypertext text protocol",
        d: "Hypertext transfer protocol",
        ans: "ans4"
    },
    {
        question: "Q4: What is the full form of JS?",
        a: "Javascript ",
        b: "Java special",
        c: "Javascripting",
        d: "Java searching",
        ans: "ans1"
    }
];
const question= document.querySelector(".question");
const option1= document.querySelector("#option1");
const option2= document.querySelector("#option2");
const option3= document.querySelector("#option3");
const option4= document.querySelector("#option4");
const submit= document.querySelector("#submit");

const answers= document.querySelectorAll(".answer");

const showscore= document.querySelector("#showscore");

let questionCount= 0;
let score= 0;
 
const loadQuestion = () =>{

    const questionList= quizDB[questionCount];
    
    question.innerText= questionList.question;

    option1.innerText= questionList.a;
    option2.innerText= questionList.b;
    option3.innerText= questionList.c;
    option4.innerText= questionList.d;

}
loadQuestion();

const getCheckAnswer = () =>{
    let answer;

  answers.forEach((curAnsElem) => {
     if(curAnsElem.checked){
        answer = curAnsElem.id;
     }
  });

  return answer;
};

const deselectAll = () =>{
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click', ()=>{
    const checkedAnswer = getCheckAnswer();

    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionCount].ans){
     score++;
    };

    questionCount++;

    deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    }else{

        showscore.innerHTML= `
        <h3> You Scored ${score}/${quizDB.length}</h3>
        <button class="btn" onclick="location.reload()">Play again</button
        `;

        showscore.classList.remove("scorearea")
    }
});
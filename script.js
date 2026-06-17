const questions = [



{



    question: "What does AI stand for?",



    answers: [



        { text: "Artificial Intelligence", correct: true },



        { text: "Automatic Internet", correct: false },



        { text: "Advanced Information", correct: false }



    ]



},



{



    question: "What is Machine Learning?",



    answers: [



        { text: "A type of AI", correct: true },



        { text: "A web browser", correct: false },



        { text: "A database", correct: false }



    ]



},



{



    question: "Which company created ChatGPT?",



    answers: [



        { text: "OpenAI", correct: true },



        { text: "Google", correct: false },



        { text: "Microsoft", correct: false }



    ]



},



{



    question: "What is an API?",



    answers: [



        { text: "A way for systems to communicate", correct: true },



        { text: "A programming language", correct: false },



        { text: "A web server", correct: false }



    ]



},



{



    question: "What does Frontend Development focus on?",



    answers: [



        { text: "User Interface", correct: true },



        { text: "Database Storage", correct: false },



        { text: "Network Cabling", correct: false }



    ]



}



];



const startBtn = document.getElementById("startBtn");



const quiz = document.getElementById("quiz");



const result = document.getElementById("result");



const questionElement = document.getElementById("question");



const answersElement = document.getElementById("answers");



const scoreElement = document.getElementById("score");



let currentQuestion = 0;



let score = 0;



startBtn.addEventListener("click", startQuiz);



function startQuiz() {



    startBtn.style.display = "none";



    quiz.style.display = "block";



    showQuestion();



}



function showQuestion() {



    answersElement.innerHTML = "";



    const q = questions[currentQuestion];



    questionElement.textContent = q.question;



    q.answers.forEach(answer => {



        const button = document.createElement("button");



        button.textContent = answer.text;



        button.classList.add("answer");



        button.addEventListener("click", () => {



            if (answer.correct) {



                score++;



            }



            currentQuestion++;



            if (currentQuestion < questions.length) {



                showQuestion();



            } else {



                showResult();



            }



        });



        answersElement.appendChild(button);



    });



}



function showResult() {



    quiz.style.display = "none";



    result.style.display = "block";



    scoreElement.textContent =



        `You scored ${score} out of ${questions.length}`;



}
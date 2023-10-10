const questions = [
    {
      question: "What is the capital of France?",
      answers: [
        { text: "Paris", correct: true },
        { text: "London", correct: false },
        { text: "Berlin", correct: false },
        { text: "Rome", correct: false }
      ]
    },
    {
      question: "Which planet is known as the Red Planet?",
      answers: [
        { text: "Mars", correct: true },
        { text: "Earth", correct: false },
        { text: "Venus", correct: false },
        { text: "Jupiter", correct: false }
      ]
    },
    {
      question: "What is the largest ocean in the world?",
      answers: [
        { text: "Pacific Ocean", correct: true },
        { text: "Atlantic Ocean", correct: false },
        { text: "Indian Ocean", correct: false },
        { text: "Arctic Ocean", correct: false }
      ]
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const questionElement = document.getElementById("question");
  const answerButtonsElement = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-btn");
  
  nextButton.addEventListener("click", showNextQuestion);
  
  function showNextQuestion() {
    const selectedAnswer = getSelectedAnswer();
  
    if (selectedAnswer && selectedAnswer.correct) {
      score++;
      selectedAnswer.button.classList.add("correct");
    } else if (selectedAnswer) {
      selectedAnswer.button.classList.add("incorrect");
    }
  
    currentQuestionIndex++;
  
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showQuestion() {
    const question = questions[currentQuestionIndex];
    questionElement.innerText = question.question;
    clearAnswerButtons();
  
    for (let i = 0; i < question.answers.length; i++) {
      const answer = question.answers[i];
      const button = document.createElement("button");
      button.innerText = answer.text;
      button.classList.add("btn");
      button.addEventListener("click", () => selectAnswer(answer, button));
      answerButtonsElement.appendChild(button);
    }
  
    nextButton.style.display = "none";
  }
  
  function selectAnswer(answer, button) {
    const selectedButtons = document.querySelectorAll(".btn.selected");
    selectedButtons.forEach((selectedButton) => {
      selectedButton.classList.remove("selected");
    });
  
    button.classList.add("selected");
  
    nextButton.style.display = "block";
  }
  
  function getSelectedAnswer() {
    const selectedButton = document.querySelector(".btn.selected");
  
    if (!selectedButton) {
      return null;
    }
  
    const question = questions[currentQuestionIndex];
    const selectedAnswer = question.answers.find(
      (answer) => answer.text === selectedButton.innerText
    );
  
    return { button: selectedButton, correct: selectedAnswer.correct };
  }
  
  function clearAnswerButtons() {
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
  }
  
  function showResult() {
    questionElement.innerText = `You scored ${score} out of ${questions.length}!`;
  
    nextButton.style.display = "none";
  }
  
  showQuestion();
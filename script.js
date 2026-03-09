import { techQA } from "./hint-ans.js";

const questionBank = [],
  answersBank = [],
  questionNuber = 10;

function loadHintsAndAnswers() {
  for (let i = 0; i < questionNuber; i++) {
    const ranNum = Math.floor(Math.random() * questionNuber);
    questionBank.push([techQA[ranNum].hint, techQA[ranNum].id]);
    answersBank.push([techQA[ranNum].answer, techQA[ranNum].id]);
  }

  createQuestionHTML();
  createAnswersHTML();
}

function createQuestionHTML() {
  let QuestionHTML = "";
  let answerHTML = "";
  questionBank.forEach((question) => {
    QuestionHTML += `
            <div class="box" data-id="${question[1]}">${question[0]}"</div>
        `;
  });
  document.getElementById("questions-container").innerHTML = QuestionHTML;
}

function createAnswersHTML() {
  let answerHTML = "";
  questionBank.forEach((answer) => {
    answerHTML += `
            <div class="box" data-id="${answer[1]}">${answer[0]}"</div>
        `;
  });
  document.getElementById("answers-container").innerHTML = answerHTML;
}

loadHintsAndAnswers();

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
}

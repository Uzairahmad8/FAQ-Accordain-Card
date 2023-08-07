"use strict";

const questions = document.querySelectorAll(".questionBox");

questions.forEach((question) => {
  question.addEventListener("click", function () {
    questions.forEach((question) => {
      question.classList.remove("active");
    });

    question.classList.toggle("active");
  });
});

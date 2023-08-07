"use strict";

const questions = document.querySelectorAll(".questionBox");

questions.forEach((question) => {
  question.addEventListener("click", function () {
    const isActive = question.classList.contains("active");

    questions.forEach((question) => {
      question.classList.remove("active");
    });

    if (!isActive) {
      question.classList.toggle("active");
    }
  });
});

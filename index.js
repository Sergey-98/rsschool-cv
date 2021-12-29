'use strict';
const showQuestion = document.querySelector('.show-question');
const question = document.querySelector('.question');
showQuestion.addEventListener('click', () => {
    question.classList.toggle('none');
});
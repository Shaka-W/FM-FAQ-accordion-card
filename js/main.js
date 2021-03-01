const questionsArrow = document.querySelectorAll('.card__body-arrow');
const answers = document.querySelectorAll('.card__body-answer');

// const arrayOfAnswers = Array.from(answers);
// console.log(arrayOfAnswers);

questionsArrow.forEach(question => {
  question.addEventListener('click', (e) => {
    e.target.parentElement.nextElementSibling.classList.toggle('card__body-answer-hide');
    e.target.classList.toggle('card__body-arrow-rotate');
  });
});
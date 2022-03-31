const scores = document.querySelectorAll('.score');
const submitBtn = document.querySelector('.submit-btn');
const thankYouMessage = document.querySelector('.thankyou-card');
const finalScore = document.querySelector('.thankyou-card .result span');

let selectedScore;

scores.forEach((score, i) => {
    score.addEventListener('click', () => {
        score.classList.add('selected');
        selectedScore = score.textContent;
        scores.forEach((scr, idx) => {
            if (idx !== i && scr.classList.contains('selected')) {
                scr.classList.remove('selected');
            }
        });
    });
});

submitBtn.addEventListener('click', () => {
    thankYouMessage.classList.add('show');
    finalScore.textContent = selectedScore;
});
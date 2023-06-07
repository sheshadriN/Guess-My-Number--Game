'use strict'
let highscore = 0;
console.log(document.querySelector('.message').textContent);

let secretnumber = Math.trunc(Math.random() * 20) + 1;
print(secretnumber);
/*var secretnumber = document.querySelector('.again').addEventListener('click', function() {
    Math.round(Math.random() * 20);
    score = 20;
});
*/
function print(a) {
    console.log(a);
};
var score = 20;

const check = document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess ').value);
    console.log(guess, typeof guess);
    if (!guess) {
        document.querySelector('.message').textContent = '❌No number entered';



    } else if (secretnumber < guess) {

        score--;
        if (score < 1) {
            document.querySelector('.message').textContent = '⛔🚫you lost';
            document.querySelector('body').style.backgroundColor = '#bb3333';
            score = 0;
        } else {
            document.querySelector('.message').textContent = '📈pridected is large';
        }
        document.querySelector('.score').textContent = score;
    } else if (secretnumber > guess) {
        score--;
        if (score < 1) {
            document.querySelector('.message').textContent = '⛔🚫you lost';
            document.querySelector('body').style.backgroundColor = '#bb3333';
            score = 0;

        } else {
            document.querySelector('.message').textContent = '📉pridected is small';
        }

        document.querySelector('.score').textContent = score;
    } else {
        document.querySelector('.message ').textContent = '✨🎇correct number';

        document.querySelector('h1').textContent = 'Congratulation🎊';
        document.querySelector('.number ').style.width = '30rem';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number ').textContent = secretnumber;
        if (highscore < score) {
            document.querySelector('.highscore ').textContent = score;
        }
        document.querySelector('.score').textContent = score;

    }

})
document.querySelector('.again').addEventListener('click', function() {
    document.querySelector('h1').style.width = '100rem';
    document.querySelector('h1').textContent = 'Guess My Number!';
    document.querySelector('.number ').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';
    secretnumber = Math.trunc(Math.random() * 20) + 1;
    print(secretnumber);
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number ').textContent = '?';
    document.querySelector('.guess').value = "";
    document.querySelector('.message').textContent = 'Start guessing...';
})
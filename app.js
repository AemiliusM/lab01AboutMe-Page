// import functions and grab DOM elements

// initialize state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
// const confirmed = confirm("hello");
// console.log(confirmed);
// const myName = prompt("what is your name?");
// console.log(myName);
import { isYes } from './utils.js';
import { isNo } from './utils.js';
const quizButton = document.getElementById('click-me');
const results = document.getElementById('results');

quizButton.addEventListener('click', ()=>{
    const confirmed = confirm('Would you like to start the quiz');
    console.log(confirmed);
    
    if (confirmed){
        const name = prompt('What is your name?');
        const ans1 = prompt('Do I like waking up my parents?'); 
        const ans2 = prompt('Do I throw up hair-balls and make weird noises?');
        const ans3 = prompt('Do I like my brother?');
        const ans4 = prompt('Do I like to be washed?');
        console.log(name, ans1, ans2, ans3);
      
        let score = 0;
      
      
        if (isYes(ans1)) {
            score++;
        }
        console.log('score after checking ans1', score);

        if (isYes(ans2)){
            score++;
        }

        console.log('score after checking ans2', score);
        
        if (isNo(ans3)){
            score++;
        }
        console.log('score after checking ans3', score);

        if (isNo(ans4)) {
            score++;
        }
        console.log('score after checking ans4', score);


        console.log('final score', score);
        
        alert(results.textContent = `${name} you got ${Math.floor(score / 4 * 100)}% right!`); 
    } else {
        console.log('user cancelled');
    }
});

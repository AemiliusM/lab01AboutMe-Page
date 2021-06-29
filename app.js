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
const quizButton = document.getElementById('click-me');
// const results = document.getElementById('results');

quizButton.addEventListener('click', ()=>{
    const confirmed = confirm('Would you like to start the quiz?');
    if (confirmed) {
        console.log('continue the quiz');
        const name = prompt('what is your name?');
        const ans1 = prompt('how do you like eggs');
        const ans2 = prompt('are eggs great?');
        const ans3 = prompt('what is your favorite egg?');
        console.log(name, ans1, ans2, ans3);
        let score =0;
        if(ans2 === 'y' || ans2 === 'y' || ans2 === 'y' || ans2 === 'y' || ans2 === 'y' || ans2 === 'y' ) {
          score ++;
        }
    } else {
        console.log('user cancelled');
    }
});
let totalPrize = 0, currentRound = 0, currentAttempt = 0;
let currentMaxNumber = 0, curentStake = 0, secretNumber = 0; 

const ROUND_NUMBER = 3;
const ROUND_STEP = 4;
const ROUND_POW = 2;
const SECRET_NUMBER_RESET = -1;
const ROUND_MAX_NUMBER = 8;

const prizeList = {
3: 100,
2: 50,
1: 25
}

const INVITATION_STRING = 'Do you want to play a game?';
const INVITATION_AGAIN_STRING = 'Do you want to play again?';
const GOODBYE_STRING = 'You did not become a billionaire, but can.';

let userAnswer = '', enterPocketString = '', youWonString = '';
let thanksForParticipationString = '';
let dessisionToPlay = 'yes';

while (dessisionToPlay !== null) {
  dessisionToPlay = prompt(INVITATION_STRING);

  if (dessisionToPlay === null) {
    alert(GOODBYE_STRING);
  } else {

    while (dessisionToPlay !== null && !currentAttempt) {
      currentAttempt = ROUND_NUMBER;
      currentRound = 0;
      
      while (dessisionToPlay !== null && currentAttempt) {
        currentMaxNumber = ROUND_MAX_NUMBER + currentRound * ROUND_STEP;
        secretNumber = Math.round(Math.random() * currentMaxNumber);
        currentAttempt = ROUND_NUMBER;
        
        while(dessisionToPlay !== null && currentAttempt && secretNumber !== SECRET_NUMBER_RESET) {
          
          curentStake = prizeList[currentAttempt] * Math.pow(ROUND_POW, currentRound) ;
        
          enterPocketString = `Choose a roulette pocket number from 0 to ${currentMaxNumber}
          Attempts left: ${currentAttempt}
          Total prize: ${totalPrize}$
          Possible prize on current attempt: ${curentStake}$`;
        
          userAnswer = +prompt(enterPocketString);
          
          if (userAnswer === secretNumber) {
        
            totalPrize += curentStake;
            currentRound++;
            secretNumber = SECRET_NUMBER_RESET;
        
            youWonString = `Congratulation, you won!   Your prize is: ${totalPrize}$. Do you want to continue?`;
            dessisionToPlay = prompt(youWonString);

          } else {
            currentAttempt--;
            if (currentAttempt === 0) {
              totalPrize = 0;
            }
          }
        }
      }

      if (currentAttempt === 0 || dessisionToPlay === null) {
        
        thanksForParticipationString = `Thank you for your participation. Your prize is: ${totalPrize} $`;
        alert(thanksForParticipationString);
        dessisionToPlay = prompt(INVITATION_AGAIN_STRING);
        
        if (dessisionToPlay === null ) {
          alert(GOODBYE_STRING);
        } else {
          totalPrize = 0;
          currentAttempt = 0;
        }
      }
    }
  }
}


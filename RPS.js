const getUserChoice = data => {
  data = data.toLowerCase();
if(data === 'rock' || data === 'paper' || data === 'scissor' )
{
  return data;
}
else
{
  console.log("Not valid");
}
};


const getComputerChoice = () => {
  const random = Math.floor(Math.random() *3);
  switch (random) {
  case 0:
    return 'rock';
  case 1:
    return 'paper';
  case 2:
  return 'scissor';
}
};
function determineWinner(userChoice, computerChoice) {
  if(userChoice == computerChoice)
  return "The Game Tied";
  if(userChoice === 'rock')
  {
    if(computerChoice === 'paper')
    { return 'The Computer Won!'; }
    else {
      return 'You won!';
    }
  }
  if(userChoice === 'paper')
  {
    if(computerChoice === 'scissor')
    { return 'The Computer Won!'; }
    else {
      return 'You won!';
    }
  }
  if(userChoice === 'scissor')
  {
    if(computerChoice === 'rock')
    { return 'The Computer Won!'; }
    else {
      return 'You won!';
    }
  }
}
const playGame = () => {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();
  console.log(userChoice);
  console.log(computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};
playGame();






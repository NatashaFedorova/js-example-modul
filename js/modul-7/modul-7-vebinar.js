// ========================Камінь-ножиці-папір=========================
const rps = (p1, p2) => {
  if (p1 === p2) return 'Draw!';

  const rules = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper',
  };

  return rules[p1] === p2 ? 'Player 1 won!' : 'Player 2 won!';
};

console.log(rps('paper', 'paper'));
console.log(rps('rock', 'paper'));
console.log(rps('scissors', 'paper'));
console.log(rps('rock', 'scissors'));
console.log(rps('scissors', 'paper'));

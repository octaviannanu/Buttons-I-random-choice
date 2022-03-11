let good_number;
function play() {
  good_number = Math.floor(Math.random()*(3-1+1))+1;
}
function winner1() {
  if (good_number === 1) {
    alert('Yes! That is a good choice!')
  } else {
    alert('Ouch! Stop poking me! Bad choice!')
  }
}
function winner2() {
  if (good_number === 2) {
    alert('Yes! That is a good choice!')
  } else {
    alert('Ouch! Stop poking me! Bad choice!')
  }
}
function winner3() {
  if (good_number === 3) {
    alert('Yes! That is a good choice!')
  } else {
    alert('Ouch! Stop poking me! Bad choice!')
  }
}
/*const choice = [1,2,3];
const result = getRandomDifferent(choice)
*/
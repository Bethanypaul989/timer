// Goal: create a setTimeout function for 1000ms intervals, multiplied by any Number input via cmd line
// At each interval, process.stdout.write('\x07') will make OS beep/ding
// Quantity of alarms set by user, via number of elements in cmd line's array

// Edge Cases:
// Input must be a Number
// Input cannot be a negative Number
// Code does not attempt to return a beep if no Numbers are submitted

const input = process.argv.slice(2)
let numberOfTimers = input.filter(number => {
  return number > 0;
});
// console.log(numberOfTimers);

const timer = () => {
  for (const number of numberOfTimers) {
    setTimeout(() => {
      console.log('Time\'s Up!')
      process.stdout.write('\x07');
    }, number * 1000);
  }
};

timer(numberOfTimers);
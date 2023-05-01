function sum(...args) {
  let total = 0;
  for (let num of args) {
    total += num;
  }
  return total;
}

function minus(...args) {
  let total = args[0];
  for (let i = 1; i < args.length; i++) {
    total -= args[i];
  }
  return total;
}

function multiply(...args) {
  let total = args[0];
  for (let i = 1; i < args.length; i++) {
    total *= args[i];
  }
  return total;
}

function divide(...args) {
  let total = args[0];
  for (let i = 1; i < args.length; i++) {
    total /= args[i];
  }
  return total;
}

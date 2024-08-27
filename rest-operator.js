function sum(a) {
  let total = 0;
  for (let value of arguments) total += value;
  return total;
}

// Using rest operator..
function add(discount, ...prices) {
  //   console.log(args);

  // To get the total number..
  const total = prices.reduce((a, b) => a + b);
  return total * (1 - discount);
}

console.log(add(0.1, 20, 30));

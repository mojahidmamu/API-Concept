function add(a, b) {
  const total = a + b;
  console.log(total);
  if (b > 5) {
    const sum = 30 + a + b;
    console.log( sum);
  } else {
    const sum = 20 + a + b;
    console.log( sum);
  }
  return total;
}
add(10, 4)
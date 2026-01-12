function average(array) {
  const sum = array.reduce((acc, num) => acc + num, 0);
  const averageNum = (sum / array.length);
  return averageNum
}

test("La funzione average calcola la media aritmetica di un array di numeri.", () => {
  const media = average([4, 10]);
  expect(media).toBe(7);
});

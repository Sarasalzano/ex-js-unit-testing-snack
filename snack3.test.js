const average = require("./snack3");

test("La funzione average calcola la media aritmetica di un array di numeri.", () => {
  const media = average([4, 10]);
  expect(media).toBe(7);
});

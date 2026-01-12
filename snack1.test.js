const getInitials = require ("./snack1.js");

test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
  const initials = getInitials("Mario Rossi");
  expect(initials).toBe("MR");
});

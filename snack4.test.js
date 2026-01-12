const createSlug = require("./snack4");

test("La funzione createSlug sostituisce gli spazi con -.", () => {
  const slug = createSlug("questo è un test");
  expect(slug).toBe("questo-è-un-test");
});

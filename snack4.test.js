test("La funzione createSlug sostituisce gli spazi con -.", () => {
  const slug = createSlug("Questo è un test");
  expect(slug).toBe("questo-e-un-test");
});

function createSlug(slug) {
  const dashedSlug = slug.replace(/ /g, "-"); //regex globale che trova tutti gli spazi
  return dashedSlug;
}

test("La funzione createSlug sostituisce gli spazi con -.", () => {
  const slug = createSlug("questo è un test");
  expect(slug).toBe("questo-è-un-test");
});

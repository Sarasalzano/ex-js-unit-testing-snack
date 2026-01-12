function createSlug(title) {
  if (title === "") {
    throw new Error("Errore");
  }
  return title;
}
module.exports = createSlug;

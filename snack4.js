function createSlug(slug) {
  const dashedSlug = slug.replace(/ /g, "-"); //regex globale che trova tutti gli spazi
  return dashedSlug;
}

module.exports = createSlug
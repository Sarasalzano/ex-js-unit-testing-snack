// Creare un test che verifichi le seguenti descrizioni:

// "La funzione findPostById restituisce il post corretto dato l’array di post e l’id"

// Creare uno o più test aggiuntivi che controllino che la struttura dati passati sia conforme (ogni post ha le proprietà id, title e slug, viene passato un id numerico).

test("La funzione findPostById restituisce il post corretto dato l’array di post e l’id", () => {
  const posts = [
    { id: 1, title: "Primo post", slug: "primo-post" },
    { id: 2, title: "Secondo post", slug: "secondo-post" },
    { id: 3, title: "Terzo post", slug: "terzo-post" },
  ];
  expect(findPostById(posts, 1)).toEqual(posts[0]);
});

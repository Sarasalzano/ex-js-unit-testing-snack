const findPostById = require("./snack7");

test("La funzione findPostById restituisce il post corretto dato l’array di post e l’id", () => {
  const posts = [
    { id: 1, title: "Primo post", slug: "primo-post" },
    { id: 2, title: "Secondo post", slug: "secondo-post" },
    { id: 3, title: "Terzo post", slug: "terzo-post" },
  ];
  expect(findPostById(posts, 1)).toEqual(posts[0]);
});

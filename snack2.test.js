const createSlug = require("./snack2");


test("La funzione createSlug restituisce una stringa in lowercase.", () => {
    const slug = createSlug("Hello World")
    expect(slug).toBe("hello world")
});
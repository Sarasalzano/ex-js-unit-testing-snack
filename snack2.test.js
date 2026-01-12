function createSlug(slug){
    const lowerCase = slug.toLowerCase();
    return lowerCase
}


test("La funzione createSlug restituisce una stringa in lowercase.", () => {
    const slug = createSlug("Hello World")
    expect(slug).toBe("hello world")
});
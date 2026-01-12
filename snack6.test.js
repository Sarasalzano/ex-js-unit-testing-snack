function createSlug(title){
    if(title === ""){
        throw new Error("Errore")
    }
    return title
}

test("La funzione createSlug lancia un errore se il titolo è vuoto o non valido.", () => {
  expect(() => createSlug("")).toThrow("Errore");
});
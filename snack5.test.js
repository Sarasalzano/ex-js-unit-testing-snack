function isPalindrome(word) {
  let reversed = "";
  for (let i = word.length -1; i >= 0; i--) {
    reversed += word[i];
  }
  if (reversed === word) {
    return true;
  } else {
    return false;
  }
}

test("La funzione isPalindrome verifica se una stringa è un palindromo.", () => {
  const palindromeWord = isPalindrome("ingegni");
  expect(palindromeWord).toBe(true);
});

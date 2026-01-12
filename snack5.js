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

module.exports= isPalindrome;
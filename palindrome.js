function isPalindrome(text) {
  var palindrome = text.toLowerCase();
  if (
    palindrome
      .split('')
      .reverse()
      .join('') === palindrome
  ) {
    return console.log(text, 'ini adalah palindrome');
  }
  return console.log('bukan palindrome');
}

isPalindrome('Deleveled');

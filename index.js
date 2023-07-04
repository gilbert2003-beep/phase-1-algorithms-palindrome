function isPalindrome(word) {
  // Write your algorithm here
  
}
function isPalindrome(str) {
  // Remove any non-letter characters and convert to lowercase
  const formattedStr = str.replace(/[^a-zA-Z]/g, '').toLowerCase();

  // Reverse the string
  const reversedStr = formattedStr.split('').reverse().join('');

  // Check if the reversed string is equal to the original string
  return formattedStr === reversedStr;
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

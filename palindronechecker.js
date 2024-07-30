function isPalindrome(s) {
    s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    return isPalindromeRecursive(s);
}

function isPalindromeRecursive(s) {
    if (s.length <= 1) {
        return true;
    }
    if (s[0] !== s[s.length - 1]) {
        return false;
    }
    return isPalindromeRecursive(s.slice(1, -1));
}

// Test the function
let string = prompt("Enter a string: ");
if (isPalindrome(string)) {
    console.log(`"${string}" is a palindrome.`);
} else {
    console.log(`"${string}" is not a palindrome.`);
}

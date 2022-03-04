const {isPalindrome} = require('../src/utils/palindrome');


test('is palindrome test', () => {
    const result = isPalindrome("a,.BC De-f.E,  d c : BA");
    expect(result).toBe(true);
});

test('not palindrome test', () => {
    const result = isPalindrome("this is a test");
    expect(result).toBe(false);
});
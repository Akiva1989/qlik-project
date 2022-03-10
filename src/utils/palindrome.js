const isPalindrome = (message) => {
    // remove all special characters from the string
    const clean = message.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    //check if the word is the same when it is reversed
    return (clean.length > 0) && Array.from(clean).reverse().join('') === clean;
};


module.exports = {
    isPalindrome: isPalindrome
};
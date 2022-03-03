const isPalindrome = (message) => {
    console.log('fasdfasdfas',message);
    const clean = message.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    return (clean.length > 0) && Array.from(clean).reverse().join('') === clean;
};


module.exports = {
    isPalindrome: isPalindrome
};
// String operations module
function reverse(str) {
    return str.split('').reverse().join('');
}

function uppercase(str) {
    return str.toUpperCase();
}

function palindrome(str) {
    const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleaned === cleaned.split('').reverse().join('');
}

function countChars(str) {
    return str.length;
}

module.exports = {
    reverse,
    uppercase,
    palindrome,
    countChars
};
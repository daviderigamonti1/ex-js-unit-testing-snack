function getInitials(nomeCompleto) {
    const [nome, cognome] = nomeCompleto.split(" ").filter(str => str !== '');
    return `${nome.charAt(0).toUpperCase()} ${cognome.charAt(0).toUpperCase()}`;
}

function createSlug(string) {
    return string.toLowerCase().replaceAll(" ", "-");
}

function average(num) {
    num.forEach(n => {
        if (isNaN(n)) {
            throw new Error("Average vuole solo numeri.");
        }
    })
    const sum = num.reduce((acc, curr) => {
        return acc + curr;
    })
    return sum / num.length;
}

function isPalindrome(string) {
    const reverseString = string.trim().split('').reverse().join('')
    return string.trim() === reverseString;
}

module.exports = { getInitials, createSlug, average, isPalindrome }
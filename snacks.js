function getInitials(nomeCompleto) {
    const [nome, cognome] = nomeCompleto.split(" ").filter(str => str !== '');
    return `${nome.charAt(0).toUpperCase()} ${cognome.charAt(0).toUpperCase()}`;
}

function createSlug(string) {
    return string.toLowerCase();
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

module.exports = { getInitials, createSlug, average }
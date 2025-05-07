function getInitials(nomeCompleto) {
    const [nome, cognome] = nomeCompleto.split(" ").filter(str => str !== '');
    return `${nome.charAt(0).toUpperCase()} ${cognome.charAt(0).toUpperCase()}`;
}

function createSlug(string) {
    return string.toLowerCase();
}

module.exports = { getInitials, createSlug }
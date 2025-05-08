function getInitials(nomeCompleto) {
    const [nome, cognome] = nomeCompleto.split(" ").filter(str => str !== '');
    return `${nome.charAt(0).toUpperCase()} ${cognome.charAt(0).toUpperCase()}`;
}

function createSlug(string) {
    if (!string) {
        throw new Error("Titolo non valido");
    }
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
    const reverseString = string.trim().split('').reverse().join('').toLowerCase();
    return string.trim().toLowerCase() === reverseString;
}

function findPostById(posts, id) {
    if (isNaN(id)) {
        throw new Error(`"${id}" non è un id`);
    }
    posts.forEach(post => {
        if (post.id === undefined ||
            post.title === undefined ||
            post.slug === undefined
        ) {
            throw new Error('L\'array posts non è nel formato corretto.')
        }
    })
    return posts.find(post => id === post.id) || null;
}

function addPost(posts, post) {
    const ids = posts.map(p => p.id);
    const slugs = posts.map(p => p.slug);
    if (ids.includes(post.id)) {
        throw new Error('Id già esistente');
    }
    if (slugs.includes(post.slug)) {
        throw new Error('Slug già esistente');
    }
    posts.push(post);
}

function removePost(posts, id) {
    const index = posts.findIndex(p => p.id === id);
    posts.splice(index, 1);
}

module.exports = { getInitials, createSlug, average, isPalindrome, findPostById, addPost, removePost }
const { getInitials, createSlug, average, isPalindrome, findPostById, addPost, removePost } = require("./snacks.js");

describe('Manipolazione di stringhe', () => {

    // 🏆 Snack 1
    test('La funzione getInitials restituisce le iniziali di un nome completo', () => {
        expect(getInitials("Mario Rossi")).toBe("M R");
        expect(getInitials("giuseppe bianchi")).toBe("G B");
        expect(getInitials("Maria  Verdi")).toBe("M V");
    });

    // 🏆 Snack 5
    test('La funzione isPalindrome verifica se una stringa è un palindromo', () => {
        expect(isPalindrome("otto")).toBeTruthy();
        expect(isPalindrome("ciao")).toBeFalsy();
        expect(isPalindrome("Anna")).toBeTruthy();
    });
});

describe('Operazioni su Array', () => {

    // 🏆 Snack 3
    test('La funzione average calcola la media aritmetica di un array di numeri', () => {
        expect(average([1, 2, 3, 4, 5])).toBe(3);
        expect(() => average([10, "ciao"])).toThrow();
    });

    let posts;

    beforeEach(() => {
        posts = [
            { id: 1, title: "Introduzione a Javascript", slug: "introduzione-a-javascript" },
            { id: 2, title: "React Hooks", slug: "react-hooks" }
        ];
    });

    // 🏆 Snack 7
    test('La funzione findPostById restituisce il post corretto dato l’array di post e l’id', () => {
        expect(findPostById(posts, 2)).toEqual({ id: 2, title: "React Hooks", slug: "react-hooks" });
        expect(findPostById(posts, 3)).toBe(null);
        expect(() => findPostById(posts, "ciao")).toThrow('"ciao" non è un id');
        expect(() => findPostById([3, 6, 9], 2)).toThrow('L\'array posts non è nel formato corretto.');
    });

    // 🎯 Snack 8(Bonus)
    test('Dopo aver aggiunto un post con la funzione addPost, l\'array posts deve contenere un elemento in più', () => {
        addPost(posts, { id: 3, title: "Introduzione a Typescript", slug: "introduzione-a-typescript" });
        expect(posts).toHaveLength(3);
    })

    test('Dopo aver rimosso un post con la funzione removePost, l\'array posts deve contenere un elemento in meno', () => {
        removePost(posts, 2);
        expect(posts).toHaveLength(1);
    })
});

describe('Generazione di Slug', () => {
    // 🏆 Snack 2
    test('La funzione createSlug restituisce una stringa in lowercase', () => {
        expect(createSlug("Stringa Da Trasformare")).toBe("stringa-da-trasformare");
    });

    // 🏆 Snack 4
    test('La funzione createSlug sostituisce gli spazi con -', () => {
        expect(createSlug("Questo è un test")).toBe("questo-è-un-test");
    });

    // 🏆 Snack 6
    test('La funzione createSlug lancia un errore se il titolo è vuoto o non valido', () => {
        expect(() => createSlug("")).toThrow("Titolo non valido");
        expect(() => createSlug(null)).toThrow("Titolo non valido");
    });
})

// 🎯 Snack 9(Bonus)
// Creare un test che verifichi la seguente descrizione:

// 👉 "Se si tenta di aggiungere un post con un id o uno slug già esistente, la funzione addPost deve lanciare un errore."

// 📌 Nota:

// Gli errori devono essere chiari e distinti, es. "Slug già esistente" e “Id già esistente”.
// 🎯 Snack 10(Bonus): createSlug() – Incrementare lo slug se esiste già
// Creare un test che verifichi la seguente descrizione:

// 👉 "Se viene passato un array di post come secondo argomento, la funzione createSlug incrementa di 1 se lo slug esiste già."


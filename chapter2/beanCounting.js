function countChar(word, ch) {
    let count = 0;

    for (let i = 0; i < word.length; i++) {
        if (word[i] === ch) count++;
    }
    return count;
}

function countBs(word) {
    return countChar(word, "B");
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4

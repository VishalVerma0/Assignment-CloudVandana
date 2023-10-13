function reverseWords(sentence) {
    const words = sentence.split(' ');

    const reversedWords = words.map(word => {
        return word.split('').reverse().join('');
    });

    const reversedSentence = reversedWords.join(' ');

    return reversedSentence;
}

const sentence = "This is a sunny day";
const reversedSentence = reverseWords(sentence);
console.log("Reversed sentence:", reversedSentence); // Output: "sihT si a ynnus yad"
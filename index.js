const sentenceElem = document.querySelector(".sentence");
const wordCountElem = document.querySelector(".wordCount");
const maxWordCountElem = document.querySelector(".maxWordCount");
const errorMessageElem = document.querySelector(".errorMessage");




document.addEventListener('DOMContentLoaded', ()=> {
    const selectors = [
        '.sentence',
        '.wordCount',
        '.maxWordCount',
        '.errorMessage',
    ]
const elements = selectors.map((selectors) =>DocumentTimeline.querySelector);

    const [
        sentence,
        wordCount,
        maxWordCount,
        errorMessage,
    ] = elements

 button.addEventListener('click', () => {
     let sentence =input.value;
     sentence =sentence.trim();
     const words = sentence.split();
     sentence = word.replace();
     if (Chars.length > 5){
         word = `<mark>${word}</mark>`;
     }
     return word
    })
    outputSentence.innerHTML =sentence.join('')
    wordCount.innerHTML =`Word count: $words.length`

})
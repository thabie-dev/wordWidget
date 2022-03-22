const sentenceElem = document.querySelector(".sentence");
const wordCountElem = document.querySelector(".wordCount");
const maxWordCountElem = document.querySelector(".maxWordCount");
const errorMessageElem = document.querySelector(".errorMessage");
const buttonElem =document.querySelector(".analyse-btn");
const outputSentenceElem =document.querySelector(".output-sentence");
const hiddenWordsElem =document.querySelector(".hidden-words");


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

 buttonElem.addEventListener('click', () => {
     let sentence =sentenceElem.value;
     let count =maxWordCountElem.value;
     sentence =sentence.trim();
     var outputSentence = "";
     console.log(sentence, count);
     const words = sentence.split(" ");
     console.log(words.length);
     if (count > words.length){
         errorMessageElem.innerHTML = 'Soorry, this is too low!';
     }
     //var hiddenWords = hiddenWordsElem;
      // console.log(hiddenWords.checked);

     wordCountElem.innerHTML= words.length;
     for (var i = 0; i < words.length; i++){
        var word = words[i];
        
        if (word.length > 4){
           word = '<div class="highlight">'+word+'</div>'
        }
        outputSentence += word+' ';
        outputSentenceElem.innerHTML = outputSentence;
     }

     //sentence = word.replace();
     //if (Chars.length > 5){
        // word = `<mark>${word}</mark>`;
    // }
    // return word
    })
   // outputSentence.innerHTML =sentence.join('')
    //wordCount.innerHTML =`Word count: $words.length`
    

})
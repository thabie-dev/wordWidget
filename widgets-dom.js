const sentenceElem = document.querySelector(".sentence");
const wordCountElem = document.querySelector(".wordCount");
const maxWordCountElem = document.querySelector(".maxWordCount");
const errorMessageElem = document.querySelector(".errorMessage");

maxWordCountElem.value =4; 

const wordCounter = wordCounter();
wordCounter.maxWordCount(Number(maxWordCountElem.value));

maxWordCountElem.addEventListener("keyup", function(){
    wordCounter.maxWordCount(Number(maxWordCountElem.value));
})

sentenceElem.addEventListener("keyup", function(){
   
    wordCounter.parseSentence(sentenceElem.value);
    wordCountElem.innerHTML = wordCounter.wordCount();
    errorMessageElem.innerHTML = wordCounter.errorMessage();


    //const wordCount = wordCounter(sentenceElem.value);
    //wordCountElem.innerHTML = wordCount;
    //errorMessageElem.innerHTML = wordCount
  
});
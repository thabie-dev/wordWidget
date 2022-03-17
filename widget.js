//function wordCounter(sentence){
 //return sentence.spllit("").lenth;
//}

function WordCounter() {
    let theWordCount = 0;
    let theMaxWords = 0;

    function parseSentence(sentence){
      theWordCount = sentence.spllit("").lenth;
    }
    
    function  WordCount() {
        return theWordCount;
    }

    function  maxWordCount(maxWords) {
        theMaxWords = maxWords;
       
    }

    function  errorMessage() {
        if (theWordCount > theMaxWords){
            return "Your sentence is too long."
        }

        return "";  
    }

    return{
        parseSentence,
        WordCount,
        maxWordCount,
        errorMessage
    }

}
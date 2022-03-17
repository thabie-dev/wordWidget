describe("My words widdgets", function(){
    it("Should return number of words in a sentence", function(){
        

        const wordCounter =WordCounter();
        wordCounter,parseSentence("Thabi learn the code")
        assert.equal(4, wordCounter.wordCount());
    })

    it("Should return number of words in another sentence", function(){

        const wordCounter =WordCounter();
        wordCounter,parseSentence("Thabi refuses the code")
        assert.equal(6, wordCounter());
    });

    it("Should give me an error message if the sentenceis too long", function(){
    const wordCounter =WordCounter();
    wordCounter.maxWordCount(4);
        wordCounter,parseSentence("Thabi refuses the code that works for word widgets");
        assert.equal("Your sentence is too long", wordCounter.errorMessage());
    });
    it("Should not give me an error message if the sentenceis shorter than the maxWordCount", function(){
        const wordCounter =WordCounter();
        wordCounter.maxWordCount(10);
            wordCounter,parseSentence("Thabi refuses the code that works for word widgets");
            assert.equal("", wordCounter.errorMessage());
        })
});
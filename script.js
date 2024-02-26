
let characterCount = document.querySelector("#texteditor");

function characterCounter () {
    let finalCharacterCount = characterCount.value.length
    document.querySelector(".character-count").innerHTML = finalCharacterCount;
}

function wordCounter () {
    let numWords = 0;
    let text = characterCount.value;
    for (let i = 0; i < text.length; i++) {
        let currentCharacter = text[i];

        // Check if the character is a space
        if (currentCharacter == " ") {
            numWords += 1;
        }
    }

    numWords += 1;
    document.querySelector(".word-count").innerHTML = numWords;
}


characterCounter();
wordCounter();
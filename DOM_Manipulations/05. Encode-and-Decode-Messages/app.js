function encodeAndDecodeMessages() {
    const textAreaRef = document.querySelectorAll('#main textarea');
    const encodeArea = textAreaRef[0];
    const decodeArea = textAreaRef[1];

    const buttonsRef = document.querySelectorAll('button');
    const encodeBtn = buttonsRef[0];
    const decodeBtn = buttonsRef[1];

    encodeBtn.addEventListener('click', encodeMessage);
    decodeBtn.addEventListener('click', decodeMessage);

    function encodeMessage(event) {
        let encodedText = '';
        let inputText = encodeArea.value;

        for (let i = 0; i < inputText.length; i++) {
            let charCode = inputText[i].charCodeAt();
            let newChar = String.fromCharCode(charCode + 1);;
            encodedText += newChar;

        }
        decodeArea.value = encodedText;
        encodeArea.value = '';
    }

    function decodeMessage(event) {
        let decodedText = '';
        let inputText = decodeArea.value;
        for (let i = 0; i < inputText.length; i++) {
            let charCode = inputText[i].charCodeAt();
            let newChar = String.fromCharCode(charCode - 1);;
            decodedText += newChar;
        }
        decodeArea.value = decodedText

    }
}
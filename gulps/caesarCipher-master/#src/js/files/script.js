document.addEventListener('DOMContentLoaded', () => {
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const textInput = document.querySelector('textarea[name="text"]');
    const resultInput = document.querySelector('textarea[name="result"]');
    const backDirectionBtn = document.querySelector('input[name="backDirectionBtn"]');
    const shiftInput = document.querySelector('input[name="shift"]');
    const generateBtn = document.querySelector('.cipher__generate');
    const desipherBtn = document.querySelector('.cipher__desipher');
    const form = document.querySelector('.cipher__container');
    // console.log(backDirectionBtn.checked);

    // genetate
    const generateCipher = () => {
        const cipher = [];
        const shift = Number(shiftInput.value);
        if (backDirectionBtn.checked){
            alphabet.forEach((_, i) => {
                if (i - shift >= 0) {
                    cipher[i] = alphabet[i - shift];
                } else {
                    cipher[i] = alphabet[i - shift + alphabet.length];
                }
            });
        }else{
            alphabet.forEach((_, i) => {
                if (i + shift < alphabet.length) {
                    cipher[i] = alphabet[i + shift];
                } else {
                    cipher[i] = alphabet[i + shift - alphabet.length];
                }
            });
        }
        return cipher;
    }

    const createNewText = (alphabet, cipherArr) => {
        const text = textInput.value.toLowerCase().split(' ').filter(Boolean);

        const result = text.map((word, i) => {
            return word.split('').map(letter => {
                return cipherArr[alphabet.indexOf(letter)];
            }).join('');
        }).join(' ');

        resultInput.value = result;
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();
    });

    generateBtn.addEventListener('click', () => {
        createNewText(alphabet, generateCipher());
    });    
    
    desipherBtn.addEventListener('click', () => {
        createNewText(generateCipher(), alphabet);
    });



}); // end
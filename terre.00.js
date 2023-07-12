const getAlphabet = () => {
    let letter = 97
    let alphabet = []

    while (letter < 123) {
        alphabet.push(String.fromCharCode(letter))
        letter++
    }

    return console.log(alphabet.join(''))
}

getAlphabet()
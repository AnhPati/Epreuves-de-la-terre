const getAlphabetFromLetter = () => {
    const letter = process.argv[2].charCodeAt(0)
    let alphabet = []

    for (i = letter; i < 123; i++) {
        alphabet.push(String.fromCharCode(i))
    }

    return console.log(alphabet.join(''))
}

getAlphabetFromLetter()
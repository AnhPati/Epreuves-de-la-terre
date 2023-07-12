const isValidArguments = (arguments) => {
    if (arguments.length >= 1) {
        return true
    } else {
        return false
    }
}

const isValidString = (string) => {
    if (isNaN(string)) {
        return true
    } else {
        return false
    }
}

const getReverseArray = (array) => {
    const arrayReversed = []
    for (i = array.length; i >= 0; i--) {
        arrayReversed.push(array[i])
    }

    return arrayReversed
}

const getReverseSentence = () => {
    const arguments = process.argv.slice(2)

    if (isValidArguments(arguments)) {
        const sentence = arguments.join(" ")

        if (isValidString(sentence)) {
            // const sentenceReversed = sentence.split('').reverse().join('')
            const charArray = sentence.split('')
            const sentenceReversed = getReverseArray(charArray)

            return console.log(sentenceReversed.join(''))

        } else {
            console.log("Ceci est un nombre...")
        }

    } else {
        console.log("Veuillez renseigner au moins un mot. ✏️")
    }
}

getReverseSentence()
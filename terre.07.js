const isValidArguments = (arguments) => {
    if (arguments.length === 1) {
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

const getSentenceLength = () => {
    const arguments = process.argv.slice(2)

    if (isValidArguments(arguments)) {
        const string = arguments[0]

        if (isValidString(string)) {
            return console.log(string.length)
        } else {
            return console.log("Une erreur est survenue, votre argument doit être une chaîne de caractères.")
        }

    } else {
        return console.log("Une erreur est survenue, assurez vous que avez passez un seul argument. S'il comporte plusieurs mots, ils doivent se trouver entre guillemets.")
    }

}

getSentenceLength()
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

const getCelebration = () => {
    const arguments = process.argv.slice(2)

    if (isValidArguments(arguments)) {
        const words = arguments[0]

        if (isValidString(words)) {
            return console.log(`Ya terminé las pruebas de la tierra ! Estuvo ${words}...`)
        } else {
            return console.log("Veillez à utiliser des mots.")
        }

    } else {
        return console.log("Veuillez ne renseigner qu'un mot, ou un groupe de mot entre guillemets.")
    }
}

getCelebration()
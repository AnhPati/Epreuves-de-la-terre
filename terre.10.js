const isValidArguments = (arguments) => {
    if (arguments.length === 1) {
        return true
    } else {
        return false
    }
}

const isValidNumber = (number) => {
    if (!isNaN(number)) {
        return true
    } else {
        return false
    }
}

const getPrimeNumber = () => {
    const arguments = process.argv.slice(2)

    if (isValidArguments(arguments)) {
        let number = arguments[0]

        if (isValidNumber(number)) {
            number = Number(number)

            if (number > 1) {
                for (i = 2; i < number; i++) {
                    if (number % i === 0) {
                        return console.log(`${number} n'est pas un nombre premier.`)
                    }
                }

                return console.log(`${number} est un nombre premier.`)

            } else {
                return console.log("0 et 1 ne sont pas des nombres premiers.")
            }

        } else {
            return console.log("Veillez à bien renseigner un nombre.")
        }

    } else {
        return console.log("Veuillez ne renseigner qu'un seul nombre.")
    }
}

getPrimeNumber()
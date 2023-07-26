const isValidArguments = (arguments) => {
    if (arguments.length === 1) {
        return true
    } else {
        return false
    }
}

const isValidNumber = (number) => {
    if (!isNaN(number) && number > 0) {
        return true
    } else {
        return false
    }
}

const getRootSquare = () => {
    arguments = process.argv.slice(2)

    if (isValidArguments(arguments)) {
        let number = arguments[0]

        if (isValidNumber(number)) {
            number = Number(number)
            if (Number.isInteger(number)) {
                // const result = Math.sqrt(number)
                let result
                let numberSearched = number / 2

                for (i = 1; i <= numberSearched; i++) {
                    if (i * i === number) {
                        result = i
                        break
                    } if (i * i < number) {
                    } else {
                        numberSearched = i - 1
                        for (j = 1; j <= 10; j++) {
                            i = numberSearched + (j / 10)
                            if (i * i === number) {
                                result = i
                                break
                            } if (i * i < number) {
                            } else {
                                numberSearched = i - 0.1

                                result = numberSearched
                                break
                            }
                        }
                    }
                }

                return console.log(`La racine carrée est : ${result}`)

            } else {
                return console.log("Votre nombre doit être un entier.")
            }

        } else {
            return console.log("Votre nombre doit être strictement supérieur à 0.")
        }

    } else {
        return console.log("Veuillez ne renseigner qu'un seul et unique argument.")
    }
}

getRootSquare()
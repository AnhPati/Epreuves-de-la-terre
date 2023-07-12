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
            console.log("Le nombre est : " + number)
            if (Number.isInteger(number)) {
                // const result = Math.sqrt(number)
                let result
                let numberSearched = number / 2

                for (i = 1; i <= numberSearched; i++) {
                    console.log(i)
                    if (i * i === number) {
                        console.log("ok")
                        result = i
                        break
                    } if (i * i < number) {
                        console.log("trop petit")
                    } else {
                        console.log("trop grand")
                        numberSearched = i - 1
                        console.log("numberSearched est " + numberSearched)
                        for (j = 1; j <= 10; j++) {
                            console.log("j vaut : " + j)
                            i = numberSearched + (j / 10)
                            console.log("i vaut : " + i)
                            if (i * i === number) {
                                console.log("décimale ok")
                                result = i
                                break
                            } if (i * i < number) {
                                console.log("décimale trop petite")
                            } else {
                                console.log("trop grand")
                                numberSearched = i - 0.1
                                console.log("numberSearched avec décimale est " + numberSearched)

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
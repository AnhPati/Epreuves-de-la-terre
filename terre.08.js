const isValidArguments = (arguments) => {
    if (arguments.length === 2) {
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

const isValidExponent = (exponent) => {
    if (exponent > 0) {
        return true
    } else {
        return false
    }
}

const getPowerOfNumber = () => {
    const arguments = process.argv.slice(2)

    if (isValidArguments(arguments)) {
        let number = arguments[0]
        let exponent = arguments[1]

        if (isValidNumber(number) && isValidNumber(exponent)) {
            number = Number(number)
            exponent = Number(exponent)

            if (isValidExponent(exponent)) {
                // const result = Math.pow(number, exponent)
                let result = number

                for (i = 1; i < exponent; i++) {
                    result = result * number
                }

                return console.log(result)
            } else {
                return console.log("Votre exposant ne peut être égal ou inférieur à 0.")
            }

        } else {
            return console.log("Veillez à ne renseigner que des nombres.")
        }

    } else {
        return console.log("Veuillez renseigner uniquement 2 arguments.")
    }
}

getPowerOfNumber()
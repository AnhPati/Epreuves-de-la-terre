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

const truncNumber = (number) => {
    let string = number.toString()

    if (string.includes('.')) {
        const decimal = string.indexOf('.')

        return Number(string.slice(0, decimal))

    } else {
        return Number(string)
    }
}

const dividerAndModulo = () => {
    const arguments = process.argv.slice(2)

    if (isValidArguments(arguments)) {
        let firstNumber = arguments[0]
        let secondNumber = arguments[1]

        if (isValidNumber(firstNumber) && isValidNumber(secondNumber)) {
            firstNumber = Number(firstNumber)
            secondNumber = Number(secondNumber)

            if ((firstNumber != 0 && secondNumber != 0) && firstNumber > secondNumber) {
                // const result = Math.trunc(firstNumber / secondNumber)
                const result = truncNumber(firstNumber / secondNumber)
                const modulo = firstNumber % secondNumber

                return console.log(`Résultat : ${result}
Reste : ${modulo}`)
            } else {
                console.log(`Une erreur s'est produite.`)
            }

        } else {
            console.log("Veillez à renseigner uniquement des nombres.")
        }

    } else {
        return console.log("Veuillez ne renseigner que deux arguments, merci.")
    }
}

dividerAndModulo()
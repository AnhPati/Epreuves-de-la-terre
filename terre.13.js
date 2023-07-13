const isValidArguments = (arguments) => {
    if (arguments.length === 3) {
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

const sortArray = (array) => {
    let count = 0
    let newArray = array

    for (i = 0; i < newArray.length - 1; i++) {
        if (newArray[i + 1] < newArray[i]) {
            let tempArray = [newArray[i + 1], newArray[i]]
            newArray[i] = tempArray[0]
            newArray[i + 1] = tempArray[1]
            count++
        }

        if (i + 1 === newArray.length - 1) {
            if (count === 0) {
                break

            } else {
                count = 0
                i = i - newArray.length - 1
            }
        }
    }

    return newArray
}

const getMiddleNumber = () => {
    const arguments = process.argv.slice(2)

    if (isValidArguments(arguments)) {
        let numberArray = arguments

        for (i = 0; i < numberArray.length; i++) {
            if (isValidNumber(numberArray[i])) {
                numberArray[i] = Number(numberArray[i])
            } else {
                return console.log("Veillez à ne renseigner que des nombres.")
            }
        }

        return console.log(sortArray(numberArray)[1])

    } else {
        return console.log("Veuillez passer 3 arguments, pas un de plus, pas un de moins.")
    }
}

getMiddleNumber()
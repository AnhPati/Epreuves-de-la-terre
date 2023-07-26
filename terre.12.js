const isValidArguments = (arguments) => {
    if (arguments.length === 1) {
        return true
    } else {
        return false
    }
}

const isValidTime = (time) => {
    const validFormat = new RegExp(/((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))/)

    return (validFormat.test(time))
}

const changeTimeFormatReverse = () => {
    const arguments = process.argv.slice(2)

    if (isValidArguments(arguments)) {
        let time = arguments[0]

        if (isValidTime(time)) {
            const timeSeparator = time.indexOf(":")
            let hours = Number(time.slice(0, timeSeparator))
            let minutes = time.slice(timeSeparator + 1, 5)
            let morningAfternoon = time.slice(5)

            if (hours < 12 && morningAfternoon == "PM") {
                hours = hours + 12
                hours = hours.toString()
            } else if (hours == 12 && morningAfternoon == "AM") {
                hours = 0
                hours = `0${hours.toString()}`
            } else {
                // hours = hours.toString()
            }

            return console.log(`Il est exactement ${hours}:${minutes}`)

        } else {
            return console.log(`Le format de l'heure est incorrect, le format accepté est : "12:00AM" - "11:59PM".`)
        }

    } else {
        return console.log("Veuillez ne renseigner qu'un seul argument.")
    }
}

changeTimeFormatReverse()
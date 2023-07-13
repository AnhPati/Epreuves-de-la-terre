const isValidArguments = (arguments) => {
    if (arguments.length === 1) {
        return true
    } else {
        return false
    }
}

const isValidTime = (time) => {
    const validFormat = new RegExp("^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$")

    return (validFormat.test(time))
}

const changeTimeFormat = () => {
    const arguments = process.argv.slice(2)

    if (isValidArguments(arguments)) {
        let time = arguments[0]

        if (isValidTime(time)) {
            const timeSeparator = time.indexOf(":")
            let hours = Number(time.slice(0, timeSeparator))
            let minutes = time.slice(timeSeparator + 1)

            if (hours > 12 && hours < 22) {
                hours = hours - 12
                hours = `0${hours.toString()}`
                minutes = `${minutes}PM`
            } else if (hours > 21 && hours < 24) {
                hours = hours - 12
                hours = hours.toString()
                minutes = `${minutes}PM`
            } else if (hours == 0) {
                hours = "12"
                minutes = `${minutes}AM`
            } else if (hours == 12) {
                hours = hours.toString()
                minutes = `${minutes}PM`
            } else {
                hours = hours.toString()
                minutes = `${minutes}AM`
            }

            return console.log(`Il est exactement ${hours}:${minutes}`)

        } else {
            return console.log(`Le format de l'heure est incorrect, le format accepté est : "00:00" - "23:59".`)
        }

    } else {
        return console.log("Veuillez ne renseigner qu'un seul argument.")
    }
}

changeTimeFormat()
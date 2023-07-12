const sayEvenOrOdd = () => {
    const arguments = process.argv.slice(2)
    if (arguments.length === 1) {
        let argument = arguments[0]
        if (!isNaN(argument)) {
            argument = Number(argument)
            if (Number.isInteger(argument) && argument >= 0) {
                if ((argument % 2) === 0) {
                    return console.log("Le nombre que vous avez renseigné est paire ! ✌️")

                } else {
                    return console.log("Le nombre que vous avez renseigné est impair ! 👆")
                }

            } else {
                return console.log("Désolé, je suis quelqu'un d'entier et positif, je ne prend pas en charge les nombres décimaux ou négatifs. 🤓")
            }

        } else {
            return console.log("Veillez à renseigner uniquement un nombre et ne pas vous égarer dans des élucubrations. 🤫")
        }

    } else {
        return console.log("Vous ne devez renseigner qu'un seul nombre à la fois. ☝️")
    }
}

sayEvenOrOdd()
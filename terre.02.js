const getArguments = () => {
    const arguments = process.argv.slice(2)
    for (let argument of arguments) {
        console.log(argument)
    }
}

getArguments()
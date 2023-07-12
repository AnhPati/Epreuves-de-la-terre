const getFileName = () => {
    const filePath = process.argv[1]
    const fileName = filePath.slice(filePath.lastIndexOf('/') + 1)

    return console.log(fileName)
}

getFileName()
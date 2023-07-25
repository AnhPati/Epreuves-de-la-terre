const isValidArguments = (arguments) => {
    if (arguments.length >= 3) {
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

// const sortArray = (array) => {
//     let indexMin = 0
//     let indexMax = array.length - 1
//     let newArray = array
//     const oldArray = array

//     console.log(array)
//     const quickSort = (array, indexMin, indexMax) => {
//         if (indexMin < indexMax) {
//             let scoreIndex = score(array, indexMin, indexMax)
//             console.log("Score index : " + scoreIndex + " et le tableau : " + array)
//             quickSort(array, indexMin, scoreIndex - 1)
//             quickSort(array, scoreIndex + 1, indexMax)
//         }

//         return array
//     }

//     const score = (array, indexMin, indexMax) => {
//         let pivotValue = array[indexMax]
//         let indexTracker = indexMin
//         let tempArray = []

//         for (i = indexMin; i < indexMax; i++) {
//             console.log(" i = " + i)
//             if (array[i] < pivotValue) {
//                 tempArray = [array[indexTracker], array[i]]
//                 array[indexTracker] = tempArray[1]
//                 array[i] = tempArray[0]
//                 indexTracker = indexTracker + 1
//                 console.log("Pivot " + pivotValue)
//                 console.log("tempArray[0] " + tempArray[0] + " et tempArray[1] " + tempArray[1])
//                 console.log("array[indexTracker] " + array[indexTracker] + " et array[i] " + array[i])
//             }
//         }

//         tempArray = [array[indexTracker], array[indexMax]]
//         array[indexTracker] = tempArray[1]
//         array[indexMax] = tempArray[0]

//         return indexTracker
//     }

//     const result = quickSort(newArray, indexMin, indexMax)
//     console.log(newArray)
//     console.log("old " + oldArray)
//     return result
// }

// const compareArray = (firstArray, secondArray) => {
//     let sameOrNot = false

//     for (i = 0; i < firstArray.length; i++) {
//         for (j = 0; j < secondArray.length; j++) {
//             if (firstArray[i] = secondArray[j]) {
//                 sameOrNot = true
//                 i++
//             } else {
//                 sameOrNot = false
//                 break
//             }
//         }
//     }

//     return sameOrNot
// }

const sayIfSorted = () => {
    const arguments = process.argv.slice(2)

    if (isValidArguments(arguments)) {
        let numberArray = arguments

        for (i = 0; i < numberArray.length; i++) {
            if (isValidNumber(numberArray[i])) {
                numberArray[i] = Number(numberArray[i])
            } else {
                return console.log("Veillez à renseigner uniquement des nombres.")
            }
            if (numberArray[i + 1] < numberArray[i]) {
                return console.log("Va ranger ton tableau !")
            }
        }

        return console.log("C'est bien trié !")
        // const numberArrayNoSorted = numberArray
        // const numberArrayForSort = numberArray
        // const numberArraySorted = sortArray(numberArrayForSort)

        // if (compareArray(numberArrayNoSorted, numberArraySorted)) {
        //     console.log("C'est bien trié !")
        // } else {
        //     console.log("Va ranger ton tableau !")
        // }

    } else {
        console.log("Veuillez indiquer au minimum 3 arguments.")
    }
     
}

sayIfSorted()
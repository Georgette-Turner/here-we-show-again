// Team contributing:  Lorne Jenkins, Jeri MIller and Kahlil Enmond

const mainElement = document.querySelector(`.kata-list`)

const sampleArray = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71,
    456, 21, 398, 339, 882, 848, 179, 535, 940, 472,
];

// /KATA 1
const kata1Heading = document.createElement('h3')
mainElement.append(kata1Heading)
kata1Heading.append(`Kata 1 : \r`)

var kata1Array = [];
for (let counter = 1; counter <= 20; counter++) {
    kata1Array.push(counter);
}
kata1Heading.append(kata1Array)

// KATA 2
const kata2Heading = document.createElement('h3')
mainElement.append(kata2Heading)
kata2Heading.append(`Kata 2: \r`)

for (counter = 2; counter <= 20; counter += 2) {
    kata2Heading.append(counter)
}

// KATA 3

const kata3Heading = document.createElement('h3')
mainElement.append(kata3Heading)
kata3Heading.append(`Kata 3: \r1`)
for (counter = 1; counter <= 20; counter += 2) {
    kata3Heading.append(counter)
}

// KATA 4


const kata4Heading = document.createElement('h3')
mainElement.append(kata4Heading)
kata4Heading.append(`Kata 4: \r`)

for (counter = 5; counter <= 100; counter += 5) {
    kata4Heading.append(counter)
}
// KATA 5

const kata5Heading = document.createElement('h3')
mainElement.append(kata5Heading)
kata5Heading.append(`KATA 5: \r`)

for (let counter = 1; counter <= 10; counter += 1) {
    kata5Heading.append(counter * counter);
}

// KATA 6

const kata6Heading = document.createElement('h3')
mainElement.append(kata6Heading)
kata6Heading.append(`Kata 6: \r`)

for (counter = 20; counter >= 1; counter -= 1) {
    kata6Heading.append(counter)
}

// KATA 7

const kata7Heading = document.createElement('h3')
mainElement.append(kata7Heading)
kata7Heading.append(`Kata 7 : \r`)

for (counter = 20; counter >= 1; counter -= 2) {
    kata7Heading.append(counter)
}

// KATA 8


const kata8Heading = document.createElement('h3')
mainElement.append(kata8Heading)
kata8Heading.append(`Kata 8: \r`)

for (counter = 19; counter >= 1; counter -= 2) {
    kata8Heading.append(counter)
}


// KATA 9

const kata9Heading = document.createElement('h3')
mainElement.append(kata9Heading)
kata9Heading.append(`Kata 9: \r`)

for (counter = 100; counter >= 1; counter -= 5)
    kata9Heading.append(counter)


// KATA 10
const kata10Heading = document.createElement('h3')
mainElement.append(kata10Heading)
kata10Heading.append(`Kata 10: \r`)

counter10 = 10
for (let counter = 10; counter >= 1; counter -= 1) {
    kata10Heading.append(counter * counter);
}


// Kata 11

const kata11Heading = document.createElement('h3')
mainElement.append(kata11Heading)
kata11Heading.append(`Kata 11: \r`)
kata11Heading.append(sampleArray)

// Kata 12
const kata12Heading = document.createElement('h3')
mainElement.append(kata12Heading)
kata12Heading.append('Kata 12: ')

let newArray = []

for(counter = 0; counter <= sampleArray.length; counter ++ ) {
    let sampleArrayElement = sampleArray[counter]
    if (sampleArrayElement % 2 ===0) {
        newArray.push(sampleArrayElement)
    }
}
kata12Heading.append(newArray)

//Kata 13
const kata13Heading = document.createElement('h3')
mainElement.append(kata13Heading)
kata13Heading.append(`Kata 13: \r`)
let kata13Array = []
for (let counter = 0; counter < sampleArray.length; counter++) {
    const sampleArrayElement = sampleArray[counter];
    if (sampleArrayElement % 2) {
        kata13Array.push(sampleArrayElement)
    }
}
kata13Heading.append(kata13Array)


// Kata 14
const kata14Heading = document.createElement('h3')
mainElement.append(kata14Heading)
kata14Heading.append(`Kata 14: \r`)

let kata14Array = []

for(counter = 0; counter <= sampleArray.length; counter ++ ) {
    let sampleArrayElement = sampleArray[counter]
    // if (sampleArrayElement % 2) {
       kata14Array.push(sampleArrayElement * sampleArrayElement)
    }
    
kata14Heading.append(kata14Array)


// Kata 15
const kata15Heading = document.createElement('h3')
mainElement.append(kata15Heading)
kata15Heading.append(`Kata 15: \r`)

let numSum = 0
for (let counter = 1; counter <= 20; counter++) {
    numSum = numSum + counter
}
kata15Heading.append(numSum)


// Kata 16
const kata16Heading = document.createElement('h3')
mainElement.append(kata16Heading)
kata16Heading.append(`Kata 16: \r`)
let numSumkata16 = 0
for (counter = 0; counter < sampleArray.length; counter++) {
    numSumkata16 = numSumkata16 + sampleArray[counter]
}
kata16Heading.append(numSumkata16)

// Kata 17 
const kata17Heading = document.createElement('h3')
mainElement.append(kata17Heading)
kata17Heading.append(`Kata 17: \r`)
let kata17Array = sampleArray.sort(function (a, b) { return a - b })
kata17Heading.append(kata17Array[0])



// Kata 18 
const kata18Heading = document.createElement('h3')
mainElement.append(kata18Heading)
kata18Heading.append(`Kata 18: \r`)
let kata18Array = sampleArray.sort(function (a, b) { return a - b })
kata18Heading.append(kata18Array[sampleArray.length - 1])


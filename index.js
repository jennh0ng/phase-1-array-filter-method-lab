// Code your solution here

// findMatching()

// first set
// const findMatching = function(drivers, string) {
//     return drivers.filter(function(driver) {
//       return driver.toLowerCase() === string.toLowerCase()
//     })
// }
// practice test to prove that const helloWorld = () => 'Hello World!';
//  const findMatching = function(drivers, string) {
//     let correctName = drivers.filter(driver => driver.toLowerCase() === string.toLowerCase())
//     return correctName
// }
 function findMatching(drivers, string) {
     let correctName = drivers.filter(driver => driver.toLowerCase() === string.toLowerCase())
     return correctName;
 }

 // fuzzyMatch()

function fuzzyMatch(drivers, string) {
    let correctLetters = drivers.filter(beginningLetters => beginningLetters.substring(0,2) === string);
    return correctLetters;
}

// matchName()

function matchName(drivers, string) {
    let returnedName = drivers.filter(listedName => listedName.name === string);
    return returnedName;
}
// code your solution here

function saturdayFun(defaultActivity = 'roller-skate') {
  return `This Saturday, I want to ${defaultActivity}!`
}

let mondayWork = function (defaultActivity = 'go to the office') {
  return `This Monday, I will ${defaultActivity}.`
}

let wrapAdjective = function (visualFlairString = '*') {
  return function (adjective = 'special') {
    return `You are ${visualFlairString}${adjective}${visualFlairString}!`
  }
}

let Calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
}

let actionApplyer = function (startingInteger, arrayOfTransforms) {
  if (arrayOfTransforms[0]) {
    let multiply = arrayOfTransforms[0](startingInteger)
    let addition = arrayOfTransforms[1](multiply)
    return arrayOfTransforms[2](addition)
  } else {
    return startingInteger
  }
}

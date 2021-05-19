// Create three functions. checkParamsFn, checkOverEighteenFn & calculateAgeFn.
// The first function checks your parameters and returns
// true if all of them are integers, whereas returns false if not.
// The second function is self explanatory.
// The third function, uses the first and second functions to check its inputs
// and returns an error message that starts with "error:"
// This function should return a rounded age.
// READING MATERIALS:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
// https://www.w3schools.com/js/js_dates.asp
// https://www.digitalocean.com/community/tutorials/understanding-date-and-time-in-javascript
// HINT: recycling code is never bad practice.

// This functions should check the integrity of the parameters and pass true/false
function checkParamsFn(year, month, day) {
 if (typeof year === "number" && typeof month === "number" 
    && typeof day === "number")
   {
     return true
   } 
   else return false
  // Write your code here
}


// This functions checks if the person is or above 18 years of age, return true/false
function checkOverEighteenFn(year, month, day) {
  thisYear = new Date().toISOString().slice(0,4)
  console.log(thisYear)
  thisMonth = new Date().toISOString().slice(5,7)
  console.log(thisMonth)
  thisDay = new Date().toISOString().slice(8,10)
  console.log(thisDay)

let Agee = thisYear - year
if (Agee >= 18) {
  return true
} else if (Agee === 18 && month > thisMonth) {
  return false
} return false
  // Write your code here
}

function calculateAgeFn(year, month, day) {
    let Agee = thisYear - year
checkParamsFn(year , month , day)
  checkOverEighteenFn(year, month , day)
if (checkParamsFn(year , month , day) === false || 
checkOverEighteenFn(year, month , day) === false) {
  return "error:"
} else {
  return Math.round(Agee)
} 
  // Write your code here
}

// Look at the naming of the functions. it looks like salwaBaqer, where
// the first letter of the first word is small, while the first letter of the
// second word is Capital. This is called "Camel Casing."
// Also the Fn at the end of the function name is short for function.
// str = String, int = Integer, arr = Array, obj = Object, fn = Function
// It's best practice to name your function as to what it does, or your variable
// to what it holds.

module.exports = calculateAgeFn;

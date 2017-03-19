function countdown(callback){
  setTimeout(callback, 2000);
}

function createMultiplier(multiplierValue) {
  return function(value){
    return value * multiplierValue
  }
}
var doubler = createMultiplier(2)
var tripler = createMultiplier(3)


function multiplier(x, y) {
  return x * y
}

doublerWithBind = multiplier.bind(null,2)
triplerWithBind = multiplier.bind(null,3)

const _ = require('../module')

var fibonacci = _.memolize((n) => {
  return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2)
})

// run test case
console.log(fibonacci(10))
console.log(fibonacci(10))

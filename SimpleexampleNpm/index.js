// Si comença per / o ./ o ../ -> Mòdul local
// Tota la resta és mòdul NPM

var hello = require('baucells-hello/hello').hello
hello('sergi')

// require('hello')()
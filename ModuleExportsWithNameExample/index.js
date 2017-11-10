// NODE.JS -> COMMON.js
var hello = require('./src/hello.js').hello
hello()

var pepito = require('./src/hello.js').pepito
pepito()

require('./src/hello.js').hello()
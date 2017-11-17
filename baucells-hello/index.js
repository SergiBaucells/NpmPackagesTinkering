// underscore -> llibreria amb coses que el javascript no te

var _ = require('underscore')

exports.hello = function(person) {
    console.log('Hola' + _.capitalize(person) + '!');
}
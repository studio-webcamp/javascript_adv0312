var assert = require('assert');
var User = require('./User');
var Beer = require('./Beer');
var Mixin = require('./Mixin');
var beerJson = [
    {
        "brand": "Obolon"
    },
    {
        "brand": "Kozel"
    },
    {
        "brand": "Lew"
    }
];

var userJson = [
    {
        "name": "Valia"
    },
    {
        "name": "Petia"
    },
    {
        "name": "Kolian"
    }
];

describe('mixin test', function () {
   it('should make instance of User class from json', function testMixin() {
       var user = User.fromJson(userJson[0]);
       assert.equal(user.getName(), 'Valia');
       assert.ok(user instanceof User);
   });
   it('should make instance of Beer class from json', function testMixin() {
       var beer = Beer.fromJson(beerJson[0]);
       assert.equal(beer.getBrand(), 'Obolon');
       assert.ok(beer instanceof Beer);
   });
});
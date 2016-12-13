/**
 * Created by lenka on 12/11/16.
 */
var assert = require('assert');
var Pivas = require('./factory');
var Customer = require('./customer');
var Spy = require('./spy');
describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function test() {
            assert.equal(-1, [1, 2, 3].indexOf(4));
        });
    });
    describe('#every()', function () {
        it('every element is even', function test() {
            assert.ok([2, 4, 16].every(el=>el % 2 == 0));
        });
    });
});
describe('Factory', function () {
    var pivasArray;
    before(function () {
        // runs before all tests in this block
        var array = (new Array(43)).fill(1);
        pivasArray = array.map(() => {
            return Pivas.HugardenBasic();
        });

    });

    after(function () {
        // runs after all tests in this block
    });

    //43 экземпляра класса Пивас
    //убедиться, что первый имеет id 0; последний - id 42
    it('auto increment', function testFoo() {
        var pivas1 = pivasArray[0];
        var pivas42 = pivasArray[pivasArray.length - 1];
        assert.equal(pivas1.id, 0);
        assert.equal(pivas42.id, 42);
    });
    it('mixin', function testMixin() {
        var pivas = new Pivas();
        var customer = new Customer('Vasia');
        assert.equal(pivas.commonProperty, customer.commonProperty);
        assert.equal(pivas.commonBehavior(), customer.commonBehavior());
    });
});

describe.only('spy task', function () {
    it('functional-javascript spy', function testSpy() {
        var spy = Spy(console, 'error');

        console.error('calling console.error');
        console.error('calling console.error');
        console.error('calling console.error');

        assert.equal(spy.count, 3);
    })
});
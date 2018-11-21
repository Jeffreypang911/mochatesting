const assert = require('chai').assert;
const app = require('../app');

describe('App', function(){
    it('app should return hello', function(){
        let result = app.sayHello()
        assert.equal(result, "hello");
    })
    it('app should return a string', function(){
        let result = app.sayHello()
        assert.typeOf(result, 'string')
    })
    it('addNumbers should return sum of two numbers', function(){
        let result = app.addNumbers(5, 6)
        assert.equal(result, "11");
    })

    it('addNumbers should be above the value 5', function(){
        let result = app.addNumbers(5,5)
        assert.isAbove(result, 5)
    })
})
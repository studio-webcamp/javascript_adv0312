console.log('basic obj');
var basicExample = Object.create({
    doSomething: function () {
        return 'Something done';
    }
});
Object.defineProperty(basicExample, 'sense', {
    value: 42,
    enumerable: true,
    writable: true
});

var json = {
    key: 'value',
    ownToString: function () {
        return 'kuku';
    }
};
Object.assign(basicExample, json);

for(var k in basicExample){
    if(basicExample.hasOwnProperty(k)){
        console.log(k);
    }
}

function foo() {
    console.log(arguments);
}

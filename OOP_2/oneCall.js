function once(n) {
    function foo(m) {
        foo = null;
        return m+n;
    }
    return function (m) {
        return foo(m);
    }
}
var oneCall = once(1);
oneCall(2); //3
oneCall(3); //Error...

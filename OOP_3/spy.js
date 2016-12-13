/**
 * Created by lenka on 12/11/16.
 */
function Spy(target, method) {
    // SOLUTION GOES HERE
    var old = target[method];
    var spy = {
        count: 0
    };
    target[method] = function () {
        spy.count += 1;
        return old.apply(target, arguments);
    };
    return spy;
}

module.exports = Spy;

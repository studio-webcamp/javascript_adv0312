var Rx = require('rx');
var source = Rx.Observable.create(function (observer) {
    // Yield a single value and complete
    observer.onNext(42);

    observer.onCompleted();

    // Any cleanup logic might go here
    return function () {
        console.log('disposed');
    }
});

source.subscribe(function (n) {
    console.log('Answer to the Ultimate Question of Life, the Universe, and Everything', n);
});
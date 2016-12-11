function duckCount() {
    var args = Array.prototype.slice.call(arguments, 0);
    return args.reduce(function (initial, duckCandidate) {
        var isDuck = Object.prototype.hasOwnProperty.call(duckCandidate, 'quack');
        if(isDuck){
            initial += 1;
        }
        return initial;
    }, 0);
}

// var notDuck = Object.create({quack: true});
// var duckNoProto = Object.create(null);
// duckNoProto.quack = true;
// var duck = {quack: true};
// console.log(duckCount(duck, notDuck, duckNoProto));

module.exports = duckCount;

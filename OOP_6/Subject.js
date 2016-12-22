const EventEmitter = require('events');
function Subject() {
    this.emiter = new EventEmitter();
}

Subject.prototype.addObserver = function (observer) {
    this.observer = observer;
};

Subject.prototype.notify = function (msg) {
    this.emiter.emit('update');
};

module.exports = Subject;
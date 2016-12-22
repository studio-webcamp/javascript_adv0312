function Observer() {

}
Observer.prototype.listenTo = function (subject) {
  subject.emiter.on('update', ()=> {
      this.update('model update');
  });
};
Observer.prototype.update = function (msg) {
  this.message = msg;
};

module.exports = Observer;

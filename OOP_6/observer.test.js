var Observer = require('./Observer');
var Subject = require('./Subject');
var assert = require('assert');
describe('test observer', function () {
    var model;
    var view;

    beforeEach(function () {
        model = new Subject();
        view = new Observer();
        view.listenTo(model);
        // model.addObserver(view);
    });
    it('should receive message from a subject', function testObserver() {
        model.notify('model update');
        assert.equal(view.message, 'model update');
    });
});
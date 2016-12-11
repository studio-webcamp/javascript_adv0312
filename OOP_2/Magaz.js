function Magaz() {
    if (this instanceof Magaz) {
        throw new Error('Singleton constructor error');
    }
    var instance;

    function _Magaz() {
        this.name = '42';
    }

    Magaz = null;
    return {
        getInstance: function () {
            if (!instance) {
                instance = new _Magaz();
            }
            return instance;
        }
    }
}
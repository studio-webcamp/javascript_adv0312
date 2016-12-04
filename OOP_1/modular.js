var module = (function moduleFunc() {
    var name = {
        login: 'kuku',
        pass: '123'
    };

    var secret = "123";
    return {
        getPass: function (obj) {
            return obj.pass;
        },
        getName: function () {
            return name;
        }
    }
})();
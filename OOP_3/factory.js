//Класс Пивас #id
var Mixin = require('./mixin');
var Pivas = (function modulePivas() {
    var autoId = 0;

    function autoIncrement() {
        return autoId++;
    }

    function Pivas(brand, sort, filtration, volume, botteled) {
        Object.assign(this, Mixin);
        this.id = autoIncrement();
        this.brand = brand;
        this.sort = sort;
        this.filtration = filtration;
        this.volume = volume;
        this.botteled = botteled;
    }

    Pivas.HugardenBasic = function () {
      return new Pivas('Hugarden', 'light', true, 0.33, true);
    };
    return Pivas;
})();
module.exports = Pivas;
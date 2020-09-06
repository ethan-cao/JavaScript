// ES5

var Singleton = (function(){
    var instance;

    function createInstance(){
        var obj = {};
        return obj;
    }

    return {
        getInstance(){
            instance = !instance ? createInstance() : instance;
            return instance;
        }
    }
})();
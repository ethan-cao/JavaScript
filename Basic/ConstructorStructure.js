(function(namespace) {
    "use strict";

    if (_.has(this, namespace)) {
        return;
    }

    // Denpendency
    var utils = xxx.utils;

    /**
     * @class
     * @classdesc
     *
     * @extends
     *
     * @param {Object} config  - configuration which is going to be applied
     */

    var constructor = function namespace() {}

    var Static = {};

    var Prototype = {};

    _.assignIn(Constructor, Static);
    _.assignIn(Constructor.prototype, Prototype);

    utils.extend(Constructor, Parent);

    _.set(this, namespace, Constructor);

}).call(window, "namespace");

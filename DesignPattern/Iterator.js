// encapsulate data set, expose an easy to access each data element
// Providing an API to loop over and navigate around a complex custom data structure

var agg = (function() {
    var index = 0,
        data = [1, 2, 3, 4, 5],
        length = data.length;
    return {
        next: function() {
            var element;
            if (!this.hasNext()) {
                return null;
            }
            element = data[index];
            index = index + 2;
            return element;
        },
        hasNext: function() {
            return index < length;
        },
        current: function() {
            return data[index];
        },
        rewind: function() {
            index = 0;
        }
    };
}());

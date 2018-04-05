var TodoCollection = Backbone.Firebase.Collection.extend({
    model : Todo,
    url: "https://todo-d3f6f.firebaseio.com",

    // Todos are sorted by their original insertion order.
    comparator: 'order'
});
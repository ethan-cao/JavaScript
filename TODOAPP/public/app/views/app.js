var AppView = Backbone.View.extend({
    // bind the app node
    el : $("#todoapp"),

    // DOM events
    events : {
        "click #add-todo": "createTodo",
    },

    initialize : function(){
        // cache DOM elements
        this.$list = this.$("#todo-list");
        this.$input = this.$("#new-todo");

        // start custom evnents    
        this.listenTo(this.collection, "add", this.addOne);
		this.listenTo(this.collection, 'sync', this.addAll);
    },

    // custom event handler
    addOne : function(todo) {
        var view = new TodoView({model:todo});
        this.$list.append(view.render().el);
    },

    // Add all items in the **Todos** collection at once.
    addAll: function () {
        this.$list.html('');
        this.collection.each(this.addOne, this);
    },

    // DOM event handler
    createTodo : function(){
        var newTodo = this.$input.val();
        this.$input.val("");

        if (!newTodo){
            return;
        }

        // trigger custom event
        this.collection.create({title: newTodo});
    }
});
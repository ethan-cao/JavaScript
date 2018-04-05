var collection = new TodoCollection();
var appView = new AppView({collection:collection});

appView.collection.fetch();
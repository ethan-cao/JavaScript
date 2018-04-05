(function($){
	console.log("popup.js");

	var APP_ID = "lokkeipofhoajnebiiebfjdpmpiemhhm";
	var ENTER_KEY = 13; 
	var ESC_KEY = 27;

	var Item = Backbone.Model.extend({
		defaults : {
			name : "New item",
			order: "",
			filling : ""
		}
	});

	var ItemCollection = Backbone.Collection.extend({
		model : Item,
		comparator : "order",
		localStorage : new Backbone.LocalStorage("quickFiller"),
		newOrder: function(){
			return this.length ? this.last().get("order") + 1 : 1;
		}
	});

	var itemCollection =  new ItemCollection();

	var ItemView = Backbone.View.extend({
		tagName : "li",
		template : _.template($("#item-template").html()),
		events: {
			"click .define" : "clickDefine",
			"click .apply" : "clickApply",
			"click .delete" : "clickDelete"
		},

		initialize : function(){
			this.listenTo(this.model, "change", this.render);
			this.listenTo(this.model, 'destroy', this.remove);
		},

		render: function(){
			// if (this.model.changed.id !== undefined) {
			// 	return;
			// }

			this.$el.html(this.template(this.model.toJSON()));
			return this;
		},

		// edit: function(){

		// },

		// close : function(){
		// 	// var newItemName = this.
		// },

		// updateOnEnter : function(event){
		// 	if (event.which === ENTER_KEY){
		// 		this.close()
		// 	}
		// },

		// revertOnEscape : function(){
			
		// },

		clickDefine : function(){
			console.log("start define");

			var key = "quickFiller-" + this.model.id;
			
			chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
				var activeTab = tabs[0];
				var msg = {action:"define", key: key}
				chrome.tabs.sendMessage(activeTab.id, msg, function(response){});
			});
		},

		clickApply: function(){
			console.log("apply");

			var key = "quickFiller-" + this.model.id;
			var filling = JSON.parse(localStorage.getItem(key)).filling;
			
			chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
				var activeTab = tabs[0];
				var msg = {action:"apply", key: key, filling: filling};
				chrome.tabs.sendMessage(activeTab.id, msg, function(response){});
			});
		},

		clickDelete: function(){
			this.model.destroy();
		}
	});
	
	var AppView = Backbone.View.extend({
		el:  "#QuickFiller",

		events: {
			"click #addButton" : "clickAdd",
		},

		initialize : function() {
			this.$input = this.$("#newItem");	
			this.$addButton = this.$("#add");
			this.$main = this.$("#main");
			this.$list = this.$("#list");

			this.listenTo(itemCollection, "add", this.addItem);
			this.listenTo(itemCollection, "all", _.debounce(this.render, 0));

			itemCollection.fetch();
		},

		render : function(){
			if(itemCollection.length){
				this.$main.show();
			}
		},

		clickAdd: function(){
			var newItem = {
				name : this.$input.val().trim(),
				order : itemCollection.newOrder()
			} 

			if (_.isEmpty(newItem.name)){
				return;
			}

			itemCollection.create(newItem);
			this.$input.val("");
		},

		addItem : function(item){
			var view = new ItemView({model:item});
			this.$list.append(view.render().el);
		},

		// createOnEnter : function(event){

		// }

	});

	var app = new AppView();
})(jQuery);


var ethan = 1;
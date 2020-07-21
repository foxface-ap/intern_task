var like = document.querySelector("#like");
var state = false;
var Confirm = document.querySelector("#Confirm");

// following js function toggles textcontent of like button 

like.addEventListener("click",function(){
	if(state == false)
	{
		this.textContent = 'Liked';
		state = true;
	}
	else
	{
		this.innerHTML = 'Like';
		state = false;
	}
});

// for alert messge when profile is to be shared

Confirm.addEventListener("click",function(){
	alert(" Share Profile !!!");
});

// for adding more recipients

$(document).ready(function(){
	$("#add").click(function(){
	  $("#recipient-name").clone().appendTo("#blank");
	});
});

//for removing all recipients

$(document).ready(function(){
	$("#remove").click(function(){
	  $("#blank #recipient-name").remove();
	});
});

//for sending mail

$(document).ready(function(){
	$("#Confirm").click(function(){
	  $("#blank").empty();
	});
});

//for closing pop up window without sending mail

$(document).ready(function(){
	$("#close").click(function(){
	  $("#blank").empty();
	});
});




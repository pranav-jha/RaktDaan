const button = document.querySelector('.btn')
const form   = document.querySelector('.form')


function createBloodBank()
{
	var bbID = document.getElementById("bbID").value;
	var bbName= document.getElementById("bbName").value;
   var bbPassword=document.getElementById("bbPassword").value;
   console.log("jdfk");
	$.get("/createBloodBank?bbId=" + bbID + "&bbName=" + bbName + "&bbPassword="+ bbPassword  , function(data){
		if(data == "Error")
				  {
					  console.log("Error");
				  }
				  else
				  {
					  $("#message").html(bbID +"'s public Address: " + data);
				  }
	});
	
}
var socket = io("http://localhost:8080");

socket.on("connect", function () {

});
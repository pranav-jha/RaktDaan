var Web3 = require("web3");

web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));	

var rcontractContract = web3.eth.contract([{"constant":true,"inputs":[{"internalType":"string","name":"ID","type":"string"},{"internalType":"string","name":"Password","type":"string"}],"name":"authenticateUser","outputs":[{"internalType":"int256","name":"res","type":"int256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"int256","name":"dID","type":"int256"},{"internalType":"string","name":"status","type":"string"}],"name":"changeDonatedBloodStatus","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"ID","type":"string"},{"internalType":"string","name":"Password","type":"string"},{"internalType":"string","name":"newPassword","type":"string"}],"name":"changePassword","outputs":[{"internalType":"int256","name":"res","type":"int256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"string","name":"bbID","type":"string"}],"name":"getBBPA","outputs":[{"internalType":"string","name":"bbPublicAddr","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"bbPublicAddr","type":"string"}],"name":"getBloodAmountbyBloodTypes","outputs":[{"internalType":"int256[]","name":"result","type":"int256[]"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"string","name":"bbPublicAddr","type":"string"}],"name":"getBloodBankDetails","outputs":[{"internalType":"string","name":"bbID","type":"string"},{"internalType":"string","name":"bbName","type":"string"},{"internalType":"string","name":"bbEmail","type":"string"},{"internalType":"string","name":"bbPhone","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getDonatedBloodPacketID","outputs":[{"internalType":"int256","name":"res","type":"int256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"transactionNumber","type":"string"}],"name":"getDonatedBloodStatus","outputs":[{"internalType":"string","name":"dPublicAddr","type":"string"},{"internalType":"int256","name":"dAmount","type":"int256"},{"internalType":"string","name":"dStatus","type":"string"},{"internalType":"string","name":"bbPublicAddr","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"string","name":"dPublicAddr","type":"string"}],"name":"getDonorDetails","outputs":[{"internalType":"string","name":"dName","type":"string"},{"internalType":"string","name":"dBloodType","type":"string"},{"internalType":"string","name":"dContact","type":"string"},{"internalType":"string","name":"dGender","type":"string"},{"internalType":"string","name":"dEmail","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"string","name":"dID","type":"string"}],"name":"getDonorPA","outputs":[{"internalType":"string","name":"dPublicAddr","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getTransactionsBBPubAddrrs","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getTransactionsBloodTypes","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"bbID","type":"string"}],"name":"getTransactionsIntbyBBID","outputs":[{"internalType":"int256[]","name":"donatedIDs","type":"int256[]"},{"internalType":"int256[]","name":"bloodAmounts","type":"int256[]"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getTransactionsNumber","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getTransactionsOperations","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getTransactionsUserIDs","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"transactionNumber","type":"string"}],"name":"mapIDTransaction","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"dPublicAddr","type":"string"},{"internalType":"int256","name":"dAmount","type":"int256"},{"internalType":"string","name":"dStatus","type":"string"},{"internalType":"string","name":"bbPublicAddr","type":"string"}],"name":"receiveBlood","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"bbID","type":"string"},{"internalType":"string","name":"bbPublicAddr","type":"string"},{"internalType":"string","name":"bbName","type":"string"},{"internalType":"string","name":"bbEmail","type":"string"},{"internalType":"string","name":"bbPhone","type":"string"},{"internalType":"string","name":"bbPassword","type":"string"}],"name":"setBloodBankDetails","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"dID","type":"string"},{"internalType":"string","name":"dName","type":"string"},{"internalType":"string","name":"dPublicAddr","type":"string"},{"internalType":"string","name":"dBloodType","type":"string"},{"internalType":"string","name":"dContact","type":"string"},{"internalType":"string","name":"dGender","type":"string"},{"internalType":"string","name":"dEmail","type":"string"}],"name":"setDonorDetails","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"source","type":"string"},{"internalType":"string","name":"destination","type":"string"},{"internalType":"int256","name":"bloodID","type":"int256"}],"name":"transferBlood","outputs":[{"internalType":"int256","name":"result","type":"int256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"dPublicAddr","type":"string"},{"internalType":"int256","name":"dID","type":"int256"},{"internalType":"string","name":"bbPublicAddr","type":"string"}],"name":"useBlood","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]);

var rContract = rcontractContract.at("0x8d157408565289bf8547ae8810be871007d4a158");


var pBloodBankID;
var t;
function generate_seed()
{
	var new_seed = lightwallet.keystore.generateRandomSeed();
	console.log("generate_seed done");
	generate_addresses(new_seed);
}
var totalAddresses = 0;
var newPrivateKey="";
var newPublicKey="";

function generate_addresses(seed)
{
	totalAddresses = 1;
	var password = Math.random().toString();
	lightwallet.keystore.createVault({
		password: password,
		  seedPhrase: seed
	}, function (err, ks) {
	  	ks.keyFromPassword(password, function (err, pwDerivedKey) {
	    		ks.generateNewAddress(pwDerivedKey, totalAddresses);
				var addresses = ks.getAddresses();
				var	address = addresses[0];
				newPublicKey=address;
				var private_key = ks.exportPrivateKey(address, pwDerivedKey);
				newPrivateKey=private_key;
				var balance = web3.eth.getBalance("0x" + address);
		  });
	});
}
function createBloodBank()
{
	var bbID = document.getElementById("bbID").value;
	var bbName= document.getElementById("bbName").value;
	var bbPhone=document.getElementById("bbPhone").value;
	var bbEmail=document.getElementById("bbEmail").value;
   var bbPassword=document.getElementById("bbPassword").value;
   generate_seed();
   var bbPubAddr="0x"+newPublicKey;
   console.log("XD"+bbPubAddr);
   web3.toWei(web3.eth.gasPrice.toString(),"ether");
   if(bbID=="" || bbName=="" || bbPhone=="" || bbEmail=="" || bbPassword==""){
	   alert("Wrong or missing details. Please enter again.");
   }
	rContract.setBloodBankDetails.sendTransaction(bbID,bbPubAddr,bbName,bbEmail,bbPhone,bbPassword, {
		from: web3.eth.accounts[0],
	}, function(error, transactionHash){
		if (!error)
		{
			$("#message").html(bbID +"'s public Address: " + bbPubAddr);
		}
		else
		{
			console.log("Error");
		}
	});
	
}

function bloodBankLogin(){
	var bbID=document.getElementById("bbID").value;
	var bbPassword=document.getElementById("bbPassword").value;
	web3.toWei(web3.eth.gasPrice.toString(),"ether");
	var res=rContract.authenticateUser.call(bbID,bbPassword);
	if(res==1){
		sessionStorage.bloodBankID=bbID;
		window.location.href = "/dashboard";
	}
	else{
		alert("Wrong Password");
	}
	

}
function bloodBankLogout(){
	sessionStorage.removeItem("bloodBankID");
	window.location.href = "/";
}
	
	

function createDonor()
{
	var dID= document.getElementById("dID").value;
	var dName = document.getElementById("dName").value;
	var dBloodType= document.getElementById("dBloodType").value;
	var dContact=document.getElementById("dContact").value;
	var dGender=document.getElementById("dGender").value;
	var dEmail=document.getElementById("dEmail").value;
	generate_seed();
	if(newPublicKey==""){
		generate_seed();
	}
	var dPubAddr="0x"+newPublicKey;
	web3.toWei(web3.eth.gasPrice.toString(),"ether");
	rContract.setDonorDetails.sendTransaction(dID,dName,dPubAddr, dBloodType,dContact,dGender,dEmail, {
		from: web3.eth.accounts[0],
	}, function(error, transactionHash){
		if (!error)
		{
			console.log(transactionHash);
			$("#message").html(dName +"'s public Address: " + dPubAddr);
		}
		else
		{
			res.send("Error");
		}
	});
	
}


function transferBlood()
{
	var dID = document.getElementById("dID").value;
	var destID=document.getElementById("destID").value;
	pBloodBankID=sessionStorage.bloodBankID;
	var sourcePA=rContract.getBBPA.call(pBloodBankID);
	var destPA=rContract.getBBPA.call(destID);
	console.log(destPA);
	
	if(dID=="" || destID==""){
		alert("Enter details");
	}
	else{
		rContract.transferBlood.sendTransaction(sourcePA, destPA, dID, {
			from: web3.eth.accounts[0],
		}, function(error, transactionHash){
			if (!error)
			{
				t=transactionHash;
				$("#message").html( transactionHash);
				
			}
			else
			{
				$("#message").html("Error!!" );
			}
		});
	}
	
}

function getDonatedBloodStatus()
{
	var tID = document.getElementById("tID").value;

	if(tID==""){
		alert("Please enter transaction ID");
	}
	else{
		web3.toWei(web3.eth.gasPrice.toString(),"ether");
	
		$.get("/getDonatedBloodStatus?tID=" + tID , function(data){
			if(data == "Error")
		  			{
		  				console.log("Error");
		  			}
		  			else
		  			{
						  console.log(data[0]);
						  console.log(data);
						  var res="<b>Donor address:</b>"+
						  data[0]+" </br><b>Donated Amount:</b> " + data[1] + "</br><b>Status:</b>" + data[2]+ "</br><b>BloodBank Addr:</b>" +data[3];
		  				$("#message").html(res);
		  			}
		});
	}
	
}
function useBlood()
{
	var dID = document.getElementById("dID").value;
	var dBloodID=document.getElementById("dBloodID").value;
	pBloodBankID=sessionStorage.bloodBankID;
	web3.toWei(web3.eth.gasPrice.toString(),"ether");
	var donorPA=rContract.getDonorPA.call(dID);
	var bbPA=rContract.getBBPA.call(pBloodBankID);
	
	if(dID=="" || dBloodID==""){
		alert("Please enter details");
	}
	else{
		var t;
		var d=rContract.useBlood.sendTransaction(donorPA, dBloodID, bbPA, {
			from: web3.eth.accounts[0],
		}, function(error, transactionHash){
			if (!error)
			{
				t=transactionHash;
				$("#message").html( transactionHash);
				
			}
			else
			{
				$("#message").html("Error!!" );
			}
		});
	}
}

function getBBID(){
	return sessionStorage.bloodBankID;
}
function getBloodBankDetails(){
	pBloodBankID=sessionStorage.bloodBankID;
	var bbPA=rContract.getBBPA.call(pBloodBankID);	
	var details=rContract.getBloodBankDetails.call(bbPA);
	$("#message").html("<hr></t>" + details[0]+"</br><hr></br>" + details[1]+ "</br><hr></br>"+details[3]+"</br><hr></br>"+ details[2]);
}
function mapIDTransaction( )
{
	   
	rContract.mapIDTransaction.sendTransaction(t,{
		from: web3.eth.accounts[0],
	}, function(error, transactionHash){
		if (!error)
		{
			console.log("Success");
		}
		else
		{
			$("#message").html("Error");
		}
	});
	var d=rContract.getDonatedBloodPacketID.call();
	$("#bloodIDDisplay").html("Blood Packet ID: "+d);
}
function receiveBlood()
{
	var dID = document.getElementById("dID").value;
	var dBloodAmount=document.getElementById("dAmount").value;
	var dStatus="Donated";
	pBloodBankID=sessionStorage.bloodBankID;
	web3.toWei(web3.eth.gasPrice.toString(),"ether");
	var donorPA=rContract.getDonorPA.call(dID);
	var bbPA=rContract.getBBPA.call(pBloodBankID);
	
	if(dID==""|| dBloodAmount=="" ){
		alert("Please enter details.");
	}
	else{
		rContract.receiveBlood.sendTransaction(donorPA,dBloodAmount,dStatus,bbPA,{
			from: web3.eth.accounts[0],
		}, function(error, transactionHash){
			if (!error)
			{
				t=transactionHash;
				$("#message").html( transactionHash);
				console.log("Success");
			}
			else
			{
				$("#message").html("Error");
			}
		});
		
	}
	
	
}

async function getBloodAmountAPos(){
	
	//var pBloodBankID=await getLoginID();
	pBloodBankID=sessionStorage.bloodBankID;
	console.log("q"+pBloodBankID);
	$.get("/getBloodAmountbyBloodTypes?bbID="+pBloodBankID, function(data){
		document.getElementById('apos').innerHTML = data[0]+" <small>Units</small>";
	});
}
function getBloodAmountBPos(){
	$.get("/getBloodAmountbyBloodTypes?bbID="+pBloodBankID, function(data){
		document.getElementById('bpos').innerHTML = data[2]+" <small>Units</small>";
	});
}
function getBloodAmountOPos(){
	$.get("/getBloodAmountbyBloodTypes?bbID="+pBloodBankID, function(data){
		document.getElementById('opos').innerHTML = data[6]+" <small>Units</small>";
	});
}
function getBloodAmountABPos(){
	$.get("/getBloodAmountbyBloodTypes?bbID="+pBloodBankID, function(data){
		document.getElementById('abpos').innerHTML = data[4]+" <small>Units</small>";
	});
}
function getBloodAmountBNeg(){
	$.get("/getBloodAmountbyBloodTypes?bbID="+pBloodBankID, function(data){
		document.getElementById('bneg').innerHTML = data[3]+" <small>Units</small>";
	});
}
function getBloodAmountONeg(){
	$.get("/getBloodAmountbyBloodTypes?bbID="+pBloodBankID, function(data){
		document.getElementById('oneg').innerHTML = data[7]+" <small>Units</small>";
	});
}
function getBloodAmountABNeg(){
	$.get("/getBloodAmountbyBloodTypes?bbID="+pBloodBankID, function(data){
		document.getElementById('abneg').innerHTML = data[5]+" <small>Units</small>";
	});
}
function getBloodAmountANeg()
{
	$.get("/getBloodAmountbyBloodTypes?bbID="+pBloodBankID, function(data){
		document.getElementById('aneg').innerHTML = data[1]+" <small>Units</small>";
	});

}

var socket = io("http://localhost:8080");

socket.on("connect", function () {

});


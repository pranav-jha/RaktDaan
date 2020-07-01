var express = require("express");  
var app = express();  
var server = require("http").createServer(app);
var io = require("socket.io")(server);

server.listen(8080);
var pLoginID="";
app.use(express.static("public"));

app.get("/", function(req, res){
	res.sendFile(__dirname + "/public/html/index.html");
})
app.get("/signup", function(req, res){
	res.sendFile(__dirname + "/public/html/signup.html");
})

app.get("/dashboard", function(req, res){
	res.sendFile(__dirname + "/public/html/dashboard.html");
})
app.get("/createDonor", function(req, res){
	res.sendFile(__dirname + "/public/html/donor.html");
})
app.get("/receive", function(req, res){
	res.sendFile(__dirname + "/public/html/receive.html");
})
app.get("/useBlood", function(req, res){
	res.sendFile(__dirname + "/public/html/useBlood.html");
})
app.get("/transfer", function(req, res){
	res.sendFile(__dirname + "/public/html/transfer.html");
})
app.get("/checkStatus", function(req, res){
	res.sendFile(__dirname + "/public/html/donationStatus.html");
})
app.get("/transaction", function(req, res){
	res.sendFile(__dirname + "/public/html/dashboard.html");
})
app.get("/verify", function(req, res){
	res.sendFile(__dirname + "/public/html/verify.html");
})
app.get("/account", function(req, res){
	res.sendFile(__dirname + "/public/html/account.html");
})
var Web3 = require("web3");

web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));	

var rcontractContract = web3.eth.contract([{"constant":true,"inputs":[{"internalType":"string","name":"ID","type":"string"},{"internalType":"string","name":"Password","type":"string"}],"name":"authenticateUser","outputs":[{"internalType":"int256","name":"res","type":"int256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"int256","name":"dID","type":"int256"},{"internalType":"string","name":"status","type":"string"}],"name":"changeDonatedBloodStatus","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"ID","type":"string"},{"internalType":"string","name":"Password","type":"string"},{"internalType":"string","name":"newPassword","type":"string"}],"name":"changePassword","outputs":[{"internalType":"int256","name":"res","type":"int256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"string","name":"bbID","type":"string"}],"name":"getBBPA","outputs":[{"internalType":"string","name":"bbPublicAddr","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"bbPublicAddr","type":"string"}],"name":"getBloodAmountbyBloodTypes","outputs":[{"internalType":"int256[]","name":"result","type":"int256[]"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"string","name":"bbPublicAddr","type":"string"}],"name":"getBloodBankDetails","outputs":[{"internalType":"string","name":"bbID","type":"string"},{"internalType":"string","name":"bbName","type":"string"},{"internalType":"string","name":"bbEmail","type":"string"},{"internalType":"string","name":"bbPhone","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getDonatedBloodPacketID","outputs":[{"internalType":"int256","name":"res","type":"int256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"transactionNumber","type":"string"}],"name":"getDonatedBloodStatus","outputs":[{"internalType":"string","name":"dPublicAddr","type":"string"},{"internalType":"int256","name":"dAmount","type":"int256"},{"internalType":"string","name":"dStatus","type":"string"},{"internalType":"string","name":"bbPublicAddr","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"string","name":"dPublicAddr","type":"string"}],"name":"getDonorDetails","outputs":[{"internalType":"string","name":"dName","type":"string"},{"internalType":"string","name":"dBloodType","type":"string"},{"internalType":"string","name":"dContact","type":"string"},{"internalType":"string","name":"dGender","type":"string"},{"internalType":"string","name":"dEmail","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"string","name":"dID","type":"string"}],"name":"getDonorPA","outputs":[{"internalType":"string","name":"dPublicAddr","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getTransactionsBBPubAddrrs","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getTransactionsBloodTypes","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"bbID","type":"string"}],"name":"getTransactionsIntbyBBID","outputs":[{"internalType":"int256[]","name":"donatedIDs","type":"int256[]"},{"internalType":"int256[]","name":"bloodAmounts","type":"int256[]"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getTransactionsNumber","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getTransactionsOperations","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getTransactionsUserIDs","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"transactionNumber","type":"string"}],"name":"mapIDTransaction","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"dPublicAddr","type":"string"},{"internalType":"int256","name":"dAmount","type":"int256"},{"internalType":"string","name":"dStatus","type":"string"},{"internalType":"string","name":"bbPublicAddr","type":"string"}],"name":"receiveBlood","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"bbID","type":"string"},{"internalType":"string","name":"bbPublicAddr","type":"string"},{"internalType":"string","name":"bbName","type":"string"},{"internalType":"string","name":"bbEmail","type":"string"},{"internalType":"string","name":"bbPhone","type":"string"},{"internalType":"string","name":"bbPassword","type":"string"}],"name":"setBloodBankDetails","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"dID","type":"string"},{"internalType":"string","name":"dName","type":"string"},{"internalType":"string","name":"dPublicAddr","type":"string"},{"internalType":"string","name":"dBloodType","type":"string"},{"internalType":"string","name":"dContact","type":"string"},{"internalType":"string","name":"dGender","type":"string"},{"internalType":"string","name":"dEmail","type":"string"}],"name":"setDonorDetails","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"source","type":"string"},{"internalType":"string","name":"destination","type":"string"},{"internalType":"int256","name":"bloodID","type":"int256"}],"name":"transferBlood","outputs":[{"internalType":"int256","name":"result","type":"int256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"dPublicAddr","type":"string"},{"internalType":"int256","name":"dID","type":"int256"},{"internalType":"string","name":"bbPublicAddr","type":"string"}],"name":"useBlood","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]);

var rContract = rcontractContract.at("0x8d157408565289bf8547ae8810be871007d4a158");


function getBBPA( bloodBankID)
{
	return rContract.getBBPA.call(bloodBankID);
}
app.get("/getBBPA", function(req, res){
	var bbID=req.query.bbID;
	var details = rContract.getBBPA.call(bbID);
	console.log(details);
	res.send(details);
})
function getDonorPA( donorID)
{
	return rContract.getDonorPA.call(donorID);
}
app.get("/getDonorPA", function(req, res){
	var donorID=req.query.dID;
	var details = rContract.getDonorPA.call(donorID);
	res.send(details);
})
function mapIDTransaction( dID, transactionNumber)
{
	rContract.mapIDtransaction.sendTransaction(dID,transactionNumber,{
		from: web3.eth.accounts[0],
	}, function(error, transactionHash){
		if (!error)
		{
			return 1;
		}
		else
		{
			return -1;
		}
	});
}


app.get("/getDonatedBloodStatus", function(req, res){
	var tNo=req.query.tID;
	console.log(tNo);
	var details = rContract.getDonatedBloodStatus.call(tNo);
	console.log(details);
	res.send(details);
})


app.get("/changeDBloodStatus", function(req, res){
	var dID =req.query.dID;
	var status = req.query.dName;
	web3.toWei(web3.eth.gasPrice.toString(),"ether");
	rContract.changeDonatedBloodStatus.sendTransaction(dID,status, {
		from: web3.eth.accounts[0],
	}, function(error, transactionHash){
		if (!error)
		{
			res.send("Success");
		}
		else
		{
			res.send("Error");
		}
	});
})


app.get("/getBloodBankDetails", function(req, res){
	var bbPubAddr=req.query.bbPubAddr;
	var details = rContract.getBloodBankDetails.call(bbPubAddr);
	console.log(details);
	res.send(details);
})





app.get("/useBlood", function(req, res){
	var dPublicAddr=req.query.dPublicAddr;
	var dBloodAmount = req.query.dAmount;
	var bbPubAddr= req.query.bbPubAddr;
	web3.toWei(web3.eth.gasPrice.toString(),"ether");
	var u=rContract.useBlood.sendTransaction(dPublicAddr, dBloodAmount, bbPubAddr, {
		from: web3.eth.accounts[0],
	}, function(error, transactionHash){
		if (!error)
		{
			res.send(transactionHash);
		}
		else
		{
			res.send("Error");
		}
	});
})
app.get("/transferBlood", function(req, res){
	var source=req.query.source;
	var sourcePubAddr= getBBPA(source);
	var destination = req.query.destination;
	var destPubAddr= getBBPA(destination);
	var id= req.query.dID;
	console.log(sourcePubAddr);
	console.log(destPubAddr);
	web3.toWei(web3.eth.gasPrice.toString(),"ether");
	var u=rContract.useBlood.sendTransaction(sourcePubAddr, destPubAddr, id, {
		from: web3.eth.accounts[0],
	}, function(error, transactionHash){
		if (!error)
		{
		
			res.send(transactionHash);
		}
		else
		{
			res.send("Error");
		}
	});
})

app.get("/getBloodAmountbyBloodTypes", function(req, res){
	var bbID=req.query.bbID;
	var bbPubAddr=getBBPA(bbID);
	var details = rContract.getBloodAmountbyBloodTypes.call(bbPubAddr);
	res.send(details);
})

app.get("/getDonorDetails", function(req, res){
	var dPubAddr=req.query.dPubAddr;
	var details = rContract.getDonorDetails.call(dPubAddr);
	res.send(details);
})


/*
app.get("/submit", function(req, res){
	var fileHash = req.query.hash;
	var owner = req.query.owner;
	web3.toWei(web3.eth.gasPrice.toString(),"ether");
	rContract.set.sendTransaction(owner, fileHash, {
		from: web3.eth.accounts[0],
	}, function(error, transactionHash){
		if (!error)
		{
			res.send(transactionHash);
			console.log(fileHash);
		}
		else
		{
			res.send("Error");
		}
	})
})

app.get("/getInfo", function(req, res){
	var fileHash = req.query.hash;
	console.log(fileHash);
	var details = rContract.get.call(fileHash);
	console.log(details);
	res.send(details);
})

rContract.logFileAddedStatus().watch(function(error, result){
	if(!error)
	{
		if(result.args.status == true)
		{
			io.send(result);
		}
	}
})*/

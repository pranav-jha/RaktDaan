pragma solidity >=0.4.22 <0.7.0;
pragma experimental ABIEncoderV2;

contract rContract {
        struct bloodGroup{
            int APositive;
            int ANegative;
            int BPositive;
            int BNegative;
            int ABPositive;
            int ABNegative;
            int OPositive;
            int ONegative;
        }
         struct transaction{
            int dID;
            string userID;
            string transactionNumber;
            int dAmount;
            string dBloodType;
            string operation;
            string bbPublicAddr;
        }
        struct bloodBank{
            string bbID;
            string bbName;
            bloodGroup bbStocks;
            string bbEmail;
            string bbPhone;
            
        }
   
        struct donor{
            string dID;
            string dName;
            string dBloodType;
            string dContact;
            string dGender;
            string dEmail;
        }
        
        struct donatedBlood{
            uint timestamp;
            string dPublicAddr;
            int dAmount;
            string dStatus;
            string bbPublicAddr;
        }
        struct usedBlood{
            int timestamp;
            string pPublicAddr;
            int dAmount;
        }
        
        
        
       
    mapping(string => bloodBank) bloodBanks;
    mapping(string => donor)  donors;
    mapping(int => donatedBlood)  donatedBloods;
    mapping(int => usedBlood)  usedBloods;
    mapping(string => string) bbIDs;
    mapping(string => string) donorIDs;
    mapping(string => int) bloodTransactions;
    mapping(string => string) loginDetails;
    
    transaction[] allTransactions;
    int t=0;
    int d=0;
    int u=0;
    int []ans;
    int [] tDontatedID;int [] tDonatedAmount;
    string[]  tUserID;string[] tTransactionNumber;string[] tOperation;string[] tBBPublicAddr;string[] tBloodType;
    
    function getTransactionsIntbyBBID(string memory bbID) public returns (int[] memory  donatedIDs, int[] memory bloodAmounts )
    {
        delete tDontatedID; delete tDonatedAmount;delete tUserID;delete tTransactionNumber;delete tOperation;delete tBBPublicAddr;delete tBloodType;
        
        for (uint i=0;i < allTransactions.length;i++){
            string memory bbPA=bbIDs[bbID];
            if(keccak256(abi.encodePacked((allTransactions[i].bbPublicAddr)))==keccak256(abi.encodePacked((bbPA))))
            {
            tDontatedID.push(allTransactions[i].dID);
            tUserID.push(allTransactions[i].userID);
            tTransactionNumber.push(allTransactions[i].transactionNumber);
            tDonatedAmount.push(allTransactions[i].dAmount);
            tBloodType.push(allTransactions[i].dBloodType);
            tOperation.push(allTransactions[i].operation);
            tBBPublicAddr.push(allTransactions[i].bbPublicAddr);
            }
        }   
        return (tDontatedID, tDonatedAmount);
    }
    function getTransactionsUserIDs() public view returns ( string[] memory )
    {
        return tUserID;
    }
     function getTransactionsNumber() public view returns ( string[] memory )
    {
        return tTransactionNumber;
    }
    function getTransactionsBloodTypes() public view returns ( string[] memory )
    {
        return tBloodType;
    }
  function getTransactionsOperations() public view returns ( string[] memory )
    {
        return tOperation;
    }
 function getTransactionsBBPubAddrrs() public view returns ( string[] memory )
    {
        return tBBPublicAddr;
    }
    
    
    function authenticateUser(string memory ID, string memory Password) public view returns (int res)
    {
        if(keccak256(abi.encodePacked((loginDetails[ID])))==keccak256(abi.encodePacked((Password)))){
            return 1;
        }
        return 0;
    }
    
     function changePassword (string memory ID, string memory Password, string memory newPassword) public returns (int res)
    {
        if(keccak256(abi.encodePacked((loginDetails[ID])))==keccak256(abi.encodePacked((Password)))){
            loginDetails[ID]=newPassword;
            return 1;
        }
        return 0;
    }
    
    function getBBPA(string memory bbID) public view returns (string memory bbPublicAddr)
    {   
        return bbIDs[bbID];
    }
    function getDonorPA(string memory dID) public view returns (string memory dPublicAddr)
    {   
        return donorIDs[dID];
    }
    function mapIDTransaction(string memory transactionNumber) public 
    {
        bloodTransactions[transactionNumber]=d;
    }
    function getDonatedBloodPacketID() public view returns (int res)
    {
        return d;
    }
    
 
    function getDonatedBloodStatus(string memory transactionNumber) public returns(string memory dPublicAddr, int dAmount, string memory dStatus, string memory bbPublicAddr)
    {
        int dID=bloodTransactions[transactionNumber];
        
        return(donatedBloods[dID].dPublicAddr,donatedBloods[dID].dAmount,donatedBloods[dID].dStatus,donatedBloods[dID].bbPublicAddr);
    }
    function changeDonatedBloodStatus (int dID, string memory status ) public
    {
        donatedBloods[dID].dStatus=status;
    }
    function setBloodBankDetails(string memory bbID,string memory bbPublicAddr, string memory bbName, string memory bbEmail, string memory bbPhone, string memory bbPassword) public
    {
        bloodGroup memory bbStocks= bloodGroup(0,0,0,0,0,0,0,0);
        loginDetails[bbID]=bbPassword;
        bbIDs[bbID]=bbPublicAddr;
        bloodBanks[bbPublicAddr]=bloodBank(bbID,bbName,bbStocks,bbEmail,bbPhone);
    }
    function getBloodBankDetails(string memory bbPublicAddr) public view returns (string memory bbID, string memory bbName, string memory bbEmail,  string memory bbPhone )
   {       
        return (bloodBanks[bbPublicAddr].bbID,bloodBanks[bbPublicAddr].bbName,bloodBanks[bbPublicAddr].bbEmail,bloodBanks[bbPublicAddr].bbPhone);
    }
    
    function setDonorDetails(string memory dID, string memory dName,string memory dPublicAddr,string memory dBloodType,string memory dContact , string memory dGender, string memory dEmail) public
    {
        donorIDs[dID]=dPublicAddr;
        donors[dPublicAddr]=donor(dID, dName,dBloodType,dContact,dGender,dEmail);
    }
    
    function getDonorDetails(string memory dPublicAddr) public view returns (string memory dName,string memory dBloodType, string memory dContact, string memory  dGender, string memory dEmail)
    { 
        return (donors[dPublicAddr].dName,donors[dPublicAddr].dBloodType,donors[dPublicAddr].dContact,donors[dPublicAddr].dGender, donors[dPublicAddr].dEmail);
    }
    function receiveBlood(string memory dPublicAddr,int dAmount,string memory dStatus, string memory bbPublicAddr) public
    {
        d=d+1;
        donatedBloods[d]=donatedBlood(block.timestamp,dPublicAddr,dAmount,dStatus,bbPublicAddr);
        
        string memory  bloodType= donors[dPublicAddr].dBloodType;
        if (keccak256(abi.encodePacked((bloodType)))==keccak256(abi.encodePacked(("APositive")))){bloodBanks[bbPublicAddr].bbStocks.APositive= bloodBanks[bbPublicAddr].bbStocks.APositive+ dAmount;}
        else if(keccak256(abi.encodePacked((bloodType)))==keccak256(abi.encodePacked(("BPositive")))){bloodBanks[bbPublicAddr].bbStocks.BPositive= bloodBanks[bbPublicAddr].bbStocks.BPositive + dAmount;}
        else if(keccak256(abi.encodePacked((bloodType)))==keccak256(abi.encodePacked(("ABPositive")))){bloodBanks[bbPublicAddr].bbStocks.ABPositive= bloodBanks[bbPublicAddr].bbStocks.ABPositive+dAmount;}
        else if(keccak256(abi.encodePacked((bloodType)))==keccak256(abi.encodePacked(("OPositive")))){bloodBanks[bbPublicAddr].bbStocks.OPositive= bloodBanks[bbPublicAddr].bbStocks.OPositive+dAmount;}
        else if(keccak256(abi.encodePacked((bloodType)))==keccak256(abi.encodePacked(("ANegative")))){bloodBanks[bbPublicAddr].bbStocks.ANegative= bloodBanks[bbPublicAddr].bbStocks.ANegative+dAmount;}
        else if(keccak256(abi.encodePacked((bloodType)))==keccak256(abi.encodePacked(("BNegative")))){bloodBanks[bbPublicAddr].bbStocks.BNegative=bloodBanks[bbPublicAddr].bbStocks.BNegative+dAmount;}
        else if(keccak256(abi.encodePacked((bloodType)))==keccak256(abi.encodePacked(("ABNegative")))){bloodBanks[bbPublicAddr].bbStocks.ABNegative=bloodBanks[bbPublicAddr].bbStocks.ABNegative+dAmount;}
        else if(keccak256(abi.encodePacked((bloodType)))==keccak256(abi.encodePacked(("ONegative")))){bloodBanks[bbPublicAddr].bbStocks.ONegative=bloodBanks[bbPublicAddr].bbStocks.ONegative+dAmount;}

        else{
            d=d-1;
           return;
        }
        allTransactions.push(transaction(d,dPublicAddr,"",dAmount,bloodType,dStatus,bbPublicAddr));
    }
    

     function useBlood(string memory dPublicAddr,int dID, string memory bbPublicAddr ) public 
    {
        donatedBloods[dID].dStatus="Used";
        int dAmount=donatedBloods[dID].dAmount;
        string memory  bloodType= donors[dPublicAddr].dBloodType;
        if (keccak256(abi.encodePacked((bloodType)))==keccak256(abi.encodePacked(("APositive"))) && bloodBanks[bbPublicAddr].bbStocks.APositive>=dAmount){bloodBanks[bbPublicAddr].bbStocks.APositive= bloodBanks[bbPublicAddr].bbStocks.APositive- dAmount;}
        else if(keccak256(abi.encodePacked((bloodType)))==keccak256(abi.encodePacked(("BPositive"))) && bloodBanks[bbPublicAddr].bbStocks.BPositive>=dAmount){bloodBanks[bbPublicAddr].bbStocks.BPositive= bloodBanks[bbPublicAddr].bbStocks.BPositive - dAmount;}
        else if(keccak256(abi.encodePacked((bloodType)))==keccak256(abi.encodePacked(("ABPositive"))) && bloodBanks[bbPublicAddr].bbStocks.ABPositive>=dAmount){bloodBanks[bbPublicAddr].bbStocks.ABPositive= bloodBanks[bbPublicAddr].bbStocks.ABPositive-dAmount;}
        else if(keccak256(abi.encodePacked((bloodType)))==keccak256(abi.encodePacked(("OPositive"))) && bloodBanks[bbPublicAddr].bbStocks.OPositive>=dAmount){bloodBanks[bbPublicAddr].bbStocks.OPositive= bloodBanks[bbPublicAddr].bbStocks.OPositive-dAmount;}
        else if(keccak256(abi.encodePacked((bloodType)))==keccak256(abi.encodePacked(("ANegative"))) && bloodBanks[bbPublicAddr].bbStocks.ANegative>=dAmount){bloodBanks[bbPublicAddr].bbStocks.ANegative= bloodBanks[bbPublicAddr].bbStocks.ANegative-dAmount;}
        else if(keccak256(abi.encodePacked((bloodType)))==keccak256(abi.encodePacked(("BNegative"))) && bloodBanks[bbPublicAddr].bbStocks.BNegative>=dAmount){bloodBanks[bbPublicAddr].bbStocks.BNegative=bloodBanks[bbPublicAddr].bbStocks.BNegative-dAmount;}
        else if(keccak256(abi.encodePacked((bloodType)))==keccak256(abi.encodePacked(("ABNegative"))) && bloodBanks[bbPublicAddr].bbStocks.ABNegative>=dAmount){bloodBanks[bbPublicAddr].bbStocks.ABNegative=bloodBanks[bbPublicAddr].bbStocks.ABNegative-dAmount;}
        else if(keccak256(abi.encodePacked((bloodType)))==keccak256(abi.encodePacked(("ONegative"))) && bloodBanks[bbPublicAddr].bbStocks.ONegative>=dAmount){bloodBanks[bbPublicAddr].bbStocks.ONegative=bloodBanks[bbPublicAddr].bbStocks.ONegative-dAmount;}
        else{
            return ;
        }
        allTransactions.push(transaction(dID,dPublicAddr,"",dAmount,bloodType,"Used",bbPublicAddr));
     
    }

    function transferBlood(string memory source, string memory destination, int bloodID ) public returns (int result)
    {
        string memory currAddr=donatedBloods[bloodID].bbPublicAddr;
        if( keccak256(abi.encodePacked((currAddr)))==keccak256(abi.encodePacked((source))))
        {
            donatedBloods[bloodID].bbPublicAddr= destination;
            string memory  bloodType= donors[donatedBloods[bloodID].dPublicAddr].dBloodType;
            if (keccak256(abi.encodePacked((bloodType)))==keccak256(abi.encodePacked(("APositive"))) && bloodBanks[source].bbStocks.APositive>=donatedBloods[bloodID].dAmount){bloodBanks[source].bbStocks.APositive= bloodBanks[source].bbStocks.APositive- donatedBloods[bloodID].dAmount;}
            else if(keccak256(abi.encodePacked((bloodType)))==keccak256(abi.encodePacked(("BPositive"))) && bloodBanks[source].bbStocks.BPositive>=donatedBloods[bloodID].dAmount){bloodBanks[source].bbStocks.BPositive= bloodBanks[source].bbStocks.BPositive - donatedBloods[bloodID].dAmount;}
            else if(keccak256(abi.encodePacked((bloodType)))==keccak256(abi.encodePacked(("ABPositive"))) && bloodBanks[source].bbStocks.ABPositive>=donatedBloods[bloodID].dAmount){bloodBanks[source].bbStocks.ABPositive= bloodBanks[source].bbStocks.ABPositive-donatedBloods[bloodID].dAmount;}
            else if(keccak256(abi.encodePacked((bloodType)))==keccak256(abi.encodePacked(("OPositive"))) && bloodBanks[source].bbStocks.OPositive>=donatedBloods[bloodID].dAmount){bloodBanks[source].bbStocks.OPositive= bloodBanks[source].bbStocks.OPositive-donatedBloods[bloodID].dAmount;}
            else if(keccak256(abi.encodePacked((bloodType)))==keccak256(abi.encodePacked(("ANegative"))) && bloodBanks[source].bbStocks.ANegative>=donatedBloods[bloodID].dAmount){bloodBanks[source].bbStocks.ANegative= bloodBanks[source].bbStocks.ANegative-donatedBloods[bloodID].dAmount;}
            else if(keccak256(abi.encodePacked((bloodType)))==keccak256(abi.encodePacked(("BNegative"))) && bloodBanks[source].bbStocks.BNegative>=donatedBloods[bloodID].dAmount){bloodBanks[source].bbStocks.BNegative=bloodBanks[source].bbStocks.BNegative-donatedBloods[bloodID].dAmount;}
            else if(keccak256(abi.encodePacked((bloodType)))==keccak256(abi.encodePacked(("ABNegative"))) && bloodBanks[source].bbStocks.ABNegative>=donatedBloods[bloodID].dAmount){bloodBanks[source].bbStocks.ABNegative=bloodBanks[source].bbStocks.ABNegative-donatedBloods[bloodID].dAmount;}
            else
            {
                bloodBanks[source].bbStocks.ONegative=bloodBanks[source].bbStocks.ONegative-donatedBloods[bloodID].dAmount;
    
            }
            
            donatedBloods[bloodID].dStatus="Transferred";
            string memory dPublicAddr= donatedBloods[bloodID].dPublicAddr;
            int dAmount=donatedBloods[bloodID].dAmount;
            allTransactions.push(transaction(bloodID,dPublicAddr,"",dAmount,bloodType,"Transferred",source));
            
            if (keccak256(abi.encodePacked((bloodType)))==keccak256(abi.encodePacked(("APositive")))){bloodBanks[destination].bbStocks.APositive= bloodBanks[destination].bbStocks.APositive+ donatedBloods[bloodID].dAmount;}
            else if(keccak256(abi.encodePacked((bloodType)))==keccak256(abi.encodePacked(("BPositive")))){bloodBanks[destination].bbStocks.BPositive= bloodBanks[destination].bbStocks.BPositive + donatedBloods[bloodID].dAmount;}
            else if(keccak256(abi.encodePacked((bloodType)))==keccak256(abi.encodePacked(("ABPositive")))){bloodBanks[destination].bbStocks.ABPositive= bloodBanks[destination].bbStocks.ABPositive+donatedBloods[bloodID].dAmount;}
            else if(keccak256(abi.encodePacked((bloodType)))==keccak256(abi.encodePacked(("OPositive")))){bloodBanks[destination].bbStocks.OPositive= bloodBanks[destination].bbStocks.OPositive+donatedBloods[bloodID].dAmount;}
            else if(keccak256(abi.encodePacked((bloodType)))==keccak256(abi.encodePacked(("ANegative")))){bloodBanks[destination].bbStocks.ANegative= bloodBanks[destination].bbStocks.ANegative+donatedBloods[bloodID].dAmount;}
            else if(keccak256(abi.encodePacked((bloodType)))==keccak256(abi.encodePacked(("BNegative")))){bloodBanks[destination].bbStocks.BNegative=bloodBanks[destination].bbStocks.BNegative+donatedBloods[bloodID].dAmount;}
            else if(keccak256(abi.encodePacked((bloodType)))==keccak256(abi.encodePacked(("ABNegative")))){bloodBanks[destination].bbStocks.ABNegative=bloodBanks[destination].bbStocks.ABNegative+donatedBloods[bloodID].dAmount;}
            else if(keccak256(abi.encodePacked((bloodType)))==keccak256(abi.encodePacked(("ONegative")))){bloodBanks[destination].bbStocks.ONegative=bloodBanks[destination].bbStocks.ONegative+donatedBloods[bloodID].dAmount;}
    
            else{
                return 0;
            }
            
            allTransactions.push(transaction(bloodID,dPublicAddr,"",dAmount,bloodType,"Transferred",destination));

            
            return 1;
        }
        return 0;
    }
    
 function getBloodAmountbyBloodTypes(string memory bbPublicAddr) public returns (int[] memory result){
        
        delete ans;
        ans.push(bloodBanks[bbPublicAddr].bbStocks.APositive);
        ans.push(bloodBanks[bbPublicAddr].bbStocks.ANegative);
        ans.push(bloodBanks[bbPublicAddr].bbStocks.BPositive);
        ans.push(bloodBanks[bbPublicAddr].bbStocks.BNegative);
        ans.push(bloodBanks[bbPublicAddr].bbStocks.ABPositive);
        ans.push(bloodBanks[bbPublicAddr].bbStocks.ABNegative);
        ans.push(bloodBanks[bbPublicAddr].bbStocks.OPositive);
        ans.push(bloodBanks[bbPublicAddr].bbStocks.ONegative);
        return (ans);
 }
} 
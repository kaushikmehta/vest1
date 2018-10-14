// var contractaddress = '0x3e1c4a1bbc244390c74fdff05ab7b7803bf114c7'; // KM

// SCANNER JS CODE

let scannedContent = "";

function callScanner () {

  document.getElementById("wrap").style.display = "inline";

   let scanner = new Instascan.Scanner({ video: document.getElementById('preview') });
      scanner.addListener('scan', function (content) {

        // scannedContent = content;
        // document.getElementById("yourInputFieldId").value = content; // Pass the scanned content value to an input field

        // document.getElementById("verifyOwner").style.display = "inline";

        let p = document.createElement("div");
        p.innerHTML = content;
        scannedContent = content;
        document.getElementById("output").appendChild(p);
 		
 		document.getElementById("checkOwner").classList.remove('disabled');

        // checkOwner(scannedContent);
      });


      Instascan.Camera.getCameras().then(function (cameras) {
        if (cameras.length > 0) {
          scanner.start(cameras[0]);
        } else {
          console.error('No cameras found.');
        }
      }).catch(function (e) {
        console.error(e);
      });



    // document.getElementById("verifyOwner").style.display = "inline";
} // end of callScanner


function resellToken() {

}

// END OF SCANNER JS CODE


var contractaddress = "0x60083900c9d6b6c9e69202c7c1c9f0a8a1be2112" // BlockFest
var providers = ethers.providers;
var utils = ethers.utils;
var network = providers.networks.ropsten;


// var provider = providers.getDefaultProvider(network);
var provider = new providers.Web3Provider(web3.currentProvider,'rinkeby');
var signer;
var contract;
var abi =
[
	{
		"constant": true,
		"inputs": [
			{
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "to",
				"type": "address"
			},
			{
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "from",
				"type": "address"
			},
			{
				"name": "to",
				"type": "address"
			},
			{
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "owner",
				"type": "address"
			},
			{
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "tokenOfOwnerByIndex",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "from",
				"type": "address"
			},
			{
				"name": "to",
				"type": "address"
			},
			{
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "tokenByIndex",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "Shirts",
		"outputs": [
			{
				"name": "picURL",
				"type": "string"
			},
			{
				"name": "uniqueId",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "account",
				"type": "address"
			}
		],
		"name": "addMinter",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "renounceMinter",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "to",
				"type": "address"
			},
			{
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "account",
				"type": "address"
			}
		],
		"name": "isMinter",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_Id",
				"type": "uint256"
			},
			{
				"name": "picURL",
				"type": "string"
			},
			{
				"name": "_uniqueId",
				"type": "bytes32"
			}
		],
		"name": "putTokenOnSaleNew",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "uniqueId",
				"type": "bytes32"
			}
		],
		"name": "verifyOwner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "from",
				"type": "address"
			},
			{
				"name": "to",
				"type": "address"
			},
			{
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"name": "_data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_Id",
				"type": "uint256"
			}
		],
		"name": "putTokenOnSale",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "to",
				"type": "address"
			},
			{
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"name": "picURL",
				"type": "string"
			},
			{
				"name": "uniqueId",
				"type": "bytes32"
			}
		],
		"name": "mint",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "owner",
				"type": "address"
			},
			{
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "symbol",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "saleAddress",
				"type": "address"
			}
		],
		"name": "tokenOnSale",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "account",
				"type": "address"
			}
		],
		"name": "MinterAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "account",
				"type": "address"
			}
		],
		"name": "MinterRemoved",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	}
]

//Set up ownerWallet and owner contract


function UpdateDapp(){
//Connect To smart contract
  provider.listAccounts().then(function(accounts) {

      signer = provider.getSigner(accounts[0]);

      // console.log(accounts[0]);
      // console.log(provider);
      // console.log(signer);
      contract = new ethers.Contract(contractaddress, abi, signer);
      console.log("contract: "+contract);
//GetOwnedTokens

      getOwnedTokens(accounts);    // Get owned tokens for current metamask address

});
}

    //List items


    function mintHouse(){



      provider.listAccounts().then(function(accounts) {
        signer = provider.getSigner(accounts[0]);
        contract = new ethers.Contract(contractaddress, abi, signer);


            var totalSupplyPromise = contract.totalSupply();
            var totalSupply;
            totalSupplyPromise.then(function(value) {

              totalSupply = value._bn.words[0];
              // console.log(totalSupply);

              var picURL = "https://www.hopeintheharvest.org/wp-content/uploads/2017/07/tshirt-shirt-basic-round.png";
              var uniqueId = web3.fromAscii(scannedContent);

              // console.log('acc: ' + accounts[0]);
              // console.log('totalSupply: ' + totalSupply+1);
              // console.log(picURL);
              // console.log(uniqueId);



              var mintHousePromise = contract.mint(accounts[0],totalSupply+1,picURL,uniqueId);
                mintHousePromise.then(function(value){
                  // console.log(value);
                })
            })
    });
  }

    function transferHouseOwnership(_ToAddress, _TokenID){
      provider.listAccounts().then(function(accounts) {
              signer = provider.getSigner(accounts[0]);
             console.log(_TokenID);
             console.log(_ToAddress + "asdfasdf");
             var SendTokenPromise = contract.transferFrom(accounts[0],_ToAddress,_TokenID);
             SendTokenPromise.then(function(result){
               console.log(result);
             })
          });
    }

    function getOwnedTokens(accounts){

      OwnedTokens = [];

        // signer = provider.getSigner(accounts[0]);
        contract = new ethers.Contract(contractaddress, abi, signer);

          provider.listAccounts().then(function(accounts) {
          CurrentAccount = provider.getSigner(accounts[0]);
          // console.log(CurrentAccount);


        });


          var totalSupplyPromise = contract.totalSupply();
            var totalSupply;
            totalSupplyPromise.then(function(value) {

              totalSupply = parseInt(value);
                 // console.log(totalSupply);

                  for (i = 1; i <= totalSupply ; i++) {
            var OwnerOfPromise = contract.ownerOf(i);



            OwnerOfPromise.index = i;
            setTimeout(function(owner) {
              owner.then(function(result) {
                 // console.log(result);
                 // console.log(CurrentAccount.address);
                 // console.log(owner.index);
                if(result==CurrentAccount.address){

                  OwnedTokens.push(owner.index);
                }
                  // console.log(OwnedTokens);

            })
          }, 100, OwnerOfPromise);
        };
      });

          // console.log("Current Account: " + CurrentAccount);



    }
function changePicture(accounts) {
	var myOwnedTokens = document.getElementById('myOwnedTokens');

	// var housediv = document.getElementById('housediv');



	myOwnedTokens.innerHTML = "";



  var arrayHouses = OwnedTokens;
  console.log(arrayHouses);

  	//   for(var m = 0 ; m <= OwnedTokens.length ; m ++ ){

  	// 		var k = document.createElement("p");
   //          var tricky = document.createTextNode("TokenID: " + OwnedTokens[m]);
   //          k.appendChild(tricky);
  			

  	// 		console.log();

  	// }
  	var refid = 1;
    for (i = 0; i < arrayHouses.length; i++) {
        var GetImageLinkPromise;
      HouseID = arrayHouses[i];

      GetImageLinkPromise = contract.Shirts(HouseID);


      		
            	
      setTimeout(function(owner) {

      		

          owner.then(function(value){
            // console.log(value.ImageLink);

            
            // var h = document.createElement("p");
            // var mlsnum = document.createTextNode(value.MLSNumber);
            // h.appendChild(mlsnum);
            // h.style.fontWeight = "650";

            // var j = document.createElement("p");
            // var price = document.createTextNode(value.Price);
            // j.appendChild(price);
            // j.style.fontWeight = "250";

           
            // k.style.fontWeight = "250";

            

            var img = document.createElement('img');
            img.src = "img/shirt.jpeg";
            img.className = 'token'

            var li = document.createElement('li');
            li.className = "items";
            // li.id = refid;

            // li.appendChild(h);
            li.appendChild(img);
            // li.appendChild(j);
            // li.appendChild(k);

       		
       	

			

            refid++;
            
            // li.appendChild(k);
            

            setTimeout(myOwnedTokens.appendChild(li), 1000);

          })

    }, 2000, GetImageLinkPromise);
  };
 



  
 	

 }// Change Picture


    function identifyAccount () {

      provider.listAccounts().then(function(accounts) {
        signer = provider.getSigner(accounts[0]);


        document.getElementById("accountText").innerHTML = "Signed in as: " + signer.address;

    });

    }

    // function verifyOwner(bytes32 uniqueId) {
      function checkOwner() {
      // document.getElementById('nextSteps').style.display = "inline";
      // document.getElementById('mintToken').style.display = "inline";
      // document.getElementById('getOwned').style.display = "inline";


      scannedContent

      if (scannedContent == "") {


      var uniqueId ="";
      console.log("Confirming blank UID:" + uniqueId);

	   } else {

      var uniqueId = web3.fromAscii(scannedContent);
      console.log("check UID:" + uniqueId);

	   }



      // console.log(contract);
      verifyOwnerPromise = contract.verifyOwner(uniqueId);
      verifyOwnerPromise.then(function(result){
        console.log("Owned by " + result);

        console.log("Person signed in " + signer.address);


        if(signer.address === result) {
        	result = "You!";

        }else {
        	result = result;
        }

        var string = "The shirt you Scanned is Owned by " + result;
         document.getElementById("customVerification").innerHTML = string;

         document.getElementById("mint").classList.remove('disabled');


        return result;
      })
    }


function putTokenOnSale() {
      var tokenId = document.getElementById("tid").value;

      getTokenSalePromise = contract.putTokenOnSale(tokenId);
      getTokenSalePromise.then(function(result){
        console.log(result);
      })

      contract.once("tokenOnSale", (address, event) => {
        


      	var qrurl = "https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl="+address+"&choe=UTF-8"

        alert("The shirt is now on sale at the below address. Pay 1 ETH to buy it." +"\n" + qrurl );
      });


    }


    function enableMint() {
      document.getElementById("mint").classList.remove('disabled');

    }



function showID() {

	var items = document.getElementById("myOwnedTokens").childNodes;

	// console.log(items);

	
	for (var i = 0; i < OwnedTokens.length; ++i) {

		console.log(items[i]);

			var k = document.createElement("p");
            var id = document.createTextNode('ID: '+ OwnedTokens[i]);

            k.type = 'radio';
            k.label = id;
            k.id = OwnedTokens[i];


            k.appendChild(id);
  			// do something with items[i], which is a <li> element

  			items[i].appendChild(k);


}




}




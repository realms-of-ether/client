const abi = [
  {
    "constant": false,
    "inputs": [
      {
        "name": "_fortressHash",
        "type": "bytes32"
      }
    ],
    "name": "endAuction",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "fortressStorage",
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
        "name": "",
        "type": "bytes32"
      }
    ],
    "name": "balanceAuction",
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
    "name": "getFortressCount",
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
        "name": "_index",
        "type": "uint256"
      }
    ],
    "name": "getTroupHash",
    "outputs": [
      {
        "name": "",
        "type": "bytes32"
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
        "name": "_name",
        "type": "bytes16"
      },
      {
        "name": "_action",
        "type": "uint256"
      },
      {
        "name": "_actionRate",
        "type": "uint256"
      },
      {
        "name": "_actionValue",
        "type": "bytes32"
      },
      {
        "name": "_actionTimeout",
        "type": "uint256"
      },
      {
        "name": "_gold",
        "type": "uint256"
      },
      {
        "name": "_wood",
        "type": "uint256"
      },
      {
        "name": "_stone",
        "type": "uint256"
      }
    ],
    "name": "createBuilding",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "name": "balances",
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
        "name": "_fortressHash",
        "type": "bytes32"
      },
      {
        "name": "_buildingHash",
        "type": "bytes32"
      }
    ],
    "name": "build",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "unpause",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "troupStorage",
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
    "inputs": [],
    "name": "getFortressesAvailable",
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
    "name": "getTroupIndexLength",
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
        "name": "_name",
        "type": "bytes16"
      }
    ],
    "name": "createFortress",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
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
    "name": "auctions",
    "outputs": [
      {
        "name": "",
        "type": "bytes32"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "paused",
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
    "inputs": [
      {
        "name": "",
        "type": "bytes32"
      }
    ],
    "name": "highestBid",
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
        "name": "_buildingHash",
        "type": "bytes32"
      }
    ],
    "name": "getBuilding",
    "outputs": [
      {
        "name": "_name",
        "type": "bytes16"
      },
      {
        "name": "_action",
        "type": "uint256"
      },
      {
        "name": "_actionRate",
        "type": "uint256"
      },
      {
        "name": "_actionValue",
        "type": "bytes32"
      },
      {
        "name": "_actionTimeout",
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
        "name": "_troupHash",
        "type": "bytes32"
      }
    ],
    "name": "getTroupCosts",
    "outputs": [
      {
        "name": "_gold",
        "type": "uint256"
      },
      {
        "name": "_stone",
        "type": "uint256"
      },
      {
        "name": "_wood",
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
        "type": "bytes32"
      }
    ],
    "name": "auctionEnd",
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
        "name": "_user",
        "type": "address"
      },
      {
        "name": "_index",
        "type": "uint256"
      }
    ],
    "name": "getHashFromIndex",
    "outputs": [
      {
        "name": "",
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
        "name": "_buildingHash",
        "type": "bytes32"
      }
    ],
    "name": "getBuildingCosts",
    "outputs": [
      {
        "name": "_gold",
        "type": "uint256"
      },
      {
        "name": "_stone",
        "type": "uint256"
      },
      {
        "name": "_wood",
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
        "name": "_troupHash",
        "type": "bytes32"
      }
    ],
    "name": "getTroup",
    "outputs": [
      {
        "name": "_name",
        "type": "bytes16"
      },
      {
        "name": "_life",
        "type": "uint256"
      },
      {
        "name": "_strength",
        "type": "uint256"
      },
      {
        "name": "_intelligence",
        "type": "uint256"
      },
      {
        "name": "_dexterity",
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
    "name": "stoneHash",
    "outputs": [
      {
        "name": "",
        "type": "bytes32"
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
        "name": "_fortressHash",
        "type": "bytes32"
      },
      {
        "name": "_newOwner",
        "type": "address"
      }
    ],
    "name": "transferFortress",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_user",
        "type": "address"
      }
    ],
    "name": "getUserAuctionsLength",
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
    "inputs": [],
    "name": "pause",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "goldHash",
    "outputs": [
      {
        "name": "",
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
        "name": "_fortressHash",
        "type": "bytes32"
      }
    ],
    "name": "getResources",
    "outputs": [
      {
        "name": "_gold",
        "type": "uint256"
      },
      {
        "name": "_stone",
        "type": "uint256"
      },
      {
        "name": "_wood",
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
    "name": "owner",
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
        "name": "_fortressHash",
        "type": "bytes32"
      }
    ],
    "name": "withdraw",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_name",
        "type": "bytes16"
      },
      {
        "name": "_life",
        "type": "uint256"
      },
      {
        "name": "_strength",
        "type": "uint256"
      },
      {
        "name": "_intelligence",
        "type": "uint256"
      },
      {
        "name": "_dexterity",
        "type": "uint256"
      },
      {
        "name": "_gold",
        "type": "uint256"
      },
      {
        "name": "_wood",
        "type": "uint256"
      },
      {
        "name": "_stone",
        "type": "uint256"
      }
    ],
    "name": "createTroup",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_fortressHash",
        "type": "bytes32"
      },
      {
        "name": "_buildingHash",
        "type": "bytes32"
      }
    ],
    "name": "getFortressBuilding",
    "outputs": [
      {
        "name": "_level",
        "type": "uint256"
      },
      {
        "name": "_timeout",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "startMinting",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "woodHash",
    "outputs": [
      {
        "name": "",
        "type": "bytes32"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "totalBalance",
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
        "name": "_withdraw",
        "type": "address"
      }
    ],
    "name": "withdrawExcess",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "address"
      },
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "userAuctions",
    "outputs": [
      {
        "name": "",
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
        "name": "",
        "type": "bytes32"
      }
    ],
    "name": "highestBidder",
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
        "name": "_fortressHash",
        "type": "bytes32"
      }
    ],
    "name": "getFortress",
    "outputs": [
      {
        "name": "_name",
        "type": "bytes16"
      },
      {
        "name": "_owner",
        "type": "address"
      },
      {
        "name": "_x",
        "type": "int256"
      },
      {
        "name": "_y",
        "type": "int256"
      },
      {
        "name": "_wins",
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
        "type": "bytes32"
      }
    ],
    "name": "auctionOwner",
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
        "name": "_fortressHash",
        "type": "bytes32"
      },
      {
        "name": "_troupHash",
        "type": "bytes32"
      }
    ],
    "name": "getFortressTroups",
    "outputs": [
      {
        "name": "_amount",
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
        "name": "_fortressHash",
        "type": "bytes32"
      },
      {
        "name": "_user",
        "type": "address"
      }
    ],
    "name": "getAuctionAmount",
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
        "name": "_fortressHash",
        "type": "bytes32"
      }
    ],
    "name": "bidAuction",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_index",
        "type": "uint256"
      }
    ],
    "name": "getBuildingHash",
    "outputs": [
      {
        "name": "",
        "type": "bytes32"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getBuildingIndexLength",
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
    "name": "getAuctionsLength",
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
        "name": "_fortressHash",
        "type": "bytes32"
      },
      {
        "name": "_buildingHash",
        "type": "bytes32"
      }
    ],
    "name": "buildingAction",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_newContract",
        "type": "address"
      }
    ],
    "name": "upgradeGame",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "buildingStorage",
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
        "name": "_fortressHash",
        "type": "bytes32"
      }
    ],
    "name": "startAuction",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_user",
        "type": "address"
      }
    ],
    "name": "getIndexLength",
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
    "inputs": [
      {
        "name": "_fortressStorage",
        "type": "address"
      },
      {
        "name": "_troupStorage",
        "type": "address"
      },
      {
        "name": "_buildingStorage",
        "type": "address"
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
        "name": "name",
        "type": "bytes16"
      },
      {
        "indexed": false,
        "name": "hash",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "x",
        "type": "int256"
      },
      {
        "indexed": false,
        "name": "y",
        "type": "int256"
      }
    ],
    "name": "LogFortressCreated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "fortressHash",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "name": "buildingHash",
        "type": "bytes32"
      }
    ],
    "name": "LogBuild",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "fortressHash",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "name": "buildingHash",
        "type": "bytes32"
      }
    ],
    "name": "LogBuildingAction",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "buildingHash",
        "type": "bytes32"
      }
    ],
    "name": "LogBuildingCreated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "troupHash",
        "type": "bytes32"
      }
    ],
    "name": "LogTroupCreated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "Pause",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "Unpause",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  }
];

const RealmsOfEtherContract = web3.eth.contract(abi);

const instance = RealmsOfEtherContract.at('0x0716d44d5991b15256A2de5769e1376D569Bba7C');

export default instance;
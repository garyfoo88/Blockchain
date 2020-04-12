const BlockChain = require('./blockchain');

const bitcoin = new BlockChain();

const bc1 = {
    chain: [
    {
    index: 1,
    timestamp: 1586659621945,
    transactions: [ ],
    nonce: 100,
    hash: "0",
    previousBlockHash: "0"
    },
    {
    index: 2,
    timestamp: 1586659647798,
    transactions: [ ],
    nonce: 18140,
    hash: "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
    previousBlockHash: "0"
    },
    {
    index: 3,
    timestamp: 1586659772336,
    transactions: [
    {
    amount: 12.5,
    sender: "00",
    recipient: "e2f5b290-7c67-11ea-9705-4d23fe7ad1fe",
    transactionId: "f2667ca07c6711ea97054d23fe7ad1fe"
    },
    {
    amount: 10,
    sender: "EHUHFEIF3I3IBI3B3IB",
    recipient: "KDNFEFNJI3UI3I3IB3UIB",
    transactionId: "2f324c907c6811ea97054d23fe7ad1fe"
    },
    {
    amount: 20,
    sender: "EHUHFEIF3I3IBI3B3IB",
    recipient: "KDNFEFNJI3UI3I3IB3UIB",
    transactionId: "32544d107c6811ea97054d23fe7ad1fe"
    },
    {
    amount: 30,
    sender: "EHUHFEIF3I3IBI3B3IB",
    recipient: "KDNFEFNJI3UI3I3IB3UIB",
    transactionId: "3744cc007c6811ea97054d23fe7ad1fe"
    }
    ],
    nonce: 52293,
    hash: "0000aa7192245b082c9f603fe612d5089ad4557bb193720f7905f56af3088cd1",
    previousBlockHash: "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100"
    },
    {
    index: 4,
    timestamp: 1586659813934,
    transactions: [
    {
    amount: 12.5,
    sender: "00",
    recipient: "e2f5b290-7c67-11ea-9705-4d23fe7ad1fe",
    transactionId: "3c9a00307c6811ea97054d23fe7ad1fe"
    },
    {
    amount: 40,
    sender: "EHUHFEIF3I3IBI3B3IB",
    recipient: "KDNFEFNJI3UI3I3IB3UIB",
    transactionId: "4c2e30c07c6811ea97054d23fe7ad1fe"
    },
    {
    amount: 50,
    sender: "EHUHFEIF3I3IBI3B3IB",
    recipient: "KDNFEFNJI3UI3I3IB3UIB",
    transactionId: "4df66da07c6811ea97054d23fe7ad1fe"
    },
    {
    amount: 60,
    sender: "EHUHFEIF3I3IBI3B3IB",
    recipient: "KDNFEFNJI3UI3I3IB3UIB",
    transactionId: "4ff8f4607c6811ea97054d23fe7ad1fe"
    },
    {
    amount: 70,
    sender: "EHUHFEIF3I3IBI3B3IB",
    recipient: "KDNFEFNJI3UI3I3IB3UIB",
    transactionId: "51d1fa207c6811ea97054d23fe7ad1fe"
    }
    ],
    nonce: 56879,
    hash: "0000e2b2cfd6f4f56b16326230c8b0d65fd3367271eba6789e033b0c09ef5f3b",
    previousBlockHash: "0000aa7192245b082c9f603fe612d5089ad4557bb193720f7905f56af3088cd1"
    },
    {
    index: 5,
    timestamp: 1586659833940,
    transactions: [
    {
    amount: 12.5,
    sender: "00",
    recipient: "e2f5b290-7c67-11ea-9705-4d23fe7ad1fe",
    transactionId: "556533007c6811ea97054d23fe7ad1fe"
    }
    ],
    nonce: 15876,
    hash: "00000d20fd6bbc13b0dcf75177075ea4d92d75af6719c0371273987a97e91b14",
    previousBlockHash: "0000e2b2cfd6f4f56b16326230c8b0d65fd3367271eba6789e033b0c09ef5f3b"
    },
    {
    index: 6,
    timestamp: 1586659835844,
    transactions: [
    {
    amount: 12.5,
    sender: "00",
    recipient: "e2f5b290-7c67-11ea-9705-4d23fe7ad1fe",
    transactionId: "6151b8507c6811ea97054d23fe7ad1fe"
    }
    ],
    nonce: 18633,
    hash: "0000a2487f1a184fc93061bc0657bdaa8b65d7ec3d9db81157965999ecedaf2a",
    previousBlockHash: "00000d20fd6bbc13b0dcf75177075ea4d92d75af6719c0371273987a97e91b14"
    }

    ],
    pendingTransactions: [
    {
    amount: 12.5,
    sender: "00",
    recipient: "e2f5b290-7c67-11ea-9705-4d23fe7ad1fe",
    transactionId: "627466607c6811ea97054d23fe7ad1fe"
    }
    ],
    currentNodeUrl: "http://localhost:3001",
    networkNodes: [ ]

}

console.log(bitcoin.chainIsValid(bc1.chain));
# addition-game-starter
Klaytn javascript native boilerplate


npm install
truffle deploy --network klaytn



PS C:\Users\fuga\BlockChain\addition-game-starter> truffle  deploy --network klaytn
Using network 'klaytn'.

Running migration: 1_initial_migration.js
  Deploying Migrations...
  ... undefined
Error encountered, bailing. Network state unknown. Review successful transactions manually.
Error: Invalid JSON RPC response: {"id":5,"jsonrpc":"2.0"}
    at Object.InvalidResponse (C:\Users\fuga\AppData\Roaming\npm\node_modules\truffle\build\webpack:\~\web3\lib\web3\errors.js:38:1)
    at C:\Users\fuga\AppData\Roaming\npm\node_modules\truffle\build\webpack:\~\web3\lib\web3\requestmanager.js:86:1
    at C:\Users\fuga\AppData\Roaming\npm\node_modules\truffle\build\webpack:\packages\truffle-migrate\index.js:225:1
    at C:\Users\fuga\AppData\Roaming\npm\node_modules\truffle\build\webpack:\packages\truffle-provider\wrapper.js:134:1
    at C:\Users\fuga\BlockChain\addition-game-starter\node_modules\web3-provider-engine\index.js:149:9
    at C:\Users\fuga\BlockChain\addition-game-starter\node_modules\async\internal\once.js:12:16
    at replenish (C:\Users\fuga\BlockChain\addition-game-starter\node_modules\async\internal\eachOfLimit.js:61:25)
    at C:\Users\fuga\BlockChain\addition-game-starter\node_modules\async\internal\eachOfLimit.js:71:9
    at eachLimit (C:\Users\fuga\BlockChain\addition-game-starter\node_modules\async\eachLimit.js:43:36)
    at C:\Users\fuga\BlockChain\addition-game-starter\node_modules\async\internal\doLimit.js:9:16
    at end (C:\Users\fuga\BlockChain\addition-game-starter\node_modules\web3-provider-engine\index.js:124:5)
    at C:\Users\fuga\BlockChain\addition-game-starter\node_modules\async\internal\once.js:12:16
    at next (C:\Users\fuga\BlockChain\addition-game-starter\node_modules\async\waterfall.js:21:29)
    at C:\Users\fuga\BlockChain\addition-game-starter\node_modules\async\internal\onlyOnce.js:12:16
    at C:\Users\fuga\BlockChain\addition-game-starter\node_modules\async\internal\once.js:12:16
    at next (C:\Users\fuga\BlockChain\addition-game-starter\node_modules\async\waterfall.js:21:29)
    at C:\Users\fuga\BlockChain\addition-game-starter\node_modules\async\internal\onlyOnce.js:12:16
    at C:\Users\fuga\BlockChain\addition-game-starter\node_modules\web3-provider-engine\subproviders\hooked-wallet.js:374:7
    at C:\Users\fuga\BlockChain\addition-game-starter\node_modules\async\internal\once.js:12:16
    at next (C:\Users\fuga\BlockChain\addition-game-starter\node_modules\async\waterfall.js:21:29)
    at C:\Users\fuga\BlockChain\addition-game-starter\node_modules\async\internal\onlyOnce.js:12:16
    at C:\Users\fuga\BlockChain\addition-game-starter\node_modules\web3-provider-engine\subproviders\hooked-wallet.js:402:5
PS C:\Users\fuga\BlockChain\addition-game-starter> 
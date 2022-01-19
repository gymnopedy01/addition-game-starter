// truffle.js config for klaytn.
const PrivateKeyConnector = require('connect-privkey-to-provider')
const NETWORK_ID = '1001'
const GASLIMIT = '20000000'
const URL = 'https://api.baobab.klaytn.net:8651'
const PRIVATE_KEY = '0x6ea51ea8b81e0f775f0d7cd62eab7a92a46dc241957eea498f352c260d55f830'


module.exports = {
    networks: {
        klaytn: {
            provider: new PrivateKeyConnector(PRIVATE_KEY, URL), 
            network_id: NETWORK_ID,
            gas: GASLIMIT,
            gasPrice: null,
        }
    }
    
}
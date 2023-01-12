require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture robot fresh tell stone note sad honey grid enroll slot gauge'; 
let testAccounts = [
"0xaed775e57674cf1043927a9e64d7e86bcabfd997e0651375a53112db4a4a910c",
"0x4f2f4328e0db9e18677a0a5a80138e37d41279ef69fcfd826d9bd7884ef9215d",
"0x23773d748faf630283b79b29a2a88afa871fe85fffafe94cf5a64969b821397b",
"0x25750f33e03b765cb8115e039eaeb5d06a4376475be814e35636eee763aa1b1c",
"0x6618848c6f750e42b2c3e1ff8f08755f23e92855a1a06376437bba338d6ebb77",
"0x27de3a27caf637125dc39e53158afd85b08aa85b583498b14b03b60e3ecca649",
"0x6904f0e23e99488628d048363d37dddd5a6a4bcf0d0e12285f4579b20a289842",
"0xd13f840e19a3737848b1cf24f914340580f838332d0c6649fe3cc45972848b58",
"0x93ca95883eb1e77a244cb1a109b1a90c4739ac8906a82a27cf4e18ced4ee02ff",
"0x4382f0e7c0738e9564ae79c3306cf8b06d9cf7da31e97118b428ca57cc53654b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey entry off suggest name rate pizza equip include kangaroo army general'; 
let testAccounts = [
"0xead2bcbc78a4771067046b8749053ab3649bf246941d0279025ef1632ee410fd",
"0x246786dc772a8a858d63dddeb79e1583310d1874aecd280a98588e09a4b34784",
"0x83d9bfc962da51a40e7a78efc190985a8bf84e4908294cfa1e06c20218f134c5",
"0xd9a4d726c0c7f1246e19e3000d319585e132f02ce2ea597fd7490f191e6bcb48",
"0xda78fb4681cb67b26053976b0584a9cb0c25a9dc050148da8cc398626aaf1385",
"0xa9a888d167062d16a8aecb423f64e3714ed3d54cdad56fc5ff771d388b4b4575",
"0x767f4bccb6f04102402fe13a6f97d3d726430a190333296cc651b9ae9f53fb26",
"0xecae37e784801ed2ff6625574f6d82b9c9194c260b6ce789ee4df87bf4c33145",
"0x113f0764834a37fbe4df9916dab78a6823c38f36899de1f5e60c5b7c91345736",
"0x80bd535324c6a48fe9ae5b5ca6af84e74dbb7557d06bf79434a4f1f2f4df76de"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



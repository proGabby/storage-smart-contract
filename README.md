to compile,

1. use solcjs ensure to install it global using npm install -g solcjs
2. run this command on your project folder - solcjs --bin --abi --include-path node_modules/ --base-path . -o . <solidity file name> or
3. put the command as a script on the package.json and use npm run <script name> to run
   example
   "scripts": {
   "compile": "solcjs --bin --abi --include-path node_modules/ --base-path . -o . <solidity file name>.sol"
   }

to deploy on ganache

1. install and run ganache
2. get RPC url for ganache
3. use etherjs to make API call

deploying to a testnet using the encrypt key

1. input your private key of your wallet on the .env file
2. input rpl_url of the node network eg alchemy on your .env file
3. input the private key password that will be use to decrypt the file
4. run encryptkey.js to encrypt your key
5. run node <deploy file>

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

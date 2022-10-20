const ethers = require("ethers");
const fs = require("fs-extra");
require("dotenv").config();

async function main() {
  //create a wallet
  const wallet = new ethers.Wallet(
    process.env.PRIVATE_KEY //ganache wallet private key
  );

  //get a encrypted wallet key to store data
  const encryptedKeyInJson = await wallet.encrypt(
    process.env.PRIVATE_KEY_PASSWORD,
    process.env.PRIVATE_KEY
  );

  fs.writeFileSync("./encryptedkey.json", encryptedKeyInJson);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

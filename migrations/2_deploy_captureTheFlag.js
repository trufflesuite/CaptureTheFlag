const CTF = artifacts.require("CaptureTheFlag");
const Log = artifacts.require("Log");

module.exports = async function(deployer) {
  return deployer.then(async () => {
    await deployer.deploy(Log);
    const logContract = await Log.deployed();

    await deployer.deploy(CTF, logContract.address)
  })
}

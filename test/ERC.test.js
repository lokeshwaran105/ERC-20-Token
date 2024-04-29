const { expect } = require('chai');
const { Wallet } = require('ethers');
const { ethers } = require('hardhat');


describe("Erc20 Smart Contract Testing", function () {
    let token;
    let accounts;
    const amount = ethers.parseEther("1");


    before(async () => {
        const contract = await ethers.getContractFactory("Erc20");
        accounts = await ethers.getSigners();
        token = await contract.deploy(amount, accounts[0].address);           
    })

    it("Assigns initial balance", async () => {
        const totalSupply = await token.totalSupply();
        expect(await token.balanceOf(accounts[0].address)).to.equal(totalSupply);
        console.log(await token.balanceOf(accounts[0].address));
    })

    it("Mint tokens", async function(){

        let error;
        try {
            const wallet = await token.connect(accounts[1]);
            await wallet.mint(accounts[1].address, amount);
        } catch (err) {
            error = "Only owners have permission to mint tokens";
        }
        
        expect(error).to.equal("Only owners have permission to mint tokens");
        
    })

    it("Token Buyed Successfully", async () => {
        const wallet = await token.connect(accounts[2]);
        const option = {value:10};
        const calculation = option.value * 1000;
        await wallet.buy(option);
        expect(await wallet.balanceOf(accounts[2].address)).to.be.equal(calculation);
        
    })
    
    it("Don't have enough ethers to buy tokens", async () =>{
        const wallet = await token.connect(accounts[2]);
        const ethersTobuy = ethers.parseEther("9999");
        const option = {value: ethersTobuy};
        let errors;
        try {
            await Wallet.buy(option);
        } catch (error) {
            errors = "Sender doesn't have enough money to buy tokens";
        }

        expect(errors).to.equal("Sender doesn't have enough money to buy tokens");

    }) 

    it("Tokens Transfer to destination account", async function() {
        const amounts = 100000000;
        await token.transfer(accounts[1].address, amounts);
        console.log("Receiver's Balance", await token.balanceOf(accounts[1].address));
        console.log("Owner's Balance", await token.balanceOf(accounts[0].address));
        expect(await token.balanceOf(accounts[1].address)).to.equal(100000000);

    })

})


















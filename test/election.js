const { assert } = require("chai");

var Election=artifacts.require("./Election.sol");
contract("Election",function(accounts){
    it("intializes with two candidates", function(){
        return Election.deployed().then(function(instance){
            return instance.candidatesCount();
        }).then(function(count){
            assert.equal(count,2);
        });
    });

}); 
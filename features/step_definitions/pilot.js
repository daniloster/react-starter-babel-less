module.exports = function(){
    this.Given(/^I have Bla$/, bla);
    this.When(/^I Bla$/, bla);
    this.Then(/^I should have Bla$/, (callback) => {
        bla();
        callback();
    });
};

function bla() {}
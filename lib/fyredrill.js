const chalk = require('chalk');

function TestSuite(spec)
{
    var drillSpec = require(spec);
    var drills = [];

    for(var module in drillSpec) {
        new Drill(drillSpec[module]).run();
    }


    return this;
}

function Drill(module)
{
    this.tests = [];

    return this;
}

Drill.prototype.run = function() {

};

function Test(test)
{
    this.success = null;
    this.test = null;
    this.name = "";
    this.completed = false;

    return this;
}

Test.prototype.run = function() {
    this.test(this);
};

Test.prototype.equals = function(term1, term2) {
    if(term1 !== term2) {
        this.fail("");
    }
};

Test.prototype.notEquals = function(term1, term2) {
    if(term1 === term2) {
        this.fail("");
    }
};

Test.prototype.isTrue = function(term) {
    if(!term1) {
        this.fail("");
    }
};

Test.prototype.isFalse = function(term) {
    if(term1) {
        this.fail("");
    }
}

Test.prototype.fail = function(msg) {
    process.stdout.write(chalk.bold.red("   TEST FAILURE:  " + this.name + "  [" + msg + "]\n"));
    this.success = false;
};

Test.prototype.done = function() {
    return this.success;
};

module.exports = {
    TestSuite: TestSuite,
    Drill: Drill,
    Test: Test
};
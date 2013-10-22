
var __ = function(){}
__.jasmineMatches = function(){
    var errors = jasmine.getEnv().currentSpec.results_.failedCount;
    var passed = jasmine.getEnv().currentSpec.results_.passedCount;
    console.log("============================");
    console.log("Please refer to :");
    console.log(jasmine.getEnv().currentSpec.suite.description + " ::: " +
        jasmine.getEnv().currentSpec.description);
    console.log();
    console.log("Passed : "+passed, "Errors: "+errors);
    console.log("============================");
    process.exit(1);
}

global.__ = __;
global.learnAbout = it

var __ = function(){}
__.jasmineMatches = function(){
    console.log("============================");
    console.log("Please refer to :");
    console.log(jasmine.getEnv().currentSpec.suite.description + " ::: " +
        jasmine.getEnv().currentSpec.description);
    console.log();
    console.log("============================");
    process.exit(1);
}

global.__ = __;
global.learnAbout = it
function tryMe (param1, param2) {
    alert(param1 + " and " + param2);
}

function callbackTester (callback) {
    callback (arguments[1], arguments[2]);
}

callbackTester (tryMe, "hello", "goodbye");

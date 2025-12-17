const repeatString = function(str, num) {
    let updStr = '';
    if (num >= 0) {
        for (i = num; i > 0; i--){
            updStr += str;
        }
    } else {
        updStr="ERROR";
    }
    return updStr;
};

// Do not edit below this line
module.exports = repeatString;

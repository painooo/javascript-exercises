const removeFromArray = function(arr) {
    for (removeItem = 1; removeItem < arguments.length; removeItem++) {
        arr = arr.filter(item => !(item===arguments[removeItem]))
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;

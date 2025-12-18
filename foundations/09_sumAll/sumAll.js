// 2, 3, 4
// 9
// Find range between first and second number
// 4, 3, 2, 1 (4, 1)
// 1, 2, 3, 4 (1, 4)
const sumAll = function(start, end) {
    let sum = 0;
    if (((typeof start) == 'number' && (typeof end) == 'number') && (start > 0 && end > 0) && (!(start % 1) && !(end % 1))) {
        let range = [start, end].sort((a,b) => a-b);
        for (range[0]; range[0] <= range[1]; range[0]++){
            sum+= range[0];
        }
    } else {
        sum='ERROR';
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

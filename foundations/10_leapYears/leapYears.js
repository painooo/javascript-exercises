// Leap years are
// divisible by 4 (1)

// not divisible by 100 (2)
// unless also divisible by 400 (2.A)

// (1) Check divisibility by 4 (modulus)
// (2) Check if divisible by 100
// (2A) Check if divisible by 400


const leapYears = function(yr) {
    let isLeapYear = false;
    if (yr % 100 == 0) {
        if (yr % 400 == 0) { // Not using && so it doesn't move to else statement if not (% 400)
            isLeapYear=true;
        }
    } else if (yr % 4 == 0) { 
        isLeapYear=true;
    }
    return isLeapYear;
};

// Do not edit below this line
module.exports = leapYears;

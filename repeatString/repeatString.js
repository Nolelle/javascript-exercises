const repeatString = function(string, number) {
    let word = '';
    if (number < 0) {
        return 'ERROR';
    } 

    let positiveNumber = number;

    for (i = 0; i < positiveNumber; i++) {
        word += string;
    }
    return word;
};

module.exports = repeatString;

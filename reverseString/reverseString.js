const reverseString = function(str) {
    //console.log(str)
    let splitString = str.split("");
    //console.log(splitString)
    let reverseString = splitString.reverse("");
    //console.log(reverseString)
    let backwardsString = reverseString.join("")
    //console.log(backwardsString)
    return backwardsString
}


module.exports = reverseString;

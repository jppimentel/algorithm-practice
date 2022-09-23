function convertToBinary(req, res) {
    const {number} = req.body;

    let result = decimalToBinary(number);
    return res.status(200).json({message: "Result is " + result});
}

function decimalToBinary(decNumber){
    let restOfDivision;
    let restOfDivisionStack = [];
    
    let number = decNumber;
    let binaryString = '';

    if(number === 0){
        return 0;
    }

    while (number > 0){
        restOfDivision = Math.floor(number % 2);
        restOfDivisionStack.push(restOfDivision);
        number = Math.floor(number/2);
    }
    while (restOfDivisionStack.length !== 0){
        binaryString += restOfDivisionStack.pop().toString();
    }

    return binaryString;
}

module.exports = { convertToBinary };
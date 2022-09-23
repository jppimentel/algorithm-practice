function sum(req, res) {
    const {a, b} = req.body;

    if(!a || !b){
        return res.status(404).json({message: "a and/or b is required!"});
    }

    if(typeof a !== 'number' || typeof b !== 'number'){
        return res.status(404).json({message: "a and/or b must be numbers!"});
    }


    let result = a+b;
    return res.status(200).json({message: "Result is " + result});
}

module.exports = { sum };
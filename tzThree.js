function calculation(numberOne, numberTwo) {
    
    x = numberOne / numberTwo;
    
    let str = x.toString();
    let removeZero = str.replace(/(?<=.)[0]*/gm, '');
    let result = parseFloat(removeZero).toFixed(2)
    return console.log(`$${result}`);
}

calculation(555, 5000)
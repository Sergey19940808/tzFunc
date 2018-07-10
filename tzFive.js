function buildObjEven(arr) {
    const obj = {}
    arr.map((i, index)=>{
        if ( index % 2 === 0) obj[arr[index]] = arr[index+1];
    })
    return console.log(obj);
}

let arrList = [1, 2, 'a', 3, 'b', 'c'];

buildObjEven(arrList);
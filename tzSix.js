function buildObjOdd(arr) {
    const obj = {}
    arr.map((i, index)=>{
        if ( index > 0 && index % 2 !== 0 ) {
            obj[arr[index]] = arr[index+1] !== undefined ? arr[index+1] : arr[0];
        }
    })
    return console.log(obj);
}

let arrList = [1, 2, 'a', 3, 'b', 'c'];

buildObjOdd(arrList);
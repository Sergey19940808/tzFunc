

let listArr = [
    {
        x:1,
        y:2
    },
    {
        x:1,
        y:2
    },
    {
        x:2,
        y:2
    },
    {
        x:5,
        y:5
    }
];

function isEquality(listArr) {
    let isEqual = false;
    for (let i = 1; i < listArr.length; ++i) {
        if (listArr[0].x === listArr[i].x && listArr[0].y === listArr[i].y) return isEqual = true;
    }
    return isEqual;
}

isEquality(listArr);

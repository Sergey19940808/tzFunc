function Container() {
    this.promises = []
}

Container.prototype.add = function(obj) {
    this.promises.push(obj)
}

const store = new Container();

const promiseOne = new Promise(res => setTimeout(()=> res(console.log('r1')), 1000));
const promiseTwo = new Promise(res => setTimeout(()=> res(console.log('r2')), 5000));
const promiseThree = new Promise(res => setTimeout(()=> res(console.log('r3')), 8000));

store.add(promiseOne);
store.add(promiseTwo);
store.add(promiseThree);

function add(n1 : number, n2 : number){
    return n1 + n2;
}

function printResult(num: number){
    console.log('Result: '+num);
}

function addHandle(n1 : number, n2 : number, cb: (num : number) => void){
    const result = n1 + n2;
    cb(result);
}

printResult(add(5,12));


let combineValues: Function;

combineValues = add;

console.log(combineValues(8,8));

addHandle(10,20,(result)=>{
    console.log(resizeBy);
    return result;
})
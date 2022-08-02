import * as _ from 'lodash';
import { constant } from 'lodash';

async function hello() {
    return 'world'
}

// let lucky;

// lucky = '24';

type Style = 'bold' | 'italic';
let font: Style;


interface Person {
    first : string,
    last : string,
    [key: string]:any
}

const person = {
    first : "Jeff",
    last : "Delaney"
}

const person2 = {
    first : "Usain",
    last : "Bolt",
    fast : true
}

function pow (x : number, y : number): void{
    Math.pow(x,y).toString();
}

pow(5,10)

const arr:number[] = []

// arr.push(1)
// arr.push('24')
// arr.push(false)

class Observable <T>{
    constructor(public value: T){}
}

let x: Observable<number>;

let y: Observable<Person>;

let z = new Observable(24)
// This is a comment line
var n = 5;

/**
 * This is a
 * multi-line comment
 */

n = 9;
// --------------------------------------------------------------------------------------
/**
 * Datatypes:
 * undefined
 * null
 * boolean
 * string
 * symbol
 * number
 * object
 */

var userName = "Bob";
userName = 12;

let nameVideo = "freeCodeCamp";

const pi = 3.1415;

// --------------------------------------------------------------------------------------
var a; //Declaration
var b = 2; //Assigment Operator
a = 7;
b = a;

// console.log(a)

// --------------------------------------------------------------------------------------
var a = 9; // Initializing variables

// --------------------------------------------------------------------------------------
// Initialize variables
var a = 5;
var b = 10;
var c = "I am a ";

a = a + 1;
b = b + 5;
c = c + "String!";
// --------------------------------------------------------------------------------------
// Declaration variables
var properCamelCase;

properCamelCase = "JS Case Sensitivity";

// --------------------------------------------------------------------------------------
//Basic Math
var sum = 10 + 10;
console.log(sum)

var difference = 45 - 33;
console.log(difference)

var product = 8 * 10;
console.log(product)

var quotient = 66 / 3;
console.log(quotient)

// --------------------------------------------------------------------------------------
// Increment & Decrement
var x = 87;
// x = x + 1;
x++; // 88
x--; // 87

// --------------------------------------------------------------------------------------
// Decimal numbers
var nDeciaml = 9.18

// Multiply numbers
var product = 2.0 * 2.5;
console.log(product)

var quotientDecimal = 4.4 / 2.0;
console.log(quotientDecimal);

// --------------------------------------------------------------------------------------
var remainder;
remainder = 11 % 3;
console.log(remainder)

// --------------------------------------------------------------------------------------
// Compound Assigment with Augmented Addition
var x = 3;
var y = 6;

// x = x + 4;
x += 4;

// y = y + 2;
y += 2;

var q = 11;
var w = 8;

// q = q - 2;
q -= 2;

// w = w - 5;
w -= 5;

q = q * 2;
q *= 2;

w = w * 4;
w *= 4;

q = q / 2;
q /= 2;

w = w / 3;
w /= 3;
// --------------------------------------------------------------------------------------
// Declare String Variables
var firstName = "Alan"
var lastName = "Turing"

// --------------------------------------------------------------------------------------
// var str = "I am a "double quoted" string inside "double quotes"";
var str = "I am a \"double quoted\" string inside \"double quotes\"";

// --------------------------------------------------------------------------------------
var myStr = '<a href="http://www.google.com">Google</a>';

// --------------------------------------------------------------------------------------
/**
 * Code Output
 * \' single quote
 * \" doble quote
 * \\ backslash
 * \n newline
 * \r carriage return
 * \t tab
 * \b backspace
 * \f form feed
 */

var otherStr = "FirstLine\n\t\\SecondLine\nThirdLine"
console.log(otherStr)
// --------------------------------------------------------------------------------------
var myStr = "This is the start." + "This is the end."
console.log(myStr)

var ourStr = "First";
ourStr += "Second";

console.log(ourStr)
// --------------------------------------------------------------------------------------
var name = "Luke";
var sentence = "Hello "+ name + " nice day."
console.log(sentence)
// --------------------------------------------------------------------------------------
var someAdjective = "worthwhile";
var myStr = "Learning to code is ";
myStr += someAdjective;
console.log(myStr)
// --------------------------------------------------------------------------------------
var largeSentence = "Lorem ipsum aehru veaee vaeoruv"
console.log(largeSentence.length);
// --------------------------------------------------------------------------------------
var getACharacter = "Mandalorian";
console.log(getACharacter[3]);
// --------------------------------------------------------------------------------------
function wordBlanks (myNoun, myAdjective, myVerb, myAdverb){
    var result = "";
    result += "The "+myAdjective+" "+myNoun+" "+myVerb+" to the store "+myAdverb
    return result;
}

console.log(wordBlanks("dog", "big", "ran", "quickly"))
// --------------------------------------------------------------------------------------
var myArray = ["Luis", 20];
console.log(myArray);

var otherArray = [["Tomates",24],["Cebolla",15]]
var data = [40,30,20]
console.log(data[2])

data[1] = 10;
console.log(data)

var arrayNumbers = [
    [1,2,3], // 0
    [4,5,6], // 1
    [7,8,9], // 2
    [// 3
        //0  1  2
        [10,11,12], //0
        13, // 1
        14 // 2
    ]
];
var myData = arrayNumbers[3][0][1];
console.log(myData);

// Push function: Add a element
var myContent = [["Grogu", 500], ["Mando", 30]];
myContent.push(["Luke", 28]);
console.log(myContent);

// Pop function: Remove the last element
myContent.pop()
console.log(myContent);

// Shift function: Remove the first element
myContent.shift()
console.log(myContent)

//Unshift function: Add a element on the first position
myContent.unshift(["Ashoka", 43])
console.log(myContent)
// --------------------------------------------------------------------------------------
var myList= [
    ["cereal",3],
    ["milk", 2],
    ["bannanas",3],
    ["juice",2],
    ["eggs",12]
];
// --------------------------------------------------------------------------------------
function ourReusableFunction(){
    console.log("Hello world");
}

ourReusableFunction();
ourReusableFunction();
ourReusableFunction();

function addTwoNumbers(a, b){
    console.log(a + b);
}

addTwoNumbers(5,2);
// --------------------------------------------------------------------------------------
// Global Scope

var myGlobal = 10;

function function1(){
    oppsGlobal = 5;
}

function function2(){
    var output = "";
    if(typeof myGlobal != "undefined"){
        output += "My Global: " + myGlobal;
    }

    if(typeof oppsGlobal != "undefined"){
        output += "oppsGlobal: " + oppsGlobal;
    }

    console.log(output);
}

function1();
function2();

// --------------------------------------------------------------------------------------
var outfit = "T-shirt"

function myOutfit(){
    var outfit = "sweather";
    return outfit;
}

console.log(myOutfit());
console.log(outfit);

// --------------------------------------------------------------------------------------
function minusSeven(n){
    return n - 7;
}

console.log(minusSeven(10));

function timesFive(n){
    return n * 5;
}

console.log(timesFive(4));
// --------------------------------------------------------------------------------------
var sum = 0
function addThree(){
    sum += 3;
}

console.log(addThree()) // undefined
// --------------------------------------------------------------------------------------
function nextLine(array,item){
    array.push(item);
    return array.shift();
}

var testArray = [1,2,3,4,5];

console.log("Before: "+JSON.stringify(testArray));
console.log(nextLine(testArray,6));
console.log("After: "+JSON.stringify(testArray));
// --------------------------------------------------------------------------------------
function welcomeToBooleans(){
    return true;
}

function trueOrFalse(option){
    if(option){
        return "Yes, that was true";
    }
    return "No, that was false";
}

console.log(trueOrFalse(true));
// --------------------------------------------------------------------------------------
function testEqual(value){
    if(value == 12){
        return "Equal";
    }
    return "Not equal";
}

console.log(testEqual(10));

function testStrict(value){
    if(value === 7){
        return "Equal";
    }
    return "Not equal";
}
console.log(testStrict('7'));
// --------------------------------------------------------------------------------------
function testSize(num){
    if(num < 5){
        return "Tiny";
    }else if(num < 10){
        return "Small";
    }else if(num < 15){
        return "Medium";
    }else if(num < 20){
        return "Large";
    }else{
        return "Huge";
    }
}

console.log(testSize(7));
// --------------------------------------------------------------------------------------
var names = [
    "Hold-in-one!",
    "Eagle",
    "Birdie",
    "Par",
    "Bogey",
    "Double Bogey",
    "Go Home!"
]

function golfScore(par, strokes){
    if(strokes == 1){
        return names[0];
    }else if(strokes <= par - 2){
        return names[1];
    }else if(strokes == par - 1){
        return names[2];
    }else if(strokes == par){
        return names[3];
    }else if(strokes == par + 1){
        return names[4];
    }else if(strokes <= par + 2){
        return names[5];
    }else if(strokes <= par + 3){
        return names[6];
    }
}

console.log(golfScore(5,4));
// --------------------------------------------------------------------------------------
function caseInSwitch(value){
    var answer = "";

    switch(value){
        case 1:
            answer = 'alpha';
            break;
        case 2:
            answer = 'beta';
            break;
        case 3:
            answer = 'gamma';
            break;
        case 4:
            answer = 'delta';
            break;
        default:
            answer = 'stuff';
            break;
    }
    return answer;
}

console.log(caseInSwitch(3));
// --------------------------------------------------------------------------------------
var count = 0;

function cc(card){
    switch(card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }
    var holdbet = 'Hold';

    if(count > 0){
        holdbet = 'Bet'
    }

    return count + " " + holdbet;
}

cc(2);cc('K');cc(7);cc('K');cc('A');
console.log(cc(4));
// --------------------------------------------------------------------------------------
// Objects in JS
var myDog = {
    "name": "Nescafe",
    "legs": 4,
    "tails": 2,
    "friends":[]
};

var testObject = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats",
    "the drink": "coca cola"
};

var hatValue = testObject.hat;
var shirtValue = testObject.shirt;
var drinkValue = testObject["the drink"];

console.log(hatValue);
console.log(shirtValue);
console.log(drinkValue);

var otherObject = {
    12 : "Namath",
    16 : "Montana",
    19 : "Unitas"
}

var playerNumber = 16;
var player = otherObject[playerNumber];
console.log(player);

myDog.name = "Solovino";
console.log(myDog.name);

myDog['bark'] = "guaf guaf";
console.log(myDog);

delete myDog.bark;
console.log(myDog);
// --------------------------------------------------------------------------------------
var myTestObject = {
    gift : "pony",
    pet : "kitten",
    bed : "sleigh"
};

function checkObj(checkProp){
    if(myTestObject.hasOwnProperty(checkProp)){
        return myTestObject[checkProp];
    }else{
        return "Not Found";
    }
}

console.log(checkObj("gift"));
// --------------------------------------------------------------------------------------

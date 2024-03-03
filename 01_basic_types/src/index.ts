// Basic types

// Number, String, Object, Array, Boolean, Date, undefined, null

/* --- Number --- */

// In JS we declare var this way
let num = 10;
// In TS we can declare var in 2 ways
let num1 = 11;
let num2: number = 12;
// Only difference is convenience. Thats why engineers usually prefer let num1 = 11;


// Example
num = '10' // Type 'string' is not assignable to type 'number'.
num = 13 // No error


/* --- String --- */

let fName; // Variable 'fName' implicitly has an 'any' type, but a better type may be inferred from usage.
let fName1: string; // Better way
let fName2 = 'Emma'; 
let fName3: string = 'Julie'; 


// Example
fName = true; // No error
fName1 = false // Type 'boolean' is not assignable to type 'string'
fName2 = 'Sam';
fName3 = 'Hasan';

/* --- Boolean --- */
let isHuman = true;
let isHuman1: boolean = true;
let isHuman2: boolean;


isHuman = 'yes'
isHuman1 = 'no'
isHuman2 = 'idk'
isHuman2 = true


/* --- Object and Array --- */
let pet = {
    breed: 'Some breed',
    age: 3,
}

let pet2: { breed: string, age: number } = {
    breed: 'Some breed 2',
    age: 3,
}

let person = {
    id: 1,
    address: {
        line1: '1111 Adress',
        line2: 'Apt2',
        zipCode: 1111
    }
}
let person2: {id: number, address: {line1: string, line2: string, zipCode: number}} = {
    id: 1,
    address: {
        line1: '1111 Adress',
        line2: 'Apt2',
        zipCode: 1111
    }
}

let cities = ['Delhi', 'LA', 'Tokyo', 'Budapest']; 
let cities2: string[] = ['Delhi', 'LA', 'Tokyo', 'Budapest']; 
let numbers = [1, 2, 3,4];
let numbers1: number[] = [1, 2, 3,4];
let numbers4 = ['1', 2, '3',4]; // TODO: Look below for union types section


// Example
pet = 'Pet' // Type 'string' is not assignable to type '{ breed: string; age: number; }'
numbers = true // Type 'boolean' is not assignable to type 'number[]'


/* --- Misc --- */

let today = new Date();
let tomorrow: Date = new Date();

let nulls: boolean[]= [null, null]; 
let undefineds = [undefined, undefined]; 

let nulls2: null[]= [null, null]; 
let undefineds2: undefined[] = [undefined, undefined]; 


// Example
today = 'Monday' // Type 'string' is not assignable to type 'Date'.
tomorrow = new Date().getFullYear(); // Type 'number' is not assignable to type 'Date'.
tomorrow = new Date(); // Type 'number' is not assignable to type 'Date'.
undefineds = ['Hi', 1] // any[]

/* --- Any --- */

let randomValue: any;

// Example
randomValue = 'some string'
randomValue = 10;
randomValue = true;
randomValue = new Date()


/* --- Union Types --- */

let response: number | string = 'OK'
let response1: number | string = 200 

let data: (string | number)[] = ['1', 2, '3', 4];















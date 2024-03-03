// Type Aliases

// Example using object types
// Repeated code and becomes hard to manage overtime
// Impossible to export and import
let pet: { breed: string, age: number } = {
    breed: 'Some breed 2',
    age: 3,
}
let pet1: { breed: string, age: number } = {
    breed: 'Some breed 2',
    age: 3,
}
let pet2: { breed: string, age: number } = {
    breed: 'Some breed 2',
    age: 3,
}


// Using type alias
// Reausable
// Export and import

export type Pet = {
    breed: string,
    age: number
}
let pet4: Pet = {
    breed: 'Some breed 2',
    age: 3,
}
let pet5: Pet = {
    breed: 'Some breed 2',
    age: 3,
}
let pet6: Pet = {
    breed: 'Some breed 2',
    age: 3,
}

/* --- Optional parameters in Type Alias ---- */

type Person = {
    fName: string,
    email: string,
    age?: number // Optional parameter
}

let admin: Person = {
    fName: 'Admin',
    email: 'admin@gmail.com',
    age: 20
}
let employee: Person = {
    fName: 'Employee',
    email: 'employee@gmail.com',
}


/* --- Extend Type Alias ---- */

type Abilities = {
    type: string,
    power: number
}

type Character = {
    readonly id: number,
    fName: string,
    age: number
} & Abilities; // extends Abilities type alias


let char: Character = {
    id: 1,
    fName: 'Bowser',
    age: 2,
    type: 'dangerous',
    power: 100
}

// Same as above but creating new type alias based on two others
type CharacterWithAbilities = Character & Abilities;

let char2: CharacterWithAbilities = {
    id: 2,
    fName: 'Bowser',
    age: 2,
    type: 'dangerous',
    power: 100
}


// Example
console.log(char.fName);
console.log(char.id);
char.fName = 'Lara Croft' // No error
char.id = 3; // Cannot assign to 'id' because it is a read-only property.



/* --- Union Types example with Type alias --- */

type User = {
    name: string
}

type Employee = {
    id: number
} 

const person: User | Employee = {
    name: 'Alex',
}

const person1: User | Employee = {
    id: 1
}

const person2: User | Employee = {
    name: 'Alex',
    id: 1
}


// Example 
const obj: Obj = {
    name: 'A',
    email: 'B',
    age: '20',
    dob: '02/10/2000',
    title: 'SDET',
    location: 'Chicago',
    zip: 4000,
}

// Type alias if you know what parameters obj has
type Obj = {
    name: string,
    email: string,
    age: string,
    dob: string,
    title: string,
    location: string
}


const obj1: Obj1 = {
    name: 'A',
    email: 'B',
    age: '20',
    dob: '02/10/2000',
    title: 'SDET',
    location: 'Chicago',
    zip: 4000,
}

// Type alias if you don't know obj parameters in advance
type Obj1 = {
    [key: string]: string | number
}


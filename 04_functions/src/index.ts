// Basic function

// Parameter 'message' implicitly has an 'any' type
function greet(message) {
    console.log(message)
}

// Function knows that parameter message is a string
// But return type is void
function greet2(message: string) {
    console.log(message)
}

// Function return type is string -> TypeScript implicitly infers return type
function greet3(message: string) {
    return message;
}

// Function return type is string -> TypeScript explicitly infers return type
function greet4(message: string): string {
    return message;
}

// There are some other return types: never, any

// Function that takes an object as a parameter
function greet5({ message }:{ message: string }) {
    return message;
}

// Function that takes an object as a parameter
type Param = {
    message: string,
    props: { name: string},
    id: number,
    getIds: () => void
}
function greet6({ message, props, id, getIds }: Param) {
    return { message, props, id, getIds };
}

// Rest arguments

// How can we protect from someone putting different data type other than string ?
function greet7(...messages) {
    console.log(messages)
}

// 1. Option
function greet8(...messages: string[]) {
    console.log(messages)
}

// 2. Option -> Type narrowing
function greet9(...messages) {
    messages.forEach((message) => {
        if(typeof message === 'string') {
            console.log(message)
        } else {
            console.log(`${message} is not a string`);
        }
    })
}


// Default arguments
function greet10(message: string = 'Hello World!') {
    console.log(message)
}


// Unknown return type
interface User {
    id: number,
    name: string
}

// Function clone return type is any because Object.apply() returns any
function clone(obj: User) {
    return Object.apply({}, obj)
}
const obj = {id: 1, name: 'Obj1'};
const obj2 = clone(obj); // const obj2: any

// We can fix it by explicitly providing return type to our function clone
function clone2(obj: User): User {
    return Object.apply({}, obj)
}

const obj3 = {id: 1, name: 'Obj3'};
const obj4 = clone2(obj); // const obj4: User -> This is better
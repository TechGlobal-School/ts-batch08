/* ---- Generics ---- */
interface User {
    id: number,
    email: string
}

interface Dog {
    id: number,
    email: string
}
// Simple function that clones obj
function clone(obj: User): User { 
    return Object.apply({}, obj);
}

const user = clone({id: 1, email: 'user@mail.com'})

// What if i want to clone another object with different data structure
const dog = clone({name: 'Rocky', age: 2}); // Object literal may only specify known properties, and 'name' does not exist in type 'User'.


/* ---- Solution might be generics ---- */

function clone2<T>(obj: T): T { 
    return Object.apply({}, obj);
}

const user1 = clone2({id: 1, email: 'user@mail.com'})
// const dog1 = clone2({name: 'Rocky', age: 2}); 
const cat1 = clone2({name: 'Roxana', age: 1, city: 'Chicago'}); 


/* ---- Multiple generics ---- */
function clone3<T, U>(obj: T, obj1: U): T | U { 
    return Object.apply({}, obj);
}

// Not related example
// Return type Promise
function getData(): Promise<{data: string}> { 
        return Promise.resolve({data: 'data'}); 
}
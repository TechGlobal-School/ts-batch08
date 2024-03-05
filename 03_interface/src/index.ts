/* ---- Simple Interface ---- */

interface Dog {
    breed: string
    name: string
}


const pet: Dog = {
    breed: 'sheppard',
    name: 'Rocky'
}



/* ---- Optional keys and readonly ---- */
interface Dog2 {
    readonly id: number
    breed: string
    name: string
    age?: number
}

const rocky: Dog2 = {
    id: 1,
    breed: 'sheppard',
    name: 'Rocky',
    age: 2
}



/* ---- Optional keys and readonly ---- */
interface Dog3 {
    name: string,
    bark(): string
}

const rocky2: Dog3 = {
    name: 'Rocky',
    bark() { return 'Bark'}
}


/* ---- Extending Interface ---- */

interface Pet {
    name: string,
}

interface ServiceDog extends Pet {
    job: string
}

const serviceDog: ServiceDog = {
    name: 'Rocky',
    job: 'Protect people'
}

/* ---- Extending Multiple Interface ---- */
interface User {
    name: string
}
interface Employee {
    salary: number
}
interface Engineer extends User, Employee {
    job: string
}

interface Finance extends User, Employee {
    job: string
}

const engineer: Engineer =  {
    name: 'Rocky',
    job: 'Develop',
    salary: 100000
}

const taxGuy: Finance =  {
    name: 'Alex',
    job: 'Help with taxes',
    salary: 90000
}
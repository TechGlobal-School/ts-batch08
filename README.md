# TypeScript

## Introduction

- Developed by Microsoft in 2012
- Superset of JavaScript
- Created to tackle shortcomings of JS. Especially in large projects/apps
- Environments: 1. runtime, 2. compile
- In order to run TypeScript code in any environment, we have to first compile it to JavaScript
- Some of the example tools to compile (babel, webpack)

- Extension for typescript files is `.ts`
- The presence of a tsconfig.json file in a directory indicates that the directory is the root of a TypeScript project. The `tsconfig.json` file specifies the root files and the compiler options required to compile the project.

- In order to for typescript to work run `npx tsc` in the root folder where `tsconfig.json` file is located

## Basic Types

- All javascript data types are the same in typescript
- We can provide types to primitive variables in typescript or expect typescipt to infer automatically:

```js
let num1 = 11;
let num2: number = 12;
```

- Both works

## Union types

- A union type is a type formed from two or more other types, representing values that may be any one of those types.

```js
const id: number | string;

type User = {
    name: string
}

type Employee = {
    id: number
}

const person: User | Employee = {
    name: 'Alex',
}
```

## Type Aliases

- A type alias is exactly that - a name for any type
- Reusable, export import, can be extended, optional params
- https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases

```js
type ID = number | string;
```

## Interface

- https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces

## Union Types, Literal Types and Enums

- https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types
- https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types
- https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#enums

## Generics

- https://www.typescriptlang.org/docs/handbook/2/generics.html#handbook-content

/*

Exercise:

    The type "Person" is missing, please define it and use
    it in the persons' array and logPerson function in order to fix
    all the TS errors.

*/

interface User {
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    name: string;
    age: number;
    role: string;
}

export type Person = unknown;

export const persons: User[] /* <- Person[] */ = [
    {
        name: 'Tony Stark',
        age: 45,
        occupation: 'Iron Man'
    },
    {
        name: 'Bruce Wayne',
        age: 38,
        role: 'Batman'
    },
    {
        name: 'Natasha Romanoff',
        age: 35,
        occupation: 'Black Widow'
    },
    {
        name: 'Diana Prince',
        age: ???,
        role: 'Wonder Woman'
    }
];

export function logPerson(user: User) {
    console.log(` - ${user.name}, ${user.age}`);
}

persons.forEach(logPerson);

// In case you are stuck:
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types

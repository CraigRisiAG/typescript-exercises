/*

Exercise:

    Fix type errors in the logPerson function.

    logPerson function should accept both User and Admin
    and should output relevant information according to
    the input: the occupation for User and role for Admin.

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

export type Person = User | Admin;

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


export function logPerson(person: Person) {
    let additionalInformation: string;
    if (person.role) {
        additionalInformation = person.role;
    } else {
        additionalInformation = person.occupation;
    }
    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

persons.forEach(logPerson);

// In case you are stuck:
// https://www.typescriptlang.org/docs/handbook/2/narrowing.html#the-in-operator-narrowing

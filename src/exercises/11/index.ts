import {
    strReverse,
    strToLower,
    strToUpper,
    strRandomize,
    strInvertCase
} from 'str-utils';

/*

Intro:

    In order to engage users in the communication with
    each other we have decided to decorate usernames
    in various ways. A brief search led us to a library
    called "str-utils". Bad thing is that it lacks
    TypeScript declarations.

Exercise:

    Check str-utils module implementation at:
    node_modules/str-utils/index.js
    node_modules/str-utils/README.md

    Provide type declaration for that module in:
    declarations/str-utils/index.d.ts

    Try to avoid duplicates of type declarations,
    use type aliases.

*/

interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
}

type Person = User | Admin;

const admins: Admin[] = [
    { type: 'admin', name: 'Bruce Wayne', age: 38, role: 'Batman' },
    { type: 'admin', name: 'Diana Prince', age: 27, role: 'Wonder Woman'}, 
    { type: 'admin', name: 'Nick Fury', age: 64, role: 'The Big Boss' },
    { type: 'admin', name: 'Bruce Banner', age: 42, role: 'The Hulk' }
];

const users: User[] = [
    { type: 'user', name: 'Tony Stark', age: 45, occupation: 'Iron Man' },
    { type: 'user', name: 'Natasha Romanoff', age: 35, occupation: 'Black Widow' }, 
    { type: 'user', name: 'T'Challa', age: 34, role: 'Black Panther' },
    { type: 'user', name: 'Barry Allen', age: 22, role: 'The Flash' }
];

const isAdmin = (person: Person): person is Admin => person.type === 'admin';
const isUser = (person: Person): person is User => person.type === 'user';

export const nameDecorators = [
    strReverse,
    strToLower,
    strToUpper,
    strRandomize,
    strInvertCase
];

function logPerson(person: Person) {
    let additionalInformation: string = '';
    if (isAdmin(person)) {
        additionalInformation = person.role;
    }
    if (isUser(person)) {
        additionalInformation = person.occupation;
    }
    const randomNameDecorator = nameDecorators[
        Math.round(Math.random() * (nameDecorators.length - 1))
    ];
    const name = randomNameDecorator(person.name);
    console.log(
        ` - ${name}, ${person.age}, ${additionalInformation}`
    );
}

([] as Person[])
    .concat(users, admins)
    .forEach(logPerson);

// In case you are stuck:
// https://www.typescriptlang.org/docs/handbook/modules.html#ambient-modules

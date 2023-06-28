/*

Exercise:

    Define type PowerUser which should have all fields
    from both User and Admin (except for type),
    and also have type 'powerUser' without duplicating
    all the fields in the code.

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

type PowerUser = unknown;

export type Person = User | Admin | PowerUser;

export const persons: Person[] = [
    { type: 'user', name: 'Tony Stark', age: 45, occupation: 'Iron Man' },
    { type: 'admin', name: 'Bruce Wayne', age: 38, role: 'Batman' },
    { type: 'user', name: 'Natasha Romanoff', age: 35, occupation: 'Black Widow' },
    { type: 'admin', name: 'Diana Prince', age: 27, role: 'Wonder Woman'}, 
    { type: 'user', name: 'T'Challa', age: 34, role: 'Black Panther' },
    { type: 'admin', name: 'Nick Fury', age: 64, role: 'The Big Boss' },
    {
        type: 'powerUser',
        name: 'Clark Kent',
        age: 135,
        role: 'Moderator',
        occupation: 'Super Man'
    }
];

function isAdmin(person: Person): person is Admin {
    return person.type === 'admin';
}

function isUser(person: Person): person is User {
    return person.type === 'user';
}

function isPowerUser(person: Person): person is PowerUser {
    return person.type === 'powerUser';
}

export function logPerson(person: Person) {
    let additionalInformation: string = '';
    if (isAdmin(person)) {
        additionalInformation = person.role;
    }
    if (isUser(person)) {
        additionalInformation = person.occupation;
    }
    if (isPowerUser(person)) {
        additionalInformation = `${person.role}, ${person.occupation}`;
    }
    console.log(`${person.name}, ${person.age}, ${additionalInformation}`);
}

console.log('Admins:');
persons.filter(isAdmin).forEach(logPerson);

console.log();

console.log('Users:');
persons.filter(isUser).forEach(logPerson);

console.log();

console.log('Power users:');
persons.filter(isPowerUser).forEach(logPerson);

// In case you are stuck:
// https://www.typescriptlang.org/docs/handbook/utility-types.html
// https://www.typescriptlang.org/docs/handbook/2/objects.html#intersection-types

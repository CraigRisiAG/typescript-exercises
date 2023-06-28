/*

Exercise:

    Fix typing for the filterPersons so that it can filter users
    and return User[] when personType='user' and return Admin[]
    when personType='admin'. Also filterPersons should accept
    partial User/Admin type according to the personType.
    `criteria` argument should behave according to the
    `personType` argument value. `type` field is not allowed in
    the `criteria` field.

Higher difficulty bonus exercise:

    Implement a function `getObjectKeys()` which returns more
    convenient result for any argument given, so that you don't
    need to cast it.

    let criteriaKeys = Object.keys(criteria) as (keyof User)[];
    -->
    let criteriaKeys = getObjectKeys(criteria);

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

export type Person = User | Admin;

export const persons: Person[] = [
    { type: 'user', name: 'Tony Stark', age: 45, occupation: 'Iron Man' },
    { type: 'admin', name: 'Bruce Wayne', age: 38, role: 'Batman' },
    { type: 'user', name: 'Natasha Romanoff', age: 35, occupation: 'Black Widow' },
    { type: 'admin', name: 'Diana Prince', age: 27, role: 'Wonder Woman'}, 
    { type: 'user', name: 'T'Challa', age: 34, role: 'Black Panther' },
    { type: 'admin', name: 'Nick Fury', age: 64, role: 'The Big Boss' }
];

export function logPerson(person: Person) {
    console.log(
        ` - ${person.name}, ${person.age}, ${person.type === 'admin' ? person.role : person.occupation}`
    );
}

export function filterPersons(persons: Person[], personType: string, criteria: unknown): unknown[] {
    return persons
        .filter((person) => person.type === personType)
        .filter((person) => {
            let criteriaKeys = Object.keys(criteria) as (keyof Person)[];
            return criteriaKeys.every((fieldName) => {
                return person[fieldName] === criteria[fieldName];
            });
        });
}

export const usersOfAge27 = filterPersons(persons, 'user', { age: 27 });
export const adminsOfAge27 = filterPersons(persons, 'admin', { age: 27 });

console.log('Users of age 27:');
usersOfAge27.forEach(logPerson);

console.log();

console.log('Admins of age 27:');
adminsOfAge27.forEach(logPerson);

// In case you are stuck:
// https://www.typescriptlang.org/docs/handbook/2/functions.html#function-overloads

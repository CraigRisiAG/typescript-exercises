/*

Exercise:

    Without duplicating type structures, modify
    filterUsers function definition so that we can
    pass only those criteria which are needed,
    and not the whole User information as it is
    required now according to typing.

Higher difficulty bonus exercise:

    Exclude "type" from filter criteria.

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

export const isAdmin = (person: Person): person is Admin => person.type === 'admin';
export const isUser = (person: Person): person is User => person.type === 'user';

export function logPerson(person: Person) {
    let additionalInformation = '';
    if (isAdmin(person)) {
        additionalInformation = person.role;
    }
    if (isUser(person)) {
        additionalInformation = person.occupation;
    }
    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

export function filterUsers(persons: Person[], criteria: User): User[] {
    return persons.filter(isUser).filter((user) => {
        const criteriaKeys = Object.keys(criteria) as (keyof User)[];
        return criteriaKeys.every((fieldName) => {
            return user[fieldName] === criteria[fieldName];
        });
    });
}

console.log('Users of age 23:');

filterUsers(
    persons,
    {
        age: 23
    }
).forEach(logPerson);

// In case you are stuck:
// https://www.typescriptlang.org/docs/handbook/utility-types.html
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#predefined-conditional-types

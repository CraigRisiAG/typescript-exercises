/*

    Outline of what the exercises offer:

        1. Basic typing.
        2. Refining types.
        3. Union types.
        4. Merged types.
        5. Generics.
        6. Type declarations.
        7. Module augmentation.
        8. Advanced type mapping.

    Rules and principles:

        1. Avoid using "any" type at all costs.
        2. Difficulty quickly grows one exercise after another.
        3. Everyone learns at their own pace and there is no competition to be better than others around you
        4. Have fun. This is your time to learn

Brief UI guide:

    +--------------------------------------------------------------+
    | TypeScript exercises                                         |
    +--------------------------------------------------------------+
    | Exercises 1·2·3·4...   << Navigate through exercises >>      |
    +---------------+----------------------------------------------+
    | Files         | file.ts   << Filename and status >>          |
    +---------------+----------------------------------------------+
    | file.ts       | 1  import {x} from 'y';                      |
    | dir           | 2                                            |
    |   sub.ts      | 3                                            |
    |               |                                              |
    | << Current    |   << Currently selected file code editor >>  |
    | exercise file |                                              |
    | structure >>  +----------------------------------------------+
    |               |                                              |
    |               |   << Errors to fix in order to proceed >>    |
    |               |                                              |
    +---------------+----------------------------------------------+

Exercise 1:

    Given the data, define the interface "User" and use it accordingly.

*/

export type User = unknown;

export const users: unknown[] = [
    {
        name: 'Thabo Bester',
        age: 35,
        occupation: 'Writer'
    },
    {
        name: 'Kate Mokoena',
        age: 23,
        occupation: 'Architect'
    }
];

export function logPerson(user: unknown) {
    console.log(` - ${user.name}, ${user.age}`);
}

console.log('Users:');
users.forEach(logPerson);


// In case you are stuck:
// https://www.typescriptlang.org/docs/handbook/2/objects.html

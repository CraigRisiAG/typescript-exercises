import {
    getMaxIndex,
    getMaxElement,
    getMinIndex,
    getMinElement,
    getMedianIndex,
    getMedianElement,
    getAverageValue
} from 'stats';

/*

Exercise:

    Check stats module implementation at:
    node_modules/stats/index.js
    node_modules/stats/README.md

    Provide type declaration for that module in:
    declarations/stats/index.d.ts

Higher difficulty bonus exercise:

    Avoid duplicates of type declarations.

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

function logUser(user: User | null) {
    if (!user) {
        console.log(' - none');
        return;
    }
    const pos = users.indexOf(user) + 1;
    console.log(` - #${pos} User: ${user.name}, ${user.age}, ${user.occupation}`);
}

function logAdmin(admin: Admin | null) {
    if (!admin) {
        console.log(' - none');
        return;
    }
    const pos = admins.indexOf(admin) + 1;
    console.log(` - #${pos} Admin: ${admin.name}, ${admin.age}, ${admin.role}`);
}

const compareUsers = (a: User, b: User) => a.age - b.age;
const compareAdmins = (a: Admin, b: Admin) => a.age - b.age;
const colorizeIndex = (value: number) => String(value + 1);

export {
    getMaxIndex,
    getMaxElement,
    getMinIndex,
    getMinElement,
    getMedianIndex,
    getMedianElement,
    getAverageValue
};

console.log('Youngest user:');
logUser(getMinElement(users, compareUsers));
console.log(` - was ${colorizeIndex(getMinIndex(users, compareUsers))}th to register`);

console.log();

console.log('Median user:');
logUser(getMedianElement(users, compareUsers));
console.log(` - was ${colorizeIndex(getMedianIndex(users, compareUsers))}th to register`);

console.log();

console.log('Oldest user:');
logUser(getMaxElement(users, compareUsers));
console.log(` - was ${colorizeIndex(getMaxIndex(users, compareUsers))}th to register`);

console.log();

console.log('Average user age:');
console.log(` - ${String(getAverageValue(users, ({age}: User) => age))} years`);

console.log();

console.log('Youngest admin:');
logAdmin(getMinElement(admins, compareAdmins));
console.log(` - was ${colorizeIndex(getMinIndex(users, compareUsers))}th to register`);

console.log();

console.log('Median admin:');
logAdmin(getMedianElement(admins, compareAdmins));
console.log(` - was ${colorizeIndex(getMedianIndex(users, compareUsers))}th to register`);

console.log();

console.log('Oldest admin:');
logAdmin(getMaxElement(admins, compareAdmins));
console.log(` - was ${colorizeIndex(getMaxIndex(users, compareUsers))}th to register`);

console.log();

console.log('Average admin age:');
console.log(` - ${String(getAverageValue(admins, ({age}: Admin) => age))} years`);

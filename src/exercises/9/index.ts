/*

Exercise:

    Remove UsersApiResponse and AdminsApiResponse types
    and use generic type ApiResponse in order to specify API
    response formats for each of the functions.

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
    { type: 'admin', name: 'Nick Fury', age: 64, role: 'The Big Boss' }
];

const users: User[] = [
    { type: 'user', name: 'Tony Stark', age: 45, occupation: 'Iron Man' },
    { type: 'user', name: 'Natasha Romanoff', age: 35, occupation: 'Black Widow' },
    { type: 'user', name: 'T'Challa', age: 34, role: 'Black Panther' }
];

export type ApiResponse<T> = unknown;

type AdminsApiResponse = (
    {
        status: 'success';
        data: Admin[];
    } |
    {
        status: 'error';
        error: string;
    }
);

export function requestAdmins(callback: (response: AdminsApiResponse) => void) {
    callback({
        status: 'success',
        data: admins
    });
}

type UsersApiResponse = (
    {
        status: 'success';
        data: User[];
    } |
    {
        status: 'error';
        error: string;
    }
);

export function requestUsers(callback: (response: UsersApiResponse) => void) {
    callback({
        status: 'success',
        data: users
    });
}

export function requestCurrentServerTime(callback: (response: unknown) => void) {
    callback({
        status: 'success',
        data: Date.now()
    });
}

export function requestCoffeeMachineQueueLength(callback: (response: unknown) => void) {
    callback({
        status: 'error',
        error: 'Numeric value has exceeded Number.MAX_SAFE_INTEGER.'
    });
}

function logPerson(person: Person) {
    console.log(
        ` - ${person.name}, ${person.age}, ${person.type === 'admin' ? person.role : person.occupation}`
    );
}

function startTheApp(callback: (error: Error | null) => void) {
    requestAdmins((adminsResponse) => {
        console.log('Admins:');
        if (adminsResponse.status === 'success') {
            adminsResponse.data.forEach(logPerson);
        } else {
            return callback(new Error(adminsResponse.error));
        }

        console.log();

        requestUsers((usersResponse) => {
            console.log('Users:');
            if (usersResponse.status === 'success') {
                usersResponse.data.forEach(logPerson);
            } else {
                return callback(new Error(usersResponse.error));
            }

            console.log();

            requestCurrentServerTime((serverTimeResponse) => {
                console.log('Server time:');
                if (serverTimeResponse.status === 'success') {
                    console.log(`   ${new Date(serverTimeResponse.data).toLocaleString()}`);
                } else {
                    return callback(new Error(serverTimeResponse.error));
                }

                console.log();

                requestCoffeeMachineQueueLength((coffeeMachineQueueLengthResponse) => {
                    console.log('Coffee machine queue length:');
                    if (coffeeMachineQueueLengthResponse.status === 'success') {
                        console.log(`   ${coffeeMachineQueueLengthResponse.data}`);
                    } else {
                        return callback(new Error(coffeeMachineQueueLengthResponse.error));
                    }

                    callback(null);
                });
            });
        });
    });
}

startTheApp((e: Error | null) => {
    console.log();
    if (e) {
        console.log(`Error: "${e.message}", but it's fine, sometimes errors are inevitable.`)
    } else {
        console.log('Success!');
    }
});

// In case you are stuck:
// https://www.typescriptlang.org/docs/handbook/2/generics.html

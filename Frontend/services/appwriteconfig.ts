
// import { Client, Account, ID } from "appwrite";

// const client = new Client()
//     .setEndpoint('http://localhost/v1') // Your API Endpoint
//     .setProject('63b3d5a05bfc73475241');               // Your project ID

// const account = new Account(client);

// const promise = account.create(
//     ID.unique(),
//     'team@appwrite.io',
//     'password'
// );

// promise.then(function (response) {
//     console.log(response);
// }, function (error) {
//     console.log(error);
// });

import { Client, Account } from "appwrite";

const client = new Client();

export const account = new Account(client);

client
    .setEndpoint('http://localhost/v1') // Your API Endpoint
    .setProject('63b3d5a05bfc73475241');               // Your project ID

;


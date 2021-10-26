const express = require('express');
const { MongoClient } = require('mongodb');
require('dotenv').config();

const app = express();
const port = 5000;

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.k5fnv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

console.log(uri);

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {

    try {
        await client.connect();
        console.log('database connected');
    }

    finally {
        // await client.close();
    };

};
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});



/*
one time:
1. nodemon globally install
2. mongodb atlas user, access
3. Network access (ip adress allow)
Connect

Every projects
1. inatall mongodb
2. import (require), mongodb
3. copy uri(connection string)
4. create the client (copy code from atlas)
5. Create or get database access credentials (userName, password)
6. create .env file and add DB_user and DB_PASS as environment variable
7. Make sure you require (import) dotenv
8. Convert URI string to a templete string. 
9. Add DB_USER and DB_PASS in the connection URI string.
10. Check URI String by using console.log
11. Create async function run and call it by using run(). catch(console.dir)
12. add try and finally inside the function
13. comment out await client.close() to keep the connection alive
14. add await client.connect() inside the try block
15. use a console.log after the client.connect to ensure that database is connected
*/
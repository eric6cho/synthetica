
require('dotenv').config();
const path = require('path');
const express = require("express");

const app = express();

const ISLOCAL = process.env.PORT===null||process.env.PORT===undefined;
const PORT = ISLOCAL ? 8888 : process.env.PORT;
const SERVERAPI = '/api';

app.use(express.json());

app.use(express.static(path.resolve(__dirname, '../client/build'))); 

app.get(SERVERAPI, (req, res) => res.json({ message: 'Hello from the server on port '+PORT })); 

app.get('/', (req, res) => res.json({ message: 'Hello from the server on port '+PORT })); 

app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../client/public', 'index.html'))); 

app.listen(PORT, () => console.log(`SERVER: Listening in a ${ISLOCAL?'local':'production'} environment on ${PORT}`));

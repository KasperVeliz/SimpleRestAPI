import {user, host, database, password, port} from './restricted';

const Pool = require('pg').Pool

const pool = new Pool({
    user: user,
    host: host,
    database: database,
    password: password,
    port: port,
})
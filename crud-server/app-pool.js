"use strict";
exports.__esModule = true;
exports.AppPool = void 0;
var pg_1 = require("pg");
var AppPool = new pg_1.Pool({
    user: 'postgres',
    host: 'localhost',
    password: '7A?bRNtL',
    database: 'taskCRUD',
    port: 5432
});
exports.AppPool = AppPool;

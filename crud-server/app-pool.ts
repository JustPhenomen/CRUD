import { Pool } from 'pg';

const AppPool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: '7A?bRNtL',
    database: 'taskCRUD',
    port: 5432
});

export { AppPool };

import { createConnection } from "typeorm";
import { DBDetailsType } from '../types';
import { __prod__, dbDetails } from '../constants';
import path from 'path';

export const dbConn = async (db: DBDetailsType = dbDetails) => await createConnection({
    type: db.db_type as unknown as any,
    database: db.db_name,
    username: db.db_user,
    password: db.db_pass,
    host: db.db_host,
    port: db.db_port,
    synchronize: true,
    logging: !__prod__,
    entities: [
        path.join(__dirname, '../models/*.ts')
    ]
});
import { DataTypeNameMap, MigrationV1Config, MigrationV1Function, MigrationV1Meta, MigrationV1SetupFunction, SeedLink } from '../types/db-migrate';
import * as path from 'path';
import * as fs from 'fs';

let dbm: MigrationV1Config; let type: DataTypeNameMap; let seed: SeedLink;

export const setup: MigrationV1SetupFunction = (options, seedLink) => {
    dbm = options.dbmigrate; type = dbm.dataType; seed = seedLink;
};

export const up: MigrationV1Function = async db => {
    const filePath = path.join(__dirname, '20230430100000-vocabulary-trainer-init.sql');
    const sqlFileContent = fs.readFileSync(filePath, 'utf-8');
    await db.runSql(sqlFileContent);
};

export const down: MigrationV1Function = async db => {
    try {
        await db.dropTable('vocabulary_set');
    } catch {
    }
};

export const _meta: MigrationV1Meta = {
    version: 1,
};

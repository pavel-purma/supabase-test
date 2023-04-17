import { DataTypeNameMap, MigrationV1Config, MigrationV1Function, MigrationV1Meta, MigrationV1SetupFunction, SeedLink } from '../types/db-migrate';
import * as path from 'path';
import * as fs from 'fs';

let dbm: MigrationV1Config; let type: DataTypeNameMap; let seed: SeedLink;

export const setup: MigrationV1SetupFunction = (options, seedLink) => {
    dbm = options.dbmigrate; type = dbm.dataType; seed = seedLink;
};

export const up: MigrationV1Function = async db => {
    const filePath = path.join(__dirname, '20230417130000-test.sql');
    const sqlFileContent = fs.readFileSync(filePath, 'utf-8');
    await db.runSql(sqlFileContent);
};

export const down: MigrationV1Function = async db => {
    await db.dropTable('vocabulary_set_test');
};

export const _meta: MigrationV1Meta = {
    version: 1,
};

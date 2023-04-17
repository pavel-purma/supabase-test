import { DataTypeNameMap, MigrationV1Config, MigrationV1Function, MigrationV1Meta, MigrationV1SetupFunction, SeedLink } from '../types/db-migrate';

let dbm: MigrationV1Config; let type: DataTypeNameMap; let seed: SeedLink;

export const setup: MigrationV1SetupFunction = (options, seedLink) => {
    dbm = options.dbmigrate; type = dbm.dataType; seed = seedLink;
};

export const up: MigrationV1Function = async db => {
    await db.createTable('test_table', {
        id: {
            type: type.BIGINT,
            primaryKey: true,
        },
        name: {
            type: type.STRING,
            length: 60,
        },
    });
};

export const down: MigrationV1Function = async db => {
    await db.dropTable('test_table');
};

export const _meta: MigrationV1Meta = {
    version: 1,
};

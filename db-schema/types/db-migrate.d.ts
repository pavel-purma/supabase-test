// I don't think we need Bluebird in this case. Any respectable JavaScript environment nowadays will have
// a useable Promise class.
export type PromiseConstructor = typeof Promise;

export interface DataTypeNameMap {
    CHAR: string;
    STRING: string;
    TEXT: string;
    SMALLINT: string;
    BIGINT: string;
    INTEGER: string;
    SMALL_INTEGER: string;
    BIG_INTEGER: string;
    REAL: string;
    DATE: string;
    DATE_TIME: string;
    TIME: string;
    BLOB: string;
    TIMESTAMP: string;
    BINARY: string;
    BOOLEAN: string;
    DECIMAL: string;
}

export interface Logger {
    isSilent: boolean;
    setLogLevel(level: string): void;
    // setEscape(...args: unknown[]): unknown;
    // silence(...args: unknown[]): unknown;
    info(message: string): void;
    warn(message: string): void;
    error(message: string): void;
    sql(message: string): void;
    verbose(message: string): void;
}

export declare class SeedLink {
    constructor(driver: unknown, internals: unknown);
    seeder: unknown;
    internals: unknown;
    links: Array<unknown>;
    seed(partialName: string): Promise<unknown>;
    link(partialName: string): void;
    process(): void;
    clear(): void;
}

export interface MigrationV1Config {
    version: string;
    dataType: DataTypeNameMap;
}

export interface MigrationV1Options {
    dbmigrate: MigrationV1Config;
    dryRun?: boolean;
    cwd: string;
    noTransactions: boolean;
    verbose: boolean;
    type: DataTypeNameMap;
    log: Logger;
    ignoreOnInit?: boolean;
    Promise: PromiseConstructor;
}

export interface MigrationV1SetupFunction {
    (options: MigrationV1Options, seedLink: SeedLink): void;
}

export interface MigrationV1Function<DbDriver = BaseDbDriver> {
    (db: DbDriver): Promise<any>;
}

export interface MigrationV1Meta {
    version: number;
}

export declare class BaseDbDriver {
    close(): Promise<any>;
    truncate(tableName: string): Promise<any>;
    checkDBMS(dbms: any): Promise<any>;
    createDatabase(...options: any[]): Promise<any>;
    switchDatabase(...options: any[]): Promise<any>;
    dropDatabase(...options: any[]): Promise<any>;
    recurseCallbackArray(foreignKeys: Array<string>): Promise<any>;
    createMigrationsTable(): Promise<any>;
    createSeedsTable(): Promise<any>;
    createTable(tableName: string, options: any | CreateTableOptions): Promise<any>;
    dropTable(tableName: string, options?: DropTableOptions): Promise<any>;
    renameTable(tableName: string, newTableName: string): Promise<any>;
    addColumn(tableName: string, columnName: string, columnSpec: ColumnSpec): Promise<any>;
    removeColumn(tableName: string, columnName: string): Promise<any>;
    renameColumn(tableName: string, oldColumnName: string, newColumnName: string): Promise<any>;
    changeColumn(tableName: string, columnName: string, columnSpec: ColumnSpec): Promise<any>;
    addIndex(tableName: string, indexName: string, columns: string | Array<string>, unique?: boolean): Promise<any>;
    insert(
        tableName: string,
        columnNameOrValueArray: any,
        valueArrayOrCb?: any | CallbackFunction,
        callback?: CallbackFunction,
    ): Promise<any>;
    update(
        tableName: string,
        columnNameOrValueArray: any,
        valueArrayOrIds?: any,
        idsOrCb?: any | CallbackFunction,
        callback?: CallbackFunction,
    ): Promise<any>;
    lookup(tableName: string, column: string, id?: any, callback?: CallbackFunction): Promise<any>;
    removeIndex(tableNameOrIndexName: string, indexName?: string): Promise<any>;
    addForeignKey(
        tableName: string,
        referencedTableName: string,
        keyName: string,
        fieldMapping: any,
        rules: ForeignKeyRules,
    ): Promise<any>;
    removeForeignKey(tableName: string, keyName: string, options?: RemoveForeignKeyOptions): Promise<any>;
    addMigrationRecord(name: string): Promise<any>;
    addSeedRecord(name: string): Promise<any>;
    startMigration(): Promise<any>;
    endMigration(callback: CallbackFunction): Promise<any>;
    runSql(sql?: string, params?: Array<any>): Promise<any>;
    allLoadedMigrations(): Promise<any>;
    allLoadedSeeds(): Promise<any>;
    deleteMigration(migrationName: string): Promise<any>;
    remove(table: string, ids: any): Promise<any>;
    deleteSeed(seedName: string): Promise<any>;
    all(sql: string, params?: Array<any>): Promise<any>;
}

export interface CallbackFunction {
    (err: any, response: any): void;
}

export interface InternalModule {
    log: Logger;
    type: DataTypeNameMap;
}

export interface InternalOptions {
    mod: InternalModule;
}

export interface ColumnSpec {
    length?: number | undefined;
    type: string;
    unsigned?: boolean | undefined;
    primaryKey?: boolean | undefined;
    autoIncrement?: boolean | undefined;
    notNull?: boolean | undefined;
    unique?: boolean | undefined;
    defaultValue?: any;
    foreignKey?: ForeignKeySpec | undefined;
}

export interface ForeignKeySpec {
    name: string;
    table: string;
    rules?: ForeignKeyRules | undefined;
    mapping: string | any;
}

export interface ForeignKeyRules {
    onDelete: string;
    onUpdate: string;
}

export interface RemoveForeignKeyOptions {
    dropIndex?: boolean | undefined;
}

export interface CreateTableOptions {
    columns?: Array<ColumnSpec> | undefined;
    ifNotExists?: boolean | undefined;
}

export interface DropTableOptions {
    ifExists?: boolean | undefined;
}

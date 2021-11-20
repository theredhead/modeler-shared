/** @format */

export type DbColumnType =
  // Numeric types
  | "TINYINT"
  | "SMALLINT"
  | "MEDIUMINT"
  | "INT"
  | "BIGINT"
  | "DECIMAL"
  | "FLOAT"
  | "BIT"
  // String types
  | "CHAR"
  | "VARCHAR"
  | "TINYTEXT"
  | "TEXT"
  | "MEDIUMTEXT"
  | "LONGTEXT"
  // Binary types
  | "BINARY"
  | "VARBINARY"
  | "TINYBLOB"
  | "BLOB"
  | "MEDIUNBLOB"
  | "LONGBLOB"
  // Date and time types
  | "DATE"
  | "TIME"
  | "YEAR"
  | "DATETIME"
  | "TIMESTAMP"
  // Special types
  | "ENUM"
  | "SET";

export const knownDbColumnTypes = [
  "TINYINT",
  "SMALLINT",
  "MEDIUMINT",
  "INT",
  "BIGINT",
  "DECIMAL",
  "FLOAT",
  "BIT",
  "CHAR",
  "VARCHAR",
  "TINYTEXT",
  "TEXT",
  "MEDIUMTEXT",
  "LONGTEXT",
  "BINARY",
  "VARBINARY",
  "TINYBLOB",
  "BLOB",
  "MEDIUNBLOB",
  "LONGBLOB",
  "DATE",
  "TIME",
  "YEAR",
  "DATETIME",
  "TIMESTAMP",
  "ENUM",
  "SET",
];

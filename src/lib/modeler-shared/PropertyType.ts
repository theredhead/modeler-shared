/** @format */

import { DbColumnType } from "./DbColumnType";

export interface PropertyType {
  name: string;
  description: string;
  columnType: DbColumnType;
  template: string;
}

export type PropertyTypeRef = string | PropertyType;

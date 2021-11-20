/** @format */

import { PropertyTypeRef } from "./PropertyType";

export interface Property {
  name: string;
  description?: string;
  type: PropertyTypeRef;
  required: boolean;
}

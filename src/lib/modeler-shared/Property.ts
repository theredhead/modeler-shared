import { PropertyType } from "./PropertyType";

export interface Property {
  name: string;
  description: string;
  type: PropertyType;
  required: boolean;
}

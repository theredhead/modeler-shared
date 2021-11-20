/** @format */

import { Relation } from "./Relation";
import { Entity } from "./Entity";
import { PropertyType } from "./PropertyType";

export interface EntityModel {
  name: string;
  description: string;
  entities: Entity[];
  relationships: Relation[];
  propertiesTypes: PropertyType[];

  /**
   * if true, this model requires a 'member' table that will be
   * used to add creator and modifier fields in all tables.
   */
  usesMembership: boolean;
}

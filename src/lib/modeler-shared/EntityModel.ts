/** @format */

import { Relation } from "./Relation";
import { Entity } from "./Entity";

/** @format */

export interface EntityModel {
  name: string;
  description: string;
  entities: Entity[];
  relationships: Relation[];

  /**
   * if true, this model requires a 'member' table that will be
   * used to add creator and modifier fields in all tables.
   */
  usesMembership: boolean;
}

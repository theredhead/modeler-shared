import { Entity } from "./Entity";


export interface Relation {
  name: string;
  description: string;
  parent: Entity;
  child: Entity;
  has: "ONE" | "MANY";
  required: boolean;
}

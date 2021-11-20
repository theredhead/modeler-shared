/** @format */
export interface Relation {
  name: string;
  description: string;
  parent: EntityRef;
  child: EntityRef;
  has: "ONE" | "MANY";
  required: boolean;
}

export type EntityRef = string;

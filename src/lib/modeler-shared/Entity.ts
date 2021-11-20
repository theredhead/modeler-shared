/** @format */

import { Property } from "./Property";

export interface Entity {
  name: string;
  description: string;
  properties: Property[];

  /**
   * a format string used to display records of this type in text
   */
  recordLabelFmt: string;

  /**
   * Indicate if the edits in this table should be logged
   */
  audit: boolean;

  /**
   * Indicate if we want to use a staging table for records until they are approved
   */
  staging: boolean;
}

import { FieldModel } from "./field-model";

export class DateRange extends FieldModel<string> {
  override controlType = "daterange";
}

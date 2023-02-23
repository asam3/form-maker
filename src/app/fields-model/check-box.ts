import { FieldModel } from "./field-model";

export class CheckBox extends FieldModel<string> {
  override controlType = "checkbox";
}

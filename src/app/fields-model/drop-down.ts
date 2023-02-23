import { FieldModel } from './field-model';

export class DropDown extends FieldModel<string> {
  override controlType = 'dropdown';
}

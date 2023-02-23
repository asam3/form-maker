import { FieldModel } from './field-model';

export class RadioButton extends FieldModel<string> {
  override controlType = 'radio';
}

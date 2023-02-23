import { FieldModel } from './field-model';

export class TextBox extends FieldModel<string> {
  override controlType = 'textbox';
}

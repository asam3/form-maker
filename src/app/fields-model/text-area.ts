import { FieldModel } from './field-model';

export class TextArea extends FieldModel<string> {
  override controlType = 'textarea';
}

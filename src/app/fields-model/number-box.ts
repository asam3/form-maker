import { FieldModel } from './field-model';

export class NumberBox extends FieldModel<string> {
  override controlType = 'numberbox';
}

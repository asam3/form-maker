import { Guid } from "guid-typescript";
import { FieldModel } from "./field-model";

export class FormModel<T> {
  title: string = "";
  user: string = "";
  role: string = "";
  id: Guid = Guid.create();
  fields: FieldModel<string>[] = [new FieldModel<string>()];

  constructor(
    form: {
      title?: string;
      user?: string;
      role?: string;
      id?: Guid;
      fields?: FieldModel<string>[];
    } = {}
  ) {
    this.title = form.title!;
    this.user = form.user || "";
    this.role = form.role || "";
    this.id = form.id!;
    this.fields = form.fields!;
  }
}

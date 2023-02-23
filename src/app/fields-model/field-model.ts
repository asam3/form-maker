import { Guid } from "guid-typescript";

export class FieldModel<T> {
  value: T | undefined;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;
  type: string;
  validation: string;
  formation: string;
  description: string;
  id: Guid = Guid.create();
  options: { key: string; value: string }[];

  constructor(
    options: {
      value?: T;
      key?: string;
      label?: string;
      required?: boolean;
      order?: number;
      controlType?: string;
      type?: string;
      validation?: string;
      formation?: string;
      description?: string;
      id?: string;
      options?: { key: string; value: string }[];
    } = {}
  ) {
    this.value = options.value;
    this.key = options.key || "";
    this.label = options.label || "";
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || "";
    this.type = options.type || "";
    this.options = options.options || [];
    this.validation = options.validation || "";
    this.description = options.description || "";
    this.formation = options.formation || "";
  }
}

import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { FieldModel } from "../fields-model/field-model";

@Injectable({
  providedIn: "root",
})
export class ControlService {
  /**
   * builf form controler from each item in fields
   * @param fields
   * @returns FormGroup
   */
  toFormGroup(fields: FieldModel<string>[]) {
    const group: any = {};
    const phone = Validators.pattern(
      "^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,8}$"
    );
    const required = Validators.required;
    const email = Validators.email;

    fields.forEach((field) => {
      let validations: any = [];

      // check required validation
      if (field.required) {
        validations.push(required);
      }

      // check phone validation
      if (field.validation === "Phone") {
        validations.push(phone);
      }

      if (field.validation === "Email") {
        validations.push(email);
      }

      group[field.key] = new FormControl(field.value || "", validations);
    });

    return new FormGroup(group);
  }
}

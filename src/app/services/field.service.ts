import { Injectable } from '@angular/core';

import { DropDown } from '../fields-model/drop-down';
import { FieldModel } from '../fields-model/field-model';
import { TextBox } from '../fields-model/text-box';
import { TextArea } from '../fields-model/text-area';
import { of } from 'rxjs';
import { NumberBox } from '../fields-model/number-box';
import { RadioButton } from '../fields-model/radio-button';
import { FormModel } from '../fields-model/form-model';

@Injectable({
  providedIn: 'root',
})
export class FieldService {
  fields: FieldModel<string>[] = [];
  forms: FormModel<any>[] = [];

  /**
   * return form array. but in real condition it should come from server
   * @returns  form
   */
  getForms() {
    return this.forms;
  }

  /**
   * return one form finded in array. but in real condition it should come from server
   * @param id number
   */
  getForm(id): Promise<FormModel<any>> {
    return new Promise(async (resolve, reject) => {
      const form = await (<FormModel<any>>(
        this.forms.find((item) => item.id == id)
      ));
      if (form) {
        resolve(form);
      } else {
        reject('No form found');
      }
    });
  }

  /**
   * remove one item from field array depend on income id
   * @param id Guid
   */
  removeField(id: any) {
    const objWithIdIndex = this.fields.findIndex((obj) => obj.id == id);

    if (objWithIdIndex > -1) {
      this.fields.splice(objWithIdIndex, 1);
    }
  }

  /**
   * remove one item from form array depend on income id
   * @param id number
   */
  removeForm(id) {
    const objWithIdIndex = this.forms.findIndex((obj) => obj.id == id);

    if (objWithIdIndex > -1) {
      this.forms.splice(objWithIdIndex, 1);
    }
  }
}

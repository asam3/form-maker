import { Component, Inject, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { CheckBox } from "src/app/fields-model/check-box";
import { DateRange } from "src/app/fields-model/date-range";
import { DropDown } from "src/app/fields-model/drop-down";
import { NumberBox } from "src/app/fields-model/number-box";
import { RadioButton } from "src/app/fields-model/radio-button";
import { TextArea } from "src/app/fields-model/text-area";
import { TextBox } from "src/app/fields-model/text-box";

@Component({
  selector: "app-field-details-modal",
  templateUrl: "./field-details-modal.component.html",
  styleUrls: ["./field-details-modal.component.scss"],
})
export class FieldDetailsModalComponent implements OnInit {
  detailsGroup = new FormGroup({
    key: new FormControl("", Validators.required),
    label: new FormControl("", Validators.required),
    description: new FormControl(),
    required: new FormControl(),
    validation: new FormControl(),
    formation: new FormControl(),
    options: new FormArray([
      new FormGroup({
        key: new FormControl(""),
        value: new FormControl(""),
      }),
    ]),
    order: new FormControl(1),
  });

  get options() {
    return this.detailsGroup.get("options") as FormArray;
  }

  field = "";
  constructor(
    public dialogRef: MatDialogRef<FieldDetailsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.field = this.data.field;
  }

  close() {
    this.dialogRef.close(false);
  }

  add() {
    let resultObj;
    switch (this.field) {
      case "textbox":
        resultObj = new TextBox({
          key: this.detailsGroup.value.key,
          label: this.detailsGroup.value.label,
          value: this.detailsGroup.value.value,
          required: this.detailsGroup.value.required,
          validation: this.detailsGroup.value.validation,
          formation: this.detailsGroup.value.formation,
          description: this.detailsGroup.value.description,
          order: this.detailsGroup.value.order,
          type: "text",
        });
        break;

      case "numberbox":
        resultObj = new NumberBox({
          key: this.detailsGroup.value.key,
          label: this.detailsGroup.value.label,
          value: this.detailsGroup.value.value,
          required: this.detailsGroup.value.required,
          validation: this.detailsGroup.value.validation,
          formation: this.detailsGroup.value.formation,
          description: this.detailsGroup.value.description,

          order: this.detailsGroup.value.order,
          type: "number",
        });
        break;

      case "date":
        resultObj = new TextBox({
          key: this.detailsGroup.value.key,
          label: this.detailsGroup.value.label,
          value: this.detailsGroup.value.value,
          required: this.detailsGroup.value.required,
          validation: this.detailsGroup.value.validation,
          formation: this.detailsGroup.value.formation,
          description: this.detailsGroup.value.description,

          order: this.detailsGroup.value.order,
          type: "date",
        });
        break;

      case "radio":
        resultObj = new RadioButton({
          key: this.detailsGroup.value.key,
          label: this.detailsGroup.value.label,
          value: this.detailsGroup.value.value,
          required: this.detailsGroup.value.required,
          validation: this.detailsGroup.value.validation,
          formation: this.detailsGroup.value.formation,
          description: this.detailsGroup.value.description,

          order: this.detailsGroup.value.order,
          options: this.detailsGroup.value.options,
        });
        break;

      case "textarea":
        resultObj = new TextArea({
          key: this.detailsGroup.value.key,
          label: this.detailsGroup.value.label,
          value: this.detailsGroup.value.value,
          required: this.detailsGroup.value.required,
          validation: this.detailsGroup.value.validation,
          formation: this.detailsGroup.value.formation,
          description: this.detailsGroup.value.description,

          order: this.detailsGroup.value.order,
        });
        break;

      case "dropdown":
        resultObj = new DropDown({
          key: this.detailsGroup.value.key,
          label: this.detailsGroup.value.label,
          value: this.detailsGroup.value.value,
          required: this.detailsGroup.value.required,
          validation: this.detailsGroup.value.validation,
          formation: this.detailsGroup.value.formation,
          description: this.detailsGroup.value.description,

          order: this.detailsGroup.value.order,
          options: this.detailsGroup.value.options,
        });
        break;

      case "checkbox":
        resultObj = new CheckBox({
          key: this.detailsGroup.value.key,
          label: this.detailsGroup.value.label,
          value: this.detailsGroup.value.value,
          required: this.detailsGroup.value.required,
          validation: this.detailsGroup.value.validation,
          formation: this.detailsGroup.value.formation,
          description: this.detailsGroup.value.description,
          type: "checkbox",
          order: this.detailsGroup.value.order,
          options: this.detailsGroup.value.options,
        });
        break;

      case "daterange":
        resultObj = new DateRange({
          key: this.detailsGroup.value.key,
          label: this.detailsGroup.value.label,
          value: this.detailsGroup.value.value,
          required: this.detailsGroup.value.required,
          validation: this.detailsGroup.value.validation,
          formation: this.detailsGroup.value.formation,
          description: this.detailsGroup.value.description,
          order: this.detailsGroup.value.order,
          options: this.detailsGroup.value.options,
        });
        break;

      default:
        break;
    }
    this.dialogRef.close(resultObj);
  }

  addOptions() {
    this.options.push(
      new FormGroup({ key: new FormControl(""), value: new FormControl("") })
    );
  }
}

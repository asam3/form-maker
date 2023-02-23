import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";

import { FieldModel } from "src/app/fields-model/field-model";
import { FieldService } from "src/app/services/field.service";

@Component({
  selector: "app-field-maker",
  templateUrl: "./field-maker.component.html",
  styleUrls: ["./field-maker.component.css"],
})
export class FieldMakerComponent implements OnInit {
  @Input() field!: FieldModel<string>;
  @Input() form!: FormGroup;
  @Input() mode;
  @Output() remove = new EventEmitter();
  get isValid() {
    return this.form.controls[this.field.key].valid;
  }
  constructor(private fieldService: FieldService) {}

  ngOnInit() {}

  removeField(fieldId) {
    this.remove.emit(fieldId);
    // this.fieldService.removeField(fieldId);
  }
}

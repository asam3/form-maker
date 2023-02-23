import {
  Component,
  Input,
  OnInit,
  OnChanges,
  Output,
  EventEmitter,
} from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldModel } from "src/app/fields-model/field-model";
import { ControlService } from "src/app/services/control.service";

@Component({
  selector: "app-form-maker",
  templateUrl: "./form-maker.component.html",
  styleUrls: ["./form-maker.component.css"],
})
export class FormMakerComponent implements OnInit, OnChanges {
  @Input() fields: FieldModel<string>[] | null = [];
  @Input() mode: "edit" | "show" = "show";
  @Output() remove = new EventEmitter();
  form!: FormGroup;
  payLoad = "";

  constructor(private cs: ControlService) {}

  ngOnInit() {
    this.form = this.cs.toFormGroup(this.fields as FieldModel<string>[]);
  }

  ngOnChanges() {
    this.form = this.cs.toFormGroup(this.fields as FieldModel<string>[]);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }

  removeField(event) {
    this.remove.emit(event);
  }
}

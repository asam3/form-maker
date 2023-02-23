import { Component, OnInit } from "@angular/core";
import { FieldService } from "src/app/services/field.service";

@Component({
  selector: "app-form-list",
  templateUrl: "./form-list.component.html",
  styleUrls: ["./form-list.component.css"],
})
export class FormListComponent implements OnInit {
  forms;
  constructor(private fieldService: FieldService) {}

  ngOnInit() {
    this.getForms();
  }

  getForms() {
    this.forms = this.fieldService.getForms();
  }
  removeForm(formId) {
    this.fieldService.removeForm(formId);
  }
}

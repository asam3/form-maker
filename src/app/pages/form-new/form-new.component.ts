import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { FieldModel } from "src/app/fields-model/field-model";
import { FormModel } from "src/app/fields-model/form-model";
import { FieldService } from "src/app/services/field.service";
import { FieldDetailsModalComponent } from "../../shared/modals/field-details-modal/field-details-modal.component";

@Component({
  selector: "app-form-new",
  templateUrl: "./form-new.component.html",
  styleUrls: ["./form-new.component.css"],
})
export class FormNewComponent implements OnInit {
  form = new FormGroup({
    title: new FormControl(),
    id: new FormControl(1, Validators.required),
    user: new FormControl("All"),
    role: new FormControl("All"),
  });
  fields: FieldModel<string>[] = [];
  showForm = false;
  constructor(
    public dialog: MatDialog,
    private fieldService: FieldService,
    private router: Router
  ) {}

  ngOnInit() {}

  addField(field: string) {
    this.showForm = false;
    const dialogRef = this.dialog.open(FieldDetailsModalComponent, {
      data: {
        field: field,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.updateFields(result);
      } else {
        this.showForm = true;
      }
    });
  }

  updateFields(result) {
    this.fields.push(result);
    this.showForm = true;
  }

  save() {
    const form: FormModel<any> = {
      fields: this.fields,
      id: this.form.value.id,
      title: this.form.value.title,
      role: this.form.value.role,
      user: this.form.value.user,
    };
    this.fieldService.forms.push(form);

    this.router.navigateByUrl("/form/list");
  }

  removeField(event) {
    const objWithIdIndex = this.fields.findIndex(
      (obj) => obj.id == event.value
    );

    if (objWithIdIndex > -1) {
      this.fields.splice(objWithIdIndex, 1);
    }
  }
}

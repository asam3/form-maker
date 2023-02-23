import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute, Router } from "@angular/router";
import { FieldModel } from "src/app/fields-model/field-model";
import { FormModel } from "src/app/fields-model/form-model";
import { FieldService } from "src/app/services/field.service";
import { FieldDetailsModalComponent } from "src/app/shared/modals/field-details-modal/field-details-modal.component";

@Component({
  selector: "app-form-update",
  templateUrl: "./form-update.component.html",
  styleUrls: ["./form-update.component.css"],
})
export class FormUpdateComponent implements OnInit {
  form = new FormGroup({
    title: new FormControl(),
    id: new FormControl(null, Validators.required),
    user: new FormControl(),
    role: new FormControl(),
  });
  fields: FieldModel<string>[] = [];
  showForm = false;
  formId;
  constructor(
    public dialog: MatDialog,
    private fieldService: FieldService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe((param) => {
      this.formId = param["formId"];
    });
  }

  ngOnInit() {
    this.getForm(this.formId);
  }

  getForm(formId) {
    const formData = this.fieldService.getForm(formId);

    formData.then((data) => {
      this.showForm = true;
      this.form.patchValue({
        title: data?.title,
        role: data?.role,
        user: data?.user,
        id: data?.id,
      });
      if (data.fields) {
        this.fields = data.fields;
      }
    });
  }

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
      }
    });
  }

  updateFields(result) {
    this.fields.push(result);
    this.showForm = true;
  }

  update() {
    this.fieldService.removeForm(this.formId);
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

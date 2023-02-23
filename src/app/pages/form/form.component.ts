import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FieldModel } from '../../fields-model/field-model';
import { FieldService } from '../../services/field.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  fields: FieldModel<any>[] = [];
  formId;
  error = false;
  constructor(
    private fieldService: FieldService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((param) => {
      this.formId = param['formId'];
    });
  }

  ngOnInit(): void {
    this.error = false;

    const form = this.fieldService.getForm(this.formId);
    form.then((data) => {
      this.fields = data['fields'];
    });

    form.catch((error) => {
      this.error = true;
    });
  }
}

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { FormListComponent } from "./pages/form-list/form-list.component";
import { FormNewComponent } from "./pages/form-new/form-new.component";
import { FormUpdateComponent } from "./pages/form-update/form-update.component";
import { AppRoutingModule } from "./app-routing.module";
import { TopBarComponent } from "./layout/top-bar/top-bar.component";
import { FormComponent } from "./pages/form/form.component";
import { FormMakerComponent } from "./shared/form-maker/form-maker.component";
import { FieldMakerComponent } from "./shared/field-maker/field-maker.component";
import { FieldDetailsModalComponent } from "./shared/modals/field-details-modal/field-details-modal.component";
import { MatDialogModule } from "@angular/material/dialog";
import { NgxMaskModule } from "ngx-mask";
import { NgxDaterangepickerMd } from "ngx-daterangepicker-material";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    NgxMaskModule.forRoot(),
    NgxDaterangepickerMd.forRoot(),
  ],
  declarations: [
    AppComponent,
    FormListComponent,
    FormNewComponent,
    FormUpdateComponent,
    TopBarComponent,
    FormComponent,
    FormMakerComponent,
    FieldMakerComponent,
    FieldDetailsModalComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

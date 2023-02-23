import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FormListComponent } from "./pages/form-list/form-list.component";
import { FormNewComponent } from "./pages/form-new/form-new.component";
import { FormUpdateComponent } from "./pages/form-update/form-update.component";
import { FormComponent } from "./pages/form/form.component";

const routes: Routes = [
  {
    path: "form/show/:formId",
    component: FormComponent,
  },
  {
    path: "form/list",
    component: FormListComponent,
  },
  {
    path: "form/new",
    component: FormNewComponent,
  },
  {
    path: "form/update/:formId",
    component: FormUpdateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

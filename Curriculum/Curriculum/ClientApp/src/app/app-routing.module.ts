import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./curriculum/curriculum.module").then(mod => mod.CurriculumModule)
  },
  {
    path: "projects",
    loadChildren: () =>
      import("./project/project.module").then(mod => mod.ProjectModule)
  },
  {
    path: "certifications",
    loadChildren: () =>
      import("./certification/certification.module").then(
        mod => mod.CertificationModule
      )
  },
  {
    path: "references",
    loadChildren: () =>
      import("./reference/reference.module").then(mod => mod.ReferenceModule)
  },
  {
    path: "**",
    redirectTo: "",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

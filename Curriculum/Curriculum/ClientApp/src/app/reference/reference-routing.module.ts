import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CONTAINER } from "./containers";

const routes: Routes = [
  {
    path: "",
    component: CONTAINER.ReferenceContainer
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReferenceRoutingModule {}

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CONTAINER } from "./containers";
import { ReferenceResolverGuard } from "./Guards/reference-resolver.guard";

const routes: Routes = [
  {
    path: "",
    component: CONTAINER.ReferenceContainer,
    resolve: { reference: ReferenceResolverGuard }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReferenceRoutingModule {}

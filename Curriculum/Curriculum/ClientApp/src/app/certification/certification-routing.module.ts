import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CONTAINER } from "./containers";
import { CertificationResolverGuard } from "./Guards/certification-resolver.guard";

const routes: Routes = [
  {
    path: "",
    component: CONTAINER.CertificationContainer,
    resolve: { reference: CertificationResolverGuard }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CertificationRoutingModule {}

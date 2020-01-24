import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CONTAINER } from "./containers";
import { CurriculumResolverGuard } from "./Guards/curriculum-resolver.guard";

const routes: Routes = [
  {
    path: "",
    component: CONTAINER.MainContainer,
    resolve: { reference: CurriculumResolverGuard }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurriculumRoutingModule {}

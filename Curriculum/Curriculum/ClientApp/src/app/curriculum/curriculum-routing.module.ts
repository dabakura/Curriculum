import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CONTAINER } from "./containers";
import { HomeResolverGuard } from "./Guards/home-resolver.guard";

const routes: Routes = [
  {
    path: "",
    component: CONTAINER.MainContainer,
    resolve: { reference: HomeResolverGuard }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurriculumRoutingModule {}

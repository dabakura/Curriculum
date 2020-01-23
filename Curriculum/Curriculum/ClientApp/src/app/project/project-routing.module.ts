import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CONTAINER } from "./containers";
import { ProjectResolverGuard } from "./Guards/project-resolver.guard";

const routes: Routes = [
  {
    path: "",
    component: CONTAINER.ProjectContainer,
    resolve: { reference: ProjectResolverGuard }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule {}

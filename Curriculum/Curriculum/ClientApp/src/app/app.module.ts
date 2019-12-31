import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { environment } from "src/environments/environment";

// ngrx imports
import { StoreModule, StoreRootModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreRouterConnectingModule, routerReducer } from "@ngrx/router-store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { reducers, metaReducers } from "./reducers";

// Component imports
import { AppComponent } from "./app.component";

// config imports
import { COMPONENTS } from "./components";
import { CONTAINERS, CONTAINER } from "./containers";
import { SERVICES } from "./services";
import { EFFECTS } from "./effects";

// declarations ngrx imports
const NGRX_IMPORTS = [
  StoreModule.forRoot(reducers, { metaReducers }),
  StoreRouterConnectingModule.forRoot({ stateKey: "router" }),
  EffectsModule.forRoot([...EFFECTS]),
  StoreDevtoolsModule.instrument({
    name: "AngularPortfolioNgRx",
    logOnly: environment.production,
    maxAge: 25
  })
];

@NgModule({
  declarations: [AppComponent, ...COMPONENTS, ...CONTAINERS],
  imports: [
    BrowserModule.withServerTransition({ appId: "ng-cli-universal" }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "", component: CONTAINER.MainContainer, pathMatch: "full" },
      { path: "projects", component: CONTAINER.ProjectContainer },
      { path: "certifications", component: CONTAINER.CertificationContainer },
      { path: "references", component: CONTAINER.ReferenceContainer }
    ]),
    ...NGRX_IMPORTS
  ],
  providers: [...SERVICES],
  bootstrap: [AppComponent]
})
export class AppModule {}

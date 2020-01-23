import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { environment } from "src/environments/environment";

import { AppRoutingModule } from "./app-routing.module";

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
import { RouterModule } from "@angular/router";

// declarations ngrx imports
const NGRX_IMPORTS = [
  StoreModule.forRoot(reducers, { metaReducers }),
  StoreRouterConnectingModule.forRoot({ stateKey: "router" }),
  EffectsModule.forRoot([]),
  StoreDevtoolsModule.instrument({
    name: "AngularPortfolioNgRx",
    logOnly: environment.production,
    maxAge: 25
  })
];

@NgModule({
  declarations: [AppComponent, ...COMPONENTS],
  imports: [
    BrowserModule.withServerTransition({ appId: "ng-cli-universal" }),
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ...NGRX_IMPORTS
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

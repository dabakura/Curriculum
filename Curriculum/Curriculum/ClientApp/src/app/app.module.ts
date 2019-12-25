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
import { PortfolioService } from "./services/portfolio.service";

// components imports
import { AppComponent } from "./app.component";
import { NavMenuComponent } from "./components/nav-menu/nav-menu.component";
import { CounterComponent } from "./counter/counter.component";
import { FetchDataComponent } from "./fetch-data/fetch-data.component";
import { HomeContainer } from "./containers/home/home.container";
import { ProjectContainer } from "./containers/project/project.container";

// config imports
import * as fromComponents from "./components";
import * as fromContainers from "./containers";
import * as fromReducers from "./reducers";
import * as fromServices from "./services";
import * as fromEffects from "./effects";
import * as fromGuards from "./guards";
import { PortfolioEffects } from "./effects/portfolio.effects";
/* import { CardItemComponent } from "./shared/components/card-item/card-item.component";
import { ItemsListComponent } from "./shared/components/items-list/items-list.component"; */

// declarations ngrx imports
const NGRX_IMPORTS = [
  StoreModule.forRoot(reducers, { metaReducers }),
  /* StoreModule.forFeature("app-module", fromReducers.reducers, {
    metaReducers: fromReducers.metaReducers
  }), */
  StoreRouterConnectingModule.forRoot({ stateKey: "router" }),
  EffectsModule.forRoot([...fromEffects.EFFECTS]),
  StoreDevtoolsModule.instrument({
    name: "AngularPortfolioNgRx",
    logOnly: environment.production
  })
];

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    CounterComponent,
    HomeContainer,
    ProjectContainer,
    FetchDataComponent,
    ...fromComponents.COMPONENTS,
    ...fromContainers.CONTAINERS
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "ng-cli-universal" }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "", component: HomeContainer, pathMatch: "full" },
      { path: "projects", component: ProjectContainer },
      { path: "counter", component: CounterComponent },
      { path: "fetch-data", component: FetchDataComponent }
    ]),
    ...NGRX_IMPORTS
  ],
  providers: [...fromServices.SERVICES],
  bootstrap: [AppComponent]
})
export class AppModule {}

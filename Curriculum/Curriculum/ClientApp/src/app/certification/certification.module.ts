import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CertificationRoutingModule } from "./certification-routing.module";

// ngrx imports
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { reducers, metaReducers } from "./reducers";

// config imports
import { COMPONENTS } from "./components";
import { CONTAINERS } from "./containers";
import { SERVICES } from "./services";
import { EFFECTS } from "./effects";

// declarations ngrx imports
const NGRX_IMPORTS = [
  StoreModule.forFeature("certification-module", reducers, {
    metaReducers: metaReducers
  }),
  EffectsModule.forFeature([...EFFECTS])
];

@NgModule({
  declarations: [...COMPONENTS, ...CONTAINERS],
  imports: [CommonModule, CertificationRoutingModule, ...NGRX_IMPORTS],
  providers: [...SERVICES]
})
export class CertificationModule {}

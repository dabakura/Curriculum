import { Job } from "./Job";

import { Personal } from "./Personal";

export interface Reference {
  Jobs: Job[];
  Personals: Personal[];
}

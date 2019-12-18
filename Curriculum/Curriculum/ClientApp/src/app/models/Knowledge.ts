import { Framework } from "./Framework";
import { Otro } from "./Otro";
import { Technologie } from "./Technologie";
import { ProgrammingLanguages } from "./ProgrammingLanguages";

export interface Knowledge {
  Frameworks: Framework[];
  Languages: Framework[];
  Otros: Otro[];
  Programming_Languages: ProgrammingLanguages[];
  Technologies: Technologie[];
}

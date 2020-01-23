import { Framework } from "./Framework";
import { Otro } from "./Otro";
import { Technologie } from "./Technologie";
import { ProgrammingLanguages } from "./ProgrammingLanguages";
import { Languages } from "./Languages";

export interface Knowledge {
  Frameworks: Framework[];
  Languages: Languages[];
  Otros: Otro[];
  Programming_Languages: ProgrammingLanguages[];
  Technologies: Technologie[];
}

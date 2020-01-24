import { ItemsListContainer } from "./items-list/items-list.container";
import { ItemsListCircularContainer } from "./items-list-circular/items-list-circular.container";
import { ItemsListCollectionContainer } from "./items-list-collection/items-list-collection.container";
import { MainContainer } from "./main/main.container";
import { CurriculumWebContainer } from "./curriculum-web/curriculum-web.container";
import { CurriculumMovilContainer } from "./curriculum-movil/curriculum-movil.container";

export const CONTAINERS = [
  ItemsListContainer,
  ItemsListCircularContainer,
  ItemsListCollectionContainer,
  CurriculumWebContainer,
  CurriculumMovilContainer,
  MainContainer
];

export const CONTAINER = {
  MainContainer: MainContainer
};

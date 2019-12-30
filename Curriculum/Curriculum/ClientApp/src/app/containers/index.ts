import { ItemsListContainer } from "./items-list/items-list.container";
import { ItemsListCircularContainer } from "./items-list-circular/items-list-circular.container";
import { ItemsListCollectionContainer } from "./items-list-collection/items-list-collection.container";
import { CertificationContainer } from "./certification/certification.container";
import { ProjectContainer } from "./project/project.container";
import { ReferenceContainer } from "./reference/reference.container";
import { MainContainer } from "./main/main.container";
import { HomeContainer } from "./home/home.container";
import { HomeMovilContainer } from "./home-movil/home-movil.container";

export const CONTAINERS = [
  ItemsListContainer,
  ItemsListCircularContainer,
  ItemsListCollectionContainer,
  CertificationContainer,
  ProjectContainer,
  ReferenceContainer,
  HomeContainer,
  HomeMovilContainer,
  MainContainer
];

export const CONTAINER = {
  MainContainer: MainContainer,
  ReferenceContainer: ReferenceContainer,
  ProjectContainer: ProjectContainer,
  CertificationContainer: CertificationContainer
};

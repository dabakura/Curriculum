import {
  Component,
  OnInit,
  assertPlatform,
  ViewChildren,
  QueryList,
  AfterViewInit,
  Inject,
  Input
} from "@angular/core";
import { CardItemComponent } from "../card-item/card-item.component";
import * as Colors from "./colors-itens.json";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: "app-items-list",
  templateUrl: "./items-list.component.html",
  styleUrls: ["./items-list.component.css"]
})
export class ItemsListComponent implements OnInit, AfterViewInit {
  public items: Framework[];
  public datos: Knowledge;
  public colors: Color[];
  private baseUrl: string;
  private http: HttpClient;
  @ViewChildren(CardItemComponent) cards: QueryList<CardItemComponent>;
  @Input() columns: number;

  constructor(http: HttpClient, @Inject("BASE_URL") baseUrl: string) {
    this.baseUrl = baseUrl;
    this.http = http;
  }

  ngAfterViewInit(): void {
    this.cards.changes.subscribe((cards: QueryList<CardItemComponent>) => {
      cards.forEach((card, index) => {
        const element = this.items[index];
        const color = this.getColor(index);
        card.contenido = element.Name;
        card.img = element.Image;
        card.percentage = (element.Level * 10).toString();
        card.percentagestring = element.Level * 10 + "%";
        card.indicador = color.indicador;
        card.sombra = color.sombra;
        card.fondo = color.fondo;
        card.updateColors();
      });
    });
  }
  ngOnInit() {
    this.http.get<Knowledge>(this.baseUrl + "Knowledge").subscribe(
      result => {
        this.items = result.Programming_Languages;
      },
      error => console.error(error)
    );
    //this.items = [
    //  {
    //    Name: "Python",
    //    Image: "",
    //    Level: 7
    //  },
    //  {
    //    Name: "Java",
    //    Image: "",
    //    Level: 7
    //  },
    //  {
    //    Name: "Php",
    //    Image: "",
    //    Level: 7
    //  },
    //  {
    //    Name: "Php",
    //    Image: "",
    //    Level: 7
    //  }
    //];
    this.colors = (Colors as any).default;
  }

  /**
   * getColor
   */
  public getColor(index: number) {
    while (index > this.colors.length - 1) {
      index -= this.colors.length;
    }
    return this.colors[index];
  }

  /**
   * getClass
   */
  public getClass() {
    switch (this.columns) {
      case 6:
        return "col s4 m3 l2 margen";
      case 4:
        return "col s4 m3 margen";
      case 3:
        return "col s4 margen";
      default:
        return "col s12 margen";
    }
  }
}
export interface Knowledge {
  Frameworks: Framework[];
  Languages: Framework[];
  Otros: Otro[];
  Programming_Languages: Framework[];
  Technologies: Technologie[];
}

export interface Framework {
  Name: string;
  Image: string;
  Level: number;
}

export interface Otro {
  Name: string;
  Description: string;
}

export interface Technologie {
  Name: string;
  List: string[];
}

export interface Color {
  indicador: string;
  sombra: string;
  fondo: string;
}

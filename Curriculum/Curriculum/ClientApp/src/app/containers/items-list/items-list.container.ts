import {
  Component,
  OnInit,
  ViewChildren,
  QueryList,
  AfterViewInit,
  Input
} from "@angular/core";
import { CardItemComponent } from "../../components/card-item/card-item.component";
import * as Colors from "../../../data/colors-items.json";
import { Framework, Color } from "../../models";
@Component({
  selector: "app-items-list",
  templateUrl: "./items-list.container.html",
  styleUrls: ["./items-list.container.css"]
})
export class ItemsListContainer implements OnInit, AfterViewInit {
  private colors: Color[];
  @Input() data: Framework[];
  @ViewChildren(CardItemComponent) cards: QueryList<CardItemComponent>;
  @Input() columns: number;

  ngAfterViewInit(): void {
    this.cards.changes.subscribe((cards: QueryList<CardItemComponent>) => {
      cards.forEach((card, index) => {
        const element = this.data[index];
        const color = this.getColor(index);
        card.contenido = element.Name;
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
        return "col s12";
    }
  }

  /**
   * getImg
   */
  public getImg(index: number) {
    return this.data[index].Imagen;
  }
}

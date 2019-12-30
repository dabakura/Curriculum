import {
  Component,
  OnInit,
  Input,
  ViewChildren,
  QueryList,
  AfterViewInit
} from "@angular/core";
import * as Colors from "../../../data/colors-items.json";
import { Framework, Color } from "../..//models";
import { CardItemCircularComponent } from "../../components/card-item-circular/card-item-circular.component";

@Component({
  selector: "app-items-list-circular",
  templateUrl: "./items-list-circular.container.html",
  styleUrls: ["./items-list-circular.container.css"]
})
export class ItemsListCircularContainer implements OnInit, AfterViewInit {
  private colors: Color[];
  @Input() data: Framework[];

  @Input() columns: number;
  @ViewChildren(CardItemCircularComponent) cards: QueryList<
    CardItemCircularComponent
  >;

  ngAfterViewInit(): void {
    this.cards.changes.subscribe(
      (cards: QueryList<CardItemCircularComponent>) => {
        cards.forEach((card, index) => {
          card.update(this.getData(index));
        });
      }
    );
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
  public getData(index: number) {
    return {
      shadow: this.getColor(index).indicador,
      background: this.getColor(index).indicador,
      percent: this.data[index].Level * 10,
      content: this.data[index].Name,
      img: this.data[index].Imagen
    };
  }
}

import {
  Component,
  OnInit,
  Renderer2,
  ViewChild,
  ElementRef,
  Input
} from "@angular/core";

@Component({
  selector: "app-card-item",
  templateUrl: "./card-item.component.html",
  styleUrls: ["./card-item.component.css"]
})
export class CardItemComponent implements OnInit {
  public indicador: string;
  public sombra: string;
  public fondo: string;
  public percentage: string;
  public percentagestring: string;
  public contenido: string;
  @ViewChild("progressindicator", { static: false }) progress: ElementRef;
  @Input() img: string;

  constructor(private renderer: Renderer2) {
    this.indicador = "";
    this.sombra = "";
    this.fondo = "";
    this.percentage = "";
    this.percentagestring = "";
    this.contenido = "";
  }

  ngOnInit(): void {}

  /**
   * updateColors
   */
  public updateColors() {
    this.renderer.setAttribute(
      this.progress.nativeElement,
      "style",
      `--contenido: "${this.contenido}";
       --fondo: ${this.fondo};
       --indicador: ${this.indicador};
       --sombra: ${this.sombra};
       --percentage: ${this.percentage};
       --percentagestring: "${this.percentagestring}";
      `
    );
  }
}

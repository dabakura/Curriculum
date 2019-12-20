import {
  Component,
  OnInit,
  Input,
  Renderer2,
  ViewChild,
  ElementRef,
  ViewContainerRef
} from "@angular/core";
import * as EasyPieChart from "../../../assets/js/easypiechart.min";
import { timer } from "rxjs";
declare var $: any;
@Component({
  selector: "app-card-item-circular",
  templateUrl: "./card-item-circular.component.html",
  styleUrls: ["./card-item-circular.component.css"]
})
export class CardItemCircularComponent implements OnInit {
  @ViewChild("progressindicator", { static: true }) progress: ElementRef;
  @ViewChild("super", { static: true }) div: ElementRef;
  @Input() data: ChartData;
  chart: EasyPieChart;
  status: Boolean;

  constructor() {}

  ngOnInit() {
    this.status = true;
  }

  private Chart(element, data) {
    return new EasyPieChart(element, {
      easing: "easeOutElastic",
      delay: 800,
      animate: {
        duration: 1000,
        enabled: true
      },
      barColor: data.background,
      trackColor: data.shadow,
      scaleColor: false,
      lineWidth: 7,
      trackWidth: 5,
      lineCap: "round",
      onStep: function(from, to, percent) {
        this.el.children[0].innerHTML = percent + "%";
      }
    });
  }

  public update(data: ChartData) {
    this.chart = this.Chart(this.progress.nativeElement, data).update(
      data.percent.toFixed()
    );
    const self = this;
    this.status = true;
    $(window).scroll(function() {
      const visiblecontent =
        self.div.nativeElement.offsetTop +
        self.div.nativeElement.clientHeight -
        ($(window).scrollTop() + $(window).height());
      if (visiblecontent > -60 && visiblecontent < 0 && self.status) {
        self.progress.nativeElement.innerHTML =
          '<span class="percent" style="position: absolute; width: 35px; max-width: 35px;"></span>';
        self.chart = self.Chart(self.progress.nativeElement, data);
        self.chart.update(data.percent.toFixed());
        const source = timer(6000);
        self.status = false;
        const subscribe = source.subscribe(val => (self.status = true));
      }
    });
  }
}

export interface ChartData {
  shadow: string;
  background: string;
  percent: Number;
  content: string;
  img: string;
}

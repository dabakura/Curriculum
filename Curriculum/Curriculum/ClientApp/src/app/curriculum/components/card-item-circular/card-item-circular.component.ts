import { Component, Input, ViewChild, ElementRef } from "@angular/core";
import * as EasyPieChart from "../../../../assets/js/easypiechart.min";
import { timer } from "rxjs";
import { ChartData } from "../models/ChartData";
declare var $: any;
@Component({
  selector: "curriculum-card-item-circular",
  templateUrl: "./card-item-circular.component.html",
  styleUrls: ["./card-item-circular.component.css"]
})
export class CardItemCircularComponent {
  @ViewChild("progressindicator", { static: true }) progress: ElementRef;
  @ViewChild("super", { static: true }) div: ElementRef;
  @Input() data: ChartData;
  chart: EasyPieChart;
  status: Boolean;

  constructor() {
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
      trackWidth: 3,
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
      if (visiblecontent > -1260 && visiblecontent < -900 && self.status) {
        self.progress.nativeElement.innerHTML = "";
        self.chart = self.Chart(self.progress.nativeElement, data);
        self.chart.update(data.percent.toFixed());
        const source = timer(6000);
        self.status = false;
        source.subscribe(val => (self.status = true));
      }
    });
  }
}

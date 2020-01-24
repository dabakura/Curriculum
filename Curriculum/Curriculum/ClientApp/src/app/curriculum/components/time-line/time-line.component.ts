import { Component, Input } from "@angular/core";

@Component({
  selector: "curriculum-time-line",
  templateUrl: "./time-line.component.html",
  styleUrls: ["./time-line.component.css"]
})
export class TimeLineComponent {
  @Input() data: string;
  /**
   * getdata
   */
  public getdata() {
    return this.data.split(",");
  }
}

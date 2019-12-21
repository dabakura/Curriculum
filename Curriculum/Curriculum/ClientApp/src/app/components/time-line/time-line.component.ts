import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-time-line",
  templateUrl: "./time-line.component.html",
  styleUrls: ["./time-line.component.css"]
})
export class TimeLineComponent implements OnInit {
  @Input() data: string;
  constructor() {}

  ngOnInit() {}

  /**
   * getdata
   */
  public getdata() {
    return this.data.split(",");
  }
}

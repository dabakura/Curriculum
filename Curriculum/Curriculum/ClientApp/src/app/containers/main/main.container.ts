import { Component, OnInit } from "@angular/core";
import { Observable, fromEvent } from "rxjs";
import { startWith, map } from "rxjs/operators";

@Component({
  selector: "app-main",
  templateUrl: "./main.container.html",
  styleUrls: ["./main.container.css"]
})
export class MainContainer implements OnInit {
  isMobile = false;
  getIsMobile(): boolean {
    const w = document.documentElement.clientWidth;
    const breakpoint = 960;
    return w < breakpoint;
  }

  ngOnInit() {
    this.isMobile = this.getIsMobile();
    window.onresize = () => {
      this.isMobile = this.getIsMobile();
    };
  }
}

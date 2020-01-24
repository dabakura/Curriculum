import { Component, Input } from "@angular/core";

@Component({
  selector: "project-video-item",
  templateUrl: "./video-item.component.html",
  styleUrls: ["./video-item.component.css"]
})
export class VideoItemComponent {
  @Input() video: string;
}

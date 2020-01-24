import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit
} from "@angular/core";

@Component({
  selector: "project-image-item",
  templateUrl: "./image-item.component.html",
  styleUrls: ["./image-item.component.css"]
})
export class ImageItemComponent implements AfterViewInit {
  @Input() images: string[];
  @ViewChild("carousel", { static: false }) carousel: ElementRef;

  ngAfterViewInit() {
    M.Carousel.init(this.carousel.nativeElement, {
      fullWidth: true,
      indicators: true
    });
  }
}

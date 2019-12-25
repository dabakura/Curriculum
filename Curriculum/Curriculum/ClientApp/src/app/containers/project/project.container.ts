import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-project",
  templateUrl: "./project.container.html",
  styleUrls: ["./project.container.css"]
})
export class ProjectContainer implements OnInit {
  images: string[];
  constructor() {
    this.images = [
      "java.png",
      "c.png",
      "python.png",
      "angular.png",
      "django.png"
    ];
  }

  ngOnInit() {}
}

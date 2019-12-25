import { Component, OnInit } from "@angular/core";
import { Built } from "../../components/models/build";

@Component({
  selector: "app-project",
  templateUrl: "./project.container.html",
  styleUrls: ["./project.container.css"]
})
export class ProjectContainer implements OnInit {
  images: string[];
  data: Built;
  constructor() {
    this.images = [
      "java.png",
      "c.png",
      "python.png",
      "angular.png",
      "django.png"
    ];
    this.data = {
      tipe: "Universitario",
      link: "http",
      git: "htto://localhost",
      list: ["angular", "redux", "javascript", "html5"]
    };
  }

  ngOnInit() {}
}

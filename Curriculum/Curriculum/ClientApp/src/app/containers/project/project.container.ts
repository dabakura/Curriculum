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
      Type: "Universitario",
      Link: "https://www.google.com",
      Github: "https://localhost",
      ListBuilt: [{ Name: "angular", Image: "angular.png" }]
    };
  }

  ngOnInit() {}
}

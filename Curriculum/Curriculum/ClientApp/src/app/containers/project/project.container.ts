import { Component, OnInit } from "@angular/core";
import { Project } from "src/app/models/Project";

@Component({
  selector: "app-project",
  templateUrl: "./project.container.html",
  styleUrls: ["./project.container.css"]
})
export class ProjectContainer implements OnInit {
  data: Project;
  constructor() {
    this.data = {
      Title: "Medical",
      Video: "big_buck_bunny.mp4",
      Images: [],
      Description:
        "Un micromundo es un ambiente de aprendizaje, basado en el lenguaje de programación Logo, en el cual se pueden construir proyectos para cualquier materia del currículo, incorporando gráficos, figuras animadas, texto, sonido y multimedia. Es una herramienta con fundamento pedagógico constructivista que simula el mundo real en un ordenador, permitiendo a los individuos tomar decisiones, analizar casos, cometer errores y dar soluciones a un problema determinado.De este modo se promueve la formulación y reformulación de sus modelos mentales y, en consecuencia, la representación de un conocimiento cada vez más cercano al objeto de estudio.",
      Creation_Date: "13/05/2018",
      OnlyImage: false,
      Built: {
        Type: "Universitario",
        Link: "https://www.google.com",
        Github: "",
        ListBuilt: [{ Name: "angular", Image: "angular.png" }]
      }
    };
  }

  ngOnInit() {}
}

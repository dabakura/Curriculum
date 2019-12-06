import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit{
    ngOnInit(): void {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems);
    }

    //isExpanded = false;

    //collapse() {
    //  this.isExpanded = false;
    //}

    //toggle() {
    //  this.isExpanded = !this.isExpanded;
    //}
}


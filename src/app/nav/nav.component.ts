import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styles: [`
  .nav.navbar-nav {font-size: 15px;}
  #searchForm {margin-right: 100px;}
  @media (max-width: 1200px) {#searchForm {display:none}},
  li > a.active { color: #F97924; }
  `]
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isActive = true;
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isActive = !this.isActive;
  }

}

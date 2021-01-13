import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  items: string[];

  constructor() {}

  ngOnInit() {
    this.items = Array(100).fill('item');
  }

  doRefresh(refresher: any) {
    setTimeout(() => refresher.target.complete(), 2000);
  }
}

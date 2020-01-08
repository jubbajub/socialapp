import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  // ViewChild läd fragment #tabs als erstes (zweite Option "true" muss ausgewählt werden)
  @ViewChild('tabs', {static: true}) tabs: IonTabs;
  constructor() { }

  ngOnInit() {
    // feed wird als erstes Tab geladen
    this.tabs.select('feed');
  }

}

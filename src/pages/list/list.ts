import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{id: string, title: string, note: string, icon: string}>;
  title: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzi,es
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.title = ['[2013]싱가포르','[2015]제주도','[2015]오사카','[2016]홍콩&마카오','[2017]부산','[2017]단양','[2018]하와이'];

    this.items = [];
    for (let i = 0; i < this.title.length; i++) {
      this.items.push({
        id: '#'+i,
        title: this.title[i],
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    // this.navCtrl.push(ListPage, {
    //   item: item
    // });
    this.storage.set('item',item);
    this.navCtrl.setRoot(DetailPage);
  }
}

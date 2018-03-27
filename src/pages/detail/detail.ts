import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import * as $ from 'jquery';

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {
    detailItem: any;

    constructor(public storage: Storage){
        storage.get('item').then((val)=> {
            console.log(val);
            this.detailItem = val.title+val.id;

            console.log('this.detailItem : '+this.detailItem.title);
        });

    }

    
}
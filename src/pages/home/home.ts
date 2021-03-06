import { Component } from '@angular/core';
import { NavController, Platform, ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public platform: Platform,
    public actionsheetCtrl: ActionSheetController) {

  }

  // openMenu() {
  //   let actionSheet = this.actionsheetCtrl.create({
  //     title: 'Albums',
  //     cssClass: 'action-sheets-basic-page',
  //     buttons: [
  //       {
  //         text: 'Delete',
  //         role: 'destructive',
  //         icon: !this.platform.is('ios') ? 'trash' : null,
  //         handler: () => {
  //           alert('Delete clicked');
  //         }
  //       },
  //       {
  //         text: 'Share',
  //         icon: !this.platform.is('ios') ? 'share' : null,
  //         handler: () => {
  //           alert('Share clicked');
  //         }
  //       },
  //       {
  //         text: 'Play',
  //         icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
  //         handler: () => {
  //           alert('Play clicked');
  //         }
  //       },
  //       {
  //         text: 'Favorite',
  //         icon: !this.platform.is('ios') ? 'heart-outline' : null,
  //         handler: () => {
  //           alert('Favorite clicked');
  //         }
  //       },
  //       {
  //         text: 'Cancel',
  //         role: 'cancel', // will always sort to be on the bottom
  //         icon: !this.platform.is('ios') ? 'close' : null,
  //         handler: () => {
  //           alert('Cancel clicked');
  //         }
  //       }
  //     ]
  //   });
  //   actionSheet.present();
  // }
}

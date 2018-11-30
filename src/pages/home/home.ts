import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FindCepPage } from '../find-cep/find-cep';
import { AutoFillPage } from '../auto-fill/auto-fill';
import { CepDetailPage } from '../cep-detail/cep-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openFindAddress() {
    this.navCtrl.push(FindCepPage);
  }
  openAutoFill() {
    this.navCtrl.push(AutoFillPage);
  }
  openFindCeps() {
    this.navCtrl.push(CepDetailPage);
  }
}

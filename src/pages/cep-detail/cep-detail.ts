import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CepsProvider } from '../../providers/ceps/ceps';

/**
 * Generated class for the CepDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cep-detail',
  templateUrl: 'cep-detail.html',
  providers: [
    CepsProvider
  ]
})
export class CepDetailPage {

  private txtLogradouro:string;
  private txtCidade:string;
  private txtUf:string;

  enderecos = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private cepsProvider: CepsProvider) {
  }

  ionViewDidLoad() { }

  listaEnderecos() {
    
    this.cepsProvider.findCep(this.txtUf, this.txtCidade, this.txtLogradouro).subscribe(
      data=>{
        const json = JSON.parse((data as any)._body);
        this.enderecos = json;
      }, error=>{
        console.log(error);
      }
    );
  }
}

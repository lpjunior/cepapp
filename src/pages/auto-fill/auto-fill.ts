import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CepsProvider } from '../../providers/ceps/ceps';

/**
 * Generated class for the AutoFillPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-auto-fill',
  templateUrl: 'auto-fill.html',
  providers: [
    CepsProvider
  ]
})
export class AutoFillPage {
  cep:string;
  logradouro:string;
  bairro:string;
  cidade:string;
  estado:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private cepsProvider: CepsProvider) {
  }

  ionViewDidLoad() {

  }

  autoPreenchimento() {
    if(this.cep.length == 8) {
      this.cepsProvider.findAddressByCep(this.cep).subscribe(
        data=>{
          const json = JSON.parse((data as any)._body);

          this.logradouro = json.logradouro;
          this.bairro = json.bairro;
          this.cidade = json.localidade;
          this.estado = json.uf;

        }, error=>{
          console.log(error);
        }
      );
    }
  }

}

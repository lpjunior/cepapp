import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CepsProvider } from '../../providers/ceps/ceps';
import { Keyboard } from '@ionic-native/keyboard';

/**
 * Generated class for the FindCepPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-find-cep',
  templateUrl: 'find-cep.html',
  providers: [
    CepsProvider,
    Keyboard
  ]
})
export class FindCepPage {
  cep:string;
  logradouro:string;
  bairro:string;
  cidade:string;
  estado:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private cepsProvider: CepsProvider, private keyboard: Keyboard) {
  }

  ionViewDidLoad() {
    this.keyboard.show();
  }

  buscaEndereco(){
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

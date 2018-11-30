import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CepDetailPage } from './cep-detail';

@NgModule({
  declarations: [
    CepDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(CepDetailPage),
  ],
})
export class CepDetailPageModule {}

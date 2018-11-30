import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FindCepPage } from './find-cep';

@NgModule({
  declarations: [
    FindCepPage,
  ],
  imports: [
    IonicPageModule.forChild(FindCepPage),
  ],
})
export class FindCepPageModule {}

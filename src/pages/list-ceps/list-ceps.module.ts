import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListCepsPage } from './list-ceps';

@NgModule({
  declarations: [
    ListCepsPage,
  ],
  imports: [
    IonicPageModule.forChild(ListCepsPage),
  ],
})
export class ListCepsPageModule {}

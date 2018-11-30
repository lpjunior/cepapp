import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { Keyboard } from '@ionic-native/keyboard';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CepsProvider } from '../providers/ceps/ceps';

import { HttpModule } from '@angular/http';

import { FindCepPageModule } from '../pages/find-cep/find-cep.module';
import { AutoFillPageModule } from '../pages/auto-fill/auto-fill.module';
import { CepDetailPageModule } from '../pages/cep-detail/cep-detail.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    FindCepPageModule,
    AutoFillPageModule,
    CepDetailPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CepsProvider,
    Keyboard
  ]
})
export class AppModule {}

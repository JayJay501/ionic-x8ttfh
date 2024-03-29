import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { PlayersPage } from '../pages/players/players';
import { TabsPage } from '../pages/tabs/tabs';

import { SQLite } from '@ionic-native/sqlite';
import { SQLitePorter } from '@ionic-native/sqlite-porter';
import { Toast } from '@ionic-native/toast';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    PlayersPage,
    TabsPage
  ],

  imports: [BrowserModule, IonicModule.forRoot(MyApp)],

  bootstrap: [IonicApp],

  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    PlayersPage,
    TabsPage
  ],

  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    SQLite, 
    SQLitePorter,
    Toast
  ]
})
export class AppModule {}

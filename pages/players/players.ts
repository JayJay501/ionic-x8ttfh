import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-players',
  templateUrl: 'players.html'
})
export class PlayersPage {
    id: number;
    player_name: string;
    player_note: number;

  constructor(public navCtrl: NavController) {}
}

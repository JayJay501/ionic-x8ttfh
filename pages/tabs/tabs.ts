import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { PlayersPage } from '../players/players';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = HomePage;
  tab2Root = PlayersPage;
  tab3Root  = AboutPage;

  constructor() {}
}

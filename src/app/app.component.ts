import { Component } from '@angular/core';
import { ResolveEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;

  lastUpdate = new Promise(
    (resolve, reject) => {
      const date = new Date();
      setTimeout(
        () => {
          resolve(date);
        }, 2000
      );
    }
  )

  appareils = [
    {
      name: 'machine à laver',
      status: 'allumé'
    },
     {
       name: 'Télévision',
       status: 'allumé'
     },
     {
       name: 'Machine à coudre',
       status: 'éteint'
     }
  ];

  constructor () {
    setTimeout(() => {
      this.isAuth = true;
    }, 4000
    );
  }
  onAllumer(){
    console.log('On allume tout!');
  }

}

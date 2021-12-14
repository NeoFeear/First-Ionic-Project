import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-film',
  templateUrl: './film.page.html',
  styleUrls: ['./film.page.scss'],
})
export class FilmPage implements OnInit {

  modif!: boolean;

  constructor(
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.modif = false;
  }

  async setModif() {
    if(!this.modif) {
      const alert = await this.alertCtrl.create({
        header: 'Modification',
        message: 'Voulez-vous modifier le film ?',
        buttons: [
          {
            text: 'Non',
            role: 'Cancel'
          },
          {
            text: 'Oui',
            handler: () => {
              this.modif = true;
            }
          }
        ]
      });
      await alert.present();
    } else {
      this.modif = false;
    }
  }

}

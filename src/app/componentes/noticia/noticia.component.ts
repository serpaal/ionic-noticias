import { Component, Input, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { ActionSheetController } from '@ionic/angular';
import { Article } from '../../interfaces/news';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {
  @Input() article: Article;
  @Input() i: number;
  constructor(private iab: InAppBrowser, private actionSheetController: ActionSheetController, private socialSharing: SocialSharing) { }

  ngOnInit() {}

  showArticle(article: Article) {
    this.iab.create(article.url.toString()).show();
  }

  async presentActionSheet(article:Article) {
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Compartir enlace',
        icon: 'share',
        handler: () => {
          this.socialSharing.share(
            article.title.toString(),
            article.source.name.toString(),
            null,
            article.url.toString()
          )
        }
      }, {
        text: 'Añadir a favoritos',
        icon:'star',
        handler: () => {
          //this.ionList.closeSlidingItems();
          console.log('añadir a favoritos');
          //this.delete(id);
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          
        }
      }]
    });
    await actionSheet.present();
  }
}

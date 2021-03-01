import { Component, Input, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Article } from '../../interfaces/news';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss'],
})
export class NoticiasComponent implements OnInit {
  @Input() articles: Article[];
  constructor(private iab: InAppBrowser) { }

  ngOnInit() {}

  showArticle(article: Article) {
    this.iab.create(article.url.toString()).show();
  }

}

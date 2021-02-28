import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { Article } from '../../interfaces/news';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page  implements OnInit {
  @ViewChild(IonSegment, {static: true}) segmento : IonSegment;
  categories: any[] = ["business", "entertainment", "general", "health", "science", "sports", "technology"];
  categorySelected: String = "business";
  articles: Article[];
  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.segmento.value = this.categories[0];
    let params = { category: this.categorySelected };
    this.getArticles(params);
  }

  segmentChanged(e){     
    this.categorySelected = e.detail.value;
   this.getArticles({ category: this.categorySelected });
  }

  getArticles(params){
    this.newsService.getArticles(params).subscribe(res => {
      this.articles = res.articles;
    })
  }

}

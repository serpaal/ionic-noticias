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
  articles: Article[] = [];
  page_number = 1;
  page_limit = 10;
  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.segmento.value = this.categories[0];    
    this.categorySelected = this.segmento.value;
    this.getArticles(null);
  }

  segmentChanged(e){     
    this.categorySelected = e.detail.value;
    this.articles = [];
    this.page_number = 1;
   this.getArticles(null);
  }

  

  getArticles(event?){
    let params = { country: "us", category: this.categorySelected, page: this.page_number, pageSize: this.page_limit };
    this.newsService.getArticles(params).subscribe(res => {
      this.articles.push(...res.articles);
      if (res.articles.length == 0){
        event.target.disabled = true;
        event.target.complete();
        return;
      }
      if(event)
        event.target.complete();
      this.page_number++;
    })
  }

  doInfinite(event) {
    this.getArticles(event);
  }

}

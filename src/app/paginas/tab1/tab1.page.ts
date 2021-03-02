import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Article } from '../../interfaces/news';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page  implements OnInit {
  articles: Article[] = [];
  page_number = 1;
  page_limit = 10;
  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.getArticles(null);
  }

  getArticles(event?){
    this.newsService.getArticles({country: "us", page: this.page_number, pageSize: this.page_limit}).subscribe(res => {
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

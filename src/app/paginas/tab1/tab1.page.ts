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
  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.newsService.getArticles({country: "us"}).subscribe(res => {
      this.articles = res.articles;
      console.log(this.articles);
    })
  }

}

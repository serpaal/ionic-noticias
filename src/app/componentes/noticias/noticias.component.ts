import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../interfaces/news';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss'],
})
export class NoticiasComponent implements OnInit {
  @Input() articles: Article[];
  constructor() { }

  ngOnInit() {}
 

}

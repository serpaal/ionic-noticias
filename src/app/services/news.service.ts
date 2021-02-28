import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article, News } from '../interfaces/news';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }
  getArticles(_params) {       
    const url = environment.apiUrl.concat(environment.endpoints["topHeadlines"]);
    let params = new HttpParams();
  
    for (let k of Object.keys(_params))
      params = params.append(k, _params[k]);
  
    params = params.append('apiKey', environment.apiKey);
    return this.http.get<News>(`${url}`, { params: params });
  }
}
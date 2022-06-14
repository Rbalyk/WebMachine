import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs";
import { HttpClient } from "@angular/common/http";
import { switchMap } from "rxjs/operators";
import {Navigation} from "../interfaces/navigation.interface";
import { Article } from "../interfaces/article.interface";

@Injectable({ providedIn: 'root' })
export class MainService {

  articlesState$: BehaviorSubject<Article[]> = new BehaviorSubject<Article[]>(null as any)

  constructor(private http: HttpClient) {}

  getTopics(): Observable<Navigation[]> {
    return this.http.get(`assets/database/navigation.json`).pipe(
      switchMap((navigation: any) => {
        return of(navigation);
      })
    )
  }

  getArticles(type: string): Observable<Article[]> {
    return this.http.get(`assets/database/${type}.json`).pipe(
      switchMap((articles: any) => {
        return of(articles);
      })
    )
  }

  getArticleById(type: string, id: string): Observable<Article> {
    return this.http.get(`assets/database/${type}/${id}.json`).pipe(
      switchMap((article: any) => {
        return of(article);
      })
    )
  }

}

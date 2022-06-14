import {Component, OnDestroy, OnInit} from "@angular/core";
import {Article} from "../../interfaces/article.interface";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {MainService} from "../../services/main.service";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})

export class ArticlesComponent implements OnInit, OnDestroy {

  articles: Article[] = [];

  constructor(private activeRoute: ActivatedRoute,
              private mainService: MainService) {}

  private subscription = new Subscription();

  ngOnInit(): void {
    this.initArticles();
  }

  private initArticles(): void {
    const activeRouteStream$ = this.activeRoute.queryParams.subscribe( (params) => {
      if(params.topic){
        this.mainService.getArticles(params.topic).subscribe( (articles) => {
          this.articles = articles;
        })
      }
    });
    this.subscription.add(activeRouteStream$)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}

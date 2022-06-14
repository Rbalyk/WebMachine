import {Component, OnInit} from "@angular/core";
import {Article} from "../../interfaces/article.interface";
import {ActivatedRoute} from "@angular/router";
import {MainService} from "../../services/main.service";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})

export class ArticleComponent implements OnInit {

  article: Article | undefined;

  constructor(private activeRoute: ActivatedRoute,
              private mainService: MainService) {
  }

  ngOnInit() {
    this.initArticle()
  }

  private initArticle(): void {
    const articleId = this.activeRoute.snapshot.params['id'];
    const articleType = this.activeRoute.snapshot.queryParams['topic'];
    this.mainService.getArticleById(articleType, articleId).subscribe( (article) => {
      this.article = article;
    })
    console.log()
  }

}

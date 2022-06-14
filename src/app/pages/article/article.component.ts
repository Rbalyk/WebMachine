import {Component, OnInit} from "@angular/core";
import {ArticleInterface} from "../../interfaces/article.interface";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})

export class ArticlesComponent implements OnInit {

  articles: ArticleInterface[] = [];

  ngOnInit() {
    // this.articles = JavascriptArticles.articles;
    // console.log('DashboardComponent')
  }

}

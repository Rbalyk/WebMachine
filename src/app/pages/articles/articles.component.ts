import {Component, OnInit} from "@angular/core";
import {ArticleInterface} from "../../interfaces/article.interface";
import JavascriptArticles from "../../classes/javascript";

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.scss']
})

export class JavascriptComponent implements OnInit {

  articles: ArticleInterface[] = [];

  ngOnInit() {
    this.articles = JavascriptArticles.articles;
    console.log('DashboardComponent')
  }

}

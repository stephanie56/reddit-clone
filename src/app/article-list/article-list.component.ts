import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
  providers: [ArticleService]
})
export class ArticleListComponent implements OnInit {

  articles: Article[];

  constructor(
    private articleService: ArticleService
  ) {}
  
  ngOnInit() {
    this.articles = this.articleService.getArticles();
  }

}

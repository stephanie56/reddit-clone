import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html'
})
export class ArticleComponent implements OnInit {

  @Input() article: Article;

  upvote(){
    this.article.voteUp();
  }

  downvote(){
    this.article.voteDown();
  }

  ngOnInit() {
  }

}
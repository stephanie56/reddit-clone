import { Component, Input } from '@angular/core';

class Article {
  public publishedAt: Date;
  constructor(
    public title: string,
    public description: string,
    public votes?: number,
    public imgUrl?: string
  ) { 
    this.votes = votes || 0;
    this.imgUrl = imgUrl || 'http://mrmrs.github.io/photos/warehouse.jpg';
    this.publishedAt = new Date();
  }

  public date(): Date {
    return new Date();
  }

  public voteUp(): void {
    this.votes += 1;
  }

  public voteDown(): void {
    this.votes -= 1;
  }
}

@Component ({
  selector: 'app-sidebar',
  template: `
    <div id="sidebar" class="fl w-25">
      Side bar will go here
    </div>
  `
})
export class SidebarComponent {}

@Component({
  selector: 'app-article',
  template: `
  <article class="bt bb b--black-10">
      <div class="flex items-center flex-column flex-row-ns">
        <div class="pr3-ns mb4 mb0-ns w-100 w-40-ns">
          <img [src]="article.imgUrl" class="db" alt="Photo of a dimly lit room with a computer interface terminal.">
        </div>
        <div class="w-100 w-40-ns pl3-ns">
          <h1 class="f3 fw1 baskerville mt0 lh-title">{{ article.title }}</h1>
          <a class="f6 link dim br3 ph3 pv2 mb2 dib white bg-green helvetica" href="#0"><i class="fa fa-heart pr3"></i>{{ article.votes }}</a>
          <span class="fr">
            <a (click)="upvote()" class="f6 near-black link dim br3 ph3 pv2 mb2 dib bg-light-gray helvetica mr1" href="#0"><i class="fa fa-arrow-up pr1"></i>Upvote</a>
            <a (click)="downvote()" class="f6 near-black link dim br3 ph3 pv2 mb2 dib bg-light-gray helvetica" href="#0"><i class="fa fa-arrow-down pr1"></i>Downvote</a>
          </span>
          <p class="f6 lh-copy mv0 silver helvetica">{{ article.publishedAt | date:'medium' }}</p>
          <p class="f6 f5-l lh-copy">{{ article.description }}</p>
          <a class="f5 link br2 ph3 pv2 mb2 dib white bg-dark-blue helvetica" href="#0">Read More<i class="fa fa-angle-double-right pl1"></i></a>
        </div>
      </div>
  </article>
  `
})
export class ArticleComponent {
  @Input() article: Article;

  upvote(){
    this.article.voteUp();
  }

  downvote(){
    this.article.voteDown();
  }
}

@Component({
  selector: 'app-root',
  template: `
    <div id="container">
      <app-sidebar></app-sidebar>
      <div id="content" class="fl w-75">
        <app-article
          *ngFor="let article of articles"
          [article]="article"
        ></app-article>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  articles: Article[];

  constructor() {
    this.articles = [
      new Article(
        'Trust, but Verify — Coerce Your Component Inputs',
        'In this article, I’d like to talk about the @angular/cdk/coercion package.',
        5,
        'http://mrmrs.github.io/photos/warehouse.jpg'
      ), 
      new Article(
        'Wait for Observable created from looping inside an Observable of type array?',
        'I use map to iterate through each Object and create another observable that will fetch something given an id in Object.',
        1,
        'http://mrmrs.github.io/photos/cpu.jpg'
      ), 
      new Article(
        'Trust, but Verify — Coerce Your Component Inputs',
        'I am working on a simple proof of concept application in which I have a working component which calls a web service then renders a list of items.',
        12,
        'http://mrmrs.github.io/photos/whale.jpg'
      ),
    ]}
}
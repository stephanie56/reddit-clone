import { Component, Input } from '@angular/core';

class Article {
  constructor(
    public title: string,
    public description: string,
    public votes?: number
  ) { 
    this.votes = votes || 0;
  }

  public date(): Date {
    return new Date();
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
      <div class="flex flex-column flex-row-ns">
        <div class="pr3-ns mb4 mb0-ns w-100 w-40-ns">
          <img src="http://mrmrs.github.io/photos/cpu.jpg" class="db" alt="Photo of a dimly lit room with a computer interface terminal.">
        </div>
        <div class="w-100 w-40-ns pl3-ns">
          <h1 class="f3 fw1 baskerville mt0 lh-title">{{ article.title }}</h1>
          <a class="f6 link dim br3 ph3 pv2 mb2 dib white bg-green helvetica" href="#0"><i class="fa fa-heart pr3"></i>{{ article.votes }}</a>
          <span class="fr">
            <a class="f6 silver link dim br3 ph3 pv2 mb2 dib bg-light-gray helvetica mr1" href="#0"><i class="fa fa-arrow-up pr1"></i>Upvote</a>
            <a class="f6 silver link dim br3 ph3 pv2 mb2 dib bg-light-gray helvetica" href="#0"><i class="fa fa-arrow-down pr1"></i>Downvote</a>
          </span>
          <p class="f6 lh-copy mv0 silver helvetica">{{ article.date() | date:'medium' }}</p>
          <p class="f6 f5-l lh-copy">{{ article.description }}</p>
          <a class="f5 link br2 ph3 pv2 mb2 dib white bg-dark-blue helvetica" href="#0">Read More<i class="fa fa-angle-double-right pl1"></i></a>
        </div>
      </div>
  </article>
  `
})
export class ArticleComponent {
  @Input() article: Article;
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
        5
      ), 
      new Article(
        'Wait for Observable created from looping inside an Observable of type array?',
        'I use map to iterate through each Object and create another observable that will fetch something given an id in Object.'
      ), 
      new Article(
        'Trust, but Verify — Coerce Your Component Inputs',
        'I am working on a simple proof of concept application in which I have a working component which calls a web service then renders a list of items.'
      ),
    ]}
}
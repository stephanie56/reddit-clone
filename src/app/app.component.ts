import { Component, Input } from '@angular/core';

class Article {
  constructor(
    public title: string,
    public description: string
  ) { }
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
  <article class="pv4 bt bb b--black-10 ph3 ph0-l">
    <div class="w-100 w-60-ns pr3-ns order-2 order-1-ns">
      <h1 class="f3 athelas mt0 lh-title">{{ article.title }}</h1>
      <p class="f5 f4-l lh-copy athelas">{{ article.description }}</p>
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
        'In this article, I’d like to talk about the @angular/cdk/coercion package.'
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
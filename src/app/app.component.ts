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
  <article class="bt bb b--black-10">
      <div class="flex flex-column flex-row-ns">
        <div class="pr3-ns mb4 mb0-ns w-100 w-40-ns">
          <img src="http://mrmrs.github.io/photos/cpu.jpg" class="db" alt="Photo of a dimly lit room with a computer interface terminal.">
        </div>
        <div class="w-100 w-60-ns pl3-ns">
          <h1 class="f3 fw1 baskerville mt0 lh-title">{{ article.title }}</h1>
          <p class="f6 lh-copy mv0 silver">Votings go here</p>
          <p class="f6 lh-copy mv0 silver">Today</p>
          <p class="f6 f5-l lh-copy">{{ article.description }}</p>
          <a class="f6 link br2 ph3 pv2 mb2 dib white bg-dark-blue" href="#0">Read More</a>
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
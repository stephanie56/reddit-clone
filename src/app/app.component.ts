import { Component, Input } from '@angular/core';

@Component ({
  selector: 'app-sidebar',
  template: `
    <div id="sidebar">
      Side bar will go here
    </div>
  `
})
export class SidebarComponent {}

@Component({
  selector: 'app-article',
  template: `
    <div>
      <h2>{{ article.title }}</h2>
      <div>{{ article.description }}</div>
    </div>
  `
})
export class ArticleComponent {
  @Input() article: Object;
}

@Component({
  selector: 'app-root',
  template: `
    <div id="container">
      <app-sidebar></app-sidebar>
      <div id="content">
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
  articles: Object[];

  constructor() {
    this.articles = [{
      title: 'Trust, but Verify — Coerce Your Component Inputs',
      description: 'In this article, I’d like to talk about the @angular/cdk/coercion package.'
    },
    {
      title: 'Wait for Observable created from looping inside an Observable of type array?',
      description: 'I use map to iterate through each Object and create another observable that will fetch something given an id in Object.'
    },
    {
      title: 'How do I replace a list with an edit form without reloading the page?',
      description: 'I am working on a simple proof of concept application in which I have a working component which calls a web service then renders a list of items. '
    }
  ]}
}
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Article } from './article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(
    private http: Http
  ) { }

  public getArticles() {
    return [
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
    ];
  }
}
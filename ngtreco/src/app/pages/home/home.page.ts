import { Component, OnInit } from '@angular/core';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public env = environment;
  articles: any;

  constructor(private http: HttpClient) {
    this.getArticles();
  }

  ngOnInit() {}
  getArticles() {
    this.http.get(environment.apiURL + '/artigos')
      .subscribe((response) => {
      this.articles = response;
      console.log(response);

    }
      )
  }



}

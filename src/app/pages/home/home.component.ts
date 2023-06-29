import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  articles: any;
  articlesView: any;
  env = environment;

  constructor(private http: HttpClient) {
    this.getAllArticles();
    this.getMostViewed(5);
   }

  getAllArticles() {
    console.log('foi');
    this.http.get(`${this.env.apiBaseURL}/artigos`)
      .subscribe((response) => {
        console.log(response);
        this.articles = response;
      },
        (error) => {
          console.log(error);
        }
      )


  }
  getMostViewed(limit: number) {
    console.log('foi');
    this.http.get(`${this.env.apiBaseURL}/artigos/views/${limit}`)
      .subscribe((response1) => {
        console.log(response1);
        this.articlesView = response1;
      },
        (error) => {
          console.log(error);
        }
      )


  }
}

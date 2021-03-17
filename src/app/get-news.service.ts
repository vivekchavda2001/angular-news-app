import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetNewsService {
  private REST_API_SERVER = "https://saurav.tech/NewsAPI/top-headlines/category/";
  constructor(private httpClient: HttpClient) {  }
  public getNews(cat:String,country:String){
    return this.httpClient.get(this.REST_API_SERVER+cat+"/"+country+".json");
  }

}

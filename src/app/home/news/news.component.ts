import { Component, Input, OnInit } from '@angular/core';
import { GetNewsService } from '../../get-news.service';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  data:any=[];
  name="vivek";
  p:number=1;
  cat:String = "general";
  @Input() ctgry:any;
  @Input() country:any;
  constructor(private getNews: GetNewsService) { }

  ngOnInit(): void {
    this.getNews.getNews(this.ctgry,this.country).subscribe((response)=>{
      this.data  = response;
      this.data = this.data.articles;
     
  })
  }
  ngOnChanges(): void {
    this.getNews.getNews(this.ctgry,this.country).subscribe((response)=>{
      this.data  = response;
      this.data = this.data.articles;
  })
}
  getArticles(cat:String){
    this.getNews.getNews(this.ctgry,this.country).subscribe((response)=>{
      this.data  = response;
      this.data = this.data.articles;
      
      
  })
}
}

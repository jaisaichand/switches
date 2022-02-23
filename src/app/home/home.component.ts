import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  parentTriggered(event){
    console.log(event);
    this.postsData.forEach((dat:any)=>{
      if(dat.content==event.content){
        dat.liked = event.liked;
      }
    })
    
  }

  clicked="";

  postsData=[{content:"content1",liked:false},{content:"corfg werg",liked:true},{content:"osos apiudfh ",liked:false},{content:"bhagi piuhf ",liked:true},{content:"jai dhf",liked:false}];

}

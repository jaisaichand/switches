import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor() { }

  coloroflike;

  ngOnInit(): void {
    console.log(this.postcontent);
    
  }

  @Input() postcontent;
  @Output() sendparent = new EventEmitter();

  sendParent(){
    this.sendparent.emit({liked:!this.postcontent.liked,content:this.postcontent.content});
  }

}

import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-compthree',
  templateUrl: './compthree.component.html',
  styleUrls: ['./compthree.component.css']
})
export class CompthreeComponent implements OnInit {

  constructor(public service:MainService) { }
  gun:String ;


  controls={iscomponeOn:false,iscomptwoOn:false};

  toggleOne(){
    
    this.service.subj.next({comp:"compone",value:!this.controls.iscomponeOn});
  }
  toggleTwo(){
    this.service.subj.next({comp:"comptwo",value:!this.controls.iscomptwoOn});
  }

  ngOnInit(): void {
    this.service.subj.subscribe((data:any)=>{
      if(data.comp=="compone"){
        this.controls.iscomponeOn= data.value;
      }else{
        this.controls.iscomptwoOn= data.value;
      }
    })
  }

}

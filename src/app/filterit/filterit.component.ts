import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filterit',
  templateUrl: './filterit.component.html',
  styleUrls: ['./filterit.component.css']
})
export class FilteritComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  searchText="";
  realData=[{id:1,name:"#jaisaichand"},{id:2,name:"#Spiderman"},{id:3,name:"#tarakechuthepikachu"},{id:4,name:"#saikiran"},{id:5,name:"#suskiran"},{id:6,name:"#samantha"}];
  fitlteredFinalArray=[];

  

  filterData(eve){
    console.log(eve);
    this.searchText = eve.target.value;
    console.log(eve.target.value);
    console.log(this.searchText);    
    if(eve.code=="Digit3"){
      
      this.fitlteredFinalArray = this.realData;
      return;
    }
    
    console.log(this.searchText);
    
    if(this.searchText==""){
      this.fitlteredFinalArray = [];
    }else{
      this.fitlteredFinalArray = this.realData.filter((val)=>{
        
        
        return val.name.includes(this.searchText);
      })
    }
  }

  placeholderText="Write something";

}

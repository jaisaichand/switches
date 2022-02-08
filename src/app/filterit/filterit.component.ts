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
  realData=[{id:1,name:"#jaisaichand"},{id:2,name:"#Spiderman"},{id:3,name:"#tarakechuthepikachu"},{id:4,name:"#saikiran"}];
  fitlteredFinalArray=this.realData;


  filterData(eve){
    console.log(eve);
    if(eve.code=="Backspace"){
      this.searchText="";
      this.fitlteredFinalArray = this.realData;
    }
    
    console.log(this.searchText);
    
    if(this.searchText==""){
      this.fitlteredFinalArray = this.realData;
    }else{
      this.fitlteredFinalArray = this.realData.filter((val)=>{
        console.log(val);
        return val.name.includes(this.searchText);
      })
    }
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  
  Like:boolean=false;
  OnClik(){
    this.Like=!this.Like;
  }
}

import { Component } from '@angular/core';
interface Product { name:string; weight:string; image:string; description:string; }
@Component({selector:'app-products',standalone:true,templateUrl:'./products.component.html',styleUrl:'./products.component.scss'})
export class ProductsComponent {
 readonly products:Product[]=[
  {name:'RAGYA ATTA',weight:'5 KG',image:'/atta-5kg.png',description:'Perfect pack for small families.'},
  {name:'RAGYA ATTA',weight:'10 KG',image:'/atta-10kg.png',description:'Ideal for big families and regular use.'},
 ];
 selectedProduct:Product|null=null;
 viewDetails(product:Product){this.selectedProduct=product;}
 closeDetails(){this.selectedProduct=null;}
}

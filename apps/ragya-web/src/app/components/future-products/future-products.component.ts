import { Component } from '@angular/core';
interface FutureProduct { title:string; image:string; icon:string; description:string; }
@Component({selector:'app-future-products',standalone:true,templateUrl:'./future-products.component.html',styleUrl:'./future-products.component.scss'})
export class FutureProductsComponent {
 readonly products:FutureProduct[]=[
  {title:'RAGYA DAL',image:'/dal.png',icon:'🌱',description:'Premium quality dal made from carefully selected grains for a healthy family.'},
  {title:'RAGYA RED CHILLI',image:'/mirchi.png',icon:'🌶',description:'Pure red chilli powder with rich colour, pure flavour and authentic taste.'}
 ];
}

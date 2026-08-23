import { Component } from '@angular/core';
interface Feature { icon:string; title:string; description:string; }
@Component({selector:'app-features',standalone:true,templateUrl:'./features.component.html',styleUrl:'./features.component.scss'})
export class FeaturesComponent {
 readonly features:Feature[]=[
  {icon:'🌾',title:'Finest Wheat',description:'Carefully selected premium quality wheat.'},
  {icon:'🍃',title:'Pure & Natural',description:'No maida. No additives. 100% natural goodness.'},
  {icon:'♥',title:'Healthy Choice',description:'Rich in nutrition, perfect for your family.'},
  {icon:'✓',title:'Trusted Quality',description:'Hygienically processed and quality checked.'},
  {icon:'👨‍👩‍👧',title:'Loved by Families',description:'Made for every Indian kitchen with love.'},
 ];
}

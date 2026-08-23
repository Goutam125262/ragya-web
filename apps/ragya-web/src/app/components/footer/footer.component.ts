import { Component } from '@angular/core';
interface LinkItem {label:string;target:string;}
@Component({selector:'app-footer',standalone:true,templateUrl:'./footer.component.html',styleUrl:'./footer.component.scss'})
export class FooterComponent {
 readonly quickLinks:LinkItem[]=[
  {label:'Home',target:'home'},{label:'About Us',target:'about'},{label:'Our Products',target:'products'},
  {label:'Future Products',target:'future'},{label:'Quality',target:'quality'},{label:'Contact Us',target:'contact'}
 ];
 scrollTo(target:string){document.getElementById(target)?.scrollIntoView({behavior:'smooth'});}
}

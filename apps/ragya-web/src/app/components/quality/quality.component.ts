import { Component } from '@angular/core';
interface Step { icon:string; title:string; }
@Component({selector:'app-quality',standalone:true,templateUrl:'./quality.component.html',styleUrl:'./quality.component.scss'})
export class QualityComponent {
 readonly steps:Step[]=[
  {icon:'🌾',title:'Carefully Selected Wheat'},{icon:'🏭',title:'Hygienic Processing'},
  {icon:'✓',title:'Quality Checked'},{icon:'📦',title:'Freshly Packed for You'},
  {icon:'♥',title:'Brings Smiles to Your Home'}
 ];
}

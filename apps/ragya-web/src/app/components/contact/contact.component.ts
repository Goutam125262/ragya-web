import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({selector:'app-contact',standalone:true,imports:[FormsModule],templateUrl:'./contact.component.html',styleUrl:'./contact.component.scss'})
export class ContactComponent {
 submitted=false;
 submit(form:NgForm):void{
  if(form.invalid){Object.values(form.controls).forEach(c=>c.markAsTouched());return;}
  const {name,email,subject,message}=form.value;
  const s=encodeURIComponent(subject||`Website enquiry from ${name}`);
  const b=encodeURIComponent(`Name: ${name}
Email: ${email}

${message}`);
  window.location.href=`mailto:a1spicegreens@gmail.com?subject=${s}&body=${b}`;
  this.submitted=true; form.resetForm();
 }
}

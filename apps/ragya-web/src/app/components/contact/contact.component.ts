import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  formData: ContactFormData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  submitted = false;
  sending = false;
  successMessage = '';
  errorMessage = '';

  async submit(form: NgForm): Promise<void> {
    this.submitted = true;

    if (form.invalid) {
      return;
    }

    this.sending = true;
    this.successMessage = '';
    this.errorMessage = '';

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.formData)
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error('Email could not be sent');
      }

      this.successMessage = 'Your message has been sent successfully!';

      form.resetForm();

      this.formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };

      this.submitted = false;

    } catch (error) {
      console.error('Email error:', error);
      this.errorMessage =
        'Something went wrong. Please try again later.';
    } finally {
      this.sending = false;
    }
  }
}

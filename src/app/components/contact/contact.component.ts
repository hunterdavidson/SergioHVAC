import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: '',
  };
  isSubmitted: boolean = false;

  onSubmit(contactForm: any): void {
    if (contactForm.valid) {
      this.isSubmitted = true;

      this.formData = {
        name: '',
        email: '',
        message: '',
      };
    }
  }
}

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  linkTo: string = '';
  linkName: string = 'Send message';
  isSending: boolean = false;
  submitted: boolean = false;
  sends: boolean = false;


  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required, Validators.minLength(10)])
  });


  async sendMail() {
    this.submitted = true;
    this.checkAndDisableContactForm();
    this.isSending = true;
    let formData = new FormData();
    this.setFormData(formData);
    await fetch('https://www.oliver-jung.dev/send_mail.php', {
      method: 'POST',
      body: formData
    });
    this.isSending = false;
    this.submitted = false;
    this.sendsMessage();
    this.resetContactForm();
  }


  checkAndDisableContactForm() {
    if (this.contactForm.invalid) {
      return;
    }
    this.contactForm.disable();
  }


  setFormData(formData: FormData) {
    const name = this.contactForm.get('name')?.value;
    const email = this.contactForm.get('email')?.value;
    const message = this.contactForm.get('message')?.value;
    

    if (name && email && message) {
      formData.append('name', name);
      formData.append('email', email);
      formData.append('message', message);
    }
  }


  sendsMessage() {
    this.sends = true;
    setTimeout(() => {
      this.sends = false;
    }, 3000);
  }


  resetContactForm() {
    this.contactForm.reset();
    this.contactForm.enable();
  }


  scrollToTop() {
    window.scrollTo(0, 0);
  }
}

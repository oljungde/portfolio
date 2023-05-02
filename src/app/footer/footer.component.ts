import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  linkTo: string = '';
  linkName: string = 'Send message';
  // @ViewChild('contact_form') contactForm!: ElementRef;
  // @ViewChild('input_name') inputName!: ElementRef;
  // @ViewChild('input_email') inputEmail!: ElementRef;
  // @ViewChild('input_message') inputMessage!: ElementRef;
  // @ViewChild('btn_send') btnSend!: ElementRef;
  // inputNameEle!: HTMLInputElement;
  // inputEmailEle!: HTMLInputElement;
  // inputMessageEle!: HTMLInputElement;
  // btnSendEle!: HTMLInputElement;
  isSending: boolean = false;
  submitted: boolean = false;


  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required, Validators.minLength(10)])
  });


  ngAfterViewInit() {
    // this.inputNameEle = this.inputName.nativeElement;
    // this.inputEmailEle = this.inputEmail.nativeElement;
    // this.inputMessageEle = this.inputMessage.nativeElement;
    // this.btnSendEle = this.btnSend.nativeElement; 
  }


//   onFocus(event: FocusEvent) {
//   const target = event.target as HTMLInputElement;
//   const placeholder = target.nextElementSibling as HTMLElement;
//   if (placeholder) {
//     placeholder.classList.add("focus");
//   }
// }

// onBlur(event: FocusEvent) {
//   const target = event.target as HTMLInputElement;
//   const placeholder = target.nextElementSibling as HTMLElement;
//   if (placeholder && !target.value) {
//     placeholder.classList.remove("focus");
//   }
// }
  
// checkInputValue(control: AbstractControl | null): boolean {
//   if (control) {
//     return control.value;
//   }
//   return false;
// }


  async sendMail() {
    this.submitted = true;
    if (this.contactForm.invalid) {
      return;
    }
    
    console.log('sending mail', this.contactForm);
    this.disableContactForm();
// debugger;
    this.isSending = true;
    // debugger;
    // Animation send E-Mail
    let formData = new FormData();
    this.setFormData(formData);
    // senden
    await fetch('https://www.oliver-jung.dev/send_mail.php', {
      method: 'POST',
      body: formData
    });

    this.isSending = false;
    this.submitted = false;
    // Text Nachricht gesendetEle
    this.clearContactForm();
    this.enableContactForm();
  }


  disableContactForm() {
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


  clearContactForm() {
    this.contactForm.reset();
  }


  enableContactForm() {
    this.contactForm.enable();
  }
}

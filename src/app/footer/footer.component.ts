import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  linkTo: string = '';
  linkName: string = 'Send message';
  @ViewChild('contact_form') contactForm!: ElementRef;
  @ViewChild('input_name') inputName!: ElementRef;
  @ViewChild('input_email') inputEmail!: ElementRef;
  @ViewChild('input_message') inputMessage!: ElementRef;
  @ViewChild('btn_send') btnSend!: ElementRef;
  inputNameEle!: HTMLInputElement;
  inputEmailEle!: HTMLInputElement;
  inputMessageEle!: HTMLInputElement;
  btnSendEle!: HTMLInputElement; 

  ngAfterViewInit() {
    this.inputNameEle = this.inputName.nativeElement;
    this.inputEmailEle = this.inputEmail.nativeElement;
    this.inputMessageEle = this.inputMessage.nativeElement;
    this.btnSendEle = this.btnSend.nativeElement; 
  }

  async sendMail() {
    console.log('sending mail', this.contactForm);
    this.disableContactForm();
    // Animation send E-Mail
    let formData = new FormData();
    this.setFormData(formData);
    // senden
    await fetch('https://www.oliver-jung.dev/send_mail.php', {
      method: 'POST',
      body: formData
    });
    // Text Nachricht gesendetEle
    this.clearContactForm();
    this.enableContactForm();
  }

  disableContactForm() {
    this.inputNameEle.disabled = true;
    this.inputEmailEle.disabled = true;
    this.inputMessageEle.disabled = true;
    this.btnSendEle.disabled = true;
  }

  setFormData(formData: FormData) {
    formData.append('name', this.inputNameEle.value);
    formData.append('email', this.inputEmailEle.value);
    formData.append('message', this.inputMessageEle.value);
  }

  clearContactForm() {
    this.inputNameEle.value = '';
    this.inputEmailEle.value = '';
    this.inputMessageEle.value = '';
  }

  enableContactForm() {
    this.inputNameEle.disabled = false;
    this.inputEmailEle.disabled = false;
    this.inputMessageEle.disabled = false;
    this.btnSendEle.disabled = false;
  }
}

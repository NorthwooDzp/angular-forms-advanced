import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UserInfo } from '../../../models';

@Component({
  selector: 'app-template-forms-page',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './template-forms-page.component.html',
  styleUrls: ['../../common-page.scss', '../../common-form.scss', './template-forms-page.component.scss'],
})
export class TemplateFormsPageComponent {
  public userInfo: UserInfo = {
    firstName: 'Volodymyr',
    lastName: '',
    nickname: '',
    email: '',
    yearOfBirth: 0,
    passport: '',
    fullAddress: '',
    city: '',
    postCode: 0,
  };

  public get years() {
    const now = new Date().getUTCFullYear();
    return Array(now - (now - 40))
      .fill('')
      .map((_, idx) => now - idx);
  }

  public onSubmitForm(form: NgForm, event: SubmitEvent): void {
    console.log('The form has been submitted', form.value);
    console.log('The native submit event', event);
    form.resetForm();
  }
}

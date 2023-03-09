import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ShareModule } from '../core/share/share.module';


@NgModule({
  declarations: [
    ContactFormComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    ShareModule
  ]
})
export class ContactModule { }

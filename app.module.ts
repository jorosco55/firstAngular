import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { SkillsComponent } from './skills/skills.component';

import { SkillsService} from './service/skills.service';
import { GreetingComponent } from './greeting/greeting.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactsComponent } from './contacts/contacts.component';

import { ContactsService} from './services/contacts.service';
import { PhoneBookComponent } from './phone-book/phone-book.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    GreetingComponent,
    ContactFormComponent,
    ContactsComponent,
    PhoneBookComponent,
],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [SkillsService, ContactsService ],
  bootstrap: [AppComponent]
})

export class AppModule { }

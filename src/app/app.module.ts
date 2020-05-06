import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { from } from 'rxjs';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PostsComponent } from './posts/posts.component';
import { HttpModule } from '@angular/http';



@NgModule({
  declarations: [
    AppComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    ChangePasswordComponent,
    PostsComponent

  ],
  imports: [
  BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

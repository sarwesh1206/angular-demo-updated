import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router'
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
import { PostService } from './post.service';
import { AppErrorHandler } from './common/app-error-handler';
import { ErrorHandler } from '@angular/core';
import { DataService } from './service/data.service';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
// import { DataServiceService } from './data-service.service';



@NgModule({
  declarations: [
    AppComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    ChangePasswordComponent,
    PostsComponent,
    GithubFollowersComponent,
    NavbarComponent

  ],
  imports: [
  BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: '',component: HomeComponent},
      {path: 'followers/:username',component:GithubFollowersComponent},
      {path: 'followers',component:GithubFollowersComponent},
      {path: 'posts',component:PostsComponent},
      {path: '**',component:NotFoundComponent},
    ])
  ],
  providers: [PostService,GithubFollowersComponent,
    { provide: ErrorHandler,useClass: AppErrorHandler}],
  bootstrap: [AppComponent]
})
export class AppModule { }

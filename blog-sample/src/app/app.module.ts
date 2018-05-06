import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PostComponent } from './post/post.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { FootComponent } from './component/foot/foot.component';
import { BannerComponent } from './component/banner/banner.component';
import { FormComponent } from './component/form/form.component';
import { MarkDownService } from './service/mark-down/mark-down.service';
import { PostService } from './service/post/post.service';
import { UserService } from './service/user/user.service';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { CommonErrorHandler } from './error/common-error-handler';
import { TokenInterceptor } from './interceptor/token.interceptor';
import { AuthService } from './service/auth/auth.service';
import { LoginService } from './service/http/login.service';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    AboutComponent,
    PostComponent,
    NavBarComponent,
    FootComponent,
    BannerComponent,
    FormComponent,
    ProfileComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    MarkDownService,
    PostService,
    UserService,
    AuthService,
    LoginService,
    {provide: ErrorHandler, useClass: CommonErrorHandler},
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

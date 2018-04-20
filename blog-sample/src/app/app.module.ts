import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PostComponent } from './post/post.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { FootComponent } from './component/foot/foot.component';
import { BannerComponent } from './component/banner/banner.component';
import { MarkDownService } from './service/mark-down/mark-down.service';
import { FormComponent } from './component/form/form.component';
import { PostService } from './service/post/post.service';
import { ProfileComponent } from './profile/profile.component';


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
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    MarkDownService,
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

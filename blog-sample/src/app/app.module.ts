import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PostComponent } from './post/post.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    AboutComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }

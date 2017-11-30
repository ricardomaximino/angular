import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { CapoeiraMusicComponent } from './capoeira-music/capoeira-music.component';
import { CapoeiraMusicService } from './capoeira-music/capoeira-music.service';
import { CapoeiraMemberComponent } from './capoeira-member/capoeira-member.component';
import { HttpHeaders } from '@angular/common/http';
import { AppIterceptorModule } from './app-interceptor.module';


@NgModule({
  declarations: [
    AppComponent,
    CapoeiraMusicComponent,
    CapoeiraMemberComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AppIterceptorModule
  ],
  providers: [CapoeiraMusicService, AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

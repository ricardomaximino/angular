import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RequestInterceptor } from './app-interceptor.module';
import { CommonErrorHandler } from './common/common-error-handler';
import { CapoeiraMusicComponent } from './capoeira-music/capoeira-music.component';
import { CapoeiraMemberComponent } from './capoeira-member/capoeira-member.component';
import { CapoeiraMusicService } from './services/capoeira-music.service';
import { CapoeiraMemberService } from './services/capoeira-member.service';
import { CapoeiraMusicClientService } from './services/capoeira-music-client.service';


@NgModule({
  declarations: [
    AppComponent,
    CapoeiraMusicComponent,
    CapoeiraMemberComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    CapoeiraMusicService,
    CapoeiraMemberService,
    CapoeiraMusicClientService,
    AppRoutingModule,
    {provide: ErrorHandler, useClass: CommonErrorHandler},
    {provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule} from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RequestInterceptor } from './app-interceptor.module';
import { CommonErrorHandler } from './common/common-error-handler';
import { CapoeiraMusicComponent } from './capoeira-music/capoeira-music.component';
import { CapoeiraMemberComponent } from './capoeira-member/capoeira-member.component';
import { CapoeiraMusicService } from './services/capoeira-music.service';
import { CapoeiraMemberService } from './services/capoeira-member.service';
import { CapoeiraMusicClientService } from './services/capoeira-music-client.service';
import { LoggedUserService } from './services/logged-user.service';
import { ListComponent } from './list/list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    CapoeiraMusicComponent,
    CapoeiraMemberComponent,
    ListComponent,
    NavBarComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CapoeiraMusicService,
    CapoeiraMemberService,
    CapoeiraMusicClientService,
    LoggedUserService,
    AppRoutingModule,
    {provide: ErrorHandler, useClass: CommonErrorHandler},
    {provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

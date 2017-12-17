import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { CapoeiraMusicComponent } from './capoeira-music/capoeira-music.component';
import { AppComponent } from './app.component';
import { CapoeiraMemberComponent } from './capoeira-member/capoeira-member.component';
import { ListComponent } from './list/list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'music', component: CapoeiraMusicComponent},
    {path: 'member', component: CapoeiraMemberComponent},
    {path: 'list/:param', component: ListComponent},
    {path: '**', component: NotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

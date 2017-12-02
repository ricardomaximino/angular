import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { CapoeiraMusicComponent } from './capoeira-music/capoeira-music.component';
import { AppComponent } from './app.component';
import { CapoeiraMemberComponent } from './capoeira-member/capoeira-member.component';

const routes: Routes = [
    {path: 'music', component: CapoeiraMusicComponent},
    {path: 'member', component: CapoeiraMemberComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

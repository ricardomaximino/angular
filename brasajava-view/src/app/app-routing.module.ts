import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { CapoeiraMemberComponent } from './capoeira-member/capoeira-member.component';
import { ProfileComponent } from './profile/profile.component';
import { TableComponent } from './table/table.component';
import { MusicComponent } from './music/music.component';

const routes: Routes = [
    {path: 'music', component: MusicComponent},
    {path: 'member', component: CapoeiraMemberComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'table', component: TableComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

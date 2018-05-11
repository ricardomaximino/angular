import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { PostComponent } from './post/post.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { AlwaysActivate } from './router-guard/can-activate/can-activate.always.guard';
import { AlwaysDeactivate } from './router-guard/can-deactivate/can-deactivate.always.guard';

const routes: Routes = [
    {
      path: '',
      component: LoginComponent,
      canActivate: [AlwaysActivate],
      canDeactivate: [AlwaysDeactivate]
    },
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'post/:id', component: PostComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'profile/:id', component: ProfileComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { PostComponent } from './post/post.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
    {path: 'home', component: AppComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'post', component: PostComponent},
    {path: 'about', component: AboutComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

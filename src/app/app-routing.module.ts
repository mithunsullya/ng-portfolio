import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  
{ path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
  
{ path: 'blogs', loadChildren: () => import('./blogs/blogs.module').then(m => m.BlogsModule) },

{ path: '', loadChildren: () => import('./homepage/homepage.module').then(m => m.HomepageModule) },
  
{ path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
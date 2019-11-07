import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouterLink } from '@angular/router';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  // {path: 'settings', loadChildren: '../settings/settings.module#SettingsModule'},
  { path: 'settings', loadChildren: function() {

    // Promise<SettingsModule>
    const module =  import('../settings/settings.module').then(function(module) {
      // {SettingsModule: class SettingsModule {...}}
      return module.SettingsModule;
    })
    return module;
  }}
  // { path: 'company/:id/:slug/license', component: HomeComponent }
  // { path: 'company/:id/license', component: HomeComponent }
  // { path: 'company/:id/license', component: HomeComponent, redirect:  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

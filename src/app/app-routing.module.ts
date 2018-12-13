import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
  path: '',
  redirectTo: '/public',
  pathMatch: 'full',
  runGuardsAndResolvers: 'always'    
},

  {
  path:'login',
   component:LoginComponent
  },

  {
    path:'public',
    loadChildren:'./modules/public/public.module#PublicModule'
  },
  {
    path:'admin', 
    canActivate:[AuthGuard],
    loadChildren:'./modules/admin/admin.module#AdminModule'
  },

  {
    path:'agent',
    loadChildren:'./modules/agent/agent.module#AgentModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  
  // {path:'about', component:AboutComponent},
  // {path:'contact', component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

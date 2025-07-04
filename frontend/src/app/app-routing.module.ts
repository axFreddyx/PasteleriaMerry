import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard'; // el AuthGuard

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    canActivate: [AuthGuard] // protegemos la ruta ruta
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'registro',
    loadChildren: () => import('./Pages/registro/registro.module').then(m => m.RegistroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./Pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'productos',
    loadChildren: () => import('./Pages/productos/productos.module').then( m => m.ProductosPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

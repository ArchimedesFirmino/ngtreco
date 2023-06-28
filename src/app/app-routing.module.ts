import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { AboutComponent } from './pages/about/about.component';
import { E404Component } from './pages/e404/e404.component';
import { ProfileComponent } from './user/profile/profile.component';

const routes: Routes = [
  // Rota para  página inicial caso não especificada.
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }, {
    path: 'home',
    title: 'Página inicial',
    component: HomeComponent
  }, {
    path: 'contacts',
    title: 'Contatos',
    component: ContactsComponent
  }, {
    path: 'about',
    title: 'Sobre',
    component: AboutComponent
  }, {
    path: 'e404',
    title: 'Erro 404',
    component: E404Component

  }, {
    path: 'profile',
    title: 'Perfil do Usuário',
    component: ProfileComponent
  },
  // Rota padrão para rotas inexistentes.
  {
    path: '**',
    redirectTo: 'e404',
    pathMatch: 'full'
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

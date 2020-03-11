import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClientListComponent} from './components/ventes/clients/client-list/client-list.component';
import {ClientFormComponent} from './components/ventes/clients/client-form/client-form.component';
import {FornisseurListComponent} from './components/ventes/fournisseurs/fornisseur-list/fornisseur-list.component';
import {FornisseurFormComponent} from './components/ventes/fournisseurs/fornisseur-form/fornisseur-form.component';
import {ProduitListComponent} from './components/ventes/produits/produit-list/produit-list.component';
import {ProduitFormComponent} from './components/ventes/produits/produit-form/produit-form.component';
import { DashboardComponent } from './components/ventes/dashboard/dashboard.component';
import { UserFormComponent } from './components/ventes/users/user-form/user-form.component';
import { UserListComponent } from './components/ventes/users/user-list/user-list.component';
import { LoginComponent } from './components/auth/login/login.component';



const routes: Routes = [

  { path: 'clients/clients/add', component: ClientFormComponent},
  { path: 'clients/edit', component: ClientFormComponent},
  { path: 'fournisseurs', component: FornisseurListComponent},
  { path: 'fournisseurs/add', component: FornisseurFormComponent},
  { path: 'fournisseurs/edit', component: FornisseurFormComponent},
  { path: 'produits', component: ProduitListComponent},
  { path: 'produits/add', component: ProduitFormComponent},
  { path: 'produits/edit', component: ProduitFormComponent},
  { path: 'clients', component: ClientListComponent},
  { path: '', component: DashboardComponent},
  { path: 'users', component: UserListComponent},
  { path: 'users/add', component: UserFormComponent},
  { path: 'users/edit', component: UserFormComponent},


  { path: 'login', component: LoginComponent},
 

  

  

  

  



    




  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

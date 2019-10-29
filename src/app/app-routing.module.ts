import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersListComponent } from './user-list/user-list.component';
import { UserCreateComponent} from './user-create/user-create.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'detalleUsuario/:id', component: UserDetailsComponent },
  { path: 'listaUsuarios', component: UsersListComponent },
  { path: 'crearUsuario', component: UserCreateComponent } ,
  { path: 'login', component: LoginComponent} 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

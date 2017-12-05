import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { Error404Component } from './shared/error404/error404.component';


const routes: Routes = [
    { path: '', pathMatch:'full', redirectTo:'login' },
    { path: 'login', component: LoginComponent },
    { path: 'list/:id', component: ListComponent },
    { path: 'detail/:id', component: DetailComponent },
    { path: '**', component: Error404Component }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';


const routes: Routes = [
    { path: 'list/:id', component: ListComponent },
    { path: 'detail', component: DetailComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'list' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
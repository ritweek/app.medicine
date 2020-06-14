import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedicineDashboardComponent } from 'src/app/component/medicine-dashboard/medicine-dashboard.component';
import { CreateMedicineComponent } from 'src/app/component/create-medicine/create-medicine.component';
import { HomeComponent } from './component/home/home.component';


const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'dashboard', component: MedicineDashboardComponent },
    { path: 'create', component: CreateMedicineComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

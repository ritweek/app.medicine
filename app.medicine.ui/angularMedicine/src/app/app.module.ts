import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table';
import { MedicineDashboardComponent } from 'src/app/component/medicine-dashboard/medicine-dashboard.component';
import { CreateMedicineComponent } from 'src/app/component/create-medicine/create-medicine.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input'
import { AppRoutingModule } from './app.routing.module';
import { HomeComponent } from 'src/app/component/home/home.component'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

const modules = [
  MatTableModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule
];

@NgModule({
  declarations: [
    AppComponent,
    MedicineDashboardComponent,
    CreateMedicineComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    modules,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [modules, RouterModule]
})
export class AppModule { }

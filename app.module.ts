import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarrosComponent } from './components/carros/carros.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';


import {NgxPaginationModule} from 'ngx-pagination';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { EditarComponent } from './components/editar/editar.component';
import { BorrarComponent } from './components/borrar/borrar.component'; // <-- import the module
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const appRoutes: Routes =[
 
  {path:'', component:CarrosComponent}, //////nuevo
  {path: 'principal', component: CarrosComponent},
  {path: 'registrar', component: RegistrarComponent},
  {path: 'editar/:id', component: EditarComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    CarrosComponent,
    NavbarComponent,
    RegistrarComponent,
    EditarComponent,
    BorrarComponent
  ],
  imports: [
    NgxPaginationModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(appRoutes) //////nuevo rutas aplcaicion
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

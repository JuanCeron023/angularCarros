import {NgForm} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import {HttpClient,HttpHeaders } from '@angular/common/http'   /////nuevo
import { Router } from '@angular/router';
import  {Globals } from 'src/app/common/global-constants';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})

export class RegistrarComponent implements OnInit {
 // nombre:string=""
 numberso:number=0;
 globales = Globals;
  datas={
    nombre: "",
    cilindraje: "",
    caballosfuerza: "",
    aceleracion: "",
    precio: "",
    imagen: "u"
  }

  constructor(private dataService: DataService,private httpClient:HttpClient,private router: Router) { }
  submitted = false;

  ngOnInit(): void {
  }
  
  guardar(): void {
    const data = {
      nombre: this.datas.nombre,
      cilindraje:  this.datas.cilindraje,
      caballosfuerza:  this.datas.caballosfuerza,
      aceleracion:  this.datas.aceleracion,
      precio:  this.datas.precio,
      imagen:  this.datas.imagen
    };
    this.dataService.create(data)
      .subscribe(
        response => {
          this.numberso=response.id;
          this.updateCarroDatag(this.numberso);
        },
        error => {
          console.log(error);
        });
  }

  updateCarroDatag(id) {
    const data = {
      nombre: this.datas.nombre,
      cilindraje:  this.datas.cilindraje,
      caballosfuerza:  this.datas.caballosfuerza,
      aceleracion:  this.datas.aceleracion,
      precio:  this.datas.precio,
      imagen:  id+".jpg"
    };
    this.dataService.update(id,data).subscribe(response => {
      this.numberso=id;
      //console.log( this.numberso + "ghfhfghfghfghfghfh");///submited
      this.onSubmitform(this.numberso);
    },
    error => {
      console.log(error);
    });
  }
     // Variabe 
     filedata:any;
    fileEvent(e){
        this.filedata = e.target.files[0];
    }
    // Upload 
    onSubmitform(g) {     
     // console.log(g + "fffffffffffffffffffffffffffffffffffffffffff");
      var myFormData = new FormData();
      const headers = new HttpHeaders();
      headers.append('Content-Type', 'multipart/form-data');
      headers.append('Accept', 'application/json');
      myFormData.append('image', this.filedata,  g  + '.jpg'); ///////aqui se cambia el nombre

      this.httpClient.post('http://127.0.0.1:8000/api/imagen', myFormData, {
      headers: headers
      }).subscribe(data => {   
        console.log("exito " +"gs");
        },
        error => {
          console.log(error);
        });
        this.router.navigate(['/principal']);
    }
}
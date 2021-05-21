import {NgForm} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import {HttpClient,HttpHeaders } from '@angular/common/http'   /////nuevo
import  {Globals } from 'src/app/common/global-constants';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {

  carro: any;
   // nombre:string=""
 numberso:number=0;
 globales = Globals;
  datas={
    id:"",
    nombre: "",
    cilindraje: "",
    caballosfuerza: "",
    aceleracion: "",
    precio: "",
    imagen: "wq"
  }

  constructor(private dataservice: DataService, private httpClient:HttpClient,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getCarroDatag(this.route.snapshot.paramMap.get('id'));
  }
  
  getCarroDatag(id) {
    this.dataservice.getCarro(id).subscribe(res => {
      this.carro = res;
      this.datas.nombre = this.carro.nombre;
      this.datas.cilindraje = this.carro.cilindraje;
      this.datas.caballosfuerza = this.carro.caballosfuerza;
      this.datas.aceleracion = this.carro.aceleracion;
      this.datas.precio = this.carro.precio;
      this.datas.imagen = this.carro.imagen;
     // console.log(this.carro.nombre);  
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
    this.dataservice.update(this.carro.id,data).subscribe(response => {
      this.numberso=response.id;
      //console.log( this.numberso + "ghfhfghfghfghfghfh");///submited
      this.onSubmitform(this.numberso);
    },
    error => {
      console.log(error);
    });
  }

     filedata:any;
    // onchange 
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
        this.router.navigate(['/principal']).then(() => {
          window.location.reload();
        });
       
        },
        error => {
          console.log(error);
        });      
    }
  
    refresh(): void {
      window.location.reload();
  }
  }
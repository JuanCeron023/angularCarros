import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import {Globals }  from 'src/app/common/global-constants';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.scss']
})

export class CarrosComponent implements OnInit {
  carros: any;
  carro: any;
  globales = Globals;
  data:any;

  constructor(private dataservice: DataService,private route: ActivatedRoute, private router: Router,private http: HttpClient) {

    
   }

  p=1;
  ngOnInit(): void {
///nuevos       http://localhost/blog/public/img/           http://127.0.0.1:8000/blog/public/img/
//
//this.getimage();



      this.getCarroData(); 
  }
  


  getCarroData() {

    this.dataservice.getData().subscribe(res => {
      
      this.carros = res;
   
     // console.log(this.globales.VAR1);  
    });
  }

  deleteCarro(id): void {
    this.dataservice.delete(id)
      .subscribe(
        response => {
          console.log(response);
          this.refresh();
        },
        error => {
          console.log(error);
        });
  }

  refresh(): void {
    window.location.reload();
}




getimage(){
  this.http.get('http://127.0.0.1:8000/api/imagenver').subscribe(data => {
    this.data = data;
    console.log(this.data);
    }, error => console.error(error));
}














}

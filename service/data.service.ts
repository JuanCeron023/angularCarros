import { Injectable } from '@angular/core';
import {HttpClient, HttpParams } from '@angular/common/http'   /////nuevo
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private httpClient:HttpClient) {  }   //////nuevo

//recoge los datos de laravel         
getData(){
  return this.httpClient.get('http://127.0.0.1:8000/api/carros');
}

getCarro(id): Observable<any>{
  const url_api: string = 'http://127.0.0.1:8000/api/carros/'+id;
  return this.httpClient.get(url_api);
}

create(data): Observable<any> {
  const url_api: string = 'http://127.0.0.1:8000/api/addCarro';
  let params = new HttpParams()
  .set('nombre', data.nombre)
  .set('cilindraje', data.cilindraje)
  .set('caballosfuerza', data.caballosfuerza)
  .set('aceleracion', data.aceleracion)
  .set('precio', data.precio)
  .set('imagen', data.imagen);
  return this.httpClient.post(url_api,params);
}


create1(data): Observable<any> {
  const url_api: string = 'http://127.0.0.1:8000/api/addCarro?nombre=IIuuuuIII&cilindraje=100&caballosfuerza=20&aceleracion=1.5&precio=100&imagen=gr';
  return this.httpClient.post<any>(url_api,'');
}


update(id, data): Observable<any> {
  const url_api: string = 'http://127.0.0.1:8000/api/updateCarro/'+id;
  let params = new HttpParams()
  .set('nombre', data.nombre)
  .set('cilindraje', data.cilindraje)
  .set('caballosfuerza', data.caballosfuerza)
  .set('aceleracion', data.aceleracion)
  .set('precio', data.precio)
  .set('imagen', data.imagen);
  return this.httpClient.put(url_api, params);
}

delete(id): Observable<any> {
  const url_api: string = 'http://127.0.0.1:8000/api/deleteCarro/'+id;
  return this.httpClient.delete(url_api);
}





  }



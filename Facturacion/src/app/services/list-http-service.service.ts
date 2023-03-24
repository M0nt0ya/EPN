import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IList } from '../entities/list';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class listHttpServiceService {
  readonly API_URL = "http://172.31.5.24:8080/WSSIIEPN/webresources/SilaboEPN/carga/${id}/${year}/${num}";
  
  // readonly API = "http://172.31.5.24:8080/WSSIIEPN/webresources/SilaboEPN/carga/1706280243/2022/2";

  constructor(private httpClient: HttpClient) { }

  // getAll(): Observable<IList[]> {
  //   const url = `${this.API}`;
  //   return this.httpClient.get<IList[]>(url);
  // }

  getOne(id:string,year:string,num:string ):Observable<IList[]> {
    return this.httpClient.get<IList[]>(
    this.API_URL.replace('${id}',id).replace('${year}',year).replace('${num}',num)
  );
  }
}
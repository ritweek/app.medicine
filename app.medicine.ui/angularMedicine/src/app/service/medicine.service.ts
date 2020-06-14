import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class MedicineService{

    baseUrl = 'http://localhost:5000/api/medicine/';

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor(private http: HttpClient){}

    getMedicine(): Observable<any>{
        return this.http.get(this.baseUrl + 'getmedicine', this.httpOptions)       
    }
}
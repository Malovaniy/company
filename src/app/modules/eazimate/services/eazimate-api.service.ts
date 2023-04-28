import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EazimateApiService {
  private apiUrl = environment.BACKEND_URL; 
  
  constructor(private http: HttpClient) { }

  getAllRecaent(): Observable<any[]> {
    return this.http.get<any>(`${this.apiUrl}/eazimate-recaent.json`);
  }

  getSammury(id: number): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/summary.json').pipe(
      map((response: any) => {
        return response.find((element: any) => element.id == id);
      })
    );
  }
}

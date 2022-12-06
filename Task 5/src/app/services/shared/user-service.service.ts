import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private client:HttpClient) { }
  private url='https://localhost:44380/users/'

  registerUser(user:any){
    return this.client.post<any>(`${this.url}register`,user)
    .pipe(
      catchError(this.handleError),
      map((data:any)=>{return data}))
  }

  handleError(error:any):any {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Unable to connect to server`;
    }
    window.alert(errorMessage);
  }
}

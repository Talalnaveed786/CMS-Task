import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Players, PlayersminusID } from './types/players.type';
@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http : HttpClient) //httpclient http
  {
    
   }

   getData() {
    return this.http.get<Players[]>('http://localhost:3000/api/players')
   }

   deleteData(id:string){
    return this.http.delete(`http://localhost:3000/api/players/delete?id=${id}`)
   }

   addData(plyr : PlayersminusID){
  
   return this.http.post<Players>('http://localhost:3000/api/players/add',plyr)  
   }

   UpdateData(plyr:Players){
    console.log("working")

    return this.http.put<Players>(`http://localhost:3000/api/players/update`,plyr)  
    }

   getDatabyID(id:string){
    console.log("Hello")
    return this.http.get<Players[]>(`http://localhost:3000/api/players/${id}`)
    
   } 
 

  

  

   

   


   
}

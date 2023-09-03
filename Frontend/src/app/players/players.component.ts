import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../Services/app-service.service';
import { Players } from '../Services/types/players.type';
import { AddplayersComponent} from '../addplayers/addplayers.component'

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit{
  
  players: Players[] = []  

 
 
  constructor(private service : AppServiceService){
  

  }
  ngOnInit(): void {
      
      this.getDataFromApi()
      
  } 
  removeDataFromApi(plyr :Players){
    this.service.deleteData(plyr._id).subscribe({
      next: (response) => {
                console.log(response)
                
                this.getDataFromApi()
                // alert("Player has been deleted Successfully")
              
              }
              ,
              error: (error) => {
                console.log(JSON.stringify(error))
              }
    }
    )
  }



 

  // addDatatoApi(){
  //   this.service.addData().subscribe({
  //     next: (response) => {
  //               console.log(response)
                
  //               this.getDataFromApi()
  //               // alert("Player has been added Successfully")
              
  //             }
  //             ,
  //             error: (error) => {
  //               console.log(JSON.stringify(error))
  //             }
  //   }
  //   )
  // }


    getDataFromApi(): void 
    {
      this.service.getData().subscribe({
        next: (response) => {
                  console.log(response)
                  this.players=response
                  // next
                }
                ,
                error: (error) => {
                  console.log(JSON.stringify(error))
                }
      }
      )
    }

}

// "name": "Talal",
// "age": 12,
// "position": "CF",
// "club": "Barcelona",
// "nationality": "Spain"
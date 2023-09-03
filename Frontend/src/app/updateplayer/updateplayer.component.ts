import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../Services/app-service.service';
import { Players, PlayersminusID } from '../Services/types/players.type';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-updateplayer',
  templateUrl: './updateplayer.component.html',
  styleUrls: ['./updateplayer.component.css']
})
export class UpdateplayerComponent implements OnInit {

  constructor(private updplyr : AppServiceService, private router: ActivatedRoute){

  }

  _id = ""
  name=''
  age= 0 
  position = ""
  club =""
  nationality= ""
  oldPlayer: Players | undefined
  


  editplayerinapi() {
    const updatedObj = {
      _id: this._id,
      name: this.name,
      age: this.age,
      position : this.position,
      club: this.club,
      nationality: this.nationality,
    }
    this.updplyr.UpdateData(updatedObj).subscribe({
      next: (res: Players) => {
        console.log(res)
      },
      error: (err: any) => {
        console.log("Error he yahan", err)
        
      }
    })
  }



  



  ngOnInit(): void {

    console.log(this.router.snapshot.params['id'])
    this._id = this.router.snapshot.params['id']

    this.updplyr.getDatabyID(this._id).subscribe({
      next: (res: Players[]) => {
        const players = res[0]
        this.oldPlayer = { ...players }
        this.name = players.name
        this.age = players.age
        this.position = players.position
        this.club = players.club
        this.nationality = players.nationality
      },
      error: (err: any) => {
        console.log(err.error)
        
      }
    })

      
  }

}

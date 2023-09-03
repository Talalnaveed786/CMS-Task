import { Component, OnInit } from '@angular/core';
import { Players, PlayersminusID } from '../Services/types/players.type';
import { AppServiceService } from '../Services/app-service.service';

@Component({
  selector: 'app-addplayers',
  templateUrl: './addplayers.component.html',
  styleUrls: ['./addplayers.component.css']
})
export class AddplayersComponent implements OnInit {
  
  constructor(private plyrService : AppServiceService){

  }
  _id = " "
  name=''
  age= 0 
  position = ""
  club =""
  nationality= ""

  // showData(){
  //   console.log(this.name,this.age,this.position,this.club,this.nationality)
  // }

  addPlayerinAPI(){


    if(this.age < 0 || this.age>= 42)
    {
      return alert("Age Should not be less than 0 .. Please Add the player again")
    }

    if(this.age>= 42)
    {
      return alert("Age Should not be greater than 42 .. Please Add the player again")
    }

    if(this.name === '' || this.position === '' ||this.club === '' || this.nationality === ''){

      return alert("All fields are required.. Please Add the player again")
    }
    
    
    const plyr : PlayersminusID = {
      name: this.name,
      age: this.age, 
      position:this.position,
      club:this.club,
      nationality:this.nationality
    }
    this.plyrService.addData(plyr).subscribe({
      next: (response : PlayersminusID) => {
                console.log(response)
                // alert(`${response.name} has been added successfully`)
              
              }
              ,
              error: (error) => {
                console.log(JSON.stringify(error))
              }
    }
    )

  }



  ngOnInit(): void {
      
  }
}

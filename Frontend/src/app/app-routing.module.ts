import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersComponent } from './players/players.component';
import { AddplayersComponent } from './addplayers/addplayers.component';
import { UpdateplayerComponent } from './updateplayer/updateplayer.component';


const routes: Routes = [
  {
    path:'',
    component: PlayersComponent

  },
  {
    path:'addplayer',
    component: AddplayersComponent

  },
  {
    path:`updateplayer/:id`,
    component: UpdateplayerComponent

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

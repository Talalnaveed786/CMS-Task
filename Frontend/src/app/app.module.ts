import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PlayersComponent } from './players/players.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppServiceService } from './Services/app-service.service';

import { AddplayersComponent } from './addplayers/addplayers.component';
import { FormsModule } from '@angular/forms';
import { UpdateplayerComponent } from './updateplayer/updateplayer.component';



@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    NavbarComponent,
    AddplayersComponent,
    UpdateplayerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [AppServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

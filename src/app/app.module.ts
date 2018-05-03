import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Camera } from '@ionic-native/camera';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './/app-routing.module';
import { DalService } from './services/dal.service';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AppRoutingModule
  ],
  providers: [
    Camera,
    DalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

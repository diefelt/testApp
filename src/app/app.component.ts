import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { BllService } from './services/bll.service';
import { Observable } from 'rxjs/Observable';
import { Hero }  from './models/hero';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [BllService]
})


export class AppComponent {

  heroes: Observable<Hero[]>;

  constructor(private bll: BllService) {
  //constructor(private camera: Camera, private bll: BllService) { 
    this.heroes = bll.getHeroes();
  }

  // options: CameraOptions = {
  //   quality: 100,
  //   destinationType: this.camera.DestinationType.DATA_URL,
  //   encodingType: this.camera.EncodingType.JPEG,
  //   mediaType: this.camera.MediaType.PICTURE
  // };


  title = 'app';


  // getPhoto() {
  //   this.camera.getPicture(this.options).then((imageData) => {
  //     // imageData is either a base64 encoded string or a file URI
  //     // If it's base64:
  //     alert('Photo taken');
  //     let base64Image = 'data:image/jpeg;base64,' + imageData;
  //   }, (err) => {
  //     // Handle error
  //   });

  // }
}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MessageService } from '../message-service/message-service';


// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'page-showmessage',
  templateUrl: 'showmessage.html',
  providers: [MessageService]
})
export class ShowMessagePage {
  message:any;
  currentUserId;


  constructor(public navCtrl: NavController, public navParams: NavParams,
  public MessageService:MessageService){
    this.currentUserId = 1000;
    this.message =  this.navParams.get( 'message') ;
  }
  sendMessage( message ){
    this.message.push( message );
  }


}

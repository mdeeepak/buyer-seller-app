import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


/**
 * Generated class for the MessageService page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-message-service',
  templateUrl: 'message-service.html',
})
export class MessageService {
  serviceUrl:string;


  constructor(public navCtrl: NavController, public navParams: NavParams,
              private http:Http ) {
    this.serviceUrl = 'https://lit-river-23297.herokuapp.com';
  }


  getSentMessages( senderId ){
    return this.http.post( this.serviceUrl + '/message/sent',{"empid":senderId} )
        .map( (res:Response) => res.json() )
        .catch( (error:any )=> Observable.throw(error.json().error || 'Server error'));
  }

  getInboxMessages( recieverId ){
    return this.http.post( this.serviceUrl + '/message/inbox',{"empid":recieverId} )
        .map( (res:Response) => res.json() )
        .catch( (error:any )=> Observable.throw(error.json().error || 'Server error'));
  }
}


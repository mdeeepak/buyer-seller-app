import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import { ShowMessagePage } from '../showmessage/showmessage';
import { MessageService } from '../message-service/message-service';
import { LoadingController } from 'ionic-angular';
import * as _ from 'lodash';


@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
  providers: [MessageService]
})
export class MessagePage {
  showMessageSegment:boolean;
  showList:boolean;
  openComposeMessageBox:boolean;
  messageJson:any;
  serviceUrl:string;
  currentUserId:number;

  constructor( public navCtrl:NavController, public navParams:NavParams,
  public MessageService:MessageService, public loadingCtrl:LoadingController) {
    this.showMessageSegment = true;
    this.showList = false;
    this.openComposeMessageBox = false;
    this.serviceUrl = "https://lit-river-23297.herokuapp.com/";
    this.currentUserId = 93639;
    this.selectInboxMessages();
  }

  selectInboxMessages() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    this.MessageService.getInboxMessages( this.currentUserId ).subscribe(messageJson => {
      this.messageJson = messageJson;
      loading.dismiss();
      this.showList = true;
    });
  };


  getDateString( date ) {
    return new Date( date ).toDateString();
  }

  selectSentMessages() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    this.MessageService.getSentMessages( this.currentUserId ).subscribe(messageJson => {
      this.messageJson = messageJson;
      loading.dismiss();
    });
  };
  showMessageDescription( message ){
    this.navCtrl.push( ShowMessagePage, { message:message } );
  }
}

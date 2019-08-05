import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { TradeCallaData } from '../user.model';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-trade-calls',
  templateUrl: './trade-calls.page.html',
  styleUrls: ['./trade-calls.page.scss']
  // providers: [UserService]
})
export class TradeCallsPage implements OnInit {
  fakeTradCard: Array<any> = new Array(10);
  tradCallsObj: TradeCallaData[];
  detailView = true;


  constructor(
    private userService: UserService,
    public toastController: ToastController) { }

  ngOnInit() {
    this.userService.getTradeCalls().subscribe((response: any[]) => {
      this.tradCallsObj = response;
      // console.log(this.tradCallsObj);
    },
    err => {
      this.presentToast('bottom', err.statusText, 'danger');
    });
  }

  loadData(event) {
    this.userService.getTradeCalls().subscribe((response: any[]) => {
      response.forEach(element => {
        this.tradCallsObj.push(element);
      });
      event.target.complete();
    },
    err => {
      event.target.complete();
      this.presentToast('bottom', err.statusText, 'danger');
    });
  }

  doRefresh(event) {
    this.userService.getTradeCalls().subscribe((response: any[]) => {
      this.tradCallsObj = response;
      event.target.complete();
    },
    err => {
      event.target.complete();
      this.presentToast('bottom', err.statusText, 'danger');
    });
  }

  async presentToast(toastPosition, msg, bgColor) {
    const toast = await this.toastController.create({
      position: toastPosition,
      color: bgColor,
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  switchToConciseView() {
    this.detailView = !this.detailView;
  }

  random_bg_color() {
    let x = Math.floor(Math.random() * 256),
        y = Math.floor(Math.random() * 256),
        z = Math.floor(Math.random() * 256),
        bgColor = 'rgb(' + x + ',' + y + ',' + z + ')';
    return bgColor;
    }

}

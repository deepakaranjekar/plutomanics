import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { TradeCallaData } from '../user.model';

@Component({
  selector: 'app-trade-calls',
  templateUrl: './trade-calls.page.html',
  styleUrls: ['./trade-calls.page.scss']
  // providers: [UserService]
})
export class TradeCallsPage implements OnInit {
  tradCallsObj: TradeCallaData[];
  detailView = true;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getTradeCalls().subscribe((response: any[]) => {
      this.tradCallsObj = response;
      console.log(this.tradCallsObj);
    });
  }

  loadData(event) {

    this.userService.getTradeCalls().subscribe((response: any[]) => {
      response.forEach(element => {
        this.tradCallsObj.push(element);
      });
      event.target.complete();
    });
  }

  doRefresh(event) {
    this.userService.getTradeCalls().subscribe((response: any[]) => {
      this.tradCallsObj = response;
      event.target.complete();
    });
  }

  switchToConciseView() {
    this.detailView = !this.detailView;
  }

}

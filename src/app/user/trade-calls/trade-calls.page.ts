import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { TradeCallaData } from '../user.model';

@Component({
  selector: 'app-trade-calls',
  templateUrl: './trade-calls.page.html',
  styleUrls: ['./trade-calls.page.scss'],
})
export class TradeCallsPage implements OnInit {
  tradCallsObj: TradeCallaData[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.tradCallsObj = this.userService.tradeCalls;
  }

}

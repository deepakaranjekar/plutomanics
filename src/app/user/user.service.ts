import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TradeCallaData } from './user.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _tradeCallData: TradeCallaData[];

  constructor(private http: HttpClient) { }

  getTradeCalls() {
    // return [...this._tradeCallData];
    return this.http.get(
      `https://plutomanics-project.firebaseio.com/card.json?auth=fBLcPdzf2ZVj2bH6IKfKPSoafYf0b13AcOzHYtG9`
    );
  }


  getSingleTradeCardData(id: string) {
    return this.http.get(
      `https://plutomanics-project.firebaseio.com/card/` + id + `.json?auth=fBLcPdzf2ZVj2bH6IKfKPSoafYf0b13AcOzHYtG9`
    );
  }
}

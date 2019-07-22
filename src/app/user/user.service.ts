import { Injectable } from '@angular/core';

import { TradeCallaData } from './user.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _tradeCallData : TradeCallaData[] = [
    new TradeCallaData(
      'c1',
      'Title 1',
      'Hold Titan 1140 CE May',
      'Keep close to Nature\'s heart... and break clear away, once in awhile and climb a mountain or spend a week in the woods. Wash your spirit clean.',
      'https://s3-us-west-2.amazonaws.com/uw-s3-cdn/wp-content/uploads/sites/6/2017/11/04133712/waterfall.jpg',
      3,
      10,
      false,
      '09:23 AM'),
      new TradeCallaData(
        'c2',
        'IBM',
        'Hold IBM 140 CE May',
        'Keep close to Nature\'s heart... and break clear away, once in awhile and climb a mountain or spend a week in the woods. Wash your spirit clean.',
        'https://s3-us-west-2.amazonaws.com/uw-s3-cdn/wp-content/uploads/sites/6/2017/11/04133712/waterfall.jpg',
        3,
        10,
        false,
        '3:10 PM'),
        new TradeCallaData(
          'c2',
          'SBI',
          'Hold SBI',
          'Keep close to Nature\'s heart... and break clear away, once in awhile and climb a mountain or spend a week in the woods. Wash your spirit clean.',
          'https://s3-us-west-2.amazonaws.com/uw-s3-cdn/wp-content/uploads/sites/6/2017/11/04133712/waterfall.jpg',
          3,
          10,
          false,
          '1:10 PM')
  ];

  get tradeCalls() {
    return [...this._tradeCallData];
  }

  constructor() { }

  getSingleTradeCardData(id: string) {
    return { ...this.tradeCalls.find( obj => obj.id === id)};
  }
}

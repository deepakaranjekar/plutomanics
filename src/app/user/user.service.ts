import { Injectable } from '@angular/core';

import { TradeCallaData } from './user.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _tradeCallaData : TradeCallaData[] = [
    new TradeCallaData(
      'c1',
      'Title 1',
      'Hold Titan 1140 CE May dfgdfggf dfgggf dfdgdf dfgfd',
      'Keep close to Nature\'s heart... and break clear away, once in awhile and climb a mountain or spend a week in the woods. Wash your spirit clean.',
      'https://s3-us-west-2.amazonaws.com/uw-s3-cdn/wp-content/uploads/sites/6/2017/11/04133712/waterfall.jpg',
      3,
      10,
      false,
      '09:23 AM'),
      new TradeCallaData(
        'c2',
        'Title 2',
        'Hold Titan 1140 CE May',
        'Keep close to Nature\'s heart... and break clear away, once in awhile and climb a mountain or spend a week in the woods. Wash your spirit clean.',
        'https://s3-us-west-2.amazonaws.com/uw-s3-cdn/wp-content/uploads/sites/6/2017/11/04133712/waterfall.jpg',
        3,
        10,
        false,
        '13/7/2019')
  ];

  get tradeCalls() {
    return [...this._tradeCallaData];
  }

  constructor() { }
}

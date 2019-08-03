import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { TradeCallaData } from '../../../user/user.model';
import { UserService } from '../../user.service';


@Component({
  selector: 'app-card-detail-view',
  templateUrl: './card-detail-view.page.html',
  styleUrls: ['./card-detail-view.page.scss'],
})
export class CardDetailViewPage implements OnInit {
  cardDetail: TradeCallaData;
  math = Math;

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('cardId')) {
        this.navCtrl.navigateBack('/user/tradeCalls');
        return;
      }
      this.userService.getSingleTradeCardData(paramMap.get('cardId'))
        .subscribe((response: TradeCallaData) => this.cardDetail = response);
      ;
    });
  }

}

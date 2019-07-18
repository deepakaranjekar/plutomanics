import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TradeCallsPage } from './trade-calls.page';

const routes: Routes = [
  {
    path: '',
    component: TradeCallsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TradeCallsPage]
})
export class TradeCallsPageModule {}

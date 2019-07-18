import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  { path: 'user', loadChildren: './user/user.module#UserPageModule' },
  // { path: 'trade-calls', loadChildren: './user/trade-calls/trade-calls.module#TradeCallsPageModule' },
  // { path: 'user-profile', loadChildren: './user/user-profile/user-profile.module#UserProfilePageModule' },
  // { path: 'blogs', loadChildren: './user/blogs/blogs.module#BlogsPageModule' },
  // { path: 'learning', loadChildren: './user/learning/learning.module#LearningPageModule' },
  // { path: 'card-list-view', loadChildren: './user/trade-calls/card-list-view/card-list-view.module#CardListViewPageModule' },
  // { path: 'card-detail-view', loadChildren: './user/trade-calls/card-detail-view/card-detail-view.module#CardDetailViewPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

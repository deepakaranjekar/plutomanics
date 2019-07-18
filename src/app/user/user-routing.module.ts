import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserPage } from './user.page';

const routes: Routes = [
    {
        path: 'tabs',
        component : UserPage,
        children: [
            {
                path: 'tradeCalls',
                children: [
                    {
                        path: '',
                        loadChildren: './trade-calls/trade-calls.module#TradeCallsPageModule'
                    }
                    // ,
                    // {
                    //     path: ':cardId',
                    //     loadChildren: './trade-calls/card-detail-view/card-detail-view.module#CardDetailViewPageModule'
                    // }
                ]
            },
            {
                path: 'learning',
                children: [
                    {
                        path: '',
                        loadChildren: './learning/learning.module#LearningPageModule'
                    }
                ]
            },
            {
                path: 'blogs',
                children: [
                    {
                        path: '',
                        loadChildren: './blogs/blogs.module#BlogsPageModule'
                    }
                ]
            },
            {
                path: 'profile',
                children: [
                    {
                        path: '',
                        loadChildren: './user-profile/user-profile.module#UserProfilePageModule'
                    }
                ]
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class UserRoutingModule {}
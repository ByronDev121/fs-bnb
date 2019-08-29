import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { AuthGuard } from '../../auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: 'explorer',
        pathMatch: 'full'
      },
      {
        path: 'explorer',
        children: [
          {
            path: '',
            loadChildren: './explorer/explorer.module#ExplorerPageModule'
          }
        ]
      },
      {
        path: 'trips',
        canActivate: [AuthGuard],
        children: [
          {
            path: '',
            loadChildren: './trips/trips.module#TripsPageModule'
          }
        ]
      },
      {
        path: 'inbox',
        canActivate: [AuthGuard],
        children: [
          {
            path: '',
            loadChildren: './inbox/inbox.module#InboxPageModule'
          }
        ]
      },
      {
        path: 'profile',
        canActivate: [AuthGuard],
        children: [
          {
            path: '',
            loadChildren: './profile/profile.module#ProfilePageModule'
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }

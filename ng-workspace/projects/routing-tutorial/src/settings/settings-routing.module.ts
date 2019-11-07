import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {path: 'user', component: UserComponent},
                {path: 'dashboard', component: DashboardComponent}
            ]
        )
    ],
    exports: [
        RouterModule
    ]
})
export class SettingsRoutingModule {

}
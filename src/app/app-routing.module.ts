import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/sites/home/home.component';
import {NotFoundComponent} from './components/sites/not-found/not-found.component';

const APP_ROUTE_CONFIGS: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'shop',
        loadChildren: './shop/shop.module#ShopModule'
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTE_CONFIGS)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

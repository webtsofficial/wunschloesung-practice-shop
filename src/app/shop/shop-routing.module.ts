import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShopHomeComponent} from './components/sites/shop-home/shop-home.component';

const SHOP_ROUTE_CONFIGS: Routes = [
    {
        path: '',
        component: ShopHomeComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(SHOP_ROUTE_CONFIGS)],
    exports: [RouterModule]
})
export class ShopRoutingModule {
}

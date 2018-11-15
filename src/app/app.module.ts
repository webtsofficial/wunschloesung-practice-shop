import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/sites/home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
} from '@angular/material';
import { MainNavigationComponent } from './components/navigation/main-navigation/main-navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import {FormsModule} from '@angular/forms';
import { NotFoundComponent } from './components/sites/not-found/not-found.component';
import {CommonModule} from '@angular/common';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        MainNavigationComponent,
        NotFoundComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        LayoutModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

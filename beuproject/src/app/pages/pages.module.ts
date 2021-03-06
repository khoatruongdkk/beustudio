import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { SignInComponent } from './landing/sign-in/sign-in.component';
import { SignUpComponent } from './landing/sign-up/sign-up.component';
import { CommonModules } from '../shared/common/common.module';

import {DataViewModule} from 'primeng/dataview';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import {DropdownModule} from 'primeng/dropdown';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {RatingModule} from 'primeng/rating';

const appRoutes: Routes = [
     {
          path: 'home',
          component: HomeComponent,
          children: [
               { path: '', redirectTo: 'product-list', pathMatch: 'full'},
               { path: 'product-list', component: ProductListComponent },
               { path: 'product-detail/:id', component: ProductDetailComponent },
               //  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
          ],
     }
];
@NgModule({
  declarations: [
     HomeComponent,
     ProductListComponent,
     ProductDetailComponent,
     UserDetailComponent,
     SignInComponent,
     SignUpComponent
  ],
  imports: [
     BrowserModule,
     CommonModules,
     DataViewModule,
     ButtonModule,
     PanelModule,
     DropdownModule,
     InputTextModule,
     RatingModule,
     RouterModule.forRoot(appRoutes)
  ],
     providers: [],
     bootstrap: []
})
export class PagesModule { }

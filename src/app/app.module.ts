import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomepageComponent } from './view/homepage/homepage.component';
import {Router, RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './view/login/login.component';
import { NavbarComponent } from './view/navbar/navbar.component';
import { FooterComponent } from './view/footer/footer.component';
import { CustomerHomeComponent } from './view/customer-home/customer-home.component';
import { CatbarComponent } from './view/catbar/catbar.component';
import { AdComponent } from './designer/ad/ad.component';
import { CustomerRegComponent } from './view/customer-reg/customer-reg.component';
import {componentFactoryName} from '@angular/compiler';
import { DesignerRegComponent } from './view/designer-reg/designer-reg.component';
import {DesignerListComponent} from './view/designer-list/designer-list.component';



const routes: Routes = [
  {
    path: 'homepage',
    component: HomepageComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'customerHome',
    component: CustomerHomeComponent
  },
  {
    path: 'customerReg',
    component: CustomerRegComponent
  },
  {
    path: 'designerReg',
    component: DesignerRegComponent
  },
  {
    path: 'designerList',
    component: DesignerListComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    CustomerHomeComponent,
    CatbarComponent,
    AdComponent,
    CustomerRegComponent,
    DesignerRegComponent,
    DesignerListComponent

  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

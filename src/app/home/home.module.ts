import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { NavbarSectionComponent } from './navbar-section/navbar-section.component';
import { EmpowerSectionComponent } from './empower-section/empower-section.component';
import { TrustedPartnersSectionComponent } from './trusted-partners-section/trusted-partners-section.component';
import { ServicesSectionComponent } from './services-section/services-section.component';
import { AboutUsSectionComponent } from './about-us-section/about-us-section.component';
import { CoinSectionComponent } from './coin-section/coin-section.component';
import { BlogSectionComponent } from './blog-section/blog-section.component';
import { DownloadSectionComponent } from './download-section/download-section.component';
import { SubscribeSectionComponent } from './subscribe-section/subscribe-section.component';
import { FooterSectionComponent } from './footer-section/footer-section.component';
import { HomeComponent } from './home.component';
// import { CarouselModule } from 'ngx-bootstrap/carousel';
//Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    NavbarSectionComponent,
    EmpowerSectionComponent,
    TrustedPartnersSectionComponent,
    ServicesSectionComponent,
    AboutUsSectionComponent,
    CoinSectionComponent,
    BlogSectionComponent,
    DownloadSectionComponent,
    SubscribeSectionComponent,
    FooterSectionComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    // CarouselModule,
    //Angular material
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatCardModule,
    MatToolbarModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class HomeModule { }


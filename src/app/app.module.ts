import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './public/index/banner/banner.component';
import { FeatureComponent } from './public/index/feature/feature.component';
import { FooterComponent } from './public/index/footer/footer.component';
import { ProductComponent } from './public/index/product/product.component';
import { QuoteComponent } from './public/index/quote/quote.component';
import { NavbarComponent } from './public/index/navbar/navbar.component';
import { AboutComponent } from './public/about/about.component';
import { AboutBannerComponent } from './public/about/about-banner/about-banner.component';
import { IndexComponent } from './public/index/index.component';
import { AboutContainerComponent } from './public/about/about-container/about-container.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    FeatureComponent,
    FooterComponent,
    ProductComponent,
    QuoteComponent,
    NavbarComponent,
    AboutComponent,
    AboutBannerComponent,
    IndexComponent,
    AboutContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

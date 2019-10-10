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

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    FeatureComponent,
    FooterComponent,
    ProductComponent,
    QuoteComponent,
    NavbarComponent,
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

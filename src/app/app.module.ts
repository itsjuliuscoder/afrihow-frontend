import { HeaderComponent } from './public/index/header/header.component';
import { BrowserModule, Title } from '@angular/platform-browser';
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
import { ContactComponent } from './public/contact/contact.component';
import { ContactContainerComponent } from './public/contact/contact-container/contact-container.component';
import { ContactBannerComponent } from './public/contact/contact-banner/contact-banner.component';
import { BlogComponent } from './public/blog/blog.component';
import { PricingComponent } from './public/pricing/pricing.component';
import { LegalComponent } from './public/legal/legal.component';
import { EnterpriseComponent } from './public/enterprise/enterprise.component';
import { ApiComponent } from './public/api/api.component';
import { LearningHubComponent } from './public/learning-hub/learning-hub.component';
import { HelpCenterComponent } from './public/help-center/help-center.component';
import { LoginComponent } from './publisher/login/login.component';
import { RegisterComponent } from './publisher/register/register.component';
import { StpriesComponent } from './public/stpries/stpries.component';
import { TopicsComponent } from './public/topics/topics.component';
import { SubjectComponent } from './public/subject/subject.component';
import { DeveloperComponent } from './public/developer/developer.component';
import { GettingStartedComponent } from './public/getting-started/getting-started.component';
import { TermsComponent } from './public/legal/terms/terms.component';
import { PrivacyComponent } from './public/legal/privacy/privacy.component';
import { PublicComponent } from './public/public.component';

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
    ContactComponent,
    ContactContainerComponent,
    ContactBannerComponent,
    BlogComponent,
    PricingComponent,
    LegalComponent,
    EnterpriseComponent,
    ApiComponent,
    LearningHubComponent,
    HelpCenterComponent,
    LoginComponent,
    RegisterComponent,
    StpriesComponent,
    TopicsComponent,
    SubjectComponent,
    DeveloperComponent,
    GettingStartedComponent,
    TermsComponent,
    PrivacyComponent,
    PublicComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

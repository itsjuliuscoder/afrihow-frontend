import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

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
import { TopicsComponent } from './public/topics/topics.component';
import { SubjectComponent } from './public/subject/subject.component';
import { DeveloperComponent } from './public/developer/developer.component';
import { GettingStartedComponent } from './public/getting-started/getting-started.component';
import { TermsComponent } from './public/legal/terms/terms.component';
import { PrivacyComponent } from './public/legal/privacy/privacy.component';
import { PrivacyPoliciesComponent } from './public/privacy-policies/privacy-policies.component';
import { AdminComponent } from './admin/admin.component';
import { BlogContainerComponent } from './public/blog/blog-container/blog-container.component';
import { BlogBannerComponent } from './public/blog/blog-banner/blog-banner.component';
import { TermsBannerComponent } from './public/legal/terms/terms-banner/terms-banner.component';
import { TermsContainerComponent } from './public/legal/terms/terms-container/terms-container.component';
import { PrivacyBannerComponent } from './public/legal/privacy/privacy-banner/privacy-banner.component';
import { PrivacyContainerComponent } from './public/legal/privacy/privacy-container/privacy-container.component';
import { StoriesComponent } from './public/stories/stories.component';
import { StoriesBannerComponent } from './public/stories/stories-banner/stories-banner.component';
import { StoriesContainerComponent } from './public/stories/stories-container/stories-container.component';
import { SubjectContainerComponent } from './public/subject/subject-container/subject-container.component';
import { SubjectBannerComponent } from './public/subject/subject-banner/subject-banner.component';
import { TopicsBannerComponent } from './public/topics/topics-banner/topics-banner.component';
import { TopicsContainerComponent } from './public/topics/topics-container/topics-container.component';
import { GetStartedComponent } from './public/index/get-started/get-started.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BlogDetailsComponent } from './public/blog/blog-details/blog-details.component';
import { PublicComponent } from './public/public.component';
import { SupportComponent } from './public/support/support.component';
import { LearningBannerComponent } from './public/learning-hub/learning-banner/learning-banner.component';
import { LearningContentComponent } from './public/learning-hub/learning-content/learning-content.component';
import { SupportBannerComponent } from './public/support/support-banner/support-banner.component';
import { SupportContentComponent } from './public/support/support-content/support-content.component';
import { LoginContentComponent } from './publisher/login/login-content/login-content.component';
import { RegisterContentComponent } from './publisher/register/register-content/register-content.component';
import { ContentComponent } from './page-not-found/content/content.component';
import { BannerPageNotFoundComponent } from './page-not-found/banner-page-not-found/banner-page-not-found.component';
import { ForgotPasswordComponent } from './publisher/forgot-password/forgot-password.component';
import { ForgotPasswordContentComponent } from './publisher/forgot-password/forgot-password-content/forgot-password-content.component';
import { PublisherComponent } from './publisher/publisher.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HttpService } from './http.service';
import { FaqsComponent } from './public/faqs/faqs.component';
import { FaqsBannerComponent } from './public/faqs/faqs-banner/faqs-banner.component';
import { FaqsContentComponent } from './public/faqs/faqs-content/faqs-content.component';
import { EnterpriseContentComponent } from './public/enterprise/enterprise-content/enterprise-content.component';
import { EnterpriseBannerComponent } from './public/enterprise/enterprise-banner/enterprise-banner.component';
import { SubjectStoriesComponent } from './public/subject-stories/subject-stories.component';
import { SubjectStoriesSingleComponent } from './public/subject-stories-single/subject-stories-single.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { PricingBannerComponent } from './public/pricing/pricing-banner/pricing-banner.component';
import { PricingContentComponent } from './public/pricing/pricing-content/pricing-content.component';
import { ExploreComponent } from './public/explore/explore.component';

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
    TopicsComponent,
    SubjectComponent,
    DeveloperComponent,
    GettingStartedComponent,
    TermsComponent,
    PrivacyComponent,
    PrivacyPoliciesComponent,
    AdminComponent,
    BlogContainerComponent,
    BlogBannerComponent,
    TermsBannerComponent,
    TermsContainerComponent,
    PrivacyBannerComponent,
    PrivacyContainerComponent,
    StoriesComponent,
    StoriesBannerComponent,
    StoriesContainerComponent,
    SubjectContainerComponent,
    SubjectBannerComponent,
    TopicsBannerComponent,
    TopicsContainerComponent,
    GetStartedComponent,
    PageNotFoundComponent,
    BlogDetailsComponent,
    PublicComponent,
    SupportComponent,
    LearningBannerComponent,
    LearningContentComponent,
    SupportBannerComponent,
    SupportContentComponent,
    LoginContentComponent,
    RegisterContentComponent,
    ContentComponent,
    BannerPageNotFoundComponent,
    ForgotPasswordComponent,
    ForgotPasswordContentComponent,
    PublisherComponent,
    WelcomeComponent,
    FaqsComponent,
    FaqsContentComponent,
    FaqsBannerComponent,
    EnterpriseContentComponent,
    EnterpriseBannerComponent,
    SubjectStoriesComponent,
    SubjectStoriesSingleComponent,
    HowItWorksComponent,
    PricingBannerComponent,
    PricingContentComponent,
    ExploreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [

    HttpService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

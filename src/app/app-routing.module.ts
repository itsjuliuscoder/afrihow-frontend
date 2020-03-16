import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './public/about/about.component';
import { IndexComponent } from './public/index/index.component';
import { ContactComponent } from './public/contact/contact.component';
import { HelpCenterComponent } from './public/help-center/help-center.component';
import { LegalComponent } from './public/legal/legal.component';
import { TopicsComponent } from './public/topics/topics.component';
import { SubjectComponent } from './public/subject/subject.component';
import { BlogComponent } from './public/blog/blog.component';
import { GettingStartedComponent } from './public/getting-started/getting-started.component';
import { LearningHubComponent } from './public/learning-hub/learning-hub.component';
import { TermsComponent } from './public/legal/terms/terms.component';
import { PrivacyComponent } from './public/legal/privacy/privacy.component';
import { StoriesComponent } from './public/stories/stories.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BlogDetailsComponent } from './public/blog/blog-details/blog-details.component';
import { SupportComponent } from './public/support/support.component';
import { LoginComponent } from './publisher/login/login.component';
import { RegisterComponent } from './publisher/register/register.component';
import { ForgotPasswordComponent } from './publisher/forgot-password/forgot-password.component';
import { EnterpriseComponent} from './public/enterprise/enterprise.component';
import { FaqsComponent} from './public/faqs/faqs.component';
import { PricingComponent} from './public/pricing/pricing.component';

const routes: Routes = [

  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'about', component: AboutComponent, data: {title : 'About AfriHow'}},
  { path: 'index', component: IndexComponent, data: {title : 'Digital Learning Platform for Africa\'s growing Population - AfriHow'}},
  { path: 'blog', component: BlogComponent, data: {title : 'Blog - AfriHow'} },
  { path: 'help-center', component: HelpCenterComponent, data: {title : 'Help Center - AfriHow'} },
  { path: 'contact', component: ContactComponent, data: {title : 'Contact Us - AfriHow'} },
  { path: 'legal', component: LegalComponent, data: {title : 'About AfriHow'} },
  { path: 'topics', component: TopicsComponent, data: {title : 'Creating a Topic - AfriHow'} },
  { path: 'subjects', component: SubjectComponent, data: {title : 'Creating a Subject -  AfriHow'} },
  { path: 'getting-started', component: GettingStartedComponent, data: {title : 'Getting Started - AfriHow'} },
  { path: 'terms', component: TermsComponent, data: {title : 'Terms of Use - AfriHow'} },
  { path: 'privacy', component: PrivacyComponent,data: {title : 'Privacy Policies - AfriHow'} },
  { path: 'stories', component: StoriesComponent, data: {title : 'Creating Stories - AfriHow '} },
  { path: 'support', component: SupportComponent, data: {title : 'Support - AfriHow'}},
  { path: 'afrihow-tips', component: LearningHubComponent, data: {title : 'AfriHow Tips - AfriHow'}},
  { path: 'blog/:id', component: BlogDetailsComponent, data: {title : 'Blog/ - AfriHow'}},
  { path: 'login', component: LoginComponent, data: {title : 'Continue AfriHow'}},
  { path: 'register', component: RegisterComponent, data: {title : 'Get Started with AfriHow'}},
  { path: 'reset-password', component: ForgotPasswordComponent, data: {title : 'Forgot Password - AfriHow'}},
  { path: 'enterprise', component: EnterpriseComponent, data: {title : 'Enterprise - AfriHow'}},
  { path: 'faqs', component: FaqsComponent, data: {title : 'FAQs - AfriHow'}},
  { path: 'pricing', component: PricingComponent, data: {title : 'Plans & Pricing - AfriHow'}},
  { path: 'support', component: SupportComponent, data: {title : 'Support - AfriHow'}},
  { path: '**', component: PageNotFoundComponent, data: {title : '404 - Page Not Found'}},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AboutComponent,
                                  IndexComponent,
                                  BlogComponent,
                                  HelpCenterComponent,
                                  ContactComponent,
                                  LegalComponent,
                                  TopicsComponent,
                                  SubjectComponent,
                                  LearningHubComponent,
                                  GettingStartedComponent,
                                  TermsComponent,
                                  PrivacyComponent,
                                  StoriesComponent,
                                  PageNotFoundComponent,
                                  BlogDetailsComponent,
                                  LoginComponent,
                                  RegisterComponent,
                                  ForgotPasswordComponent,
                                  EnterpriseComponent,
                                  FaqsComponent
                                  ];


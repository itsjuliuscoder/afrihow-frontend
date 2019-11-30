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


const routes: Routes = [

  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'index', component: IndexComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'help-center', component: HelpCenterComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'legal', component: LegalComponent },
  { path: 'topics', component: TopicsComponent },
  { path: 'subjects', component: SubjectComponent },
  { path: 'getting-started', component: GettingStartedComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'stories', component: StoriesComponent },
  { path: 'support', component: SupportComponent},
  { path: 'afrihow-tips', component: LearningHubComponent},
  { path: 'blog/:id', component: BlogDetailsComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'reset-password', component: ForgotPasswordComponent},
  { path: '**', component: PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
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
                                  ForgotPasswordComponent
                                  ];


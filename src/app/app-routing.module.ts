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




const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'index', component: IndexComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'help-center', component: HelpCenterComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'legal', component: LegalComponent },
  { path: 'topic', component: TopicsComponent },
  { path: 'subject', component: SubjectComponent },
  { path: 'learning-hub', component: LearningHubComponent },
  { path: 'getting-started', component: GettingStartedComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'privacy', component: PrivacyComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

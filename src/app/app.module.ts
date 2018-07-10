import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AuthService} from './services/auth.service';
import { CategoriesService} from './services/categories.service';
import { JobsService} from './services/jobs.service';
import { ResumesService} from './services/resumes.service';


import { AppComponent } from './app.component';
import { FooterComponent } from './common/footer/footer.component';
import { HeaderComponent } from './common/header/header.component';
import { PreloaderComponent } from './common/preloader/preloader.component';
import { HomeComponent } from './pages/home/home.component';
import { Page404Component } from './pages/page404/page404.component';
import { CcsliderComponent } from './common/ccslider/ccslider.component';
import { PopularcategoryComponent } from './common/popularcategory/popularcategory.component';
import { RecentjobComponent } from './common/recentjob/recentjob.component';
import { TophiringcompanyComponent } from './common/tophiringcompany/tophiringcompany.component';
import { JccounterComponent } from './common/jccounter/jccounter.component';
import { OfferingdealsComponent } from './common/offeringdeals/offeringdeals.component';
import { JoblistingComponent } from './pages/joblisting/joblisting.component';
import { JobdetailsComponent } from './pages/jobdetails/jobdetails.component';
import { CategoryfilterComponent } from './common/categoryfilter/categoryfilter.component';
import { SalaryfilterComponent } from './common/salaryfilter/salaryfilter.component';
import { TypefilterComponent } from './common/typefilter/typefilter.component';
import { JobitemComponent } from './common/jobitem/jobitem.component';
import { SkillfilterComponent } from './common/skillfilter/skillfilter.component';
import { PaginationComponent } from './common/pagination/pagination.component';
import { AddresumeComponent } from './common/addresume/addresume.component';
import { ListingtabfilterComponent } from './common/listingtabfilter/listingtabfilter.component';
import { PostlistComponent } from './common/postlist/postlist.component';
import { JoblistingdetailsComponent } from './common/joblistingdetails/joblistingdetails.component';
import { ResumelistingComponent } from './pages/resumelisting/resumelisting.component';
import { ResumedetailsComponent } from './pages/resumedetails/resumedetails.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SubmitjobComponent } from './pages/submitjob/submitjob.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ResumeitemComponent } from './common/resumeitem/resumeitem.component';
import { UploadresumeComponent } from './pages/uploadresume/uploadresume.component';


const routes : Routes = [
  {path : '',component : HomeComponent},
  {path : 'jobs',component : JoblistingComponent},
  {path : 'jobs/:id',component : JobdetailsComponent},
  {path : 'resumes',component : ResumelistingComponent},
  {path : 'resume/:id',component : ResumedetailsComponent},
  {path : 'contact',component : ContactComponent},
  {path : 'login',component : LoginComponent},
  {path : 'register',component : RegisterComponent},
  {path : 'profile',component : ProfileComponent},
  {path : 'submitjob',component : SubmitjobComponent},
  {path : 'uploadresume',component : UploadresumeComponent},
  {path : '**',component : Page404Component}
]

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    PreloaderComponent,
    HomeComponent,
    Page404Component,
    CcsliderComponent,
    PopularcategoryComponent,
    RecentjobComponent,
    TophiringcompanyComponent,
    JccounterComponent,
    OfferingdealsComponent,
    JoblistingComponent,
    JobdetailsComponent,
    CategoryfilterComponent,
    
    SalaryfilterComponent,
    TypefilterComponent,
    JobitemComponent,
    SkillfilterComponent,
    PaginationComponent,
    AddresumeComponent,
    ListingtabfilterComponent,
    PostlistComponent,
    JoblistingdetailsComponent,
    ResumelistingComponent,
    ResumedetailsComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    SubmitjobComponent,
    ContactComponent,
    ResumeitemComponent,
    UploadresumeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [AuthService,CategoriesService,ResumesService,JobsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

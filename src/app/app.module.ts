import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { SwiperModule } from 'swiper/angular';
import { VideoContainerComponent } from './pages/video-container/video-container.component';
import { ServicesContentComponent } from './pages/services-content/services-content.component';
import { PortfolioCaseComponent } from './pages/portfolio-case/portfolio-case.component';
import { ArrowTransformComponent } from './shared/arrow-transform/arrow-transform.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { ContactsFormComponent } from './pages/contacts-form/contacts-form.component';
import { BtnHoveredComponent } from './shared/btn-hovered/btn-hovered.component';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    VideoContainerComponent,
    ServicesContentComponent,
    PortfolioCaseComponent,
    ArrowTransformComponent,
    ContactUsComponent,
    BlogsComponent,
    ContactsFormComponent,
    BtnHoveredComponent
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    MatSelectModule,
    AppRoutingModule,
    SwiperModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

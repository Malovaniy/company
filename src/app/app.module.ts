import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule} from '@angular/material/input';
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
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LanguageService } from './core/language.service';
import { ClickOutsideModule } from 'ng-click-outside';
import { EazimateModule } from './modules/eazimate/eazimate.module';
import { AqctSpaModule } from './modules/aqct-spa/aqct-spa.module';
import { ExtraOptions, PreloadAllModules, RouterModule } from '@angular/router';


// export function HttpLoaderFactory(http: HttpClient) {
//   return new TranslateHttpLoader(http, 'company/assets/i18n');
// }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(
    http, 
    '../company/assets/i18n/', // or whatever path you're using
    '.json'
  );
}

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
    EazimateModule,
    AqctSpaModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule,
    ClickOutsideModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      defaultLanguage: 'ua',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    SwiperModule,
    BrowserAnimationsModule
  ],
  providers: [LanguageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

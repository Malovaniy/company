import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule} from '@angular/material/input';
import { appRoutes } from './app.routing';
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
import { SharedMaterialModule } from './shared-module/shared/shared.module';
import { NgApexchartsModule } from 'ng-apexcharts';

const routerConfig: ExtraOptions = {
  preloadingStrategy: PreloadAllModules,
  scrollPositionRestoration: 'enabled',
};

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
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
    BtnHoveredComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, routerConfig),
    HttpClientModule,
    SharedMaterialModule,
    ClickOutsideModule,
    NgApexchartsModule,
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

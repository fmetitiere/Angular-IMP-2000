import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { LightboxModule } from "ngx-lightbox";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { CarouselModule } from "ngx-owl-carousel-o";
import { ScrollToModule } from "@nicky-lenaers/ngx-scroll-to";
import { NgbNavModule } from "@ng-bootstrap/ng-bootstrap";
import { SwiperModule } from "ngx-swiper-wrapper";
import { SWIPER_CONFIG } from "ngx-swiper-wrapper";
import { SwiperConfigInterface } from "ngx-swiper-wrapper";
import { NgxTypedJsModule } from "ngx-typed-js";
import { NgxYoutubePlayerModule } from "ngx-youtube-player";
import { FlatpickrModule } from "angularx-flatpickr";
import { CountToModule } from "angular-count-to";
import { NgxMasonryModule } from "ngx-masonry";

import { SharedModule } from "./shared/shared.module";

import { NgbDropdownModule } from "@ng-bootstrap/ng-bootstrap";
import { CKEditorModule } from "@ckeditor/ckeditor5-angular";

import { MasterPageComponent } from "./core/components/master-page/master-page.component";

import { IndexComponent } from "./core/components/index/index.component";

import { PageAboutusComponent } from "./core/components/page-aboutus/page-aboutus.component";

import { PageBlogGridComponent } from "./core/components/page-blog-grid/page-blog-grid.component";

import { PageComingsoonComponent } from "./core/components/page-comingsoon/page-comingsoon.component";
import { PageComingsoon2Component } from "./core/components/page-comingsoon2/page-comingsoon2.component";
import { PageContactTwoComponent } from "./core/components/page-contact-two/page-contact-two.component";
import { PageBlogDetailTwoComponent } from "./core/components/page-blog-detail-two/page-blog-detail-two.component";
import { FeatherModule } from "angular-feather";

import { allIcons } from "angular-feather/icons";
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { SwitcherComponent } from "./shared/switcher/switcher.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: "horizontal",
  slidesPerView: "auto",
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MasterPageComponent,
    IndexComponent,
    PageAboutusComponent,
    PageBlogGridComponent,
    PageComingsoonComponent,
    PageComingsoon2Component,
    PageContactTwoComponent,
    PageBlogDetailTwoComponent,
    SwitcherComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    CarouselModule,
    FeatherModule.pick(allIcons),
    ScrollToModule.forRoot(),
    RouterModule.forRoot([], { relativeLinkResolution: "legacy" }),
    NgxYoutubePlayerModule,
    NgbDropdownModule,
    CKEditorModule,
    NgbModule,
    NgbNavModule,
    FormsModule,
    SwiperModule,
    NgxTypedJsModule,
    FlatpickrModule.forRoot(),
    CountToModule,
    NgxMasonryModule,
    LightboxModule,
    SharedModule,
  ],
  exports: [FeatherModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

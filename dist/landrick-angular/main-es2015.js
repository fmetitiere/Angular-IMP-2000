(self["webpackChunklandrick_angular"] = self["webpackChunklandrick_angular"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _core_components_index_index_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/components/index/index.component */ 28002);
/* harmony import */ var _core_components_master_page_master_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/components/master-page/master-page.component */ 89959);
/* harmony import */ var _core_components_page_aboutus_page_aboutus_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/components/page-aboutus/page-aboutus.component */ 75296);
/* harmony import */ var _core_components_page_blog_detail_two_page_blog_detail_two_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/components/page-blog-detail-two/page-blog-detail-two.component */ 73380);
/* harmony import */ var _core_components_page_blog_grid_page_blog_grid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/components/page-blog-grid/page-blog-grid.component */ 62828);
/* harmony import */ var _core_components_page_contact_two_page_contact_two_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/components/page-contact-two/page-contact-two.component */ 94952);
/* harmony import */ var _shared_switcher_switcher_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/switcher/switcher.component */ 22157);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);










const routes = [
    {
        path: "",
        component: _core_components_master_page_master_page_component__WEBPACK_IMPORTED_MODULE_1__.MasterPageComponent,
        children: [
            { path: "", component: _core_components_index_index_component__WEBPACK_IMPORTED_MODULE_0__.IndexComponent },
            { path: "index", component: _core_components_index_index_component__WEBPACK_IMPORTED_MODULE_0__.IndexComponent },
            { path: "blog", component: _core_components_page_blog_grid_page_blog_grid_component__WEBPACK_IMPORTED_MODULE_4__.PageBlogGridComponent },
            { path: "blog-detail", component: _core_components_page_blog_detail_two_page_blog_detail_two_component__WEBPACK_IMPORTED_MODULE_3__.PageBlogDetailTwoComponent },
            { path: "#", component: _shared_switcher_switcher_component__WEBPACK_IMPORTED_MODULE_6__.SwitcherComponent },
            { path: "contact", component: _core_components_page_contact_two_page_contact_two_component__WEBPACK_IMPORTED_MODULE_5__.PageContactTwoComponent },
            { path: "plan-pedagogico", component: _core_components_page_aboutus_page_aboutus_component__WEBPACK_IMPORTED_MODULE_2__.PageAboutusComponent },
        ],
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forRoot(routes, {
                scrollPositionRestoration: "enabled",
                scrollOffset: [0, 0],
                // Enable scrolling to anchors
                anchorScrolling: "enabled",
            }),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] }); })();


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _shared_switcher_switcher_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/switcher/switcher.component */ 22157);




class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'landrick-angular';
        /**
         * Unicons icon refreshed on route change.
         */
        this.router.events.forEach((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd) {
                window['Unicons']['refresh']();
            }
            if (!(event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-switcher");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "modal-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-carousel");
    } }, directives: [_shared_switcher_switcher_component__WEBPACK_IMPORTED_MODULE_0__.SwitcherComponent, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ 75835);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-lightbox */ 629);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-owl-carousel-o */ 5668);
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ 48994);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-swiper-wrapper */ 15923);
/* harmony import */ var ngx_typed_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ngx-typed-js */ 23192);
/* harmony import */ var ngx_youtube_player__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-youtube-player */ 15622);
/* harmony import */ var angularx_flatpickr__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! angularx-flatpickr */ 42160);
/* harmony import */ var angular_count_to__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-count-to */ 74848);
/* harmony import */ var ngx_masonry__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ngx-masonry */ 70346);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/shared.module */ 44466);
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ 22723);
/* harmony import */ var _core_components_master_page_master_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/components/master-page/master-page.component */ 89959);
/* harmony import */ var _core_components_index_index_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/components/index/index.component */ 28002);
/* harmony import */ var _core_components_page_aboutus_page_aboutus_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/components/page-aboutus/page-aboutus.component */ 75296);
/* harmony import */ var _core_components_page_blog_grid_page_blog_grid_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/components/page-blog-grid/page-blog-grid.component */ 62828);
/* harmony import */ var _core_components_page_comingsoon_page_comingsoon_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/components/page-comingsoon/page-comingsoon.component */ 55292);
/* harmony import */ var _core_components_page_comingsoon2_page_comingsoon2_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/components/page-comingsoon2/page-comingsoon2.component */ 14437);
/* harmony import */ var _core_components_page_contact_two_page_contact_two_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/components/page-contact-two/page-contact-two.component */ 94952);
/* harmony import */ var _core_components_page_blog_detail_two_page_blog_detail_two_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/components/page-blog-detail-two/page-blog-detail-two.component */ 73380);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! angular-feather */ 35411);
/* harmony import */ var angular_feather_icons__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! angular-feather/icons */ 940);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/header/header.component */ 89470);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/footer/footer.component */ 45227);
/* harmony import */ var _shared_switcher_switcher_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/switcher/switcher.component */ 22157);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 37716);







































const DEFAULT_SWIPER_CONFIG = {
    direction: "horizontal",
    slidesPerView: "auto",
};
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ providers: [
        {
            provide: ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_17__.SWIPER_CONFIG,
            useValue: DEFAULT_SWIPER_CONFIG,
        },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__.BrowserAnimationsModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule,
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_21__.CarouselModule,
            angular_feather__WEBPACK_IMPORTED_MODULE_22__.FeatherModule.pick(angular_feather_icons__WEBPACK_IMPORTED_MODULE_23__.allIcons),
            _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_24__.ScrollToModule.forRoot(),
            _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule.forRoot([], { relativeLinkResolution: "legacy" }),
            ngx_youtube_player__WEBPACK_IMPORTED_MODULE_25__.NgxYoutubePlayerModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__.NgbDropdownModule,
            _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_27__.CKEditorModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__.NgbModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__.NgbNavModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_28__.FormsModule,
            ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_17__.SwiperModule,
            ngx_typed_js__WEBPACK_IMPORTED_MODULE_29__.NgxTypedJsModule,
            angularx_flatpickr__WEBPACK_IMPORTED_MODULE_30__.FlatpickrModule.forRoot(),
            angular_count_to__WEBPACK_IMPORTED_MODULE_3__.CountToModule,
            ngx_masonry__WEBPACK_IMPORTED_MODULE_31__.NgxMasonryModule,
            ngx_lightbox__WEBPACK_IMPORTED_MODULE_0__.LightboxModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
        ], angular_feather__WEBPACK_IMPORTED_MODULE_22__.FeatherModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent,
        _shared_header_header_component__WEBPACK_IMPORTED_MODULE_13__.HeaderComponent,
        _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__.FooterComponent,
        _core_components_master_page_master_page_component__WEBPACK_IMPORTED_MODULE_5__.MasterPageComponent,
        _core_components_index_index_component__WEBPACK_IMPORTED_MODULE_6__.IndexComponent,
        _core_components_page_aboutus_page_aboutus_component__WEBPACK_IMPORTED_MODULE_7__.PageAboutusComponent,
        _core_components_page_blog_grid_page_blog_grid_component__WEBPACK_IMPORTED_MODULE_8__.PageBlogGridComponent,
        _core_components_page_comingsoon_page_comingsoon_component__WEBPACK_IMPORTED_MODULE_9__.PageComingsoonComponent,
        _core_components_page_comingsoon2_page_comingsoon2_component__WEBPACK_IMPORTED_MODULE_10__.PageComingsoon2Component,
        _core_components_page_contact_two_page_contact_two_component__WEBPACK_IMPORTED_MODULE_11__.PageContactTwoComponent,
        _core_components_page_blog_detail_two_page_blog_detail_two_component__WEBPACK_IMPORTED_MODULE_12__.PageBlogDetailTwoComponent,
        _shared_switcher_switcher_component__WEBPACK_IMPORTED_MODULE_15__.SwitcherComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__.BrowserAnimationsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule,
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_21__.CarouselModule, angular_feather__WEBPACK_IMPORTED_MODULE_22__.FeatherModule, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_24__.ScrollToModule, _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule, ngx_youtube_player__WEBPACK_IMPORTED_MODULE_25__.NgxYoutubePlayerModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__.NgbDropdownModule,
        _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_27__.CKEditorModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__.NgbModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__.NgbNavModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_28__.FormsModule,
        ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_17__.SwiperModule,
        ngx_typed_js__WEBPACK_IMPORTED_MODULE_29__.NgxTypedJsModule, angularx_flatpickr__WEBPACK_IMPORTED_MODULE_30__.FlatpickrModule, angular_count_to__WEBPACK_IMPORTED_MODULE_3__.CountToModule,
        ngx_masonry__WEBPACK_IMPORTED_MODULE_31__.NgxMasonryModule,
        ngx_lightbox__WEBPACK_IMPORTED_MODULE_0__.LightboxModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule], exports: [angular_feather__WEBPACK_IMPORTED_MODULE_22__.FeatherModule] }); })();


/***/ }),

/***/ 28002:
/*!**********************************************************!*\
  !*** ./src/app/core/components/index/index.component.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndexComponent": function() { return /* binding */ IndexComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-swiper-wrapper */ 15923);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-feather */ 35411);
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ 48994);
/* harmony import */ var ngx_youtube_player__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-youtube-player */ 15622);







function IndexComponent_ng_template_101_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexComponent_ng_template_101_Template_button_click_1_listener() { const modal_r2 = ctx.$implicit; return modal_r2.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "youtube-player", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("videoId", "yba7hPeTSjk");
} }
/**
 * Index Component
 */
class IndexComponent {
    constructor(modalService) {
        this.modalService = modalService;
        /**
         * Nav Bg Class Add
         */
        this.navClass = 'nav-light';
        this.config = {
            a11y: { enabled: true },
            direction: 'horizontal',
            slidesPerView: 1,
            keyboard: true,
            navigation: true,
            pagination: false
        };
        /**
         * Client Testimonial Data
         */
        this.testimonialData = [
            {
                profile: "assets/images/client/01.jpg",
                name: "Thomas Israel",
                designation: "C.E.O",
                message: `" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. "`
            },
            {
                profile: "assets/images/client/02.jpg",
                name: "Barbara McIntosh",
                designation: "M.D",
                message: `" One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others. "`
            },
            {
                profile: "assets/images/client/03.jpg",
                name: "Carl Oliver",
                designation: "P.A",
                message: `" The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. "`
            },
            {
                profile: "assets/images/client/04.jpg",
                name: "Christa Smith",
                designation: "Manager",
                message: `" According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero. "`
            },
            {
                profile: "assets/images/client/05.jpg",
                name: "Dean Tolle",
                designation: "Developer",
                message: `" There is now an abundance of readable dummy texts. These are usually used when a text is required. "`
            },
            {
                profile: "assets/images/client/06.jpg",
                name: "Jill Webb",
                designation: "Designer",
                message: `" Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. "`
            }
        ];
        /**
         * Blog Data
         */
        this.blogData = [
            {
                image: "assets/images/blog/01.jpg",
                title: "Design your apps in your own way",
                like: "33",
                message: "08",
                name: "Calvin Carlo",
                date: "13th August, 2019"
            },
            {
                image: "assets/images/blog/02.jpg",
                title: "How apps is changing the IT world",
                like: "33",
                message: "08",
                name: "Calvin Carlo",
                date: "13th August, 2019"
            },
            {
                image: "assets/images/blog/03.jpg",
                title: "Smartest Applications for Business",
                like: "33",
                message: "08",
                name: "Calvin Carlo",
                date: "13th August, 2019"
            }
        ];
    }
    ngOnInit() {
    }
    /**
      * Open modal for show the video
      * @param content content of modal
      */
    openWindowCustomClass(content) {
        this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg', centered: true });
    }
    onstructor(config) {
        config.interval = 2000;
        config.wrap = true;
        config.keyboard = false;
        config.pauseOnHover = false;
    }
    /**
    * Open modal for show the video
    */
    openModal(content) {
        this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg', centered: true });
    }
    mapView(content) {
        this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg', centered: true });
    }
}
IndexComponent.ɵfac = function IndexComponent_Factory(t) { return new (t || IndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbModal)); };
IndexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IndexComponent, selectors: [["app-index"]], decls: 227, vars: 2, consts: [["id", "home", 1, "swiper-slider-hero", "position-relative", "d-block", "vh-100", 3, "config"], [1, "swiper-slide", "d-flex", "align-items-center", "overflow-hidden"], [1, "slide-inner", "slide-bg-image", "d-flex", "align-items-center", 2, "background-image", "url('assets/images/corporate/1.jpg')"], [1, "bg-overlay"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-12"], [1, "title-heading", "text-center"], [1, "heading", "text-white", "title-dark", "mb-4"], [1, "para-desc", "mx-auto", "text-white-50"], [1, "mt-4", "pt-2"], ["href", "javascript:void(0)", 1, "btn", "btn-primary"], [1, "slide-inner", "slide-bg-image", "d-flex", "align-items-center", 2, "background-image", "url('assets/images/corporate/2.jpg')"], [1, "swiper-button-next", "border", "rounded-circle", "text-center"], [1, "swiper-button-prev", "border", "rounded-circle", "text-center"], [1, "section", "bg-light"], [1, "col-lg-12"], [1, "features-absolute"], [1, "row"], [1, "col-lg-3", "col-md-6", "col-12"], [1, "card", "features", "feature-clean", "explore-feature", "p-4", "px-md-3", "border-0", "rounded-md", "shadow", "text-center"], [1, "icons", "text-primary", "text-center", "mx-auto"], [1, "uil", "uil-airplay", "d-block", "rounded", "h3", "mb-0"], [1, "card-body", "p-0", "content"], [1, "mt-4"], ["href", "javascript:void(0)", 1, "title", "text-dark"], [1, "text-muted"], ["href", "javascript:void(0)", 1, "text-primary"], [1, "uil", "uil-angle-right-b", "align-middle"], [1, "col-lg-3", "col-md-6", "col-12", "mt-4", "mt-md-0", "pt-2", "pt-md-0"], [1, "uil", "uil-clipboard-alt", "d-block", "rounded", "h3", "mb-0"], [1, "col-lg-3", "col-md-6", "col-12", "mt-4", "mt-lg-0", "pt-2", "pt-lg-0"], [1, "uil", "uil-credit-card-search", "d-block", "rounded", "h3", "mb-0"], [1, "uil", "uil-ruler-combined", "d-block", "rounded", "h3", "mb-0"], [1, "container", "mt-100", "mt-60"], [1, "row", "align-items-center"], [1, "col-lg-5", "col-md-5", "mt-4", "pt-2", "mt-sm-0", "pt-sm-0"], [1, "position-relative"], ["src", "assets/images/company/about2.png", "alt", "", 1, "img-fluid", "mx-auto"], [1, "play-icon"], ["href", "javascript:void(0);", 1, "play-btn", "video-play-icon", 3, "click"], [1, "mdi", "mdi-play", "text-primary", "rounded-circle", "bg-white", "shadow"], ["contentmodal", ""], [1, "col-lg-7", "col-md-7", "mt-4", "pt-2", "mt-sm-0", "pt-sm-0"], [1, "section-title", "ms-lg-4"], [1, "title", "mb-4"], [1, "text-primary", "fw-bold"], ["href", "javascript:void(0)", 1, "btn", "btn-primary", "mt-3"], [1, "mdi", "mdi-chevron-right"], [1, "col-12", "text-center"], [1, "section-title", "mb-4", "pb-2"], [1, "text-muted", "para-desc", "mb-0", "mx-auto"], [1, "col-lg-3", "col-md-6", "col-12", "mt-4", "pt-2"], [1, "card", "bg-light", "rounded", "shadow", "border-0"], [1, "card-body", "py-5"], [1, "uil", "uil-rupee-sign", "h1", "text-primary"], [1, "mt-2"], [1, "card-title"], [1, "text-muted", "mt-3", "mb-0"], [1, "uil", "uil-shield", "h1", "text-primary"], [1, "uil", "uil-headphones", "h1", "text-primary"], [1, "uil", "uil-exchange", "h1", "text-primary"], [1, "section"], [1, "col-lg-4", "col-md-6", "mt-4", "pt-2"], [1, "card", "shadow", "rounded", "border-0"], [1, "custom-form", "mt-3"], ["method", "post", "name", "myForm", "onsubmit", "return validateForm()"], ["id", "error-msg", 1, "mb-0"], ["id", "simple-msg"], [1, "col-md-6"], [1, "mb-3"], [1, "form-label"], [1, "text-danger"], [1, "form-icon", "position-relative"], ["name", "user", 1, "fea", "icon-sm", "icons"], ["name", "name", "id", "name", "type", "text", "placeholder", "Name :", 1, "form-control", "ps-5"], ["name", "mail", 1, "fea", "icon-sm", "icons"], ["name", "email", "id", "email", "type", "email", "placeholder", "Email :", 1, "form-control", "ps-5"], ["name", "book", 1, "fea", "icon-sm", "icons"], ["name", "subject", "id", "subject", "placeholder", "subject :", 1, "form-control", "ps-5"], ["name", "message-circle", 1, "fea", "icon-sm", "icons", "clearfix"], ["name", "comments", "id", "comments", "rows", "4", "placeholder", "Message :", 1, "form-control", "ps-5"], [1, "d-grid"], ["type", "submit", "id", "submit", "name", "send", 1, "btn", "btn-primary"], [1, "col-lg-8", "col-md-6", "ps-md-3", "pr-md-3", "mt-4", "pt-2"], [1, "card", "map", "map-height-two", "rounded", "map-gray", "border-0"], [1, "card-body", "p-0"], ["src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin", "allowfullscreen", "", 1, "rounded", 2, "border", "0"], ["href", "javascript: void(0);", "id", "back-to-top", 1, "btn", "btn-icon", "btn-primary", "back-to-top", 3, "ngxScrollTo"], ["name", "arrow-up", 1, "icons"], [1, "modal-header"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["height", "450", "width", "780", 3, "videoId"]], template: function IndexComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "swiper", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Discover the world of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " business ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Get Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Meet our brand ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " new solution ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Contact us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "section", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h5", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Best Financial Advice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " The most well-known which is said to have originated ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Read More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h5", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Authorised Finance Brand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " The most well-known which is said to have originated ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Read More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h5", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Compehensive Advices");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " The most well-known which is said to have originated ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Read More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h5", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Best Tax Advantages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " The most well-known which is said to have originated ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Read More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexComponent_Template_a_click_99_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](102); return ctx.openModal(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](101, IndexComponent_ng_template_101_Template, 6, 1, "ng-template", null, 42, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "h4", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " We are the largest ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " Business expert ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, " Start working with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Landrick");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, " that can provide everything you need to generate awareness, drive traffic, connect. Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content. This is required when, for example, the final text is not yet available. Dummy texts have been in use by typesetters since the 16th century. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Buy Now ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "h4", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Payments Great Features");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "p", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " Start working with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Landrick");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, " that can provide everything you need to generate awareness, drive traffic, connect. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "h5", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, " Low Fees");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "p", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, " If the distribution of letters and 'words' is random, the reader will not be distracted. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "i", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "h5", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, " Safe & Secure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "p", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, " For this reason, dummy text usually consists of a more or less random series of words. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "i", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "h5", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, " Amazing Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "p", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, " This prevents repetitive patterns from impairing the overall visual impression. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "i", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "h5", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, " Convenient & Easy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "p", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, " It is advantageous when the dummy text is relatively realistic so that the layout. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "section", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "h4", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Get In Touch !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "form", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "p", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "label", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Your Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "i-feather", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "input", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "label", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "Your Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "i-feather", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "input", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "label", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "i-feather", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "input", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "label", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "Comments ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](214, "i-feather", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](215, "textarea", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "button", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, " Send Message ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](224, "iframe", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "a", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](226, "i-feather", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.config);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](225);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxScrollTo", "#home");
    } }, directives: [ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_2__.SwiperComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, angular_feather__WEBPACK_IMPORTED_MODULE_4__.FeatherComponent, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_5__.ScrollToDirective, ngx_youtube_player__WEBPACK_IMPORTED_MODULE_6__.YoutubePlayerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmRleC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 89959:
/*!**********************************************************************!*\
  !*** ./src/app/core/components/master-page/master-page.component.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MasterPageComponent": function() { return /* binding */ MasterPageComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/header/header.component */ 89470);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/footer/footer.component */ 45227);




class MasterPageComponent {
    constructor() { }
    ngOnInit() {
    }
    /**
     * Router activation
     */
    onActivate(componentReference) {
        this.addclass = componentReference.navClass;
        this.buttonShow = componentReference.buttonList;
        this.TopbarShow = componentReference.sliderTopbar;
        this.footerClass = componentReference.footerVariant;
        this.developerPage = componentReference.isdeveloper;
        this.hideFooter = componentReference.hideFooter;
        this.shopPages = componentReference.shopPages;
    }
}
MasterPageComponent.ɵfac = function MasterPageComponent_Factory(t) { return new (t || MasterPageComponent)(); };
MasterPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MasterPageComponent, selectors: [["app-master-page"]], decls: 3, vars: 4, consts: [[3, "navClass", "buttonList"], [3, "activate"], [3, "footerVariant", "hideFooter"]], template: function MasterPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "router-outlet", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("activate", function MasterPageComponent_Template_router_outlet_activate_1_listener($event) { return ctx.onActivate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-footer", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("navClass", ctx.addclass)("buttonList", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("footerVariant", ctx.footerClass)("hideFooter", ctx.hideFooter);
    } }, directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYXN0ZXItcGFnZS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 75296:
/*!************************************************************************!*\
  !*** ./src/app/core/components/page-aboutus/page-aboutus.component.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageAboutusComponent": function() { return /* binding */ PageAboutusComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _shared_features_features_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/features/features.component */ 21717);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ 48994);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-feather */ 35411);







function PageAboutusComponent_ng_template_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PageAboutusComponent_ng_template_31_Template_button_click_1_listener() { const modal_r3 = ctx.$implicit; return modal_r3.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "iframe", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PageAboutusComponent_div_70_a_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i-feather", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("name", item_r7);
} }
function PageAboutusComponent_div_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, PageAboutusComponent_div_70_a_7_Template, 2, 1, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h5", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "small", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", data_r5.profile, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", data_r5.list);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r5.designation);
} }
;
/**
 * Aboutus Component
 */
class PageAboutusComponent {
    constructor(modalService) {
        this.modalService = modalService;
        /**
         * Member Data
         */
        this.memberData = [
            {
                profile: "assets/images/client/01.jpg",
                list: ['facebook', "instagram", "twitter", "linkedin"],
                name: "Ronny Jofra",
                designation: "C.E.O"
            },
            {
                profile: "assets/images/client/04.jpg",
                list: ["facebook", "instagram", "twitter", "linkedin"],
                name: "Micheal Carlo",
                designation: "Director"
            },
            {
                profile: "assets/images/client/02.jpg",
                list: ["facebook", "instagram", "twitter", "linkedin"],
                name: "Aliana Rosy",
                designation: "Manager"
            },
            {
                profile: "assets/images/client/03.jpg",
                list: ["facebook", "instagram", "twitter", "linkedin"],
                name: "Sofia Razaq",
                designation: "Developer"
            }
        ];
    }
    ngOnInit() {
    }
    /**
    * Open modal for show the video
    * @param content content of modal
    */
    openWindowCustomClass(content) {
        this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg', centered: true });
    }
}
PageAboutusComponent.ɵfac = function PageAboutusComponent_Factory(t) { return new (t || PageAboutusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal)); };
PageAboutusComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PageAboutusComponent, selectors: [["app-page-aboutus"]], decls: 89, vars: 2, consts: [["id", "home", 1, "bg-half", "bg-light", "d-table", "w-100"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-12", "text-center"], [1, "page-next-level"], [1, "title"], [1, "page-next"], ["aria-label", "breadcrumb", 1, "d-inline-block"], [1, "breadcrumb", "bg-white", "rounded", "shadow", "mb-0"], [1, "breadcrumb-item"], ["routerLink", "/index"], ["href", "javascript:void(0)"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "position-relative"], [1, "shape", "overflow-hidden", "text-white"], ["viewBox", "0 0 2880 48", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z", "fill", "currentColor"], [1, "section"], [1, "row", "align-items-center"], [1, "col-lg-5", "col-md-5", "mt-4", "pt-2", "mt-sm-0", "pt-sm-0"], ["src", "assets/images/company/about.jpg", "alt", "", 1, "rounded", "img-fluid", "mx-auto", "d-block"], [1, "play-icon"], ["href", "javascript:void(0);", "data-type", "youtube", "data-id", "yba7hPeTSjk", 1, "play-btn", 3, "click"], [1, "mdi", "mdi-play", "text-primary", "rounded-circle", "bg-white", "shadow"], ["content", ""], [1, "col-lg-7", "col-md-7", "mt-4", "pt-2", "mt-sm-0", "pt-sm-0"], [1, "section-title", "ms-lg-4"], [1, "title", "mb-4"], [1, "text-muted"], [1, "text-primary", "fw-bold"], ["href", "javascript:void(0)", 1, "btn", "btn-primary", "mt-3"], [1, "uil", "uil-angle-right-b"], [1, "container", "mt-100", "mt-60"], [1, "col-12", "text-center"], [1, "section-title", "mb-4", "pb-2"], [1, "text-muted", "para-desc", "mx-auto", "mb-0"], [1, "section", "bg-light"], [1, "row"], ["class", "col-lg-3 col-md-6 mt-4 pt-2", 4, "ngFor", "ngForOf"], [1, "section-title"], [1, "text-muted", "para-desc", "mx-auto"], [1, "mt-4"], ["href", "javascript:void(0)", 1, "btn", "btn-primary", "mt-2", "me-2"], ["href", "javascript:void(0)", 1, "btn", "btn-outline-primary", "mt-2"], ["href", "javascript: void(0);", "id", "back-to-top", 1, "btn", "btn-icon", "btn-primary", "back-to-top", 3, "ngxScrollTo"], ["name", "arrow-up", 1, "icons"], [1, "modal-header"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["src", "https://player.vimeo.com/video/99025203", "height", "450", "width", "780", "frameborder", "0", "allowfullscreen", "", "allow", "autoplay; encrypted-media"], [1, "col-lg-3", "col-md-6", "mt-4", "pt-2"], [1, "card", "team", "text-center", "bg-transparent", "border-0"], [1, "card-body", "p-0"], ["alt", "", 1, "img-fluid", "avatar", "avatar-ex-large", "rounded-circle", 3, "src"], [1, "list-unstyled", "social-icon", "team-icon", "mb-0", "mt-4"], [1, "list-inline-item"], ["href", "javascript:void(0)", "class", "rounded ms-1", 4, "ngFor", "ngForOf"], [1, "content", "pt-3", "pb-3"], [1, "mb-0"], ["href", "javascript:void(0)", 1, "name", "text-dark"], [1, "designation", "text-muted"], ["href", "javascript:void(0)", 1, "rounded", "ms-1"], [1, "fea", "icon-sm", "fea-social", 3, "name"]], template: function PageAboutusComponent_Template(rf, ctx) { if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " About us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "nav", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Landrick");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "svg", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "section", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PageAboutusComponent_Template_a_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](32); return ctx.openWindowCustomClass(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, PageAboutusComponent_ng_template_31_Template, 6, 0, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "h4", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Our Story");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Start working with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Landrick");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, " that can provide everything you need to generate awareness, drive traffic, connect. Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content. This is required when, for example, the final text is not yet available. Dummy texts have been in use by typesetters since the 16th century.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Buy Now ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "h4", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Key Features");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "p", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Start working with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Landrick");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, " that can provide everything you need to generate awareness, drive traffic, connect.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "app-features");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "section", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "h4", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Our Greatest Minds");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "p", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Start working with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Landrick");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, " that can provide everything you need to generate awareness, drive traffic, connect.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](70, PageAboutusComponent_div_70_Template, 14, 4, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "h4", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "See everything about your employee at one place.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Start working with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Landrick");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, " that can provide everything you need to generate awareness, drive traffic, connect.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "Get Started Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "Free Trial");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](88, "i-feather", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.memberData);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxScrollTo", "#home");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _shared_features_features_component__WEBPACK_IMPORTED_MODULE_0__.FeaturesComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_5__.ScrollToDirective, angular_feather__WEBPACK_IMPORTED_MODULE_6__.FeatherComponent], styles: [".dark-modal .modal-content {\r\n  background-color: #000000;\r\n  color: white;\r\n  background: none;\r\n  border: none;\r\n  }\r\n    .dark-modal .modal-header {\r\n  border : none\r\n  }\r\n    .dark-modal .close {\r\n  color: white;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UtYWJvdXR1cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQSxZQUFZO0VBQ1oiLCJmaWxlIjoicGFnZS1hYm91dHVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLmRhcmstbW9kYWwgLm1vZGFsLWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxuICA6Om5nLWRlZXAgLmRhcmstbW9kYWwgLm1vZGFsLWhlYWRlciB7XHJcbiAgYm9yZGVyIDogbm9uZVxyXG4gIH1cclxuICA6Om5nLWRlZXAgLmRhcmstbW9kYWwgLmNsb3NlIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgfSJdfQ== */"] });


/***/ }),

/***/ 73380:
/*!****************************************************************************************!*\
  !*** ./src/app/core/components/page-blog-detail-two/page-blog-detail-two.component.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageBlogDetailTwoComponent": function() { return /* binding */ PageBlogDetailTwoComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-feather */ 35411);
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ 48994);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);





/**
 * page Blog-Detail-Two Component
 */
class PageBlogDetailTwoComponent {
    constructor() {
        /**
         * Nav Light Class Add
         */
        this.navClass = 'nav-light';
    }
    ngOnInit() {
    }
}
PageBlogDetailTwoComponent.ɵfac = function PageBlogDetailTwoComponent_Factory(t) { return new (t || PageBlogDetailTwoComponent)(); };
PageBlogDetailTwoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageBlogDetailTwoComponent, selectors: [["app-page-blog-detail-two"]], decls: 169, vars: 5, consts: [["id", "home", 1, "bg-half", "d-table", "w-100", 2, "background", "url('assets/images/1.jpg') center center"], [1, "bg-overlay"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-12", "text-center"], [1, "page-next-level"], [1, "title", "text-white", "title-dark"], [1, "page-next"], ["aria-label", "breadcrumb", 1, "d-inline-block"], [1, "breadcrumb", "bg-white", "rounded", "shadow", "mb-0"], [1, "breadcrumb-item"], ["routerLink", "/index"], ["href", "javascript:void(0)"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "position-relative"], [1, "shape", "overflow-hidden", "text-white"], ["viewBox", "0 0 2880 48", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z", "fill", "currentColor"], [1, "section"], [1, "col-lg-10"], [1, "row"], [1, "col-md-2", "d-none", "d-md-block"], [1, "list-unstyled", "text-center", "sticky-bar", "social-icon", "mb-0"], [1, "mb-3", "h6"], ["href", "javascript:void(0)", 1, "rounded"], ["name", "facebook", 1, "fea", "icon-sm", "fea-social"], ["name", "instagram", 1, "fea", "icon-sm", "fea-social"], ["name", "twitter", 1, "fea", "icon-sm", "fea-social"], ["name", "linkedin", 1, "fea", "icon-sm", "fea-social"], [1, "col-md-10"], [1, "text-muted"], [1, "list-unstyled", "d-flex", "justify-content-between", "mt-4"], [1, "list-inline-item", "user", "me-2"], ["href", "javascript:void(0)", 1, "text-muted"], [1, "uil", "uil-user", "text-dark"], [1, "list-inline-item", "date", "text-muted"], [1, "uil", "uil-calendar-alt", "text-dark"], ["src", "assets/images/blog/bg1.jpg", "alt", "", 1, "img-fluid", "rounded-md", "shadow"], [1, "mt-4"], [1, "media-list", "list-unstyled", "mb-0"], [1, "d-flex", "justify-content-between"], [1, "d-flex", "align-items-center"], ["href", "#", 1, "pe-3"], ["src", "assets/images/client/01.jpg", "alt", "img", 1, "img-fluid", "avatar", "avatar-md-sm", "rounded-circle", "shadow"], [1, "flex-1", "commentor-detail"], [1, "mb-0"], ["href", "javascript:void(0)", 1, "text-dark", "media-heading"], [1, "text-muted", 3, "ngxScrollTo"], [1, "mdi", "mdi-reply"], [1, "mt-3"], [1, "text-muted", "fst-italic", "p-3", "bg-light", "rounded"], ["src", "assets/images/client/02.jpg", "alt", "img", 1, "img-fluid", "avatar", "avatar-md-sm", "rounded-circle", "shadow"], ["href", "javascript:void(0)", 1, "media-heading", "text-dark"], ["src", "assets/images/client/03.jpg", "alt", "img", 1, "img-fluid", "avatar", "avatar-md-sm", "rounded-circle", "shadow"], [1, "list-unstyled", "ps-4", "ps-md-5", "sub-comment"], [1, "col-md-12"], [1, "mb-3"], [1, "form-label"], [1, "form-icon", "position-relative"], ["name", "message-circle", 1, "fea", "icon-sm", "icons"], ["id", "message", "placeholder", "Your Comment", "rows", "5", "name", "message", "required", "", 1, "form-control", "ps-5"], [1, "col-lg-6"], [1, "text-danger"], ["name", "user", 1, "fea", "icon-sm", "icons"], ["id", "name", "name", "name", "type", "text", "placeholder", "Name", "required", "", 1, "form-control", "ps-5"], ["name", "mail", 1, "fea", "icon-sm", "icons"], ["id", "email", "type", "email", "placeholder", "Email", "name", "email", "required", "", 1, "form-control", "ps-5"], [1, "send", "d-grid"], ["type", "submit", 1, "btn", "btn-primary"], ["href", "javascript: void(0);", "id", "back-to-top", 1, "btn", "btn-icon", "btn-primary", "back-to-top", 3, "ngxScrollTo"], ["name", "arrow-up", 1, "icons"]], template: function PageBlogDetailTwoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Smartest Applications for ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Your Business ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nav", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Landrick");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Blog Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "svg", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "section", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ul", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Share");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i-feather", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i-feather", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i-feather", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i-feather", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics when writing melodies in order to have a 'ready-made' text to sing with the melody.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "ul", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Calvin Carlo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " 13th August, 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h5", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Mornings contain the secret to an extraordinarily successful life");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact and readability of the typefaces (typography), or the distribution of text on the page (layout or type area).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h5", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Comments :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "ul", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h6", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Lorenzo Peterson");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "small", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "15th August, 2019 at 01:25 pm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " Reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "\" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour \"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "li", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "img", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "h6", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Tammy Camacho");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "small", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "15th August, 2019 at 05:44 pm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " Reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "p", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "\" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour \"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "li", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "img", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "h6", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Tammy Camacho");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "small", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "16th August, 2019 at 03:44 pm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " Reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "p", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "\" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour \"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "ul", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "li", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "h6", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Lorenzo Peterson");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "small", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "17th August, 2019 at 01:25 pm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, " Reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "p", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "\" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour \"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "h5", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Leave A Comment :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "form", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "label", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Your Comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "i-feather", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "textarea", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "label", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "i-feather", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "input", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "label", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Your Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "i-feather", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "input", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "button", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Send Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "a", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "i-feather", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxScrollTo", "#home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxScrollTo", "#home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxScrollTo", "#home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxScrollTo", "#home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxScrollTo", "#home");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, angular_feather__WEBPACK_IMPORTED_MODULE_2__.FeatherComponent, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_3__.ScrollToDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWJsb2ctZGV0YWlsLXR3by5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 62828:
/*!****************************************************************************!*\
  !*** ./src/app/core/components/page-blog-grid/page-blog-grid.component.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageBlogGridComponent": function() { return /* binding */ PageBlogGridComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ 48994);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-feather */ 35411);





function PageBlogGridComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Read More ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "small", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "small", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", data_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.like);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r1.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r1.date, "");
} }
;
/**
 * Page Blog-Grid Component
 */
class PageBlogGridComponent {
    constructor() {
        /**
         * Blog Data
         */
        this.blogGridData = [
            {
                image: "assets/images/blog/01.jpg",
                title: "Design your apps in your own way",
                like: "33",
                message: "08",
                name: "Calvin Carlo",
                date: "13th August, 2019"
            },
            {
                image: "assets/images/blog/02.jpg",
                title: "How apps is changing the IT world",
                like: "33",
                message: "08",
                name: "Calvin Carlo",
                date: "13th August, 2019"
            },
            {
                image: "assets/images/blog/03.jpg",
                title: "Smartest Applications for Business",
                like: "33",
                message: "08",
                name: "Calvin Carlo",
                date: "13th August, 2019"
            },
            {
                image: "assets/images/blog/04.jpg",
                title: "How apps is changing the IT world",
                like: "33",
                message: "08",
                name: "Calvin Carlo",
                date: "13th August, 2019"
            },
            {
                image: "assets/images/blog/05.jpg",
                title: "Design your apps in your own way",
                like: "33",
                message: "08",
                name: "Calvin Carlo",
                date: "13th August, 2019"
            },
            {
                image: "assets/images/blog/06.jpg",
                title: "Smartest Applications for Business",
                like: "33",
                message: "08",
                name: "Calvin Carlo",
                date: "13th August, 2019"
            },
            {
                image: "assets/images/blog/07.jpg",
                title: "Design your apps in your own way",
                like: "33",
                message: "08",
                name: "Calvin Carlo",
                date: "13th August, 2019"
            },
            {
                image: "assets/images/blog/08.jpg",
                title: "Smartest Applications for Business",
                like: "33",
                message: "08",
                name: "Calvin Carlo",
                date: "13th August, 2019"
            }
        ];
    }
    ngOnInit() {
    }
}
PageBlogGridComponent.ɵfac = function PageBlogGridComponent_Factory(t) { return new (t || PageBlogGridComponent)(); };
PageBlogGridComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageBlogGridComponent, selectors: [["app-page-blog-grid"]], decls: 48, vars: 2, consts: [["id", "home", 1, "bg-half", "bg-light", "d-table", "w-100"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-12", "text-center"], [1, "page-next-level"], [1, "title"], [1, "page-next"], ["aria-label", "breadcrumb", 1, "d-inline-block"], [1, "breadcrumb", "bg-white", "rounded", "shadow", "mb-0"], [1, "breadcrumb-item"], ["routerLink", "/index"], ["href", "javascript:void(0)"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "position-relative"], [1, "shape", "overflow-hidden", "text-white"], ["viewBox", "0 0 2880 48", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z", "fill", "currentColor"], [1, "section"], [1, "row"], ["class", "col-lg-4 col-md-6 mb-4 pb-2", 4, "ngFor", "ngForOf"], [1, "col-12"], [1, "pagination", "justify-content-center", "mb-0"], [1, "page-item"], ["href", "javascript:void(0)", "aria-label", "Previous", 1, "page-link"], [1, "page-item", "active"], ["href", "javascript:void(0)", 1, "page-link"], ["href", "javascript:void(0)", "aria-label", "Next", 1, "page-link"], ["href", "javascript: void(0);", "id", "back-to-top", 1, "btn", "btn-icon", "btn-primary", "back-to-top", 3, "ngxScrollTo"], ["name", "arrow-up", 1, "icons"], [1, "col-lg-4", "col-md-6", "mb-4", "pb-2"], [1, "card", "blog", "rounded", "border-0", "shadow", "overflow-hidden"], ["alt", "...", 1, "card-img-top", 3, "src"], [1, "overlay", "rounded-top", "bg-dark"], [1, "card-body", "content"], ["href", "javascript:void(0)", 1, "card-title", "title", "text-dark"], [1, "post-meta", "d-flex", "justify-content-between", "mt-3"], [1, "list-unstyled", "mb-0"], [1, "list-inline-item", "me-2", "mb-0"], ["href", "javascript:void(0)", 1, "text-muted", "like"], [1, "uil", "uil-heart", "me-1"], [1, "list-inline-item"], ["href", "javascript:void(0)", 1, "text-muted", "comments"], [1, "uil", "uil-comment", "me-1"], ["routerLink", "/page-blog-detail", 1, "text-muted", "readmore"], [1, "uil", "uil-angle-right-b", "align-middle"], [1, "author"], [1, "text-light", "user", "d-block"], [1, "uil", "uil-user"], [1, "text-light", "date"], [1, "uil", "uil-calendar-alt"]], template: function PageBlogGridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Blog ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nav", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Landrick");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Blog Grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "svg", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "section", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, PageBlogGridComponent_div_28_Template, 29, 6, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ul", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i-feather", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.blogGridData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxScrollTo", "#home");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_3__.ScrollToDirective, angular_feather__WEBPACK_IMPORTED_MODULE_4__.FeatherComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWJsb2ctZ3JpZC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 55292:
/*!******************************************************************************!*\
  !*** ./src/app/core/components/page-comingsoon/page-comingsoon.component.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageComingsoonComponent": function() { return /* binding */ PageComingsoonComponent; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 20945);
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/operators */ 91295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-feather */ 35411);





/**
 * Page ComingSoon Component
 */
class PageComingsoonComponent {
    constructor() { }
    ngOnInit() {
        this._trialEndsAt = "2022-12-24";
        (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.interval)(3000).pipe((0,rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__.map)((x) => {
            this._diff = Date.parse(this._trialEndsAt) - Date.parse(new Date().toString());
        })).subscribe((x) => {
            this._days = this.getDays(this._diff);
            this._hours = this.getHours(this._diff);
            this._minutes = this.getMinutes(this._diff);
            this._seconds = this.getSeconds(this._diff);
        });
    }
    /**
     * Get Date & Time
     */
    getDays(t) {
        return Math.floor(t / (1000 * 60 * 60 * 24));
    }
    getHours(t) {
        return Math.floor((t / (1000 * 60 * 60)) % 24);
    }
    getMinutes(t) {
        return Math.floor((t / 1000 / 60) % 60);
    }
    getSeconds(t) {
        return Math.floor((t / 1000) % 60);
    }
}
PageComingsoonComponent.ɵfac = function PageComingsoonComponent_Factory(t) { return new (t || PageComingsoonComponent)(); };
PageComingsoonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PageComingsoonComponent, selectors: [["app-page-comingsoon"]], decls: 43, vars: 4, consts: [[1, "back-to-home", "rounded", "d-none", "d-sm-block"], ["routerLink", "/index", 1, "btn", "btn-icon", "btn-primary"], ["name", "home", 1, "icons"], ["data-jarallax", "{\"speed\": 0.5}", 1, "bg-home", "d-flex", "align-items-center", 2, "background-image", "url('assets/images/comingsoon.jpg')"], [1, "bg-overlay"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-8", "col-md-12", "text-center"], ["href", "javascript:void(0)", 1, "logo", "h5"], ["src", "assets/images/logo-light.png", "height", "24", "alt", ""], [1, "text-uppercase", "title-dark", "text-white", "mt-2", "mb-4", "coming-soon"], [1, "text-light", "para-desc", "para-dark", "mx-auto"], [1, "text-primary", "font-weight-bold"], [1, "row"], [1, "col-md-12", "text-center"], ["id", "countdown"], [1, "count-down", "list-unstyled"], ["id", "days", 1, "count-number", "list-inline-item", "m-2"], [1, "count-head"], ["id", "hours", 1, "count-number", "list-inline-item", "m-2"], ["id", "mins", 1, "count-number", "list-inline-item", "m-2"], ["id", "secs", 1, "count-number", "list-inline-item", "m-2"], ["id", "end", 1, "h1"], ["routerLink", "/index", 1, "btn", "btn-primary", "mt-4"], [1, "mdi", "mdi-backup-restore"]], template: function PageComingsoonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i-feather", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "We're Coming soon...");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Start working with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Landrick");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " that can provide everything you need to generate awareness, drive traffic, connect.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "ul", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Days");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Minutes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Seconds");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, " Go Back Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx._days);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx._hours);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx._minutes);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx._seconds);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, angular_feather__WEBPACK_IMPORTED_MODULE_4__.FeatherComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWNvbWluZ3Nvb24uY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 14437:
/*!********************************************************************************!*\
  !*** ./src/app/core/components/page-comingsoon2/page-comingsoon2.component.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageComingsoon2Component": function() { return /* binding */ PageComingsoon2Component; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 20945);
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/operators */ 91295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-feather */ 35411);
/* harmony import */ var ngx_typed_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-typed-js */ 23192);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);








function PageComingsoon2Component_ng_template_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Subscribe Me");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageComingsoon2Component_ng_template_46_Template_button_click_3_listener() { const modal_r2 = ctx.$implicit; return modal_r2.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "We are comingsoon. Please, Enter your mail id and subscribe.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Subscribe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["We are Coming soon...", "We are Be Ready to", "We are Connected with us"]; };
/**
 * Page CommingSoon2 Component
 */
class PageComingsoon2Component {
    constructor(modalService) {
        this.modalService = modalService;
    }
    ngOnInit() {
        this._trialEndsAt = '2022-12-24';
        (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.interval)(3000).pipe((0,rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__.map)((x) => {
            this._diff = Date.parse(this._trialEndsAt) - Date.parse(new Date().toString());
        })).subscribe((x) => {
            this._days = this.getDays(this._diff);
            this._hours = this.getHours(this._diff);
            this._minutes = this.getMinutes(this._diff);
            this._seconds = this.getSeconds(this._diff);
        });
    }
    /**
     * Get Date & Time
     */
    getDays(t) {
        return Math.floor(t / (1000 * 60 * 60 * 24));
    }
    getHours(t) {
        return Math.floor((t / (1000 * 60 * 60)) % 24);
    }
    getMinutes(t) {
        return Math.floor((t / 1000 / 60) % 60);
    }
    getSeconds(t) {
        return Math.floor((t / 1000) % 60);
    }
    /***
     * Model open
     */
    open(content) {
        this.modalService.open(content, { centered: true });
    }
}
PageComingsoon2Component.ɵfac = function PageComingsoon2Component_Factory(t) { return new (t || PageComingsoon2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModal)); };
PageComingsoon2Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageComingsoon2Component, selectors: [["app-page-comingsoon2"]], decls: 48, vars: 9, consts: [[1, "back-to-home", "rounded", "d-none", "d-sm-block"], ["routerLink", "/index", 1, "btn", "btn-icon", "btn-primary"], ["name", "home", 1, "icons"], ["data-jarallax", "{\"speed\": 0.5}", "id", "home", 1, "bg-home", "bg-animation-left", "dark-left", "d-flex", "align-items-center", 2, "background-image", "url('assets/images/comingsoon2.jpg')"], ["id", "video", 1, "player"], ["autoplay", "", "muted", "", "loop", "", "id", "myVideo"], ["src", "http://techslides.com/demos/sample-videos/small.mp4"], [1, "container", "position-relative", "text-md-left", 2, "z-index", "1"], [1, "row"], [1, "col-md-12"], ["href", "javascript:void(0)", 1, "logo", "h5"], ["src", "assets/images/logo-light.png", "height", "24", "alt", ""], [1, "text-uppercase", "text-white", "title-dark", "mt-2", "mb-4", "coming-soon"], [3, "strings", "shuffle", "typeSpeed", "loop"], [1, "element", "typing"], [1, "text-light", "para-dark", "para-desc"], [1, "font-weight-bold"], ["id", "countdown"], [1, "count-down", "list-unstyled"], ["id", "days", 1, "count-number", "list-inline-item", "m-2"], [1, "count-head"], ["id", "hours", 1, "count-number", "list-inline-item", "m-2"], ["id", "mins", 1, "count-number", "list-inline-item", "m-2"], ["id", "secs", 1, "count-number", "list-inline-item", "m-2"], ["id", "end", 1, "h1"], ["href", "javascript:void(0)", "data-toggle", "modal", "data-target", "#LoginForm", 1, "btn", "btn-primary", "mt-4", "me-2", 3, "click"], [1, "mdi", "mdi-check"], ["content", ""], [1, "modal-header"], ["id", "exampleModalCenterTitle", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "bg-white", "p-3", "rounded", "box-shadow"], [1, "form-group", "mb-0"], [1, "input-group"], ["name", "email", "id", "email", "type", "email", "placeholder", "Your Email :", "required", "", "aria-describedby", "newssubscribebtn", 1, "form-control"], [1, "input-group-append"], ["type", "submit", "id", "paypalmail", 1, "btn", "btn-primary", "submitBnt"]], template: function PageComingsoon2Component_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i-feather", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "video", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "source", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h1", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ngx-typed-js", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Start working with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Landrick");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " that can provide everything you need to generate awareness, drive traffic, connect.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ul", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Days");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Minutes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Seconds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageComingsoon2Component_Template_a_click_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](47); return ctx.open(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Notify Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, PageComingsoon2Component_ng_template_46_Template, 17, 0, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("strings", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0))("shuffle", true)("typeSpeed", 80)("loop", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx._days);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx._hours);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx._minutes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx._seconds);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, angular_feather__WEBPACK_IMPORTED_MODULE_5__.FeatherComponent, ngx_typed_js__WEBPACK_IMPORTED_MODULE_6__.NgxTypedJsComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm], styles: ["#myVideo[_ngcontent-%COMP%] {\n    position: fixed;\n    right: 0;\n    bottom: 0;\n    min-width: 100%;\n    min-height: 100%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UtY29taW5nc29vbjIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixRQUFRO0lBQ1IsU0FBUztJQUNULGVBQWU7SUFDZixnQkFBZ0I7RUFDbEIiLCJmaWxlIjoicGFnZS1jb21pbmdzb29uMi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI215VmlkZW8ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIH0iXX0= */"] });


/***/ }),

/***/ 94952:
/*!********************************************************************************!*\
  !*** ./src/app/core/components/page-contact-two/page-contact-two.component.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageContactTwoComponent": function() { return /* binding */ PageContactTwoComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-feather */ 35411);
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ 48994);





function PageContactTwoComponent_ng_template_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageContactTwoComponent_ng_template_87_Template_button_click_1_listener() { const modal_r2 = ctx.$implicit; return modal_r2.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "iframe", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
/**
 * Page Contact-Two Component
 */
class PageContactTwoComponent {
    constructor(modalService) {
        this.modalService = modalService;
    }
    ngOnInit() {
    }
    mapView(content) {
        this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg', centered: true });
    }
}
PageContactTwoComponent.ɵfac = function PageContactTwoComponent_Factory(t) { return new (t || PageContactTwoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbModal)); };
PageContactTwoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageContactTwoComponent, selectors: [["app-page-contact-two"]], decls: 91, vars: 1, consts: [["id", "home", 1, "section", "pt-5", "mt-4"], [1, "container-fluid"], [1, "row"], [1, "col-12", "p-0"], [1, "card", "map", "border-0"], [1, "card-body", "p-0"], ["src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin", "allowfullscreen", "", 2, "border", "0"], [1, "container", "mt-100", "mt-60"], [1, "row", "align-items-center"], [1, "col-lg-5", "col-md-6", "mt-4", "mt-sm-0", "pt-2", "pt-sm-0", "order-2", "order-md-1"], [1, "card", "custom-form", "rounded", "border-0", "shadow", "p-4"], ["method", "post", "name", "myForm", "onsubmit", "return validateForm()"], ["id", "error-msg", 1, "mb-0"], ["id", "simple-msg"], [1, "col-md-6"], [1, "mb-3"], [1, "form-label"], [1, "text-danger"], [1, "form-icon", "position-relative"], ["name", "user", 1, "fea", "icon-sm", "icons"], ["name", "name", "id", "name", "type", "text", "placeholder", "Name :", 1, "form-control", "ps-5"], ["name", "mail", 1, "fea", "icon-sm", "icons"], ["name", "email", "id", "email", "type", "email", "placeholder", "Email :", 1, "form-control", "ps-5"], [1, "col-12"], ["name", "book", 1, "fea", "icon-sm", "icons"], ["name", "subject", "id", "subject", "placeholder", "subject :", 1, "form-control", "ps-5"], ["name", "message-circle", 1, "fea", "icon-sm", "icons", "clearfix"], ["name", "comments", "id", "comments", "rows", "4", "placeholder", "Message :", 1, "form-control", "ps-5"], [1, "d-grid"], ["type", "submit", "id", "submit", "name", "send", 1, "btn", "btn-primary"], [1, "col-lg-7", "col-md-6", "order-1", "order-md-2"], [1, "title-heading", "ms-lg-4"], [1, "mb-4"], [1, "text-muted"], [1, "text-primary", "fw-bold"], [1, "d-flex", "contact-detail", "align-items-center", "mt-3"], [1, "icon"], ["name", "mail", 1, "fea", "icon-m-md", "text-dark", "me-3"], [1, "flex-1", "content"], [1, "title", "fw-bold", "mb-0"], ["href", "mailto:contact@example.com", 1, "text-primary"], ["name", "phone", 1, "fea", "icon-m-md", "text-dark", "me-3"], ["href", "tel:+152534-468-854", 1, "text-primary"], ["name", "map-pin", 1, "fea", "icon-m-md", "text-dark", "me-3"], ["data-type", "iframe", 1, "video-play-icon", "text-primary", 3, "click"], ["content", ""], ["href", "javascript: void(0);", "id", "back-to-top", 1, "btn", "btn-icon", "btn-primary", "back-to-top", 3, "ngxScrollTo"], ["name", "arrow-up", 1, "icons"], [1, "modal-header"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin", "height", "450", "width", "750"]], template: function PageContactTwoComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "iframe", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Your Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i-feather", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Your Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i-feather", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i-feather", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Comments ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i-feather", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "textarea", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Send Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h4", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Contact Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Start working with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Landrick");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " that can provide everything you need to generate awareness, drive traffic, connect.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "i-feather", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h6", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "contact@example.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "i-feather", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h6", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "+152 534-468-854");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "i-feather", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h6", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageContactTwoComponent_Template_a_click_85_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](88); return ctx.mapView(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "View on Google map");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](87, PageContactTwoComponent_ng_template_87_Template, 6, 0, "ng-template", null, 45, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "i-feather", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxScrollTo", "#home");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, angular_feather__WEBPACK_IMPORTED_MODULE_3__.FeatherComponent, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_4__.ScrollToDirective], styles: [".dark-modal .modal-content {\n    background-color: #000000;\n    color: white;\n    background: none;\n    border: none;\n}\n\n  .dark-modal .modal-header {\n    border: none\n}\n\n  .dark-modal .close {\n    color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UtY29udGFjdC10d28uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJwYWdlLWNvbnRhY3QtdHdvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLmRhcmstbW9kYWwgLm1vZGFsLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG46Om5nLWRlZXAgLmRhcmstbW9kYWwgLm1vZGFsLWhlYWRlciB7XG4gICAgYm9yZGVyOiBub25lXG59XG5cbjo6bmctZGVlcCAuZGFyay1tb2RhbCAuY2xvc2Uge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */"] });


/***/ }),

/***/ 62891:
/*!***********************************************!*\
  !*** ./src/app/shared/blog/blog.component.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogComponent": function() { return /* binding */ BlogComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);



function BlogComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Read More ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", data_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.like);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r1.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r1.date, "");
} }
class BlogComponent {
    constructor() { }
    ngOnInit() {
    }
}
BlogComponent.ɵfac = function BlogComponent_Factory(t) { return new (t || BlogComponent)(); };
BlogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogComponent, selectors: [["app-blog"]], inputs: { blogData: "blogData" }, decls: 2, vars: 1, consts: [[1, "row"], ["class", "col-lg-4 col-md-6 mt-4 pt-2", 4, "ngFor", "ngForOf"], [1, "col-lg-4", "col-md-6", "mt-4", "pt-2"], [1, "card", "blog", "rounded", "border-0", "shadow"], [1, "position-relative"], ["alt", "...", 1, "card-img-top", "rounded-top", 3, "src"], [1, "overlay", "rounded-top", "bg-dark"], [1, "card-body", "content"], ["href", "javascript:void(0)", 1, "card-title", "title", "text-dark"], [1, "post-meta", "d-flex", "justify-content-between", "mt-3"], [1, "list-unstyled", "mb-0"], [1, "list-inline-item", "me-2", "mb-0"], ["href", "javascript:void(0)", 1, "text-muted", "like"], [1, "uil", "uil-heart", "me-1"], [1, "list-inline-item"], ["href", "javascript:void(0)", 1, "text-muted", "comments"], [1, "uil", "uil-comment", "me-1"], ["routerLink", "/page-blog-detail", "href", "javascript:void(0);", 1, "text-muted", "readmore"], [1, "uil", "uil-angle-right-b"], [1, "author"], [1, "text-light", "user", "d-block"], [1, "uil", "uil-user"], [1, "text-light", "date"], [1, "uil", "uil-calendar-alt"]], template: function BlogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BlogComponent_div_1_Template, 29, 6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.blogData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9nLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 45229:
/*!***************************************************************!*\
  !*** ./src/app/shared/clients-logo/clients-logo.component.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientsLogoComponent": function() { return /* binding */ ClientsLogoComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 38583);


function ClientsLogoComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", data_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
;
class ClientsLogoComponent {
    constructor() {
        /**
         * Clients Logo
         */
        this.clients_logo = [
            {
                image: "assets/images/client/amazon.svg"
            },
            {
                image: "assets/images/client/google.svg"
            },
            {
                image: "assets/images/client/lenovo.svg"
            },
            {
                image: "assets/images/client/paypal.svg"
            },
            {
                image: "assets/images/client/shopify.svg"
            },
            {
                image: "assets/images/client/spotify.svg"
            }
        ];
    }
    ngOnInit() {
    }
}
ClientsLogoComponent.ɵfac = function ClientsLogoComponent_Factory(t) { return new (t || ClientsLogoComponent)(); };
ClientsLogoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClientsLogoComponent, selectors: [["app-clients-logo"]], decls: 2, vars: 1, consts: [[1, "row", "justify-content-center"], ["class", "col-lg-2 col-md-2 col-6 text-center", 4, "ngFor", "ngForOf"], [1, "col-lg-2", "col-md-2", "col-6", "text-center"], ["alt", "", 1, "avatar", "avatar-ex-sm", 3, "src"]], template: function ClientsLogoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ClientsLogoComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.clients_logo);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnRzLWxvZ28uY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 87885:
/*!*****************************************************************************!*\
  !*** ./src/app/shared/customer-testmonial/customer-testmonial.component.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerTestmonialComponent": function() { return /* binding */ CustomerTestmonialComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-owl-carousel-o */ 5668);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 38583);



function CustomerTestmonialComponent_ng_container_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h6", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", data_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("- ", data_r1.name, "");
} }
function CustomerTestmonialComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomerTestmonialComponent_ng_container_1_ng_template_1_Template, 7, 3, "ng-template", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
class CustomerTestmonialComponent {
    constructor() {
        /***
         * Client Owl Slider
         */
        this.customOptions = {
            loop: true,
            mouseDrag: true,
            touchDrag: false,
            pullDrag: false,
            autoplay: true,
            navSpeed: 700,
            navText: ['', ''],
            responsive: {
                0: {
                    items: 3
                },
                600: {
                    items: 3
                },
                900: {
                    items: 3
                }
            },
            nav: false
        };
    }
    ngOnInit() {
    }
}
CustomerTestmonialComponent.ɵfac = function CustomerTestmonialComponent_Factory(t) { return new (t || CustomerTestmonialComponent)(); };
CustomerTestmonialComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomerTestmonialComponent, selectors: [["app-customer-testmonial"]], inputs: { customerData: "customerData" }, decls: 2, vars: 2, consts: [["id", "customer-testi", 3, "options"], [4, "ngFor", "ngForOf"], ["carouselSlide", ""], [1, "card", "customer-testi", "text-center", "border-0", "shadow", "rounded", "m-2"], [1, "card-body"], ["alt", "", 1, "img-fluid", "avatar", "avatar-ex-sm", "mx-auto", 3, "src"], [1, "text-muted", "mt-4"], [1, "text-primary"]], template: function CustomerTestmonialComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "owl-carousel-o", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomerTestmonialComponent_ng_container_1_Template, 2, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.customOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.customerData);
    } }, directives: [ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__.CarouselComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__.CarouselSlideDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b21lci10ZXN0bW9uaWFsLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 21717:
/*!*******************************************************!*\
  !*** ./src/app/shared/features/features.component.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeaturesComponent": function() { return /* binding */ FeaturesComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-feather */ 35411);



function FeaturesComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i-feather", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", data_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.title);
} }
;
class FeaturesComponent {
    constructor() {
        /**
         * Clients Logo
         */
        this.featuresdata = [
            {
                icon: "monitor",
                title: "Fully Responsive"
            },
            {
                icon: "heart",
                title: "Browser Compatibility"
            },
            {
                icon: "eye",
                title: "Retina Ready"
            },
            {
                icon: "bold",
                title: "Based On Bootstrap 5"
            },
            {
                icon: "feather",
                title: "Feather Icons"
            },
            {
                icon: "code",
                title: "Built With SASS"
            },
            {
                icon: "user-check",
                title: "W3c Valid Code"
            },
            {
                icon: "git-merge",
                title: "Flaticon Icons"
            },
            {
                icon: "settings",
                title: "Easy to customize"
            }
        ];
    }
    ngOnInit() {
    }
}
FeaturesComponent.ɵfac = function FeaturesComponent_Factory(t) { return new (t || FeaturesComponent)(); };
FeaturesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FeaturesComponent, selectors: [["app-features"]], decls: 6, vars: 1, consts: [[1, "row"], ["class", "col-lg-4 col-md-6 mt-4 pt-2", 4, "ngFor", "ngForOf"], [1, "col-12", "mt-4", "pt-2", "text-center"], ["href", "javascript:void(0)", 1, "btn", "btn-primary"], [1, "uil", "uil-angle-right"], [1, "col-lg-4", "col-md-6", "mt-4", "pt-2"], [1, "d-flex", "key-feature", "align-items-center", "p-3", "rounded", "shadow"], [1, "icon", "text-center", "rounded-circle", "me-3"], [1, "fea", "icon-ex-md", "text-primary", 3, "name"], [1, "flex-1"], [1, "title", "mb-0"]], template: function FeaturesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FeaturesComponent_div_1_Template, 7, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "See More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.featuresdata);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, angular_feather__WEBPACK_IMPORTED_MODULE_2__.FeatherComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmZWF0dXJlcy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 45227:
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": function() { return /* binding */ FooterComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-feather */ 35411);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);





function FooterComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "footer", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i-feather", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i-feather", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i-feather", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i-feather", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h5", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Company");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " About us");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Services");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Team");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Pricing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Careers");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Blog");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h5", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Usefull Links");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "ul", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " Terms of Services");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Privacy Policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " Documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Changelog");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " Components");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h5", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Newsletter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Sign up and receive the latest tips via email.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "label", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Write your email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "i-feather", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FooterComponent_div_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i-feather", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i-feather", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i-feather", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i-feather", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h5", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Company");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ul", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " About us");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Services");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Team");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Pricing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Careers");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Blog");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h5", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Usefull Links");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "ul", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Terms of Services");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Privacy Policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " Changelog");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " Components");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "h5", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Newsletter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Sign up and receive the latest tips via email.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "label", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Write your email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "i-feather", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "input", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FooterComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FooterComponent_div_0_div_1_Template, 101, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FooterComponent_div_0_ng_template_2_Template, 100, 0, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.footerVariant == "bg-light")("ngIfElse", _r2);
} }
/***
 * Footer Component
 */
class FooterComponent {
    constructor() {
        //Get Year
        this.year = new Date().getFullYear();
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], inputs: { footerVariant: "footerVariant", hideFooter: "hideFooter" }, decls: 31, vars: 2, consts: [[4, "ngIf"], [1, "footer", "footer-bar"], [1, "container", "text-center"], [1, "row", "align-items-center"], [1, "col-sm-6"], [1, "text-sm-start"], [1, "mb-0"], [1, "mdi", "mdi-heart", "text-danger"], ["href", "javascript:void(0);", 1, "text-reset"], [1, "col-sm-6", "mt-4", "mt-sm-0", "pt-2", "pt-sm-0"], [1, "list-unstyled", "text-sm-end", "mb-0"], [1, "list-inline-item"], ["href", "javascript:void(0)"], ["src", "assets/images/payments/american-ex.png", "title", "American Express", "alt", "", 1, "avatar", "avatar-ex-sm"], [1, "list-inline-item", "ms-1"], ["src", "assets/images/payments/discover.png", "title", "Discover", "alt", "", 1, "avatar", "avatar-ex-sm"], ["src", "assets/images/payments/master-card.png", "title", "Master Card", "alt", "", 1, "avatar", "avatar-ex-sm"], ["src", "assets/images/payments/paypal.png", "title", "Paypal", "alt", "", 1, "avatar", "avatar-ex-sm"], ["src", "assets/images/payments/visa.png", "title", "Visa", "alt", "", 1, "avatar", "avatar-ex-sm"], [4, "ngIf", "ngIfElse"], ["execute_block", ""], [1, "footer", "bg-light"], [1, "container"], [1, "row"], [1, "col-lg-4", "col-12", "mb-0", "mb-md-4", "pb-0", "pb-md-2"], ["href", "#", 1, "logo-footer"], ["src", "assets/images/logo-dark.png", "height", "24", "alt", ""], [1, "mt-4", "text-muted"], [1, "list-unstyled", "social-icon", "social", "mb-0", "mt-4"], ["href", "javascript:void(0)", 1, "rounded"], ["name", "facebook", 1, "fea", "icon-sm", "fea-social"], ["name", "instagram", 1, "fea", "icon-sm", "fea-social"], ["name", "twitter", 1, "fea", "icon-sm", "fea-social"], ["name", "linkedin", 1, "fea", "icon-sm", "fea-social"], [1, "col-lg-2", "col-md-4", "col-12", "mt-4", "mt-sm-0", "pt-2", "pt-sm-0"], [1, "text-dark", "footer-head"], [1, "list-unstyled", "footer-list", "mt-4"], ["routerLink", "/page-aboutus", 1, "text-muted"], [1, "uil", "uil-angle-right-b", "me-1"], ["routerLink", "/page-services", 1, "text-muted"], ["routerLink", "/page-team", 1, "text-muted"], ["routerLink", "/page-pricing", 1, "text-muted"], ["routerLink", "/portfolio-modern-three", 1, "text-muted"], ["routerLink", "/page-jobs", 1, "text-muted"], ["routerLink", "/page-blog-grid", 1, "text-muted"], ["routerLink", "/auth-cover-login", 1, "text-muted"], [1, "col-lg-3", "col-md-4", "col-12", "mt-4", "mt-sm-0", "pt-2", "pt-sm-0"], ["routerLink", "/page-terms", 1, "text-muted"], ["routerLink", "/page-privacy", 1, "text-muted"], ["routerLink", "/documentation", 1, "text-muted"], ["routerLink", "/changelog", 1, "text-muted"], ["routerLink", "/components", 1, "text-muted"], [1, "col-lg-12"], [1, "foot-subscribe", "foot-white", "mb-3"], [1, "form-label"], [1, "text-danger"], [1, "form-icon", "position-relative"], ["name", "mail", 1, "fea", "icon-sm", "icons"], ["type", "email", "name", "email", "id", "emailsubscribe", "placeholder", "Your email : ", "required", "", 1, "form-control", "bg-light", "border", "ps-5", "rounded"], [1, "d-grid"], ["type", "submit", "id", "submitsubscribe", "name", "send", "value", "Subscribe", 1, "btn", "btn-soft-primary"], [1, "footer"], ["src", "assets/images/logo-light.png", "height", "24", "alt", ""], [1, "mt-4"], [1, "list-unstyled", "social-icon", "foot-social-icon", "mb-0", "mt-4"], [1, "text-light", "footer-head"], ["routerLink", "/page-aboutus", 1, "text-foot"], ["routerLink", "/page-services", 1, "text-foot"], ["routerLink", "/page-team", 1, "text-foot"], ["routerLink", "/page-pricing", 1, "text-foot"], ["routerLink", "/portfolio-modern-three", 1, "text-foot"], ["routerLink", "/page-jobs", 1, "text-foot"], ["routerLink", "/page-blog-grid", 1, "text-foot"], ["routerLink", "/auth-cover-login", 1, "text-foot"], ["routerLink", "/page-terms", 1, "text-foot"], ["routerLink", "/page-privacy", 1, "text-foot"], ["routerLink", "/documentation", 1, "text-foot"], ["routerLink", "/changelog", 1, "text-foot"], ["routerLink", "/components", 1, "text-foot"], ["type", "email", "name", "email", "id", "emailsubscribe", "placeholder", "Your email : ", "required", "", 1, "form-control", "ps-5", "rounded"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FooterComponent_div_0_Template, 4, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "footer", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00A9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Themesbrand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hideFooter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.year, " Landrick. Design with ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, angular_feather__WEBPACK_IMPORTED_MODULE_2__.FeatherComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 89470:
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": function() { return /* binding */ HeaderComponent; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-feather */ 35411);







function HeaderComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "EOG");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " $ 55.88 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "+$ 4.62 ( +9.01% )");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "CHKP");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " $ 120.03 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "-$ 14.07 ( -10.49% )");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "FANG");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " $ 63.58 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "+$ 5.17 ( +8.84% )");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "M");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " $ 14.75 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "+$ 1.05 ( +7.66% )");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "PKI");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " $ 139.72 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "-$ 11.41 ( -7.55% )");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "ABMD");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " $ 326.23 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "-$ 21.61 ( -6.21% )");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "BITCOIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " $ 37,471.47 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "+$ 492.60 ( +1.33% )");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "XRP");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " $ 0.39");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " UNCH");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "LITECOIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " $ 148.67");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "-$ 5.58 ( -3.62% )");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "BITCOIN CASH");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " $ 427.37");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "-$ 15.98 ( -3.60% )");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "ETHEREUM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " $ 1,647.87 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "+$ 14.51 ( +0.89% )");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_ul_5_ng_template_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Your wishlist is empty.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Create your first wishlist request...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "+ Create new wishlist");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_ul_5_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h6", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "T-shirt (M)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "$320 X 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h6", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "$640");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h6", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Bag");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "$50 X 5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h6", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "$250");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h6", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Watch (Men)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "$800 X 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h6", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "$800");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h6", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Total($):");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h6", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "$1690");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "View Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Checkout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "*T&C Apply");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ul_5_Template_a_click_54_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](57); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.wishListModal(_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, HeaderComponent_ul_5_ng_template_56_Template, 14, 0, "ng-template", null, 212, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "button", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "i", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "i", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Order History");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "i", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Download");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "div", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "i", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_ul_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_ul_7_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ul_7_ng_template_17_Template_button_click_2_listener() { const modal_r13 = ctx.$implicit; return modal_r13.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Your Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i-feather", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i-feather", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Remember me");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Forgot password ?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Sign in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 272);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p", 273);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "small", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Don't have an account ?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_ul_7_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 241);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 241);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ul_7_Template_a_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.developerModal(_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, HeaderComponent_ul_7_ng_template_17_Template, 49, 0, "ng-template", null, 212, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_a_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 276);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 277);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_span_9_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Buy Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 281);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Buy Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_span_9_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 282);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Buy Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeaderComponent_span_9_ng_template_2_Template, 4, 0, "ng-template", 279);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HeaderComponent_span_9_ng_template_3_Template, 2, 0, "ng-template", 279);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.navClass === "nav-light");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.navClass !== "nav-light");
} }
const _c0 = function (a0) { return { "tagline-height": a0 }; };
const _c1 = function (a0) { return { "open": a0 }; };
/***
 * Header Component
 */
class HeaderComponent {
    constructor(router, modalService) {
        this.router = router;
        this.modalService = modalService;
        this.isCondensed = false;
        this.router.events.forEach((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd) {
                this._activateMenuDropdown();
            }
        });
    }
    ngAfterViewInit() {
        this._activateMenuDropdown();
    }
    ngOnInit() {
    }
    _activateMenuDropdown() {
        /**
         * Menu activation reset
         */
        const resetParent = (el) => {
            el.classList.remove("active");
            const parent = el.parentElement;
            /**
             * TODO: This is hard coded way of expading/activating parent menu dropdown and working till level 3.
             * We should come up with non hard coded approach
             */
            if (parent) {
                parent.classList.remove("active");
                const parent2 = parent.parentElement;
                if (parent2) {
                    parent2.classList.remove("active");
                    const parent3 = parent2.parentElement;
                    if (parent3) {
                        parent3.classList.remove("active");
                        const parent4 = parent3.parentElement;
                        if (parent4) {
                            const parent5 = parent4.parentElement;
                            parent5.classList.remove("active");
                        }
                    }
                }
            }
        };
        let links = document.getElementsByClassName("nav-link-ref");
        let matchingMenuItem = null;
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < links.length; i++) {
            // reset menu
            resetParent(links[i]);
        }
        for (let i = 0; i < links.length; i++) {
            if (window.location.pathname === links[i]["pathname"]) {
                matchingMenuItem = links[i];
                break;
            }
        }
        if (matchingMenuItem) {
            matchingMenuItem.classList.add("active");
            const parent = matchingMenuItem.parentElement;
            /**
             * TODO: This is hard coded way of expading/activating parent menu dropdown and working till level 3.
             * We should come up with non hard coded approach
             */
            if (parent) {
                parent.classList.add("active");
                const parent2 = parent.parentElement;
                if (parent2) {
                    parent2.classList.add("active");
                    const parent3 = parent2.parentElement;
                    if (parent3) {
                        parent3.classList.add("active");
                        const parent4 = parent3.parentElement;
                        if (parent4) {
                            const parent5 = parent4.parentElement;
                            parent5.classList.add("active");
                            document.getElementById("navigation").style.display = "none";
                            this.isCondensed = false;
                        }
                    }
                }
            }
        }
    }
    /**
     * Window scroll method
     */
    // tslint:disable-next-line: typedef
    windowScroll() {
        if (document.body.scrollTop > 50 ||
            document.documentElement.scrollTop > 50) {
            document.getElementById("topnav").classList.add("nav-sticky");
        }
        else {
            document.getElementById("topnav").classList.remove("nav-sticky");
        }
        if (document.getElementById("back-to-top")) {
            if (document.body.scrollTop > 100 ||
                document.documentElement.scrollTop > 100) {
                document.getElementById("back-to-top").style.display = "inline";
            }
            else {
                document.getElementById("back-to-top").style.display = "none";
            }
        }
    }
    /**
     * Toggle menu
     */
    toggleMenu() {
        this.isCondensed = !this.isCondensed;
        if (this.isCondensed) {
            document.getElementById("navigation").style.display = "block";
        }
        else {
            document.getElementById("navigation").style.display = "none";
        }
    }
    /**
     * Menu clicked show the submenu
     */
    onMenuClick(event) {
        event.preventDefault();
        const nextEl = event.target.nextSibling.nextSibling;
        if (nextEl && !nextEl.classList.contains("open")) {
            const parentEl = event.target.parentNode;
            if (parentEl) {
                parentEl.classList.remove("open");
            }
            nextEl.classList.add("open");
        }
        else if (nextEl) {
            nextEl.classList.remove("open");
        }
        return false;
    }
    developerModal(content) {
        this.modalService.open(content, { size: 'lg', centered: true });
    }
    wishListModal(content) {
        this.modalService.open(content, { centered: true });
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], inputs: { navClass: "navClass", buttonList: "buttonList", sliderTopbar: "sliderTopbar", isdeveloper: "isdeveloper", shopPages: "shopPages" }, decls: 595, vars: 17, consts: [["class", "tagline bg-light", 4, "ngIf"], ["id", "topnav", 1, "defaultscroll", "sticky", 3, "ngClass", "scroll"], [1, "container"], ["class", "logo", "routerLink", "/index", 4, "ngIf"], ["class", "buy-button list-inline mb-0", 4, "ngIf"], [4, "ngIf"], [1, "menu-extras"], [1, "menu-item"], ["id", "isToggle", 1, "navbar-toggle", 3, "ngClass", "click"], [1, "lines"], ["id", "navigation"], [1, "navigation-menu"], ["routerLink", "/", 1, "nav-link-ref"], [1, "has-submenu"], ["href", "javascript:void(0)", 3, "click"], [1, "menu-arrow"], [1, "submenu", "megamenu"], ["routerLink", "/index-saas", 1, "nav-link-ref"], ["routerLink", "/index-classic-saas", 1, "nav-link-ref"], ["routerLink", "/index-agency", 1, "nav-link-ref"], ["routerLink", "/index-apps", 1, "nav-link-ref"], ["routerLink", "/index-classic-app", 1, "nav-link-ref"], ["routerLink", "/index-studio", 1, "nav-link-ref"], ["routerLink", "/index-marketing", 1, "nav-link-ref"], ["routerLink", "/index-enterprise", 1, "nav-link-ref"], ["routerLink", "/index-services", 1, "nav-link-ref"], ["routerLink", "/index-payments", 1, "nav-link-ref"], ["routerLink", "/index-crypto", 1, "nav-link-ref"], ["routerLink", "/index-it-solution", 1, "nav-link-ref"], ["routerLink", "/index-business", 1, "nav-link-ref"], ["routerLink", "/index-modern-business", 1, "nav-link-ref"], ["routerLink", "/index-corporate", 1, "nav-link-ref"], ["routerLink", "/index-hotel", 1, "nav-link-ref"], ["routerLink", "/index-construction", 1, "nav-link-ref"], ["routerLink", "/index-real-estate", 1, "nav-link-ref"], ["routerLink", "/index-developer", 1, "nav-link-ref"], ["routerLink", "/index-seo-agency", 1, "nav-link-ref"], ["routerLink", "/index-hospital", 1, "nav-link-ref"], ["routerLink", "/index-hosting", 1, "nav-link-ref"], ["routerLink", "/index-finance", 1, "nav-link-ref"], [1, "mdi", "mdi-star", "align-middle", "text-warning"], ["routerLink", "/index-videocall", 1, "nav-link-ref"], ["routerLink", "/index-it-solution-two", 1, "nav-link-ref"], ["routerLink", "/index-freelancer", 1, "nav-link-ref"], ["routerLink", "/index-blockchain", 1, "nav-link-ref"], ["routerLink", "/index-crypto-two", 1, "nav-link-ref"], ["routerLink", "/index-integration", 1, "nav-link-ref"], ["routerLink", "/index-task-management", 1, "nav-link-ref"], ["routerLink", "/index-email-inbox", 1, "nav-link-ref"], ["routerLink", "/index-travel", 1, "nav-link-ref"], ["routerLink", "/index-blog", 1, "nav-link-ref"], ["routerLink", "/index-landing-one", 1, "nav-link-ref"], ["routerLink", "/index-landing-two", 1, "nav-link-ref"], ["routerLink", "/index-landing-three", 1, "nav-link-ref"], ["routerLink", "/index-landing-four", 1, "nav-link-ref"], ["routerLink", "/index-shop", 1, "nav-link-ref"], ["routerLink", "/index-insurance", 1, "nav-link-ref"], ["routerLink", "/index-online-learning", 1, "nav-link-ref"], ["routerLink", "/index-personal", 1, "nav-link-ref"], ["routerLink", "/index-coworking", 1, "nav-link-ref"], ["routerLink", "/index-course", 1, "nav-link-ref"], ["routerLink", "/forums", 1, "nav-link-ref"], ["routerLink", "/index-event", 1, "nav-link-ref"], ["routerLink", "/index-single-product", 1, "nav-link-ref"], ["routerLink", "/index-portfolio", 1, "nav-link-ref"], ["routerLink", "/index-job", 1, "nav-link-ref"], ["routerLink", "/index-social-marketing", 1, "nav-link-ref"], ["routerLink", "/index-digital-agency", 1, "nav-link-ref"], ["routerLink", "/index-car-riding", 1, "nav-link-ref"], ["routerLink", "/index-customer", 1, "nav-link-ref"], ["routerLink", "/index-software", 1, "nav-link-ref"], ["routerLink", "/index-ebook", 1, "nav-link-ref"], ["routerLink", "/index-onepage", 1, "nav-link-ref"], [1, "badge", "badge-pill", "bg-warning", "ms-2"], [1, "submenu"], [1, "submenu-arrow"], ["routerLink", "/page-aboutus", 1, "nav-link-ref"], ["routerLink", "/page-aboutus-two", 1, "nav-link-ref"], ["routerLink", "/page-services", 1, "nav-link-ref"], ["routerLink", "/page-history", 1, "nav-link-ref"], ["routerLink", "/page-team", 1, "nav-link-ref"], ["routerLink", "/page-pricing", 1, "nav-link-ref"], ["routerLink", "/account-profile", 1, "nav-link-ref"], ["routerLink", "/account-members", 1, "nav-link-ref"], ["routerLink", "/account-works", 1, "nav-link-ref"], ["routerLink", "/account-messages", 1, "nav-link-ref"], ["routerLink", "/account-payments", 1, "nav-link-ref"], ["routerLink", "/account-setting", 1, "nav-link-ref"], ["routerLink", "/page-invoice", 1, "nav-link-ref"], ["routerLink", "/shop-products", 1, "nav-link-ref"], ["routerLink", "/shop-lists", 1, "nav-link-ref"], ["routerLink", "/shop-product-detail", 1, "nav-link-ref"], ["routerLink", "/shop-cart", 1, "nav-link-ref"], ["routerLink", "/shop-checkouts", 1, "nav-link-ref"], ["routerLink", "/shop-myaccount", 1, "nav-link-ref"], ["routerLink", "/helpcenter-overview", 1, "nav-link-ref"], ["routerLink", "/helpcenter-faqs", 1, "nav-link-ref"], ["routerLink", "/helpcenter-guides", 1, "nav-link-ref"], ["routerLink", "/helpcenter-support-request", 1, "nav-link-ref"], ["routerLink", "/forums-topic", 1, "nav-link-ref"], ["routerLink", "/forums-comments", 1, "nav-link-ref"], ["routerLink", "/email-confirmation", 1, "nav-link-ref"], ["routerLink", "/email-password-reset", 1, "nav-link-ref"], ["routerLink", "/email-alert", 1, "nav-link-ref"], ["routerLink", "/email-invoice", 1, "nav-link-ref"], ["routerLink", "/page-jobs", 1, "nav-link-ref"], ["routerLink", "/page-jobs-sidebar", 1, "nav-link-ref"], ["routerLink", "/page-job-detail", 1, "nav-link-ref"], ["routerLink", "/page-job-apply", 1, "nav-link-ref"], ["routerLink", "/page-job-company-list", 1, "nav-link-ref"], ["routerLink", "/page-job-company", 1, "nav-link-ref"], ["routerLink", "/page-job-candidate-list", 1, "nav-link-ref"], ["routerLink", "/page-job-candidate", 1, "nav-link-ref"], ["routerLink", "/page-blog-grid", 1, "nav-link-ref"], ["routerLink", "/page-blog-sidebar", 1, "nav-link-ref"], ["routerLink", "/page-blog-list", 1, "nav-link-ref"], ["routerLink", "/page-blog-list-sidebar", 1, "nav-link-ref"], ["routerLink", "/page-blog-detail", 1, "nav-link-ref"], ["routerLink", "/page-blog-detail-two", 1, "nav-link-ref"], ["routerLink", "/page-cases", 1, "nav-link-ref"], ["routerLink", "/page-case-detail", 1, "nav-link-ref"], ["routerLink", "/auth-login", 1, "nav-link-ref"], ["routerLink", "/auth-cover-login", 1, "nav-link-ref"], ["routerLink", "/auth-login-three", 1, "nav-link-ref"], ["routerLink", "/auth-signup", 1, "nav-link-ref"], ["routerLink", "/auth-cover-signup", 1, "nav-link-ref"], ["routerLink", "/auth-signup-three", 1, "nav-link-ref"], ["routerLink", "/auth-re-password", 1, "nav-link-ref"], ["routerLink", "/auth-cover-re-password", 1, "nav-link-ref"], ["routerLink", "/auth-re-password-three", 1, "nav-link-ref"], ["routerLink", "/page-terms", 1, "nav-link-ref"], ["routerLink", "/page-privacy", 1, "nav-link-ref"], ["routerLink", "/page-comingsoon", 1, "nav-link-ref"], ["routerLink", "/page-comingsoon2", 1, "nav-link-ref"], ["routerLink", "/page-maintenance", 1, "nav-link-ref"], ["routerLink", "/page-error", 1, "nav-link-ref"], ["routerLink", "/page-thankyou", 1, "nav-link-ref"], ["routerLink", "/page-contact-detail", 1, "nav-link-ref"], ["routerLink", "/page-contact-one", 1, "nav-link-ref"], ["routerLink", "/page-contact-two", 1, "nav-link-ref"], ["routerLink", "/page-contact-three", 1, "nav-link-ref"], [1, "megamenu-head"], ["routerLink", "/portfolio-modern-two", 1, "nav-link-ref"], ["routerLink", "/portfolio-modern-three", 1, "nav-link-ref"], ["routerLink", "/portfolio-modern-four", 1, "nav-link-ref"], ["routerLink", "/portfolio-modern-five", 1, "nav-link-ref"], ["routerLink", "/portfolio-modern-six", 1, "nav-link-ref"], ["routerLink", "/portfolio-classic-two", 1, "nav-link-ref"], ["routerLink", "/portfolio-classic-three", 1, "nav-link-ref"], ["routerLink", "/portfolio-classic-four", 1, "nav-link-ref"], ["routerLink", "/portfolio-classic-five", 1, "nav-link-ref"], ["routerLink", "/portfolio-classic-six", 1, "nav-link-ref"], ["routerLink", "/portfolio-grid-two", 1, "nav-link-ref"], ["routerLink", "/portfolio-grid-three", 1, "nav-link-ref"], ["routerLink", "/portfolio-grid-four", 1, "nav-link-ref"], ["routerLink", "/portfolio-grid-five", 1, "nav-link-ref"], ["routerLink", "/portfolio-grid-six", 1, "nav-link-ref"], ["routerLink", "/portfolio-masonry-two", 1, "nav-link-ref"], ["routerLink", "/portfolio-masonry-three", 1, "nav-link-ref"], ["routerLink", "/portfolio-masonry-four", 1, "nav-link-ref"], ["routerLink", "/portfolio-masonry-five", 1, "nav-link-ref"], ["routerLink", "/portfolio-masonry-six", 1, "nav-link-ref"], ["routerLink", "/portfolio-detail-one", 1, "nav-link-ref"], ["routerLink", "/portfolio-detail-two", 1, "nav-link-ref"], ["routerLink", "/portfolio-detail-three", 1, "nav-link-ref"], ["routerLink", "/portfolio-detail-four", 1, "nav-link-ref"], ["routerLink", "/documentation", 1, "nav-link-ref"], ["routerLink", "/changelog", 1, "nav-link-ref"], ["routerLink", "/components", 1, "nav-link-ref"], ["routerLink", "/widget", 1, "nav-link-ref"], [1, "buy-menu-btn", "d-none"], ["href", "javascript: void(0);", "target", "_blank", 1, "btn", "btn-primary"], [1, "tagline", "bg-light"], [1, "container-fluid"], [1, "row"], [1, "col-12"], [1, "text-slider"], [1, "list-inline", "mb-0", "move-text"], [1, "list-inline-item", "px-2", "mb-0"], [1, "text-success"], [1, "text-danger"], [1, "text-muted"], ["routerLink", "/index", 1, "logo"], ["src", "assets/images/logo-dark.png", "height", "24", "alt", "", 1, "l-dark", "logo-light-mode"], ["src", "assets/images/logo-light.png", "height", "24", "alt", "", 1, "logo-dark-mode"], [1, "buy-button", "list-inline", "mb-0"], [1, "list-inline-item", "mb-0"], ["ngbDropdown", "", 1, "dropdown"], ["type", "button", "ngbDropdownToggle", "", "data-bs-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-link", "text-decoration-none", "dropdown-toggle", "p-0", "pe-2"], [1, "uil", "uil-search", "h5", "text-muted"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dd-menu", "dropdown-menu-end", "bg-white", "shadow", "rounded", "border-0", "mt-3", "py-0", 2, "width", "300px"], ["type", "text", "id", "text", "name", "name", "placeholder", "Search...", 1, "form-control", "border", "bg-white"], [1, "list-inline-item", "mb-0", "pe-1"], ["type", "button", "ngbDropdownToggle", "", "data-bs-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-icon", "btn-soft-primary", "dropdown-toggle"], [1, "uil", "uil-shopping-cart", "align-middle", "icons"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dd-menu", "dropdown-menu-end", "bg-white", "shadow", "rounded", "border-0", "mt-3", "p-4", 2, "width", "300px"], [1, "pb-4"], ["href", "javascript:void(0)", 1, "d-flex", "align-items-center"], ["src", "assets/images/shop/product/s-1.jpg", "alt", "", 1, "shadow", "rounded", 2, "max-height", "64px"], [1, "flex-1", "text-start", "ms-3"], [1, "text-dark", "mb-0"], [1, "text-muted", "mb-0"], ["href", "javascript:void(0)", 1, "d-flex", "align-items-center", "mt-4"], ["src", "assets/images/shop/product/s-2.jpg", "alt", "", 1, "shadow", "rounded", 2, "max-height", "64px"], ["src", "assets/images/shop/product/s-3.jpg", "alt", "", 1, "shadow", "rounded", 2, "max-height", "64px"], [1, "d-flex", "align-items-center", "justify-content-between", "pt-4", "border-top"], [1, "mt-3", "text-center"], ["href", "javascript:void(0)", 1, "btn", "btn-primary", "me-2"], ["href", "javascript:void(0)", 1, "btn", "btn-primary"], [1, "text-muted", "text-start", "mt-1", "mb-0"], ["href", "javascript:void(0);", 1, "btn", "btn-icon", "btn-soft-primary", 3, "click"], [1, "uil", "uil-heart", "align-middle", "icons"], ["content", ""], ["ngbDropdown", "", 1, "dropdown", "dropdown-primary"], [1, "uil", "uil-user", "align-middle", "icons"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "bg-white", "shadow", "rounded", "border-0", "mt-3", "py-3", 2, "width", "200px"], ["href", "#", 1, "dropdown-item", "text-dark"], [1, "uil", "uil-user", "align-middle", "me-1"], [1, "uil", "uil-clipboard-notes", "align-middle", "me-1"], [1, "uil", "uil-arrow-circle-down", "align-middle", "me-1"], [1, "dropdown-divider", "my-3", "border-top"], [1, "uil", "uil-sign-out-alt", "align-middle", "me-1"], [1, "modal-content", "rounded", "shadow-lg", "border-0", "overflow-hidden"], [1, "modal-body", "py-5"], [1, "text-center"], [1, "icon", "d-flex", "align-items-center", "justify-content-center", "bg-soft-danger", "rounded-circle", "mx-auto", 2, "height", "95px", "width", "95px"], [1, "mb-0"], [1, "uil", "uil-heart-break", "align-middle"], [1, "mt-4"], ["href", "javascript:void(0)", 1, "btn", "btn-outline-primary"], [1, "list-inline-item", "mb-0", "ms-1"], [1, "dropdown"], ["type", "button", "data-bs-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-link", "text-decoration-none", "dropdown-toggle", "p-0", "pe-2"], [1, "uil", "uil-search", "text-muted"], [1, "dropdown-menu", "dd-menu", "dropdown-menu-end", "bg-white", "shadow", "rounded", "border-0", "mt-3", "py-0", 2, "width", "300px"], ["href", "javascript:void(0)", 1, "btn", "btn-icon", "btn-primary"], [1, "uil", "uil-facebook-f", "icons"], [1, "uil", "uil-github", "icons"], [1, "uil", "uil-twitter", "icons"], [1, "uil", "uil-linkedin-alt", "icons"], ["type", "text", "id", "text2", "name", "name", "placeholder", "Search...", 1, "form-control", "border", "bg-white"], ["href", "#", 1, "btn", "btn-icon", "btn-soft-primary"], [1, "mdi", "mdi-stack-overflow", "mdi-18px", "icons"], ["href", "javascript:void(0)", "data-bs-toggle", "modal", "data-bs-target", "#loginform", 1, "btn", "btn-icon", "btn-soft-primary", 3, "click"], [1, "uil", "uil-user", "icons"], ["role", "document", 1, "modal-lg", "modal-dialog-centered"], [1, "modal-content", "rounded", "shadow-lg", "border-0", "overflow-hidden", "position-relative"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "position-absolute", "top-0", "end-0", "mt-2", "me-2", 2, "z-index", "1", 3, "click"], [1, "modal-body", "p-0"], [1, "container-fluid", "px-0"], [1, "row", "align-items-center", "g-0"], [1, "col-lg-6", "col-md-5"], ["src", "assets/images/course/online/ab02.jpg", "alt", "", 1, "img-fluid"], [1, "col-lg-6", "col-md-7"], [1, "login-form", "p-4"], [1, "col-lg-12"], [1, "mb-3"], [1, "form-label"], [1, "form-icon", "position-relative"], ["name", "user", 1, "fea", "icon-sm", "icons"], ["type", "email", "placeholder", "Email", "name", "email", "required", "", 1, "form-control", "ps-5"], ["name", "key", 1, "fea", "icon-sm", "icons"], ["type", "password", "placeholder", "Password", "required", "", 1, "form-control", "ps-5"], [1, "d-flex", "justify-content-between"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "id", "customCheck1", 1, "custom-control-input"], ["for", "customCheck1", 1, "custom-control-label", "ms-1"], [1, "forgot-pass", "mb-0"], ["routerLink", "/auth-re-password", 1, "text-dark", "fw-bold"], [1, "col-lg-12", "mb-0"], [1, "d-grid"], [1, "btn", "btn-primary"], [1, "col-12", "text-center"], [1, "mb-0", "mt-3"], [1, "text-dark", "me-2"], ["routerLink", "/auth-signup", 1, "text-dark", "fw-bold"], ["src", "assets/images/logo-dark.png", "height", "24", "alt", "", 1, "l-dark"], ["src", "assets/images/logo-light.png", "height", "24", "alt", "", 1, "l-light"], [1, "buy-button"], [3, "ngIf"], ["href", "javascript: void(0);", 1, "btn", "btn-primary", "login-btn-primary"], ["href", "javascript: void(0);", 1, "btn", "btn-light", "login-btn-light"], ["href", "javascript: void(0);", 1, "btn", "btn-primary"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HeaderComponent_div_0_Template, 75, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function HeaderComponent_Template_header_scroll_1_listener() { return ctx.windowScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HeaderComponent_a_4_Template, 3, 0, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HeaderComponent_ul_5_Template, 76, 0, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HeaderComponent_ul_6_Template, 20, 0, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HeaderComponent_ul_7_Template, 19, 0, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HeaderComponent_a_8_Template, 3, 0, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HeaderComponent_span_9_Template, 4, 2, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_12_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_23_listener($event) { return ctx.onMenuClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Landing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ul", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Saas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Classic Saas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Agency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Application");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Classic Application");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Studio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Marketing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Enterprise");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Payments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Cryptocurrency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "IT Solution ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Business");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Modern Business");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Corporate Business");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Hotel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Construction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Real Estate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "SEO Agency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Hospital");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Hosting & Domain");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Finance ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Video Conference ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "IT Solution Two ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Freelance ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Blockchain ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Cryptocurrency Two ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Integration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Task Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Email Inbox ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Travel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Blog ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Landing One");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Landing Two ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Landing Three");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Landing Four");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "a", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Shop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Insurance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Online Learning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Personal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Coworking");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "a", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Course");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "a", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "Forums");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Event");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "a", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "a", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Job");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "a", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "Social Media");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "a", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "Digital Agency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "a", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "Car Ride");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "a", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "Customer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "a", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "Software");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "a", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "E-Book");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "a", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "Saas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "span", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "Onepage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_211_listener($event) { return ctx.onMenuClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "Pages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](213, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "ul", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_216_listener($event) { return ctx.onMenuClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, " Company ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](218, "span", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "ul", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "a", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, " About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, " About Us Two ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "a", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "a", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "History ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "a", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, " Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "a", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "Pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_239_listener($event) { return ctx.onMenuClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, " Account ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](241, "span", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "ul", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "a", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "a", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "Members ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "a", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "Works ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "a", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "Messages ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "a", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "Payments ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "a", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "Setting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "a", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "Invoice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_265_listener($event) { return ctx.onMenuClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, " Shop ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](267, "span", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "ul", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "a", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, "Product Grids");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "a", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, "Product List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "a", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, "Product Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "a", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, "Shop Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "a", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283, "Checkouts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "a", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, "My Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_288_listener($event) { return ctx.onMenuClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, " Help center ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](290, "span", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "ul", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "a", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, "Helpcenter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "a", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "Faqs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "a", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](300, "Guides");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "a", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, "Support Call");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_305_listener($event) { return ctx.onMenuClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, " Forums ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](307, "span", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "ul", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "a", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, "Overview ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "a", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, "Forum Topic ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "a", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](317, "Forum Comments ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_319_listener($event) { return ctx.onMenuClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](320, " Email Template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](321, "span", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "ul", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "a", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](325, "Confirmation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "a", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](328, "Reset Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "a", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](331, "Alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "a", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](334, "Invoice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_336_listener($event) { return ctx.onMenuClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](337, "Careers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](338, "span", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "ul", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "a", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, "Jobs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "a", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](345, "Jobs - Sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "a", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](348, "Job Detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "a", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](351, "Job Apply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "a", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](354, "Company Listing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "a", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](357, "Company Detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "a", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](360, "Candidate Listing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "a", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](363, "Candidate Detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_365_listener($event) { return ctx.onMenuClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](366, " Blog ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](367, "span", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "ul", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "a", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](371, "Blog Grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "a", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](374, "Blog with Sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "a", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](377, "Blog Listing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "a", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](380, "Blog List & Sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "a", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](383, "Blog Detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "a", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](386, "Blog Detail 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_388_listener($event) { return ctx.onMenuClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](389, " Case Study ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](390, "span", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "ul", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "a", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](394, "All Cases ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "a", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](397, "Case Detail ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_399_listener($event) { return ctx.onMenuClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](400, " Auth Pages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](401, "span", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "ul", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](403, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "a", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](405, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](408, "Login Cover");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](409, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "a", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](411, "Login Simple");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](413, "a", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](414, "Signup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](415, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](416, "a", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](417, "Signup Cover");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](418, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "a", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](420, "Signup Simple");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](421, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](422, "a", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](423, "Reset Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](424, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](425, "a", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](426, "Reset Password Cover");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](427, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](428, "a", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](429, "Reset Password Simple");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](430, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](431, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_431_listener($event) { return ctx.onMenuClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](432, " Utility ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](433, "span", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](434, "ul", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](435, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](436, "a", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](437, "Terms of Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](438, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](439, "a", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](440, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](441, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](442, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_442_listener($event) { return ctx.onMenuClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](443, " Special ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](444, "span", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](445, "ul", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](446, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](447, "a", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](448, "Coming Soon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](449, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](450, "a", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](451, "Coming Soon Two");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](452, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](453, "a", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](454, "Maintenance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](455, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](456, "a", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](457, "Error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](458, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](459, "a", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](460, "Thank you");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](461, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](462, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_462_listener($event) { return ctx.onMenuClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](463, " Contact ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](464, "span", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](465, "ul", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](466, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](467, "a", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](468, "Contact Detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](469, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](470, "a", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](471, "Contact One");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](472, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](473, "a", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](474, "Contact Two");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](475, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](476, "a", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](477, "Contact Three");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](478, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](479, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_479_listener($event) { return ctx.onMenuClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](480, "Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](481, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](482, "ul", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](483, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](484, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](485, "li", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](486, "Modern Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](487, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](488, "a", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](489, "Two Column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](490, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](491, "a", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](492, "Three Column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](493, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](494, "a", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](495, "Four Column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](496, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](497, "a", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](498, "Five Column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](499, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](500, "a", 146);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](501, "Six Column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](502, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](503, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](504, "li", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](505, "Classic Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](506, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](507, "a", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](508, "Two Column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](509, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](510, "a", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](511, "Three Column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](512, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](513, "a", 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](514, "Four Column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](515, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](516, "a", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](517, "Five Column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](518, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](519, "a", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](520, "Six Column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](521, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](522, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](523, "li", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](524, "Grid Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](525, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](526, "a", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](527, "Two Column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](528, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](529, "a", 153);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](530, "Three Column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](531, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](532, "a", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](533, "Four Column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](534, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](535, "a", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](536, "Five Column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](537, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](538, "a", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](539, "Six Column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](540, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](541, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](542, "li", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](543, "Masonry Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](544, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](545, "a", 157);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](546, "Two Column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](547, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](548, "a", 158);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](549, "Three Column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](550, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](551, "a", 159);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](552, "Four Column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](553, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](554, "a", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](555, "Five Column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](556, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](557, "a", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](558, "Six Column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](559, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](560, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](561, "li", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](562, "Portfolio Detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](563, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](564, "a", 162);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](565, "Portfolio One");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](566, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](567, "a", 163);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](568, "Portfolio Two");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](569, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](570, "a", 164);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](571, "Portfolio Three");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](572, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](573, "a", 165);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](574, "Portfolio Four");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](575, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](576, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_576_listener($event) { return ctx.onMenuClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](577, "Docs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](578, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](579, "ul", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](580, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](581, "a", 166);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](582, "Documentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](583, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](584, "a", 167);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](585, "Changelog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](586, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](587, "a", 168);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](588, "Components");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](589, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](590, "a", 169);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](591, "Widget");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](592, "div", 170);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](593, "a", 171);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](594, "Buy Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sliderTopbar == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.navClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx.sliderTopbar == true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.navClass !== "nav-light");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.shopPages == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.buttonList == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isdeveloper == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.navClass === "nav-light");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.buttonList && !ctx.isdeveloper && !ctx.shopPages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c1, ctx.isCondensed === true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.navClass);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbDropdownMenu, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, angular_feather__WEBPACK_IMPORTED_MODULE_5__.FeatherComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 7890:
/*!***************************************************!*\
  !*** ./src/app/shared/member/member.component.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MemberComponent": function() { return /* binding */ MemberComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-feather */ 35411);



function MemberComponent_div_1_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i-feather", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", item_r3);
} }
function MemberComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MemberComponent_div_1_li_5_Template, 3, 1, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", data_r1.profile, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", data_r1.list);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.designation);
} }
class MemberComponent {
    constructor() { }
    ngOnInit() {
    }
}
MemberComponent.ɵfac = function MemberComponent_Factory(t) { return new (t || MemberComponent)(); };
MemberComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MemberComponent, selectors: [["app-member"]], inputs: { memberData: "memberData" }, decls: 2, vars: 1, consts: [[1, "row"], ["class", "col-lg-3 col-md-6 mt-4 pt-2", 4, "ngFor", "ngForOf"], [1, "col-lg-3", "col-md-6", "mt-4", "pt-2"], [1, "card", "team", "text-center", "border-0"], [1, "position-relative"], ["alt", "", 1, "img-fluid", "avatar", "avatar-ex-large", "rounded-circle", "shadow", 3, "src"], [1, "list-unstyled", "social-icon", "team-icon", "mb-0", "mt-4"], ["class", "list-inline-item ms-1", 4, "ngFor", "ngForOf"], [1, "card-body", "py-3", "px-0", "content"], [1, "mb-0"], ["href", "javascript:void(0)", 1, "name", "text-dark"], [1, "designation", "text-muted"], [1, "list-inline-item", "ms-1"], ["href", "javascript:void(0)", 1, "rounded"], [1, "fea", "icon-sm", "fea-social", 3, "name"]], template: function MemberComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MemberComponent_div_1_Template, 12, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.memberData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, angular_feather__WEBPACK_IMPORTED_MODULE_2__.FeatherComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW1iZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 94311:
/*!*****************************************************!*\
  !*** ./src/app/shared/pricing/pricing.component.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PricingComponent": function() { return /* binding */ PricingComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 38583);


function PricingComponent_div_1_ul_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3);
} }
function PricingComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "$");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "/mo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, PricingComponent_div_1_ul_15_Template, 5, 1, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.warning);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", data_r1.list);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.btn);
} }
class PricingComponent {
    constructor() { }
    ngOnInit() {
    }
}
PricingComponent.ɵfac = function PricingComponent_Factory(t) { return new (t || PricingComponent)(); };
PricingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PricingComponent, selectors: [["app-pricing"]], inputs: { pricingData: "pricingData" }, decls: 2, vars: 1, consts: [[1, "row"], ["class", "col-lg-3 col-md-6 col-12 mt-4 pt-2 text-sm-start", 4, "ngFor", "ngForOf"], [1, "col-lg-3", "col-md-6", "col-12", "mt-4", "pt-2", "text-sm-start"], [1, "card", "pricing-rates", "business-rate", "shadow", "bg-light", "border-0", "rounded"], [1, "ribbon", "ribbon-right", "ribbon-warning", "overflow-hidden"], [1, "text-center", "d-block", "shadow", "small", "h6"], [1, "card-body"], [1, "title", "fw-bold", "text-uppercase", "text-primary", "mb-4"], [1, "d-flex", "mb-4"], [1, "h4", "mb-0", "mt-2"], [1, "price", "h1", "mb-0"], [1, "h4", "align-self-end", "mb-1"], ["class", "list-unstyled mb-0 ps-0", 4, "ngFor", "ngForOf"], ["href", "javascript:void(0)", 1, "btn", "btn-primary", "mt-4"], [1, "list-unstyled", "mb-0", "ps-0"], [1, "h6", "text-muted", "mb-0"], [1, "text-primary", "h5", "me-2"], [1, "uil", "uil-check-circle", "align-middle"]], template: function PricingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PricingComponent_div_1_Template, 18, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pricingData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmljaW5nLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 84342:
/*!*************************************************************************!*\
  !*** ./src/app/shared/review-testmonial/review-testmonial.component.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReviewTestmonialComponent": function() { return /* binding */ ReviewTestmonialComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-owl-carousel-o */ 5668);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 38583);



function ReviewTestmonialComponent_ng_container_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h6", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "small", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", data_r1.profile, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("- ", data_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.designation);
} }
function ReviewTestmonialComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ReviewTestmonialComponent_ng_container_1_ng_template_1_Template, 19, 4, "ng-template", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
class ReviewTestmonialComponent {
    constructor() {
        /***
        * Review Owl Slider
        */
        this.customOptions = {
            loop: true,
            mouseDrag: true,
            touchDrag: false,
            pullDrag: false,
            autoplay: true,
            navSpeed: 700,
            navText: ['', ''],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                900: {
                    items: 1
                }
            },
            nav: false
        };
    }
    ngOnInit() {
    }
}
ReviewTestmonialComponent.ɵfac = function ReviewTestmonialComponent_Factory(t) { return new (t || ReviewTestmonialComponent)(); };
ReviewTestmonialComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReviewTestmonialComponent, selectors: [["app-review-testmonial"]], inputs: { reviewData: "reviewData" }, decls: 2, vars: 2, consts: [["id", "customer-testi", 3, "options"], [4, "ngFor", "ngForOf"], ["carouselSlide", ""], [1, "customer-testi", "text-center"], [1, "text-muted", "h6", "fst-italic"], ["alt", "", 1, "img-fluid", "avatar", "avatar-small", "mt-3", "rounded-circle", "mx-auto", "shadow", 3, "src"], [1, "list-unstyled", "mb-0", "mt-3"], [1, "list-inline-item"], [1, "mdi", "mdi-star", "text-warning"], [1, "text-primary"], [1, "text-muted"]], template: function ReviewTestmonialComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "owl-carousel-o", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ReviewTestmonialComponent_ng_container_1_Template, 2, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.customOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.reviewData);
    } }, directives: [ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__.CarouselComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__.CarouselSlideDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXZpZXctdGVzdG1vbmlhbC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 36564:
/*!***********************************************!*\
  !*** ./src/app/shared/scrollspy.directive.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScrollspyDirective": function() { return /* binding */ ScrollspyDirective; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 38583);



class ScrollspyDirective {
    // tslint:disable-next-line: variable-name
    constructor(_el, document) {
        this._el = _el;
        this.document = document;
        this.spiedTags = [];
        this.sectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    /**
     * Window scroll method
     */
    onScroll(event) {
        let currentSection;
        const children = this._el.nativeElement.querySelectorAll('section');
        const scrollTop = this.document.documentElement.scrollTop;
        const parentOffset = this.document.documentElement.offsetTop;
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < children.length; i++) {
            const element = children[i];
            if (this.spiedTags.some(spiedTag => spiedTag === element.tagName)) {
                if ((element.offsetTop - parentOffset) <= scrollTop) {
                    currentSection = element.id;
                }
            }
        }
        if (currentSection !== this.currentSection) {
            this.currentSection = currentSection;
            this.sectionChange.emit(this.currentSection);
        }
    }
}
ScrollspyDirective.ɵfac = function ScrollspyDirective_Factory(t) { return new (t || ScrollspyDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT)); };
ScrollspyDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ScrollspyDirective, selectors: [["", "appScrollspy", ""]], hostBindings: function ScrollspyDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function ScrollspyDirective_scroll_HostBindingHandler($event) { return ctx.onScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, inputs: { spiedTags: "spiedTags" }, outputs: { sectionChange: "sectionChange" } });


/***/ }),

/***/ 42474:
/*!*******************************************************!*\
  !*** ./src/app/shared/services/services.component.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicesComponent": function() { return /* binding */ ServicesComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 38583);


function ServicesComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](data_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.description);
} }
class ServicesComponent {
    constructor() { }
    ngOnInit() {
    }
}
ServicesComponent.ɵfac = function ServicesComponent_Factory(t) { return new (t || ServicesComponent)(); };
ServicesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServicesComponent, selectors: [["app-services"]], inputs: { servicesData: "servicesData" }, decls: 2, vars: 1, consts: [[1, "row"], ["class", "col-md-4 col-12 mt-5", 4, "ngFor", "ngForOf"], [1, "col-md-4", "col-12", "mt-5"], [1, "features", "features", "text-center"], [1, "image", "position-relative", "d-inline-block"], [1, "content", "mt-4"], [1, "text-muted", "mb-0"]], template: function ServicesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ServicesComponent_div_1_Template, 9, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.servicesData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2aWNlcy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 44466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": function() { return /* binding */ SharedModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-owl-carousel-o */ 5668);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _scrollspy_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scrollspy.directive */ 36564);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-feather */ 35411);
/* harmony import */ var _testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./testimonial/testimonial.component */ 22284);
/* harmony import */ var _clients_logo_clients_logo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clients-logo/clients-logo.component */ 45229);
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/services.component */ 42474);
/* harmony import */ var _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pricing/pricing.component */ 94311);
/* harmony import */ var _features_features_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./features/features.component */ 21717);
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blog/blog.component */ 62891);
/* harmony import */ var _customer_testmonial_customer_testmonial_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./customer-testmonial/customer-testmonial.component */ 87885);
/* harmony import */ var _review_testmonial_review_testmonial_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./review-testmonial/review-testmonial.component */ 84342);
/* harmony import */ var _simple_pricing_simple_pricing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./simple-pricing/simple-pricing.component */ 31050);
/* harmony import */ var _member_member_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./member/member.component */ 7890);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
















class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_13__.CarouselModule,
            angular_feather__WEBPACK_IMPORTED_MODULE_14__.FeatherModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_scrollspy_directive__WEBPACK_IMPORTED_MODULE_0__.ScrollspyDirective,
        _testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_1__.TestimonialComponent,
        _clients_logo_clients_logo_component__WEBPACK_IMPORTED_MODULE_2__.ClientsLogoComponent,
        _services_services_component__WEBPACK_IMPORTED_MODULE_3__.ServicesComponent,
        _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_4__.PricingComponent,
        _features_features_component__WEBPACK_IMPORTED_MODULE_5__.FeaturesComponent,
        _blog_blog_component__WEBPACK_IMPORTED_MODULE_6__.BlogComponent,
        _customer_testmonial_customer_testmonial_component__WEBPACK_IMPORTED_MODULE_7__.CustomerTestmonialComponent,
        _review_testmonial_review_testmonial_component__WEBPACK_IMPORTED_MODULE_8__.ReviewTestmonialComponent,
        _simple_pricing_simple_pricing_component__WEBPACK_IMPORTED_MODULE_9__.SimplePricingComponent,
        _member_member_component__WEBPACK_IMPORTED_MODULE_10__.MemberComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_13__.CarouselModule,
        angular_feather__WEBPACK_IMPORTED_MODULE_14__.FeatherModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule], exports: [_testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_1__.TestimonialComponent,
        _scrollspy_directive__WEBPACK_IMPORTED_MODULE_0__.ScrollspyDirective,
        _clients_logo_clients_logo_component__WEBPACK_IMPORTED_MODULE_2__.ClientsLogoComponent,
        _services_services_component__WEBPACK_IMPORTED_MODULE_3__.ServicesComponent,
        _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_4__.PricingComponent,
        _features_features_component__WEBPACK_IMPORTED_MODULE_5__.FeaturesComponent,
        _blog_blog_component__WEBPACK_IMPORTED_MODULE_6__.BlogComponent,
        _customer_testmonial_customer_testmonial_component__WEBPACK_IMPORTED_MODULE_7__.CustomerTestmonialComponent,
        _review_testmonial_review_testmonial_component__WEBPACK_IMPORTED_MODULE_8__.ReviewTestmonialComponent,
        _simple_pricing_simple_pricing_component__WEBPACK_IMPORTED_MODULE_9__.SimplePricingComponent,
        _member_member_component__WEBPACK_IMPORTED_MODULE_10__.MemberComponent] }); })();


/***/ }),

/***/ 31050:
/*!*******************************************************************!*\
  !*** ./src/app/shared/simple-pricing/simple-pricing.component.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SimplePricingComponent": function() { return /* binding */ SimplePricingComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 38583);


function SimplePricingComponent_div_1_ul_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3);
} }
function SimplePricingComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "$");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "/mo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SimplePricingComponent_div_1_ul_15_Template, 5, 1, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.warning);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", data_r1.list);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.btn);
} }
class SimplePricingComponent {
    constructor() { }
    ngOnInit() {
    }
}
SimplePricingComponent.ɵfac = function SimplePricingComponent_Factory(t) { return new (t || SimplePricingComponent)(); };
SimplePricingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SimplePricingComponent, selectors: [["app-simple-pricing"]], inputs: { simple_pricingData: "simple_pricingData" }, decls: 2, vars: 1, consts: [[1, "row"], ["class", "col-md-4 col-12 mt-4 pt-2", 4, "ngFor", "ngForOf"], [1, "col-md-4", "col-12", "mt-4", "pt-2"], [1, "card", "pricing-rates", "business-rate", "shadow", "bg-light", "rounded", "text-center", "border-0"], [1, "ribbon", "ribbon-right", "ribbon-warning", "overflow-hidden"], [1, "text-center", "d-block", "shadow", "small", "h6"], [1, "card-body", "py-5"], [1, "title", "fw-bold", "text-uppercase", "text-primary", "mb-4"], [1, "d-flex", "justify-content-center", "mb-4"], [1, "h4", "mb-0", "mt-2"], [1, "price", "h1", "mb-0"], [1, "h4", "align-self-end", "mb-1"], ["class", "list-unstyled mb-0 ps-0", 4, "ngFor", "ngForOf"], ["href", "javascript:void(0)", 1, "btn", "btn-primary", "mt-4"], [1, "list-unstyled", "mb-0", "ps-0"], [1, "h6", "text-muted", "mb-0"], [1, "text-primary", "h5", "me-2"], [1, "uil", "uil-check-circle", "align-middle"]], template: function SimplePricingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SimplePricingComponent_div_1_Template, 18, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.simple_pricingData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaW1wbGUtcHJpY2luZy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 22157:
/*!*******************************************************!*\
  !*** ./src/app/shared/switcher/switcher.component.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SwitcherComponent": function() { return /* binding */ SwitcherComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

/**
 * Switcher component
 */
class SwitcherComponent {
    constructor() { }
    ngOnInit() {
        // assign value
        this.isVisible = false;
    }
    /**
     * Change theme color
     */
    onChangeColor(color) {
        document
            .getElementById('color-opt')
            .setAttribute('href', './assets/css/colors/' + color + '.css');
    }
    /**
     * Set dark theme
     */
    setDark() {
        document.getElementById('theme-opt').setAttribute('href', './assets/css/style-dark.min.css');
    }
    /**
     * Set light theme
     */
    setLight() {
        document.getElementById('theme-opt').setAttribute('href', './assets/css/style.min.css');
    }
    /**
     * Set dark-rtl theme
     */
    darkRtl() {
        document.getElementById('theme-opt').setAttribute('href', './assets/css/style-dark-rtl.min.css');
    }
    /**
     * Set dark-light theme
     */
    darkLtr() {
        document.getElementById('theme-opt').setAttribute('href', './assets/css/style-dark.min.css');
    }
    /**
     * Set rtl theme
     */
    setRtl() {
        document.getElementById('theme-opt').setAttribute('href', './assets/css/style-rtl.min.css');
    }
    /**
     * Set light theme
     */
    setLtr() {
        document.getElementById('theme-opt').setAttribute('href', './assets/css/style.min.css');
    }
    /**
     * Toggle switcher
     */
    onChangeSwitch() {
        this.isVisible = !this.isVisible;
    }
}
SwitcherComponent.ɵfac = function SwitcherComponent_Factory(t) { return new (t || SwitcherComponent)(); };
SwitcherComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SwitcherComponent, selectors: [["app-switcher"]], decls: 47, vars: 2, consts: [["id", "style-switcher", 1, "bg-light", "border", "p-3", "pt-2", "pb-2", 2, "left", "0px"], [1, "title", "text-center"], [1, "pattern"], [1, "list-inline-item"], ["href", "javascript: void(0);", 1, "color1", 3, "click"], ["href", "javascript: void(0);", 1, "color2", 3, "click"], ["href", "javascript: void(0);", 1, "color3", 3, "click"], ["href", "javascript: void(0);", 1, "color4", 3, "click"], ["href", "javascript: void(0);", 1, "color5", 3, "click"], ["href", "javascript: void(0);", 1, "color6", 3, "click"], ["href", "javascript: void(0);", 1, "color7", 3, "click"], ["href", "javascript: void(0);", 1, "color8", 3, "click"], ["href", "javascript: void(0);", 1, "color9", 3, "click"], [1, "title", "text-center", "pt-3", "mb-0", "border-top"], [1, "text-center", "list-unstyled", "mb-0"], [1, "d-grid"], ["href", "javascript:void(0)", 1, "btn", "btn-sm", "btn-block", "btn-primary", "rtl-version", "t-rtl-light", "mt-2", 3, "click"], ["href", "javascript:void(0)", 1, "btn", "btn-sm", "btn-block", "btn-primary", "ltr-version", "t-ltr-light", "mt-2", 3, "click"], ["href", "javascript:void(0)", 1, "btn", "btn-sm", "btn-block", "btn-primary", "dark-rtl-version", "t-rtl-dark", "mt-2", 3, "click"], ["href", "javascript:void(0)", 1, "btn", "btn-sm", "btn-block", "btn-primary", "dark-ltr-version", "t-ltr-dark", "mt-2", 3, "click"], ["href", "javascript:void(0)", 1, "btn", "btn-sm", "btn-block", "btn-dark", "dark-version", "t-dark", "mt-2", 3, "click"], ["href", "javascript:void(0)", 1, "btn", "btn-sm", "btn-block", "btn-dark", "light-version", "t-light", "mt-2", 3, "click"], [1, "bottom"], ["href", "javascript: void(0);", 1, "settings", "bg-white", "title-bg-dark", "shadow", "d-block", 3, "click"], [1, "mdi", "mdi-cog", "ms-1", "mdi-24px", "position-absolute", "mdi-spin", "text-primary"]], template: function SwitcherComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Select Your Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SwitcherComponent_Template_a_click_6_listener() { return ctx.onChangeColor("default"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SwitcherComponent_Template_a_click_8_listener() { return ctx.onChangeColor("green"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SwitcherComponent_Template_a_click_10_listener() { return ctx.onChangeColor("purple"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SwitcherComponent_Template_a_click_12_listener() { return ctx.onChangeColor("red"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SwitcherComponent_Template_a_click_14_listener() { return ctx.onChangeColor("skyblue"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SwitcherComponent_Template_a_click_16_listener() { return ctx.onChangeColor("skobleoff"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SwitcherComponent_Template_a_click_18_listener() { return ctx.onChangeColor("cyan"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SwitcherComponent_Template_a_click_20_listener() { return ctx.onChangeColor("slateblue"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SwitcherComponent_Template_a_click_22_listener() { return ctx.onChangeColor("yellow"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h6", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Theme Option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SwitcherComponent_Template_a_click_27_listener() { return ctx.setRtl(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "RTL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SwitcherComponent_Template_a_click_30_listener() { return ctx.setLtr(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "LTR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SwitcherComponent_Template_a_click_33_listener() { return ctx.darkRtl(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "RTL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SwitcherComponent_Template_a_click_36_listener() { return ctx.darkLtr(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "LTR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SwitcherComponent_Template_a_click_39_listener() { return ctx.setDark(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SwitcherComponent_Template_a_click_42_listener() { return ctx.setLight(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Light");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SwitcherComponent_Template_a_click_45_listener() { return ctx.onChangeSwitch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx.isVisible ? "left: 0px" : "left: -189px");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzd2l0Y2hlci5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 22284:
/*!*************************************************************!*\
  !*** ./src/app/shared/testimonial/testimonial.component.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestimonialComponent": function() { return /* binding */ TestimonialComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-owl-carousel-o */ 5668);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 38583);



function TestimonialComponent_ng_container_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h6", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "small", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", data_r1.profile, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("- ", data_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.designation);
} }
function TestimonialComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TestimonialComponent_ng_container_1_ng_template_1_Template, 21, 4, "ng-template", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
class TestimonialComponent {
    constructor() {
        /***
         * Client Owl Slider
         */
        this.customOptions = {
            loop: true,
            mouseDrag: true,
            touchDrag: false,
            pullDrag: false,
            autoplay: true,
            navSpeed: 700,
            navText: ['', ''],
            responsive: {
                0: {
                    items: 3
                },
                600: {
                    items: 3
                },
                900: {
                    items: 3
                }
            },
            nav: false
        };
    }
    ngOnInit() {
    }
}
TestimonialComponent.ɵfac = function TestimonialComponent_Factory(t) { return new (t || TestimonialComponent)(); };
TestimonialComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TestimonialComponent, selectors: [["app-testimonial"]], inputs: { testimonialData: "testimonialData" }, decls: 2, vars: 2, consts: [["id", "customer-testi", 3, "options"], [4, "ngFor", "ngForOf"], ["carouselSlide", ""], [1, "tiny-slide"], [1, "d-flex", "client-testi", "m-2"], ["alt", "", 1, "avatar", "avatar-small", "client-image", "rounded", "shadow", 3, "src"], [1, "flex-1", "content", "p-3", "shadow", "rounded", "bg-white", "position-relative"], [1, "list-unstyled", "mb-0"], [1, "list-inline-item"], [1, "mdi", "mdi-star", "text-warning"], [1, "text-muted", "mt-2"], [1, "text-primary"], [1, "text-muted"]], template: function TestimonialComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "owl-carousel-o", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TestimonialComponent_ng_container_1_Template, 2, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.customOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.testimonialData);
    } }, directives: [ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__.CarouselComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__.CarouselSlideDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXN0aW1vbmlhbC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(14431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map
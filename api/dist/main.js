(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_users_users_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/users/users.component */ "./src/app/components/users/users.component.ts");
/* harmony import */ var _components_service_providers_service_providers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/service-providers/service-providers.component */ "./src/app/components/service-providers/service-providers.component.ts");






var routes = [
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'users', component: _components_users_users_component__WEBPACK_IMPORTED_MODULE_4__["UsersComponent"] },
    { path: 'service-providers', component: _components_service_providers_service_providers_component__WEBPACK_IMPORTED_MODULE_5__["ServiceProvidersComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <app-dash-board></app-dash-board>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.name = 'Byron';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_users_users_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/users/users.component */ "./src/app/components/users/users.component.ts");
/* harmony import */ var _components_dash_board_dash_board_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/dash-board/dash-board.component */ "./src/app/components/dash-board/dash-board.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_service_providers_service_providers_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/service-providers/service-providers.component */ "./src/app/components/service-providers/service-providers.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_users_users_component__WEBPACK_IMPORTED_MODULE_5__["UsersComponent"],
                _components_dash_board_dash_board_component__WEBPACK_IMPORTED_MODULE_6__["DashBoardComponent"],
                _components_service_providers_service_providers_component__WEBPACK_IMPORTED_MODULE_8__["ServiceProvidersComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/dash-board/dash-board.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/dash-board/dash-board.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-link {\r\n    text-align: left;\r\n}\r\n\r\nbody {\r\n  font-size: .875rem;\r\n}\r\n\r\n.feather {\r\n  width: 16px;\r\n  height: 16px;\r\n  vertical-align: text-bottom;\r\n}\r\n\r\n/*\r\n * Sidebar\r\n */\r\n\r\n.sidebar {\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: 100; /* Behind the navbar */\r\n  padding: 48px 0 0; /* Height of navbar */\r\n  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);\r\n}\r\n\r\n.sidebar-sticky {\r\n  position: relative;\r\n  top: 0;\r\n  height: calc(100vh - 48px);\r\n  padding-top: .5rem;\r\n  overflow-x: hidden;\r\n  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */\r\n}\r\n\r\n@supports ((position: -webkit-sticky) or (position: sticky)) {\r\n  .sidebar-sticky {\r\n    position: -webkit-sticky;\r\n    position: sticky;\r\n  }\r\n}\r\n\r\n.sidebar .nav-link {\r\n  font-weight: 500;\r\n  color: #333;\r\n}\r\n\r\n.sidebar .nav-link .feather {\r\n  margin-right: 4px;\r\n  color: #999;\r\n}\r\n\r\n.sidebar .nav-link.active {\r\n  color: #007bff;\r\n}\r\n\r\n.sidebar .nav-link:hover .feather,\r\n.sidebar .nav-link.active .feather {\r\n  color: inherit;\r\n}\r\n\r\n.sidebar-heading {\r\n  font-size: .75rem;\r\n  text-transform: uppercase;\r\n}\r\n\r\n/*\r\n * Content\r\n */\r\n\r\n[role=\"main\"] {\r\n  padding-top: 133px; /* Space for fixed navbar */\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .sidebar{\r\n        height: 0px;\r\n    }\r\n    .sticky-sidebar{\r\n        height: 0px;\r\n    }\r\n  [role=\"main\"] {\r\n    padding-top: 48px; /* Space for fixed navbar */\r\n  }\r\n}\r\n\r\n/*\r\n * Navbar\r\n */\r\n\r\n.navbar-brand {\r\n  padding-top: .75rem;\r\n  padding-bottom: .75rem;\r\n  font-size: 1rem;\r\n  background-color: rgba(0, 0, 0, .25);\r\n  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);\r\n}\r\n\r\n.navbar .form-control {\r\n  padding: .75rem 1rem;\r\n  border-width: 0;\r\n  border-radius: 0;\r\n}\r\n\r\n.form-control-dark {\r\n  color: #fff;\r\n  background-color: rgba(255, 255, 255, .1);\r\n  border-color: rgba(255, 255, 255, .1);\r\n}\r\n\r\n.form-control-dark:focus {\r\n  border-color: transparent;\r\n  box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoLWJvYXJkL2Rhc2gtYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osMkJBQTJCO0FBQzdCOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsTUFBTTtFQUNOLFNBQVM7RUFDVCxPQUFPO0VBQ1AsWUFBWSxFQUFFLHNCQUFzQjtFQUNwQyxpQkFBaUIsRUFBRSxxQkFBcUI7RUFDeEMsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTiwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBRSw2REFBNkQ7QUFDakY7O0FBRUE7RUFDRTtJQUNFLHdCQUF3QjtJQUN4QixnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGtCQUFrQixFQUFFLDJCQUEyQjtBQUNqRDs7QUFFQTtJQUNJO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7RUFDRjtJQUNFLGlCQUFpQixFQUFFLDJCQUEyQjtFQUNoRDtBQUNGOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2Ysb0NBQW9DO0VBQ3BDLDZDQUE2QztBQUMvQzs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHlDQUF5QztFQUN6QyxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsOENBQThDO0FBQ2hEIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kYXNoLWJvYXJkL2Rhc2gtYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tbGluayB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBmb250LXNpemU6IC44NzVyZW07XHJcbn1cclxuXHJcbi5mZWF0aGVyIHtcclxuICB3aWR0aDogMTZweDtcclxuICBoZWlnaHQ6IDE2cHg7XHJcbiAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xyXG59XHJcblxyXG4vKlxyXG4gKiBTaWRlYmFyXHJcbiAqL1xyXG5cclxuLnNpZGViYXIge1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAxMDA7IC8qIEJlaGluZCB0aGUgbmF2YmFyICovXHJcbiAgcGFkZGluZzogNDhweCAwIDA7IC8qIEhlaWdodCBvZiBuYXZiYXIgKi9cclxuICBib3gtc2hhZG93OiBpbnNldCAtMXB4IDAgMCByZ2JhKDAsIDAsIDAsIC4xKTtcclxufVxyXG5cclxuLnNpZGViYXItc3RpY2t5IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAwO1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDQ4cHgpO1xyXG4gIHBhZGRpbmctdG9wOiAuNXJlbTtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgb3ZlcmZsb3cteTogYXV0bzsgLyogU2Nyb2xsYWJsZSBjb250ZW50cyBpZiB2aWV3cG9ydCBpcyBzaG9ydGVyIHRoYW4gY29udGVudC4gKi9cclxufVxyXG5cclxuQHN1cHBvcnRzICgocG9zaXRpb246IC13ZWJraXQtc3RpY2t5KSBvciAocG9zaXRpb246IHN0aWNreSkpIHtcclxuICAuc2lkZWJhci1zdGlja3kge1xyXG4gICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICB9XHJcbn1cclxuXHJcbi5zaWRlYmFyIC5uYXYtbGluayB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogIzMzMztcclxufVxyXG5cclxuLnNpZGViYXIgLm5hdi1saW5rIC5mZWF0aGVyIHtcclxuICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICBjb2xvcjogIzk5OTtcclxufVxyXG5cclxuLnNpZGViYXIgLm5hdi1saW5rLmFjdGl2ZSB7XHJcbiAgY29sb3I6ICMwMDdiZmY7XHJcbn1cclxuXHJcbi5zaWRlYmFyIC5uYXYtbGluazpob3ZlciAuZmVhdGhlcixcclxuLnNpZGViYXIgLm5hdi1saW5rLmFjdGl2ZSAuZmVhdGhlciB7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5zaWRlYmFyLWhlYWRpbmcge1xyXG4gIGZvbnQtc2l6ZTogLjc1cmVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi8qXHJcbiAqIENvbnRlbnRcclxuICovXHJcblxyXG5bcm9sZT1cIm1haW5cIl0ge1xyXG4gIHBhZGRpbmctdG9wOiAxMzNweDsgLyogU3BhY2UgZm9yIGZpeGVkIG5hdmJhciAqL1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5zaWRlYmFye1xyXG4gICAgICAgIGhlaWdodDogMHB4O1xyXG4gICAgfVxyXG4gICAgLnN0aWNreS1zaWRlYmFye1xyXG4gICAgICAgIGhlaWdodDogMHB4O1xyXG4gICAgfVxyXG4gIFtyb2xlPVwibWFpblwiXSB7XHJcbiAgICBwYWRkaW5nLXRvcDogNDhweDsgLyogU3BhY2UgZm9yIGZpeGVkIG5hdmJhciAqL1xyXG4gIH1cclxufVxyXG5cclxuLypcclxuICogTmF2YmFyXHJcbiAqL1xyXG5cclxuLm5hdmJhci1icmFuZCB7XHJcbiAgcGFkZGluZy10b3A6IC43NXJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogLjc1cmVtO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4yNSk7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIDAgcmdiYSgwLCAwLCAwLCAuMjUpO1xyXG59XHJcblxyXG4ubmF2YmFyIC5mb3JtLWNvbnRyb2wge1xyXG4gIHBhZGRpbmc6IC43NXJlbSAxcmVtO1xyXG4gIGJvcmRlci13aWR0aDogMDtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sLWRhcmsge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjEpO1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMSk7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wtZGFyazpmb2N1cyB7XHJcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAuMjUpO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/dash-board/dash-board.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/dash-board/dash-board.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\n  <nav class=\"navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow\">\n    <a class=\"navbar-brand col-sm-4 col-md-3 mr-0\" href=\"#\">FS BnB Admin Panel</a>\n    <input class=\"form-control form-control-dark w-100\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\n    <ul class=\"navbar-nav px-3\">\n      <li class=\"nav-item text-nowrap\">\n        <a class=\"nav-link\" href=\"#\">Sign out</a>\n      </li>\n    </ul>\n  </nav>\n\n  <div style=\"margin-top:40px; height: calc(100vh - 40px);\" class=\"container-fluid\">\n    <div style=\"margin-top:40px; height: calc(100vh - 40px);\" class=\"row\">\n\n      <nav class=\"col-md-2 d-md-block bg-light sidebar\">\n        <div class=\"sidebar-sticky\">\n          <ul class=\"nav flex-column\">\n            <li *ngFor=\"let navItem of navItems\">\n\n              <button class=\"nav-link active btn btn-link\" (click)=\"navTo(navItem)\">\n                <span data-feather=\"home\"></span>\n                {{navItem.name}} <span class=\"sr-only\">(current)</span>\n              </button>\n            </li>\n          </ul>\n        </div>\n      </nav>\n\n      <main class=\"col-md-10\">\n        <div\n          class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom\">\n          <h1 class=\"h2\">Dashboard</h1>\n        </div>\n        <div>\n          <router-outlet></router-outlet>\n        </div>\n\n      </main>\n\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/dash-board/dash-board.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/dash-board/dash-board.component.ts ***!
  \***************************************************************/
/*! exports provided: DashBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashBoardComponent", function() { return DashBoardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var DashBoardComponent = /** @class */ (function () {
    function DashBoardComponent(router) {
        this.router = router;
        this.navItems = [
            {
                name: 'Home',
                rout: '/home'
            },
            {
                name: 'Users',
                rout: '/users'
            },
            {
                name: 'Service Providers',
                rout: '/service-providers'
            }
        ];
    }
    DashBoardComponent.prototype.ngOnInit = function () {
        this.router.navigate(['/users']);
    };
    DashBoardComponent.prototype.navTo = function (page) {
        this.router.navigate([page.rout]);
    };
    DashBoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dash-board',
            template: __webpack_require__(/*! ./dash-board.component.html */ "./src/app/components/dash-board/dash-board.component.html"),
            styles: [__webpack_require__(/*! ./dash-board.component.css */ "./src/app/components/dash-board/dash-board.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DashBoardComponent);
    return DashBoardComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n  Welcome To FS BnB Admin Panel!\n</h1>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/service-providers/service-providers.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/service-providers/service-providers.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-row{\r\n    cursor: pointer;\r\n}\r\n\r\n.table-row:hover{\r\n    background-color: rgba(0, 123, 255, 0.5);\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZXJ2aWNlLXByb3ZpZGVycy9zZXJ2aWNlLXByb3ZpZGVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHdDQUF3Qzs7QUFFNUMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NlcnZpY2UtcHJvdmlkZXJzL3NlcnZpY2UtcHJvdmlkZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUtcm93e1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udGFibGUtcm93OmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMjMsIDI1NSwgMC41KTtcclxuXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/service-providers/service-providers.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/service-providers/service-providers.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Service Provider</h3>\n<div class=\"table-responsive\">\n  <table class=\"table table-striped table-sm\">\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Last Name</th>\n        <th>Email</th>\n        <th>Cell Phone</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr class=\"table-row\" *ngFor=\"let sp of serviceProviders\">\n        <td>{{sp.name.toUpperCase()}}</td>\n        <td>{{sp.lastName}}</td>\n        <td>{{sp.email}}</td>\n        <td>+27 0{{sp.cellPhone}}</td>\n        <td>{{sp.numberOfListings}}</td>\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/components/service-providers/service-providers.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/service-providers/service-providers.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ServiceProvidersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceProvidersComponent", function() { return ServiceProvidersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_service_provider_service_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/service-provider/service-provider.service */ "./src/app/services/service-provider/service-provider.service.ts");



var ServiceProvidersComponent = /** @class */ (function () {
    function ServiceProvidersComponent(spService) {
        this.spService = spService;
        this.serviceProviders = this.spService.getServiceProviders();
    }
    ServiceProvidersComponent.prototype.ngOnInit = function () {
    };
    ServiceProvidersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-service-providers',
            template: __webpack_require__(/*! ./service-providers.component.html */ "./src/app/components/service-providers/service-providers.component.html"),
            styles: [__webpack_require__(/*! ./service-providers.component.css */ "./src/app/components/service-providers/service-providers.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_service_provider_service_provider_service__WEBPACK_IMPORTED_MODULE_2__["ServiceProviderService"]])
    ], ServiceProvidersComponent);
    return ServiceProvidersComponent;
}());



/***/ }),

/***/ "./src/app/components/users/users.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/users/users.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-row{\r\n    cursor: pointer;\r\n}\r\n\r\n.table-row:hover{\r\n    background-color: rgba(0, 123, 255, 0.5);\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2Vycy91c2Vycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHdDQUF3Qzs7QUFFNUMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUtcm93e1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udGFibGUtcm93OmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMjMsIDI1NSwgMC41KTtcclxuXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/users/users.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/users/users.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Users</h3>\n<div class=\"table-responsive\">\n  <table class=\"table table-striped table-sm\">\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Last Name</th>\n        <th>Email</th>\n        <th>Cell Phone</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr class=\"table-row\" *ngFor=\"let user of users\">\n        <td>{{user.name}}</td>\n        <td>{{user.lastName}}</td>\n        <td>{{user.email}}</td>\n        <td>+27 0{{user.cellPhone}}</td>\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/components/users/users.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/users/users.component.ts ***!
  \*****************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user/user.service */ "./src/app/services/user/user.service.ts");



var UsersComponent = /** @class */ (function () {
    function UsersComponent(userService) {
        this.userService = userService;
        this.users = this.userService.getUsers();
    }
    UsersComponent.prototype.ngOnInit = function () {
    };
    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/components/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/components/users/users.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/services/service-provider/service-provider.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/services/service-provider/service-provider.service.ts ***!
  \***********************************************************************/
/*! exports provided: ServiceProviderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceProviderService", function() { return ServiceProviderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ServiceProviderService = /** @class */ (function () {
    function ServiceProviderService() {
        this.serviceProviders = [
            {
                name: 'Joe',
                lastName: 'Soap',
                email: 'joe@mail.com',
                cellPhone: 828073593,
                numberOfListings: 5
            },
            {
                name: 'John',
                lastName: 'Doe',
                email: 'john@mail.com',
                cellPhone: 828073545,
                numberOfListings: 15
            }
        ];
    }
    ServiceProviderService.prototype.getServiceProviders = function () {
        return this.serviceProviders;
    };
    ServiceProviderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ServiceProviderService);
    return ServiceProviderService;
}());



/***/ }),

/***/ "./src/app/services/user/user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/user/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserService = /** @class */ (function () {
    function UserService() {
        this.users = [
            {
                name: 'Byron',
                lastName: 'de Villiers',
                email: 'byron@mail.com',
                cellPhone: 828073593
            }
        ];
    }
    UserService.prototype.getUsers = function () {
        return this.users;
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\IX\fs-bnb-admin\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/cli\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/Core/global-service-dictionary.ts":
/*!***************************************************!*\
  !*** ./src/app/Core/global-service-dictionary.ts ***!
  \***************************************************/
/*! exports provided: GLOBAL_SERVICE_DEFINITION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLOBAL_SERVICE_DEFINITION", function() { return GLOBAL_SERVICE_DEFINITION; });
var GLOBAL_SERVICE_DEFINITION = {
    users: {
        getAll: { method: "get" /* GET */, url: '/getAll' },
        getById: { method: "getById" /* GET_BY_ID */, url: '/' },
        doLogin: { method: "post" /* POST */, url: '/doLogin' },
        addUser: { method: "post" /* POST */, url: '/addUser' },
        updateUser: { method: "post" /* POST */, url: '/updateUser' },
        getUsersDto: { method: "get" /* GET */, url: '/getUsersDto' }
    },
};


/***/ }),

/***/ "./src/app/Core/global-service-settings.ts":
/*!*************************************************!*\
  !*** ./src/app/Core/global-service-settings.ts ***!
  \*************************************************/
/*! exports provided: GlobalServiceSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalServiceSettings", function() { return GlobalServiceSettings; });
var GlobalServiceSettings = /** @class */ (function () {
    function GlobalServiceSettings(url, definition) {
        this.url = url;
        this.definition = definition;
    }
    GlobalServiceSettings.ctorParameters = function () { return [
        { type: String },
        { type: undefined }
    ]; };
    return GlobalServiceSettings;
}());



/***/ }),

/***/ "./src/app/Core/global-service.module.ts":
/*!***********************************************!*\
  !*** ./src/app/Core/global-service.module.ts ***!
  \***********************************************/
/*! exports provided: getServicesSettings, GlobalServiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServicesSettings", function() { return getServicesSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalServiceModule", function() { return GlobalServiceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _global_service_dictionary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global-service-dictionary */ "./src/app/Core/global-service-dictionary.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _global_service_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./global-service-settings */ "./src/app/Core/global-service-settings.ts");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./global-service */ "./src/app/Core/global-service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");







function getServicesSettings() {
    if (document && document.getElementsByTagName) {
        var baseElements = Array.from(document.getElementsByTagName('base'));
        if (baseElements && baseElements.length > 0) {
            return new _global_service_settings__WEBPACK_IMPORTED_MODULE_4__["GlobalServiceSettings"](baseElements[0].href + "api", _global_service_dictionary__WEBPACK_IMPORTED_MODULE_1__["GLOBAL_SERVICE_DEFINITION"]);
        }
    }
    return new _global_service_settings__WEBPACK_IMPORTED_MODULE_4__["GlobalServiceSettings"](_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].base_url, _global_service_dictionary__WEBPACK_IMPORTED_MODULE_1__["GLOBAL_SERVICE_DEFINITION"]);
}
var GlobalServiceModule = /** @class */ (function () {
    function GlobalServiceModule() {
    }
    GlobalServiceModule_1 = GlobalServiceModule;
    GlobalServiceModule.forRoot = function () {
        return {
            ngModule: GlobalServiceModule_1,
            providers: [
                { provide: _global_service_settings__WEBPACK_IMPORTED_MODULE_4__["GlobalServiceSettings"], useFactory: getServicesSettings },
                _global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalApiService"]
            ]
        };
    };
    var GlobalServiceModule_1;
    GlobalServiceModule = GlobalServiceModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]
        })
    ], GlobalServiceModule);
    return GlobalServiceModule;
}());



/***/ }),

/***/ "./src/app/Core/global-service.ts":
/*!****************************************!*\
  !*** ./src/app/Core/global-service.ts ***!
  \****************************************/
/*! exports provided: GlobalServiceContainer, GlobalApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalServiceContainer", function() { return GlobalServiceContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalApiService", function() { return GlobalApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _global_service_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./global-service-settings */ "./src/app/Core/global-service-settings.ts");






var GlobalServiceContainer = /** @class */ (function () {
    function GlobalServiceContainer($route, $service) {
        this.$route = $route;
        this.$service = $service;
    }
    GlobalServiceContainer.buildUrlForSegmentsDefinition = function (url) {
        var segmentsData = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            segmentsData[_i - 1] = arguments[_i];
        }
        var actual = String(url);
        var matches = String(url).match(/\$[a-z_]+[a-z_0-9]+/gi);
        (matches || []).forEach(function (match, index) {
            actual = actual.replace(new RegExp("\\$" + match.substr(1), 'g'), String(segmentsData[index]));
        });
        return actual;
    };
    GlobalServiceContainer.prototype.lift = function (key, definition) {
        var _this = this;
        this.__trigger[key] = function () {
            var segments = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                segments[_i] = arguments[_i];
            }
            var actualUrl = _this.$route + GlobalServiceContainer.buildUrlForSegmentsDefinition.apply(GlobalServiceContainer, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"]([definition.url || ''], segments));
            switch (definition.method) {
                case "delete" /* DELETE */:
                    return function (i, p) { return _this.$service['delete'](actualUrl, i, p); };
                case "get" /* GET */:
                    return function (p) { return _this.$service['get'](actualUrl, p); };
                case "getById" /* GET_BY_ID */:
                    return function (i, p) { return _this.$service['getById'](actualUrl, i, p); };
                default:
                    return function (d, p) { return _this.$service[definition.method](actualUrl, d, p); };
            }
        };
        return this;
    };
    GlobalServiceContainer.prototype.close = function () {
        return this.$service;
    };
    GlobalServiceContainer.prototype.get = function (paramsDictionary) {
        return this.$service['get'](this.$route, paramsDictionary);
    };
    GlobalServiceContainer.prototype.getById = function (id, paramsDictionary) {
        return this.$service['getById'](this.$route, id, paramsDictionary);
    };
    GlobalServiceContainer.prototype.delete = function (id, paramsDictionary) {
        return this.$service['delete'](this.$route, id, paramsDictionary);
    };
    GlobalServiceContainer.prototype.post = function (data, paramsDictionary) {
        return this.$service['post'](this.$route, data, paramsDictionary);
    };
    GlobalServiceContainer.prototype.put = function (data, paramsDictionary) {
        return this.$service['put'](this.$route, data, paramsDictionary);
    };
    GlobalServiceContainer.prototype.patch = function (data, paramsDictionary) {
        return this.$service['patch'](this.$route, data, paramsDictionary);
    };
    GlobalServiceContainer.prototype.setTrigger = function (trigger) {
        this.__trigger = trigger;
    };
    GlobalServiceContainer.ctorParameters = function () { return [
        { type: String },
        { type: GlobalApiService }
    ]; };
    return GlobalServiceContainer;
}());

var GlobalApiService = /** @class */ (function () {
    function GlobalApiService(settings, http) {
        this.settings = settings;
        this.http = http;
        this.routesDictionary = {};
        if (settings.definition) {
            this.liftDefinition(settings.definition);
        }
    }
    Object.defineProperty(GlobalApiService.prototype, "routes", {
        get: function () {
            return this.routesDictionary;
        },
        enumerable: true,
        configurable: true
    });
    GlobalApiService.prototype.create = function (controllerRoute) {
        var actual = new GlobalServiceContainer(this.settings.url + '/' + controllerRoute + '/', this);
        var trigger = function () { return actual; };
        actual['setTrigger'](trigger);
        this.routesDictionary[controllerRoute] = trigger;
        return this.routesDictionary[controllerRoute]();
    };
    GlobalApiService.prototype.liftDefinition = function (definition) {
        var _this = this;
        Object.keys(definition || {}).forEach(function (key) {
            var keyValue = definition[key];
            var currentDefinition = _this.create(key);
            Object.keys(keyValue).forEach(function (subRoute) {
                currentDefinition.lift(subRoute, keyValue[subRoute]);
            });
        });
        return this;
    };
    GlobalApiService.prototype.testUrl = function (url, callBack) {
        this.http.head(url, { observe: 'response' }).subscribe(function (x) { return callBack(x.status >= 100 && x.status < 400); }, function (e) { return callBack(false); });
    };
    GlobalApiService.prototype.get = function (url, paramsDictionary) {
        var params = this.setParams(paramsDictionary);
        return this.http.get(url, { params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    GlobalApiService.prototype.getById = function (url, id, paramsDictionary) {
        return this.get("" + url + id, paramsDictionary);
    };
    GlobalApiService.prototype.delete = function (url, id, paramsDictionary) {
        var params = this.setParams(paramsDictionary);
        return this.http.delete(url + "/" + id, { params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    GlobalApiService.prototype.post = function (url, data, paramsDictionary) {
        var params = this.setParams(paramsDictionary);
        return this.http.post(url, data, { params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    GlobalApiService.prototype.put = function (url, data, paramsDictionary) {
        var params = this.setParams(paramsDictionary);
        this.http.put(url, data, { params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    GlobalApiService.prototype.patch = function (url, data, paramsDictionary) {
        var params = this.setParams(paramsDictionary);
        return this.http.patch(url, data, { params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    GlobalApiService.prototype.setParams = function (paramsDictionary) {
        if (paramsDictionary === void 0) { paramsDictionary = {}; }
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (paramsDictionary) {
            Object.keys(paramsDictionary).forEach(function (key) {
                if (paramsDictionary[key]) {
                    params = params.append(key, String(paramsDictionary[key]));
                }
            });
        }
        return params;
    };
    GlobalApiService.prototype.handleError = function (error) {
        console.log(error);
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error);
    };
    GlobalApiService.ctorParameters = function () { return [
        { type: _global_service_settings__WEBPACK_IMPORTED_MODULE_5__["GlobalServiceSettings"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    GlobalApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
    ], GlobalApiService);
    return GlobalApiService;
}());



/***/ }),

/***/ "./src/app/Modules/material.module.ts":
/*!********************************************!*\
  !*** ./src/app/Modules/material.module.ts ***!
  \********************************************/
/*! exports provided: QuickAppProMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickAppProMaterialModule", function() { return QuickAppProMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var QuickAppProMaterialModule = /** @class */ (function () {
    function QuickAppProMaterialModule() {
    }
    QuickAppProMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"]
            ],
        })
    ], QuickAppProMaterialModule);
    return QuickAppProMaterialModule;
}());



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



var routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: '',
        children: [{
                path: '',
                loadChildren: function () { return __webpack_require__.e(/*! import() | Modules-admin-admin-module */ "Modules-admin-admin-module").then(__webpack_require__.bind(null, /*! ./Modules/admin/admin.module */ "./src/app/Modules/admin/admin.module.ts")).then(function (m) { return m.AdminModule; }); }
            }] }
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

/***/ "./src/app/app.component.sass":
/*!************************************!*\
  !*** ./src/app/app.component.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyJ9 */"

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
        this.title = 'FrontMaterias';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.sass */ "./src/app/app.component.sass")]
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
/* harmony import */ var _Core_global_service_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Core/global-service.module */ "./src/app/Core/global-service.module.ts");
/* harmony import */ var _Core_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Core/global-service */ "./src/app/Core/global-service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _Modules_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Modules/material.module */ "./src/app/Modules/material.module.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _Modules_material_module__WEBPACK_IMPORTED_MODULE_8__["QuickAppProMaterialModule"],
                _Core_global_service_module__WEBPACK_IMPORTED_MODULE_1__["GlobalServiceModule"].forRoot()
            ],
            providers: [_Core_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalApiService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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
    production: false,
    base_url: ''
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Usuario\Desktop\Antares\TestEmcor\FrontMaterias\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map
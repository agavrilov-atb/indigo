webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_trust_management_trust_management_component__ = __webpack_require__("../../../../../src/app/components/trust-management/trust-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_network_map_network_map_component__ = __webpack_require__("../../../../../src/app/components/network-map/network-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var APP_ROUTES = [
    { path: 'networkmap', component: __WEBPACK_IMPORTED_MODULE_1__components_network_map_network_map_component__["a" /* NetworkMapComponent */] },
    { path: 'trust', component: __WEBPACK_IMPORTED_MODULE_0__components_trust_management_trust_management_component__["a" /* TrustManagementComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(APP_ROUTES)],
        exports: [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<in-left-nav-bar></in-left-nav-bar>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'indigo';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'in-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_custom_toaster__ = __webpack_require__("../../../../../src/app/shared/custom-toaster.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_indigo_service__ = __webpack_require__("../../../../../src/app/shared/services/indigo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__left_nav_bar_left_nav_bar_component__ = __webpack_require__("../../../../../src/app/left-nav-bar/left-nav-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_cdk_table__ = __webpack_require__("../../../cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_network_map_network_map_component__ = __webpack_require__("../../../../../src/app/components/network-map/network-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_trust_management_trust_management_component__ = __webpack_require__("../../../../../src/app/components/trust-management/trust-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_trust_management_trust_trust_component__ = __webpack_require__("../../../../../src/app/components/trust-management/trust/trust.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__left_nav_bar_left_nav_bar_component__["a" /* LeftNavBarComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_network_map_network_map_component__["a" /* NetworkMapComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_trust_management_trust_management_component__["a" /* TrustManagementComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_trust_management_trust_trust_component__["a" /* TrustComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_10__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_material__["a" /* MatAutocompleteModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_material__["b" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_material__["c" /* MatButtonToggleModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_material__["d" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_material__["e" /* MatCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_material__["f" /* MatChipsModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_material__["g" /* MatDatepickerModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_material__["h" /* MatDialogModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_material__["i" /* MatExpansionModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_material__["k" /* MatGridListModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_material__["l" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_material__["m" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_material__["n" /* MatListModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_material__["o" /* MatMenuModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_material__["p" /* MatNativeDateModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_material__["r" /* MatPaginatorModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_material__["s" /* MatProgressBarModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_material__["t" /* MatProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_material__["u" /* MatRadioModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_material__["v" /* MatRippleModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_material__["w" /* MatSelectModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_material__["x" /* MatSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_material__["z" /* MatSliderModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_material__["y" /* MatSlideToggleModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_material__["A" /* MatSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_material__["B" /* MatSortModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_material__["D" /* MatTableModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_material__["E" /* MatTabsModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_material__["F" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_material__["G" /* MatTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_material__["q" /* MatOptionModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_material__["j" /* MatFormFieldModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_material__["C" /* MatStepperModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_cdk_table__["m" /* CdkTableModule */],
            __WEBPACK_IMPORTED_MODULE_0__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__shared_services_indigo_service__["a" /* IndigoService */], { provide: __WEBPACK_IMPORTED_MODULE_2_ng2_toastr__["ToastOptions"], useClass: __WEBPACK_IMPORTED_MODULE_1__shared_custom_toaster__["a" /* CustomOption */] }],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/network-map/network-map.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/network-map/network-map.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h2>Peers</h2>\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>Name</th>\n        \n            <th>Sovrin DID</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let peer of peers\">\n        \n          <td>{{peer.x500Name}}</td>\n          <td>{{peer.sovrinDID}}</td>\n        </tr>\n        \n      </tbody>\n    </table>\n  </div>\n  "

/***/ }),

/***/ "../../../../../src/app/components/network-map/network-map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkMapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_abstract_component__ = __webpack_require__("../../../../../src/app/shared/abstract-component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_indigo_service__ = __webpack_require__("../../../../../src/app/shared/services/indigo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NetworkMapComponent = (function (_super) {
    __extends(NetworkMapComponent, _super);
    function NetworkMapComponent(indigoService, toastr, vcr) {
        var _this = _super.call(this, indigoService, toastr, vcr) || this;
        _this.indigoService = indigoService;
        _this.toastr = toastr;
        return _this;
    }
    NetworkMapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.indigoService.fetchPeers().then(function (data) { return _this.peers = data; })
            .catch(function (e) {
            console.log(e);
            _this.toastr.error(e, 'Error');
        });
    };
    return NetworkMapComponent;
}(__WEBPACK_IMPORTED_MODULE_1__shared_abstract_component__["a" /* AbstractComponent */]));
NetworkMapComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'network-map',
        template: __webpack_require__("../../../../../src/app/components/network-map/network-map.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/network-map/network-map.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_indigo_service__["a" /* IndigoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_indigo_service__["a" /* IndigoService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_ng2_toastr__["ToastsManager"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewContainerRef"]) === "function" && _c || Object])
], NetworkMapComponent);

var _a, _b, _c;
//# sourceMappingURL=network-map.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/trust-management/trust-management.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/trust-management/trust-management.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<h3>My DID <span class=\"label label-default\">{{myDID}}</span></h3> \n<br><br>\n        <div class=\"row\">\n            <div class=\"col-sm-4\">\n        \n                    <div class=\"panel panel-default\">\n                            <div class=\"panel-heading\">Setup Trust</div>\n                            <div class=\"panel-body\">\n                                \n                                    <form>\n                                            <div class=\"form-group\">\n                                              <label for=\"otherPartyDID\">Other Party DID:</label>\n                                              <input class=\"form-control\" id=\"otherPartyDID\">\n                                            </div>\n                                        \n                                            <button type=\"submit\" class=\"btn btn-default\">Setup</button>\n                                    </form>\n                            </div>\n                    </div>\n            </div>\n\n            <div class=\"col-sm-8\">\n                    \n                    \n                    <trust title=\"Pending Trusts From Me\"></trust>\n                    <trust title=\"Pending Trusts From Others\"></trust>\n                    <trust title=\"Established Trusts\"></trust>\n            </div>\n        \n      </div> \n</div>"

/***/ }),

/***/ "../../../../../src/app/components/trust-management/trust-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrustManagementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_indigo_service__ = __webpack_require__("../../../../../src/app/shared/services/indigo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_abstract_component__ = __webpack_require__("../../../../../src/app/shared/abstract-component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TrustManagementComponent = (function (_super) {
    __extends(TrustManagementComponent, _super);
    function TrustManagementComponent(indigoService, toastr, vcr) {
        var _this = _super.call(this, indigoService, toastr, vcr) || this;
        _this.indigoService = indigoService;
        _this.toastr = toastr;
        debugger;
        _this.indigoService.fetchMe().then(function (me) {
            console.log(me);
            _this.me = me;
            //       this.toastr.success(this.meShort + ' ,welcome to Corda-Sovrin!', 'Success!');
        }).catch(function (e) {
            console.log(e);
            _this.toastr.error(e, 'Error');
        });
        return _this;
    }
    Object.defineProperty(TrustManagementComponent.prototype, "myDID", {
        get: function () {
            if (this.me) {
                return this.me.me.sovrinDID;
            }
        },
        enumerable: true,
        configurable: true
    });
    TrustManagementComponent.prototype.ngOnInit = function () {
    };
    return TrustManagementComponent;
}(__WEBPACK_IMPORTED_MODULE_2__shared_abstract_component__["a" /* AbstractComponent */]));
TrustManagementComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'trust-management',
        template: __webpack_require__("../../../../../src/app/components/trust-management/trust-management.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/trust-management/trust-management.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__shared_services_indigo_service__["a" /* IndigoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_services_indigo_service__["a" /* IndigoService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_toastr__["ToastsManager"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewContainerRef"]) === "function" && _c || Object])
], TrustManagementComponent);

var _a, _b, _c;
//# sourceMappingURL=trust-management.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/trust-management/trust/trust.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/trust-management/trust/trust.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n    <div class=\"panel-heading\">{{title}}</div>\n    <div class=\"panel-body\">       \n    <table class=\"table table-bordered\">\n            <thead>\n                <tr>\n                <th>Name</th>\n                <th>Sovrin DID</th>\n                <th>Date</th>\n                <th>Action</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let peer of peers\">\n                \n                <td>{{peer.x500Name}}</td>\n                <td>{{peer.sovrinDID}}</td>\n                </tr>\n                \n            </tbody>\n            </table>\n        </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/trust-management/trust/trust.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrustComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TrustComponent = (function () {
    function TrustComponent() {
    }
    TrustComponent.prototype.ngOnInit = function () {
    };
    return TrustComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TrustComponent.prototype, "title", void 0);
TrustComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'trust',
        template: __webpack_require__("../../../../../src/app/components/trust-management/trust/trust.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/trust-management/trust/trust.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TrustComponent);

//# sourceMappingURL=trust.component.js.map

/***/ }),

/***/ "../../../../../src/app/config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Constants; });
var Constants = (function () {
    function Constants() {
    }
    return Constants;
}());

Constants.servicerUrl = 'http://localhost:10010';
Constants.baseUrl = window.location.origin === 'http://localhost:4200'
    ? Constants.servicerUrl
    : window.location.origin;
//# sourceMappingURL=config.js.map

/***/ }),

/***/ "../../../../../src/app/left-nav-bar/left-nav-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar-nav i{\nfont-size:30px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/left-nav-bar/left-nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-sidenav\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span> \n      </button>\n      <a class=\"navbar-brand\" href=\"#\">Corda-Sovrin</a>\n    </div>\n    <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n      <ul class=\"nav navbar-nav\">\n        <li [routerLinkActive]=\"['active']\"><a href=\"#\"><i class=\"fa fa-telegram\"></i></a> </li>\n        <li [routerLinkActive]=\"['active']\"><a href=\"#\"><i class=\"fa fa-cog\"></i></a> </li>\n        <li [routerLinkActive]=\"['active']\"><a [routerLink]=\"['networkmap']\"><i class=\"fa fa-users\" title=\"Peers\"></i></a> </li>\n        <li [routerLinkActive]=\"['active']\"><a [routerLink]=\"['trust']\"><i class=\"fa fa-handshake-o\" title=\"Trust Management\"></i></a> </li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n          <li><a href=\"#\"><span class=\"glyphicon glyphicon-user\"></span> {{meShort}}</a></li>\n          <li><a href=\"#\"><span class=\"glyphicon glyphicon-log-in\"></span> Login</a></li>\n        </ul>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/left-nav-bar/left-nav-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeftNavBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_abstract_component__ = __webpack_require__("../../../../../src/app/shared/abstract-component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("../../../../../src/app/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_indigo_service__ = __webpack_require__("../../../../../src/app/shared/services/indigo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_toastr__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LeftNavBarComponent = (function (_super) {
    __extends(LeftNavBarComponent, _super);
    function LeftNavBarComponent(indigoService, toastr, vcr) {
        var _this = _super.call(this, indigoService, toastr, vcr) || this;
        _this.indigoService = indigoService;
        _this.toastr = toastr;
        return _this;
    }
    Object.defineProperty(LeftNavBarComponent.prototype, "meShort", {
        get: function () {
            if (this.myinfo) {
                return __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* Utils */].getShortName(this.myinfo.me.x500Name);
            }
        },
        enumerable: true,
        configurable: true
    });
    LeftNavBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        debugger;
        this.indigoService.fetchMe().then(function (me) {
            _this.myinfo = me;
            //       this.toastr.success(this.meShort + ' ,welcome to Corda-Sovrin!', 'Success!');
        }).catch(function (e) {
            console.log(e);
            _this.toastr.error(e, 'Error');
        });
    };
    return LeftNavBarComponent;
}(__WEBPACK_IMPORTED_MODULE_0__shared_abstract_component__["a" /* AbstractComponent */]));
LeftNavBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'in-left-nav-bar',
        template: __webpack_require__("../../../../../src/app/left-nav-bar/left-nav-bar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/left-nav-bar/left-nav-bar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_indigo_service__["a" /* IndigoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_indigo_service__["a" /* IndigoService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_toastr__["ToastsManager"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewContainerRef"]) === "function" && _c || Object])
], LeftNavBarComponent);

var _a, _b, _c;
//# sourceMappingURL=left-nav-bar.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/abstract-component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbstractComponent; });
var AbstractComponent = (function () {
    function AbstractComponent(indigoService, toastr, vcr) {
        this.indigoService = indigoService;
        this.toastr = toastr;
        this.toastr.setRootViewContainerRef(vcr);
    }
    return AbstractComponent;
}());

//# sourceMappingURL=abstract-component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/custom-toaster.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomOption; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ng2_toastr__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var CustomOption = (function (_super) {
    __extends(CustomOption, _super);
    function CustomOption() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.animate = 'flyRight'; // you can override any options available
        _this.newestOnTop = false;
        _this.showCloseButton = true;
        _this.positionClass = 'toast-bottom-right';
        return _this;
    }
    return CustomOption;
}(__WEBPACK_IMPORTED_MODULE_0_ng2_toastr__["ToastOptions"]));

//# sourceMappingURL=custom-toaster.js.map

/***/ }),

/***/ "../../../../../src/app/shared/models/http-response.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HttpResponseError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Error; });
var HttpResponseError = (function () {
    function HttpResponseError(error) {
        this.error = error;
    }
    return HttpResponseError;
}());

var Error = (function () {
    function Error(statusCode, name, message, stack) {
        this.statusCode = statusCode;
        this.name = name;
        this.message = message;
        this.stack = stack;
    }
    return Error;
}());

//# sourceMappingURL=http-response.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/indigo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndigoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__("../../../../../src/app/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("../../../../../src/app/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IndigoService = (function () {
    function IndigoService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_0__config__["a" /* Constants */].baseUrl;
    }
    IndigoService.prototype.fetchMe = function () {
        var _this = this;
        debugger;
        var req = __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* Utils */].getHttpRequest(this.baseUrl + '/api/com.indigo/me');
        return this._me ? Promise.resolve(this._me) :
            this.http.request(req)
                .toPromise()
                .then(function (res) {
                _this._me = res.json();
                return _this._me;
            })
                .catch(function (error) {
                return __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* Utils */].handleError(error);
            });
    };
    IndigoService.prototype.fetchPeers = function () {
        var _this = this;
        var req = __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* Utils */].getHttpRequest(this.baseUrl + '/api/com.indigo/AllPeers');
        return this._peers ? Promise.resolve(this._peers) :
            this.http.request(req)
                .toPromise()
                .then(function (res) { return _this._peers = res.json(); })
                .catch(function (error) {
                return __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* Utils */].handleError(error);
            });
    };
    return IndigoService;
}());
IndigoService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _a || Object])
], IndigoService);

var _a;
//# sourceMappingURL=indigo.service.js.map

/***/ }),

/***/ "../../../../../src/app/utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utils; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_models_http_response__ = __webpack_require__("../../../../../src/app/shared/models/http-response.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);



var Utils = (function () {
    function Utils() {
    }
    Utils.getShortName = function (name) {
        if (name) {
            //const short = name.split(',')[1].replace('O=', '').toString();
            var nameArray = name.split(',');
            var short = nameArray.find(function (x) { return x.indexOf('O=') > -1; }).replace('O=', '').toString();
            return short;
        }
    };
    Utils.getHttpRequest = function (url) {
        var headers = this.getHeaders();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            headers: headers,
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Get,
            url: url,
            body: {}
        });
        var req = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Request */](options);
        return req;
    };
    Utils.getHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Accept', 'application/json');
        headers.append('Content-type', 'application/json');
        // headers.append('ActivityId', activityId);
        return headers;
    };
    Utils.openSuccessSnackBar = function (snackBar, message, duration, action) {
        snackBar.open(message, action, { duration: duration || 3000, extraClasses: ['success-snackbar'] });
    };
    Utils.openFailureSnackBar = function (snackBar, error, duration, action) {
        debugger;
        snackBar.open(error.error.statusCode + ":" + error.error.message, action, { duration: duration || 3000, extraClasses: ['failure-snackbar'] });
    };
    Utils.handleError = function (errorResponse) {
        var httpRespError;
        if (errorResponse.status != 0) {
            httpRespError = errorResponse.json();
        }
        else {
            var resp = errorResponse;
            httpRespError = new __WEBPACK_IMPORTED_MODULE_0__shared_models_http_response__["b" /* HttpResponseError */](new __WEBPACK_IMPORTED_MODULE_0__shared_models_http_response__["a" /* Error */](resp.status.toString(), 'error', resp.toString(), ''));
        }
        console.error('An error occured ', httpRespError);
        return Promise.reject(httpRespError);
    };
    return Utils;
}());

//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_wallet_management_wallet_management_component__ = __webpack_require__("../../../../../src/app/components/wallet-management/wallet-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_proof_management_proof_management_component__ = __webpack_require__("../../../../../src/app/components/proof-management/proof-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_claim_management_claim_management_component__ = __webpack_require__("../../../../../src/app/components/claim-management/claim-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_trust_management_trust_management_component__ = __webpack_require__("../../../../../src/app/components/trust-management/trust-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_network_map_network_map_component__ = __webpack_require__("../../../../../src/app/components/network-map/network-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var APP_ROUTES = [
    { path: 'wallet', component: __WEBPACK_IMPORTED_MODULE_0__components_wallet_management_wallet_management_component__["a" /* WalletManagementComponent */] },
    { path: 'networkmap', component: __WEBPACK_IMPORTED_MODULE_4__components_network_map_network_map_component__["a" /* NetworkMapComponent */] },
    { path: 'trust', component: __WEBPACK_IMPORTED_MODULE_3__components_trust_management_trust_management_component__["a" /* TrustManagementComponent */] },
    { path: 'claim', component: __WEBPACK_IMPORTED_MODULE_2__components_claim_management_claim_management_component__["a" /* ClaimManagementComponent */] },
    { path: 'proof', component: __WEBPACK_IMPORTED_MODULE_1__components_proof_management_proof_management_component__["a" /* ProofManagementComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* RouterModule */].forRoot(APP_ROUTES)],
        exports: [__WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* RouterModule */]]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_trust_management_services_trust_service__ = __webpack_require__("../../../../../src/app/components/trust-management/services/trust.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_wallet_management_service_wallet_service__ = __webpack_require__("../../../../../src/app/components/wallet-management/service/wallet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_custom_toaster__ = __webpack_require__("../../../../../src/app/shared/custom-toaster.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_services_indigo_service__ = __webpack_require__("../../../../../src/app/shared/services/indigo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__left_nav_bar_left_nav_bar_component__ = __webpack_require__("../../../../../src/app/left-nav-bar/left-nav-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_cdk_table__ = __webpack_require__("../../../cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_network_map_network_map_component__ = __webpack_require__("../../../../../src/app/components/network-map/network-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_trust_management_trust_management_component__ = __webpack_require__("../../../../../src/app/components/trust-management/trust-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_trust_management_trust_trust_component__ = __webpack_require__("../../../../../src/app/components/trust-management/trust/trust.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_claim_management_claim_management_component__ = __webpack_require__("../../../../../src/app/components/claim-management/claim-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_proof_management_proof_management_component__ = __webpack_require__("../../../../../src/app/components/proof-management/proof-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_claim_management_claim_claim_component__ = __webpack_require__("../../../../../src/app/components/claim-management/claim/claim.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_claim_management_claim_def_claim_def_component__ = __webpack_require__("../../../../../src/app/components/claim-management/claim-def/claim-def.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_claim_management_claim_req_claim_req_component__ = __webpack_require__("../../../../../src/app/components/claim-management/claim-req/claim-req.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_proof_management_proofs_issued_proofs_issued_component__ = __webpack_require__("../../../../../src/app/components/proof-management/proofs-issued/proofs-issued.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_proof_management_proofs_requested_proofs_requested_component__ = __webpack_require__("../../../../../src/app/components/proof-management/proofs-requested/proofs-requested.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_proof_management_proofs_received_proofs_received_component__ = __webpack_require__("../../../../../src/app/components/proof-management/proofs-received/proofs-received.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_wallet_management_wallet_management_component__ = __webpack_require__("../../../../../src/app/components/wallet-management/wallet-management.component.ts");
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
    Object(__WEBPACK_IMPORTED_MODULE_10__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__left_nav_bar_left_nav_bar_component__["a" /* LeftNavBarComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_network_map_network_map_component__["a" /* NetworkMapComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_trust_management_trust_management_component__["a" /* TrustManagementComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_trust_management_trust_trust_component__["a" /* TrustComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_claim_management_claim_management_component__["a" /* ClaimManagementComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_proof_management_proof_management_component__["a" /* ProofManagementComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_claim_management_claim_claim_component__["a" /* ClaimComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_claim_management_claim_def_claim_def_component__["a" /* ClaimDefComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_claim_management_claim_req_claim_req_component__["a" /* ClaimReqComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_proof_management_proofs_issued_proofs_issued_component__["a" /* ProofsIssuedComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_proof_management_proofs_requested_proofs_requested_component__["a" /* ProofsRequestedComponent */],
            __WEBPACK_IMPORTED_MODULE_27__components_proof_management_proofs_received_proofs_received_component__["a" /* ProofsReceivedComponent */],
            __WEBPACK_IMPORTED_MODULE_28__components_wallet_management_wallet_management_component__["a" /* WalletManagementComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_6_ng2_toastr_ng2_toastr__["ToastModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_12__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["a" /* MatAutocompleteModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["b" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["c" /* MatButtonToggleModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["d" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["e" /* MatCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["f" /* MatChipsModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["g" /* MatDatepickerModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["h" /* MatDialogModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["i" /* MatExpansionModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["k" /* MatGridListModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["l" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["m" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["n" /* MatListModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["o" /* MatMenuModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["p" /* MatNativeDateModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["r" /* MatPaginatorModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["s" /* MatProgressBarModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["t" /* MatProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["u" /* MatRadioModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["v" /* MatRippleModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["w" /* MatSelectModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["x" /* MatSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["z" /* MatSliderModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["y" /* MatSlideToggleModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["A" /* MatSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["B" /* MatSortModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["D" /* MatTableModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["E" /* MatTabsModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["F" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["G" /* MatTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["q" /* MatOptionModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["j" /* MatFormFieldModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["C" /* MatStepperModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_16__angular_cdk_table__["m" /* CdkTableModule */],
            __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_0__components_trust_management_services_trust_service__["a" /* TrustService */], __WEBPACK_IMPORTED_MODULE_1__components_wallet_management_service_wallet_service__["a" /* WalletService */], __WEBPACK_IMPORTED_MODULE_7__shared_services_indigo_service__["a" /* IndigoService */], { provide: __WEBPACK_IMPORTED_MODULE_4_ng2_toastr__["ToastOptions"], useClass: __WEBPACK_IMPORTED_MODULE_3__shared_custom_toaster__["a" /* CustomOption */] }],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/claim-management/claim-def/claim-def.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/claim-management/claim-def/claim-def.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-danger\">\n    <div class=\"panel-heading\">Available Claim Definitions</div>\n    <div class=\"panel-body\">       \n    <table class=\"table table-bordered\">\n            <thead>\n                <tr>\n                <th>Claim Def Name</th>\n                <th>Seq No.</th>\n                <th>Date</th>\n                <th>Action</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let peer of peers\">\n                \n                <td>{{peer.x500Name}}</td>\n                <td>{{peer.sovrinDID}}</td>\n                </tr>\n                \n            </tbody>\n            </table>\n        </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/claim-management/claim-def/claim-def.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClaimDefComponent; });
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

var ClaimDefComponent = (function () {
    function ClaimDefComponent() {
    }
    ClaimDefComponent.prototype.ngOnInit = function () {
    };
    return ClaimDefComponent;
}());
ClaimDefComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'claim-def',
        template: __webpack_require__("../../../../../src/app/components/claim-management/claim-def/claim-def.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/claim-management/claim-def/claim-def.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ClaimDefComponent);

//# sourceMappingURL=claim-def.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/claim-management/claim-management.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/claim-management/claim-management.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h2 class=\"text-danger\">Claim Management</h2> \n    <h3>My DID <span class=\"label label-default\">{{myDID}}</span></h3> \n    <br><br>\n            <div class=\"row\">\n                <div class=\"col-sm-4\">\n            \n                        <div class=\"panel panel-danger\">\n                                <div class=\"panel-heading\">Creat Claim Definition</div>\n                                <div class=\"panel-body\">\n                                    \n                                        <form>\n                                                <div class=\"form-group\">\n                                                  <label for=\"from\">From:</label>\n                                                  <span>{{myShortName}}</span>\n                                                </div>\n                                                <div class=\"form-group\">\n                                                    <label for=\"fromDID\">From DID:</label>\n                                                </div>\n\n                                                <div class=\"form-group\">\n                                                    <label for=\"claimDef\">Claim Def:</label>\n                                                    <textarea row=\"5\" class=\"form-control\" id=\"claimDef\"></textarea>\n                                                </div>\n                                                <button type=\"submit\" class=\"btn btn-danger\">Setup</button>\n                                        </form>\n                                </div>\n                        </div>\n                </div>\n    \n                <div class=\"col-sm-8\">\n                        \n                        \n                        <claim-def></claim-def>\n                        <claim-req></claim-req>\n                        <claim></claim>\n                </div>\n            \n          </div> \n    </div>"

/***/ }),

/***/ "../../../../../src/app/components/claim-management/claim-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClaimManagementComponent; });
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

var ClaimManagementComponent = (function () {
    function ClaimManagementComponent() {
    }
    ClaimManagementComponent.prototype.ngOnInit = function () {
    };
    return ClaimManagementComponent;
}());
ClaimManagementComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'claim-management',
        template: __webpack_require__("../../../../../src/app/components/claim-management/claim-management.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/claim-management/claim-management.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ClaimManagementComponent);

//# sourceMappingURL=claim-management.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/claim-management/claim-req/claim-req.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/claim-management/claim-req/claim-req.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-danger\">\n    <div class=\"panel-heading\">Pending Claim Requests</div>\n    <div class=\"panel-body\">       \n    <table class=\"table table-bordered\">\n            <thead>\n                <tr>\n                <th>To</th>\n                <th>Claim Def</th>\n                <th>Create Date</th>\n                <th>Action</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let peer of peers\">\n                \n                <td>{{peer.x500Name}}</td>\n                <td>{{peer.sovrinDID}}</td>\n                </tr>\n                \n            </tbody>\n            </table>\n        </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/claim-management/claim-req/claim-req.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClaimReqComponent; });
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

var ClaimReqComponent = (function () {
    function ClaimReqComponent() {
    }
    ClaimReqComponent.prototype.ngOnInit = function () {
    };
    return ClaimReqComponent;
}());
ClaimReqComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'claim-req',
        template: __webpack_require__("../../../../../src/app/components/claim-management/claim-req/claim-req.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/claim-management/claim-req/claim-req.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ClaimReqComponent);

//# sourceMappingURL=claim-req.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/claim-management/claim/claim.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/claim-management/claim/claim.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-danger\">\n    <div class=\"panel-heading\">Previous Claims</div>\n    <div class=\"panel-body\">       \n    <table class=\"table table-bordered\">\n            <thead>\n                <tr>\n                <th>Issued To</th>\n                <th>Claim Def</th>\n                <th>Create Date</th>\n                <th>Action</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let peer of peers\">\n                \n                <td>{{peer.x500Name}}</td>\n                <td>{{peer.sovrinDID}}</td>\n                </tr>\n                \n            </tbody>\n            </table>\n        </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/claim-management/claim/claim.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClaimComponent; });
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

var ClaimComponent = (function () {
    function ClaimComponent() {
    }
    ClaimComponent.prototype.ngOnInit = function () {
    };
    return ClaimComponent;
}());
ClaimComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'claim',
        template: __webpack_require__("../../../../../src/app/components/claim-management/claim/claim.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/claim-management/claim/claim.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ClaimComponent);

//# sourceMappingURL=claim.component.js.map

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

module.exports = "<div class=\"container\">\n    <h2>Peers</h2>\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>Name</th>\n        \n            <th>Sovrin DID</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let peer of peers\">\n        \n          <td>{{peer.x500Name}}</td>\n          <td>{{peer.wallet.storedDIDs}}</td>\n        </tr>\n        \n      </tbody>\n    </table>\n  </div>\n  "

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

/***/ "../../../../../src/app/components/proof-management/proof-management.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/proof-management/proof-management.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h2 class=\"text-danger\">Proof Management</h2> \n    <h3>My DID <span class=\"label label-default\">{{myDID}}</span></h3> \n    <br><br>\n            <div class=\"row\">\n                <div class=\"col-sm-4\">\n            \n                        <div class=\"panel panel-danger\">\n                                <div class=\"panel-heading\">Creat Proof Request</div>\n                                <div class=\"panel-body\">\n                                    \n                                        <form>\n                                                <div class=\"form-group\">\n                                                  <label for=\"from\">From:</label>\n                                                  <span>{{myShortName}}</span>\n                                                </div>\n                                                <div class=\"form-group\">\n                                                    <label for=\"fromDID\">To DID:</label>\n                                                </div>\n\n                                                <div class=\"form-group\">\n                                                    <label for=\"claimDef\">Proof Def:</label>\n                                                    <textarea row=\"5\" class=\"form-control\" id=\"claimDef\"></textarea>\n                                                </div>\n                                                <button type=\"submit\" class=\"btn btn-danger\">Create</button>\n                                        </form>\n                                </div>\n                        </div>\n                </div>\n    \n                <div class=\"col-sm-8\">\n                        \n                        \n                        <proofs-issued></proofs-issued>\n                        <proofs-received></proofs-received>\n                        <proofs-requested></proofs-requested>\n                </div>\n            \n          </div> \n    </div>"

/***/ }),

/***/ "../../../../../src/app/components/proof-management/proof-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProofManagementComponent; });
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

var ProofManagementComponent = (function () {
    function ProofManagementComponent() {
    }
    ProofManagementComponent.prototype.ngOnInit = function () {
    };
    return ProofManagementComponent;
}());
ProofManagementComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'proof-management',
        template: __webpack_require__("../../../../../src/app/components/proof-management/proof-management.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/proof-management/proof-management.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProofManagementComponent);

//# sourceMappingURL=proof-management.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/proof-management/proofs-issued/proofs-issued.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/proof-management/proofs-issued/proofs-issued.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-danger\">\n    <div class=\"panel-heading\">Proof Issued</div>\n    <div class=\"panel-body\">       \n    <table class=\"table table-bordered\">\n            <thead>\n                <tr>\n                <th>To</th>\n                <th>Proof Def</th>\n                <th>Date</th>\n                <th>Action</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let peer of peers\">\n                \n                <td>{{peer.x500Name}}</td>\n                <td>{{peer.sovrinDID}}</td>\n                </tr>\n                \n            </tbody>\n            </table>\n        </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/proof-management/proofs-issued/proofs-issued.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProofsIssuedComponent; });
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

var ProofsIssuedComponent = (function () {
    function ProofsIssuedComponent() {
    }
    ProofsIssuedComponent.prototype.ngOnInit = function () {
    };
    return ProofsIssuedComponent;
}());
ProofsIssuedComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'proofs-issued',
        template: __webpack_require__("../../../../../src/app/components/proof-management/proofs-issued/proofs-issued.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/proof-management/proofs-issued/proofs-issued.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProofsIssuedComponent);

//# sourceMappingURL=proofs-issued.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/proof-management/proofs-received/proofs-received.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/proof-management/proofs-received/proofs-received.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-danger\">\n    <div class=\"panel-heading\">Proofs Received</div>\n    <div class=\"panel-body\">       \n    <table class=\"table table-bordered\">\n            <thead>\n                <tr>\n                <th>From</th>\n                <th>Proof Def</th>\n                <th>Date</th>\n                <th>Action</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let peer of peers\">\n                \n                <td>{{peer.x500Name}}</td>\n                <td>{{peer.sovrinDID}}</td>\n                </tr>\n                \n            </tbody>\n            </table>\n        </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/proof-management/proofs-received/proofs-received.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProofsReceivedComponent; });
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

var ProofsReceivedComponent = (function () {
    function ProofsReceivedComponent() {
    }
    ProofsReceivedComponent.prototype.ngOnInit = function () {
    };
    return ProofsReceivedComponent;
}());
ProofsReceivedComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'proofs-received',
        template: __webpack_require__("../../../../../src/app/components/proof-management/proofs-received/proofs-received.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/proof-management/proofs-received/proofs-received.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProofsReceivedComponent);

//# sourceMappingURL=proofs-received.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/proof-management/proofs-requested/proofs-requested.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/proof-management/proofs-requested/proofs-requested.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-danger\">\n    <div class=\"panel-heading\">Proofs Requested</div>\n    <div class=\"panel-body\">       \n    <table class=\"table table-bordered\">\n            <thead>\n                <tr>\n                <th>To</th>\n                <th>Proof Def</th>\n                <th>Date</th>\n                <th>Action</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let peer of peers\">\n                \n                <td>{{peer.x500Name}}</td>\n                <td>{{peer.sovrinDID}}</td>\n                </tr>\n                \n            </tbody>\n            </table>\n        </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/proof-management/proofs-requested/proofs-requested.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProofsRequestedComponent; });
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

var ProofsRequestedComponent = (function () {
    function ProofsRequestedComponent() {
    }
    ProofsRequestedComponent.prototype.ngOnInit = function () {
    };
    return ProofsRequestedComponent;
}());
ProofsRequestedComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'proofs-requested',
        template: __webpack_require__("../../../../../src/app/components/proof-management/proofs-requested/proofs-requested.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/proof-management/proofs-requested/proofs-requested.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProofsRequestedComponent);

//# sourceMappingURL=proofs-requested.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/trust-management/services/trust.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrustService; });
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





var TrustService = (function () {
    function TrustService(http) {
        this.http = http;
    }
    TrustService.prototype.setupTrust = function (trustRequest) {
        var req = __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* Utils */].postHttpRequest(__WEBPACK_IMPORTED_MODULE_0__config__["a" /* Constants */].baseUrl + '/api/com.indigo/setupTrust', trustRequest);
        return this.http.request(req)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* Utils */].handleError(error);
        });
    };
    TrustService.prototype.getTrusts = function () {
        var req = __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* Utils */].getHttpRequest(__WEBPACK_IMPORTED_MODULE_0__config__["a" /* Constants */].baseUrl + '/api/com.indigo/getTrusts');
        return this.http.request(req)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* Utils */].handleError(error);
        });
    };
    return TrustService;
}());
TrustService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _a || Object])
], TrustService);

var _a;
//# sourceMappingURL=trust.service.js.map

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

module.exports = "<div class=\"container\" style=\"min-width: 100%\">\n<h2 class=\"text-danger\">Trust Management</h2> \n<br><br>\n        <div class=\"row\">\n            <div class=\"col-sm-3\">\n        \n                    <div class=\"panel panel-danger\">\n                            <div class=\"panel-heading\">Setup Trust</div>\n                            <div class=\"panel-body\">\n                                \n                                    <form #setupTrustForm = \"ngForm\">\n                                            <div class=\"form-group\">\n                                                <label for=\"otherPartyDID\">Select My DID:</label>\n                                                \n                                                <div *ngIf=\"me\" class=\"input-group\">\n                                                        <select  *ngFor=\"let did of me.wallet.storedDIDs\" type=\"\" class=\"form-control\"  [(ngModel)]=\"mySelectedDID\" name=\"mySelectedDID\">\n                                                                <option>{{did}}</option>\n                                                        </select>      \n                                                        \n                                                </div>\n                                                <br>\n                                              <label for=\"otherPartyDID\">Other Party DID:</label>\n                                                \n                                              <div class=\"input-group\">\n                                                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"otherPartySelectedDID\" name=\"otherPartySelectedDID\">\n                                                        <div class=\"input-group-btn\">\n                                                            <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\"><span class=\"caret\"></span></button>\n                                                            <ul id=\"color-dropdown-menu\" class=\"dropdown-menu dropdown-menu-right\" role=\"menu\">\n                                                                <li *ngFor=\"let did of otherNodeDids\" class=\"input-lg\">\n                                                                        <a href=\"javascript:void(0)\" (click)=\"onSelectDID(did)\">{{did.name + ' - ' + did.did}}</a>\n                                                                </li>\n                                                            </ul>\n                                                        </div>\n                                                </div>\n\n                                                <label for=\"otherPartyDID\">Other Party Name:</label>\n                                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"otherPartySelectedName\" name=\"otherPartySelectedName\">\n                                                \n                                           </div>\n                                            \n                                            <button *ngIf=\"!displaySpinner\" type=\"submit\" class=\"btn btn-danger\" (click)=\"onSetupTrust(setupTrustForm.value)\" >Setup</button>\n                                           \n                                            <i *ngIf=\"displaySpinner\" class=\"fa fa-cog fa-spin fa-3x fa-fw\"></i>\n                                            <span class=\"sr-only\">Loading...</span>\n                                    </form>\n                            </div>\n                    </div>\n            </div>\n\n            <div class=\"col-sm-9\">\n                    \n                    <trust [trusts]=\"trusts\" title=\"Established Trusts\"></trust>\n            </div>\n        \n      </div> \n</div>"

/***/ }),

/***/ "../../../../../src/app/components/trust-management/trust-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrustManagementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_trust_service__ = __webpack_require__("../../../../../src/app/components/trust-management/services/trust.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_indigo_service__ = __webpack_require__("../../../../../src/app/shared/services/indigo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_models_corda_network__ = __webpack_require__("../../../../../src/app/shared/models/corda-network.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_abstract_component__ = __webpack_require__("../../../../../src/app/shared/abstract-component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    function TrustManagementComponent(trustService, indigoService, toastr, vcr) {
        var _this = _super.call(this, indigoService, toastr, vcr) || this;
        _this.trustService = trustService;
        _this.indigoService = indigoService;
        _this.toastr = toastr;
        _this.otherNodeDids = new Array();
        _this.displaySpinner = false;
        _this.fetchMe();
        _this.fetchPeers();
        _this.getTrusts();
        return _this;
    }
    TrustManagementComponent.prototype.ngOnInit = function () {
    };
    TrustManagementComponent.prototype.onSelectDID = function (did) {
        this.otherPartySelectedDID = did.did;
        this.otherPartySelectedName = did.name;
    };
    TrustManagementComponent.prototype.onSelectMyDID = function (did) {
        this.mySelectedDID = did;
    };
    TrustManagementComponent.prototype.onSetupTrust = function (formData) {
        var _this = this;
        var trustRequest = new __WEBPACK_IMPORTED_MODULE_2__shared_models_corda_network__["a" /* TrustRequest */]();
        trustRequest.myDid = formData.mySelectedDID;
        trustRequest.otherPartyDid = formData.otherPartySelectedDID;
        trustRequest.otherPartyName = formData.otherPartySelectedName;
        this.displaySpinner = true;
        this.trustService.setupTrust(trustRequest).then(function (trusts) {
            _this.displaySpinner = false;
            _this.trusts = trusts;
            _this.toastr.success('A new trust has been established successfully!', 'Success!');
        }).catch(function (e) {
            _this.displaySpinner = false;
            console.log(e);
        });
    };
    TrustManagementComponent.prototype.fetchMe = function () {
        var _this = this;
        this.indigoService.fetchMe().then(function (me) {
            _this.me = me;
        }).catch(function (e) {
            console.log(e);
            _this.toastr.error(e, 'Error');
        });
    };
    TrustManagementComponent.prototype.fetchPeers = function () {
        var _this = this;
        this.indigoService.fetchPeers().then(function (peers) {
            peers.forEach(function (peer) {
                if (peer.wallet.storedDIDs) {
                    console.log(peer.wallet.storedDIDs);
                    peer.wallet.storedDIDs.forEach(function (did) { return _this.otherNodeDids.push({ name: peer.x500Name, did: did }); });
                }
            });
        }).catch(function (e) {
            console.log(e);
            _this.toastr.error(e, 'Error');
        });
    };
    TrustManagementComponent.prototype.getTrusts = function () {
        var _this = this;
        this.trustService.getTrusts().then(function (trusts) { return _this.trusts = trusts; });
    };
    return TrustManagementComponent;
}(__WEBPACK_IMPORTED_MODULE_4__shared_abstract_component__["a" /* AbstractComponent */]));
TrustManagementComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
        selector: 'trust-management',
        template: __webpack_require__("../../../../../src/app/components/trust-management/trust-management.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/trust-management/trust-management.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_trust_service__["a" /* TrustService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_trust_service__["a" /* TrustService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_indigo_service__["a" /* IndigoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_indigo_service__["a" /* IndigoService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__["ToastsManager"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_core__["ViewContainerRef"]) === "function" && _d || Object])
], TrustManagementComponent);

var _a, _b, _c, _d;
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

module.exports = "<div class=\"panel panel-danger\">\n    <div class=\"panel-heading\">{{title}}</div>\n    <div class=\"panel-body\">       \n    <table class=\"table table-bordered\">\n            <thead>\n                <tr>\n                    <th>My DID</th>\n                    <th>Other Party Name</th>\n                    <th>OtherParty DID</th>\n                    <th>Pariwise DID</th>\n                    <th>Date</th>\n                    <th>Action</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let trust of trusts\">\n                \n                    <td>{{trust.myDID}}</td>\n                    <td>{{trust.otherPartyName}}</td>\n                    <td>{{trust.otherPartyDID}}</td>\n                    <td>{{trust.pairwiseDID}}</td>\n                    <td>{{trust.date}}</td>\n                    <td><button class=\"btn btn-danger\" >View Claim Def</button>\n                    </td>\n                </tr>\n                \n            </tbody>\n            </table>\n        </div>\n</div>"

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
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], TrustComponent.prototype, "trusts", void 0);
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

/***/ "../../../../../src/app/components/wallet-management/service/wallet.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__("../../../../../src/app/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__("../../../../../src/app/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WalletService = (function () {
    function WalletService(http) {
        this.http = http;
    }
    WalletService.prototype.setupWallet = function () {
        debugger;
        var req = __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* Utils */].postHttpRequest(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* Constants */].baseUrl + '/api/com.indigo/setupWallet', null);
        return this.http.request(req)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* Utils */].handleError(error);
        });
    };
    return WalletService;
}());
WalletService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], WalletService);

var _a;
//# sourceMappingURL=wallet.service.js.map

/***/ }),

/***/ "../../../../../src/app/components/wallet-management/wallet-management.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/wallet-management/wallet-management.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h2 class=\"text-danger\">Wallet Management</h2> \n    <br><br><br>\n\n    <button type=\"submit\" class=\"btn btn-danger\" (click) =\"onSetupWallet()\">Setup Wallet</button>\n    \n    <div *ngIf=\"wallet\">\n\n        <h3>Wallet Name: <span>{{wallet.name}}</span></h3>\n        <table class=\"table table-bordered\">\n            <thead>\n                <tr>\n                   <th>Stored DIDs</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let did of wallet.storedDIDs\">\n                \n                <td>{{did}}</td>\n                </tr>\n                \n            </tbody>\n            </table>\n    </div>\n  \n</div>    "

/***/ }),

/***/ "../../../../../src/app/components/wallet-management/wallet-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletManagementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_wallet_service__ = __webpack_require__("../../../../../src/app/components/wallet-management/service/wallet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WalletManagementComponent = (function () {
    function WalletManagementComponent(walletService) {
        this.walletService = walletService;
    }
    WalletManagementComponent.prototype.ngOnInit = function () {
    };
    WalletManagementComponent.prototype.onSetupWallet = function () {
        var _this = this;
        this.walletService.setupWallet().then(function (data) {
            console.log(data);
            _this.wallet = data;
        });
    };
    return WalletManagementComponent;
}());
WalletManagementComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'wallet-management',
        template: __webpack_require__("../../../../../src/app/components/wallet-management/wallet-management.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/wallet-management/wallet-management.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__service_wallet_service__["a" /* WalletService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__service_wallet_service__["a" /* WalletService */]) === "function" && _a || Object])
], WalletManagementComponent);

var _a;
//# sourceMappingURL=wallet-management.component.js.map

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

module.exports = "<nav class=\"navbar navbar-inverse navbar-sidenav\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span> \n      </button>\n      <a class=\"navbar-brand\" href=\"#\"><span><img src=\"favicon.png\"></span><span><img src=\"assets/sovrin.png\" style=\"width:20px\"></span></a>\n    </div>\n    <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n      <ul class=\"nav navbar-nav\">\n        <li [routerLinkActive]=\"['active']\"><a [routerLink]=\"['networkmap']\"><i class=\"fa fa-users\" title=\"Peers\"></i></a> </li>\n        <li [routerLinkActive]=\"['active']\"><a [routerLink]=\"['wallet']\"><i class=\"fa fa-cog\" title=\"Settings\"></i></a> </li>\n        <li [routerLinkActive]=\"['active']\"><a [routerLink]=\"['trust']\"><i class=\"fa fa-handshake-o\" title=\"Trust Management\"></i></a> </li>\n        <li [routerLinkActive]=\"['active']\"><a [routerLink]=\"['claim']\"><i class=\"fa fa-id-card-o\" title=\"Claim Management\"></i></a> </li>\n        <li [routerLinkActive]=\"['active']\"><a [routerLink]=\"['proof']\"><i class=\"fa fa-send-o\" title=\"Claim/Proof Management\"></i></a> </li>\n        \n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n          <li><a href=\"#\"><span class=\"glyphicon glyphicon-user\"></span> {{meShort}}</a></li>\n          <li><a href=\"#\"><span class=\"glyphicon glyphicon-log-in\"></span> Login</a></li>\n        </ul>\n    </div>\n  </div>\n</nav>"

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
                return __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* Utils */].getShortName(this.myinfo.x500Name);
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
            _this.toastr.success(_this.meShort + ' ,welcome to Corda-Sovrin!', 'Success!');
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

/***/ "../../../../../src/app/shared/models/corda-network.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NodeInfo */
/* unused harmony export Wallet */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrustRequest; });
/* unused harmony export Trust */
var NodeInfo = (function () {
    function NodeInfo() {
    }
    return NodeInfo;
}());

var Wallet = (function () {
    function Wallet() {
    }
    return Wallet;
}());

var TrustRequest = (function () {
    function TrustRequest() {
    }
    return TrustRequest;
}());

var Trust = (function () {
    function Trust() {
    }
    return Trust;
}());

//# sourceMappingURL=corda-network.js.map

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
        var req = __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* Utils */].getHttpRequest(this.baseUrl + '/api/com.indigo/me');
        return this._me ? Promise.resolve(this._me) :
            this.http.request(req)
                .toPromise()
                .then(function (res) {
                console.log(res);
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
    Utils.postHttpRequest = function (url, body) {
        var headers = this.getHeaders();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            headers: headers,
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post,
            url: url,
            body: body
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
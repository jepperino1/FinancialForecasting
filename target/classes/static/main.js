(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/+IW":
/*!**************************************************************!*\
  !*** ./src/main/webapp/app/layouts/error/error.component.ts ***!
  \**************************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/language/translate.directive */ "YHTv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function ErrorComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
} }
class ErrorComponent {
    constructor(translateService, route) {
        this.translateService = translateService;
        this.route = route;
    }
    ngOnInit() {
        this.route.data.subscribe(routeData => {
            if (routeData.errorMessage) {
                this.errorKey = routeData.errorMessage;
                this.getErrorMessageTranslation();
                this.langChangeSubscription = this.translateService.onLangChange.subscribe(() => this.getErrorMessageTranslation());
            }
        });
    }
    ngOnDestroy() {
        if (this.langChangeSubscription) {
            this.langChangeSubscription.unsubscribe();
        }
    }
    getErrorMessageTranslation() {
        this.errorMessage = '';
        if (this.errorKey) {
            this.translateService.get(this.errorKey).subscribe(translatedErrorMessage => {
                this.errorMessage = translatedErrorMessage;
            });
        }
    }
}
ErrorComponent.ɵfac = function ErrorComponent_Factory(t) { return new (t || ErrorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
ErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorComponent, selectors: [["jhi-error"]], decls: 19, vars: 1, consts: [[1, "row"], [1, "col-md-4"], [1, "hipster", "img-fluid", "rounded"], [1, "col-md-8"], ["jhiTranslate", "error.title"], [4, "ngIf"], [1, "alert", "alert-danger"]], template: function ErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Error Page!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ErrorComponent_div_14_Template, 5, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);
    } }, directives: [_shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_3__["TranslateDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], encapsulation: 2 });


/***/ }),

/***/ 0:
/*!***************************************!*\
  !*** multi ./src/main/webapp/main.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/cameron/Desktop/placeholderAPI/src/main/webapp/main.ts */"WtjW");


/***/ }),

/***/ "0pEx":
/*!*************************************************************!*\
  !*** ./src/main/webapp/app/shared/alert/alert.component.ts ***!
  \*************************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_core_util_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/core/util/alert.service */ "6PFj");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");




function AlertComponent_div_2_ngb_alert_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closed", function AlertComponent_div_2_ngb_alert_2_Template_ngb_alert_closed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const alert_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.close(alert_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "pre", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const alert_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", alert_r1.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", alert_r1.message, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function AlertComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AlertComponent_div_2_ngb_alert_2_Template, 4, 2, "ngb-alert", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const alert_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.setClasses(alert_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", alert_r1.message);
} }
class AlertComponent {
    constructor(alertService) {
        this.alertService = alertService;
        this.alerts = [];
    }
    ngOnInit() {
        this.alerts = this.alertService.get();
    }
    setClasses(alert) {
        const classes = { 'jhi-toast': Boolean(alert.toast) };
        if (alert.position) {
            return Object.assign(Object.assign({}, classes), { [alert.position]: true });
        }
        return classes;
    }
    ngOnDestroy() {
        this.alertService.clear();
    }
    close(alert) {
        var _a;
        (_a = alert.close) === null || _a === void 0 ? void 0 : _a.call(alert, this.alerts);
    }
}
AlertComponent.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_core_util_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"])); };
AlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlertComponent, selectors: [["jhi-alert"]], decls: 5, vars: 1, consts: [["role", "alert", 1, "alerts"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [3, "type", "closed", 4, "ngIf"], [3, "type", "closed"], [3, "innerHTML"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AlertComponent_div_2_Template, 4, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.alerts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbAlert"]], encapsulation: 2 });


/***/ }),

/***/ "3AuD":
/*!************************************************************************!*\
  !*** ./src/main/webapp/app/shared/auth/has-any-authority.directive.ts ***!
  \************************************************************************/
/*! exports provided: HasAnyAuthorityDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HasAnyAuthorityDirective", function() { return HasAnyAuthorityDirective; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_core_auth_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/core/auth/account.service */ "TXJZ");




/**
 * @whatItDoes Conditionally includes an HTML element if current user has any
 * of the authorities passed as the `expression`.
 *
 * @howToUse
 * ```
 *     <some-element *jhiHasAnyAuthority="'ROLE_ADMIN'">...</some-element>
 *
 *     <some-element *jhiHasAnyAuthority="['ROLE_ADMIN', 'ROLE_USER']">...</some-element>
 * ```
 */
class HasAnyAuthorityDirective {
    constructor(accountService, templateRef, viewContainerRef) {
        this.accountService = accountService;
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    set jhiHasAnyAuthority(value) {
        this.authorities = value;
        this.updateView();
        // Get notified each time authentication state changes.
        this.accountService
            .getAuthenticationState()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$))
            .subscribe(() => {
            this.updateView();
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    updateView() {
        const hasAnyAuthority = this.accountService.hasAnyAuthority(this.authorities);
        this.viewContainerRef.clear();
        if (hasAnyAuthority) {
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        }
    }
}
HasAnyAuthorityDirective.ɵfac = function HasAnyAuthorityDirective_Factory(t) { return new (t || HasAnyAuthorityDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](app_core_auth_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"])); };
HasAnyAuthorityDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: HasAnyAuthorityDirective, selectors: [["", "jhiHasAnyAuthority", ""]], inputs: { jhiHasAnyAuthority: "jhiHasAnyAuthority" } });


/***/ }),

/***/ "5d3u":
/*!*****************************************************************!*\
  !*** ./src/main/webapp/app/layouts/profiles/profile.service.ts ***!
  \*****************************************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/core/config/application-config.service */ "PxL+");




class ProfileService {
    constructor(http, applicationConfigService) {
        this.http = http;
        this.applicationConfigService = applicationConfigService;
        this.infoUrl = this.applicationConfigService.getEndpointFor('management/info');
    }
    getProfileInfo() {
        if (this.profileInfo$) {
            return this.profileInfo$;
        }
        this.profileInfo$ = this.http.get(this.infoUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((response) => {
            var _a, _b;
            const profileInfo = {
                activeProfiles: response.activeProfiles,
                inProduction: (_a = response.activeProfiles) === null || _a === void 0 ? void 0 : _a.includes('prod'),
                openAPIEnabled: (_b = response.activeProfiles) === null || _b === void 0 ? void 0 : _b.includes('api-docs'),
            };
            if (response.activeProfiles && response['display-ribbon-on-profiles']) {
                const displayRibbonOnProfiles = response['display-ribbon-on-profiles'].split(',');
                const ribbonProfiles = displayRibbonOnProfiles.filter(profile => { var _a; return (_a = response.activeProfiles) === null || _a === void 0 ? void 0 : _a.includes(profile); });
                if (ribbonProfiles.length > 0) {
                    profileInfo.ribbonEnv = ribbonProfiles[0];
                }
            }
            return profileInfo;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["shareReplay"])());
        return this.profileInfo$;
    }
}
ProfileService.ɵfac = function ProfileService_Factory(t) { return new (t || ProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_3__["ApplicationConfigService"])); };
ProfileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProfileService, factory: ProfileService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "6PFj":
/*!********************************************************!*\
  !*** ./src/main/webapp/app/core/util/alert.service.ts ***!
  \********************************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_config_translation_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/config/translation.config */ "vH25");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");





class AlertService {
    constructor(sanitizer, ngZone, translateService) {
        this.sanitizer = sanitizer;
        this.ngZone = ngZone;
        this.translateService = translateService;
        this.timeout = 5000;
        this.toast = false;
        this.position = 'top right';
        // unique id for each alert. Starts from 0.
        this.alertId = 0;
        this.alerts = [];
    }
    clear() {
        this.alerts = [];
    }
    get() {
        return this.alerts;
    }
    /**
     * Adds alert to alerts array and returns added alert.
     * @param alert      Alert to add. If `timeout`, `toast` or `position` is missing then applying default value.
     *                   If `translateKey` is available then it's translation else `message` is used for showing.
     * @param extAlerts  If missing then adding `alert` to `AlertService` internal array and alerts can be retrieved by `get()`.
     *                   Else adding `alert` to `extAlerts`.
     * @returns  Added alert
     */
    addAlert(alert, extAlerts) {
        var _a, _b, _c, _d, _e;
        alert.id = this.alertId++;
        if (alert.translationKey) {
            const translatedMessage = this.translateService.instant(alert.translationKey, alert.translationParams);
            // if translation key exists
            if (translatedMessage !== `${app_config_translation_config__WEBPACK_IMPORTED_MODULE_1__["translationNotFoundMessage"]}[${alert.translationKey}]`) {
                alert.message = translatedMessage;
            }
            else if (!alert.message) {
                alert.message = alert.translationKey;
            }
        }
        alert.message = (_b = this.sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].HTML, (_a = alert.message) !== null && _a !== void 0 ? _a : '')) !== null && _b !== void 0 ? _b : '';
        alert.timeout = (_c = alert.timeout) !== null && _c !== void 0 ? _c : this.timeout;
        alert.toast = (_d = alert.toast) !== null && _d !== void 0 ? _d : this.toast;
        alert.position = (_e = alert.position) !== null && _e !== void 0 ? _e : this.position;
        alert.close = (alertsArray) => this.closeAlert(alert.id, alertsArray);
        (extAlerts !== null && extAlerts !== void 0 ? extAlerts : this.alerts).push(alert);
        if (alert.timeout > 0) {
            // Workaround protractor waiting for setTimeout.
            // Reference https://www.protractortest.org/#/timeouts
            this.ngZone.runOutsideAngular(() => {
                setTimeout(() => {
                    this.ngZone.run(() => {
                        this.closeAlert(alert.id, extAlerts !== null && extAlerts !== void 0 ? extAlerts : this.alerts);
                    });
                }, alert.timeout);
            });
        }
        return alert;
    }
    closeAlert(alertId, extAlerts) {
        const alerts = extAlerts !== null && extAlerts !== void 0 ? extAlerts : this.alerts;
        const alertIndex = alerts.map(alert => alert.id).indexOf(alertId);
        // if found alert then remove
        if (alertIndex >= 0) {
            alerts.splice(alertIndex, 1);
        }
    }
}
AlertService.ɵfac = function AlertService_Factory(t) { return new (t || AlertService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"])); };
AlertService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AlertService, factory: AlertService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "6uyi":
/*!****************************************************!*\
  !*** ./src/main/webapp/app/home/home.component.ts ***!
  \****************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_core_auth_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/core/auth/account.service */ "TXJZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/language/translate.directive */ "YHTv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





const _c0 = function (a0) { return { username: a0 }; };
function HomeComponent_div_17_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translateValues", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r2.account.login));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("You are logged in as user \"", ctx_r2.account.login, "\".");
} }
function HomeComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_17_span_2_Template, 2, 4, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.account);
} }
function HomeComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "If you want to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_19_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "sign in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, ", you can try the default accounts:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "- Administrator (login=\"admin\" and password=\"admin\") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "- User (login=\"user\" and\n          password=\"user\").");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HomeComponent {
    constructor(accountService, router) {
        this.accountService = accountService;
        this.router = router;
        this.account = null;
    }
    ngOnInit() {
        this.authSubscription = this.accountService.getAuthenticationState().subscribe(account => (this.account = account));
    }
    isAuthenticated() {
        return this.accountService.isAuthenticated();
    }
    login() {
        this.router.navigate(['/login']);
    }
    ngOnDestroy() {
        if (this.authSubscription) {
            this.authSubscription.unsubscribe();
        }
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_core_auth_account_service__WEBPACK_IMPORTED_MODULE_1__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["jhi-home"]], decls: 69, vars: 3, consts: [[1, "row"], [1, "col-md-3"], [1, "hipster", "img-fluid", "rounded"], [1, "col-md-9"], ["jhiTranslate", "home.title", 1, "display-4"], ["jhiTranslate", "home.subtitle", 1, "lead"], [3, "ngSwitch"], ["class", "alert alert-success", 4, "ngSwitchCase"], ["class", "alert alert-warning", 4, "ngSwitchCase"], ["jhiTranslate", "home.question"], ["href", "https://www.jhipster.tech/", "target", "_blank", "rel", "noopener noreferrer", "jhiTranslate", "home.link.homepage"], ["href", "http://stackoverflow.com/tags/jhipster/info", "target", "_blank", "rel", "noopener noreferrer", "jhiTranslate", "home.link.stackoverflow"], ["href", "https://github.com/jhipster/generator-jhipster/issues?state=open", "target", "_blank", "rel", "noopener noreferrer", "jhiTranslate", "home.link.bugtracker"], ["href", "https://gitter.im/jhipster/generator-jhipster", "target", "_blank", "rel", "noopener noreferrer", "jhiTranslate", "home.link.chat"], ["href", "https://twitter.com/jhipster", "target", "_blank", "rel", "noopener noreferrer", "jhiTranslate", "home.link.follow"], ["jhiTranslate", "home.like"], ["href", "https://github.com/jhipster/generator-jhipster", "target", "_blank", "rel", "noopener noreferrer", "jhiTranslate", "home.github"], [1, "alert", "alert-success"], ["id", "home-logged-message", "jhiTranslate", "home.logged.message", 3, "translateValues", 4, "ngIf"], ["id", "home-logged-message", "jhiTranslate", "home.logged.message", 3, "translateValues"], [1, "alert", "alert-warning"], ["jhiTranslate", "global.messages.info.authenticated.prefix"], ["jhiTranslate", "global.messages.info.authenticated.link", 1, "alert-link", 3, "click"], ["jhiTranslate", "global.messages.info.authenticated.suffix"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Welcome, Java Hipster!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "This is your homepage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, HomeComponent_div_17_Template, 4, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, HomeComponent_div_19_Template, 14, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "If you have any question on JHipster:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "JHipster homepage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "JHipster on Stack Overflow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "JHipster bug tracker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "JHipster public chat room");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "follow @jhipster on Twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "If you like JHipster, don't forget to give us a star on");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "GitHub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "!\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.isAuthenticated());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", false);
    } }, directives: [_shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_3__["TranslateDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".hipster[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 347px;\n  height: 497px;\n  background: url('jhipster_family_member_1.svg') no-repeat center top;\n  background-size: contain;\n}\n\n@media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (-moz-min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx) {\n  .hipster[_ngcontent-%COMP%] {\n    background: url('jhipster_family_member_1.svg') no-repeat center top;\n    background-size: contain;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OzRFQUFBO0FBSUE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esb0VBQUE7RUFDQSx3QkFBQTtBQUFGO0FBR0EsMEZBQUE7QUFDQTtFQUtFO0lBQ0Usb0VBQUE7SUFDQSx3QkFBQTtFQUpGO0FBQ0YiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5NYWluIHBhZ2Ugc3R5bGVzXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4uaGlwc3RlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDM0N3B4O1xuICBoZWlnaHQ6IDQ5N3B4O1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2NvbnRlbnQvaW1hZ2VzL2poaXBzdGVyX2ZhbWlseV9tZW1iZXJfMS5zdmcnKSBuby1yZXBlYXQgY2VudGVyIHRvcDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xufVxuXG4vKiB3YWl0IGF1dG9wcmVmaXhlciB1cGRhdGUgdG8gYWxsb3cgc2ltcGxlIGdlbmVyYXRpb24gb2YgaGlnaCBwaXhlbCBkZW5zaXR5IG1lZGlhIHF1ZXJ5ICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLFxuICBvbmx5IHNjcmVlbiBhbmQgKC1tb3otbWluLWRldmljZS1waXhlbC1yYXRpbzogMiksXG4gIG9ubHkgc2NyZWVuIGFuZCAoLW8tbWluLWRldmljZS1waXhlbC1yYXRpbzogMi8xKSxcbiAgb25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogMTkyZHBpKSxcbiAgb25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogMmRwcHgpIHtcbiAgLmhpcHN0ZXIge1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vY29udGVudC9pbWFnZXMvamhpcHN0ZXJfZmFtaWx5X21lbWJlcl8xLnN2ZycpIG5vLXJlcGVhdCBjZW50ZXIgdG9wO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "8Dfa":
/*!***********************************************************************!*\
  !*** ./src/main/webapp/app/layouts/profiles/page-ribbon.component.ts ***!
  \***********************************************************************/
/*! exports provided: PageRibbonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageRibbonComponent", function() { return PageRibbonComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.service */ "5d3u");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/language/translate.directive */ "YHTv");





function PageRibbonComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ribbonEnv_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("jhiTranslate", "global.ribbon.", ribbonEnv_r1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ribbonEnv_r1);
} }
class PageRibbonComponent {
    constructor(profileService) {
        this.profileService = profileService;
    }
    ngOnInit() {
        this.ribbonEnv$ = this.profileService.getProfileInfo().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(profileInfo => profileInfo.ribbonEnv));
    }
}
PageRibbonComponent.ɵfac = function PageRibbonComponent_Factory(t) { return new (t || PageRibbonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"])); };
PageRibbonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PageRibbonComponent, selectors: [["jhi-page-ribbon"]], decls: 4, vars: 3, consts: [["class", "ribbon", 4, "ngIf"], [1, "ribbon"], ["href", "", 3, "jhiTranslate"]], template: function PageRibbonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PageRibbonComponent_div_1_Template, 5, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n  ");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx.ribbonEnv$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_4__["TranslateDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: [".ribbon[_ngcontent-%COMP%] {\n  background-color: rgba(170, 0, 0, 0.5);\n  left: -3.5em;\n  transform: rotate(-45deg);\n  overflow: hidden;\n  position: absolute;\n  top: 40px;\n  white-space: nowrap;\n  width: 15em;\n  z-index: 9999;\n  pointer-events: none;\n  opacity: 0.75;\n}\n.ribbon[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  display: block;\n  font-weight: 400;\n  margin: 1px 0;\n  padding: 10px 50px;\n  text-align: center;\n  text-decoration: none;\n  text-shadow: 0 0 5px #444;\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhZ2UtcmliYm9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs0RUFBQTtBQUdBO0VBQ0Usc0NBQUE7RUFDQSxZQUFBO0VBS0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7QUFDRjtBQUFFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0FBRUoiLCJmaWxlIjoicGFnZS1yaWJib24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuRGV2ZWxvcGVtZW50IFJpYmJvblxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi5yaWJib24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3MCwgMCwgMCwgMC41KTtcbiAgbGVmdDogLTMuNWVtO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0MHB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB3aWR0aDogMTVlbTtcbiAgei1pbmRleDogOTk5OTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIG9wYWNpdHk6IDAuNzU7XG4gIGEge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbWFyZ2luOiAxcHggMDtcbiAgICBwYWRkaW5nOiAxMHB4IDUwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDVweCAjNDQ0O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "8H8u":
/*!****************************************************************!*\
  !*** ./src/main/webapp/app/layouts/footer/footer.component.ts ***!
  \****************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/language/translate.directive */ "YHTv");


class FooterComponent {
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["jhi-footer"]], decls: 6, vars: 0, consts: [[1, "footer"], ["jhiTranslate", "footer"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "This is your footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n");
    } }, directives: [_shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_1__["TranslateDirective"]], encapsulation: 2 });


/***/ }),

/***/ "8HBj":
/*!***************************************************************!*\
  !*** ./src/main/webapp/app/entities/entity-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: EntityRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityRoutingModule", function() { return EntityRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class EntityRoutingModule {
}
EntityRoutingModule.ɵfac = function EntityRoutingModule_Factory(t) { return new (t || EntityRoutingModule)(); };
EntityRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: EntityRoutingModule });
EntityRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild([
            /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
            ]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](EntityRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "ADQh":
/*!********************************************************************!*\
  !*** ./src/main/webapp/app/core/auth/user-route-access.service.ts ***!
  \********************************************************************/
/*! exports provided: UserRouteAccessService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRouteAccessService", function() { return UserRouteAccessService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_core_auth_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/core/auth/account.service */ "TXJZ");
/* harmony import */ var _state_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./state-storage.service */ "hl6c");






class UserRouteAccessService {
    constructor(router, accountService, stateStorageService) {
        this.router = router;
        this.accountService = accountService;
        this.stateStorageService = stateStorageService;
    }
    canActivate(route, state) {
        return this.accountService.identity().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(account => {
            if (account) {
                const authorities = route.data['authorities'];
                if (!authorities || authorities.length === 0 || this.accountService.hasAnyAuthority(authorities)) {
                    return true;
                }
                if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])()) {
                    console.error('User has not any of required authorities: ', authorities);
                }
                this.router.navigate(['accessdenied']);
                return false;
            }
            this.stateStorageService.storeUrl(state.url);
            this.router.navigate(['/login']);
            return false;
        }));
    }
}
UserRouteAccessService.ɵfac = function UserRouteAccessService_Factory(t) { return new (t || UserRouteAccessService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](app_core_auth_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_state_storage_service__WEBPACK_IMPORTED_MODULE_4__["StateStorageService"])); };
UserRouteAccessService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserRouteAccessService, factory: UserRouteAccessService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AYgL":
/*!****************************************************************************!*\
  !*** ./src/main/webapp/app/shared/language/find-language-from-key.pipe.ts ***!
  \****************************************************************************/
/*! exports provided: FindLanguageFromKeyPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindLanguageFromKeyPipe", function() { return FindLanguageFromKeyPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FindLanguageFromKeyPipe {
    constructor() {
        this.languages = {
            en: { name: 'English' },
        };
    }
    transform(lang) {
        return this.languages[lang].name;
    }
}
FindLanguageFromKeyPipe.ɵfac = function FindLanguageFromKeyPipe_Factory(t) { return new (t || FindLanguageFromKeyPipe)(); };
FindLanguageFromKeyPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "findLanguageFromKey", type: FindLanguageFromKeyPipe, pure: true });


/***/ }),

/***/ "BvHF":
/*!************************************************************!*\
  !*** ./src/main/webapp/app/layouts/navbar/navbar.route.ts ***!
  \************************************************************/
/*! exports provided: navbarRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navbarRoute", function() { return navbarRoute; });
/* harmony import */ var _navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar.component */ "JmsV");

const navbarRoute = {
    path: '',
    component: _navbar_component__WEBPACK_IMPORTED_MODULE_0__["NavbarComponent"],
    outlet: 'navbar',
};


/***/ }),

/***/ "DDS7":
/*!**********************************************************!*\
  !*** ./src/main/webapp/app/layouts/error/error.route.ts ***!
  \**********************************************************/
/*! exports provided: errorRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorRoute", function() { return errorRoute; });
/* harmony import */ var _error_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error.component */ "/+IW");

const errorRoute = [
    {
        path: 'error',
        component: _error_component__WEBPACK_IMPORTED_MODULE_0__["ErrorComponent"],
        data: {
            pageTitle: 'error.title',
        },
    },
    {
        path: 'accessdenied',
        component: _error_component__WEBPACK_IMPORTED_MODULE_0__["ErrorComponent"],
        data: {
            pageTitle: 'error.title',
            errorMessage: 'error.http.403',
        },
    },
    {
        path: '404',
        component: _error_component__WEBPACK_IMPORTED_MODULE_0__["ErrorComponent"],
        data: {
            pageTitle: 'error.title',
            errorMessage: 'error.http.404',
        },
    },
    {
        path: '**',
        redirectTo: '/404',
    },
];


/***/ }),

/***/ "H5hR":
/*!*********************************************!*\
  !*** ./src/main/webapp/app/config/dayjs.ts ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "Wgwc");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs/plugin/customParseFormat */ "+QaA");
/* harmony import */ var dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs_plugin_duration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs/plugin/duration */ "13Ln");
/* harmony import */ var dayjs_plugin_duration__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_duration__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dayjs/plugin/relativeTime */ "QgiU");
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var dayjs_locale_en__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dayjs/locale/en */ "njAx");
/* harmony import */ var dayjs_locale_en__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs_locale_en__WEBPACK_IMPORTED_MODULE_4__);




// jhipster-needle-i18n-language-dayjs-imports - JHipster will import languages from dayjs here

// DAYJS CONFIGURATION
dayjs__WEBPACK_IMPORTED_MODULE_0__["extend"](dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_1__);
dayjs__WEBPACK_IMPORTED_MODULE_0__["extend"](dayjs_plugin_duration__WEBPACK_IMPORTED_MODULE_2__);
dayjs__WEBPACK_IMPORTED_MODULE_0__["extend"](dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_3__);


/***/ }),

/***/ "JmsV":
/*!****************************************************************!*\
  !*** ./src/main/webapp/app/layouts/navbar/navbar.component.ts ***!
  \****************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/app.constants */ "nUxK");
/* harmony import */ var app_config_language_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/config/language.constants */ "pCeh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_login_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/login/login.service */ "fiib");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-webstorage */ "e4Ts");
/* harmony import */ var app_core_auth_account_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/core/auth/account.service */ "TXJZ");
/* harmony import */ var app_layouts_profiles_profile_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/layouts/profiles/profile.service */ "5d3u");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/language/translate.directive */ "YHTv");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_auth_has_any_authority_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/auth/has-any-authority.directive */ "3AuD");
/* harmony import */ var _active_menu_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./active-menu.directive */ "yoww");
/* harmony import */ var _shared_language_find_language_from_key_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/language/find-language-from-key.pipe */ "AYgL");
















const _c0 = function () { return { exact: true }; };
function NavbarComponent_li_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "fa-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Entities");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "ul", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c0));
} }
function NavbarComponent_li_39_li_59_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_li_39_li_59_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r8.collapseNavbar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "fa-icon", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "API");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fixedWidth", true);
} }
function NavbarComponent_li_39_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "fa-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Administration");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "ul", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_li_39_Template_a_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r10.collapseNavbar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "fa-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Metrics");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_li_39_Template_a_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r12.collapseNavbar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "fa-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Health");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_li_39_Template_a_click_39_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r13.collapseNavbar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "fa-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Configuration");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_li_39_Template_a_click_50_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r14.collapseNavbar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "fa-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Logs");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](59, NavbarComponent_li_39_li_59_Template, 10, 1, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fixedWidth", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fixedWidth", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fixedWidth", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fixedWidth", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.openAPIEnabled);
} }
function NavbarComponent_li_41_li_15_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_li_41_li_15_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18); const language_r16 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); ctx_r17.changeLanguage(language_r16); return ctx_r17.collapseNavbar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "findLanguageFromKey");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const language_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("jhiActiveMenu", language_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 2, language_r16));
} }
function NavbarComponent_li_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "fa-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Language");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "ul", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, NavbarComponent_li_41_li_15_Template, 6, 4, "li", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.languages);
} }
function NavbarComponent_span_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "fa-icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function NavbarComponent_span_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r4.getImageUrl(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function NavbarComponent_li_54_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_li_54_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r19.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "fa-icon", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Sign out");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fixedWidth", true);
} }
function NavbarComponent_li_56_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_li_56_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r21.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "fa-icon", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Sign in");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fixedWidth", true);
} }
class NavbarComponent {
    constructor(loginService, translateService, sessionStorage, accountService, profileService, router) {
        this.loginService = loginService;
        this.translateService = translateService;
        this.sessionStorage = sessionStorage;
        this.accountService = accountService;
        this.profileService = profileService;
        this.router = router;
        this.isNavbarCollapsed = true;
        this.languages = app_config_language_constants__WEBPACK_IMPORTED_MODULE_1__["LANGUAGES"];
        this.version = '';
        if (app_app_constants__WEBPACK_IMPORTED_MODULE_0__["VERSION"]) {
            this.version = app_app_constants__WEBPACK_IMPORTED_MODULE_0__["VERSION"].toLowerCase().startsWith('v') ? app_app_constants__WEBPACK_IMPORTED_MODULE_0__["VERSION"] : 'v' + app_app_constants__WEBPACK_IMPORTED_MODULE_0__["VERSION"];
        }
    }
    ngOnInit() {
        this.profileService.getProfileInfo().subscribe(profileInfo => {
            this.inProduction = profileInfo.inProduction;
            this.openAPIEnabled = profileInfo.openAPIEnabled;
        });
    }
    changeLanguage(languageKey) {
        this.sessionStorage.store('locale', languageKey);
        this.translateService.use(languageKey);
    }
    collapseNavbar() {
        this.isNavbarCollapsed = true;
    }
    isAuthenticated() {
        return this.accountService.isAuthenticated();
    }
    login() {
        this.router.navigate(['/login']);
    }
    logout() {
        this.collapseNavbar();
        this.loginService.logout();
        this.router.navigate(['']);
    }
    toggleNavbar() {
        this.isNavbarCollapsed = !this.isNavbarCollapsed;
    }
    getImageUrl() {
        return this.isAuthenticated() ? this.accountService.getImageUrl() : '';
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](app_login_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_webstorage__WEBPACK_IMPORTED_MODULE_5__["SessionStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](app_core_auth_account_service__WEBPACK_IMPORTED_MODULE_6__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](app_layouts_profiles_profile_service__WEBPACK_IMPORTED_MODULE_7__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["jhi-navbar"]], decls: 63, vars: 14, consts: [["data-cy", "navbar", 1, "navbar", "navbar-dark", "navbar-expand-md", "bg-dark"], ["routerLink", "/", 1, "navbar-brand", "logo", 3, "click"], [1, "logo-img"], ["jhiTranslate", "global.title", 1, "navbar-title"], [1, "navbar-version"], ["href", "javascript:void(0);", "data-toggle", "collapse", "data-target", "#navbarResponsive", "aria-controls", "navbarResponsive", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "d-lg-none", 3, "click"], ["icon", "bars"], ["id", "navbarResponsive", 1, "navbar-collapse", "collapse", 3, "ngbCollapse", "ngSwitch"], [1, "navbar-nav", "ml-auto"], ["routerLinkActive", "active", 1, "nav-item", 3, "routerLinkActiveOptions"], ["routerLink", "/", 1, "nav-link", 3, "click"], ["icon", "home"], ["jhiTranslate", "global.menu.home"], ["ngbDropdown", "", "class", "nav-item dropdown pointer", "display", "dynamic", "routerLinkActive", "active", 3, "routerLinkActiveOptions", 4, "ngSwitchCase"], ["ngbDropdown", "", "class", "nav-item dropdown pointer", "display", "dynamic", "routerLinkActive", "active", 3, "routerLinkActiveOptions", 4, "jhiHasAnyAuthority"], ["ngbDropdown", "", "class", "nav-item dropdown pointer", "display", "dynamic", 4, "ngIf"], ["ngbDropdown", "", "display", "dynamic", "routerLinkActive", "active", 1, "nav-item", "dropdown", "pointer", 3, "routerLinkActiveOptions"], ["ngbDropdownToggle", "", "href", "javascript:void(0);", "id", "account-menu", "data-cy", "accountMenu", 1, "nav-link", "dropdown-toggle"], [4, "ngIf"], ["ngbDropdownMenu", "", "aria-labelledby", "account-menu", 1, "dropdown-menu"], [4, "ngSwitchCase"], ["ngbDropdownToggle", "", "href", "javascript:void(0);", "id", "entity-menu", "data-cy", "entity", 1, "nav-link", "dropdown-toggle"], ["icon", "th-list"], ["jhiTranslate", "global.menu.entities.main"], ["ngbDropdownMenu", "", "aria-labelledby", "entity-menu", 1, "dropdown-menu"], ["ngbDropdownToggle", "", "href", "javascript:void(0);", "id", "admin-menu", "data-cy", "adminMenu", 1, "nav-link", "dropdown-toggle"], ["icon", "users-cog"], ["jhiTranslate", "global.menu.admin.main"], ["ngbDropdownMenu", "", "aria-labelledby", "admin-menu", 1, "dropdown-menu"], ["routerLink", "admin/metrics", "routerLinkActive", "active", 1, "dropdown-item", 3, "click"], ["icon", "tachometer-alt", 3, "fixedWidth"], ["jhiTranslate", "global.menu.admin.metrics"], ["routerLink", "admin/health", "routerLinkActive", "active", 1, "dropdown-item", 3, "click"], ["icon", "heart", 3, "fixedWidth"], ["jhiTranslate", "global.menu.admin.health"], ["routerLink", "admin/configuration", "routerLinkActive", "active", 1, "dropdown-item", 3, "click"], ["icon", "cogs", 3, "fixedWidth"], ["jhiTranslate", "global.menu.admin.configuration"], ["routerLink", "admin/logs", "routerLinkActive", "active", 1, "dropdown-item", 3, "click"], ["icon", "tasks", 3, "fixedWidth"], ["jhiTranslate", "global.menu.admin.logs"], ["routerLink", "admin/docs", "routerLinkActive", "active", 1, "dropdown-item", 3, "click"], ["icon", "book", 3, "fixedWidth"], ["jhiTranslate", "global.menu.admin.apidocs"], ["ngbDropdown", "", "display", "dynamic", 1, "nav-item", "dropdown", "pointer"], ["ngbDropdownToggle", "", "href", "javascript:void(0);", "id", "languagesnavBarDropdown", 1, "nav-link", "dropdown-toggle"], ["icon", "flag"], ["jhiTranslate", "global.menu.language"], ["ngbDropdownMenu", "", "aria-labelledby", "languagesnavBarDropdown", 1, "dropdown-menu"], [4, "ngFor", "ngForOf"], ["href", "javascript:void(0);", 1, "dropdown-item", 3, "jhiActiveMenu", "click"], ["icon", "user"], ["jhiTranslate", "global.menu.account.main"], ["alt", "Avatar", 1, "profile-image", "rounded-circle", 3, "src"], ["id", "logout", "data-cy", "logout", 1, "dropdown-item", 3, "click"], ["icon", "sign-out-alt", 3, "fixedWidth"], ["jhiTranslate", "global.menu.account.logout"], ["id", "login", "data-cy", "login", 1, "dropdown-item", 3, "click"], ["icon", "sign-in-alt", 3, "fixedWidth"], ["jhiTranslate", "global.menu.account.login"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_2_listener() { return ctx.collapseNavbar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "PlaceholderAPI");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_13_listener() { return ctx.toggleNavbar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_24_listener() { return ctx.collapseNavbar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "fa-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, NavbarComponent_li_37_Template, 17, 2, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, NavbarComponent_li_39_Template, 63, 7, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, NavbarComponent_li_41_Template, 18, 1, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](47, NavbarComponent_span_47_Template, 7, 0, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](49, NavbarComponent_span_49_Template, 4, 1, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "ul", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](54, NavbarComponent_li_54_Template, 10, 1, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](56, NavbarComponent_li_56_Template, 10, 1, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.version);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngbCollapse", ctx.isNavbarCollapsed)("ngSwitch", ctx.isAuthenticated());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](12, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("jhiHasAnyAuthority", "ROLE_ADMIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.languages && ctx.languages.length > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](13, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.getImageUrl());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.getImageUrl());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", false);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_10__["TranslateDirective"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FaIconComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbCollapse"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgSwitch"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgSwitchCase"], _shared_auth_has_any_authority_directive__WEBPACK_IMPORTED_MODULE_13__["HasAnyAuthorityDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbDropdownMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _active_menu_directive__WEBPACK_IMPORTED_MODULE_14__["ActiveMenuDirective"]], pipes: [_shared_language_find_language_from_key_pipe__WEBPACK_IMPORTED_MODULE_15__["FindLanguageFromKeyPipe"]], styles: [".navbar-version[_ngcontent-%COMP%] {\n  font-size: 0.65em;\n  color: rgba(255, 255, 255, 0.5);\n}\n.profile-image[_ngcontent-%COMP%] {\n  height: 1.75em;\n  width: 1.75em;\n}\n.navbar[_ngcontent-%COMP%] {\n  padding: 0.2rem 1rem;\n}\n.navbar[_ngcontent-%COMP%]   ul.navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  margin-left: 0.5em;\n}\n.navbar[_ngcontent-%COMP%]   a.nav-link[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n\n.logo-img[_ngcontent-%COMP%] {\n  height: 45px;\n  width: 45px;\n  display: inline-block;\n  vertical-align: middle;\n  background: url('logo-jhipster.png') no-repeat center center;\n  background-size: contain;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL25hdmJhci5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7OzRFQUFBO0FBSUE7RUFDRSxpQkFBQTtFQUNBLCtCQ3N0QmtDO0FEenRCcEM7QUFNQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0FBSEY7QUFNQTtFQUNFLG9CQUFBO0FBSEY7QUFNSTtFQUNFLGtCQUFBO0FBSk47QUFRRTtFQUNFLGdCQUFBO0FBTko7QUFVQTs7NEVBQUE7QUFHQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLDREQUFBO0VBQ0Esd0JBQUE7QUFQRiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd+Ym9vdHN0cmFwL3Njc3MvZnVuY3Rpb25zJztcbkBpbXBvcnQgJ35ib290c3RyYXAvc2Nzcy92YXJpYWJsZXMnO1xuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuTmF2YmFyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4ubmF2YmFyLXZlcnNpb24ge1xuICBmb250LXNpemU6IDAuNjVlbTtcbiAgY29sb3I6ICRuYXZiYXItZGFyay1jb2xvcjtcbn1cblxuLnByb2ZpbGUtaW1hZ2Uge1xuICBoZWlnaHQ6IDEuNzVlbTtcbiAgd2lkdGg6IDEuNzVlbTtcbn1cblxuLm5hdmJhciB7XG4gIHBhZGRpbmc6IDAuMnJlbSAxcmVtO1xuXG4gIHVsLm5hdmJhci1uYXYge1xuICAgIC5uYXYtaXRlbSB7XG4gICAgICBtYXJnaW4tbGVmdDogMC41ZW07XG4gICAgfVxuICB9XG5cbiAgYS5uYXYtbGluayB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgfVxufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuTG9nbyBzdHlsZXNcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4ubG9nby1pbWcge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIHdpZHRoOiA0NXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vY29udGVudC9pbWFnZXMvbG9nby1qaGlwc3Rlci5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xufVxuIiwiLy8gVmFyaWFibGVzXG4vL1xuLy8gVmFyaWFibGVzIHNob3VsZCBmb2xsb3cgdGhlIGAkY29tcG9uZW50LXN0YXRlLXByb3BlcnR5LXNpemVgIGZvcm11bGEgZm9yXG4vLyBjb25zaXN0ZW50IG5hbWluZy4gRXg6ICRuYXYtbGluay1kaXNhYmxlZC1jb2xvciBhbmQgJG1vZGFsLWNvbnRlbnQtYm94LXNoYWRvdy14cy5cblxuLy8gQ29sb3Igc3lzdGVtXG5cbiR3aGl0ZTogICAgI2ZmZiAhZGVmYXVsdDtcbiRncmF5LTEwMDogI2Y4ZjlmYSAhZGVmYXVsdDtcbiRncmF5LTIwMDogI2U5ZWNlZiAhZGVmYXVsdDtcbiRncmF5LTMwMDogI2RlZTJlNiAhZGVmYXVsdDtcbiRncmF5LTQwMDogI2NlZDRkYSAhZGVmYXVsdDtcbiRncmF5LTUwMDogI2FkYjViZCAhZGVmYXVsdDtcbiRncmF5LTYwMDogIzZjNzU3ZCAhZGVmYXVsdDtcbiRncmF5LTcwMDogIzQ5NTA1NyAhZGVmYXVsdDtcbiRncmF5LTgwMDogIzM0M2E0MCAhZGVmYXVsdDtcbiRncmF5LTkwMDogIzIxMjUyOSAhZGVmYXVsdDtcbiRibGFjazogICAgIzAwMCAhZGVmYXVsdDtcblxuJGdyYXlzOiAoKSAhZGVmYXVsdDtcbiRncmF5czogbWFwLW1lcmdlKFxuICAoXG4gICAgXCIxMDBcIjogJGdyYXktMTAwLFxuICAgIFwiMjAwXCI6ICRncmF5LTIwMCxcbiAgICBcIjMwMFwiOiAkZ3JheS0zMDAsXG4gICAgXCI0MDBcIjogJGdyYXktNDAwLFxuICAgIFwiNTAwXCI6ICRncmF5LTUwMCxcbiAgICBcIjYwMFwiOiAkZ3JheS02MDAsXG4gICAgXCI3MDBcIjogJGdyYXktNzAwLFxuICAgIFwiODAwXCI6ICRncmF5LTgwMCxcbiAgICBcIjkwMFwiOiAkZ3JheS05MDBcbiAgKSxcbiAgJGdyYXlzXG4pO1xuXG4kYmx1ZTogICAgIzAwN2JmZiAhZGVmYXVsdDtcbiRpbmRpZ286ICAjNjYxMGYyICFkZWZhdWx0O1xuJHB1cnBsZTogICM2ZjQyYzEgIWRlZmF1bHQ7XG4kcGluazogICAgI2U4M2U4YyAhZGVmYXVsdDtcbiRyZWQ6ICAgICAjZGMzNTQ1ICFkZWZhdWx0O1xuJG9yYW5nZTogICNmZDdlMTQgIWRlZmF1bHQ7XG4keWVsbG93OiAgI2ZmYzEwNyAhZGVmYXVsdDtcbiRncmVlbjogICAjMjhhNzQ1ICFkZWZhdWx0O1xuJHRlYWw6ICAgICMyMGM5OTcgIWRlZmF1bHQ7XG4kY3lhbjogICAgIzE3YTJiOCAhZGVmYXVsdDtcblxuJGNvbG9yczogKCkgIWRlZmF1bHQ7XG4kY29sb3JzOiBtYXAtbWVyZ2UoXG4gIChcbiAgICBcImJsdWVcIjogICAgICAgJGJsdWUsXG4gICAgXCJpbmRpZ29cIjogICAgICRpbmRpZ28sXG4gICAgXCJwdXJwbGVcIjogICAgICRwdXJwbGUsXG4gICAgXCJwaW5rXCI6ICAgICAgICRwaW5rLFxuICAgIFwicmVkXCI6ICAgICAgICAkcmVkLFxuICAgIFwib3JhbmdlXCI6ICAgICAkb3JhbmdlLFxuICAgIFwieWVsbG93XCI6ICAgICAkeWVsbG93LFxuICAgIFwiZ3JlZW5cIjogICAgICAkZ3JlZW4sXG4gICAgXCJ0ZWFsXCI6ICAgICAgICR0ZWFsLFxuICAgIFwiY3lhblwiOiAgICAgICAkY3lhbixcbiAgICBcIndoaXRlXCI6ICAgICAgJHdoaXRlLFxuICAgIFwiZ3JheVwiOiAgICAgICAkZ3JheS02MDAsXG4gICAgXCJncmF5LWRhcmtcIjogICRncmF5LTgwMFxuICApLFxuICAkY29sb3JzXG4pO1xuXG4kcHJpbWFyeTogICAgICAgJGJsdWUgIWRlZmF1bHQ7XG4kc2Vjb25kYXJ5OiAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJHN1Y2Nlc3M6ICAgICAgICRncmVlbiAhZGVmYXVsdDtcbiRpbmZvOiAgICAgICAgICAkY3lhbiAhZGVmYXVsdDtcbiR3YXJuaW5nOiAgICAgICAkeWVsbG93ICFkZWZhdWx0O1xuJGRhbmdlcjogICAgICAgICRyZWQgIWRlZmF1bHQ7XG4kbGlnaHQ6ICAgICAgICAgJGdyYXktMTAwICFkZWZhdWx0O1xuJGRhcms6ICAgICAgICAgICRncmF5LTgwMCAhZGVmYXVsdDtcblxuJHRoZW1lLWNvbG9yczogKCkgIWRlZmF1bHQ7XG4kdGhlbWUtY29sb3JzOiBtYXAtbWVyZ2UoXG4gIChcbiAgICBcInByaW1hcnlcIjogICAgJHByaW1hcnksXG4gICAgXCJzZWNvbmRhcnlcIjogICRzZWNvbmRhcnksXG4gICAgXCJzdWNjZXNzXCI6ICAgICRzdWNjZXNzLFxuICAgIFwiaW5mb1wiOiAgICAgICAkaW5mbyxcbiAgICBcIndhcm5pbmdcIjogICAgJHdhcm5pbmcsXG4gICAgXCJkYW5nZXJcIjogICAgICRkYW5nZXIsXG4gICAgXCJsaWdodFwiOiAgICAgICRsaWdodCxcbiAgICBcImRhcmtcIjogICAgICAgJGRhcmtcbiAgKSxcbiAgJHRoZW1lLWNvbG9yc1xuKTtcblxuLy8gU2V0IGEgc3BlY2lmaWMganVtcCBwb2ludCBmb3IgcmVxdWVzdGluZyBjb2xvciBqdW1wc1xuJHRoZW1lLWNvbG9yLWludGVydmFsOiAgICAgIDglICFkZWZhdWx0O1xuXG4vLyBUaGUgeWlxIGxpZ2h0bmVzcyB2YWx1ZSB0aGF0IGRldGVybWluZXMgd2hlbiB0aGUgbGlnaHRuZXNzIG9mIGNvbG9yIGNoYW5nZXMgZnJvbSBcImRhcmtcIiB0byBcImxpZ2h0XCIuIEFjY2VwdGFibGUgdmFsdWVzIGFyZSBiZXR3ZWVuIDAgYW5kIDI1NS5cbiR5aXEtY29udHJhc3RlZC10aHJlc2hvbGQ6ICAxNTAgIWRlZmF1bHQ7XG5cbi8vIEN1c3RvbWl6ZSB0aGUgbGlnaHQgYW5kIGRhcmsgdGV4dCBjb2xvcnMgZm9yIHVzZSBpbiBvdXIgWUlRIGNvbG9yIGNvbnRyYXN0IGZ1bmN0aW9uLlxuJHlpcS10ZXh0LWRhcms6ICAgICAgICAgICAgICRncmF5LTkwMCAhZGVmYXVsdDtcbiR5aXEtdGV4dC1saWdodDogICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG5cbi8vIENoYXJhY3RlcnMgd2hpY2ggYXJlIGVzY2FwZWQgYnkgdGhlIGVzY2FwZS1zdmcgZnVuY3Rpb25cbiRlc2NhcGVkLWNoYXJhY3RlcnM6IChcbiAgKFwiPFwiLCBcIiUzY1wiKSxcbiAgKFwiPlwiLCBcIiUzZVwiKSxcbiAgKFwiI1wiLCBcIiUyM1wiKSxcbiAgKFwiKFwiLCBcIiUyOFwiKSxcbiAgKFwiKVwiLCBcIiUyOVwiKSxcbikgIWRlZmF1bHQ7XG5cblxuLy8gT3B0aW9uc1xuLy9cbi8vIFF1aWNrbHkgbW9kaWZ5IGdsb2JhbCBzdHlsaW5nIGJ5IGVuYWJsaW5nIG9yIGRpc2FibGluZyBvcHRpb25hbCBmZWF0dXJlcy5cblxuJGVuYWJsZS1jYXJldDogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXJvdW5kZWQ6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtc2hhZG93czogICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSAhZGVmYXVsdDtcbiRlbmFibGUtZ3JhZGllbnRzOiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSAhZGVmYXVsdDtcbiRlbmFibGUtdHJhbnNpdGlvbnM6ICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1wcmVmZXJzLXJlZHVjZWQtbW90aW9uLW1lZGlhLXF1ZXJ5OiAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLWhvdmVyLW1lZGlhLXF1ZXJ5OiAgICAgICAgICAgICAgICAgICAgZmFsc2UgIWRlZmF1bHQ7IC8vIERlcHJlY2F0ZWQsIG5vIGxvbmdlciBhZmZlY3RzIGFueSBjb21waWxlZCBDU1NcbiRlbmFibGUtZ3JpZC1jbGFzc2VzOiAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1wb2ludGVyLWN1cnNvci1mb3ItYnV0dG9uczogICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXByaW50LXN0eWxlczogICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtcmVzcG9uc2l2ZS1mb250LXNpemVzOiAgICAgICAgICAgICAgICBmYWxzZSAhZGVmYXVsdDtcbiRlbmFibGUtdmFsaWRhdGlvbi1pY29uczogICAgICAgICAgICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1kZXByZWNhdGlvbi1tZXNzYWdlczogICAgICAgICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG5cblxuLy8gU3BhY2luZ1xuLy9cbi8vIENvbnRyb2wgdGhlIGRlZmF1bHQgc3R5bGluZyBvZiBtb3N0IEJvb3RzdHJhcCBlbGVtZW50cyBieSBtb2RpZnlpbmcgdGhlc2Vcbi8vIHZhcmlhYmxlcy4gTW9zdGx5IGZvY3VzZWQgb24gc3BhY2luZy5cbi8vIFlvdSBjYW4gYWRkIG1vcmUgZW50cmllcyB0byB0aGUgJHNwYWNlcnMgbWFwLCBzaG91bGQgeW91IG5lZWQgbW9yZSB2YXJpYXRpb24uXG5cbiRzcGFjZXI6IDFyZW0gIWRlZmF1bHQ7XG4kc3BhY2VyczogKCkgIWRlZmF1bHQ7XG4kc3BhY2VyczogbWFwLW1lcmdlKFxuICAoXG4gICAgMDogMCxcbiAgICAxOiAoJHNwYWNlciAqIC4yNSksXG4gICAgMjogKCRzcGFjZXIgKiAuNSksXG4gICAgMzogJHNwYWNlcixcbiAgICA0OiAoJHNwYWNlciAqIDEuNSksXG4gICAgNTogKCRzcGFjZXIgKiAzKVxuICApLFxuICAkc3BhY2Vyc1xuKTtcblxuLy8gVGhpcyB2YXJpYWJsZSBhZmZlY3RzIHRoZSBgLmgtKmAgYW5kIGAudy0qYCBjbGFzc2VzLlxuJHNpemVzOiAoKSAhZGVmYXVsdDtcbiRzaXplczogbWFwLW1lcmdlKFxuICAoXG4gICAgMjU6IDI1JSxcbiAgICA1MDogNTAlLFxuICAgIDc1OiA3NSUsXG4gICAgMTAwOiAxMDAlLFxuICAgIGF1dG86IGF1dG9cbiAgKSxcbiAgJHNpemVzXG4pO1xuXG5cbi8vIEJvZHlcbi8vXG4vLyBTZXR0aW5ncyBmb3IgdGhlIGA8Ym9keT5gIGVsZW1lbnQuXG5cbiRib2R5LWJnOiAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kYm9keS1jb2xvcjogICAgICAgICAgICAgICAgJGdyYXktOTAwICFkZWZhdWx0O1xuXG5cbi8vIExpbmtzXG4vL1xuLy8gU3R5bGUgYW5jaG9yIGVsZW1lbnRzLlxuXG4kbGluay1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZS1jb2xvcihcInByaW1hcnlcIikgIWRlZmF1bHQ7XG4kbGluay1kZWNvcmF0aW9uOiAgICAgICAgICAgICAgICAgICAgICAgICBub25lICFkZWZhdWx0O1xuJGxpbmstaG92ZXItY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgZGFya2VuKCRsaW5rLWNvbG9yLCAxNSUpICFkZWZhdWx0O1xuJGxpbmstaG92ZXItZGVjb3JhdGlvbjogICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lICFkZWZhdWx0O1xuLy8gRGFya2VuIHBlcmNlbnRhZ2UgZm9yIGxpbmtzIHdpdGggYC50ZXh0LSpgIGNsYXNzIChlLmcuIGAudGV4dC1zdWNjZXNzYClcbiRlbXBoYXNpemVkLWxpbmstaG92ZXItZGFya2VuLXBlcmNlbnRhZ2U6IDE1JSAhZGVmYXVsdDtcblxuLy8gUGFyYWdyYXBoc1xuLy9cbi8vIFN0eWxlIHAgZWxlbWVudC5cblxuJHBhcmFncmFwaC1tYXJnaW4tYm90dG9tOiAgIDFyZW0gIWRlZmF1bHQ7XG5cblxuLy8gR3JpZCBicmVha3BvaW50c1xuLy9cbi8vIERlZmluZSB0aGUgbWluaW11bSBkaW1lbnNpb25zIGF0IHdoaWNoIHlvdXIgbGF5b3V0IHdpbGwgY2hhbmdlLFxuLy8gYWRhcHRpbmcgdG8gZGlmZmVyZW50IHNjcmVlbiBzaXplcywgZm9yIHVzZSBpbiBtZWRpYSBxdWVyaWVzLlxuXG4kZ3JpZC1icmVha3BvaW50czogKFxuICB4czogMCxcbiAgc206IDU3NnB4LFxuICBtZDogNzY4cHgsXG4gIGxnOiA5OTJweCxcbiAgeGw6IDEyMDBweFxuKSAhZGVmYXVsdDtcblxuQGluY2x1ZGUgX2Fzc2VydC1hc2NlbmRpbmcoJGdyaWQtYnJlYWtwb2ludHMsIFwiJGdyaWQtYnJlYWtwb2ludHNcIik7XG5AaW5jbHVkZSBfYXNzZXJ0LXN0YXJ0cy1hdC16ZXJvKCRncmlkLWJyZWFrcG9pbnRzLCBcIiRncmlkLWJyZWFrcG9pbnRzXCIpO1xuXG5cbi8vIEdyaWQgY29udGFpbmVyc1xuLy9cbi8vIERlZmluZSB0aGUgbWF4aW11bSB3aWR0aCBvZiBgLmNvbnRhaW5lcmAgZm9yIGRpZmZlcmVudCBzY3JlZW4gc2l6ZXMuXG5cbiRjb250YWluZXItbWF4LXdpZHRoczogKFxuICBzbTogNTQwcHgsXG4gIG1kOiA3MjBweCxcbiAgbGc6IDk2MHB4LFxuICB4bDogMTE0MHB4XG4pICFkZWZhdWx0O1xuXG5AaW5jbHVkZSBfYXNzZXJ0LWFzY2VuZGluZygkY29udGFpbmVyLW1heC13aWR0aHMsIFwiJGNvbnRhaW5lci1tYXgtd2lkdGhzXCIpO1xuXG5cbi8vIEdyaWQgY29sdW1uc1xuLy9cbi8vIFNldCB0aGUgbnVtYmVyIG9mIGNvbHVtbnMgYW5kIHNwZWNpZnkgdGhlIHdpZHRoIG9mIHRoZSBndXR0ZXJzLlxuXG4kZ3JpZC1jb2x1bW5zOiAgICAgICAgICAgICAgICAxMiAhZGVmYXVsdDtcbiRncmlkLWd1dHRlci13aWR0aDogICAgICAgICAgIDMwcHggIWRlZmF1bHQ7XG4kZ3JpZC1yb3ctY29sdW1uczogICAgICAgICAgICA2ICFkZWZhdWx0O1xuXG5cbi8vIENvbXBvbmVudHNcbi8vXG4vLyBEZWZpbmUgY29tbW9uIHBhZGRpbmcgYW5kIGJvcmRlciByYWRpdXMgc2l6ZXMgYW5kIG1vcmUuXG5cbiRsaW5lLWhlaWdodC1sZzogICAgICAgICAgICAgIDEuNSAhZGVmYXVsdDtcbiRsaW5lLWhlaWdodC1zbTogICAgICAgICAgICAgIDEuNSAhZGVmYXVsdDtcblxuJGJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgMXB4ICFkZWZhdWx0O1xuJGJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xuXG4kYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1sZzogICAgICAgICAgICAuM3JlbSAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLXNtOiAgICAgICAgICAgIC4ycmVtICFkZWZhdWx0O1xuXG4kcm91bmRlZC1waWxsOiAgICAgICAgICAgICAgICA1MHJlbSAhZGVmYXVsdDtcblxuJGJveC1zaGFkb3ctc206ICAgICAgICAgICAgICAgMCAuMTI1cmVtIC4yNXJlbSByZ2JhKCRibGFjaywgLjA3NSkgIWRlZmF1bHQ7XG4kYm94LXNoYWRvdzogICAgICAgICAgICAgICAgICAwIC41cmVtIDFyZW0gcmdiYSgkYmxhY2ssIC4xNSkgIWRlZmF1bHQ7XG4kYm94LXNoYWRvdy1sZzogICAgICAgICAgICAgICAwIDFyZW0gM3JlbSByZ2JhKCRibGFjaywgLjE3NSkgIWRlZmF1bHQ7XG5cbiRjb21wb25lbnQtYWN0aXZlLWNvbG9yOiAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRjb21wb25lbnQtYWN0aXZlLWJnOiAgICAgICAgIHRoZW1lLWNvbG9yKFwicHJpbWFyeVwiKSAhZGVmYXVsdDtcblxuJGNhcmV0LXdpZHRoOiAgICAgICAgICAgICAgICAgLjNlbSAhZGVmYXVsdDtcbiRjYXJldC12ZXJ0aWNhbC1hbGlnbjogICAgICAgICRjYXJldC13aWR0aCAqIC44NSAhZGVmYXVsdDtcbiRjYXJldC1zcGFjaW5nOiAgICAgICAgICAgICAgICRjYXJldC13aWR0aCAqIC44NSAhZGVmYXVsdDtcblxuJHRyYW5zaXRpb24tYmFzZTogICAgICAgICAgICAgYWxsIC4ycyBlYXNlLWluLW91dCAhZGVmYXVsdDtcbiR0cmFuc2l0aW9uLWZhZGU6ICAgICAgICAgICAgIG9wYWNpdHkgLjE1cyBsaW5lYXIgIWRlZmF1bHQ7XG4kdHJhbnNpdGlvbi1jb2xsYXBzZTogICAgICAgICBoZWlnaHQgLjM1cyBlYXNlICFkZWZhdWx0O1xuXG4kZW1iZWQtcmVzcG9uc2l2ZS1hc3BlY3QtcmF0aW9zOiAoKSAhZGVmYXVsdDtcbiRlbWJlZC1yZXNwb25zaXZlLWFzcGVjdC1yYXRpb3M6IGpvaW4oXG4gIChcbiAgICAoMjEgOSksXG4gICAgKDE2IDkpLFxuICAgICg0IDMpLFxuICAgICgxIDEpLFxuICApLFxuICAkZW1iZWQtcmVzcG9uc2l2ZS1hc3BlY3QtcmF0aW9zXG4pO1xuXG4vLyBUeXBvZ3JhcGh5XG4vL1xuLy8gRm9udCwgbGluZS1oZWlnaHQsIGFuZCBjb2xvciBmb3IgYm9keSB0ZXh0LCBoZWFkaW5ncywgYW5kIG1vcmUuXG5cbi8vIHN0eWxlbGludC1kaXNhYmxlIHZhbHVlLWtleXdvcmQtY2FzZVxuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6ICAgICAgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgXCJOb3RvIFNhbnNcIiwgXCJMaWJlcmF0aW9uIFNhbnNcIiwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsIFwiTm90byBDb2xvciBFbW9qaVwiICFkZWZhdWx0O1xuJGZvbnQtZmFtaWx5LW1vbm9zcGFjZTogICAgICAgU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcIkxpYmVyYXRpb24gTW9ub1wiLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZSAhZGVmYXVsdDtcbiRmb250LWZhbWlseS1iYXNlOiAgICAgICAgICAgICRmb250LWZhbWlseS1zYW5zLXNlcmlmICFkZWZhdWx0O1xuLy8gc3R5bGVsaW50LWVuYWJsZSB2YWx1ZS1rZXl3b3JkLWNhc2VcblxuJGZvbnQtc2l6ZS1iYXNlOiAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDsgLy8gQXNzdW1lcyB0aGUgYnJvd3NlciBkZWZhdWx0LCB0eXBpY2FsbHkgYDE2cHhgXG4kZm9udC1zaXplLWxnOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjI1ICFkZWZhdWx0O1xuJGZvbnQtc2l6ZS1zbTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogLjg3NSAhZGVmYXVsdDtcblxuJGZvbnQtd2VpZ2h0LWxpZ2h0ZXI6ICAgICAgICAgbGlnaHRlciAhZGVmYXVsdDtcbiRmb250LXdlaWdodC1saWdodDogICAgICAgICAgIDMwMCAhZGVmYXVsdDtcbiRmb250LXdlaWdodC1ub3JtYWw6ICAgICAgICAgIDQwMCAhZGVmYXVsdDtcbiRmb250LXdlaWdodC1ib2xkOiAgICAgICAgICAgIDcwMCAhZGVmYXVsdDtcbiRmb250LXdlaWdodC1ib2xkZXI6ICAgICAgICAgIGJvbGRlciAhZGVmYXVsdDtcblxuJGZvbnQtd2VpZ2h0LWJhc2U6ICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LW5vcm1hbCAhZGVmYXVsdDtcbiRsaW5lLWhlaWdodC1iYXNlOiAgICAgICAgICAgIDEuNSAhZGVmYXVsdDtcblxuJGgxLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMi41ICFkZWZhdWx0O1xuJGgyLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMiAhZGVmYXVsdDtcbiRoMy1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuNzUgIWRlZmF1bHQ7XG4kaDQtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjUgIWRlZmF1bHQ7XG4kaDUtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjI1ICFkZWZhdWx0O1xuJGg2LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICFkZWZhdWx0O1xuXG4kaGVhZGluZ3MtbWFyZ2luLWJvdHRvbTogICAgICAkc3BhY2VyIC8gMiAhZGVmYXVsdDtcbiRoZWFkaW5ncy1mb250LWZhbWlseTogICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kaGVhZGluZ3MtZm9udC13ZWlnaHQ6ICAgICAgICA1MDAgIWRlZmF1bHQ7XG4kaGVhZGluZ3MtbGluZS1oZWlnaHQ6ICAgICAgICAxLjIgIWRlZmF1bHQ7XG4kaGVhZGluZ3MtY29sb3I6ICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuXG4kZGlzcGxheTEtc2l6ZTogICAgICAgICAgICAgICA2cmVtICFkZWZhdWx0O1xuJGRpc3BsYXkyLXNpemU6ICAgICAgICAgICAgICAgNS41cmVtICFkZWZhdWx0O1xuJGRpc3BsYXkzLXNpemU6ICAgICAgICAgICAgICAgNC41cmVtICFkZWZhdWx0O1xuJGRpc3BsYXk0LXNpemU6ICAgICAgICAgICAgICAgMy41cmVtICFkZWZhdWx0O1xuXG4kZGlzcGxheTEtd2VpZ2h0OiAgICAgICAgICAgICAzMDAgIWRlZmF1bHQ7XG4kZGlzcGxheTItd2VpZ2h0OiAgICAgICAgICAgICAzMDAgIWRlZmF1bHQ7XG4kZGlzcGxheTMtd2VpZ2h0OiAgICAgICAgICAgICAzMDAgIWRlZmF1bHQ7XG4kZGlzcGxheTQtd2VpZ2h0OiAgICAgICAgICAgICAzMDAgIWRlZmF1bHQ7XG4kZGlzcGxheS1saW5lLWhlaWdodDogICAgICAgICAkaGVhZGluZ3MtbGluZS1oZWlnaHQgIWRlZmF1bHQ7XG5cbiRsZWFkLWZvbnQtc2l6ZTogICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuMjUgIWRlZmF1bHQ7XG4kbGVhZC1mb250LXdlaWdodDogICAgICAgICAgICAzMDAgIWRlZmF1bHQ7XG5cbiRzbWFsbC1mb250LXNpemU6ICAgICAgICAgICAgIDgwJSAhZGVmYXVsdDtcblxuJHRleHQtbXV0ZWQ6ICAgICAgICAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuXG4kYmxvY2txdW90ZS1zbWFsbC1jb2xvcjogICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kYmxvY2txdW90ZS1zbWFsbC1mb250LXNpemU6ICAkc21hbGwtZm9udC1zaXplICFkZWZhdWx0O1xuJGJsb2NrcXVvdGUtZm9udC1zaXplOiAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS4yNSAhZGVmYXVsdDtcblxuJGhyLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcbiRoci1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG5cbiRtYXJrLXBhZGRpbmc6ICAgICAgICAgICAgICAgIC4yZW0gIWRlZmF1bHQ7XG5cbiRkdC1mb250LXdlaWdodDogICAgICAgICAgICAgICRmb250LXdlaWdodC1ib2xkICFkZWZhdWx0O1xuXG4ka2JkLWJveC1zaGFkb3c6ICAgICAgICAgICAgICBpbnNldCAwIC0uMXJlbSAwIHJnYmEoJGJsYWNrLCAuMjUpICFkZWZhdWx0O1xuJG5lc3RlZC1rYmQtZm9udC13ZWlnaHQ6ICAgICAgJGZvbnQtd2VpZ2h0LWJvbGQgIWRlZmF1bHQ7XG5cbiRsaXN0LWlubGluZS1wYWRkaW5nOiAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuXG4kbWFyay1iZzogICAgICAgICAgICAgICAgICAgICAjZmNmOGUzICFkZWZhdWx0O1xuXG4kaHItbWFyZ2luLXk6ICAgICAgICAgICAgICAgICAkc3BhY2VyICFkZWZhdWx0O1xuXG5cbi8vIFRhYmxlc1xuLy9cbi8vIEN1c3RvbWl6ZXMgdGhlIGAudGFibGVgIGNvbXBvbmVudCB3aXRoIGJhc2ljIHZhbHVlcywgZWFjaCB1c2VkIGFjcm9zcyBhbGwgdGFibGUgdmFyaWF0aW9ucy5cblxuJHRhYmxlLWNlbGwtcGFkZGluZzogICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJHRhYmxlLWNlbGwtcGFkZGluZy1zbTogICAgICAgLjNyZW0gIWRlZmF1bHQ7XG5cbiR0YWJsZS1jb2xvcjogICAgICAgICAgICAgICAgICRib2R5LWNvbG9yICFkZWZhdWx0O1xuJHRhYmxlLWJnOiAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiR0YWJsZS1hY2NlbnQtYmc6ICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMDUpICFkZWZhdWx0O1xuJHRhYmxlLWhvdmVyLWNvbG9yOiAgICAgICAgICAgJHRhYmxlLWNvbG9yICFkZWZhdWx0O1xuJHRhYmxlLWhvdmVyLWJnOiAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4wNzUpICFkZWZhdWx0O1xuJHRhYmxlLWFjdGl2ZS1iZzogICAgICAgICAgICAgJHRhYmxlLWhvdmVyLWJnICFkZWZhdWx0O1xuXG4kdGFibGUtYm9yZGVyLXdpZHRoOiAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJHRhYmxlLWJvcmRlci1jb2xvcjogICAgICAgICAgJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcblxuJHRhYmxlLWhlYWQtYmc6ICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJHRhYmxlLWhlYWQtY29sb3I6ICAgICAgICAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xuJHRhYmxlLXRoLWZvbnQtd2VpZ2h0OiAgICAgICAgbnVsbCAhZGVmYXVsdDtcblxuJHRhYmxlLWRhcmstY29sb3I6ICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHRhYmxlLWRhcmstYmc6ICAgICAgICAgICAgICAgJGdyYXktODAwICFkZWZhdWx0O1xuJHRhYmxlLWRhcmstYWNjZW50LWJnOiAgICAgICAgcmdiYSgkd2hpdGUsIC4wNSkgIWRlZmF1bHQ7XG4kdGFibGUtZGFyay1ob3Zlci1jb2xvcjogICAgICAkdGFibGUtZGFyay1jb2xvciAhZGVmYXVsdDtcbiR0YWJsZS1kYXJrLWhvdmVyLWJnOiAgICAgICAgIHJnYmEoJHdoaXRlLCAuMDc1KSAhZGVmYXVsdDtcbiR0YWJsZS1kYXJrLWJvcmRlci1jb2xvcjogICAgIGxpZ2h0ZW4oJHRhYmxlLWRhcmstYmcsIDcuNSUpICFkZWZhdWx0O1xuXG4kdGFibGUtc3RyaXBlZC1vcmRlcjogICAgICAgICBvZGQgIWRlZmF1bHQ7XG5cbiR0YWJsZS1jYXB0aW9uLWNvbG9yOiAgICAgICAgICR0ZXh0LW11dGVkICFkZWZhdWx0O1xuXG4kdGFibGUtYmctbGV2ZWw6ICAgICAgICAgICAgICAtOSAhZGVmYXVsdDtcbiR0YWJsZS1ib3JkZXItbGV2ZWw6ICAgICAgICAgIC02ICFkZWZhdWx0O1xuXG5cbi8vIEJ1dHRvbnMgKyBGb3Jtc1xuLy9cbi8vIFNoYXJlZCB2YXJpYWJsZXMgdGhhdCBhcmUgcmVhc3NpZ25lZCB0byBgJGlucHV0LWAgYW5kIGAkYnRuLWAgc3BlY2lmaWMgdmFyaWFibGVzLlxuXG4kaW5wdXQtYnRuLXBhZGRpbmcteTogICAgICAgICAuMzc1cmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1wYWRkaW5nLXg6ICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1mb250LWZhbWlseTogICAgICAgbnVsbCAhZGVmYXVsdDtcbiRpbnB1dC1idG4tZm9udC1zaXplOiAgICAgICAgICRmb250LXNpemUtYmFzZSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tbGluZS1oZWlnaHQ6ICAgICAgICRsaW5lLWhlaWdodC1iYXNlICFkZWZhdWx0O1xuXG4kaW5wdXQtYnRuLWZvY3VzLXdpZHRoOiAgICAgICAuMnJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tZm9jdXMtY29sb3I6ICAgICAgIHJnYmEoJGNvbXBvbmVudC1hY3RpdmUtYmcsIC4yNSkgIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3c6ICAwIDAgMCAkaW5wdXQtYnRuLWZvY3VzLXdpZHRoICRpbnB1dC1idG4tZm9jdXMtY29sb3IgIWRlZmF1bHQ7XG5cbiRpbnB1dC1idG4tcGFkZGluZy15LXNtOiAgICAgIC4yNXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tcGFkZGluZy14LXNtOiAgICAgIC41cmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1mb250LXNpemUtc206ICAgICAgJGZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tbGluZS1oZWlnaHQtc206ICAgICRsaW5lLWhlaWdodC1zbSAhZGVmYXVsdDtcblxuJGlucHV0LWJ0bi1wYWRkaW5nLXktbGc6ICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLXBhZGRpbmcteC1sZzogICAgICAxcmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1mb250LXNpemUtbGc6ICAgICAgJGZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcbiRpbnB1dC1idG4tbGluZS1oZWlnaHQtbGc6ICAgICRsaW5lLWhlaWdodC1sZyAhZGVmYXVsdDtcblxuJGlucHV0LWJ0bi1ib3JkZXItd2lkdGg6ICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcblxuXG4vLyBCdXR0b25zXG4vL1xuLy8gRm9yIGVhY2ggb2YgQm9vdHN0cmFwJ3MgYnV0dG9ucywgZGVmaW5lIHRleHQsIGJhY2tncm91bmQsIGFuZCBib3JkZXIgY29sb3IuXG5cbiRidG4tcGFkZGluZy15OiAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy15ICFkZWZhdWx0O1xuJGJ0bi1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXggIWRlZmF1bHQ7XG4kYnRuLWZvbnQtZmFtaWx5OiAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtZmFtaWx5ICFkZWZhdWx0O1xuJGJ0bi1mb250LXNpemU6ICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1mb250LXNpemUgIWRlZmF1bHQ7XG4kYnRuLWxpbmUtaGVpZ2h0OiAgICAgICAgICAgICAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0ICFkZWZhdWx0O1xuJGJ0bi13aGl0ZS1zcGFjZTogICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDsgLy8gU2V0IHRvIGBub3dyYXBgIHRvIHByZXZlbnQgdGV4dCB3cmFwcGluZ1xuXG4kYnRuLXBhZGRpbmcteS1zbTogICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteS1zbSAhZGVmYXVsdDtcbiRidG4tcGFkZGluZy14LXNtOiAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy14LXNtICFkZWZhdWx0O1xuJGJ0bi1mb250LXNpemUtc206ICAgICAgICAgICAgJGlucHV0LWJ0bi1mb250LXNpemUtc20gIWRlZmF1bHQ7XG4kYnRuLWxpbmUtaGVpZ2h0LXNtOiAgICAgICAgICAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LXNtICFkZWZhdWx0O1xuXG4kYnRuLXBhZGRpbmcteS1sZzogICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteS1sZyAhZGVmYXVsdDtcbiRidG4tcGFkZGluZy14LWxnOiAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy14LWxnICFkZWZhdWx0O1xuJGJ0bi1mb250LXNpemUtbGc6ICAgICAgICAgICAgJGlucHV0LWJ0bi1mb250LXNpemUtbGcgIWRlZmF1bHQ7XG4kYnRuLWxpbmUtaGVpZ2h0LWxnOiAgICAgICAgICAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LWxnICFkZWZhdWx0O1xuXG4kYnRuLWJvcmRlci13aWR0aDogICAgICAgICAgICAkaW5wdXQtYnRuLWJvcmRlci13aWR0aCAhZGVmYXVsdDtcblxuJGJ0bi1mb250LXdlaWdodDogICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LW5vcm1hbCAhZGVmYXVsdDtcbiRidG4tYm94LXNoYWRvdzogICAgICAgICAgICAgIGluc2V0IDAgMXB4IDAgcmdiYSgkd2hpdGUsIC4xNSksIDAgMXB4IDFweCByZ2JhKCRibGFjaywgLjA3NSkgIWRlZmF1bHQ7XG4kYnRuLWZvY3VzLXdpZHRoOiAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvY3VzLXdpZHRoICFkZWZhdWx0O1xuJGJ0bi1mb2N1cy1ib3gtc2hhZG93OiAgICAgICAgJGlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93ICFkZWZhdWx0O1xuJGJ0bi1kaXNhYmxlZC1vcGFjaXR5OiAgICAgICAgLjY1ICFkZWZhdWx0O1xuJGJ0bi1hY3RpdmUtYm94LXNoYWRvdzogICAgICAgaW5zZXQgMCAzcHggNXB4IHJnYmEoJGJsYWNrLCAuMTI1KSAhZGVmYXVsdDtcblxuJGJ0bi1saW5rLWRpc2FibGVkLWNvbG9yOiAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuXG4kYnRuLWJsb2NrLXNwYWNpbmcteTogICAgICAgICAuNXJlbSAhZGVmYXVsdDtcblxuLy8gQWxsb3dzIGZvciBjdXN0b21pemluZyBidXR0b24gcmFkaXVzIGluZGVwZW5kZW50bHkgZnJvbSBnbG9iYWwgYm9yZGVyIHJhZGl1c1xuJGJ0bi1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kYnRuLWJvcmRlci1yYWRpdXMtbGc6ICAgICAgICAkYm9yZGVyLXJhZGl1cy1sZyAhZGVmYXVsdDtcbiRidG4tYm9yZGVyLXJhZGl1cy1zbTogICAgICAgICRib3JkZXItcmFkaXVzLXNtICFkZWZhdWx0O1xuXG4kYnRuLXRyYW5zaXRpb246ICAgICAgICAgICAgICBjb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7XG5cblxuLy8gRm9ybXNcblxuJGxhYmVsLW1hcmdpbi1ib3R0b206ICAgICAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuXG4kaW5wdXQtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXkgIWRlZmF1bHQ7XG4kaW5wdXQtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXggIWRlZmF1bHQ7XG4kaW5wdXQtZm9udC1mYW1pbHk6ICAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1mb250LWZhbWlseSAhZGVmYXVsdDtcbiRpbnB1dC1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtc2l6ZSAhZGVmYXVsdDtcbiRpbnB1dC1mb250LXdlaWdodDogICAgICAgICAgICAgICAgICAgICAkZm9udC13ZWlnaHQtYmFzZSAhZGVmYXVsdDtcbiRpbnB1dC1saW5lLWhlaWdodDogICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0ICFkZWZhdWx0O1xuXG4kaW5wdXQtcGFkZGluZy15LXNtOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXktc20gIWRlZmF1bHQ7XG4kaW5wdXQtcGFkZGluZy14LXNtOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXgtc20gIWRlZmF1bHQ7XG4kaW5wdXQtZm9udC1zaXplLXNtOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1mb250LXNpemUtc20gIWRlZmF1bHQ7XG4kaW5wdXQtbGluZS1oZWlnaHQtc206ICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1saW5lLWhlaWdodC1zbSAhZGVmYXVsdDtcblxuJGlucHV0LXBhZGRpbmcteS1sZzogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy15LWxnICFkZWZhdWx0O1xuJGlucHV0LXBhZGRpbmcteC1sZzogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy14LWxnICFkZWZhdWx0O1xuJGlucHV0LWZvbnQtc2l6ZS1sZzogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9udC1zaXplLWxnICFkZWZhdWx0O1xuJGlucHV0LWxpbmUtaGVpZ2h0LWxnOiAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tbGluZS1oZWlnaHQtbGcgIWRlZmF1bHQ7XG5cbiRpbnB1dC1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kaW5wdXQtZGlzYWJsZWQtYmc6ICAgICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuXG4kaW5wdXQtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xuJGlucHV0LWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgICAgICRncmF5LTQwMCAhZGVmYXVsdDtcbiRpbnB1dC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRpbnB1dC1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICAgICAgICBpbnNldCAwIDFweCAxcHggcmdiYSgkYmxhY2ssIC4wNzUpICFkZWZhdWx0O1xuXG4kaW5wdXQtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kaW5wdXQtYm9yZGVyLXJhZGl1cy1sZzogICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMtbGcgIWRlZmF1bHQ7XG4kaW5wdXQtYm9yZGVyLXJhZGl1cy1zbTogICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMtc20gIWRlZmF1bHQ7XG5cbiRpbnB1dC1mb2N1cy1iZzogICAgICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYmcgIWRlZmF1bHQ7XG4kaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgbGlnaHRlbigkY29tcG9uZW50LWFjdGl2ZS1iZywgMjUlKSAhZGVmYXVsdDtcbiRpbnB1dC1mb2N1cy1jb2xvcjogICAgICAgICAgICAgICAgICAgICAkaW5wdXQtY29sb3IgIWRlZmF1bHQ7XG4kaW5wdXQtZm9jdXMtd2lkdGg6ICAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1mb2N1cy13aWR0aCAhZGVmYXVsdDtcbiRpbnB1dC1mb2N1cy1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XG5cbiRpbnB1dC1wbGFjZWhvbGRlci1jb2xvcjogICAgICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kaW5wdXQtcGxhaW50ZXh0LWNvbG9yOiAgICAgICAgICAgICAgICAgJGJvZHktY29sb3IgIWRlZmF1bHQ7XG5cbiRpbnB1dC1oZWlnaHQtYm9yZGVyOiAgICAgICAgICAgICAgICAgICAkaW5wdXQtYm9yZGVyLXdpZHRoICogMiAhZGVmYXVsdDtcblxuJGlucHV0LWhlaWdodC1pbm5lcjogICAgICAgICAgICAgICAgICAgIGFkZCgkaW5wdXQtbGluZS1oZWlnaHQgKiAxZW0sICRpbnB1dC1wYWRkaW5nLXkgKiAyKSAhZGVmYXVsdDtcbiRpbnB1dC1oZWlnaHQtaW5uZXItaGFsZjogICAgICAgICAgICAgICBhZGQoJGlucHV0LWxpbmUtaGVpZ2h0ICogLjVlbSwgJGlucHV0LXBhZGRpbmcteSkgIWRlZmF1bHQ7XG4kaW5wdXQtaGVpZ2h0LWlubmVyLXF1YXJ0ZXI6ICAgICAgICAgICAgYWRkKCRpbnB1dC1saW5lLWhlaWdodCAqIC4yNWVtLCAkaW5wdXQtcGFkZGluZy15IC8gMikgIWRlZmF1bHQ7XG5cbiRpbnB1dC1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgICAgICAgICBhZGQoJGlucHV0LWxpbmUtaGVpZ2h0ICogMWVtLCBhZGQoJGlucHV0LXBhZGRpbmcteSAqIDIsICRpbnB1dC1oZWlnaHQtYm9yZGVyLCBmYWxzZSkpICFkZWZhdWx0O1xuJGlucHV0LWhlaWdodC1zbTogICAgICAgICAgICAgICAgICAgICAgIGFkZCgkaW5wdXQtbGluZS1oZWlnaHQtc20gKiAxZW0sIGFkZCgkaW5wdXQtcGFkZGluZy15LXNtICogMiwgJGlucHV0LWhlaWdodC1ib3JkZXIsIGZhbHNlKSkgIWRlZmF1bHQ7XG4kaW5wdXQtaGVpZ2h0LWxnOiAgICAgICAgICAgICAgICAgICAgICAgYWRkKCRpbnB1dC1saW5lLWhlaWdodC1sZyAqIDFlbSwgYWRkKCRpbnB1dC1wYWRkaW5nLXktbGcgKiAyLCAkaW5wdXQtaGVpZ2h0LWJvcmRlciwgZmFsc2UpKSAhZGVmYXVsdDtcblxuJGlucHV0LXRyYW5zaXRpb246ICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7XG5cbiRmb3JtLXRleHQtbWFyZ2luLXRvcDogICAgICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG5cbiRmb3JtLWNoZWNrLWlucHV0LWd1dHRlcjogICAgICAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xuJGZvcm0tY2hlY2staW5wdXQtbWFyZ2luLXk6ICAgICAgICAgICAgIC4zcmVtICFkZWZhdWx0O1xuJGZvcm0tY2hlY2staW5wdXQtbWFyZ2luLXg6ICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcblxuJGZvcm0tY2hlY2staW5saW5lLW1hcmdpbi14OiAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRmb3JtLWNoZWNrLWlubGluZS1pbnB1dC1tYXJnaW4teDogICAgICAuMzEyNXJlbSAhZGVmYXVsdDtcblxuJGZvcm0tZ3JpZC1ndXR0ZXItd2lkdGg6ICAgICAgICAgICAgICAgIDEwcHggIWRlZmF1bHQ7XG4kZm9ybS1ncm91cC1tYXJnaW4tYm90dG9tOiAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcblxuJGlucHV0LWdyb3VwLWFkZG9uLWNvbG9yOiAgICAgICAgICAgICAgICRpbnB1dC1jb2xvciAhZGVmYXVsdDtcbiRpbnB1dC1ncm91cC1hZGRvbi1iZzogICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kaW5wdXQtZ3JvdXAtYWRkb24tYm9yZGVyLWNvbG9yOiAgICAgICAgJGlucHV0LWJvcmRlci1jb2xvciAhZGVmYXVsdDtcblxuJGN1c3RvbS1mb3Jtcy10cmFuc2l0aW9uOiAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dCAhZGVmYXVsdDtcblxuJGN1c3RvbS1jb250cm9sLWd1dHRlcjogICAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLXNwYWNlci14OiAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtY3Vyc29yOiAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcblxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1zaXplOiAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJnOiAgICAgICAgICAgJGlucHV0LWJnICFkZWZhdWx0O1xuXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJnLXNpemU6ICAgICAgNTAlIDUwJSAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYm94LXNoYWRvdzogICAkaW5wdXQtYm94LXNoYWRvdyAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYm9yZGVyLWNvbG9yOiAkZ3JheS01MDAgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJvcmRlci13aWR0aDogJGlucHV0LWJvcmRlci13aWR0aCAhZGVmYXVsdDtcblxuJGN1c3RvbS1jb250cm9sLWxhYmVsLWNvbG9yOiAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG5cbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItZGlzYWJsZWQtYmc6ICAgICAgICAgICRpbnB1dC1kaXNhYmxlZC1iZyAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1sYWJlbC1kaXNhYmxlZC1jb2xvcjogICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcblxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWNvbG9yOiAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtYmc6ICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1kaXNhYmxlZC1iZzogIHJnYmEodGhlbWUtY29sb3IoXCJwcmltYXJ5XCIpLCAuNSkgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtYm94LXNoYWRvdzogICBudWxsICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWJvcmRlci1jb2xvcjogJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWJnICFkZWZhdWx0O1xuXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWZvY3VzLWJveC1zaGFkb3c6ICAgICAkaW5wdXQtZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItZm9jdXMtYm9yZGVyLWNvbG9yOiAgICRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG5cbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYWN0aXZlLWNvbG9yOiAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtYmc6ICAgICAgICAgICAgbGlnaHRlbigkY29tcG9uZW50LWFjdGl2ZS1iZywgMzUlKSAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYWN0aXZlLWJveC1zaGFkb3c6ICAgIG51bGwgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWFjdGl2ZS1ib3JkZXItY29sb3I6ICAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWFjdGl2ZS1iZyAhZGVmYXVsdDtcblxuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItYm9yZGVyLXJhZGl1czogICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pY29uLWNoZWNrZWQ6ICAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc4JyBoZWlnaHQ9JzgnIHZpZXdCb3g9JzAgMCA4IDgnPjxwYXRoIGZpbGw9JyN7JGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWNvbG9yfScgZD0nTTYuNTY0Ljc1bC0zLjU5IDMuNjEyLTEuNTM4LTEuNTVMMCA0LjI2bDIuOTc0IDIuOTlMOCAyLjE5M3onLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG5cbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtYmc6ICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtY29sb3I6ICAgICAgICAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pY29uLWluZGV0ZXJtaW5hdGU6ICAgICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nNCcgaGVpZ2h0PSc0JyB2aWV3Qm94PScwIDAgNCA0Jz48cGF0aCBzdHJva2U9JyN7JGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1jb2xvcn0nIGQ9J00wIDJoNCcvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtYm94LXNoYWRvdzogICBudWxsICFkZWZhdWx0O1xuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1ib3JkZXItY29sb3I6ICRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtYmcgIWRlZmF1bHQ7XG5cbiRjdXN0b20tcmFkaW8taW5kaWNhdG9yLWJvcmRlci1yYWRpdXM6ICAgICAgICAgIDUwJSAhZGVmYXVsdDtcbiRjdXN0b20tcmFkaW8taW5kaWNhdG9yLWljb24tY2hlY2tlZDogICAgICAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzEyJyBoZWlnaHQ9JzEyJyB2aWV3Qm94PSctNCAtNCA4IDgnPjxjaXJjbGUgcj0nMycgZmlsbD0nI3skY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtY29sb3J9Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xuXG4kY3VzdG9tLXN3aXRjaC13aWR0aDogICAgICAgICAgICAgICAgICAgICAgICAgICAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLXNpemUgKiAxLjc1ICFkZWZhdWx0O1xuJGN1c3RvbS1zd2l0Y2gtaW5kaWNhdG9yLWJvcmRlci1yYWRpdXM6ICAgICAgICAgJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1zaXplIC8gMiAhZGVmYXVsdDtcbiRjdXN0b20tc3dpdGNoLWluZGljYXRvci1zaXplOiAgICAgICAgICAgICAgICAgIHN1YnRyYWN0KCRjdXN0b20tY29udHJvbC1pbmRpY2F0b3Itc2l6ZSwgJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1ib3JkZXItd2lkdGggKiA0KSAhZGVmYXVsdDtcblxuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy15OiAgICAgICAgICAgJGlucHV0LXBhZGRpbmcteSAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteDogICAgICAgICAgICRpbnB1dC1wYWRkaW5nLXggIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1mb250LWZhbWlseTogICAgICAgICAkaW5wdXQtZm9udC1mYW1pbHkgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1mb250LXNpemU6ICAgICAgICAgICAkaW5wdXQtZm9udC1zaXplICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtaGVpZ2h0OiAgICAgICAgICAgICAgJGlucHV0LWhlaWdodCAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWluZGljYXRvci1wYWRkaW5nOiAgIDFyZW0gIWRlZmF1bHQ7IC8vIEV4dHJhIHBhZGRpbmcgdG8gYWNjb3VudCBmb3IgdGhlIHByZXNlbmNlIG9mIHRoZSBiYWNrZ3JvdW5kLWltYWdlIGJhc2VkIGluZGljYXRvclxuJGN1c3RvbS1zZWxlY3QtZm9udC13ZWlnaHQ6ICAgICAgICAgJGlucHV0LWZvbnQtd2VpZ2h0ICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtbGluZS1oZWlnaHQ6ICAgICAgICAgJGlucHV0LWxpbmUtaGVpZ2h0ICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtY29sb3I6ICAgICAgICAgICAgICAgJGlucHV0LWNvbG9yICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZGlzYWJsZWQtY29sb3I6ICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtYmc6ICAgICAgICAgICAgICAgICAgJGlucHV0LWJnICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZGlzYWJsZWQtYmc6ICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtYmctc2l6ZTogICAgICAgICAgICAgOHB4IDEwcHggIWRlZmF1bHQ7IC8vIEluIHBpeGVscyBiZWNhdXNlIGltYWdlIGRpbWVuc2lvbnNcbiRjdXN0b20tc2VsZWN0LWluZGljYXRvci1jb2xvcjogICAgICRncmF5LTgwMCAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWluZGljYXRvcjogICAgICAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzQnIGhlaWdodD0nNScgdmlld0JveD0nMCAwIDQgNSc+PHBhdGggZmlsbD0nI3skY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItY29sb3J9JyBkPSdNMiAwTDAgMmg0em0wIDVMMCAzaDR6Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtYmFja2dyb3VuZDogICAgICAgICAgZXNjYXBlLXN2ZygkY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3IpIHJpZ2h0ICRjdXN0b20tc2VsZWN0LXBhZGRpbmcteCBjZW50ZXIgLyAkY3VzdG9tLXNlbGVjdC1iZy1zaXplIG5vLXJlcGVhdCAhZGVmYXVsdDsgLy8gVXNlZCBzbyB3ZSBjYW4gaGF2ZSBtdWx0aXBsZSBiYWNrZ3JvdW5kIGVsZW1lbnRzIChlLmcuLCBhcnJvdyBhbmQgZmVlZGJhY2sgaWNvbilcblxuJGN1c3RvbS1zZWxlY3QtZmVlZGJhY2staWNvbi1wYWRkaW5nLXJpZ2h0OiBhZGQoMWVtICogLjc1LCAoMiAqICRjdXN0b20tc2VsZWN0LXBhZGRpbmcteSAqIC43NSkgKyAkY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXggKyAkY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItcGFkZGluZykgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1mZWVkYmFjay1pY29uLXBvc2l0aW9uOiAgICAgIGNlbnRlciByaWdodCAoJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14ICsgJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLXBhZGRpbmcpICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZmVlZGJhY2staWNvbi1zaXplOiAgICAgICAgICAkaW5wdXQtaGVpZ2h0LWlubmVyLWhhbGYgJGlucHV0LWhlaWdodC1pbm5lci1oYWxmICFkZWZhdWx0O1xuXG4kY3VzdG9tLXNlbGVjdC1ib3JkZXItd2lkdGg6ICAgICAgICAkaW5wdXQtYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtYm9yZGVyLWNvbG9yOiAgICAgICAgJGlucHV0LWJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWJvcmRlci1yYWRpdXM6ICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtYm94LXNoYWRvdzogICAgICAgICAgaW5zZXQgMCAxcHggMnB4IHJnYmEoJGJsYWNrLCAuMDc1KSAhZGVmYXVsdDtcblxuJGN1c3RvbS1zZWxlY3QtZm9jdXMtYm9yZGVyLWNvbG9yOiAgJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWZvY3VzLXdpZHRoOiAgICAgICAgICRpbnB1dC1mb2N1cy13aWR0aCAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWZvY3VzLWJveC1zaGFkb3c6ICAgIDAgMCAwICRjdXN0b20tc2VsZWN0LWZvY3VzLXdpZHRoICRpbnB1dC1idG4tZm9jdXMtY29sb3IgIWRlZmF1bHQ7XG5cbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteS1zbTogICAgICAgICRpbnB1dC1wYWRkaW5nLXktc20gIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXgtc206ICAgICAgICAkaW5wdXQtcGFkZGluZy14LXNtICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZm9udC1zaXplLXNtOiAgICAgICAgJGlucHV0LWZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWhlaWdodC1zbTogICAgICAgICAgICRpbnB1dC1oZWlnaHQtc20gIWRlZmF1bHQ7XG5cbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteS1sZzogICAgICAgICRpbnB1dC1wYWRkaW5nLXktbGcgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXgtbGc6ICAgICAgICAkaW5wdXQtcGFkZGluZy14LWxnICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZm9udC1zaXplLWxnOiAgICAgICAgJGlucHV0LWZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWhlaWdodC1sZzogICAgICAgICAgICRpbnB1dC1oZWlnaHQtbGcgIWRlZmF1bHQ7XG5cbiRjdXN0b20tcmFuZ2UtdHJhY2std2lkdGg6ICAgICAgICAgIDEwMCUgIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRyYWNrLWhlaWdodDogICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdHJhY2stY3Vyc29yOiAgICAgICAgIHBvaW50ZXIgIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRyYWNrLWJnOiAgICAgICAgICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRyYWNrLWJvcmRlci1yYWRpdXM6ICAxcmVtICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10cmFjay1ib3gtc2hhZG93OiAgICAgaW5zZXQgMCAuMjVyZW0gLjI1cmVtIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XG5cbiRjdXN0b20tcmFuZ2UtdGh1bWItd2lkdGg6ICAgICAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRodW1iLWhlaWdodDogICAgICAgICAgICAgICAgICAkY3VzdG9tLXJhbmdlLXRodW1iLXdpZHRoICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10aHVtYi1iZzogICAgICAgICAgICAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRodW1iLWJvcmRlcjogICAgICAgICAgICAgICAgICAwICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10aHVtYi1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdGh1bWItYm94LXNoYWRvdzogICAgICAgICAgICAgIDAgLjFyZW0gLjI1cmVtIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRodW1iLWZvY3VzLWJveC1zaGFkb3c6ICAgICAgICAwIDAgMCAxcHggJGJvZHktYmcsICRpbnB1dC1mb2N1cy1ib3gtc2hhZG93ICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10aHVtYi1mb2N1cy1ib3gtc2hhZG93LXdpZHRoOiAgJGlucHV0LWZvY3VzLXdpZHRoICFkZWZhdWx0OyAvLyBGb3IgZm9jdXMgYm94IHNoYWRvdyBpc3N1ZSBpbiBJRS9FZGdlXG4kY3VzdG9tLXJhbmdlLXRodW1iLWFjdGl2ZS1iZzogICAgICAgICAgICAgICBsaWdodGVuKCRjb21wb25lbnQtYWN0aXZlLWJnLCAzNSUpICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10aHVtYi1kaXNhYmxlZC1iZzogICAgICAgICAgICAgJGdyYXktNTAwICFkZWZhdWx0O1xuXG4kY3VzdG9tLWZpbGUtaGVpZ2h0OiAgICAgICAgICAgICAgICAkaW5wdXQtaGVpZ2h0ICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWhlaWdodC1pbm5lcjogICAgICAgICAgJGlucHV0LWhlaWdodC1pbm5lciAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1mb2N1cy1ib3JkZXItY29sb3I6ICAgICRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtZm9jdXMtYm94LXNoYWRvdzogICAgICAkaW5wdXQtZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1kaXNhYmxlZC1iZzogICAgICAgICAgICRpbnB1dC1kaXNhYmxlZC1iZyAhZGVmYXVsdDtcblxuJGN1c3RvbS1maWxlLXBhZGRpbmcteTogICAgICAgICAgICAgJGlucHV0LXBhZGRpbmcteSAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1wYWRkaW5nLXg6ICAgICAgICAgICAgICRpbnB1dC1wYWRkaW5nLXggIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtbGluZS1oZWlnaHQ6ICAgICAgICAgICAkaW5wdXQtbGluZS1oZWlnaHQgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtZm9udC1mYW1pbHk6ICAgICAgICAgICAkaW5wdXQtZm9udC1mYW1pbHkgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtZm9udC13ZWlnaHQ6ICAgICAgICAgICAkaW5wdXQtZm9udC13ZWlnaHQgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtY29sb3I6ICAgICAgICAgICAgICAgICAkaW5wdXQtY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtYmc6ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYmcgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtYm9yZGVyLXdpZHRoOiAgICAgICAgICAkaW5wdXQtYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWJvcmRlci1jb2xvcjogICAgICAgICAgJGlucHV0LWJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1ib3JkZXItcmFkaXVzOiAgICAgICAgICRpbnB1dC1ib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWJveC1zaGFkb3c6ICAgICAgICAgICAgJGlucHV0LWJveC1zaGFkb3cgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtYnV0dG9uLWNvbG9yOiAgICAgICAgICAkY3VzdG9tLWZpbGUtY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtYnV0dG9uLWJnOiAgICAgICAgICAgICAkaW5wdXQtZ3JvdXAtYWRkb24tYmcgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtdGV4dDogKFxuICBlbjogXCJCcm93c2VcIlxuKSAhZGVmYXVsdDtcblxuXG4vLyBGb3JtIHZhbGlkYXRpb25cblxuJGZvcm0tZmVlZGJhY2stbWFyZ2luLXRvcDogICAgICAgICAgJGZvcm0tdGV4dC1tYXJnaW4tdG9wICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stZm9udC1zaXplOiAgICAgICAgICAgJHNtYWxsLWZvbnQtc2l6ZSAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLXZhbGlkLWNvbG9yOiAgICAgICAgIHRoZW1lLWNvbG9yKFwic3VjY2Vzc1wiKSAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLWludmFsaWQtY29sb3I6ICAgICAgIHRoZW1lLWNvbG9yKFwiZGFuZ2VyXCIpICFkZWZhdWx0O1xuXG4kZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkLWNvbG9yOiAgICAkZm9ybS1mZWVkYmFjay12YWxpZC1jb2xvciAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLWljb24tdmFsaWQ6ICAgICAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzgnIGhlaWdodD0nOCcgdmlld0JveD0nMCAwIDggOCc+PHBhdGggZmlsbD0nI3skZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkLWNvbG9yfScgZD0nTTIuMyA2LjczTC42IDQuNTNjLS40LTEuMDQuNDYtMS40IDEuMS0uOGwxLjEgMS40IDMuNC0zLjhjLjYtLjYzIDEuNi0uMjcgMS4yLjdsLTQgNC42Yy0uNDMuNS0uOC40LTEuMS4xeicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZC1jb2xvcjogICRmb3JtLWZlZWRiYWNrLWludmFsaWQtY29sb3IgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQ6ICAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMicgaGVpZ2h0PScxMicgZmlsbD0nbm9uZScgc3Ryb2tlPScjeyRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZC1jb2xvcn0nIHZpZXdCb3g9JzAgMCAxMiAxMic+PGNpcmNsZSBjeD0nNicgY3k9JzYnIHI9JzQuNScvPjxwYXRoIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGQ9J001LjggMy42aC40TDYgNi41eicvPjxjaXJjbGUgY3g9JzYnIGN5PSc4LjInIHI9Jy42JyBmaWxsPScjeyRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZC1jb2xvcn0nIHN0cm9rZT0nbm9uZScvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcblxuJGZvcm0tdmFsaWRhdGlvbi1zdGF0ZXM6ICgpICFkZWZhdWx0O1xuJGZvcm0tdmFsaWRhdGlvbi1zdGF0ZXM6IG1hcC1tZXJnZShcbiAgKFxuICAgIFwidmFsaWRcIjogKFxuICAgICAgXCJjb2xvclwiOiAkZm9ybS1mZWVkYmFjay12YWxpZC1jb2xvcixcbiAgICAgIFwiaWNvblwiOiAkZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkXG4gICAgKSxcbiAgICBcImludmFsaWRcIjogKFxuICAgICAgXCJjb2xvclwiOiAkZm9ybS1mZWVkYmFjay1pbnZhbGlkLWNvbG9yLFxuICAgICAgXCJpY29uXCI6ICRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZFxuICAgICksXG4gICksXG4gICRmb3JtLXZhbGlkYXRpb24tc3RhdGVzXG4pO1xuXG4vLyBaLWluZGV4IG1hc3RlciBsaXN0XG4vL1xuLy8gV2FybmluZzogQXZvaWQgY3VzdG9taXppbmcgdGhlc2UgdmFsdWVzLiBUaGV5J3JlIHVzZWQgZm9yIGEgYmlyZCdzIGV5ZSB2aWV3XG4vLyBvZiBjb21wb25lbnRzIGRlcGVuZGVudCBvbiB0aGUgei1heGlzIGFuZCBhcmUgZGVzaWduZWQgdG8gYWxsIHdvcmsgdG9nZXRoZXIuXG5cbiR6aW5kZXgtZHJvcGRvd246ICAgICAgICAgICAgICAgICAgIDEwMDAgIWRlZmF1bHQ7XG4kemluZGV4LXN0aWNreTogICAgICAgICAgICAgICAgICAgICAxMDIwICFkZWZhdWx0O1xuJHppbmRleC1maXhlZDogICAgICAgICAgICAgICAgICAgICAgMTAzMCAhZGVmYXVsdDtcbiR6aW5kZXgtbW9kYWwtYmFja2Ryb3A6ICAgICAgICAgICAgIDEwNDAgIWRlZmF1bHQ7XG4kemluZGV4LW1vZGFsOiAgICAgICAgICAgICAgICAgICAgICAxMDUwICFkZWZhdWx0O1xuJHppbmRleC1wb3BvdmVyOiAgICAgICAgICAgICAgICAgICAgMTA2MCAhZGVmYXVsdDtcbiR6aW5kZXgtdG9vbHRpcDogICAgICAgICAgICAgICAgICAgIDEwNzAgIWRlZmF1bHQ7XG5cblxuLy8gTmF2c1xuXG4kbmF2LWxpbmstcGFkZGluZy15OiAgICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRuYXYtbGluay1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kbmF2LWxpbmstZGlzYWJsZWQtY29sb3I6ICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG5cbiRuYXYtdGFicy1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICRncmF5LTMwMCAhZGVmYXVsdDtcbiRuYXYtdGFicy1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kbmF2LXRhYnMtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRuYXYtdGFicy1saW5rLWhvdmVyLWJvcmRlci1jb2xvcjogICRncmF5LTIwMCAkZ3JheS0yMDAgJG5hdi10YWJzLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRuYXYtdGFicy1saW5rLWFjdGl2ZS1jb2xvcjogICAgICAgICRncmF5LTcwMCAhZGVmYXVsdDtcbiRuYXYtdGFicy1saW5rLWFjdGl2ZS1iZzogICAgICAgICAgICRib2R5LWJnICFkZWZhdWx0O1xuJG5hdi10YWJzLWxpbmstYWN0aXZlLWJvcmRlci1jb2xvcjogJGdyYXktMzAwICRncmF5LTMwMCAkbmF2LXRhYnMtbGluay1hY3RpdmUtYmcgIWRlZmF1bHQ7XG5cbiRuYXYtcGlsbHMtYm9yZGVyLXJhZGl1czogICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJG5hdi1waWxscy1saW5rLWFjdGl2ZS1jb2xvcjogICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kbmF2LXBpbGxzLWxpbmstYWN0aXZlLWJnOiAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcblxuJG5hdi1kaXZpZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJG5hdi1kaXZpZGVyLW1hcmdpbi15OiAgICAgICAgICAgICAgJHNwYWNlciAvIDIgIWRlZmF1bHQ7XG5cblxuLy8gTmF2YmFyXG5cbiRuYXZiYXItcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICRzcGFjZXIgLyAyICFkZWZhdWx0O1xuJG5hdmJhci1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgJHNwYWNlciAhZGVmYXVsdDtcblxuJG5hdmJhci1uYXYtbGluay1wYWRkaW5nLXg6ICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG5cbiRuYXZiYXItYnJhbmQtZm9udC1zaXplOiAgICAgICAgICAgICRmb250LXNpemUtbGcgIWRlZmF1bHQ7XG4vLyBDb21wdXRlIHRoZSBuYXZiYXItYnJhbmQgcGFkZGluZy15IHNvIHRoZSBuYXZiYXItYnJhbmQgd2lsbCBoYXZlIHRoZSBzYW1lIGhlaWdodCBhcyBuYXZiYXItdGV4dCBhbmQgbmF2LWxpbmtcbiRuYXYtbGluay1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqICRsaW5lLWhlaWdodC1iYXNlICsgJG5hdi1saW5rLXBhZGRpbmcteSAqIDIgIWRlZmF1bHQ7XG4kbmF2YmFyLWJyYW5kLWhlaWdodDogICAgICAgICAgICAgICAkbmF2YmFyLWJyYW5kLWZvbnQtc2l6ZSAqICRsaW5lLWhlaWdodC1iYXNlICFkZWZhdWx0O1xuJG5hdmJhci1icmFuZC1wYWRkaW5nLXk6ICAgICAgICAgICAgKCRuYXYtbGluay1oZWlnaHQgLSAkbmF2YmFyLWJyYW5kLWhlaWdodCkgLyAyICFkZWZhdWx0O1xuXG4kbmF2YmFyLXRvZ2dsZXItcGFkZGluZy15OiAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kbmF2YmFyLXRvZ2dsZXItcGFkZGluZy14OiAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kbmF2YmFyLXRvZ2dsZXItZm9udC1zaXplOiAgICAgICAgICAkZm9udC1zaXplLWxnICFkZWZhdWx0O1xuJG5hdmJhci10b2dnbGVyLWJvcmRlci1yYWRpdXM6ICAgICAgJGJ0bi1ib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuXG4kbmF2YmFyLW5hdi1zY3JvbGwtbWF4LWhlaWdodDogICAgICA3NXZoICFkZWZhdWx0O1xuXG4kbmF2YmFyLWRhcmstY29sb3I6ICAgICAgICAgICAgICAgICByZ2JhKCR3aGl0ZSwgLjUpICFkZWZhdWx0O1xuJG5hdmJhci1kYXJrLWhvdmVyLWNvbG9yOiAgICAgICAgICAgcmdiYSgkd2hpdGUsIC43NSkgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstYWN0aXZlLWNvbG9yOiAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstZGlzYWJsZWQtY29sb3I6ICAgICAgICByZ2JhKCR3aGl0ZSwgLjI1KSAhZGVmYXVsdDtcbiRuYXZiYXItZGFyay10b2dnbGVyLWljb24tYmc6ICAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzMwJyBoZWlnaHQ9JzMwJyB2aWV3Qm94PScwIDAgMzAgMzAnPjxwYXRoIHN0cm9rZT0nI3skbmF2YmFyLWRhcmstY29sb3J9JyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1taXRlcmxpbWl0PScxMCcgc3Ryb2tlLXdpZHRoPScyJyBkPSdNNCA3aDIyTTQgMTVoMjJNNCAyM2gyMicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcbiRuYXZiYXItZGFyay10b2dnbGVyLWJvcmRlci1jb2xvcjogIHJnYmEoJHdoaXRlLCAuMSkgIWRlZmF1bHQ7XG5cbiRuYXZiYXItbGlnaHQtY29sb3I6ICAgICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuNSkgIWRlZmF1bHQ7XG4kbmF2YmFyLWxpZ2h0LWhvdmVyLWNvbG9yOiAgICAgICAgICByZ2JhKCRibGFjaywgLjcpICFkZWZhdWx0O1xuJG5hdmJhci1saWdodC1hY3RpdmUtY29sb3I6ICAgICAgICAgcmdiYSgkYmxhY2ssIC45KSAhZGVmYXVsdDtcbiRuYXZiYXItbGlnaHQtZGlzYWJsZWQtY29sb3I6ICAgICAgIHJnYmEoJGJsYWNrLCAuMykgIWRlZmF1bHQ7XG4kbmF2YmFyLWxpZ2h0LXRvZ2dsZXItaWNvbi1iZzogICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSczMCcgaGVpZ2h0PSczMCcgdmlld0JveD0nMCAwIDMwIDMwJz48cGF0aCBzdHJva2U9JyN7JG5hdmJhci1saWdodC1jb2xvcn0nIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLW1pdGVybGltaXQ9JzEwJyBzdHJva2Utd2lkdGg9JzInIGQ9J000IDdoMjJNNCAxNWgyMk00IDIzaDIyJy8+PC9zdmc+XCIpICFkZWZhdWx0O1xuJG5hdmJhci1saWdodC10b2dnbGVyLWJvcmRlci1jb2xvcjogcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcblxuJG5hdmJhci1saWdodC1icmFuZC1jb2xvcjogICAgICAgICAgICAgICAgJG5hdmJhci1saWdodC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kbmF2YmFyLWxpZ2h0LWJyYW5kLWhvdmVyLWNvbG9yOiAgICAgICAgICAkbmF2YmFyLWxpZ2h0LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRuYXZiYXItZGFyay1icmFuZC1jb2xvcjogICAgICAgICAgICAgICAgICRuYXZiYXItZGFyay1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstYnJhbmQtaG92ZXItY29sb3I6ICAgICAgICAgICAkbmF2YmFyLWRhcmstYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuXG5cbi8vIERyb3Bkb3duc1xuLy9cbi8vIERyb3Bkb3duIG1lbnUgY29udGFpbmVyIGFuZCBjb250ZW50cy5cblxuJGRyb3Bkb3duLW1pbi13aWR0aDogICAgICAgICAgICAgICAgMTByZW0gIWRlZmF1bHQ7XG4kZHJvcGRvd24tcGFkZGluZy14OiAgICAgICAgICAgICAgICAwICFkZWZhdWx0O1xuJGRyb3Bkb3duLXBhZGRpbmcteTogICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kZHJvcGRvd24tc3BhY2VyOiAgICAgICAgICAgICAgICAgICAuMTI1cmVtICFkZWZhdWx0O1xuJGRyb3Bkb3duLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICFkZWZhdWx0O1xuJGRyb3Bkb3duLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgJGJvZHktY29sb3IgIWRlZmF1bHQ7XG4kZHJvcGRvd24tYmc6ICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kZHJvcGRvd24tYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjE1KSAhZGVmYXVsdDtcbiRkcm9wZG93bi1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGRyb3Bkb3duLWJvcmRlci13aWR0aDogICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRkcm9wZG93bi1pbm5lci1ib3JkZXItcmFkaXVzOiAgICAgIHN1YnRyYWN0KCRkcm9wZG93bi1ib3JkZXItcmFkaXVzLCAkZHJvcGRvd24tYm9yZGVyLXdpZHRoKSAhZGVmYXVsdDtcbiRkcm9wZG93bi1kaXZpZGVyLWJnOiAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRkcm9wZG93bi1kaXZpZGVyLW1hcmdpbi15OiAgICAgICAgICRuYXYtZGl2aWRlci1tYXJnaW4teSAhZGVmYXVsdDtcbiRkcm9wZG93bi1ib3gtc2hhZG93OiAgICAgICAgICAgICAgIDAgLjVyZW0gMXJlbSByZ2JhKCRibGFjaywgLjE3NSkgIWRlZmF1bHQ7XG5cbiRkcm9wZG93bi1saW5rLWNvbG9yOiAgICAgICAgICAgICAgICRncmF5LTkwMCAhZGVmYXVsdDtcbiRkcm9wZG93bi1saW5rLWhvdmVyLWNvbG9yOiAgICAgICAgIGRhcmtlbigkZ3JheS05MDAsIDUlKSAhZGVmYXVsdDtcbiRkcm9wZG93bi1saW5rLWhvdmVyLWJnOiAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcblxuJGRyb3Bkb3duLWxpbmstYWN0aXZlLWNvbG9yOiAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kZHJvcGRvd24tbGluay1hY3RpdmUtYmc6ICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcblxuJGRyb3Bkb3duLWxpbmstZGlzYWJsZWQtY29sb3I6ICAgICAgJGdyYXktNTAwICFkZWZhdWx0O1xuXG4kZHJvcGRvd24taXRlbS1wYWRkaW5nLXk6ICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kZHJvcGRvd24taXRlbS1wYWRkaW5nLXg6ICAgICAgICAgICAxLjVyZW0gIWRlZmF1bHQ7XG5cbiRkcm9wZG93bi1oZWFkZXItY29sb3I6ICAgICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRkcm9wZG93bi1oZWFkZXItcGFkZGluZzogICAgICAgICAgICRkcm9wZG93bi1wYWRkaW5nLXkgJGRyb3Bkb3duLWl0ZW0tcGFkZGluZy14ICFkZWZhdWx0O1xuXG5cbi8vIFBhZ2luYXRpb25cblxuJHBhZ2luYXRpb24tcGFkZGluZy15OiAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1wYWRkaW5nLXg6ICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1wYWRkaW5nLXktc206ICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1wYWRkaW5nLXgtc206ICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLXBhZGRpbmcteS1sZzogICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLXBhZGRpbmcteC1sZzogICAgICAgICAgIDEuNXJlbSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWxpbmUtaGVpZ2h0OiAgICAgICAgICAgIDEuMjUgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWNvbG9yOiAgICAgICAgICAgICAgICAgICRsaW5rLWNvbG9yICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYmc6ICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYm9yZGVyLXdpZHRoOiAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWJvcmRlci1jb2xvcjogICAgICAgICAgICRncmF5LTMwMCAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24tZm9jdXMtYm94LXNoYWRvdzogICAgICAgJGlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93ICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tZm9jdXMtb3V0bGluZTogICAgICAgICAgMCAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24taG92ZXItY29sb3I6ICAgICAgICAgICAgJGxpbmstaG92ZXItY29sb3IgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ob3Zlci1iZzogICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ob3Zlci1ib3JkZXItY29sb3I6ICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWFjdGl2ZS1jb2xvcjogICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYWN0aXZlLWJnOiAgICAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1hY3RpdmUtYm9yZGVyLWNvbG9yOiAgICAkcGFnaW5hdGlvbi1hY3RpdmUtYmcgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWJnOiAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWJvcmRlci1jb2xvcjogICRncmF5LTMwMCAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24tYm9yZGVyLXJhZGl1cy1zbTogICAgICAgJGJvcmRlci1yYWRpdXMtc20gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ib3JkZXItcmFkaXVzLWxnOiAgICAgICAkYm9yZGVyLXJhZGl1cy1sZyAhZGVmYXVsdDtcblxuLy8gSnVtYm90cm9uXG5cbiRqdW1ib3Ryb24tcGFkZGluZzogICAgICAgICAgICAgICAgIDJyZW0gIWRlZmF1bHQ7XG4kanVtYm90cm9uLWNvbG9yOiAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJGp1bWJvdHJvbi1iZzogICAgICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuXG5cbi8vIENhcmRzXG5cbiRjYXJkLXNwYWNlci15OiAgICAgICAgICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRjYXJkLXNwYWNlci14OiAgICAgICAgICAgICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XG4kY2FyZC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJGNhcmQtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kY2FyZC1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjEyNSkgIWRlZmF1bHQ7XG4kY2FyZC1pbm5lci1ib3JkZXItcmFkaXVzOiAgICAgICAgICBzdWJ0cmFjdCgkY2FyZC1ib3JkZXItcmFkaXVzLCAkY2FyZC1ib3JkZXItd2lkdGgpICFkZWZhdWx0O1xuJGNhcmQtY2FwLWJnOiAgICAgICAgICAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4wMykgIWRlZmF1bHQ7XG4kY2FyZC1jYXAtY29sb3I6ICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJGNhcmQtaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRjYXJkLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kY2FyZC1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG5cbiRjYXJkLWltZy1vdmVybGF5LXBhZGRpbmc6ICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XG5cbiRjYXJkLWdyb3VwLW1hcmdpbjogICAgICAgICAgICAgICAgICRncmlkLWd1dHRlci13aWR0aCAvIDIgIWRlZmF1bHQ7XG4kY2FyZC1kZWNrLW1hcmdpbjogICAgICAgICAgICAgICAgICAkY2FyZC1ncm91cC1tYXJnaW4gIWRlZmF1bHQ7XG5cbiRjYXJkLWNvbHVtbnMtY291bnQ6ICAgICAgICAgICAgICAgIDMgIWRlZmF1bHQ7XG4kY2FyZC1jb2x1bW5zLWdhcDogICAgICAgICAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xuJGNhcmQtY29sdW1ucy1tYXJnaW46ICAgICAgICAgICAgICAgJGNhcmQtc3BhY2VyLXkgIWRlZmF1bHQ7XG5cblxuLy8gVG9vbHRpcHNcblxuJHRvb2x0aXAtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcbiR0b29sdGlwLW1heC13aWR0aDogICAgICAgICAgICAgICAgIDIwMHB4ICFkZWZhdWx0O1xuJHRvb2x0aXAtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHRvb2x0aXAtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgJGJsYWNrICFkZWZhdWx0O1xuJHRvb2x0aXAtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kdG9vbHRpcC1vcGFjaXR5OiAgICAgICAgICAgICAgICAgICAuOSAhZGVmYXVsdDtcbiR0b29sdGlwLXBhZGRpbmcteTogICAgICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcbiR0b29sdGlwLXBhZGRpbmcteDogICAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJHRvb2x0aXAtbWFyZ2luOiAgICAgICAgICAgICAgICAgICAgMCAhZGVmYXVsdDtcblxuJHRvb2x0aXAtYXJyb3ctd2lkdGg6ICAgICAgICAgICAgICAgLjhyZW0gIWRlZmF1bHQ7XG4kdG9vbHRpcC1hcnJvdy1oZWlnaHQ6ICAgICAgICAgICAgICAuNHJlbSAhZGVmYXVsdDtcbiR0b29sdGlwLWFycm93LWNvbG9yOiAgICAgICAgICAgICAgICR0b29sdGlwLWJnICFkZWZhdWx0O1xuXG4vLyBGb3JtIHRvb2x0aXBzIG11c3QgY29tZSBhZnRlciByZWd1bGFyIHRvb2x0aXBzXG4kZm9ybS1mZWVkYmFjay10b29sdGlwLXBhZGRpbmcteTogICAgICR0b29sdGlwLXBhZGRpbmcteSAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtcGFkZGluZy14OiAgICAgJHRvb2x0aXAtcGFkZGluZy14ICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1mb250LXNpemU6ICAgICAkdG9vbHRpcC1mb250LXNpemUgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay10b29sdGlwLWxpbmUtaGVpZ2h0OiAgICRsaW5lLWhlaWdodC1iYXNlICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1vcGFjaXR5OiAgICAgICAkdG9vbHRpcC1vcGFjaXR5ICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1ib3JkZXItcmFkaXVzOiAkdG9vbHRpcC1ib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuXG5cbi8vIFBvcG92ZXJzXG5cbiRwb3BvdmVyLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICRmb250LXNpemUtc20gIWRlZmF1bHQ7XG4kcG9wb3Zlci1iZzogICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kcG9wb3Zlci1tYXgtd2lkdGg6ICAgICAgICAgICAgICAgICAyNzZweCAhZGVmYXVsdDtcbiRwb3BvdmVyLWJvcmRlci13aWR0aDogICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjIpICFkZWZhdWx0O1xuJHBvcG92ZXItYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMtbGcgIWRlZmF1bHQ7XG4kcG9wb3Zlci1pbm5lci1ib3JkZXItcmFkaXVzOiAgICAgICBzdWJ0cmFjdCgkcG9wb3Zlci1ib3JkZXItcmFkaXVzLCAkcG9wb3Zlci1ib3JkZXItd2lkdGgpICFkZWZhdWx0O1xuJHBvcG92ZXItYm94LXNoYWRvdzogICAgICAgICAgICAgICAgMCAuMjVyZW0gLjVyZW0gcmdiYSgkYmxhY2ssIC4yKSAhZGVmYXVsdDtcblxuJHBvcG92ZXItaGVhZGVyLWJnOiAgICAgICAgICAgICAgICAgZGFya2VuKCRwb3BvdmVyLWJnLCAzJSkgIWRlZmF1bHQ7XG4kcG9wb3Zlci1oZWFkZXItY29sb3I6ICAgICAgICAgICAgICAkaGVhZGluZ3MtY29sb3IgIWRlZmF1bHQ7XG4kcG9wb3Zlci1oZWFkZXItcGFkZGluZy15OiAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXg6ICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcblxuJHBvcG92ZXItYm9keS1jb2xvcjogICAgICAgICAgICAgICAgJGJvZHktY29sb3IgIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib2R5LXBhZGRpbmcteTogICAgICAgICAgICAkcG9wb3Zlci1oZWFkZXItcGFkZGluZy15ICFkZWZhdWx0O1xuJHBvcG92ZXItYm9keS1wYWRkaW5nLXg6ICAgICAgICAgICAgJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteCAhZGVmYXVsdDtcblxuJHBvcG92ZXItYXJyb3ctd2lkdGg6ICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRwb3BvdmVyLWFycm93LWhlaWdodDogICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJHBvcG92ZXItYXJyb3ctY29sb3I6ICAgICAgICAgICAgICAgJHBvcG92ZXItYmcgIWRlZmF1bHQ7XG5cbiRwb3BvdmVyLWFycm93LW91dGVyLWNvbG9yOiAgICAgICAgIGZhZGUtaW4oJHBvcG92ZXItYm9yZGVyLWNvbG9yLCAuMDUpICFkZWZhdWx0O1xuXG5cbi8vIFRvYXN0c1xuXG4kdG9hc3QtbWF4LXdpZHRoOiAgICAgICAgICAgICAgICAgICAzNTBweCAhZGVmYXVsdDtcbiR0b2FzdC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiR0b2FzdC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcbiR0b2FzdC1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgIC44NzVyZW0gIWRlZmF1bHQ7XG4kdG9hc3QtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJHRvYXN0LWJhY2tncm91bmQtY29sb3I6ICAgICAgICAgICAgcmdiYSgkd2hpdGUsIC44NSkgIWRlZmF1bHQ7XG4kdG9hc3QtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgICAxcHggIWRlZmF1bHQ7XG4kdG9hc3QtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICByZ2JhKDAsIDAsIDAsIC4xKSAhZGVmYXVsdDtcbiR0b2FzdC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcbiR0b2FzdC1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICAgIDAgLjI1cmVtIC43NXJlbSByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xuXG4kdG9hc3QtaGVhZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kdG9hc3QtaGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICAgICByZ2JhKCR3aGl0ZSwgLjg1KSAhZGVmYXVsdDtcbiR0b2FzdC1oZWFkZXItYm9yZGVyLWNvbG9yOiAgICAgICAgIHJnYmEoMCwgMCwgMCwgLjA1KSAhZGVmYXVsdDtcblxuXG4vLyBCYWRnZXNcblxuJGJhZGdlLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgNzUlICFkZWZhdWx0O1xuJGJhZGdlLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LWJvbGQgIWRlZmF1bHQ7XG4kYmFkZ2UtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICAuMjVlbSAhZGVmYXVsdDtcbiRiYWRnZS1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgIC40ZW0gIWRlZmF1bHQ7XG4kYmFkZ2UtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcblxuJGJhZGdlLXRyYW5zaXRpb246ICAgICAgICAgICAgICAgICAgJGJ0bi10cmFuc2l0aW9uICFkZWZhdWx0O1xuJGJhZGdlLWZvY3VzLXdpZHRoOiAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1mb2N1cy13aWR0aCAhZGVmYXVsdDtcblxuJGJhZGdlLXBpbGwtcGFkZGluZy14OiAgICAgICAgICAgICAgLjZlbSAhZGVmYXVsdDtcbi8vIFVzZSBhIGhpZ2hlciB0aGFuIG5vcm1hbCB2YWx1ZSB0byBlbnN1cmUgY29tcGxldGVseSByb3VuZGVkIGVkZ2VzIHdoZW5cbi8vIGN1c3RvbWl6aW5nIHBhZGRpbmcgb3IgZm9udC1zaXplIG9uIGxhYmVscy5cbiRiYWRnZS1waWxsLWJvcmRlci1yYWRpdXM6ICAgICAgICAgIDEwcmVtICFkZWZhdWx0O1xuXG5cbi8vIE1vZGFsc1xuXG4vLyBQYWRkaW5nIGFwcGxpZWQgdG8gdGhlIG1vZGFsIGJvZHlcbiRtb2RhbC1pbm5lci1wYWRkaW5nOiAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG5cbi8vIE1hcmdpbiBiZXR3ZWVuIGVsZW1lbnRzIGluIGZvb3RlciwgbXVzdCBiZSBsb3dlciB0aGFuIG9yIGVxdWFsIHRvIDIgKiAkbW9kYWwtaW5uZXItcGFkZGluZ1xuJG1vZGFsLWZvb3Rlci1tYXJnaW4tYmV0d2VlbjogICAgICAgLjVyZW0gIWRlZmF1bHQ7XG5cbiRtb2RhbC1kaWFsb2ctbWFyZ2luOiAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJG1vZGFsLWRpYWxvZy1tYXJnaW4teS1zbS11cDogICAgICAgMS43NXJlbSAhZGVmYXVsdDtcblxuJG1vZGFsLXRpdGxlLWxpbmUtaGVpZ2h0OiAgICAgICAgICAgJGxpbmUtaGVpZ2h0LWJhc2UgIWRlZmF1bHQ7XG5cbiRtb2RhbC1jb250ZW50LWNvbG9yOiAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1iZzogICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1ib3JkZXItY29sb3I6ICAgICAgICByZ2JhKCRibGFjaywgLjIpICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXdpZHRoOiAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRtb2RhbC1jb250ZW50LWJvcmRlci1yYWRpdXM6ICAgICAgICRib3JkZXItcmFkaXVzLWxnICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtaW5uZXItYm9yZGVyLXJhZGl1czogc3VidHJhY3QoJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXJhZGl1cywgJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXdpZHRoKSAhZGVmYXVsdDtcbiRtb2RhbC1jb250ZW50LWJveC1zaGFkb3cteHM6ICAgICAgIDAgLjI1cmVtIC41cmVtIHJnYmEoJGJsYWNrLCAuNSkgIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1ib3gtc2hhZG93LXNtLXVwOiAgICAwIC41cmVtIDFyZW0gcmdiYSgkYmxhY2ssIC41KSAhZGVmYXVsdDtcblxuJG1vZGFsLWJhY2tkcm9wLWJnOiAgICAgICAgICAgICAgICAgJGJsYWNrICFkZWZhdWx0O1xuJG1vZGFsLWJhY2tkcm9wLW9wYWNpdHk6ICAgICAgICAgICAgLjUgIWRlZmF1bHQ7XG4kbW9kYWwtaGVhZGVyLWJvcmRlci1jb2xvcjogICAgICAgICAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJG1vZGFsLWZvb3Rlci1ib3JkZXItY29sb3I6ICAgICAgICAgJG1vZGFsLWhlYWRlci1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kbW9kYWwtaGVhZGVyLWJvcmRlci13aWR0aDogICAgICAgICAkbW9kYWwtY29udGVudC1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kbW9kYWwtZm9vdGVyLWJvcmRlci13aWR0aDogICAgICAgICAkbW9kYWwtaGVhZGVyLWJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRtb2RhbC1oZWFkZXItcGFkZGluZy15OiAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kbW9kYWwtaGVhZGVyLXBhZGRpbmcteDogICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJG1vZGFsLWhlYWRlci1wYWRkaW5nOiAgICAgICAgICAgICAgJG1vZGFsLWhlYWRlci1wYWRkaW5nLXkgJG1vZGFsLWhlYWRlci1wYWRkaW5nLXggIWRlZmF1bHQ7IC8vIEtlZXAgdGhpcyBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcblxuJG1vZGFsLXhsOiAgICAgICAgICAgICAgICAgICAgICAgICAgMTE0MHB4ICFkZWZhdWx0O1xuJG1vZGFsLWxnOiAgICAgICAgICAgICAgICAgICAgICAgICAgODAwcHggIWRlZmF1bHQ7XG4kbW9kYWwtbWQ6ICAgICAgICAgICAgICAgICAgICAgICAgICA1MDBweCAhZGVmYXVsdDtcbiRtb2RhbC1zbTogICAgICAgICAgICAgICAgICAgICAgICAgIDMwMHB4ICFkZWZhdWx0O1xuXG4kbW9kYWwtZmFkZS10cmFuc2Zvcm06ICAgICAgICAgICAgICB0cmFuc2xhdGUoMCwgLTUwcHgpICFkZWZhdWx0O1xuJG1vZGFsLXNob3ctdHJhbnNmb3JtOiAgICAgICAgICAgICAgbm9uZSAhZGVmYXVsdDtcbiRtb2RhbC10cmFuc2l0aW9uOiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybSAuM3MgZWFzZS1vdXQgIWRlZmF1bHQ7XG4kbW9kYWwtc2NhbGUtdHJhbnNmb3JtOiAgICAgICAgICAgICBzY2FsZSgxLjAyKSAhZGVmYXVsdDtcblxuXG4vLyBBbGVydHNcbi8vXG4vLyBEZWZpbmUgYWxlcnQgY29sb3JzLCBib3JkZXIgcmFkaXVzLCBhbmQgcGFkZGluZy5cblxuJGFsZXJ0LXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJGFsZXJ0LXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcbiRhbGVydC1tYXJnaW4tYm90dG9tOiAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kYWxlcnQtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRhbGVydC1saW5rLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICRmb250LXdlaWdodC1ib2xkICFkZWZhdWx0O1xuJGFsZXJ0LWJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcblxuJGFsZXJ0LWJnLWxldmVsOiAgICAgICAgICAgICAgICAgICAgLTEwICFkZWZhdWx0O1xuJGFsZXJ0LWJvcmRlci1sZXZlbDogICAgICAgICAgICAgICAgLTkgIWRlZmF1bHQ7XG4kYWxlcnQtY29sb3ItbGV2ZWw6ICAgICAgICAgICAgICAgICA2ICFkZWZhdWx0O1xuXG5cbi8vIFByb2dyZXNzIGJhcnNcblxuJHByb2dyZXNzLWhlaWdodDogICAgICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIC43NSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1iZzogICAgICAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRwcm9ncmVzcy1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJHByb2dyZXNzLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgaW5zZXQgMCAuMXJlbSAuMXJlbSByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xuJHByb2dyZXNzLWJhci1jb2xvcjogICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHByb2dyZXNzLWJhci1iZzogICAgICAgICAgICAgICAgICAgdGhlbWUtY29sb3IoXCJwcmltYXJ5XCIpICFkZWZhdWx0O1xuJHByb2dyZXNzLWJhci1hbmltYXRpb24tdGltaW5nOiAgICAgMXMgbGluZWFyIGluZmluaXRlICFkZWZhdWx0O1xuJHByb2dyZXNzLWJhci10cmFuc2l0aW9uOiAgICAgICAgICAgd2lkdGggLjZzIGVhc2UgIWRlZmF1bHQ7XG5cblxuLy8gTGlzdCBncm91cFxuXG4kbGlzdC1ncm91cC1jb2xvcjogICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYmc6ICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4xMjUpICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuXG4kbGlzdC1ncm91cC1pdGVtLXBhZGRpbmcteTogICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1pdGVtLXBhZGRpbmcteDogICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xuXG4kbGlzdC1ncm91cC1ob3Zlci1iZzogICAgICAgICAgICAgICAkZ3JheS0xMDAgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1hY3RpdmUtY29sb3I6ICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGl2ZS1iZzogICAgICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aXZlLWJvcmRlci1jb2xvcjogICAgJGxpc3QtZ3JvdXAtYWN0aXZlLWJnICFkZWZhdWx0O1xuXG4kbGlzdC1ncm91cC1kaXNhYmxlZC1jb2xvcjogICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1kaXNhYmxlZC1iZzogICAgICAgICAgICAkbGlzdC1ncm91cC1iZyAhZGVmYXVsdDtcblxuJGxpc3QtZ3JvdXAtYWN0aW9uLWNvbG9yOiAgICAgICAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aW9uLWhvdmVyLWNvbG9yOiAgICAgJGxpc3QtZ3JvdXAtYWN0aW9uLWNvbG9yICFkZWZhdWx0O1xuXG4kbGlzdC1ncm91cC1hY3Rpb24tYWN0aXZlLWNvbG9yOiAgICAkYm9keS1jb2xvciAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGlvbi1hY3RpdmUtYmc6ICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcblxuXG4vLyBJbWFnZSB0aHVtYm5haWxzXG5cbiR0aHVtYm5haWwtcGFkZGluZzogICAgICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcbiR0aHVtYm5haWwtYmc6ICAgICAgICAgICAgICAgICAgICAgICRib2R5LWJnICFkZWZhdWx0O1xuJHRodW1ibmFpbC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiR0aHVtYm5haWwtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICRncmF5LTMwMCAhZGVmYXVsdDtcbiR0aHVtYm5haWwtYm9yZGVyLXJhZGl1czogICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJHRodW1ibmFpbC1ib3gtc2hhZG93OiAgICAgICAgICAgICAgMCAxcHggMnB4IHJnYmEoJGJsYWNrLCAuMDc1KSAhZGVmYXVsdDtcblxuXG4vLyBGaWd1cmVzXG5cbiRmaWd1cmUtY2FwdGlvbi1mb250LXNpemU6ICAgICAgICAgIDkwJSAhZGVmYXVsdDtcbiRmaWd1cmUtY2FwdGlvbi1jb2xvcjogICAgICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcblxuXG4vLyBCcmVhZGNydW1ic1xuXG4kYnJlYWRjcnVtYi1mb250LXNpemU6ICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuXG4kYnJlYWRjcnVtYi1wYWRkaW5nLXk6ICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1wYWRkaW5nLXg6ICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItaXRlbS1wYWRkaW5nOiAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG5cbiRicmVhZGNydW1iLW1hcmdpbi1ib3R0b206ICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG5cbiRicmVhZGNydW1iLWJnOiAgICAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWRpdmlkZXItY29sb3I6ICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWFjdGl2ZS1jb2xvcjogICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWRpdmlkZXI6ICAgICAgICAgICAgICAgIHF1b3RlKFwiL1wiKSAhZGVmYXVsdDtcblxuJGJyZWFkY3J1bWItYm9yZGVyLXJhZGl1czogICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG5cblxuLy8gQ2Fyb3VzZWxcblxuJGNhcm91c2VsLWNvbnRyb2wtY29sb3I6ICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1jb250cm9sLXdpZHRoOiAgICAgICAgICAgICAxNSUgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtY29udHJvbC1vcGFjaXR5OiAgICAgICAgICAgLjUgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtY29udHJvbC1ob3Zlci1vcGFjaXR5OiAgICAgLjkgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtY29udHJvbC10cmFuc2l0aW9uOiAgICAgICAgb3BhY2l0eSAuMTVzIGVhc2UgIWRlZmF1bHQ7XG5cbiRjYXJvdXNlbC1pbmRpY2F0b3Itd2lkdGg6ICAgICAgICAgICAzMHB4ICFkZWZhdWx0O1xuJGNhcm91c2VsLWluZGljYXRvci1oZWlnaHQ6ICAgICAgICAgIDNweCAhZGVmYXVsdDtcbiRjYXJvdXNlbC1pbmRpY2F0b3ItaGl0LWFyZWEtaGVpZ2h0OiAxMHB4ICFkZWZhdWx0O1xuJGNhcm91c2VsLWluZGljYXRvci1zcGFjZXI6ICAgICAgICAgIDNweCAhZGVmYXVsdDtcbiRjYXJvdXNlbC1pbmRpY2F0b3ItYWN0aXZlLWJnOiAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtaW5kaWNhdG9yLXRyYW5zaXRpb246ICAgICAgb3BhY2l0eSAuNnMgZWFzZSAhZGVmYXVsdDtcblxuJGNhcm91c2VsLWNhcHRpb24td2lkdGg6ICAgICAgICAgICAgIDcwJSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1jYXB0aW9uLWNvbG9yOiAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG5cbiRjYXJvdXNlbC1jb250cm9sLWljb24td2lkdGg6ICAgICAgICAyMHB4ICFkZWZhdWx0O1xuXG4kY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb24tYmc6ICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBmaWxsPScjeyRjYXJvdXNlbC1jb250cm9sLWNvbG9yfScgd2lkdGg9JzgnIGhlaWdodD0nOCcgdmlld0JveD0nMCAwIDggOCc+PHBhdGggZD0nTTUuMjUgMGwtNCA0IDQgNCAxLjUtMS41TDQuMjUgNGwyLjUtMi41TDUuMjUgMHonLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb24tYmc6ICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBmaWxsPScjeyRjYXJvdXNlbC1jb250cm9sLWNvbG9yfScgd2lkdGg9JzgnIGhlaWdodD0nOCcgdmlld0JveD0nMCAwIDggOCc+PHBhdGggZD0nTTIuNzUgMGwtMS41IDEuNUwzLjc1IDRsLTIuNSAyLjVMMi43NSA4bDQtNC00LTR6Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xuXG4kY2Fyb3VzZWwtdHJhbnNpdGlvbi1kdXJhdGlvbjogICAgICAgLjZzICFkZWZhdWx0O1xuJGNhcm91c2VsLXRyYW5zaXRpb246ICAgICAgICAgICAgICAgIHRyYW5zZm9ybSAkY2Fyb3VzZWwtdHJhbnNpdGlvbi1kdXJhdGlvbiBlYXNlLWluLW91dCAhZGVmYXVsdDsgLy8gRGVmaW5lIHRyYW5zZm9ybSB0cmFuc2l0aW9uIGZpcnN0IGlmIHVzaW5nIG11bHRpcGxlIHRyYW5zaXRpb25zIChlLmcuLCBgdHJhbnNmb3JtIDJzIGVhc2UsIG9wYWNpdHkgLjVzIGVhc2Utb3V0YClcblxuXG4vLyBTcGlubmVyc1xuXG4kc3Bpbm5lci13aWR0aDogICAgICAgICAycmVtICFkZWZhdWx0O1xuJHNwaW5uZXItaGVpZ2h0OiAgICAgICAgJHNwaW5uZXItd2lkdGggIWRlZmF1bHQ7XG4kc3Bpbm5lci1ib3JkZXItd2lkdGg6ICAuMjVlbSAhZGVmYXVsdDtcblxuJHNwaW5uZXItd2lkdGgtc206ICAgICAgICAxcmVtICFkZWZhdWx0O1xuJHNwaW5uZXItaGVpZ2h0LXNtOiAgICAgICAkc3Bpbm5lci13aWR0aC1zbSAhZGVmYXVsdDtcbiRzcGlubmVyLWJvcmRlci13aWR0aC1zbTogLjJlbSAhZGVmYXVsdDtcblxuXG4vLyBDbG9zZVxuXG4kY2xvc2UtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjUgIWRlZmF1bHQ7XG4kY2xvc2UtZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICAgICAkZm9udC13ZWlnaHQtYm9sZCAhZGVmYXVsdDtcbiRjbG9zZS1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICRibGFjayAhZGVmYXVsdDtcbiRjbG9zZS10ZXh0LXNoYWRvdzogICAgICAgICAgICAgICAgIDAgMXB4IDAgJHdoaXRlICFkZWZhdWx0O1xuXG5cbi8vIENvZGVcblxuJGNvZGUtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAgODcuNSUgIWRlZmF1bHQ7XG4kY29kZS1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAkcGluayAhZGVmYXVsdDtcblxuJGtiZC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgICAgLjJyZW0gIWRlZmF1bHQ7XG4ka2JkLXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgICAuNHJlbSAhZGVmYXVsdDtcbiRrYmQtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAgICRjb2RlLWZvbnQtc2l6ZSAhZGVmYXVsdDtcbiRrYmQtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRrYmQtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICRncmF5LTkwMCAhZGVmYXVsdDtcblxuJHByZS1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktOTAwICFkZWZhdWx0O1xuJHByZS1zY3JvbGxhYmxlLW1heC1oZWlnaHQ6ICAgICAgICAgMzQwcHggIWRlZmF1bHQ7XG5cblxuLy8gVXRpbGl0aWVzXG5cbiRkaXNwbGF5czogbm9uZSwgaW5saW5lLCBpbmxpbmUtYmxvY2ssIGJsb2NrLCB0YWJsZSwgdGFibGUtcm93LCB0YWJsZS1jZWxsLCBmbGV4LCBpbmxpbmUtZmxleCAhZGVmYXVsdDtcbiRvdmVyZmxvd3M6IGF1dG8sIGhpZGRlbiAhZGVmYXVsdDtcbiRwb3NpdGlvbnM6IHN0YXRpYywgcmVsYXRpdmUsIGFic29sdXRlLCBmaXhlZCwgc3RpY2t5ICFkZWZhdWx0O1xuJHVzZXItc2VsZWN0czogYWxsLCBhdXRvLCBub25lICFkZWZhdWx0O1xuXG5cbi8vIFByaW50aW5nXG5cbiRwcmludC1wYWdlLXNpemU6ICAgICAgICAgICAgICAgICAgIGEzICFkZWZhdWx0O1xuJHByaW50LWJvZHktbWluLXdpZHRoOiAgICAgICAgICAgICAgbWFwLWdldCgkZ3JpZC1icmVha3BvaW50cywgXCJsZ1wiKSAhZGVmYXVsdDtcbiJdfQ== */"] });


/***/ }),

/***/ "KdTE":
/*!************************************************************!*\
  !*** ./src/main/webapp/app/layouts/main/main.component.ts ***!
  \************************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "Wgwc");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_core_auth_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/core/auth/account.service */ "TXJZ");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _profiles_page_ribbon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../profiles/page-ribbon.component */ "8Dfa");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../footer/footer.component */ "8H8u");









class MainComponent {
    constructor(accountService, titleService, router, translateService, rootRenderer) {
        this.accountService = accountService;
        this.titleService = titleService;
        this.router = router;
        this.translateService = translateService;
        this.renderer = rootRenderer.createRenderer(document.querySelector('html'), null);
    }
    ngOnInit() {
        // try to log in automatically
        this.accountService.identity().subscribe();
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"]) {
                this.updateTitle();
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationError"] && event.error.status === 404) {
                this.router.navigate(['/404']);
            }
        });
        this.translateService.onLangChange.subscribe((langChangeEvent) => {
            this.updateTitle();
            dayjs__WEBPACK_IMPORTED_MODULE_1__["locale"](langChangeEvent.lang);
            this.renderer.setAttribute(document.querySelector('html'), 'lang', langChangeEvent.lang);
        });
    }
    getPageTitle(routeSnapshot) {
        var _a;
        let title = (_a = routeSnapshot.data['pageTitle']) !== null && _a !== void 0 ? _a : '';
        if (routeSnapshot.firstChild) {
            title = this.getPageTitle(routeSnapshot.firstChild) || title;
        }
        return title;
    }
    updateTitle() {
        let pageTitle = this.getPageTitle(this.router.routerState.snapshot.root);
        if (!pageTitle) {
            pageTitle = 'global.title';
        }
        this.translateService.get(pageTitle).subscribe(title => this.titleService.setTitle(title));
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](app_core_auth_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["RendererFactory2"])); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["jhi-main"]], decls: 17, vars: 0, consts: [["name", "navbar"], [1, "container-fluid"], [1, "card", "jh-card"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "jhi-page-ribbon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "router-outlet", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "jhi-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "\n");
    } }, directives: [_profiles_page_ribbon_component__WEBPACK_IMPORTED_MODULE_6__["PageRibbonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]], encapsulation: 2 });


/***/ }),

/***/ "LIhM":
/*!***************************************************************!*\
  !*** ./src/main/webapp/app/core/auth/auth-session.service.ts ***!
  \***************************************************************/
/*! exports provided: AuthServerProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthServerProvider", function() { return AuthServerProvider; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _config_application_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/application-config.service */ "PxL+");





class AuthServerProvider {
    constructor(http, applicationConfigService) {
        this.http = http;
        this.applicationConfigService = applicationConfigService;
    }
    login(credentials) {
        const data = `username=${encodeURIComponent(credentials.username)}` +
            `&password=${encodeURIComponent(credentials.password)}` +
            `&remember-me=${credentials.rememberMe ? 'true' : 'false'}` +
            '&submit=Login';
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post(this.applicationConfigService.getEndpointFor('api/authentication'), data, { headers });
    }
    logout() {
        // logout from the server
        return this.http.post(this.applicationConfigService.getEndpointFor('api/logout'), {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(() => {
            // to get a new csrf token call the api
            this.http.get(this.applicationConfigService.getEndpointFor('api/account')).subscribe();
        }));
    }
}
AuthServerProvider.ɵfac = function AuthServerProvider_Factory(t) { return new (t || AuthServerProvider)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_config_application_config_service__WEBPACK_IMPORTED_MODULE_3__["ApplicationConfigService"])); };
AuthServerProvider.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthServerProvider, factory: AuthServerProvider.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "OJfN":
/*!**********************************************************!*\
  !*** ./src/main/webapp/app/config/datepicker-adapter.ts ***!
  \**********************************************************/
/*! exports provided: NgbDateDayjsAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDateDayjsAdapter", function() { return NgbDateDayjsAdapter; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "Wgwc");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class NgbDateDayjsAdapter extends _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbDateAdapter"] {
    fromModel(date) {
        if (date && dayjs__WEBPACK_IMPORTED_MODULE_1__["isDayjs"](date) && date.isValid()) {
            return { year: date.year(), month: date.month() + 1, day: date.date() };
        }
        return null;
    }
    toModel(date) {
        return date ? dayjs__WEBPACK_IMPORTED_MODULE_1__(`${date.year}-${date.month}-${date.day}`) : null;
    }
}
NgbDateDayjsAdapter.ɵfac = function NgbDateDayjsAdapter_Factory(t) { return ɵNgbDateDayjsAdapter_BaseFactory(t || NgbDateDayjsAdapter); };
NgbDateDayjsAdapter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: NgbDateDayjsAdapter, factory: NgbDateDayjsAdapter.ɵfac });
const ɵNgbDateDayjsAdapter_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](NgbDateDayjsAdapter);


/***/ }),

/***/ "ON7I":
/*!***********************************************************!*\
  !*** ./src/main/webapp/app/shared/sort/sort.directive.ts ***!
  \***********************************************************/
/*! exports provided: SortDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortDirective", function() { return SortDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SortDirective {
    constructor() {
        this.predicateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ascendingChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    get predicate() {
        return this._predicate;
    }
    set predicate(predicate) {
        this._predicate = predicate;
        this.predicateChange.emit(predicate);
    }
    get ascending() {
        return this._ascending;
    }
    set ascending(ascending) {
        this._ascending = ascending;
        this.ascendingChange.emit(ascending);
    }
    sort(field) {
        var _a;
        if (String(this.predicate) !== '_score') {
            this.ascending = field !== this.predicate ? true : !this.ascending;
            this.predicate = field;
            this.predicateChange.emit(field);
            this.ascendingChange.emit(this.ascending);
            (_a = this.callback) === null || _a === void 0 ? void 0 : _a.call(this);
        }
    }
}
SortDirective.ɵfac = function SortDirective_Factory(t) { return new (t || SortDirective)(); };
SortDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: SortDirective, selectors: [["", "jhiSort", ""]], inputs: { predicate: "predicate", ascending: "ascending", callback: "callback" }, outputs: { predicateChange: "predicateChange", ascendingChange: "ascendingChange" } });


/***/ }),

/***/ "OYpZ":
/*!***********************************************************************!*\
  !*** ./src/main/webapp/app/shared/pagination/item-count.component.ts ***!
  \***********************************************************************/
/*! exports provided: ItemCountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemCountComponent", function() { return ItemCountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _language_translate_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../language/translate.directive */ "YHTv");


const _c0 = function (a0, a1, a2) { return { first: a0, second: a1, total: a2 }; };
/**
 * A component that will take care of item count statistics of a pagination.
 */
class ItemCountComponent {
    /**
     * @param params  Contains parameters for component:
     *                    page          Current page number
     *                    totalItems    Total number of items
     *                    itemsPerPage  Number of items per page
     */
    set params(params) {
        if (params.page !== undefined && params.totalItems !== undefined && params.itemsPerPage !== undefined) {
            this.first = (params.page - 1) * params.itemsPerPage === 0 ? 1 : (params.page - 1) * params.itemsPerPage + 1;
            this.second = params.page * params.itemsPerPage < params.totalItems ? params.page * params.itemsPerPage : params.totalItems;
        }
        else {
            this.first = undefined;
            this.second = undefined;
        }
        this.total = params.totalItems;
    }
}
ItemCountComponent.ɵfac = function ItemCountComponent_Factory(t) { return new (t || ItemCountComponent)(); };
ItemCountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ItemCountComponent, selectors: [["jhi-item-count"]], inputs: { params: "params" }, decls: 3, vars: 5, consts: [["jhiTranslate", "global.item-count", 3, "translateValues"]], template: function ItemCountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " ");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translateValues", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](1, _c0, ctx.first, ctx.second, ctx.total));
    } }, directives: [_language_translate_directive__WEBPACK_IMPORTED_MODULE_1__["TranslateDirective"]], encapsulation: 2 });


/***/ }),

/***/ "Owrn":
/*!*******************************************************************!*\
  !*** ./src/main/webapp/app/shared/alert/alert-error.component.ts ***!
  \*******************************************************************/
/*! exports provided: AlertErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertErrorComponent", function() { return AlertErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_core_util_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/core/util/alert.service */ "6PFj");
/* harmony import */ var app_core_util_event_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/core/util/event-manager.service */ "ksCG");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");






function AlertErrorComponent_div_2_ngb_alert_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closed", function AlertErrorComponent_div_2_ngb_alert_2_Template_ngb_alert_closed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const alert_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.close(alert_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "pre", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const alert_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", alert_r1.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", alert_r1.message, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function AlertErrorComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AlertErrorComponent_div_2_ngb_alert_2_Template, 4, 2, "ngb-alert", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const alert_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.setClasses(alert_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", alert_r1.message);
} }
class AlertErrorComponent {
    constructor(alertService, eventManager, translateService) {
        this.alertService = alertService;
        this.eventManager = eventManager;
        this.alerts = [];
        this.errorListener = eventManager.subscribe('placeholderApiApp.error', (response) => {
            const errorResponse = response.content;
            this.addErrorAlert(errorResponse.message, errorResponse.key, errorResponse.params);
        });
        this.httpErrorListener = eventManager.subscribe('placeholderApiApp.httpError', (response) => {
            var _a, _b;
            const httpErrorResponse = response.content;
            switch (httpErrorResponse.status) {
                // connection refused, server not reachable
                case 0:
                    this.addErrorAlert('Server not reachable', 'error.server.not.reachable');
                    break;
                case 400: {
                    const arr = httpErrorResponse.headers.keys();
                    let errorHeader = null;
                    let entityKey = null;
                    for (const entry of arr) {
                        if (entry.toLowerCase().endsWith('app-error')) {
                            errorHeader = httpErrorResponse.headers.get(entry);
                        }
                        else if (entry.toLowerCase().endsWith('app-params')) {
                            entityKey = httpErrorResponse.headers.get(entry);
                        }
                    }
                    if (errorHeader) {
                        const alertData = entityKey ? { entityName: translateService.instant(`global.menu.entities.${entityKey}`) } : undefined;
                        this.addErrorAlert(errorHeader, errorHeader, alertData);
                    }
                    else if (httpErrorResponse.error !== '' && httpErrorResponse.error.fieldErrors) {
                        const fieldErrors = httpErrorResponse.error.fieldErrors;
                        for (const fieldError of fieldErrors) {
                            if (['Min', 'Max', 'DecimalMin', 'DecimalMax'].includes(fieldError.message)) {
                                fieldError.message = 'Size';
                            }
                            // convert 'something[14].other[4].id' to 'something[].other[].id' so translations can be written to it
                            const convertedField = fieldError.field.replace(/\[\d*\]/g, '[]');
                            const fieldName = translateService.instant(`placeholderApiApp.${fieldError.objectName}.${convertedField}`);
                            this.addErrorAlert(`Error on field "${fieldName}"`, `error.${fieldError.message}`, { fieldName });
                        }
                    }
                    else if (httpErrorResponse.error !== '' && httpErrorResponse.error.message) {
                        this.addErrorAlert((_a = httpErrorResponse.error.detail) !== null && _a !== void 0 ? _a : httpErrorResponse.error.message, httpErrorResponse.error.message, httpErrorResponse.error.params);
                    }
                    else {
                        this.addErrorAlert(httpErrorResponse.error, httpErrorResponse.error);
                    }
                    break;
                }
                case 404:
                    this.addErrorAlert('Not found', 'error.url.not.found');
                    break;
                default:
                    if (httpErrorResponse.error !== '' && httpErrorResponse.error.message) {
                        this.addErrorAlert((_b = httpErrorResponse.error.detail) !== null && _b !== void 0 ? _b : httpErrorResponse.error.message, httpErrorResponse.error.message, httpErrorResponse.error.params);
                    }
                    else {
                        this.addErrorAlert(httpErrorResponse.error, httpErrorResponse.error);
                    }
            }
        });
    }
    setClasses(alert) {
        const classes = { 'jhi-toast': Boolean(alert.toast) };
        if (alert.position) {
            return Object.assign(Object.assign({}, classes), { [alert.position]: true });
        }
        return classes;
    }
    ngOnDestroy() {
        this.eventManager.destroy(this.errorListener);
        this.eventManager.destroy(this.httpErrorListener);
    }
    close(alert) {
        var _a;
        (_a = alert.close) === null || _a === void 0 ? void 0 : _a.call(alert, this.alerts);
    }
    addErrorAlert(message, translationKey, translationParams) {
        this.alertService.addAlert({ type: 'danger', message, translationKey, translationParams }, this.alerts);
    }
}
AlertErrorComponent.ɵfac = function AlertErrorComponent_Factory(t) { return new (t || AlertErrorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_core_util_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_core_util_event_manager_service__WEBPACK_IMPORTED_MODULE_2__["EventManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"])); };
AlertErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlertErrorComponent, selectors: [["jhi-alert-error"]], decls: 5, vars: 1, consts: [["role", "alert", 1, "alerts"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [3, "type", "closed", 4, "ngIf"], [3, "type", "closed"], [3, "innerHTML"]], template: function AlertErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AlertErrorComponent_div_2_Template, 4, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.alerts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbAlert"]], encapsulation: 2 });


/***/ }),

/***/ "PxL+":
/*!***********************************************************************!*\
  !*** ./src/main/webapp/app/core/config/application-config.service.ts ***!
  \***********************************************************************/
/*! exports provided: ApplicationConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationConfigService", function() { return ApplicationConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ApplicationConfigService {
    constructor() {
        this.endpointPrefix = '';
    }
    setEndpointPrefix(endpointPrefix) {
        this.endpointPrefix = endpointPrefix;
    }
    getEndpointFor(api, microservice) {
        if (microservice) {
            return `${this.endpointPrefix}services/${microservice}/${api}`;
        }
        return `${this.endpointPrefix}${api}`;
    }
}
ApplicationConfigService.ɵfac = function ApplicationConfigService_Factory(t) { return new (t || ApplicationConfigService)(); };
ApplicationConfigService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApplicationConfigService, factory: ApplicationConfigService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "TXJZ":
/*!**********************************************************!*\
  !*** ./src/main/webapp/app/core/auth/account.service.ts ***!
  \**********************************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-webstorage */ "e4Ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var app_core_auth_state_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/core/auth/state-storage.service */ "hl6c");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _config_application_config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config/application-config.service */ "PxL+");









class AccountService {
    constructor(translateService, sessionStorage, http, stateStorageService, router, applicationConfigService) {
        this.translateService = translateService;
        this.sessionStorage = sessionStorage;
        this.http = http;
        this.stateStorageService = stateStorageService;
        this.router = router;
        this.applicationConfigService = applicationConfigService;
        this.userIdentity = null;
        this.authenticationState = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](1);
    }
    authenticate(identity) {
        this.userIdentity = identity;
        this.authenticationState.next(this.userIdentity);
    }
    hasAnyAuthority(authorities) {
        if (!this.userIdentity) {
            return false;
        }
        if (!Array.isArray(authorities)) {
            authorities = [authorities];
        }
        return this.userIdentity.authorities.some((authority) => authorities.includes(authority));
    }
    identity(force) {
        if (!this.accountCache$ || force || !this.isAuthenticated()) {
            this.accountCache$ = this.fetch().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((account) => {
                var _a;
                this.authenticate(account);
                // After retrieve the account info, the language will be changed to
                // the user's preferred language configured in the account setting
                if (account === null || account === void 0 ? void 0 : account.langKey) {
                    const langKey = (_a = this.sessionStorage.retrieve('locale')) !== null && _a !== void 0 ? _a : account.langKey;
                    this.translateService.use(langKey);
                }
                if (account) {
                    this.navigateToStoredUrl();
                }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["shareReplay"])());
        }
        return this.accountCache$;
    }
    isAuthenticated() {
        return this.userIdentity !== null;
    }
    getAuthenticationState() {
        return this.authenticationState.asObservable();
    }
    getImageUrl() {
        var _a, _b;
        return (_b = (_a = this.userIdentity) === null || _a === void 0 ? void 0 : _a.imageUrl) !== null && _b !== void 0 ? _b : '';
    }
    fetch() {
        return this.http.get(this.applicationConfigService.getEndpointFor('api/account'));
    }
    navigateToStoredUrl() {
        // previousState can be set in the authExpiredInterceptor and in the userRouteAccessService
        // if login is successful, go to stored previousState and clear previousState
        const previousUrl = this.stateStorageService.getUrl();
        if (previousUrl) {
            this.stateStorageService.clearUrl();
            this.router.navigateByUrl(previousUrl);
        }
    }
}
AccountService.ɵfac = function AccountService_Factory(t) { return new (t || AccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__["SessionStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](app_core_auth_state_storage_service__WEBPACK_IMPORTED_MODULE_6__["StateStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_config_application_config_service__WEBPACK_IMPORTED_MODULE_8__["ApplicationConfigService"])); };
AccountService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AccountService, factory: AccountService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "UTWK":
/*!***************************************************************************!*\
  !*** ./src/main/webapp/app/core/interceptor/error-handler.interceptor.ts ***!
  \***************************************************************************/
/*! exports provided: ErrorHandlerInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlerInterceptor", function() { return ErrorHandlerInterceptor; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var app_core_util_event_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/core/util/event-manager.service */ "ksCG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




class ErrorHandlerInterceptor {
    constructor(eventManager) {
        this.eventManager = eventManager;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])({
            error: (err) => {
                var _a;
                if (!(err.status === 401 && (err.message === '' || ((_a = err.url) === null || _a === void 0 ? void 0 : _a.includes('api/account'))))) {
                    this.eventManager.broadcast(new app_core_util_event_manager_service__WEBPACK_IMPORTED_MODULE_1__["EventWithContent"]('placeholderApiApp.httpError', err));
                }
            },
        }));
    }
}
ErrorHandlerInterceptor.ɵfac = function ErrorHandlerInterceptor_Factory(t) { return new (t || ErrorHandlerInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](app_core_util_event_manager_service__WEBPACK_IMPORTED_MODULE_1__["EventManager"])); };
ErrorHandlerInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ErrorHandlerInterceptor, factory: ErrorHandlerInterceptor.ɵfac });


/***/ }),

/***/ "W1re":
/*!*************************************************!*\
  !*** ./src/main/webapp/app/home/home.module.ts ***!
  \*************************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/shared.module */ "hbEq");
/* harmony import */ var _home_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.route */ "s+HA");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "6uyi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






class HomeModule {
}
HomeModule.ɵfac = function HomeModule_Factory(t) { return new (t || HomeModule)(); };
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild([_home_route__WEBPACK_IMPORTED_MODULE_2__["HOME_ROUTE"]])]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]], imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "WUPo":
/*!**************************************************************!*\
  !*** ./src/main/webapp/app/shared/sort/sort-by.directive.ts ***!
  \**************************************************************/
/*! exports provided: SortByDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortByDirective", function() { return SortByDirective; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sort_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sort.directive */ "ON7I");






class SortByDirective {
    constructor(sort) {
        this.sort = sort;
        this.sortIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faSort"];
        this.sortAscIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faSortUp"];
        this.sortDescIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faSortDown"];
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        sort.predicateChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$)).subscribe(() => this.updateIconDefinition());
        sort.ascendingChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$)).subscribe(() => this.updateIconDefinition());
    }
    onClick() {
        this.sort.sort(this.jhiSortBy);
    }
    ngAfterContentInit() {
        this.updateIconDefinition();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    updateIconDefinition() {
        if (this.iconComponent) {
            let icon = this.sortIcon;
            if (this.sort.predicate === this.jhiSortBy) {
                icon = this.sort.ascending ? this.sortAscIcon : this.sortDescIcon;
            }
            this.iconComponent.icon = icon.iconName;
            this.iconComponent.render();
        }
    }
}
SortByDirective.ɵfac = function SortByDirective_Factory(t) { return new (t || SortByDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_sort_directive__WEBPACK_IMPORTED_MODULE_5__["SortDirective"], 1)); };
SortByDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({ type: SortByDirective, selectors: [["", "jhiSortBy", ""]], contentQueries: function SortByDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconComponent"], 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.iconComponent = _t.first);
    } }, hostBindings: function SortByDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SortByDirective_click_HostBindingHandler() { return ctx.onClick(); });
    } }, inputs: { jhiSortBy: "jhiSortBy" } });


/***/ }),

/***/ "WtjW":
/*!*********************************!*\
  !*** ./src/main/webapp/main.ts ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.constants */ "nUxK");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "oZJK");




// disable debug data on prod profile to improve performance
if (!_app_app_constants__WEBPACK_IMPORTED_MODULE_2__["DEBUG_INFO_ENABLED"]) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"], { preserveWhitespaces: true })
    // eslint-disable-next-line no-console
    .then(() => console.log('Application started'))
    .catch(err => console.error(err));


/***/ }),

/***/ "YHTv":
/*!********************************************************************!*\
  !*** ./src/main/webapp/app/shared/language/translate.directive.ts ***!
  \********************************************************************/
/*! exports provided: TranslateDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateDirective", function() { return TranslateDirective; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var app_config_translation_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/config/translation.config */ "vH25");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");





/**
 * A wrapper directive on top of the translate pipe as the inbuilt translate directive from ngx-translate is too verbose and buggy
 */
class TranslateDirective {
    constructor(el, translateService) {
        this.el = el;
        this.translateService = translateService;
        this.directiveDestroyed = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    ngOnInit() {
        this.translateService.onLangChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.directiveDestroyed)).subscribe(() => {
            this.getTranslation();
        });
    }
    ngOnChanges() {
        this.getTranslation();
    }
    ngOnDestroy() {
        this.directiveDestroyed.next();
        this.directiveDestroyed.complete();
    }
    getTranslation() {
        this.translateService
            .get(this.jhiTranslate, this.translateValues)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.directiveDestroyed))
            .subscribe(value => {
            this.el.nativeElement.innerHTML = value;
        }, () => `${app_config_translation_config__WEBPACK_IMPORTED_MODULE_2__["translationNotFoundMessage"]}[${this.jhiTranslate}]`);
    }
}
TranslateDirective.ɵfac = function TranslateDirective_Factory(t) { return new (t || TranslateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"])); };
TranslateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: TranslateDirective, selectors: [["", "jhiTranslate", ""]], inputs: { jhiTranslate: "jhiTranslate", translateValues: "translateValues" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]] });


/***/ }),

/***/ "c/6k":
/*!**********************************************************!*\
  !*** ./src/main/webapp/app/shared/date/duration.pipe.ts ***!
  \**********************************************************/
/*! exports provided: DurationPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DurationPipe", function() { return DurationPipe; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "Wgwc");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DurationPipe {
    transform(value) {
        if (value) {
            return dayjs__WEBPACK_IMPORTED_MODULE_0__["duration"](value).humanize();
        }
        return '';
    }
}
DurationPipe.ɵfac = function DurationPipe_Factory(t) { return new (t || DurationPipe)(); };
DurationPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "duration", type: DurationPipe, pure: true });


/***/ }),

/***/ "d3j3":
/*!**********************************************************!*\
  !*** ./src/main/webapp/app/config/font-awesome-icons.ts ***!
  \**********************************************************/
/*! exports provided: fontAwesomeIcons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontAwesomeIcons", function() { return fontAwesomeIcons; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");

const fontAwesomeIcons = [
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faArrowLeft"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faAsterisk"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faBan"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faBars"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faBell"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faBook"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faCalendarAlt"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faCheck"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faCloud"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faCogs"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faDatabase"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faEye"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faFlag"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faHeart"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faHome"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faList"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faLock"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faPencilAlt"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faPlus"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faRoad"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faSave"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faSearch"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faSignOutAlt"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faSignInAlt"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faSort"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faSortDown"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faSortUp"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faSync"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faTachometerAlt"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faTasks"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faThList"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faTimes"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faTrashAlt"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faUser"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faUserPlus"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faUsers"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faUsersCog"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faWrench"],
];


/***/ }),

/***/ "dkpf":
/*!***************************************************!*\
  !*** ./src/main/webapp/app/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _layouts_error_error_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/error/error.route */ "DDS7");
/* harmony import */ var _layouts_navbar_navbar_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts/navbar/navbar.route */ "BvHF");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/app.constants */ "nUxK");
/* harmony import */ var app_config_authority_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/config/authority.constants */ "wtY+");
/* harmony import */ var app_core_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/core/auth/user-route-access.service */ "ADQh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








const LAYOUT_ROUTES = [_layouts_navbar_navbar_route__WEBPACK_IMPORTED_MODULE_2__["navbarRoute"], ..._layouts_error_error_route__WEBPACK_IMPORTED_MODULE_1__["errorRoute"]];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot([
                {
                    path: 'admin',
                    data: {
                        authorities: [app_config_authority_constants__WEBPACK_IMPORTED_MODULE_4__["Authority"].ADMIN],
                    },
                    canActivate: [app_core_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_5__["UserRouteAccessService"]],
                    loadChildren: () => __webpack_require__.e(/*! import() | admin-admin-routing-module */ "admin-admin-routing-module").then(__webpack_require__.bind(null, /*! ./admin/admin-routing.module */ "HvhB")).then(m => m.AdminRoutingModule),
                },
                {
                    path: 'login',
                    loadChildren: () => __webpack_require__.e(/*! import() | login-login-module */ "login-login-module").then(__webpack_require__.bind(null, /*! ./login/login.module */ "PUjd")).then(m => m.LoginModule),
                },
                ...LAYOUT_ROUTES,
            ], { enableTracing: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["DEBUG_INFO_ENABLED"] }),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "f/M6":
/*!********************************************************************!*\
  !*** ./src/main/webapp/app/shared/date/format-medium-date.pipe.ts ***!
  \********************************************************************/
/*! exports provided: FormatMediumDatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatMediumDatePipe", function() { return FormatMediumDatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FormatMediumDatePipe {
    transform(day) {
        return day ? day.format('D MMM YYYY') : '';
    }
}
FormatMediumDatePipe.ɵfac = function FormatMediumDatePipe_Factory(t) { return new (t || FormatMediumDatePipe)(); };
FormatMediumDatePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "formatMediumDate", type: FormatMediumDatePipe, pure: true });


/***/ }),

/***/ "fiib":
/*!****************************************************!*\
  !*** ./src/main/webapp/app/login/login.service.ts ***!
  \****************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/core/config/application-config.service */ "PxL+");
/* harmony import */ var app_core_auth_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/core/auth/account.service */ "TXJZ");
/* harmony import */ var app_core_auth_auth_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/core/auth/auth-session.service */ "LIhM");





class LoginService {
    constructor(applicationConfigService, accountService, authServerProvider) {
        this.applicationConfigService = applicationConfigService;
        this.accountService = accountService;
        this.authServerProvider = authServerProvider;
    }
    login(credentials) {
        return this.authServerProvider.login(credentials).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(() => this.accountService.identity(true)));
    }
    logoutUrl() {
        return this.applicationConfigService.getEndpointFor('api/logout');
    }
    logoutInClient() {
        this.accountService.authenticate(null);
    }
    logout() {
        this.authServerProvider.logout().subscribe({ complete: () => this.accountService.authenticate(null) });
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](app_core_auth_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](app_core_auth_auth_session_service__WEBPACK_IMPORTED_MODULE_4__["AuthServerProvider"])); };
LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "hbEq":
/*!*****************************************************!*\
  !*** ./src/main/webapp/app/shared/shared.module.ts ***!
  \*****************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _shared_libs_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared-libs.module */ "tdbU");
/* harmony import */ var _language_find_language_from_key_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./language/find-language-from-key.pipe */ "AYgL");
/* harmony import */ var _language_translate_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./language/translate.directive */ "YHTv");
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert/alert.component */ "0pEx");
/* harmony import */ var _alert_alert_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alert/alert-error.component */ "Owrn");
/* harmony import */ var _auth_has_any_authority_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/has-any-authority.directive */ "3AuD");
/* harmony import */ var _date_duration_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./date/duration.pipe */ "c/6k");
/* harmony import */ var _date_format_medium_datetime_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./date/format-medium-datetime.pipe */ "pw1z");
/* harmony import */ var _date_format_medium_date_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./date/format-medium-date.pipe */ "f/M6");
/* harmony import */ var _sort_sort_by_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sort/sort-by.directive */ "WUPo");
/* harmony import */ var _sort_sort_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sort/sort.directive */ "ON7I");
/* harmony import */ var _pagination_item_count_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pagination/item-count.component */ "OYpZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");













class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [[_shared_libs_module__WEBPACK_IMPORTED_MODULE_0__["SharedLibsModule"]], _shared_libs_module__WEBPACK_IMPORTED_MODULE_0__["SharedLibsModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_language_find_language_from_key_pipe__WEBPACK_IMPORTED_MODULE_1__["FindLanguageFromKeyPipe"],
        _language_translate_directive__WEBPACK_IMPORTED_MODULE_2__["TranslateDirective"],
        _alert_alert_component__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"],
        _alert_alert_error_component__WEBPACK_IMPORTED_MODULE_4__["AlertErrorComponent"],
        _auth_has_any_authority_directive__WEBPACK_IMPORTED_MODULE_5__["HasAnyAuthorityDirective"],
        _date_duration_pipe__WEBPACK_IMPORTED_MODULE_6__["DurationPipe"],
        _date_format_medium_datetime_pipe__WEBPACK_IMPORTED_MODULE_7__["FormatMediumDatetimePipe"],
        _date_format_medium_date_pipe__WEBPACK_IMPORTED_MODULE_8__["FormatMediumDatePipe"],
        _sort_sort_by_directive__WEBPACK_IMPORTED_MODULE_9__["SortByDirective"],
        _sort_sort_directive__WEBPACK_IMPORTED_MODULE_10__["SortDirective"],
        _pagination_item_count_component__WEBPACK_IMPORTED_MODULE_11__["ItemCountComponent"]], imports: [_shared_libs_module__WEBPACK_IMPORTED_MODULE_0__["SharedLibsModule"]], exports: [_shared_libs_module__WEBPACK_IMPORTED_MODULE_0__["SharedLibsModule"],
        _language_find_language_from_key_pipe__WEBPACK_IMPORTED_MODULE_1__["FindLanguageFromKeyPipe"],
        _language_translate_directive__WEBPACK_IMPORTED_MODULE_2__["TranslateDirective"],
        _alert_alert_component__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"],
        _alert_alert_error_component__WEBPACK_IMPORTED_MODULE_4__["AlertErrorComponent"],
        _auth_has_any_authority_directive__WEBPACK_IMPORTED_MODULE_5__["HasAnyAuthorityDirective"],
        _date_duration_pipe__WEBPACK_IMPORTED_MODULE_6__["DurationPipe"],
        _date_format_medium_datetime_pipe__WEBPACK_IMPORTED_MODULE_7__["FormatMediumDatetimePipe"],
        _date_format_medium_date_pipe__WEBPACK_IMPORTED_MODULE_8__["FormatMediumDatePipe"],
        _sort_sort_by_directive__WEBPACK_IMPORTED_MODULE_9__["SortByDirective"],
        _sort_sort_directive__WEBPACK_IMPORTED_MODULE_10__["SortDirective"],
        _pagination_item_count_component__WEBPACK_IMPORTED_MODULE_11__["ItemCountComponent"]] }); })();


/***/ }),

/***/ "hl6c":
/*!****************************************************************!*\
  !*** ./src/main/webapp/app/core/auth/state-storage.service.ts ***!
  \****************************************************************/
/*! exports provided: StateStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateStorageService", function() { return StateStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-webstorage */ "e4Ts");


class StateStorageService {
    constructor($sessionStorage) {
        this.$sessionStorage = $sessionStorage;
        this.previousUrlKey = 'previousUrl';
    }
    storeUrl(url) {
        this.$sessionStorage.store(this.previousUrlKey, url);
    }
    getUrl() {
        return this.$sessionStorage.retrieve(this.previousUrlKey);
    }
    clearUrl() {
        this.$sessionStorage.clear(this.previousUrlKey);
    }
}
StateStorageService.ɵfac = function StateStorageService_Factory(t) { return new (t || StateStorageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_webstorage__WEBPACK_IMPORTED_MODULE_1__["SessionStorageService"])); };
StateStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StateStorageService, factory: StateStorageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "kRdB":
/*!**************************************************************************!*\
  !*** ./src/main/webapp/app/core/interceptor/auth-expired.interceptor.ts ***!
  \**************************************************************************/
/*! exports provided: AuthExpiredInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthExpiredInterceptor", function() { return AuthExpiredInterceptor; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/login/login.service */ "fiib");
/* harmony import */ var app_core_auth_state_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/core/auth/state-storage.service */ "hl6c");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_core_auth_account_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/core/auth/account.service */ "TXJZ");






class AuthExpiredInterceptor {
    constructor(loginService, stateStorageService, router, accountService) {
        this.loginService = loginService;
        this.stateStorageService = stateStorageService;
        this.router = router;
        this.accountService = accountService;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])({
            error: (err) => {
                if (err.status === 401 && err.url && !err.url.includes('api/account') && this.accountService.isAuthenticated()) {
                    if (err.url.includes(this.loginService.logoutUrl())) {
                        this.loginService.logoutInClient();
                        return;
                    }
                    this.stateStorageService.storeUrl(this.router.routerState.snapshot.url);
                    this.loginService.logout();
                    this.router.navigate(['/login']);
                }
            },
        }));
    }
}
AuthExpiredInterceptor.ɵfac = function AuthExpiredInterceptor_Factory(t) { return new (t || AuthExpiredInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](app_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](app_core_auth_state_storage_service__WEBPACK_IMPORTED_MODULE_3__["StateStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](app_core_auth_account_service__WEBPACK_IMPORTED_MODULE_5__["AccountService"])); };
AuthExpiredInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthExpiredInterceptor, factory: AuthExpiredInterceptor.ɵfac });


/***/ }),

/***/ "ksCG":
/*!****************************************************************!*\
  !*** ./src/main/webapp/app/core/util/event-manager.service.ts ***!
  \****************************************************************/
/*! exports provided: EventWithContent, EventManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventWithContent", function() { return EventWithContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventManager", function() { return EventManager; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class EventWithContent {
    constructor(name, content) {
        this.name = name;
        this.content = content;
    }
}
/**
 * An utility class to manage RX events
 */
class EventManager {
    constructor() {
        this.observable = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]((observer) => {
            this.observer = observer;
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["share"])());
    }
    /**
     * Method to broadcast the event to observer
     */
    broadcast(event) {
        if (this.observer) {
            this.observer.next(event);
        }
    }
    /**
     * Method to subscribe to an event with callback
     * @param eventNames  Single event name or array of event names to what subscribe
     * @param callback    Callback to run when the event occurs
     */
    subscribe(eventNames, callback) {
        if (typeof eventNames === 'string') {
            eventNames = [eventNames];
        }
        return this.observable
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])((event) => {
            for (const eventName of eventNames) {
                if ((typeof event === 'string' && event === eventName) || (typeof event !== 'string' && event.name === eventName)) {
                    return true;
                }
            }
            return false;
        }))
            .subscribe(callback);
    }
    /**
     * Method to unsubscribe the subscription
     */
    destroy(subscriber) {
        subscriber.unsubscribe();
    }
}
EventManager.ɵfac = function EventManager_Factory(t) { return new (t || EventManager)(); };
EventManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: EventManager, factory: EventManager.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "mVJI":
/*!**************************************************************************!*\
  !*** ./src/main/webapp/app/core/interceptor/notification.interceptor.ts ***!
  \**************************************************************************/
/*! exports provided: NotificationInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationInterceptor", function() { return NotificationInterceptor; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_core_util_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/core/util/alert.service */ "6PFj");




class NotificationInterceptor {
    constructor(alertService) {
        this.alertService = alertService;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((event) => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]) {
                let alert = null;
                let alertParams = null;
                for (const headerKey of event.headers.keys()) {
                    if (headerKey.toLowerCase().endsWith('app-alert')) {
                        alert = event.headers.get(headerKey);
                    }
                    else if (headerKey.toLowerCase().endsWith('app-params')) {
                        alertParams = decodeURIComponent(event.headers.get(headerKey).replace(/\+/g, ' '));
                    }
                }
                if (alert) {
                    this.alertService.addAlert({
                        type: 'success',
                        translationKey: alert,
                        translationParams: { param: alertParams },
                    });
                }
            }
        }));
    }
}
NotificationInterceptor.ɵfac = function NotificationInterceptor_Factory(t) { return new (t || NotificationInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](app_core_util_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"])); };
NotificationInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: NotificationInterceptor, factory: NotificationInterceptor.ɵfac });


/***/ }),

/***/ "nUxK":
/*!**********************************************!*\
  !*** ./src/main/webapp/app/app.constants.ts ***!
  \**********************************************/
/*! exports provided: VERSION, DEBUG_INFO_ENABLED, SERVER_API_URL, BUILD_TIMESTAMP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEBUG_INFO_ENABLED", function() { return DEBUG_INFO_ENABLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVER_API_URL", function() { return SERVER_API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUILD_TIMESTAMP", function() { return BUILD_TIMESTAMP; });
// These constants are injected via webpack environment variables.
// You can add more variables in webpack.common.js or in profile specific webpack.<dev|prod>.js files.
// If you change the values in the webpack config files, you need to re run webpack to update the application
var _a;
const VERSION = '0.0.1-SNAPSHOT';
const DEBUG_INFO_ENABLED = Boolean(true);
const SERVER_API_URL = (_a = '') !== null && _a !== void 0 ? _a : '';
const BUILD_TIMESTAMP = '1619449242279';


/***/ }),

/***/ "oZJK":
/*!*******************************************!*\
  !*** ./src/main/webapp/app/app.module.ts ***!
  \*******************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/locales/en */ "tAZD");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/service-worker */ "Jho9");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-webstorage */ "e4Ts");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! dayjs */ "Wgwc");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.constants */ "nUxK");
/* harmony import */ var _config_dayjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./config/dayjs */ "H5hR");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/shared/shared.module */ "hbEq");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-routing.module */ "dkpf");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/home.module */ "W1re");
/* harmony import */ var _entities_entity_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./entities/entity-routing.module */ "8HBj");
/* harmony import */ var _config_datepicker_adapter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./config/datepicker-adapter */ "OJfN");
/* harmony import */ var _config_font_awesome_icons__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./config/font-awesome-icons */ "d3j3");
/* harmony import */ var app_core_interceptor_index__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! app/core/interceptor/index */ "wYD1");
/* harmony import */ var _config_translation_config__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./config/translation.config */ "vH25");
/* harmony import */ var _layouts_main_main_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./layouts/main/main.component */ "KdTE");
/* harmony import */ var _layouts_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./layouts/navbar/navbar.component */ "JmsV");
/* harmony import */ var _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./layouts/footer/footer.component */ "8H8u");
/* harmony import */ var _layouts_profiles_page_ribbon_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./layouts/profiles/page-ribbon.component */ "8Dfa");
/* harmony import */ var _layouts_navbar_active_menu_directive__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./layouts/navbar/active-menu.directive */ "yoww");
/* harmony import */ var _layouts_error_error_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./layouts/error/error.component */ "/+IW");
/* harmony import */ var app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! app/core/config/application-config.service */ "PxL+");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
















// jhipster-needle-angular-add-module-import JHipster will add new module here

















class AppModule {
    constructor(applicationConfigService, iconLibrary, dpConfig, translateService) {
        applicationConfigService.setEndpointPrefix(_app_constants__WEBPACK_IMPORTED_MODULE_10__["SERVER_API_URL"]);
        Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["registerLocaleData"])(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_3___default.a);
        iconLibrary.addIcons(..._config_font_awesome_icons__WEBPACK_IMPORTED_MODULE_17__["fontAwesomeIcons"]);
        dpConfig.minDate = { year: dayjs__WEBPACK_IMPORTED_MODULE_8__().subtract(100, 'year').year(), month: 1, day: 1 };
        translateService.setDefaultLang('en');
        translateService.use('en');
    }
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_26__["ApplicationConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_27__["FaIconLibrary"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbDatepickerConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"])); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_layouts_main_main_component__WEBPACK_IMPORTED_MODULE_20__["MainComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"],
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], useValue: 'en' },
        { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbDateAdapter"], useClass: _config_datepicker_adapter__WEBPACK_IMPORTED_MODULE_16__["NgbDateDayjsAdapter"] },
        app_core_interceptor_index__WEBPACK_IMPORTED_MODULE_18__["httpInterceptorProviders"],
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
            app_shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"],
            _home_home_module__WEBPACK_IMPORTED_MODULE_14__["HomeModule"],
            // jhipster-needle-angular-add-module JHipster will add new module here
            _entities_entity_routing_module__WEBPACK_IMPORTED_MODULE_15__["EntityRoutingModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"],
            // Set this to true to enable service worker (PWA)
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: false }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            ngx_webstorage__WEBPACK_IMPORTED_MODULE_7__["NgxWebstorageModule"].forRoot({ prefix: 'jhi', separator: '-', caseSensitive: true }),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
                    useFactory: _config_translation_config__WEBPACK_IMPORTED_MODULE_19__["translatePartialLoader"],
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]],
                },
                missingTranslationHandler: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["MissingTranslationHandler"],
                    useFactory: _config_translation_config__WEBPACK_IMPORTED_MODULE_19__["missingTranslationHandler"],
                },
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_layouts_main_main_component__WEBPACK_IMPORTED_MODULE_20__["MainComponent"], _layouts_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_21__["NavbarComponent"], _layouts_error_error_component__WEBPACK_IMPORTED_MODULE_25__["ErrorComponent"], _layouts_profiles_page_ribbon_component__WEBPACK_IMPORTED_MODULE_23__["PageRibbonComponent"], _layouts_navbar_active_menu_directive__WEBPACK_IMPORTED_MODULE_24__["ActiveMenuDirective"], _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_22__["FooterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
        app_shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"],
        _home_home_module__WEBPACK_IMPORTED_MODULE_14__["HomeModule"],
        // jhipster-needle-angular-add-module JHipster will add new module here
        _entities_entity_routing_module__WEBPACK_IMPORTED_MODULE_15__["EntityRoutingModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__["ServiceWorkerModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], ngx_webstorage__WEBPACK_IMPORTED_MODULE_7__["NgxWebstorageModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"]] }); })();


/***/ }),

/***/ "pCeh":
/*!**********************************************************!*\
  !*** ./src/main/webapp/app/config/language.constants.ts ***!
  \**********************************************************/
/*! exports provided: LANGUAGES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANGUAGES", function() { return LANGUAGES; });
/*
    Languages codes are ISO_639-1 codes, see http://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
    They are written in English to avoid character encoding issues (not a perfect solution)
*/
const LANGUAGES = [
    'en',
];


/***/ }),

/***/ "pw1z":
/*!************************************************************************!*\
  !*** ./src/main/webapp/app/shared/date/format-medium-datetime.pipe.ts ***!
  \************************************************************************/
/*! exports provided: FormatMediumDatetimePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatMediumDatetimePipe", function() { return FormatMediumDatetimePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FormatMediumDatetimePipe {
    transform(day) {
        return day ? day.format('D MMM YYYY HH:mm:ss') : '';
    }
}
FormatMediumDatetimePipe.ɵfac = function FormatMediumDatetimePipe_Factory(t) { return new (t || FormatMediumDatetimePipe)(); };
FormatMediumDatetimePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "formatMediumDatetime", type: FormatMediumDatetimePipe, pure: true });


/***/ }),

/***/ "s+HA":
/*!************************************************!*\
  !*** ./src/main/webapp/app/home/home.route.ts ***!
  \************************************************/
/*! exports provided: HOME_ROUTE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOME_ROUTE", function() { return HOME_ROUTE; });
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ "6uyi");

const HOME_ROUTE = {
    path: '',
    component: _home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"],
    data: {
        pageTitle: 'home.title',
    },
};


/***/ }),

/***/ "tdbU":
/*!**********************************************************!*\
  !*** ./src/main/webapp/app/shared/shared-libs.module.ts ***!
  \**********************************************************/
/*! exports provided: SharedLibsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedLibsModule", function() { return SharedLibsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-infinite-scroll */ "dlKe");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class SharedLibsModule {
}
SharedLibsModule.ɵfac = function SharedLibsModule_Factory(t) { return new (t || SharedLibsModule)(); };
SharedLibsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: SharedLibsModule });
SharedLibsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_3__["InfiniteScrollModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](SharedLibsModule, { exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_3__["InfiniteScrollModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"]] }); })();


/***/ }),

/***/ "vH25":
/*!**********************************************************!*\
  !*** ./src/main/webapp/app/config/translation.config.ts ***!
  \**********************************************************/
/*! exports provided: translationNotFoundMessage, MissingTranslationHandlerImpl, translatePartialLoader, missingTranslationHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translationNotFoundMessage", function() { return translationNotFoundMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MissingTranslationHandlerImpl", function() { return MissingTranslationHandlerImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translatePartialLoader", function() { return translatePartialLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "missingTranslationHandler", function() { return missingTranslationHandler; });
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");

const translationNotFoundMessage = 'translation-not-found';
class MissingTranslationHandlerImpl {
    handle(params) {
        const key = params.key;
        return `${translationNotFoundMessage}[${key}]`;
    }
}
function translatePartialLoader(http) {
    var _a;
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_0__["TranslateHttpLoader"](http, 'i18n/', `.json?buildTimestamp=${(_a = '1619449242279') !== null && _a !== void 0 ? _a : ''}`);
}
function missingTranslationHandler() {
    return new MissingTranslationHandlerImpl();
}


/***/ }),

/***/ "wYD1":
/*!*******************************************************!*\
  !*** ./src/main/webapp/app/core/interceptor/index.ts ***!
  \*******************************************************/
/*! exports provided: httpInterceptorProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpInterceptorProviders", function() { return httpInterceptorProviders; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var app_core_interceptor_auth_expired_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/core/interceptor/auth-expired.interceptor */ "kRdB");
/* harmony import */ var app_core_interceptor_error_handler_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/core/interceptor/error-handler.interceptor */ "UTWK");
/* harmony import */ var app_core_interceptor_notification_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/core/interceptor/notification.interceptor */ "mVJI");




const httpInterceptorProviders = [
    {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
        useClass: app_core_interceptor_auth_expired_interceptor__WEBPACK_IMPORTED_MODULE_1__["AuthExpiredInterceptor"],
        multi: true,
    },
    {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
        useClass: app_core_interceptor_error_handler_interceptor__WEBPACK_IMPORTED_MODULE_2__["ErrorHandlerInterceptor"],
        multi: true,
    },
    {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
        useClass: app_core_interceptor_notification_interceptor__WEBPACK_IMPORTED_MODULE_3__["NotificationInterceptor"],
        multi: true,
    },
];


/***/ }),

/***/ "wtY+":
/*!***********************************************************!*\
  !*** ./src/main/webapp/app/config/authority.constants.ts ***!
  \***********************************************************/
/*! exports provided: Authority */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Authority", function() { return Authority; });
var Authority;
(function (Authority) {
    Authority["ADMIN"] = "ROLE_ADMIN";
    Authority["USER"] = "ROLE_USER";
})(Authority || (Authority = {}));


/***/ }),

/***/ "yoww":
/*!*********************************************************************!*\
  !*** ./src/main/webapp/app/layouts/navbar/active-menu.directive.ts ***!
  \*********************************************************************/
/*! exports provided: ActiveMenuDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveMenuDirective", function() { return ActiveMenuDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");


class ActiveMenuDirective {
    constructor(el, renderer, translateService) {
        this.el = el;
        this.renderer = renderer;
        this.translateService = translateService;
    }
    ngOnInit() {
        this.translateService.onLangChange.subscribe((event) => {
            this.updateActiveFlag(event.lang);
        });
        this.updateActiveFlag(this.translateService.currentLang);
    }
    updateActiveFlag(selectedLanguage) {
        if (this.jhiActiveMenu === selectedLanguage) {
            this.renderer.addClass(this.el.nativeElement, 'active');
        }
        else {
            this.renderer.removeClass(this.el.nativeElement, 'active');
        }
    }
}
ActiveMenuDirective.ɵfac = function ActiveMenuDirective_Factory(t) { return new (t || ActiveMenuDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"])); };
ActiveMenuDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ActiveMenuDirective, selectors: [["", "jhiActiveMenu", ""]], inputs: { jhiActiveMenu: "jhiActiveMenu" } });


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
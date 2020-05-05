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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar>\n</app-navbar>\n<div [@pageTransition]=\" (transitionState$ | async).isPageVisible ? 'end' : 'start'  \" class=\"root-content\">\n    <router-outlet></router-outlet>\n    <app-footer></app-footer>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section\" data-background-color=\"black\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-4 p-5\">\n                <h3>Acerca de nosotros</h3>\n                <p class=\"light-text\">\n                    Somos una empresa líder en el mercado inmobiliario con más de 14 años de trayectoria, nos especializamos en: Administración de inmuebles, desarrollo, comercialización y arrendamiento, inmobiliario.\n                </p>\n            </div>\n            <div class=\"col-sm-4 p-5\">\n                <h3>Contáctanos</h3>\n                <p class=\"light-text\">\n                    Insurgentes Sur 465, Col. Hipódromo Condesa, C.P. 06100, CDMX.\n                </p>\n                <p class=\"light-text\">\n                    Tel: <a href=\"tel:55 14 50 65 90\">(55) 14 50 65 90</a>\n                </p>\n                <p class=\"light-text\">\n                    Correo: <a href=\"mailto:kapital@kapitalsoluciones.com\">kapital@kapitalsoluciones.com</a>\n                </p>\n            </div>\n            <div class=\"col-sm-4 p-5\">\n                <h3>Síguenos</h3>\n                <div class=\"d-flex flex-row justify-content-between\">\n                    <a href=\"\" class=\"social-icon\">\n                        <i class=\"fab fa-facebook\"></i>\n                    </a>\n                    <a href=\"\" class=\"social-icon\">\n                        <i class=\"fab fa-instagram\"></i>\n                    </a>\n                    <a href=\"\" class=\"social-icon\">\n                        <i class=\"fab fa-twitter\"></i>\n                    </a>\n                    <a href=\"\" class=\"social-icon\">\n                        <i class=\"fab fa-youtube\"></i>\n                    </a>\n                </div>\n            </div>\n        </div>\n        <div class=\"hr\"> &nbsp; </div>\n        <div class=\"row\">\n            <div class=\"col-sm-12 d-flex flex-row justify-content-center\">\n                © 2019 Kapital Soluciones Inmobiliarias S.A de C.V.\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modal/modal.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modal/modal.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-content\">\n    <div class=\"modal-header\">\n        <h3 class=\"modal-title text-center\">{{ title }}</h3>\n    </div>\n    <div class=\"modal-body\" [innerHTML]=\"body\">\n    </div>\n    <div class=\"modal-footer justify-content-end\">\n        <button type=\"button\" *ngIf=\"isDialogModal\" class=\"btn btn-link text-bold text-white\" (click)=\"onDecline()\">{{ btnCancelText }}</button>\n        <button type=\"button\" class=\"btn btn-link ml-3 text-bold text-white\" ngbAutofocus (click)=\"onAccept()\">{{ btnOkText }}</button>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav [@showHideNavbar]=\" (navbarState$ | async).isShowing ? 'show' : 'hide' \" class=\"navbar navbar-expand-lg navbar-dark fixed-top bg-dark navbar-custom shadowed\">\n    <div class=\"container\">\n        <a class=\"navbar-brand\" href=\"#\">\n            <img src=\"assets/icons/KSI_Imagotipo.svg\" class=\"logo\" alt=\"KSI logo\">\n        </a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" (click)=\"onDropdownToggle()\" aria-label=\"Toggle navigation\">\n            <i class=\"fas fa-ellipsis-h\"></i>\n        </button>\n        <div class=\"collapse navbar-collapse\" [ngClass]=\"{ 'show': isDropdownShowing, 'hide': isHiding }\">\n            <ul class=\"navbar-nav ml-auto\">\n                <li *ngFor=\"let page of navbarConstants.pages; index as i \" class=\"nav-item\" [ngClass]=\"{ 'active' : (navbarState$ | async).activeTab === i }\">\n                    <a class=\"nav-link\" role=\"button\" (click)=\"onChangeTab(i)\">\n                        <p>{{page.name}}</p>\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/actions/navbar.actions.ts":
/*!*******************************************!*\
  !*** ./src/app/actions/navbar.actions.ts ***!
  \*******************************************/
/*! exports provided: showNavbar, hideNavbar, changeTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showNavbar", function() { return showNavbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideNavbar", function() { return hideNavbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeTab", function() { return changeTab; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");


const showNavbar = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Navbar component] Show');
const hideNavbar = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Navbar component] Hide');
const changeTab = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Navbar componet] change tabs', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());


/***/ }),

/***/ "./src/app/actions/transition.actions.ts":
/*!***********************************************!*\
  !*** ./src/app/actions/transition.actions.ts ***!
  \***********************************************/
/*! exports provided: startTransition, endTransition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startTransition", function() { return startTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endTransition", function() { return endTransition; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");


const startTransition = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Transition animations] start');
const endTransition = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Transition animations] end');


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: () => __webpack_require__.e(/*! import() | pages-home-home-module */ "pages-home-home-module").then(__webpack_require__.bind(null, /*! ./pages/home/home.module */ "./src/app/pages/home/home.module.ts")).then(m => m.HomeModule) },
    { path: 'administracion', loadChildren: () => __webpack_require__.e(/*! import() | pages-administracion-administracion-module */ "pages-administracion-administracion-module").then(__webpack_require__.bind(null, /*! ./pages/administracion/administracion.module */ "./src/app/pages/administracion/administracion.module.ts")).then(m => m.AdministracionModule) },
    { path: 'venta-renta', loadChildren: () => __webpack_require__.e(/*! import() | pages-venta-renta-venta-renta-module */ "pages-venta-renta-venta-renta-module").then(__webpack_require__.bind(null, /*! ./pages/venta-renta/venta-renta.module */ "./src/app/pages/venta-renta/venta-renta.module.ts")).then(m => m.VentaRentaModule) }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".root-content {\n  margin: 0;\n  padding: 0;\n  border: none;\n  min-width: 100%;\n  min-height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS92dXN1bXppL0RBVEEvUHJvamVjdHMvQW5ndWxhci9LU0kvS1NJL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb290LWNvbnRlbnQge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbn0iLCIucm9vdC1jb250ZW50IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IG5vbmU7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbn0iXX0= */");

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
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _services_scrolltop_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/scrolltop.service */ "./src/app/services/scrolltop.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _actions_transition_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./actions/transition.actions */ "./src/app/actions/transition.actions.ts");
/* harmony import */ var _actions_navbar_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./actions/navbar.actions */ "./src/app/actions/navbar.actions.ts");
/* harmony import */ var _constants_navbar_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./constants/navbar.constants */ "./src/app/constants/navbar.constants.ts");












let AppComponent = class AppComponent {
    constructor(router, location, scrollService, store) {
        this.router = router;
        this.location = location;
        this.scrollService = scrollService;
        this.store = store;
        this.transitionState$ = store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])('transitionReducer'));
    }
    ngOnInit() {
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(e => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationEnd"])).subscribe((event) => {
            this.endPageTransition(this);
            this.setNavbarTab(this);
        });
    }
    endPageTransition(ctx) {
        const currentUrl = ctx.location.path();
        const isHome = currentUrl.includes(_constants_navbar_constants__WEBPACK_IMPORTED_MODULE_11__["constants"].pages[_constants_navbar_constants__WEBPACK_IMPORTED_MODULE_11__["pages"].HOME].url) ||
            currentUrl === '' ||
            currentUrl === '/';
        ctx.scrollService.scroll();
        if (!isHome) {
            ctx.store.dispatch(_actions_navbar_actions__WEBPACK_IMPORTED_MODULE_10__["showNavbar"]());
        }
        setTimeout(() => {
            ctx.store.dispatch(Object(_actions_transition_actions__WEBPACK_IMPORTED_MODULE_9__["endTransition"])());
        }, 300);
    }
    setNavbarTab(ctx) {
        const currentUrl = ctx.location.path();
        const pages = _constants_navbar_constants__WEBPACK_IMPORTED_MODULE_11__["constants"].pages;
        const fullPathsArr = pages.map(page => page.fullpath);
        const currentPageNum = fullPathsArr.indexOf(currentUrl);
        if (currentPageNum < 0) {
            return;
        }
        const pageObj = pages[currentPageNum];
        const isParentPath = pageObj.isParentPath;
        const tabIndex = isParentPath ? currentPageNum : pageObj.parent;
        ctx.store.dispatch(_actions_navbar_actions__WEBPACK_IMPORTED_MODULE_10__["changeTab"]({ pageID: tabIndex }));
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
    { type: _services_scrolltop_service__WEBPACK_IMPORTED_MODULE_2__["ScrolltopService"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"])(_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"], { static: false })
], AppComponent.prototype, "navbar", void 0);
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["trigger"])('pageTransition', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('start', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
                    opacity: 0
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('end', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
                    opacity: 1
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('start => end', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('300ms')
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('end => start', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('300ms')
                ])
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reducers */ "./src/app/reducers/index.ts");










let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forRoot(_reducers__WEBPACK_IMPORTED_MODULE_9__["reducers"], {
                metaReducers: _reducers__WEBPACK_IMPORTED_MODULE_9__["metaReducers"],
                runtimeChecks: {
                    strictStateImmutability: true,
                    strictActionImmutability: true
                }
            })
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/constants/navbar.constants.ts":
/*!***********************************************!*\
  !*** ./src/app/constants/navbar.constants.ts ***!
  \***********************************************/
/*! exports provided: pages, constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pages", function() { return pages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constants", function() { return constants; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var pages;
(function (pages) {
    pages[pages["HOME"] = 0] = "HOME";
    pages[pages["ADMINISTRACION"] = 1] = "ADMINISTRACION";
    pages[pages["VENTARENTA"] = 2] = "VENTARENTA";
    pages[pages["DESARROLLOS"] = 3] = "DESARROLLOS";
    pages[pages["NOTICIAS"] = 4] = "NOTICIAS";
    pages[pages["CONTACTO"] = 5] = "CONTACTO";
    pages[pages["ADMIN_LOGIN"] = 6] = "ADMIN_LOGIN";
})(pages || (pages = {}));
const constants = {
    pages: [
        {
            name: 'Quienes Somos',
            url: '/home',
            fullpath: '/home',
            isParentPath: true
        },
        {
            name: 'Administración',
            url: '/administracion',
            fullpath: '/administracion',
            isParentPath: true
        },
        {
            name: 'Venta & renta',
            url: '/venta-renta',
            fullpath: '/venta-renta',
            isParentPath: true
        },
        {
            name: 'Desarrollos',
            url: '/desarrollos',
            fullpath: '/desarrollos',
            isParentPath: true
        },
        {
            name: 'Noticias',
            url: '/noticias',
            fullpath: '/noticias',
            isParentPath: true
        },
        {
            name: 'Contacto',
            url: '/contacto',
            fullpath: '/contacto',
            isParentPath: true
        },
        {
            name: 'admin login',
            url: '/admin-login',
            fullpath: '/administracion/admin-login',
            isParentPath: false,
            parent: pages.ADMINISTRACION
        }
    ]
};


/***/ }),

/***/ "./src/app/reducers/index.ts":
/*!***********************************!*\
  !*** ./src/app/reducers/index.ts ***!
  \***********************************/
/*! exports provided: reducers, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _navbar_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar.reducer */ "./src/app/reducers/navbar.reducer.ts");
/* harmony import */ var _transition_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transition.reducer */ "./src/app/reducers/transition.reducer.ts");




const reducers = {
    navbarReducer: _navbar_reducer__WEBPACK_IMPORTED_MODULE_2__["reducer"],
    transitionReducer: _transition_reducer__WEBPACK_IMPORTED_MODULE_3__["reducer"]
};
const metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production ? [] : [];


/***/ }),

/***/ "./src/app/reducers/navbar.reducer.ts":
/*!********************************************!*\
  !*** ./src/app/reducers/navbar.reducer.ts ***!
  \********************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _actions_navbar_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/navbar.actions */ "./src/app/actions/navbar.actions.ts");



const initialState = {
    isShowing: false,
    activeTab: 0
};
const navbarReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_navbar_actions__WEBPACK_IMPORTED_MODULE_2__["hideNavbar"], (state) => (Object.assign({}, state, { isShowing: false }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_navbar_actions__WEBPACK_IMPORTED_MODULE_2__["showNavbar"], (state) => (Object.assign({}, state, { isShowing: true }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_navbar_actions__WEBPACK_IMPORTED_MODULE_2__["changeTab"], (state, page) => (Object.assign({}, state, { activeTab: page.pageID }))));
function reducer(state, action) {
    return navbarReducer(state, action);
}


/***/ }),

/***/ "./src/app/reducers/transition.reducer.ts":
/*!************************************************!*\
  !*** ./src/app/reducers/transition.reducer.ts ***!
  \************************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _actions_transition_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/transition.actions */ "./src/app/actions/transition.actions.ts");



const initialState = {
    isPageVisible: false
};
const transitionReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_transition_actions__WEBPACK_IMPORTED_MODULE_2__["startTransition"], (state) => (Object.assign({}, state, { isPageVisible: false }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_transition_actions__WEBPACK_IMPORTED_MODULE_2__["endTransition"], (state) => (Object.assign({}, state, { isPageVisible: true }))));
function reducer(state, action) {
    return transitionReducer(state, action);
}


/***/ }),

/***/ "./src/app/services/navigate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/navigate.service.ts ***!
  \**********************************************/
/*! exports provided: NavigateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigateService", function() { return NavigateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _actions_transition_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/transition.actions */ "./src/app/actions/transition.actions.ts");





let NavigateService = class NavigateService {
    constructor(router, store) {
        this.router = router;
        this.store = store;
    }
    navigateByUrl(url) {
        const ctx = this;
        this.store.dispatch(Object(_actions_transition_actions__WEBPACK_IMPORTED_MODULE_4__["startTransition"])());
        setTimeout(() => {
            ctx.router.navigateByUrl(url);
        }, 300);
    }
};
NavigateService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
];
NavigateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], NavigateService);



/***/ }),

/***/ "./src/app/services/scrolltop.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/scrolltop.service.ts ***!
  \***********************************************/
/*! exports provided: ScrolltopService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrolltopService", function() { return ScrolltopService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ScrolltopService = class ScrolltopService {
    constructor() { }
    scroll() {
        const pos = window.pageYOffset;
        if (pos > 0) {
            window.scrollTo(0, 0);
        }
    }
};
ScrolltopService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ScrolltopService);



/***/ }),

/***/ "./src/app/shared/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".social-icon {\n  font-size: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS92dXN1bXppL0RBVEEvUHJvamVjdHMvQW5ndWxhci9LU0kvS1NJL3NyYy9hcHAvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc29jaWFsLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbn0iLCIuc29jaWFsLWljb24ge1xuICBmb250LXNpemU6IDJyZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/shared/modal/modal.component.scss":
/*!***************************************************!*\
  !*** ./src/app/shared/modal/modal.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9tb2RhbC9tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/shared/modal/modal.component.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/modal/modal.component.ts ***!
  \*************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");



let ModalComponent = class ModalComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
        this.acceptEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.declineEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    dismiss() {
        this.activeModal.dismiss();
    }
    onAccept() {
        this.acceptEvent.emit();
    }
    onDecline() {
        this.declineEvent.emit();
    }
};
ModalComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ModalComponent.prototype, "isDialogModal", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ModalComponent.prototype, "btnOkText", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ModalComponent.prototype, "btnCancelText", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ModalComponent.prototype, "body", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ModalComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ModalComponent.prototype, "acceptEvent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ModalComponent.prototype, "declineEvent", void 0);
ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modal/modal.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modal.component.scss */ "./src/app/shared/modal/modal.component.scss")).default]
    })
], ModalComponent);



/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navbar-custom {\n  background-color: #303030 !important;\n}\n.navbar-custom .navbar-toggler {\n  border: none;\n}\n.navbar-custom .logo {\n  height: 42px;\n}\n.collapse {\n  overflow-y: overlay;\n  top: 0;\n  right: 0;\n  padding-top: 96px;\n  position: fixed !important;\n  height: 100vh !important;\n  width: 250px;\n  background-color: #303030;\n  z-index: -1050;\n  box-shadow: -5px 0px 46px 10px rgba(0, 0, 0, 0.41);\n}\n.show {\n  -webkit-animation-name: showDropdown;\n          animation-name: showDropdown;\n  -webkit-animation-duration: 500ms;\n          animation-duration: 500ms;\n}\n.hide {\n  -webkit-animation-name: hideDropdown;\n          animation-name: hideDropdown;\n  -webkit-animation-duration: 500ms;\n          animation-duration: 500ms;\n}\n@-webkit-keyframes showDropdown {\n  from {\n    opacity: 0;\n    transform: translateX(350px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n@keyframes showDropdown {\n  from {\n    opacity: 0;\n    transform: translateX(350px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n@-webkit-keyframes hideDropdown {\n  from {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n  to {\n    opacity: 0;\n    transform: translateX(350px);\n  }\n}\n@keyframes hideDropdown {\n  from {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n  to {\n    opacity: 0;\n    transform: translateX(350px);\n  }\n}\n@media (min-width: 992px) {\n  .collapse {\n    overflow-y: auto;\n    top: 0;\n    right: 0;\n    padding-top: 0;\n    position: relative !important;\n    height: 100% !important;\n    width: auto;\n    background-color: transparent;\n    z-index: 1050;\n    box-shadow: none;\n    display: flex !important;\n    -webkit-animation: none;\n            animation: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS92dXN1bXppL0RBVEEvUHJvamVjdHMvQW5ndWxhci9LU0kvS1NJL3NyYy9hcHAvc2hhcmVkL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0NBQUE7QUNDSjtBREFJO0VBQ0ksWUFBQTtBQ0VSO0FEQUk7RUFDSSxZQUFBO0FDRVI7QURFQTtFQUNJLG1CQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBR0Esa0RBQUE7QUNDSjtBREVBO0VBQ0ksb0NBQUE7VUFBQSw0QkFBQTtFQUNBLGlDQUFBO1VBQUEseUJBQUE7QUNDSjtBREVBO0VBQ0ksb0NBQUE7VUFBQSw0QkFBQTtFQUNBLGlDQUFBO1VBQUEseUJBQUE7QUNDSjtBREVBO0VBQ0k7SUFDSSxVQUFBO0lBQ0EsNEJBQUE7RUNDTjtFRENFO0lBQ0ksVUFBQTtJQUNBLDBCQUFBO0VDQ047QUFDRjtBRFRBO0VBQ0k7SUFDSSxVQUFBO0lBQ0EsNEJBQUE7RUNDTjtFRENFO0lBQ0ksVUFBQTtJQUNBLDBCQUFBO0VDQ047QUFDRjtBREVBO0VBQ0k7SUFDSSxVQUFBO0lBQ0EsMEJBQUE7RUNBTjtFREVFO0lBQ0ksVUFBQTtJQUNBLDRCQUFBO0VDQU47QUFDRjtBRFJBO0VBQ0k7SUFDSSxVQUFBO0lBQ0EsMEJBQUE7RUNBTjtFREVFO0lBQ0ksVUFBQTtJQUNBLDRCQUFBO0VDQU47QUFDRjtBREdBO0VBQ0k7SUFDSSxnQkFBQTtJQUNBLE1BQUE7SUFDQSxRQUFBO0lBQ0EsY0FBQTtJQUNBLDZCQUFBO0lBQ0EsdUJBQUE7SUFDQSxXQUFBO0lBQ0EsNkJBQUE7SUFDQSxhQUFBO0lBR0EsZ0JBQUE7SUFDQSx3QkFBQTtJQUNBLHVCQUFBO1lBQUEsZUFBQTtFQ0ROO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXItY3VzdG9tIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzMDMwIWltcG9ydGFudDtcbiAgICAubmF2YmFyLXRvZ2dsZXIge1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgfVxuICAgIC5sb2dvIHtcbiAgICAgICAgaGVpZ2h0OiA0MnB4O1xuICAgIH1cbn1cblxuLmNvbGxhcHNlIHtcbiAgICBvdmVyZmxvdy15OiBvdmVybGF5O1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBwYWRkaW5nLXRvcDogOTZweDtcbiAgICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDEwMHZoICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMDMwMzA7XG4gICAgei1pbmRleDogLTEwNTA7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtNXB4IDBweCA0NnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjQxKTtcbiAgICAtbW96LWJveC1zaGFkb3c6IC01cHggMHB4IDQ2cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNDEpO1xuICAgIGJveC1zaGFkb3c6IC01cHggMHB4IDQ2cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNDEpO1xufVxuXG4uc2hvdyB7XG4gICAgYW5pbWF0aW9uLW5hbWU6IHNob3dEcm9wZG93bjtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDUwMG1zO1xufVxuXG4uaGlkZSB7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGhpZGVEcm9wZG93bjtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDUwMG1zO1xufVxuXG5Aa2V5ZnJhbWVzIHNob3dEcm9wZG93biB7XG4gICAgZnJvbSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzNTBweCk7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIGhpZGVEcm9wZG93biB7XG4gICAgZnJvbSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzNTBweCk7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAuY29sbGFwc2Uge1xuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIHotaW5kZXg6IDEwNTA7XG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgLW1vei1ib3gtc2hhZG93OiBub25lO1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGFuaW1hdGlvbjogbm9uZTtcbiAgICB9XG59IiwiLm5hdmJhci1jdXN0b20ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzMDMwICFpbXBvcnRhbnQ7XG59XG4ubmF2YmFyLWN1c3RvbSAubmF2YmFyLXRvZ2dsZXIge1xuICBib3JkZXI6IG5vbmU7XG59XG4ubmF2YmFyLWN1c3RvbSAubG9nbyB7XG4gIGhlaWdodDogNDJweDtcbn1cblxuLmNvbGxhcHNlIHtcbiAgb3ZlcmZsb3cteTogb3ZlcmxheTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgcGFkZGluZy10b3A6IDk2cHg7XG4gIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwMHZoICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAyNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwMzAzMDtcbiAgei1pbmRleDogLTEwNTA7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogLTVweCAwcHggNDZweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC40MSk7XG4gIC1tb3otYm94LXNoYWRvdzogLTVweCAwcHggNDZweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC40MSk7XG4gIGJveC1zaGFkb3c6IC01cHggMHB4IDQ2cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNDEpO1xufVxuXG4uc2hvdyB7XG4gIGFuaW1hdGlvbi1uYW1lOiBzaG93RHJvcGRvd247XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNTAwbXM7XG59XG5cbi5oaWRlIHtcbiAgYW5pbWF0aW9uLW5hbWU6IGhpZGVEcm9wZG93bjtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1MDBtcztcbn1cblxuQGtleWZyYW1lcyBzaG93RHJvcGRvd24ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzNTBweCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgaGlkZURyb3Bkb3duIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzUwcHgpO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmNvbGxhcHNlIHtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgICB3aWR0aDogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB6LWluZGV4OiAxMDUwO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgICAtbW96LWJveC1zaGFkb3c6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAgYW5pbWF0aW9uOiBub25lO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_constants_navbar_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/constants/navbar.constants */ "./src/app/constants/navbar.constants.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var src_app_actions_navbar_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/actions/navbar.actions */ "./src/app/actions/navbar.actions.ts");
/* harmony import */ var src_app_services_navigate_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/navigate.service */ "./src/app/services/navigate.service.ts");









let NavbarComponent = class NavbarComponent {
    constructor(store, location, router, navigateService) {
        this.store = store;
        this.location = location;
        this.router = router;
        this.navigateService = navigateService;
        this.navbarConstants = src_app_constants_navbar_constants__WEBPACK_IMPORTED_MODULE_2__["constants"];
        this.isDropdownShowing = false;
        this.isHiding = false;
        this.navbarState$ = store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])('navbarReducer'));
    }
    ngOnInit() { }
    onChangeTab(index) {
        this.navigateService.navigateByUrl(src_app_constants_navbar_constants__WEBPACK_IMPORTED_MODULE_2__["constants"].pages[index].url);
        this.store.dispatch(src_app_actions_navbar_actions__WEBPACK_IMPORTED_MODULE_7__["changeTab"]({ pageID: index }));
        this.onDropdownToggle();
    }
    onDropdownToggle() {
        if (this.isDropdownShowing && !this.isHiding) {
            this.isHiding = true;
            setTimeout((ctx) => {
                ctx.isDropdownShowing = !ctx.isDropdownShowing;
                ctx.isHiding = false;
            }, 500, this);
            return;
        }
        this.isDropdownShowing = !this.isDropdownShowing;
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: src_app_services_navigate_service__WEBPACK_IMPORTED_MODULE_8__["NavigateService"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('showHideNavbar', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
                    transform: 'translateY(0)',
                    opacity: 1
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
                    transform: 'translateY(-120px)',
                    opacity: 0
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('show => hide', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('600ms')
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('hide => show', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('600ms')
                ])
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.scss */ "./src/app/shared/navbar/navbar.component.scss")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/shared/modal/modal.component.ts");









let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_8__["ModalComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModule"],
        ],
        exports: [
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
            _modal_modal_component__WEBPACK_IMPORTED_MODULE_8__["ModalComponent"]
        ],
        bootstrap: [
            _modal_modal_component__WEBPACK_IMPORTED_MODULE_8__["ModalComponent"]
        ]
    })
], SharedModule);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /media/vusumzi/DATA/Projects/Angular/KSI/KSI/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
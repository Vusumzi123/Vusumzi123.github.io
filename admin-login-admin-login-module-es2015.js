(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-login-admin-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin-login/admin-login.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin-login/admin-login.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section login-section vh-100\">\n    <div class=\"container login-container d-flex flex-column justify-content-center align-items-center h-100\">\n        <div class=\"col-md-4 content-center ml-auto mr-auto\">\n            <div class=\"card card-login card-plain\">\n                <form ngNoForm action=\"http://462900ea.ngrok.io/proxy/casandra\" #form class=\"form ng-untouched ng-pristine ng-valid\" target=\"_blank\" method=\"post\" novalidate=\"\">\n\n                    <div class=\"header header-info text-center\">\n                        <div class=\"logo-container d-block mx-auto\"><img class=\"my-5\" alt=\"\" src=\"assets/icons/KSI_Imagotipo.svg\"></div>\n                    </div>\n                    <div class=\"content\">\n                        <div class=\"input-group form-group-no-border input-lg\">\n                            <div class=\"input-group-prepend\">\n                                <span class=\"input-group-text\">\n                                    <i class=\"fas fa-user-circle\"></i>\n                                </span>\n                            </div>\n                            <input class=\"form-control h-100\" placeholder=\"Usuario\" name=\"U\" type=\"text\">\n                        </div>\n                        <div class=\"input-group form-group-no-border input-lg\">\n                            <div class=\"input-group-prepend\">\n                                <span class=\"input-group-text\">\n                                    <i class=\"fas fa-key\"></i>\n                                </span>\n                            </div>\n                            <input class=\"form-control h-100\" placeholder=\"contraseña\" name=\"P\" type=\"password\">\n                        </div>\n                    </div>\n                    <div class=\"footer text-center\">\n                        <button type=\"submit\" class=\"btn btn-info btn-round btn-lg btn-block\" (click)=\"form.submit()\">Acceder</button>\n                    </div>\n                    <div class=\"text-center\">\n                        <h6>\n                            <a class=\"link text-info white-link\" href=\"#\">Olvidé mi contraseña!</a>\n                        </h6>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/pages/admin-login/admin-login-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/admin-login/admin-login-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: AdminLoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLoginRoutingModule", function() { return AdminLoginRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _admin_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-login.component */ "./src/app/pages/admin-login/admin-login.component.ts");




const routes = [{ path: '', component: _admin_login_component__WEBPACK_IMPORTED_MODULE_3__["AdminLoginComponent"] }];
let AdminLoginRoutingModule = class AdminLoginRoutingModule {
};
AdminLoginRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AdminLoginRoutingModule);



/***/ }),

/***/ "./src/app/pages/admin-login/admin-login.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/admin-login/admin-login.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login-section {\n  background: url('architecture-1868547.jpg'), radial-gradient(circle, #aaaaaa 0%, #00022ae5 100%);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-blend-mode: soft-light;\n}\n.login-section .login-container .btn {\n  font-size: small;\n}\n@media (min-width: 768px) {\n  .login-section .login-container .btn {\n    font-size: large;\n  }\n}\n.login-section .login-container .logo-container {\n  width: 40%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS92dXN1bXppL0RBVEEvUHJvamVjdHMvQW5ndWxhci9LU0kvS1NJL3NyYy9hcHAvcGFnZXMvYWRtaW4tbG9naW4vYWRtaW4tbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2FkbWluLWxvZ2luL2FkbWluLWxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0dBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQ0FBQTtBQ0NKO0FEQ1E7RUFDSSxnQkFBQTtBQ0NaO0FEQVk7RUFGSjtJQUdRLGdCQUFBO0VDR2Q7QUFDRjtBRERRO0VBQ0ksVUFBQTtBQ0daIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWRtaW4tbG9naW4vYWRtaW4tbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tc2VjdGlvbiB7XG4gICAgYmFja2dyb3VuZDogdXJsKHNyYy9hc3NldHMvaW1hZ2VzL2FyY2hpdGVjdHVyZS0xODY4NTQ3LmpwZyksIHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICNhYWFhYWEgMCUsICMwMDAyMmFlNSAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogc29mdC1saWdodDtcbiAgICAubG9naW4tY29udGFpbmVyIHtcbiAgICAgICAgLmJ0biB7XG4gICAgICAgICAgICBmb250LXNpemU6IHNtYWxsO1xuICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAubG9nby1jb250YWluZXIge1xuICAgICAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIubG9naW4tc2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6IHVybChzcmMvYXNzZXRzL2ltYWdlcy9hcmNoaXRlY3R1cmUtMTg2ODU0Ny5qcGcpLCByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAjYWFhYWFhIDAlLCAjMDAwMjJhZTUgMTAwJSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBzb2Z0LWxpZ2h0O1xufVxuLmxvZ2luLXNlY3Rpb24gLmxvZ2luLWNvbnRhaW5lciAuYnRuIHtcbiAgZm9udC1zaXplOiBzbWFsbDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAubG9naW4tc2VjdGlvbiAubG9naW4tY29udGFpbmVyIC5idG4ge1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIH1cbn1cbi5sb2dpbi1zZWN0aW9uIC5sb2dpbi1jb250YWluZXIgLmxvZ28tY29udGFpbmVyIHtcbiAgd2lkdGg6IDQwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/admin-login/admin-login.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/admin-login/admin-login.component.ts ***!
  \************************************************************/
/*! exports provided: AdminLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLoginComponent", function() { return AdminLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AdminLoginComponent = class AdminLoginComponent {
    constructor() { }
    ngOnInit() {
        Object.defineProperty(document, "referrer", { get: function () { return "http://www-kapitalsoluciones-com.filesusr.com/html/c93b1a_780cf8eb4859190dddffc0b23c8654cd.html"; } });
        Object.defineProperty(document, "Origin", { get: function () { return "http://www-kapitalsoluciones-com.filesusr.com"; } });
    }
};
AdminLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin-login/admin-login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-login.component.scss */ "./src/app/pages/admin-login/admin-login.component.scss")).default]
    })
], AdminLoginComponent);



/***/ }),

/***/ "./src/app/pages/admin-login/admin-login.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/admin-login/admin-login.module.ts ***!
  \*********************************************************/
/*! exports provided: AdminLoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLoginModule", function() { return AdminLoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _admin_login_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-login-routing.module */ "./src/app/pages/admin-login/admin-login-routing.module.ts");
/* harmony import */ var _admin_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-login.component */ "./src/app/pages/admin-login/admin-login.component.ts");





let AdminLoginModule = class AdminLoginModule {
};
AdminLoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_admin_login_component__WEBPACK_IMPORTED_MODULE_4__["AdminLoginComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _admin_login_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdminLoginRoutingModule"]
        ]
    })
], AdminLoginModule);



/***/ })

}]);
//# sourceMappingURL=admin-login-admin-login-module-es2015.js.map
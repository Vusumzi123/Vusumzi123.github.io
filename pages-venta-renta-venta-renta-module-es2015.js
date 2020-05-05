(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-venta-renta-venta-renta-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/venta-renta/venta-renta.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/venta-renta/venta-renta.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br>\n<br><br><br><br><br>br\n<br>\n<p>venta-renta works!</p>");

/***/ }),

/***/ "./src/app/pages/venta-renta/venta-renta-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/venta-renta/venta-renta-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: VentaRentaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VentaRentaRoutingModule", function() { return VentaRentaRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _venta_renta_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./venta-renta.component */ "./src/app/pages/venta-renta/venta-renta.component.ts");




const routes = [{ path: '', component: _venta_renta_component__WEBPACK_IMPORTED_MODULE_3__["VentaRentaComponent"] }];
let VentaRentaRoutingModule = class VentaRentaRoutingModule {
};
VentaRentaRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], VentaRentaRoutingModule);



/***/ }),

/***/ "./src/app/pages/venta-renta/venta-renta.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/venta-renta/venta-renta.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZlbnRhLXJlbnRhL3ZlbnRhLXJlbnRhLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/venta-renta/venta-renta.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/venta-renta/venta-renta.component.ts ***!
  \************************************************************/
/*! exports provided: VentaRentaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VentaRentaComponent", function() { return VentaRentaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let VentaRentaComponent = class VentaRentaComponent {
    constructor() { }
    ngOnInit() {
    }
};
VentaRentaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-venta-renta',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./venta-renta.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/venta-renta/venta-renta.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./venta-renta.component.scss */ "./src/app/pages/venta-renta/venta-renta.component.scss")).default]
    })
], VentaRentaComponent);



/***/ }),

/***/ "./src/app/pages/venta-renta/venta-renta.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/venta-renta/venta-renta.module.ts ***!
  \*********************************************************/
/*! exports provided: VentaRentaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VentaRentaModule", function() { return VentaRentaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _venta_renta_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./venta-renta-routing.module */ "./src/app/pages/venta-renta/venta-renta-routing.module.ts");
/* harmony import */ var _venta_renta_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./venta-renta.component */ "./src/app/pages/venta-renta/venta-renta.component.ts");





let VentaRentaModule = class VentaRentaModule {
};
VentaRentaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_venta_renta_component__WEBPACK_IMPORTED_MODULE_4__["VentaRentaComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _venta_renta_routing_module__WEBPACK_IMPORTED_MODULE_3__["VentaRentaRoutingModule"]
        ]
    })
], VentaRentaModule);



/***/ })

}]);
//# sourceMappingURL=pages-venta-renta-venta-renta-module-es2015.js.map
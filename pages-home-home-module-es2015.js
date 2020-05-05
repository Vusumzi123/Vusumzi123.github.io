(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/carousel/carousel.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/carousel/carousel.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section carousel-section\">\n    <div class=\"container carousel-container d-flex flex-column justify-content-between align-items-center\">\n        <h1 class=\"text-center carousel-title\">BRINDAMOS PLENA SATISFACCIÓN A NUESTROS CLIENTES</h1>\n        <h2 class=\"h4 light-text carousel-text text-center\">haciendo de sus necesidades las nuestras, para ello, integramos un equipo de profesionales inmobiliarios comprometidos con el cambio y la excelencia.</h2>\n        <div class=\"carousel-element\">\n            <ngb-carousel>\n                <ng-template ngbSlide>\n                    <div class=\"picsum-img-wrapper\">\n                        <img src=\"assets/images/01.png\" alt=\"Random first slide\">\n                        <div class=\"overlay\">&nbsp;</div>\n                    </div>\n                    <div class=\"carousel-caption\">\n                        <h3>First slide label</h3>\n                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\n                    </div>\n                </ng-template>\n                <ng-template ngbSlide>\n                    <div class=\"picsum-img-wrapper\">\n                        <img src=\"assets/images/02.png\" alt=\"Random first slide\">\n                        <div class=\"overlay\">&nbsp;</div>\n                    </div>\n                    <div class=\"carousel-caption\">\n                        <h3>First slide label</h3>\n                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\n                    </div>\n                </ng-template>\n                <ng-template ngbSlide>\n                    <div class=\"picsum-img-wrapper\">\n                        <img src=\"assets/images/03.png\" alt=\"Random first slide\">\n                        <div class=\"overlay\">&nbsp;</div>\n                    </div>\n                    <div class=\"carousel-caption\">\n                        <h3>First slide label</h3>\n                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\n                    </div>\n                </ng-template>\n                <ng-template ngbSlide>\n                    <div class=\"picsum-img-wrapper\">\n                        <img src=\"assets/images/04.png\" alt=\"Random first slide\">\n                        <div class=\"overlay\">&nbsp;</div>\n                    </div>\n                    <div class=\"carousel-caption\">\n                        <h3>First slide label</h3>\n                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\n                    </div>\n                </ng-template>\n            </ngb-carousel>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/description/card/card.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/description/card/card.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"description-card\">\n    <div class=\"card-container d-flex flex-column align-items-center justify-content-between\" (click)=\"onCardClick( cardData.url )\">\n        <div class=\"growing-circle\" [ngClass]=\"cardData.type\">&nbsp;</div>\n        <img [src]=\"cardData.logo\" class=\"logo\" alt=\"icono administracion ksi\">\n        <div class=\"title\">\n            <h1 class=\"h4 text-center\">{{cardData.title}}</h1>\n        </div>\n        <div class=\"body\">\n            <p class=\"text-center\">{{cardData.body}}</p>\n        </div>\n        <div class=\"action\">\n            <button class=\"action-button\" [ngClass]=\"cardData.type\">Visitar</button>\n        </div>\n        <img [src]=\"cardData.icon\" class=\"icon\" alt=\"Administración de Inmuebles icono\">\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/description/description.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/description/description.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section description-section\">\n    <div class=\"container description-text-container\">\n        <p class=\"text-center description-text\">\n            Kapital Soluciones Inmobiliarias es una empresa integral en el sector inmobiliario abarcando sus 3 principales áreas en las cuales somos <br> <span class=\"bold\">#ExpertosInmobiliarios</span> y <span class=\"bold\">#BrindamosSoluciones</span>:\n        </p>\n    </div>\n</div>\n<div class=\"section description-cards\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-6 col-lg-4 mx-auto\" *ngFor=\"let cardData of cardsData\">\n                <app-card [cardData]=\"cardData\"></app-card>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/header/header.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/header/header.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section vh-100 header\">\n    <div class=\"container d-flex flex-column justify-content-center align-items-center header-container\">\n        <img [@startAnimation]=\" isLogoShowing ? 'show' : 'hide'  \" src=\"assets/icons/KSI_Logotipovertical.svg\" alt=\"KSI logo\" class=\"logo\">\n        <h1 [@startAnimation]=\" isSloganShowing ? 'show' : 'hide'  \" class=\"h3 text-center\">una forma diferente de entender los bienes raíces</h1>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<app-description></app-description>\n<app-carousel></app-carousel>");

/***/ }),

/***/ "./src/app/constants/home.constants.ts":
/*!*********************************************!*\
  !*** ./src/app/constants/home.constants.ts ***!
  \*********************************************/
/*! exports provided: servicesEnum, constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "servicesEnum", function() { return servicesEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constants", function() { return constants; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var servicesEnum;
(function (servicesEnum) {
    servicesEnum[servicesEnum["ADMINISTRACION"] = 0] = "ADMINISTRACION";
    servicesEnum[servicesEnum["VENTARENTA"] = 1] = "VENTARENTA";
    servicesEnum[servicesEnum["DESARROLLOS"] = 2] = "DESARROLLOS";
})(servicesEnum || (servicesEnum = {}));
const constants = {
    services: [
        {
            title: 'Administración de Inmuebles',
            body: 'Control estratégico de inmuebles',
            type: 'admin',
            logo: 'assets/icons/KSI_Administracion.svg',
            icon: 'assets/icons/Icono_Administracion.svg',
            url: '/administracion'
        },
        {
            title: 'Venta & Renta',
            body: 'Te ofrecemos el lugar justo para ti',
            type: 'ventarenta',
            logo: 'assets/icons/KSI_Venta&Renta.svg',
            icon: 'assets/icons/Icono_Venta&Renta.svg',
            url: '/venta&renta'
        },
        {
            title: 'Desarrollos Inmobiliarios',
            body: 'Ideas construidas a la vanguardia',
            type: 'desarrollos',
            logo: 'assets/icons/KSI_Desarrollo.svg',
            icon: 'assets/icons/Icono_Desarrollo.svg',
            url: '/desarrollos'
        }
    ]
};


/***/ }),

/***/ "./src/app/pages/home/carousel/carousel.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/home/carousel/carousel.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".carousel-section .carousel-container .carousel-title {\n  font-size: 1.5rem;\n}\n.carousel-section .carousel-container .carousel-element,\n.carousel-section .carousel-container .carousel-text {\n  padding: 1rem;\n  max-width: 800px;\n}\n.overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  opacity: 0.4;\n  background-color: black;\n}\n@media (min-width: 992px) {\n  .carousel-section .carousel-container .carousel-title {\n    font-size: 2.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS92dXN1bXppL0RBVEEvUHJvamVjdHMvQW5ndWxhci9LU0kvS1NJL3NyYy9hcHAvcGFnZXMvaG9tZS9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFUTtFQUNJLGlCQUFBO0FDRFo7QURHUTs7RUFFSSxhQUFBO0VBQ0EsZ0JBQUE7QUNEWjtBRE1BO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUNISjtBRE1BO0VBR1k7SUFDSSxpQkFBQTtFQ0xkO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2Nhcm91c2VsL2Nhcm91c2VsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcm91c2VsLXNlY3Rpb24ge1xuICAgIC5jYXJvdXNlbC1jb250YWluZXIge1xuICAgICAgICAuY2Fyb3VzZWwtdGl0bGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgIH1cbiAgICAgICAgLmNhcm91c2VsLWVsZW1lbnQsXG4gICAgICAgIC5jYXJvdXNlbC10ZXh0IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ub3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB0b3A6IDA7XG4gICAgb3BhY2l0eTogMC40O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAuY2Fyb3VzZWwtc2VjdGlvbiB7XG4gICAgICAgIC5jYXJvdXNlbC1jb250YWluZXIge1xuICAgICAgICAgICAgLmNhcm91c2VsLXRpdGxlIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCIuY2Fyb3VzZWwtc2VjdGlvbiAuY2Fyb3VzZWwtY29udGFpbmVyIC5jYXJvdXNlbC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuLmNhcm91c2VsLXNlY3Rpb24gLmNhcm91c2VsLWNvbnRhaW5lciAuY2Fyb3VzZWwtZWxlbWVudCxcbi5jYXJvdXNlbC1zZWN0aW9uIC5jYXJvdXNlbC1jb250YWluZXIgLmNhcm91c2VsLXRleHQge1xuICBwYWRkaW5nOiAxcmVtO1xuICBtYXgtd2lkdGg6IDgwMHB4O1xufVxuXG4ub3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICBvcGFjaXR5OiAwLjQ7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmNhcm91c2VsLXNlY3Rpb24gLmNhcm91c2VsLWNvbnRhaW5lciAuY2Fyb3VzZWwtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/home/carousel/carousel.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/home/carousel/carousel.component.ts ***!
  \***********************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CarouselComponent = class CarouselComponent {
    constructor() { }
    ngOnInit() {
    }
};
CarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-carousel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./carousel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/carousel/carousel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./carousel.component.scss */ "./src/app/pages/home/carousel/carousel.component.scss")).default]
    })
], CarouselComponent);



/***/ }),

/***/ "./src/app/pages/home/description/card/card.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/home/description/card/card.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".description-card .card-container {\n  min-height: 80vh;\n  margin: 1.2rem;\n  cursor: pointer;\n  overflow: hidden;\n  padding: 2rem;\n}\n.description-card .card-container .growing-circle {\n  border-radius: 50%;\n  opacity: 0.2;\n  position: relative;\n  transform: translateY(18rem) scale(60);\n  width: 4rem;\n  height: 4rem;\n  /* transition: transform 600ms ease-in-out; */\n}\n.description-card .card-container .growing-circle.admin {\n  background-color: #293ea8;\n}\n.description-card .card-container .growing-circle.ventarenta {\n  background-color: #e2771c;\n}\n.description-card .card-container .growing-circle.desarrollos {\n  background-color: #4d8548;\n}\n.description-card .card-container .logo {\n  width: 9rem;\n  position: absolute;\n  top: 0;\n}\n.description-card .card-container .action .action-button {\n  display: block;\n  margin: auto;\n  border: 0;\n  background-color: transparent;\n  font-size: 1.5rem;\n  font-weight: 500;\n}\n.description-card .card-container .action .action-button.admin {\n  color: #293ea8;\n}\n.description-card .card-container .action .action-button.ventarenta {\n  color: #e2771c;\n}\n.description-card .card-container .action .action-button.desarrollos {\n  color: #4d8548;\n}\n.description-card .card-container .icon {\n  width: 50%;\n}\n@media (min-width: 768px) {\n  .description-card {\n    padding: 0.3rem;\n    padding-top: 3rem;\n    margin: 0;\n  }\n  .description-card .card-container {\n    min-height: 430px;\n  }\n  .description-card .card-container:hover .growing-circle {\n    transform: scale(16);\n  }\n  .description-card .card-container:active .growing-circle {\n    opacity: 0.7;\n  }\n  .description-card .card-container:active .action .action-button {\n    color: black !important;\n  }\n  .description-card .card-container .growing-circle {\n    transform: translateY(18rem) scale(0.01);\n    transition: transform 600ms ease-in-out;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS92dXN1bXppL0RBVEEvUHJvamVjdHMvQW5ndWxhci9LU0kvS1NJL3NyYy9hcHAvcGFnZXMvaG9tZS9kZXNjcmlwdGlvbi9jYXJkL2NhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hvbWUvZGVzY3JpcHRpb24vY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ0FSO0FEQ1E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw2Q0FBQTtBQ0NaO0FEQVk7RUFDSSx5QkFBQTtBQ0VoQjtBREFZO0VBQ0kseUJBQUE7QUNFaEI7QURBWTtFQUNJLHlCQUFBO0FDRWhCO0FEQ1E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0FDQ1o7QURFWTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0FoQjtBRENnQjtFQUNJLGNBQUE7QUNDcEI7QURDZ0I7RUFDSSxjQUFBO0FDQ3BCO0FEQ2dCO0VBQ0ksY0FBQTtBQ0NwQjtBREdRO0VBQ0ksVUFBQTtBQ0RaO0FETUE7RUFDSTtJQUNJLGVBQUE7SUFDQSxpQkFBQTtJQUNBLFNBQUE7RUNITjtFRElNO0lBZ0JJLGlCQUFBO0VDakJWO0VER2M7SUFDSSxvQkFBQTtFQ0RsQjtFREtjO0lBQ0ksWUFBQTtFQ0hsQjtFRE1rQjtJQUNJLHVCQUFBO0VDSnRCO0VEU1U7SUFDSSx3Q0FBQTtJQUNBLHVDQUFBO0VDUGQ7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvZGVzY3JpcHRpb24vY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlc2NyaXB0aW9uLWNhcmQge1xuICAgIC5jYXJkLWNvbnRhaW5lciB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDgwdmg7XG4gICAgICAgIG1hcmdpbjogMS4ycmVtO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHBhZGRpbmc6IDJyZW07XG4gICAgICAgIC5ncm93aW5nLWNpcmNsZSB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjI7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMThyZW0pIHNjYWxlKDYwKTtcbiAgICAgICAgICAgIHdpZHRoOiA0cmVtO1xuICAgICAgICAgICAgaGVpZ2h0OiA0cmVtO1xuICAgICAgICAgICAgLyogdHJhbnNpdGlvbjogdHJhbnNmb3JtIDYwMG1zIGVhc2UtaW4tb3V0OyAqL1xuICAgICAgICAgICAgJi5hZG1pbiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI5M2VhODtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICYudmVudGFyZW50YSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UyNzcxYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICYuZGVzYXJyb2xsb3Mge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0ZDg1NDg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmxvZ28ge1xuICAgICAgICAgICAgd2lkdGg6IDlyZW07XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmFjdGlvbiB7XG4gICAgICAgICAgICAuYWN0aW9uLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgICYuYWRtaW4ge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzI5M2VhODtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJi52ZW50YXJlbnRhIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNlMjc3MWM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICYuZGVzYXJyb2xsb3Mge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzRkODU0ODtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgLmRlc2NyaXB0aW9uLWNhcmQge1xuICAgICAgICBwYWRkaW5nOiAwLjNyZW07XG4gICAgICAgIHBhZGRpbmctdG9wOiAzcmVtO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIC5jYXJkLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAuZ3Jvd2luZy1jaXJjbGUge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDE2KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmOmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgLmdyb3dpbmctY2lyY2xlIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuYWN0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgLmFjdGlvbi1idXR0b24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA0MzBweDtcbiAgICAgICAgICAgIC5ncm93aW5nLWNpcmNsZSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE4cmVtKSBzY2FsZSgwLjAxKTtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNjAwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiLmRlc2NyaXB0aW9uLWNhcmQgLmNhcmQtY29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogODB2aDtcbiAgbWFyZ2luOiAxLjJyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMnJlbTtcbn1cbi5kZXNjcmlwdGlvbi1jYXJkIC5jYXJkLWNvbnRhaW5lciAuZ3Jvd2luZy1jaXJjbGUge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG9wYWNpdHk6IDAuMjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMThyZW0pIHNjYWxlKDYwKTtcbiAgd2lkdGg6IDRyZW07XG4gIGhlaWdodDogNHJlbTtcbiAgLyogdHJhbnNpdGlvbjogdHJhbnNmb3JtIDYwMG1zIGVhc2UtaW4tb3V0OyAqL1xufVxuLmRlc2NyaXB0aW9uLWNhcmQgLmNhcmQtY29udGFpbmVyIC5ncm93aW5nLWNpcmNsZS5hZG1pbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOTNlYTg7XG59XG4uZGVzY3JpcHRpb24tY2FyZCAuY2FyZC1jb250YWluZXIgLmdyb3dpbmctY2lyY2xlLnZlbnRhcmVudGEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTI3NzFjO1xufVxuLmRlc2NyaXB0aW9uLWNhcmQgLmNhcmQtY29udGFpbmVyIC5ncm93aW5nLWNpcmNsZS5kZXNhcnJvbGxvcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZDg1NDg7XG59XG4uZGVzY3JpcHRpb24tY2FyZCAuY2FyZC1jb250YWluZXIgLmxvZ28ge1xuICB3aWR0aDogOXJlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG59XG4uZGVzY3JpcHRpb24tY2FyZCAuY2FyZC1jb250YWluZXIgLmFjdGlvbiAuYWN0aW9uLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmRlc2NyaXB0aW9uLWNhcmQgLmNhcmQtY29udGFpbmVyIC5hY3Rpb24gLmFjdGlvbi1idXR0b24uYWRtaW4ge1xuICBjb2xvcjogIzI5M2VhODtcbn1cbi5kZXNjcmlwdGlvbi1jYXJkIC5jYXJkLWNvbnRhaW5lciAuYWN0aW9uIC5hY3Rpb24tYnV0dG9uLnZlbnRhcmVudGEge1xuICBjb2xvcjogI2UyNzcxYztcbn1cbi5kZXNjcmlwdGlvbi1jYXJkIC5jYXJkLWNvbnRhaW5lciAuYWN0aW9uIC5hY3Rpb24tYnV0dG9uLmRlc2Fycm9sbG9zIHtcbiAgY29sb3I6ICM0ZDg1NDg7XG59XG4uZGVzY3JpcHRpb24tY2FyZCAuY2FyZC1jb250YWluZXIgLmljb24ge1xuICB3aWR0aDogNTAlO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmRlc2NyaXB0aW9uLWNhcmQge1xuICAgIHBhZGRpbmc6IDAuM3JlbTtcbiAgICBwYWRkaW5nLXRvcDogM3JlbTtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgLmRlc2NyaXB0aW9uLWNhcmQgLmNhcmQtY29udGFpbmVyIHtcbiAgICBtaW4taGVpZ2h0OiA0MzBweDtcbiAgfVxuICAuZGVzY3JpcHRpb24tY2FyZCAuY2FyZC1jb250YWluZXI6aG92ZXIgLmdyb3dpbmctY2lyY2xlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDE2KTtcbiAgfVxuICAuZGVzY3JpcHRpb24tY2FyZCAuY2FyZC1jb250YWluZXI6YWN0aXZlIC5ncm93aW5nLWNpcmNsZSB7XG4gICAgb3BhY2l0eTogMC43O1xuICB9XG4gIC5kZXNjcmlwdGlvbi1jYXJkIC5jYXJkLWNvbnRhaW5lcjphY3RpdmUgLmFjdGlvbiAuYWN0aW9uLWJ1dHRvbiB7XG4gICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmRlc2NyaXB0aW9uLWNhcmQgLmNhcmQtY29udGFpbmVyIC5ncm93aW5nLWNpcmNsZSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE4cmVtKSBzY2FsZSgwLjAxKTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNjAwbXMgZWFzZS1pbi1vdXQ7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/home/description/card/card.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/home/description/card/card.component.ts ***!
  \***************************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_navigate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/navigate.service */ "./src/app/services/navigate.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let CardComponent = class CardComponent {
    constructor(navigateService) {
        this.navigateService = navigateService;
    }
    ngOnInit() {
    }
    onCardClick(url) {
        console.log(url);
        this.navigateService.navigateByUrl(url);
    }
};
CardComponent.ctorParameters = () => [
    { type: src_app_services_navigate_service__WEBPACK_IMPORTED_MODULE_1__["NavigateService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], CardComponent.prototype, "cardData", void 0);
CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/description/card/card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./card.component.scss */ "./src/app/pages/home/description/card/card.component.scss")).default]
    })
], CardComponent);



/***/ }),

/***/ "./src/app/pages/home/description/description.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/home/description/description.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".description-text-container .description-text {\n  max-width: 630px;\n  margin: auto;\n  margin-top: 3rem;\n  font-size: large;\n  opacity: 0.7;\n}\n.description-text-container .bold {\n  font-weight: bold;\n}\n.description-cards {\n  background-color: #f3f3f3;\n}\n@media (min-width: 992px) {\n  .description-section {\n    height: 30vh;\n  }\n\n  .description-cards {\n    height: 70vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS92dXN1bXppL0RBVEEvUHJvamVjdHMvQW5ndWxhci9LU0kvS1NJL3NyYy9hcHAvcGFnZXMvaG9tZS9kZXNjcmlwdGlvbi9kZXNjcmlwdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS9kZXNjcmlwdGlvbi9kZXNjcmlwdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDQVI7QURFSTtFQUNJLGlCQUFBO0FDQVI7QURJQTtFQUNJLHlCQUFBO0FDREo7QURJQTtFQUNJO0lBQ0ksWUFBQTtFQ0ROOztFREdFO0lBQ0ksWUFBQTtFQ0FOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2Rlc2NyaXB0aW9uL2Rlc2NyaXB0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlc2NyaXB0aW9uLXRleHQtY29udGFpbmVyIHtcbiAgICAuZGVzY3JpcHRpb24tdGV4dCB7XG4gICAgICAgIG1heC13aWR0aDogNjMwcHg7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgbWFyZ2luLXRvcDogM3JlbTtcbiAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICAgICAgb3BhY2l0eTogLjc7XG4gICAgfVxuICAgIC5ib2xkIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxufVxuXG4uZGVzY3JpcHRpb24tY2FyZHMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgIC5kZXNjcmlwdGlvbi1zZWN0aW9uIHtcbiAgICAgICAgaGVpZ2h0OiAzMHZoO1xuICAgIH1cbiAgICAuZGVzY3JpcHRpb24tY2FyZHMge1xuICAgICAgICBoZWlnaHQ6IDcwdmg7XG4gICAgfVxufSIsIi5kZXNjcmlwdGlvbi10ZXh0LWNvbnRhaW5lciAuZGVzY3JpcHRpb24tdGV4dCB7XG4gIG1heC13aWR0aDogNjMwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogM3JlbTtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgb3BhY2l0eTogMC43O1xufVxuLmRlc2NyaXB0aW9uLXRleHQtY29udGFpbmVyIC5ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5kZXNjcmlwdGlvbi1jYXJkcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuZGVzY3JpcHRpb24tc2VjdGlvbiB7XG4gICAgaGVpZ2h0OiAzMHZoO1xuICB9XG5cbiAgLmRlc2NyaXB0aW9uLWNhcmRzIHtcbiAgICBoZWlnaHQ6IDcwdmg7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/home/description/description.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/home/description/description.component.ts ***!
  \*****************************************************************/
/*! exports provided: DescriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescriptionComponent", function() { return DescriptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_constants_home_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/constants/home.constants */ "./src/app/constants/home.constants.ts");



let DescriptionComponent = class DescriptionComponent {
    constructor() {
        this.cardsData = src_app_constants_home_constants__WEBPACK_IMPORTED_MODULE_2__["constants"].services;
    }
    ngOnInit() {
    }
};
DescriptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-description',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./description.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/description/description.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./description.component.scss */ "./src/app/pages/home/description/description.component.scss")).default]
    })
], DescriptionComponent);



/***/ }),

/***/ "./src/app/pages/home/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/home/header/header.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header {\n  background-image: url('buildings-690195.jpg');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.header-container {\n  height: 100%;\n}\n\n.header-container .logo {\n  width: 70%;\n}\n\n@media (min-width: 992px) {\n  .header-container .logo {\n    width: 40%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS92dXN1bXppL0RBVEEvUHJvamVjdHMvQW5ndWxhci9LU0kvS1NJL3NyYy9hcHAvcGFnZXMvaG9tZS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9ob21lL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2Q0FBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtBQ0NKOztBREFJO0VBQ0ksVUFBQTtBQ0VSOztBREVBO0VBRVE7SUFDSSxVQUFBO0VDQVY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChzcmMvYXNzZXRzL2ltYWdlcy9idWlsZGluZ3MtNjkwMTk1LmpwZyk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmhlYWRlci1jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICAubG9nbyB7XG4gICAgICAgIHdpZHRoOiA3MCU7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAuaGVhZGVyLWNvbnRhaW5lciB7XG4gICAgICAgIC5sb2dvIHtcbiAgICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgIH1cbiAgICB9XG59IiwiLmhlYWRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChzcmMvYXNzZXRzL2ltYWdlcy9idWlsZGluZ3MtNjkwMTk1LmpwZyk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmhlYWRlci1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uaGVhZGVyLWNvbnRhaW5lciAubG9nbyB7XG4gIHdpZHRoOiA3MCU7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuaGVhZGVyLWNvbnRhaW5lciAubG9nbyB7XG4gICAgd2lkdGg6IDQwJTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/home/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/home/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");



let HeaderComponent = class HeaderComponent {
    constructor() {
        this.isLogoShowing = false;
        this.isSloganShowing = false;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        setTimeout(ctx => { ctx.isLogoShowing = true; }, 300, this);
        setTimeout((ctx) => { ctx.isSloganShowing = true; }, 1000, this);
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/header/header.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('startAnimation', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    transform: 'scale(1)',
                    opacity: 1
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    transform: 'scale(.4)',
                    opacity: 0
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('show => hide', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('800ms')
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('hide => show', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('800ms')
                ])
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/pages/home/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/pages/home/home-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/pages/home/home.component.ts");




const routes = [{ path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] }];
let HomeRoutingModule = class HomeRoutingModule {
};
HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomeRoutingModule);



/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_scrolltop_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/scrolltop.service */ "./src/app/services/scrolltop.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var src_app_actions_navbar_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/actions/navbar.actions */ "./src/app/actions/navbar.actions.ts");





let HomeComponent = class HomeComponent {
    constructor(store, scrollService) {
        this.store = store;
        this.scrollService = scrollService;
    }
    ngOnInit() {
        const ctx = this;
        setTimeout(this.showNavbar, 2000, ctx);
    }
    ngAfterViewInit() {
        this.scrollService.scroll();
    }
    showNavbar(ctx) {
        ctx.store.dispatch(src_app_actions_navbar_actions__WEBPACK_IMPORTED_MODULE_4__["showNavbar"]());
    }
};
HomeComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
    { type: _services_scrolltop_service__WEBPACK_IMPORTED_MODULE_1__["ScrolltopService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/pages/home/home-routing.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/pages/home/header/header.component.ts");
/* harmony import */ var _description_description_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./description/description.component */ "./src/app/pages/home/description/description.component.ts");
/* harmony import */ var _description_card_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./description/card/card.component */ "./src/app/pages/home/description/card/card.component.ts");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./carousel/carousel.component */ "./src/app/pages/home/carousel/carousel.component.ts");










let HomeModule = class HomeModule {
};
HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _description_description_component__WEBPACK_IMPORTED_MODULE_7__["DescriptionComponent"], _description_card_card_component__WEBPACK_IMPORTED_MODULE_8__["CardComponent"], _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_9__["CarouselComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_4__["HomeRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"]
        ]
    })
], HomeModule);



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module-es2015.js.map
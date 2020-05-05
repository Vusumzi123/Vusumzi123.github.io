function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-administracion-administracion-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/administracion/administracion.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/administracion/administracion.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAdministracionAdministracionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<app-app-info></app-app-info>\n<app-control></app-control>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/administracion/app-info/app-info.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/administracion/app-info/app-info.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAdministracionAppInfoAppInfoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"section app-info-section mt-4\">\n    <div class=\"container app-info-container\">\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <img src=\"assets/images/App_KSI.png\" class=\"mobile-app-img\" alt=\"ksi aplicacion mobil\">\n            </div>\n            <div class=\"col-sm-6 d-flex flex-column justify-content-center app-info-text vh-50\">\n                <h3>Toda la administración en tus manos</h3>\n                <p class=\"text-justify\">\n                    En KSI ponemos a tu servicio nuestra aplicación que facilitara el control administrativo de tu propiedad.\n                </p>\n                <p class=\"text-justify\">\n                    Consulta saldos, realiza pagos, recibe notificaciones y establece canales de comunicación con tus vecinos, todo desde tu dispositivo móvil.\n                </p>\n                <div class=\"store-buttons\">\n                    <a href=\"#\">\n                        <img src=\"assets/icons/App_Store.svg\" alt=\"app store link\">\n                    </a>\n                    <a href=\"#\">\n                        <img src=\"assets/icons/Google_Play.svg\" alt=\"play store link\">\n                    </a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/administracion/control/control.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/administracion/control/control.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAdministracionControlControlComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"section control-section mt-4\">\n    <div class=\"container control-container\">\n        <h1 class=\"h2 text-center\">\n            OFRECEMOS CONTROL <br> ESTRATÉGICO DE LOS INMUEBLES\n        </h1>\n        <p class=\"text-center light-text\">\n            el cual incluye una óptima relación con condóminos y proveedores.\n        </p>\n        <p class=\"text-center light-text\">\n            Asesoramos a nuestros clientes en todas nuestras áreas de especialización:\n        </p>\n        <div class=\"row admin-icons my-5\">\n            <div class=\"col-6 col-sm-3 admin-icons-col mx-auto\" *ngFor=\"let icon of icons\">\n                <img [src]=\"icon.imgPath\" class=\"d-block mx-auto\" alt=\"admin icon\">\n                <p class=\"mx-auto text-center\">{{icon.label}}</p>\n            </div>\n        </div>\n        <div class=\"control-banner row mt-5 shadowed\">\n            <div class=\"col-sm-12 col-md-6 p-5 d-flex flex-column justify-content-center align-items-center\">\n                <p class=\"text-center\">\n                    En KSI contamos con un equipo altamente competitivo que te ayudara a llevar la administración de tu inmueble.\n                </p>\n                <p class=\"text-center\">\n                    Si estas interesado en nuestros servicios, no dudes en comunicarte con nosotros.\n                </p>\n                <a type=\"button\" role=\"button\" (click)=\"onContactarClick()\" class=\"btn btn-lg btn-info btn-round inline-block mx-auto\">Contactar</a>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/administracion/header/header.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/administracion/header/header.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAdministracionHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"section header-section vh-100\">\n    <div class=\"container header-container d-flex flex-column justify-content-center align-items-center h-100\">\n        <div class=\"admin-card text-center\">\n            <p>Kapital Soluciones Inmobiliarias, en beneficio de los condóminos y dueños de inmuebles, nos encargamos de la administración de propiedades como edificios residenciales, condominios, edificios de oficinas, departamentos o cualquier otro inmueble.</p>\n        </div>\n        <a type=\"button\" role=\"button\" (click)=\"onloginPageClick()\" class=\"btn btn-lg btn-info btn-round mx-auto\">Ir al sistema de administración</a>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./src/app/constants/administracion.constants.ts":
  /*!*******************************************************!*\
    !*** ./src/app/constants/administracion.constants.ts ***!
    \*******************************************************/

  /*! exports provided: constants */

  /***/
  function srcAppConstantsAdministracionConstantsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "constants", function () {
      return constants;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var constants = {
      ICONS: [{
        imgPath: 'assets/icons/Icono_Administracion-build.svg',
        label: 'Administración'
      }, {
        imgPath: 'assets/icons/Icono_Materia Legal Condominal.svg',
        label: 'Materia Legal Condominal'
      }, {
        imgPath: 'assets/icons/Icono_Contabilidad y Cobranza.svg',
        label: 'Contabilidad y Cobranza'
      }, {
        imgPath: 'assets/icons/Icono_Recursos Humanos.svg',
        label: 'Recursos Humanos'
      }, {
        imgPath: 'assets/icons/Icono_Mantenimiento.svg',
        label: 'Mantenimiento'
      }, {
        imgPath: 'assets/icons/Icono_Comunicacion.svg',
        label: 'Comunicación'
      }, {
        imgPath: 'assets/icons/Icono_Abastecimiento.svg',
        label: 'Abastecimiento'
      }]
    };
    /***/
  },

  /***/
  "./src/app/pages/administracion/administracion-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/administracion/administracion-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: AdministracionRoutingModule */

  /***/
  function srcAppPagesAdministracionAdministracionRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdministracionRoutingModule", function () {
      return AdministracionRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _administracion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./administracion.component */
    "./src/app/pages/administracion/administracion.component.ts");

    var routes = [{
      path: '',
      component: _administracion_component__WEBPACK_IMPORTED_MODULE_3__["AdministracionComponent"]
    }, {
      path: 'admin-login',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | admin-login-admin-login-module */
        "admin-login-admin-login-module").then(__webpack_require__.bind(null,
        /*! ../admin-login/admin-login.module */
        "./src/app/pages/admin-login/admin-login.module.ts")).then(function (m) {
          return m.AdminLoginModule;
        });
      }
    }];

    var AdministracionRoutingModule = function AdministracionRoutingModule() {
      _classCallCheck(this, AdministracionRoutingModule);
    };

    AdministracionRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AdministracionRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/administracion/administracion.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/pages/administracion/administracion.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAdministracionAdministracionComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluaXN0cmFjaW9uL2FkbWluaXN0cmFjaW9uLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/administracion/administracion.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/pages/administracion/administracion.component.ts ***!
    \******************************************************************/

  /*! exports provided: AdministracionComponent */

  /***/
  function srcAppPagesAdministracionAdministracionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdministracionComponent", function () {
      return AdministracionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdministracionComponent = /*#__PURE__*/function () {
      function AdministracionComponent() {
        _classCallCheck(this, AdministracionComponent);
      }

      _createClass(AdministracionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdministracionComponent;
    }();

    AdministracionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-administracion',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./administracion.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/administracion/administracion.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./administracion.component.scss */
      "./src/app/pages/administracion/administracion.component.scss"))["default"]]
    })], AdministracionComponent);
    /***/
  },

  /***/
  "./src/app/pages/administracion/administracion.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/administracion/administracion.module.ts ***!
    \***************************************************************/

  /*! exports provided: AdministracionModule */

  /***/
  function srcAppPagesAdministracionAdministracionModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdministracionModule", function () {
      return AdministracionModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _administracion_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./administracion-routing.module */
    "./src/app/pages/administracion/administracion-routing.module.ts");
    /* harmony import */


    var _administracion_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./administracion.component */
    "./src/app/pages/administracion/administracion.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/pages/administracion/header/header.component.ts");
    /* harmony import */


    var _app_info_app_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-info/app-info.component */
    "./src/app/pages/administracion/app-info/app-info.component.ts");
    /* harmony import */


    var _control_control_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./control/control.component */
    "./src/app/pages/administracion/control/control.component.ts");

    var AdministracionModule = function AdministracionModule() {
      _classCallCheck(this, AdministracionModule);
    };

    AdministracionModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_administracion_component__WEBPACK_IMPORTED_MODULE_4__["AdministracionComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _app_info_app_info_component__WEBPACK_IMPORTED_MODULE_6__["AppInfoComponent"], _control_control_component__WEBPACK_IMPORTED_MODULE_7__["ControlComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _administracion_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdministracionRoutingModule"]]
    })], AdministracionModule);
    /***/
  },

  /***/
  "./src/app/pages/administracion/app-info/app-info.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/administracion/app-info/app-info.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAdministracionAppInfoAppInfoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".app-info-section {\n  background-image: url('Cenefa.svg');\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n@media (min-width: 1200px) {\n  .app-info-section {\n    background-size: contain;\n  }\n}\n.app-info-section .app-info-container .app-info-text {\n  color: white;\n}\n.app-info-section .app-info-container .app-info-text p {\n  font-size: small;\n}\n@media (min-width: 576px) {\n  .app-info-section .app-info-container .app-info-text p {\n    font-size: medium;\n  }\n}\n.app-info-section .app-info-container .store-buttons a {\n  margin-right: 1.2rem;\n}\n.app-info-section .app-info-container .store-buttons a img {\n  width: 6rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS92dXN1bXppL0RBVEEvUHJvamVjdHMvQW5ndWxhci9LU0kvS1NJL3NyYy9hcHAvcGFnZXMvYWRtaW5pc3RyYWNpb24vYXBwLWluZm8vYXBwLWluZm8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2FkbWluaXN0cmFjaW9uL2FwcC1pbmZvL2FwcC1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUNBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUNDSjtBREFJO0VBTEo7SUFNUSx3QkFBQTtFQ0dOO0FBQ0Y7QUREUTtFQUNJLFlBQUE7QUNHWjtBREZZO0VBQ0ksZ0JBQUE7QUNJaEI7QURIZ0I7RUFGSjtJQUdRLGlCQUFBO0VDTWxCO0FBQ0Y7QURGWTtFQUlJLG9CQUFBO0FDQ2hCO0FESmdCO0VBQ0ksV0FBQTtBQ01wQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluaXN0cmFjaW9uL2FwcC1pbmZvL2FwcC1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1pbmZvLXNlY3Rpb24ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChzcmMvYXNzZXRzL2ltYWdlcy9DZW5lZmEuc3ZnKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIH1cbiAgICAuYXBwLWluZm8tY29udGFpbmVyIHtcbiAgICAgICAgLmFwcC1pbmZvLXRleHQge1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiBzbWFsbDtcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBtZWRpdW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5zdG9yZS1idXR0b25zIHtcbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2cmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEuMnJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCIuYXBwLWluZm8tc2VjdGlvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChzcmMvYXNzZXRzL2ltYWdlcy9DZW5lZmEuc3ZnKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuYXBwLWluZm8tc2VjdGlvbiB7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICB9XG59XG4uYXBwLWluZm8tc2VjdGlvbiAuYXBwLWluZm8tY29udGFpbmVyIC5hcHAtaW5mby10ZXh0IHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmFwcC1pbmZvLXNlY3Rpb24gLmFwcC1pbmZvLWNvbnRhaW5lciAuYXBwLWluZm8tdGV4dCBwIHtcbiAgZm9udC1zaXplOiBzbWFsbDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAuYXBwLWluZm8tc2VjdGlvbiAuYXBwLWluZm8tY29udGFpbmVyIC5hcHAtaW5mby10ZXh0IHAge1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICB9XG59XG4uYXBwLWluZm8tc2VjdGlvbiAuYXBwLWluZm8tY29udGFpbmVyIC5zdG9yZS1idXR0b25zIGEge1xuICBtYXJnaW4tcmlnaHQ6IDEuMnJlbTtcbn1cbi5hcHAtaW5mby1zZWN0aW9uIC5hcHAtaW5mby1jb250YWluZXIgLnN0b3JlLWJ1dHRvbnMgYSBpbWcge1xuICB3aWR0aDogNnJlbTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/administracion/app-info/app-info.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/administracion/app-info/app-info.component.ts ***!
    \*********************************************************************/

  /*! exports provided: AppInfoComponent */

  /***/
  function srcAppPagesAdministracionAppInfoAppInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppInfoComponent", function () {
      return AppInfoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppInfoComponent = /*#__PURE__*/function () {
      function AppInfoComponent() {
        _classCallCheck(this, AppInfoComponent);
      }

      _createClass(AppInfoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AppInfoComponent;
    }();

    AppInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-app-info',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app-info.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/administracion/app-info/app-info.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app-info.component.scss */
      "./src/app/pages/administracion/app-info/app-info.component.scss"))["default"]]
    })], AppInfoComponent);
    /***/
  },

  /***/
  "./src/app/pages/administracion/control/control.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/administracion/control/control.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAdministracionControlControlComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".control-section .control-container p {\n  font-size: medium;\n}\n.control-section .control-container .admin-icons .admin-icons-col img {\n  width: 100px;\n}\n.control-section .control-container .admin-icons .admin-icons-col p {\n  font-size: medium;\n}\n.control-section .control-container .control-banner {\n  background-image: url('Banner-Administracion.png');\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS92dXN1bXppL0RBVEEvUHJvamVjdHMvQW5ndWxhci9LU0kvS1NJL3NyYy9hcHAvcGFnZXMvYWRtaW5pc3RyYWNpb24vY29udHJvbC9jb250cm9sLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9hZG1pbmlzdHJhY2lvbi9jb250cm9sL2NvbnRyb2wuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRVE7RUFDSSxpQkFBQTtBQ0RaO0FES2dCO0VBQ0ksWUFBQTtBQ0hwQjtBREtnQjtFQUNJLGlCQUFBO0FDSHBCO0FET1E7RUFDSSxrREFBQTtBQ0xaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWRtaW5pc3RyYWNpb24vY29udHJvbC9jb250cm9sLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRyb2wtc2VjdGlvbiB7XG4gICAgLmNvbnRyb2wtY29udGFpbmVyIHtcbiAgICAgICAgcCB7XG4gICAgICAgICAgICBmb250LXNpemU6IG1lZGl1bTtcbiAgICAgICAgfVxuICAgICAgICAuYWRtaW4taWNvbnMge1xuICAgICAgICAgICAgLmFkbWluLWljb25zLWNvbCB7XG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBtZWRpdW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5jb250cm9sLWJhbm5lciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoc3JjL2Fzc2V0cy9pbWFnZXMvQmFubmVyLUFkbWluaXN0cmFjaW9uLnBuZyk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiLmNvbnRyb2wtc2VjdGlvbiAuY29udHJvbC1jb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xufVxuLmNvbnRyb2wtc2VjdGlvbiAuY29udHJvbC1jb250YWluZXIgLmFkbWluLWljb25zIC5hZG1pbi1pY29ucy1jb2wgaW1nIHtcbiAgd2lkdGg6IDEwMHB4O1xufVxuLmNvbnRyb2wtc2VjdGlvbiAuY29udHJvbC1jb250YWluZXIgLmFkbWluLWljb25zIC5hZG1pbi1pY29ucy1jb2wgcCB7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xufVxuLmNvbnRyb2wtc2VjdGlvbiAuY29udHJvbC1jb250YWluZXIgLmNvbnRyb2wtYmFubmVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKHNyYy9hc3NldHMvaW1hZ2VzL0Jhbm5lci1BZG1pbmlzdHJhY2lvbi5wbmcpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/administracion/control/control.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/administracion/control/control.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ControlComponent */

  /***/
  function srcAppPagesAdministracionControlControlComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ControlComponent", function () {
      return ControlComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var src_app_services_navigate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/navigate.service */
    "./src/app/services/navigate.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_constants_administracion_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/constants/administracion.constants */
    "./src/app/constants/administracion.constants.ts");
    /* harmony import */


    var src_app_constants_navbar_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/constants/navbar.constants */
    "./src/app/constants/navbar.constants.ts");

    var ControlComponent = /*#__PURE__*/function () {
      function ControlComponent(navigateService) {
        _classCallCheck(this, ControlComponent);

        this.navigateService = navigateService;
        this.icons = src_app_constants_administracion_constants__WEBPACK_IMPORTED_MODULE_3__["constants"].ICONS;
      }

      _createClass(ControlComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onContactarClick",
        value: function onContactarClick() {
          this.navigateService.navigateByUrl(src_app_constants_navbar_constants__WEBPACK_IMPORTED_MODULE_4__["constants"].pages[src_app_constants_navbar_constants__WEBPACK_IMPORTED_MODULE_4__["pages"].CONTACTO].url);
        }
      }]);

      return ControlComponent;
    }();

    ControlComponent.ctorParameters = function () {
      return [{
        type: src_app_services_navigate_service__WEBPACK_IMPORTED_MODULE_1__["NavigateService"]
      }];
    };

    ControlComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-control',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./control.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/administracion/control/control.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./control.component.scss */
      "./src/app/pages/administracion/control/control.component.scss"))["default"]]
    })], ControlComponent);
    /***/
  },

  /***/
  "./src/app/pages/administracion/header/header.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/administracion/header/header.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAdministracionHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header-section {\n  background: url('architecture-1868547.jpg'), radial-gradient(circle, #aaaaaa 0%, #00022ae5 100%);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-blend-mode: soft-light;\n}\n.header-section .header-container .admin-card {\n  width: 80%;\n  padding: 1rem 1rem;\n  margin-bottom: 1rem;\n  border-radius: 10px;\n  font-size: small;\n  background-color: rgba(255, 255, 255, 0.6);\n}\n@media (min-width: 576px) {\n  .header-section .header-container .admin-card {\n    margin-bottom: 4rem;\n    padding: 1rem 2rem;\n  }\n}\n@media (min-width: 768px) {\n  .header-section .header-container .admin-card {\n    font-size: large;\n    padding: 2rem 4rem;\n  }\n}\n.header-section .header-container .btn {\n  font-size: small;\n}\n@media (min-width: 768px) {\n  .header-section .header-container .btn {\n    font-size: large;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS92dXN1bXppL0RBVEEvUHJvamVjdHMvQW5ndWxhci9LU0kvS1NJL3NyYy9hcHAvcGFnZXMvYWRtaW5pc3RyYWNpb24vaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWRtaW5pc3RyYWNpb24vaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdHQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUNBQUE7QUNDSjtBRENRO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMENBQUE7QUNDWjtBREFZO0VBUEo7SUFRUSxtQkFBQTtJQUNBLGtCQUFBO0VDR2Q7QUFDRjtBREZZO0VBWEo7SUFZUSxnQkFBQTtJQUNBLGtCQUFBO0VDS2Q7QUFDRjtBREhRO0VBQ0ksZ0JBQUE7QUNLWjtBREpZO0VBRko7SUFHUSxnQkFBQTtFQ09kO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hZG1pbmlzdHJhY2lvbi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1zZWN0aW9uIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoc3JjL2Fzc2V0cy9pbWFnZXMvYXJjaGl0ZWN0dXJlLTE4Njg1NDcuanBnKSwgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgI2FhYWFhYSAwJSwgIzAwMDIyYWU1IDEwMCUpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBzb2Z0LWxpZ2h0O1xuICAgIC5oZWFkZXItY29udGFpbmVyIHtcbiAgICAgICAgLmFkbWluLWNhcmQge1xuICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMXJlbTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiBzbWFsbDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50aXplKCNmZmZmZmYsIDAuNCk7XG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMnJlbSA0cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5idG4ge1xuICAgICAgICAgICAgZm9udC1zaXplOiBzbWFsbDtcbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiLmhlYWRlci1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogdXJsKHNyYy9hc3NldHMvaW1hZ2VzL2FyY2hpdGVjdHVyZS0xODY4NTQ3LmpwZyksIHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICNhYWFhYWEgMCUsICMwMDAyMmFlNSAxMDAlKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IHNvZnQtbGlnaHQ7XG59XG4uaGVhZGVyLXNlY3Rpb24gLmhlYWRlci1jb250YWluZXIgLmFkbWluLWNhcmQge1xuICB3aWR0aDogODAlO1xuICBwYWRkaW5nOiAxcmVtIDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAuaGVhZGVyLXNlY3Rpb24gLmhlYWRlci1jb250YWluZXIgLmFkbWluLWNhcmQge1xuICAgIG1hcmdpbi1ib3R0b206IDRyZW07XG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmhlYWRlci1zZWN0aW9uIC5oZWFkZXItY29udGFpbmVyIC5hZG1pbi1jYXJkIHtcbiAgICBmb250LXNpemU6IGxhcmdlO1xuICAgIHBhZGRpbmc6IDJyZW0gNHJlbTtcbiAgfVxufVxuLmhlYWRlci1zZWN0aW9uIC5oZWFkZXItY29udGFpbmVyIC5idG4ge1xuICBmb250LXNpemU6IHNtYWxsO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5oZWFkZXItc2VjdGlvbiAuaGVhZGVyLWNvbnRhaW5lciAuYnRuIHtcbiAgICBmb250LXNpemU6IGxhcmdlO1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/administracion/header/header.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/administracion/header/header.component.ts ***!
    \*****************************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppPagesAdministracionHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _shared_modal_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../shared/modal/modal.service */
    "./src/app/shared/modal/modal.service.ts");
    /* harmony import */


    var src_app_services_navigate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/navigate.service */
    "./src/app/services/navigate.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(navigateService, modalService) {
        _classCallCheck(this, HeaderComponent);

        this.navigateService = navigateService;
        this.modalService = modalService;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onloginPageClick",
        value: function onloginPageClick() {
          this.modalService.dialogModal({
            body: "<p class=\"text-center\">Este link te llevar\xE1 a una p\xE1gina externa \xBFDeseas continuar?</p>",
            backdrop: 'static',
            okButtonText: 'Continuar',
            cancelButtonText: 'Regresar',
            title: ' '
          }).then(function () {
            window.open('https://seguro.casandra.com.mx/Login.aspx', '_blank');
          })["catch"](function () {});
          /* window.open('https://seguro.casandra.com.mx/Login.aspx', '_blank'); */
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: src_app_services_navigate_service__WEBPACK_IMPORTED_MODULE_2__["NavigateService"]
      }, {
        type: _shared_modal_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"]
      }];
    };

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/administracion/header/header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/pages/administracion/header/header.component.scss"))["default"]]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/shared/modal/modal.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/shared/modal/modal.service.ts ***!
    \***********************************************/

  /*! exports provided: ModalService */

  /***/
  function srcAppSharedModalModalServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalService", function () {
      return ModalService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./modal.component */
    "./src/app/shared/modal/modal.component.ts");

    var ModalService = /*#__PURE__*/function () {
      function ModalService(modalService) {
        _classCallCheck(this, ModalService);

        this.modalService = modalService;
      }

      _createClass(ModalService, [{
        key: "dialogModal",
        value: function dialogModal(modalData) {
          modalData.dialogSize = modalData.dialogSize || 'sm';
          modalData.autoClose = modalData.autoClose === undefined ? true : modalData.autoClose;
          modalData.isDialogModal = modalData.isDialogModal === undefined ? true : modalData.isDialogModal;
          modalData.title = modalData.title || 'KSI dice.';
          modalData.body = modalData.body || 'este es un modal con contenido predefinido.';
          modalData.okButtonText = modalData.okButtonText || 'Aceptar';
          modalData.cancelButtonText = modalData.cancelButtonText || 'cancelar';
          modalData.backdrop = modalData.backdrop === undefined ? true : modalData.backdrop;
          modalData.scrollable = modalData.scrollable === undefined ? false : modalData.scrollable;
          var propsObj = {
            size: modalData.dialogSize,
            backdrop: modalData.backdrop,
            scrollable: modalData.scrollable
          };
          var modalRef = this.modalService.open(_modal_component__WEBPACK_IMPORTED_MODULE_3__["ModalComponent"], propsObj);
          modalRef.componentInstance.title = modalData.title;
          modalRef.componentInstance.isDialogModal = modalData.isDialogModal;
          modalRef.componentInstance.body = modalData.body;
          modalRef.componentInstance.btnOkText = modalData.okButtonText;
          modalRef.componentInstance.btnCancelText = modalData.cancelButtonText;
          return new Promise(function (resolve, reject) {
            modalRef.componentInstance.acceptEvent.subscribe(function () {
              if (modalData.autoClose) {
                modalRef.close();
              }

              resolve();
            });
            modalRef.componentInstance.declineEvent.subscribe(function () {
              if (modalData.autoClose) {
                modalRef.close();
              }

              reject();
            });
          });
        }
      }]);

      return ModalService;
    }();

    ModalService.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]
      }];
    };

    ModalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], ModalService);
    /***/
  }
}]);
//# sourceMappingURL=pages-administracion-administracion-module-es5.js.map
webpackJsonp([2,4],{

/***/ 348:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 348;


/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(458);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/ivan/edu/KANBAN-2990/kanban-all/kanban-webapp/src/main/development/src/main.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'KanBan 2990';
        this.logo = '/assets/img/kanban.png';
        this.itemObjects1 = [
            { id: 1, name: 'Windstorm' },
            { id: 2, name: 'Bombasto' },
            { id: 3, name: 'Magneta' }
        ];
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(617),
            styles: [__webpack_require__(616)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/home/ivan/edu/KANBAN-2990/kanban-all/kanban-webapp/src/main/development/src/app.component.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap_sortable__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(457);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap_sortable__["a" /* SortableModule */].forRoot()
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/ivan/edu/KANBAN-2990/kanban-all/kanban-webapp/src/main/development/src/app.module.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/ivan/edu/KANBAN-2990/kanban-all/kanban-webapp/src/main/development/src/environment.js.map

/***/ }),

/***/ 616:
/***/ (function(module, exports) {

module.exports = ".kb-header {\n  position: relative;\n  background: -webkit-linear-gradient(left, #294afe, #7d99f1);\n  background: linear-gradient(to right, #294afe, #7d99f1);\n  width: 100%;\n  height: 80px; }\n  .kb-header__title {\n    position: absolute;\n    margin: 0;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    vertical-align: middle;\n    color: #FFFFFF; }\n    .kb-header__title__logo {\n      height: 35px;\n      vertical-align: middle; }\n    .kb-header__title__text {\n      vertical-align: middle; }\n\n.kb-main {\n  width: 100%; }\n  .kb-main .kb-type {\n    width: 300px; }\n    .kb-main .kb-type__list {\n      display: none; }\n      .kb-main .kb-type__list__item {\n        background-color: white;\n        border-collapse: collapse;\n        border-image-outset: 0px;\n        border-image-repeat: stretch;\n        border-image-slice: 100%;\n        border-image-source: none;\n        border-image-width: 1;\n        border-radius: 3px;\n        border: 1px solid #cccccc;\n        box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 3px 0px;\n        box-sizing: border-box;\n        color: #444444;\n        cursor: default;\n        display: inline-block;\n        font-size: 12px;\n        height: 75px;\n        left: 0px;\n        max-width: 100%;\n        min-width: 100%;\n        padding: 8px 8px 8px 12px;\n        position: relative;\n        top: 0px;\n        -webkit-transition-delay: 0s;\n                transition-delay: 0s;\n        -webkit-transition-duration: 0.3s;\n                transition-duration: 0.3s;\n        -webkit-transition-property: height;\n        transition-property: height;\n        -webkit-transition-timing-function: linear;\n                transition-timing-function: linear;\n        width: 290px; }\n"

/***/ }),

/***/ 617:
/***/ (function(module, exports) {

module.exports = "<template #itemTemplate let-item=\"item\" let-index=\"index\">{{index}}: {{item.value.name}}</template>\n\n<header class=\"kb-header\">\n  <h1 class=\"kb-header__title\">\n    <img src=\"{{logo}}\" class=\"kb-header__title__logo\"/>\n    <span class=\"kb-header__title__text\">{{title}}</span>\n  </h1>\n</header>\n<main class=\"kb-main\">\n  <div class=\"kb-type\">\n    <h2 class=\"kb-type__title\">Имя типа</h2>\n    <bs-sortable\n      [(ngModel)]=\"itemObjects1\"\n      [itemTemplate]=\"itemTemplate\"\n      itemClass=\"kb-type__list__item\"\n      itemActiveClass=\"sortable-item-active\"\n      placeholderItem=\"Переместите сюда\"\n      placeholderClass=\"placeholderStyle\"\n      wrapperClass=\"kb-type__list\"\n    ></bs-sortable>\n  </div>\n</main>\n<footer class=\"kb-footer\">\n\n</footer>\n\n\n"

/***/ }),

/***/ 632:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(349);


/***/ })

},[632]);
//# sourceMappingURL=main.bundle.map
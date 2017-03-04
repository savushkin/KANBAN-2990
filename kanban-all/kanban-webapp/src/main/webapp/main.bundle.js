webpackJsonp([1,4],{

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false,
    host: 'http://localhost:8080/',
    context: 'rest/',
    links: '',
    kanbanUsers: {
        all: 'kanbanUsers/',
        create: 'kanbanUsers/',
        one: 'kanbanUsers/',
        update: 'kanbanUsers/',
        delete: 'kanbanUsers/'
    }
};
//# sourceMappingURL=/home/ivan/edu/KANBAN-2990/kanban-all/kanban-webapp/src/main/development/src/environment.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(201);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpService = (function () {
    function HttpService(http) {
        this.http = http;
        this.host = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].host;
        this.context = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].context;
    }
    HttpService.prototype.get = function (route, options) {
        return this.http.get(this.host + this.context + route, options);
    };
    HttpService.prototype.put = function (route, body, options) {
        return this.http.put(this.host + this.context + route, body, options);
    };
    HttpService.prototype.post = function (route, body, options) {
        return this.http.post(this.host + this.context + route, body, options);
    };
    HttpService.prototype.patch = function (route, body, options) {
        return this.http.patch(this.host + this.context + route, body, options);
    };
    HttpService.prototype.remove = function (route, options) {
        return this.http.delete(this.host + this.context + route, options);
    };
    HttpService.prototype.head = function (route, options) {
        return this.http.head(this.host + this.context + route, options);
    };
    HttpService.prototype.options = function (route, options) {
        return this.http.options(this.host + this.context + route, options);
    };
    HttpService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], HttpService);
    return HttpService;
    var _a;
}());
//# sourceMappingURL=/home/ivan/edu/KANBAN-2990/kanban-all/kanban-webapp/src/main/development/src/http.service.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_service__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(201);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KanbanUserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var KanbanUserService = (function () {
    function KanbanUserService(httpService) {
        this.httpService = httpService;
    }
    KanbanUserService.prototype.getPage = function (page, size, sort) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* URLSearchParams */]();
        params.set('page', page.toString());
        params.set('size', size.toString());
        if (sort)
            params.set('sort', sort);
        return this.httpService.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].kanbanUsers.all, { search: params });
    };
    KanbanUserService.prototype.create = function (kanbanUser) {
        return this.httpService.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].kanbanUsers.create, kanbanUser, {});
    };
    KanbanUserService.prototype.one = function (id) {
        return this.httpService.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].kanbanUsers.one + id.toString(), {});
    };
    KanbanUserService.prototype.update = function (id, kanbanUser) {
        return this.httpService.put(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].kanbanUsers.update + id.toString(), kanbanUser, {});
    };
    KanbanUserService.prototype.remove = function (id) {
        return this.httpService.put(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].kanbanUsers.delete + id.toString(), {});
    };
    KanbanUserService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */]) === 'function' && _a) || Object])
    ], KanbanUserService);
    return KanbanUserService;
    var _a;
}());
//# sourceMappingURL=/home/ivan/edu/KANBAN-2990/kanban-all/kanban-webapp/src/main/development/src/kanban-user.service.js.map

/***/ }),

/***/ 351:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 351;


/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(462);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/ivan/edu/KANBAN-2990/kanban-all/kanban-webapp/src/main/development/src/main.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BoardComponent = (function () {
    function BoardComponent() {
    }
    BoardComponent.prototype.ngOnInit = function () {
    };
    BoardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-board',
            template: __webpack_require__(621),
            styles: [__webpack_require__(618)]
        }), 
        __metadata('design:paramtypes', [])
    ], BoardComponent);
    return BoardComponent;
}());
//# sourceMappingURL=/home/ivan/edu/KANBAN-2990/kanban-all/kanban-webapp/src/main/development/src/board.component.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
        this.title = 'KanBan 2990';
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__(622),
            styles: [__webpack_require__(619)]
        }), 
        __metadata('design:paramtypes', [])
    ], NavbarComponent);
    return NavbarComponent;
}());
//# sourceMappingURL=/home/ivan/edu/KANBAN-2990/kanban-all/kanban-webapp/src/main/development/src/navbar.component.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_kanban_user_service__ = __webpack_require__(305);
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
    function AppComponent(kanbanUserService) {
        this.kanbanUserService = kanbanUserService;
        // let kanbanUser = new KanbanUser;
        // kanbanUser.firstName = 'firstName';
        // kanbanUser.lastName = 'lastName';
        // kanbanUser.secondName = 'secondName';
        // kanbanUser.username = 'mishka1';
        //
        // this.kanbanUserService.create(kanbanUser).subscribe(resp => {
        //   console.log(resp);
        // })
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(623),
            styles: [__webpack_require__(620)],
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__service_kanban_user_service__["a" /* KanbanUserService */]
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_kanban_user_service__["a" /* KanbanUserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_kanban_user_service__["a" /* KanbanUserService */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=/home/ivan/edu/KANBAN-2990/kanban-all/kanban-webapp/src/main/development/src/app.component.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap_sortable__ = __webpack_require__(615);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__component_navbar_navbar_component__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_http_service__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_kanban_user_service__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__component_board_board_component__ = __webpack_require__(459);
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
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__component_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_9__component_board_board_component__["a" /* BoardComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap_sortable__["a" /* SortableModule */].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__service_http_service__["a" /* HttpService */],
                __WEBPACK_IMPORTED_MODULE_8__service_kanban_user_service__["a" /* KanbanUserService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/ivan/edu/KANBAN-2990/kanban-all/kanban-webapp/src/main/development/src/app.module.js.map

/***/ }),

/***/ 618:
/***/ (function(module, exports) {

module.exports = "app-board {\n  padding-top: 56px;\n  display: block; }\n"

/***/ }),

/***/ 619:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 620:
/***/ (function(module, exports) {

module.exports = ".kb-main {\n  width: 100%; }\n  .kb-main .kb-type {\n    width: 300px; }\n    .kb-main .kb-type__list {\n      display: none; }\n      .kb-main .kb-type__list__item {\n        background-color: white;\n        border-collapse: collapse;\n        border-image-outset: 0px;\n        border-image-repeat: stretch;\n        border-image-slice: 100%;\n        border-image-source: none;\n        border-image-width: 1;\n        border-radius: 3px;\n        border: 1px solid #cccccc;\n        box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 3px 0px;\n        box-sizing: border-box;\n        color: #444444;\n        cursor: default;\n        display: inline-block;\n        font-size: 12px;\n        height: 75px;\n        left: 0px;\n        max-width: 100%;\n        min-width: 100%;\n        padding: 8px 8px 8px 12px;\n        position: relative;\n        top: 0px;\n        -webkit-transition-delay: 0s;\n                transition-delay: 0s;\n        -webkit-transition-duration: 0.3s;\n                transition-duration: 0.3s;\n        -webkit-transition-property: height;\n        transition-property: height;\n        -webkit-transition-timing-function: linear;\n                transition-timing-function: linear;\n        width: 290px; }\n"

/***/ }),

/***/ 621:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"panel panel-primary kanban-col\">\n    <div class=\"panel-heading\">\n      TODO\n      <i class=\"fa fa-2x fa-plus-circle pull-right\"></i>\n    </div>\n    <div class=\"panel-body\">\n      <div id=\"TODO\" class=\"kanban-centered\">\n\n        <article class=\"kanban-entry grab\" id=\"item1\" draggable=\"true\">\n          <div class=\"kanban-entry-inner\">\n            <div class=\"kanban-label\">\n              <h2><a href=\"#\">Art Ramadani</a> <span>posted a status update</span></h2>\n              <p>Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.</p>\n            </div>\n          </div>\n        </article>\n\n        <article class=\"kanban-entry grab\" id=\"item2\" draggable=\"true\">\n          <div class=\"kanban-entry-inner\">\n            <div class=\"kanban-label\">\n              <h2><a href=\"#\">Job Meeting</a></h2>\n              <p>You have a meeting at <strong>Laborator Office</strong> Today.</p>\n            </div>\n          </div>\n        </article>\n\n        <article class=\"kanban-entry grab\" id=\"item3\" draggable=\"true\">\n          <div class=\"kanban-entry-inner\">\n            <div class=\"kanban-label\">\n              <h2><a href=\"#\">Arlind Nushi</a> <span>checked in at</span> <a href=\"#\">Laborator</a></h2>\n\n              <blockquote>Great place, feeling like in home.</blockquote>\n\n              <div id=\"sample-checkin\" class=\"map-checkin\" style=\"height: 170px; width: 100%; position: relative; background-color: rgb(229, 227, 223); overflow: hidden; -webkit-transform: translateZ(0);\"><div class=\"gm-style\" style=\"position: absolute; left: 0px; top: 0px; overflow: hidden; width: 100%; height: 100%; z-index: 0;\"><div style=\"position: absolute; left: 0px; top: 0px; overflow: hidden; width: 100%; height: 100%; z-index: 0;\"><div style=\"position: absolute; left: 0px; top: 0px; z-index: 1; width: 100%; cursor: url(http://maps.gstatic.com/mapfiles/openhand_8_8.cur) 8 8, default; -webkit-transform-origin: 0px 0px; -webkit-transform: matrix(1, 0, 0, 1, 0, 0);\"><div style=\"-webkit-transform: translateZ(0); position: absolute; left: 0px; top: 0px; width: 100%; z-index: 200;\"><div style=\"-webkit-transform: translateZ(0); position: absolute; left: 0px; top: 0px; z-index: 101; width: 100%;\"></div></div><div style=\"-webkit-transform: translateZ(0); position: absolute; left: 0px; top: 0px; width: 100%; z-index: 201;\"><div style=\"-webkit-transform: translateZ(0); position: absolute; left: 0px; top: 0px; z-index: 102; width: 100%;\"></div><div style=\"-webkit-transform: translateZ(0); position: absolute; left: 0px; top: 0px; z-index: 103; width: 100%;\"><div style=\"position: absolute; left: 0px; top: 0px; z-index: -1;\"><div style=\"position: absolute; left: 0px; top: 0px; z-index: 1;\"><div style=\"width: 256px; height: 256px; overflow: hidden; -webkit-transform: translateZ(0); position: absolute; left: 72px; top: -176px;\"><canvas draggable=\"false\" height=\"256\" width=\"256\" style=\"-webkit-user-select: none; position: absolute; left: 0px; top: 0px; height: 256px; width: 256px;\"></canvas></div><div style=\"width: 256px; height: 256px; overflow: hidden; -webkit-transform: translateZ(0); position: absolute; left: 72px; top: 80px;\"></div><div style=\"width: 256px; height: 256px; overflow: hidden; -webkit-transform: translateZ(0); position: absolute; left: -184px; top: -176px;\"></div><div style=\"width: 256px; height: 256px; overflow: hidden; -webkit-transform: translateZ(0); position: absolute; left: -184px; top: 80px;\"></div><div style=\"width: 256px; height: 256px; overflow: hidden; -webkit-transform: translateZ(0); position: absolute; left: 328px; top: -176px;\"></div><div style=\"width: 256px; height: 256px; overflow: hidden; -webkit-transform: translateZ(0); position: absolute; left: 328px; top: 80px;\"></div></div></div></div></div><div style=\"-webkit-transform: translateZ(0); position: absolute; left: 0px; top: 0px; width: 100%; z-index: 202;\"><div style=\"-webkit-transform: translateZ(0); position: absolute; left: 0px; top: 0px; z-index: 104; width: 100%;\"></div><div style=\"-webkit-transform: translateZ(0); position: absolute; left: 0px; top: 0px; z-index: 105; width: 100%;\"></div><div style=\"-webkit-transform: translateZ(0); position: absolute; left: 0px; top: 0px; z-index: 106; width: 100%;\"></div></div><div style=\"-webkit-transform: translateZ(0); position: absolute; left: 0px; top: 0px; z-index: 100; width: 100%;\"><div style=\"position: absolute; left: 0px; top: 0px; z-index: 0;\"><div style=\"position: absolute; left: 0px; top: 0px; z-index: 1;\"><div style=\"width: 256px; height: 256px; -webkit-transform: translateZ(0); position: absolute; left: 72px; top: -176px;\"></div><div style=\"width: 256px; height: 256px; -webkit-transform: translateZ(0); position: absolute; left: 72px; top: 80px;\"></div><div style=\"width: 256px; height: 256px; -webkit-transform: translateZ(0); position: absolute; left: -184px; top: -176px;\"></div><div style=\"width: 256px; height: 256px; -webkit-transform: translateZ(0); position: absolute; left: -184px; top: 80px;\"></div><div style=\"width: 256px; height: 256px; -webkit-transform: translateZ(0); position: absolute; left: 328px; top: -176px;\"></div><div style=\"width: 256px; height: 256px; -webkit-transform: translateZ(0); position: absolute; left: 328px; top: 80px;\"></div></div></div></div><div style=\"position: absolute; z-index: 0; left: 0px; top: 0px;\"><div style=\"overflow: hidden; width: 431px; height: 170px;\"><img src=\"http://maps.googleapis.com/maps/api/js/StaticMapService.GetMapImage?1m2&1i701363&2i1636267&2e1&3u14&4m2&1u431&2u170&5m4&1e0&5spt-BR&6sus&10b1&token=8503\" style=\"width: 421px; height: 160px;\"></div></div><div style=\"position: absolute; left: 0px; top: 0px; z-index: 0;\"><div style=\"position: absolute; left: 0px; top: 0px; z-index: 1;\"><div style=\"width: 256px; height: 256px; -webkit-transform: translateZ(0); position: absolute; left: 72px; top: -176px; opacity: 1; transition: opacity 200ms ease-out; -webkit-transition: opacity 200ms ease-out;\"><img src=\"http://mt0.googleapis.com/vt?lyrs=m@248313357&src=apiv3&hl=pt-BR&x=2740&y=6391&z=14&style=47,37%7Csmartmaps\" draggable=\"false\" style=\"width: 256px; height: 256px; -webkit-user-select: none; border: 0px; padding: 0px; margin: 0px; -webkit-transform: translateZ(0);\"></div><div style=\"width: 256px; height: 256px; -webkit-transform: translateZ(0); position: absolute; left: 72px; top: 80px; opacity: 1; transition: opacity 200ms ease-out; -webkit-transition: opacity 200ms ease-out;\"><img src=\"http://mt0.googleapis.com/vt?lyrs=m@248254527&src=apiv3&hl=pt-BR&x=2740&y=6392&z=14&style=47,37%7Csmartmaps\" draggable=\"false\" style=\"width: 256px; height: 256px; -webkit-user-select: none; border: 0px; padding: 0px; margin: 0px; -webkit-transform: translateZ(0);\"></div><div style=\"width: 256px; height: 256px; -webkit-transform: translateZ(0); position: absolute; left: -184px; top: -176px; opacity: 1; transition: opacity 200ms ease-out; -webkit-transition: opacity 200ms ease-out;\"><img src=\"http://mt1.googleapis.com/vt?lyrs=m@248282439&src=apiv3&hl=pt-BR&x=2739&y=6391&z=14&style=47,37%7Csmartmaps\" draggable=\"false\" style=\"width: 256px; height: 256px; -webkit-user-select: none; border: 0px; padding: 0px; margin: 0px; -webkit-transform: translateZ(0);\"></div><div style=\"width: 256px; height: 256px; -webkit-transform: translateZ(0); position: absolute; left: -184px; top: 80px; opacity: 1; transition: opacity 200ms ease-out; -webkit-transition: opacity 200ms ease-out;\"><img src=\"http://mt1.googleapis.com/vt?lyrs=m@248011677&src=apiv3&hl=pt-BR&x=2739&y=6392&z=14&style=47,37%7Csmartmaps\" draggable=\"false\" style=\"width: 256px; height: 256px; -webkit-user-select: none; border: 0px; padding: 0px; margin: 0px; -webkit-transform: translateZ(0);\"></div><div style=\"width: 256px; height: 256px; -webkit-transform: translateZ(0); position: absolute; left: 328px; top: -176px; opacity: 1; transition: opacity 200ms ease-out; -webkit-transition: opacity 200ms ease-out;\"><img src=\"http://mt1.googleapis.com/vt?lyrs=m@248301220&src=apiv3&hl=pt-BR&x=2741&y=6391&z=14&style=47,37%7Csmartmaps\" draggable=\"false\" style=\"width: 256px; height: 256px; -webkit-user-select: none; border: 0px; padding: 0px; margin: 0px; -webkit-transform: translateZ(0);\"></div><div style=\"width: 256px; height: 256px; -webkit-transform: translateZ(0); position: absolute; left: 328px; top: 80px; opacity: 1; transition: opacity 200ms ease-out; -webkit-transition: opacity 200ms ease-out;\"><img src=\"http://mt1.googleapis.com/vt?lyrs=m@248301220&src=apiv3&hl=pt-BR&x=2741&y=6392&z=14&style=47,37%7Csmartmaps\" draggable=\"false\" style=\"width: 256px; height: 256px; -webkit-user-select: none; border: 0px; padding: 0px; margin: 0px; -webkit-transform: translateZ(0);\"></div></div></div></div></div><div style=\"margin-left: 5px; margin-right: 5px; z-index: 1000000; position: absolute; left: 0px; bottom: 0px;\"><a target=\"_blank\" href=\"http://maps.google.com/maps?ll=36.738888,-119.783013&z=14&t=m&hl=pt-BR&gl=US&mapclient=apiv3\" title=\"Clique para ver esta área no Google Maps\" style=\"position: static; overflow: visible; float: none; display: inline;\"><div style=\"width: 62px; height: 26px; cursor: pointer;\"><img src=\"http://maps.gstatic.com/mapfiles/api-3/images/google_white2.png\" draggable=\"false\" style=\"position: absolute; left: 0px; top: 0px; width: 62px; height: 26px; -webkit-user-select: none; border: 0px; padding: 0px; margin: 0px;\"></div></a></div><div class=\"gmnoprint\" style=\"z-index: 1000001; position: absolute; right: 192px; bottom: 0px; width: 85px;\"><div draggable=\"false\" class=\"gm-style-cc\" style=\"-webkit-user-select: none;\"><div style=\"opacity: 0.7; width: 100%; height: 100%; position: absolute;\"><div style=\"width: 1px;\"></div><div style=\"background-color: rgb(245, 245, 245); width: auto; height: 100%; margin-left: 1px;\"></div></div><div style=\"position: relative; padding-right: 6px; padding-left: 6px; font-family: Roboto, Arial, sans-serif; font-size: 10px; color: rgb(68, 68, 68); white-space: nowrap; direction: ltr; text-align: right;\"><a style=\"color: rgb(68, 68, 68); text-decoration: none; cursor: pointer;\">Dados do mapa</a><span style=\"display: none;\">Dados cartográficos ©2014 Google</span></div></div></div><div style=\"background-color: white; padding: 15px 21px; border: 1px solid rgb(171, 171, 171); font-family: Roboto, Arial, sans-serif; color: rgb(34, 34, 34); -webkit-box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 16px; box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 16px; z-index: 10000002; display: none; width: 256px; height: 118px; position: absolute; left: 61px; top: 5px;\"><div style=\"padding: 0px 0px 10px; font-size: 16px;\">Dados do mapa</div><div style=\"font-size: 13px;\">Dados cartográficos ©2014 Google</div><div style=\"width: 13px; height: 13px; overflow: hidden; position: absolute; opacity: 0.7; right: 12px; top: 12px; z-index: 10000; cursor: pointer;\"><img src=\"http://maps.gstatic.com/mapfiles/api-3/images/mapcnt3.png\" draggable=\"false\" style=\"position: absolute; left: -2px; top: -336px; width: 59px; height: 492px; -webkit-user-select: none; border: 0px; padding: 0px; margin: 0px;\"></div></div><div class=\"gmnoscreen\" style=\"position: absolute; right: 0px; bottom: 0px;\"><div style=\"font-family: Roboto, Arial, sans-serif; font-size: 11px; color: rgb(68, 68, 68); direction: ltr; text-align: right; background-color: rgb(245, 245, 245);\">Dados cartográficos ©2014 Google</div></div><div class=\"gmnoprint gm-style-cc\" draggable=\"false\" style=\"z-index: 1000001; position: absolute; -webkit-user-select: none; right: 113px; bottom: 0px;\"><div style=\"opacity: 0.7; width: 100%; height: 100%; position: absolute;\"><div style=\"width: 1px;\"></div><div style=\"background-color: rgb(245, 245, 245); width: auto; height: 100%; margin-left: 1px;\"></div></div><div style=\"position: relative; padding-right: 6px; padding-left: 6px; font-family: Roboto, Arial, sans-serif; font-size: 10px; color: rgb(68, 68, 68); white-space: nowrap; direction: ltr; text-align: right;\"><a href=\"http://www.google.com/intl/pt-BR_US/help/terms_maps.html\" target=\"_blank\" style=\"text-decoration: none; cursor: pointer; color: rgb(68, 68, 68);\">Termos de Uso</a></div></div><div draggable=\"false\" class=\"gm-style-cc\" style=\"-webkit-user-select: none; position: absolute; right: 0px; bottom: 0px;\"><div style=\"opacity: 0.7; width: 100%; height: 100%; position: absolute;\"><div style=\"width: 1px;\"></div><div style=\"background-color: rgb(245, 245, 245); width: auto; height: 100%; margin-left: 1px;\"></div></div><div style=\"position: relative; padding-right: 6px; padding-left: 6px; font-family: Roboto, Arial, sans-serif; font-size: 10px; color: rgb(68, 68, 68); white-space: nowrap; direction: ltr; text-align: right;\"><a target=\"_new\" title=\"Informar erros no mapa ou nas imagens para o Google\" href=\"http://maps.google.com/maps?ll=36.738888,-119.783013&z=14&t=m&hl=pt-BR&gl=US&mapclient=apiv3&skstate=action:mps_dialog$apiref:1&output=classic\" style=\"font-family: Roboto, Arial, sans-serif; font-size: 10px; color: rgb(68, 68, 68); text-decoration: none; position: relative;\">Informar erro no mapa</a></div></div><div class=\"gmnoprint\" draggable=\"false\" controlwidth=\"32\" controlheight=\"84\" style=\"margin: 5px; -webkit-user-select: none; position: absolute; left: 0px; top: 0px;\"><div controlwidth=\"32\" controlheight=\"40\" style=\"cursor: url(http://maps.gstatic.com/mapfiles/openhand_8_8.cur) 8 8, default; position: absolute; left: 0px; top: 0px;\"><div style=\"width: 32px; height: 40px; overflow: hidden; position: absolute; left: 0px; top: 0px;\"><img src=\"http://maps.gstatic.com/mapfiles/api-3/images/cb_scout2.png\" draggable=\"false\" style=\"position: absolute; left: -9px; top: -102px; width: 1028px; height: 214px; -webkit-user-select: none; border: 0px; padding: 0px; margin: 0px;\"></div><div style=\"width: 32px; height: 40px; overflow: hidden; position: absolute; left: 0px; top: 0px; visibility: hidden;\"><img src=\"http://maps.gstatic.com/mapfiles/api-3/images/cb_scout2.png\" draggable=\"false\" style=\"position: absolute; left: -107px; top: -102px; width: 1028px; height: 214px; -webkit-user-select: none; border: 0px; padding: 0px; margin: 0px;\"></div><div style=\"width: 32px; height: 40px; overflow: hidden; position: absolute; left: 0px; top: 0px; visibility: hidden;\"><img src=\"http://maps.gstatic.com/mapfiles/api-3/images/cb_scout2.png\" draggable=\"false\" style=\"position: absolute; left: -58px; top: -102px; width: 1028px; height: 214px; -webkit-user-select: none; border: 0px; padding: 0px; margin: 0px;\"></div><div style=\"width: 32px; height: 40px; overflow: hidden; position: absolute; left: 0px; top: 0px; visibility: hidden;\"><img src=\"http://maps.gstatic.com/mapfiles/api-3/images/cb_scout2.png\" draggable=\"false\" style=\"position: absolute; left: -205px; top: -102px; width: 1028px; height: 214px; -webkit-user-select: none; border: 0px; padding: 0px; margin: 0px;\"></div></div><div class=\"gmnoprint\" controlwidth=\"0\" controlheight=\"0\" style=\"opacity: 0.6; display: none; position: absolute;\"><div title=\"Girar o mapa em 90 graus\" style=\"width: 22px; height: 22px; overflow: hidden; position: absolute; cursor: pointer;\"><img src=\"http://maps.gstatic.com/mapfiles/api-3/images/mapcnt3.png\" draggable=\"false\" style=\"position: absolute; left: -38px; top: -360px; width: 59px; height: 492px; -webkit-user-select: none; border: 0px; padding: 0px; margin: 0px;\"></div></div><div class=\"gmnoprint\" controlwidth=\"20\" controlheight=\"39\" style=\"position: absolute; left: 6px; top: 45px;\"><div style=\"width: 20px; height: 39px; overflow: hidden; position: absolute;\"><img src=\"http://maps.gstatic.com/mapfiles/api-3/images/mapcnt3.png\" draggable=\"false\" style=\"position: absolute; left: -39px; top: -401px; width: 59px; height: 492px; -webkit-user-select: none; border: 0px; padding: 0px; margin: 0px;\"></div><div title=\"Aumentar o zoom\" style=\"position: absolute; left: 0px; top: 2px; width: 20px; height: 17px; cursor: pointer;\"></div><div title=\"Diminuir o zoom\" style=\"position: absolute; left: 0px; top: 19px; width: 20px; height: 17px; cursor: pointer;\"></div></div></div><div class=\"gmnoprint\" style=\"margin: 5px; z-index: 0; position: absolute; cursor: pointer; right: 0px; top: 0px;\"><div class=\"gm-style-mtc\" style=\"float: left;\"><div draggable=\"false\" title=\"Mostrar mapa de ruas\" style=\"direction: ltr; overflow: hidden; text-align: center; position: relative; color: rgb(0, 0, 0); font-family: Roboto, Arial, sans-serif; -webkit-user-select: none; font-size: 11px; background-color: rgb(255, 255, 255); padding: 1px 6px; border-bottom-left-radius: 2px; border-top-left-radius: 2px; -webkit-background-clip: padding-box; background-clip: padding-box; border: 1px solid rgba(0, 0, 0, 0.14902); -webkit-box-shadow: rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px; box-shadow: rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px; min-width: 28px; font-weight: 500;\">Mapa</div><div style=\"background-color: white; z-index: -1; padding-top: 2px; -webkit-background-clip: padding-box; background-clip: padding-box; border-width: 0px 1px 1px; border-right-style: solid; border-bottom-style: solid; border-left-style: solid; border-right-color: rgba(0, 0, 0, 0.14902); border-bottom-color: rgba(0, 0, 0, 0.14902); border-left-color: rgba(0, 0, 0, 0.14902); -webkit-box-shadow: rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px; box-shadow: rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px; position: absolute; left: 0px; top: 19px; text-align: left; display: none;\"><div draggable=\"false\" title=\"Mostrar mapa de ruas com terreno\" style=\"color: rgb(0, 0, 0); font-family: Roboto, Arial, sans-serif; -webkit-user-select: none; font-size: 11px; background-color: rgb(255, 255, 255); padding: 3px 8px 3px 5px; direction: ltr; text-align: left; white-space: nowrap;\"><span role=\"checkbox\" style=\"box-sizing: border-box; position: relative; line-height: 0; font-size: 0px; margin: 0px 5px 0px 0px; display: inline-block; background-color: rgb(255, 255, 255); border: 1px solid rgb(198, 198, 198); border-top-left-radius: 1px; border-top-right-radius: 1px; border-bottom-right-radius: 1px; border-bottom-left-radius: 1px; width: 13px; height: 13px; vertical-align: middle;\"><div style=\"position: absolute; left: 1px; top: -2px; width: 13px; height: 11px; overflow: hidden; display: none;\"><img src=\"http://maps.gstatic.com/mapfiles/mv/imgs8.png\" draggable=\"false\" style=\"position: absolute; left: -52px; top: -44px; -webkit-user-select: none; border: 0px; padding: 0px; margin: 0px; width: 68px; height: 67px;\"></div></span><label style=\"vertical-align: middle; cursor: pointer;\">Terreno</label></div></div></div><div class=\"gm-style-mtc\" style=\"float: left;\"><div draggable=\"false\" title=\"Mostrar imagens de satélite\" style=\"direction: ltr; overflow: hidden; text-align: center; position: relative; color: rgb(86, 86, 86); font-family: Roboto, Arial, sans-serif; -webkit-user-select: none; font-size: 11px; background-color: rgb(255, 255, 255); padding: 1px 6px; border-bottom-right-radius: 2px; border-top-right-radius: 2px; -webkit-background-clip: padding-box; background-clip: padding-box; border-width: 1px 1px 1px 0px; border-top-style: solid; border-right-style: solid; border-bottom-style: solid; border-top-color: rgba(0, 0, 0, 0.14902); border-right-color: rgba(0, 0, 0, 0.14902); border-bottom-color: rgba(0, 0, 0, 0.14902); -webkit-box-shadow: rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px; box-shadow: rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px; min-width: 36px;\">Satélite</div><div style=\"background-color: white; z-index: -1; padding-top: 2px; -webkit-background-clip: padding-box; background-clip: padding-box; border-width: 0px 1px 1px; border-right-style: solid; border-bottom-style: solid; border-left-style: solid; border-right-color: rgba(0, 0, 0, 0.14902); border-bottom-color: rgba(0, 0, 0, 0.14902); border-left-color: rgba(0, 0, 0, 0.14902); -webkit-box-shadow: rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px; box-shadow: rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px; position: absolute; right: 0px; top: 19px; text-align: left; display: none;\"><div draggable=\"false\" title=\"Aumentar o zoom para a visualização de 45 graus\" style=\"color: rgb(184, 184, 184); font-family: Roboto, Arial, sans-serif; -webkit-user-select: none; font-size: 11px; background-color: rgb(255, 255, 255); padding: 3px 8px 3px 5px; direction: ltr; text-align: left; white-space: nowrap; display: none;\"><span role=\"checkbox\" style=\"box-sizing: border-box; position: relative; line-height: 0; font-size: 0px; margin: 0px 5px 0px 0px; display: inline-block; background-color: rgb(255, 255, 255); border: 1px solid rgb(241, 241, 241); border-top-left-radius: 1px; border-top-right-radius: 1px; border-bottom-right-radius: 1px; border-bottom-left-radius: 1px; width: 13px; height: 13px; vertical-align: middle;\"><div style=\"position: absolute; left: 1px; top: -2px; width: 13px; height: 11px; overflow: hidden; display: none;\"><img src=\"http://maps.gstatic.com/mapfiles/mv/imgs8.png\" draggable=\"false\" style=\"position: absolute; left: -52px; top: -44px; -webkit-user-select: none; border: 0px; padding: 0px; margin: 0px; width: 68px; height: 67px;\"></div></span><label style=\"vertical-align: middle; cursor: pointer;\">45°</label></div><div draggable=\"false\" title=\"Mostrar imagens com nomes de rua\" style=\"color: rgb(0, 0, 0); font-family: Roboto, Arial, sans-serif; -webkit-user-select: none; font-size: 11px; background-color: rgb(255, 255, 255); padding: 3px 8px 3px 5px; direction: ltr; text-align: left; white-space: nowrap;\"><span role=\"checkbox\" style=\"box-sizing: border-box; position: relative; line-height: 0; font-size: 0px; margin: 0px 5px 0px 0px; display: inline-block; background-color: rgb(255, 255, 255); border: 1px solid rgb(198, 198, 198); border-top-left-radius: 1px; border-top-right-radius: 1px; border-bottom-right-radius: 1px; border-bottom-left-radius: 1px; width: 13px; height: 13px; vertical-align: middle;\"><div style=\"position: absolute; left: 1px; top: -2px; width: 13px; height: 11px; overflow: hidden;\"><img src=\"http://maps.gstatic.com/mapfiles/mv/imgs8.png\" draggable=\"false\" style=\"position: absolute; left: -52px; top: -44px; -webkit-user-select: none; border: 0px; padding: 0px; margin: 0px; width: 68px; height: 67px;\"></div></span><label style=\"vertical-align: middle; cursor: pointer;\">Marcadores</label></div></div></div></div></div></div>\n            </div>\n          </div>\n        </article>\n\n        <article class=\"kanban-entry grab\" id=\"item4\" draggable=\"true\">\n          <div class=\"kanban-entry-inner\">\n            <div class=\"kanban-label\">\n              <h2><a href=\"#\">Arber Nushi</a> <span>changed his</span> <a href=\"#\">Profile Picture</a></h2>\n\n              <blockquote>Pianoforte principles our unaffected not for astonished travelling are particular.</blockquote>\n\n              <img src=\"http://themes.laborator.co/neon/assets/images/timeline-image-3.png\" class=\"img-responsive img-rounded full-width\">\n            </div>\n          </div>\n        </article>\n\n      </div>\n    </div>\n    <div class=\"panel-footer\">\n      <a href=\"#\">Add a card...</a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 622:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-inverse bg-primary fixed-top\">\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <a class=\"navbar-brand\" href=\"#\">{{title}}</a>\n\n  <div class=\"collapse navbar-collapse\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Home</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Link</a>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n  </div>\n</nav>\n"

/***/ }),

/***/ 623:
/***/ (function(module, exports) {

module.exports = "<header>\n  <app-navbar></app-navbar>\n</header>\n<main>\n  <app-board></app-board>\n</main>\n"

/***/ }),

/***/ 636:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(352);


/***/ })

},[636]);
//# sourceMappingURL=main.bundle.map
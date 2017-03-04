webpackJsonp([1,4],{

/***/ 202:
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

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(202);
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

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_service__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(202);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(202);
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
            styles: [__webpack_require__(615)]
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
            styles: [__webpack_require__(616)]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_kanban_user_service__ = __webpack_require__(306);
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
            styles: [__webpack_require__(617)],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap_sortable__ = __webpack_require__(618);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__component_navbar_navbar_component__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_http_service__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_kanban_user_service__ = __webpack_require__(306);
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

/***/ 615:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(74)();
// imports


// module
exports.push([module.i, "app-board {\n  padding-top: 56px;\n  display: block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 616:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(74)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 617:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(74)();
// imports


// module
exports.push([module.i, ".kb-main {\n  width: 100%; }\n  .kb-main .kb-type {\n    width: 300px; }\n    .kb-main .kb-type__list {\n      display: none; }\n      .kb-main .kb-type__list__item {\n        background-color: white;\n        border-collapse: collapse;\n        border-image-outset: 0px;\n        border-image-repeat: stretch;\n        border-image-slice: 100%;\n        border-image-source: none;\n        border-image-width: 1;\n        border-radius: 3px;\n        border: 1px solid #cccccc;\n        box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 3px 0px;\n        box-sizing: border-box;\n        color: #444444;\n        cursor: default;\n        display: inline-block;\n        font-size: 12px;\n        height: 75px;\n        left: 0px;\n        max-width: 100%;\n        min-width: 100%;\n        padding: 8px 8px 8px 12px;\n        position: relative;\n        top: 0px;\n        -webkit-transition-delay: 0s;\n                transition-delay: 0s;\n        -webkit-transition-duration: 0.3s;\n                transition-duration: 0.3s;\n        -webkit-transition-property: height;\n        transition-property: height;\n        -webkit-transition-timing-function: linear;\n                transition-timing-function: linear;\n        width: 290px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 621:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"panel panel-primary kanban-col\">\n    <div class=\"panel-heading\">\n      TODO\n      <i class=\"fa fa-2x fa-plus-circle pull-right\"></i>\n    </div>\n    <div class=\"panel-body\">\n      <div id=\"TODO\" class=\"kanban-centered\">\n\n        <article class=\"kanban-entry grab\" id=\"item1\" draggable=\"true\">\n          <div class=\"kanban-entry-inner\">\n            <div class=\"kanban-label\">\n              <h2><a href=\"#\">Art Ramadani</a> <span>posted a status update</span></h2>\n              <p>Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.</p>\n            </div>\n          </div>\n        </article>\n\n        <article class=\"kanban-entry grab\" id=\"item2\" draggable=\"true\">\n          <div class=\"kanban-entry-inner\">\n            <div class=\"kanban-label\">\n              <h2><a href=\"#\">Job Meeting</a></h2>\n              <p>You have a meeting at <strong>Laborator Office</strong> Today.</p>\n            </div>\n          </div>\n        </article>\n\n        <article class=\"kanban-entry grab\" id=\"item3\" draggable=\"true\">\n          <div class=\"kanban-entry-inner\">\n            <div class=\"kanban-label\">\n              <h2><a href=\"#\">Arlind Nushi</a> <span>checked in at</span> <a href=\"#\">Laborator</a></h2>\n\n              <blockquote>Great place, feeling like in home.</blockquote>\n\n            </div>\n          </div>\n        </article>\n\n        <article class=\"kanban-entry grab\" id=\"item4\" draggable=\"true\">\n          <div class=\"kanban-entry-inner\">\n            <div class=\"kanban-label\">\n              <h2><a href=\"#\">Arber Nushi</a> <span>changed his</span> <a href=\"#\">Profile Picture</a></h2>\n\n              <blockquote>Pianoforte principles our unaffected not for astonished travelling are particular.</blockquote>\n\n              <img src=\"http://themes.laborator.co/neon/assets/images/timeline-image-3.png\" class=\"img-responsive img-rounded full-width\">\n            </div>\n          </div>\n        </article>\n\n      </div>\n    </div>\n    <div class=\"panel-footer\">\n      <a href=\"#\">Add a card...</a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 622:
/***/ (function(module, exports) {

module.exports = "<!--\n<nav class=\"navbar navbar-toggleable-md navbar-inverse bg-primary fixed-top\">\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <a class=\"navbar-brand\" href=\"#\">{{title}}</a>\n\n  <div class=\"collapse navbar-collapse\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Home</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Link</a>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n  </div>\n</nav>\n-->\n"

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
//# sourceMappingURL=main.bundle.js.map
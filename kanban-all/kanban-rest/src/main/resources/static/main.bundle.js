webpackJsonp([1,4],{

/***/ 140:
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
    },
    board: {
        all: 'boards/',
        create: 'boards/',
        one: 'boards/',
        update: 'boards/',
        delete: 'boards/'
    },
};
//# sourceMappingURL=/home/ivan/edu/KANBAN-2990/kanban-all/kanban-webapp/src/main/development/src/environment.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_service__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(140);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BoardService = (function () {
    function BoardService(httpService) {
        this.httpService = httpService;
    }
    BoardService.prototype.getPage = function (page, size, sort) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* URLSearchParams */]();
        params.set('page', page.toString());
        params.set('size', size.toString());
        if (sort)
            params.set('sort', sort);
        return this.httpService.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].board.all, { search: params });
    };
    BoardService.prototype.create = function (board) {
        return this.httpService.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].board.create, board, {});
    };
    BoardService.prototype.one = function (id) {
        return this.httpService.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].board.one + id.toString(), {});
    };
    BoardService.prototype.update = function (id, board) {
        return this.httpService.put(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].board.update + id.toString(), board, {});
    };
    BoardService.prototype.remove = function (id) {
        return this.httpService.put(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].board.delete + id.toString(), {});
    };
    BoardService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */]) === 'function' && _a) || Object])
    ], BoardService);
    return BoardService;
    var _a;
}());
//# sourceMappingURL=/home/ivan/edu/KANBAN-2990/kanban-all/kanban-webapp/src/main/development/src/board.service.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(140);
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

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_service__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(140);
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

/***/ 352:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 352;


/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(464);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/ivan/edu/KANBAN-2990/kanban-all/kanban-webapp/src/main/development/src/main.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_board_service__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_board__ = __webpack_require__(462);
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
    function BoardComponent(boardService) {
        this.boardService = boardService;
    }
    BoardComponent.prototype.ngOnInit = function () {
    };
    BoardComponent.prototype.ngOnChanges = function (changes) {
        if (this.board && 'board' in changes) {
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__model_board__["a" /* Board */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__model_board__["a" /* Board */]) === 'function' && _a) || Object)
    ], BoardComponent.prototype, "board", void 0);
    BoardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-board',
            template: __webpack_require__(623),
            styles: [__webpack_require__(617)],
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__service_board_service__["a" /* BoardService */]
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__service_board_service__["a" /* BoardService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_board_service__["a" /* BoardService */]) === 'function' && _b) || Object])
    ], BoardComponent);
    return BoardComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/ivan/edu/KANBAN-2990/kanban-all/kanban-webapp/src/main/development/src/board.component.js.map

/***/ }),

/***/ 461:
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
            template: __webpack_require__(624),
            styles: [__webpack_require__(618)]
        }), 
        __metadata('design:paramtypes', [])
    ], NavbarComponent);
    return NavbarComponent;
}());
//# sourceMappingURL=/home/ivan/edu/KANBAN-2990/kanban-all/kanban-webapp/src/main/development/src/navbar.component.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Board; });
var Board = (function () {
    function Board() {
    }
    return Board;
}());
//# sourceMappingURL=/home/ivan/edu/KANBAN-2990/kanban-all/kanban-webapp/src/main/development/src/board.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_kanban_user_service__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_board_service__ = __webpack_require__(203);
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
    function AppComponent(kanbanUserService, boardService) {
        var _this = this;
        this.kanbanUserService = kanbanUserService;
        this.boardService = boardService;
        boardService.getPage(0, 999).subscribe(function (resp) {
            _this.boards = JSON.parse(resp['_body'])['_embedded']['boards'];
            _this.currentBoard = _this.boards[0] || null;
        });
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(625),
            styles: [__webpack_require__(619)],
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__service_kanban_user_service__["a" /* KanbanUserService */],
                __WEBPACK_IMPORTED_MODULE_2__service_board_service__["a" /* BoardService */]
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_kanban_user_service__["a" /* KanbanUserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_kanban_user_service__["a" /* KanbanUserService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_board_service__["a" /* BoardService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__service_board_service__["a" /* BoardService */]) === 'function' && _b) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/ivan/edu/KANBAN-2990/kanban-all/kanban-webapp/src/main/development/src/app.component.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap_sortable__ = __webpack_require__(620);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__component_navbar_navbar_component__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_http_service__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_kanban_user_service__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__component_board_board_component__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__service_board_service__ = __webpack_require__(203);
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
                __WEBPACK_IMPORTED_MODULE_8__service_kanban_user_service__["a" /* KanbanUserService */],
                __WEBPACK_IMPORTED_MODULE_10__service_board_service__["a" /* BoardService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/ivan/edu/KANBAN-2990/kanban-all/kanban-webapp/src/main/development/src/app.module.js.map

/***/ }),

/***/ 617:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(74)();
// imports


// module
exports.push([module.i, "img {\n  vertical-align: middle; }\n\n.img-responsive {\n  display: block;\n  height: auto;\n  max-width: 100%; }\n\n.img-rounded {\n  border-radius: 3px; }\n\n.img-thumbnail {\n  background-color: #fff;\n  border: 1px solid #ededf0;\n  border-radius: 3px;\n  display: inline-block;\n  height: auto;\n  line-height: 1.428571429;\n  max-width: 100%;\n  moz-transition: all .2s ease-in-out;\n  o-transition: all .2s ease-in-out;\n  padding: 2px;\n  -webkit-transition: all .2s ease-in-out;\n  transition: all .2s ease-in-out;\n  webkit-transition: all .2s ease-in-out; }\n\n.img-circle {\n  border-radius: 50%; }\n\n.kanban-centered {\n  position: relative;\n  margin-bottom: 30px; }\n\n.kanban-centered:before, .kanban-centered:after {\n  content: \" \";\n  display: table; }\n\n.kanban-centered:after {\n  clear: both; }\n\n.kanban-centered:before, .kanban-centered:after {\n  content: \" \";\n  display: table; }\n\n.kanban-centered:after {\n  clear: both; }\n\n.kanban-centered:before {\n  content: '';\n  position: absolute;\n  display: block;\n  width: 2px;\n  /*background: #f5f5f6;*/\n  top: 20px;\n  bottom: 20px;\n  /*margin-left: 18px;*/ }\n\n.kanban-centered .kanban-entry {\n  position: relative;\n  /*width: 50%;\n  float: right;*/\n  margin: 10px 8px;\n  clear: both;\n  border-radius: 4px;\n  box-shadow: 1px 1px 2px 0px rgba(50, 50, 50, 0.5); }\n\n.kanban-centered .kanban-entry:before, .kanban-centered .kanban-entry:after {\n  content: \" \";\n  display: table; }\n\n.kanban-centered .kanban-entry:after {\n  clear: both; }\n\n.kanban-centered .kanban-entry:before, .kanban-centered .kanban-entry:after {\n  content: \" \";\n  display: table; }\n\n.kanban-centered .kanban-entry:after {\n  clear: both; }\n\n.kanban-centered .kanban-entry.begin {\n  margin-bottom: 0; }\n\n.kanban-centered .kanban-entry.left-aligned {\n  float: left; }\n\n.kanban-centered .kanban-entry.left-aligned .kanban-entry-inner {\n  margin-left: 0;\n  margin-right: -18px; }\n\n.kanban-centered .kanban-entry.left-aligned .kanban-entry-inner .kanban-time {\n  left: auto;\n  right: -100px;\n  text-align: left; }\n\n.kanban-centered .kanban-entry.left-aligned .kanban-entry-inner .kanban-icon {\n  float: right; }\n\n.kanban-centered .kanban-entry.left-aligned .kanban-entry-inner .kanban-label {\n  margin-left: 0;\n  margin-right: 70px; }\n\n.kanban-centered .kanban-entry.left-aligned .kanban-entry-inner .kanban-label:after {\n  left: auto;\n  right: 0;\n  margin-left: 0;\n  margin-right: -9px;\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg); }\n\n.kanban-centered .kanban-entry .kanban-entry-inner {\n  position: relative;\n  /*margin-left: -24px;*/ }\n\n.kanban-centered .kanban-entry .kanban-entry-inner:before, .kanban-centered .kanban-entry .kanban-entry-inner:after {\n  content: \" \";\n  display: table; }\n\n.kanban-centered .kanban-entry .kanban-entry-inner:after {\n  clear: both; }\n\n.kanban-centered .kanban-entry .kanban-entry-inner:before, .kanban-centered .kanban-entry .kanban-entry-inner:after {\n  content: \" \";\n  display: table; }\n\n.kanban-centered .kanban-entry .kanban-entry-inner:after {\n  clear: both; }\n\n.kanban-centered .kanban-entry .kanban-entry-inner .kanban-time {\n  position: absolute;\n  left: -100px;\n  text-align: right;\n  padding: 10px;\n  box-sizing: border-box; }\n\n.kanban-centered .kanban-entry .kanban-entry-inner .kanban-time > span {\n  display: block; }\n\n.kanban-centered .kanban-entry .kanban-entry-inner .kanban-time > span:first-child {\n  font-size: 15px;\n  font-weight: bold; }\n\n.kanban-centered .kanban-entry .kanban-entry-inner .kanban-time > span:last-child {\n  font-size: 12px; }\n\n.kanban-centered .kanban-entry .kanban-entry-inner .kanban-icon {\n  background: #fff;\n  color: #737881;\n  display: block;\n  width: 25px;\n  height: 25px;\n  background-clip: padding-box;\n  border-radius: 20px;\n  text-align: center;\n  box-shadow: 0 0 0 4px #f5f5f6;\n  float: left;\n  margin-top: 6px; }\n\n.kanban-centered .kanban-entry .kanban-entry-inner .kanban-icon.bg-primary {\n  background-color: #303641;\n  color: #fff; }\n\n.kanban-centered .kanban-entry .kanban-entry-inner .kanban-icon.bg-secondary {\n  background-color: #ee4749;\n  color: #fff; }\n\n.kanban-centered .kanban-entry .kanban-entry-inner .kanban-icon.bg-success {\n  background-color: #00a651;\n  color: #fff; }\n\n.kanban-centered .kanban-entry .kanban-entry-inner .kanban-icon.bg-info {\n  background-color: #21a9e1;\n  color: #fff; }\n\n.kanban-centered .kanban-entry .kanban-entry-inner .kanban-icon.bg-warning {\n  background-color: #fad839;\n  color: #fff; }\n\n.kanban-centered .kanban-entry .kanban-entry-inner .kanban-icon.bg-danger {\n  background-color: #cc2424;\n  color: #fff; }\n\n.kanban-centered .kanban-entry .kanban-entry-inner .kanban-label {\n  position: relative;\n  background: #f5f5f6;\n  padding: 0.75em;\n  /*margin-left: 50px;*/\n  background-clip: padding-box;\n  border-radius: 3px; }\n\n/*.kanban-centered .kanban-entry .kanban-entry-inner .kanban-label:after {\n    content: '';\n    display: block;\n    position: absolute;\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-width: 9px 9px 9px 0;\n    border-color: transparent #f5f5f6 transparent transparent;\n    left: 0;\n    top: 10px;\n    margin-left: -9px;\n}*/\n.kanban-centered .kanban-entry .kanban-entry-inner .kanban-label h2, .kanban-centered .kanban-entry .kanban-entry-inner .kanban-label p {\n  color: #737881;\n  font-family: \"Noto Sans\",sans-serif;\n  font-size: 12px;\n  margin: 0;\n  line-height: 1.428571429; }\n\n.kanban-centered .kanban-entry .kanban-entry-inner .kanban-label p + p {\n  margin-top: 15px; }\n\n.kanban-centered .kanban-entry .kanban-entry-inner .kanban-label h2 {\n  font-size: 16px;\n  margin-bottom: 10px; }\n\n.kanban-centered .kanban-entry .kanban-entry-inner .kanban-label h2 a {\n  color: #303641; }\n\n.kanban-centered .kanban-entry .kanban-entry-inner .kanban-label h2 span {\n  -webkit-opacity: .6;\n  -moz-opacity: .6;\n  opacity: .6;\n  -ms-filter: alpha(opacity=60);\n  filter: alpha(opacity=60); }\n\n.modal-static {\n  position: fixed;\n  top: 50% !important;\n  left: 50% !important;\n  margin-top: -100px;\n  margin-left: -100px;\n  overflow: visible !important; }\n\n.modal-static,\n.modal-static .modal-dialog,\n.modal-static .modal-content {\n  width: 200px;\n  height: 150px; }\n\n.modal-static .modal-dialog,\n.modal-static .modal-content {\n  padding: 0 !important;\n  margin: 0 !important; }\n\n.kanban-col {\n  width: 300px;\n  margin-right: 20px;\n  float: left; }\n\n.panel-body {\n  height: 300px;\n  padding: 15px 0 0 0;\n  overflow-y: scroll; }\n\n/*.panel-heading {\n    cursor: -moz-grab;\n    cursor: -webkit-grab;\n    cursor: grab;\n}*/\n.grab {\n  cursor: -webkit-grab; }\n\n.grabbing {\n  cursor: -webkit-grabbing; }\n\n.panel-heading {\n  cursor: context-menu; }\n\n.panel-heading i {\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 618:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(74)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 619:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(74)();
// imports


// module
exports.push([module.i, ".kb-main {\n  width: 100%; }\n  .kb-main .kb-type {\n    width: 300px; }\n    .kb-main .kb-type__list {\n      display: none; }\n      .kb-main .kb-type__list__item {\n        background-color: white;\n        border-collapse: collapse;\n        border-image-outset: 0px;\n        border-image-repeat: stretch;\n        border-image-slice: 100%;\n        border-image-source: none;\n        border-image-width: 1;\n        border-radius: 3px;\n        border: 1px solid #cccccc;\n        box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 3px 0px;\n        box-sizing: border-box;\n        color: #444444;\n        cursor: default;\n        display: inline-block;\n        font-size: 12px;\n        height: 75px;\n        left: 0px;\n        max-width: 100%;\n        min-width: 100%;\n        padding: 8px 8px 8px 12px;\n        position: relative;\n        top: 0px;\n        -webkit-transition-delay: 0s;\n                transition-delay: 0s;\n        -webkit-transition-duration: 0.3s;\n                transition-duration: 0.3s;\n        -webkit-transition-property: height;\n        transition-property: height;\n        -webkit-transition-timing-function: linear;\n                transition-timing-function: linear;\n        width: 290px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 623:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1 class=\"h1\">{{board&&board['name']}}</h1>\n  <div class=\"panel panel-primary kanban-col\">\n    <div class=\"panel-heading\">\n      TODO\n      <i class=\"fa fa-2x fa-plus-circle pull-right\"></i>\n    </div>\n    <div class=\"panel-body\">\n      <div id=\"TODO\" class=\"kanban-centered\">\n        <article class=\"kanban-entry grab\" id=\"item1\" draggable=\"true\">\n          <div class=\"kanban-entry-inner\">\n            <div class=\"kanban-label\">\n              <h2><a href=\"#\">Art Ramadani</a> <span>posted a status update</span></h2>\n              <p>Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.</p>\n            </div>\n          </div>\n        </article>\n\n        <article class=\"kanban-entry grab\" id=\"item2\" draggable=\"true\">\n          <div class=\"kanban-entry-inner\">\n            <div class=\"kanban-label\">\n              <h2><a href=\"#\">Job Meeting</a></h2>\n              <p>You have a meeting at <strong>Laborator Office</strong> Today.</p>\n            </div>\n          </div>\n        </article>\n\n        <article class=\"kanban-entry grab\" id=\"item3\" draggable=\"true\">\n          <div class=\"kanban-entry-inner\">\n            <div class=\"kanban-label\">\n              <h2><a href=\"#\">Arlind Nushi</a> <span>checked in at</span> <a href=\"#\">Laborator</a></h2>\n\n              <blockquote>Great place, feeling like in home.</blockquote>\n\n            </div>\n          </div>\n        </article>\n\n        <article class=\"kanban-entry grab\" id=\"item4\" draggable=\"true\">\n          <div class=\"kanban-entry-inner\">\n            <div class=\"kanban-label\">\n              <h2><a href=\"#\">Arber Nushi</a> <span>changed his</span> <a href=\"#\">Profile Picture</a></h2>\n\n              <blockquote>Pianoforte principles our unaffected not for astonished travelling are particular.</blockquote>\n\n              <img src=\"http://themes.laborator.co/neon/assets/images/timeline-image-3.png\" class=\"img-responsive img-rounded full-width\">\n            </div>\n          </div>\n        </article>\n\n      </div>\n    </div>\n    <div class=\"panel-footer\">\n      <a href=\"#\">Add a card...</a>\n    </div>\n  </div>\n  <div class=\"panel panel-primary kanban-col\">\n    <div class=\"panel-heading\">\n      TODO\n      <i class=\"fa fa-2x fa-plus-circle pull-right\"></i>\n    </div>\n    <div class=\"panel-body\">\n      <div id=\"TODO\" class=\"kanban-centered\">\n\n        <article class=\"kanban-entry grab\" id=\"item1\" draggable=\"true\">\n          <div class=\"kanban-entry-inner\">\n            <div class=\"kanban-label\">\n              <h2><a href=\"#\">Art Ramadani</a> <span>posted a status update</span></h2>\n              <p>Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.</p>\n            </div>\n          </div>\n        </article>\n\n        <article class=\"kanban-entry grab\" id=\"item2\" draggable=\"true\">\n          <div class=\"kanban-entry-inner\">\n            <div class=\"kanban-label\">\n              <h2><a href=\"#\">Job Meeting</a></h2>\n              <p>You have a meeting at <strong>Laborator Office</strong> Today.</p>\n            </div>\n          </div>\n        </article>\n\n        <article class=\"kanban-entry grab\" id=\"item3\" draggable=\"true\">\n          <div class=\"kanban-entry-inner\">\n            <div class=\"kanban-label\">\n              <h2><a href=\"#\">Arlind Nushi</a> <span>checked in at</span> <a href=\"#\">Laborator</a></h2>\n\n              <blockquote>Great place, feeling like in home.</blockquote>\n\n            </div>\n          </div>\n        </article>\n\n        <article class=\"kanban-entry grab\" id=\"item4\" draggable=\"true\">\n          <div class=\"kanban-entry-inner\">\n            <div class=\"kanban-label\">\n              <h2><a href=\"#\">Arber Nushi</a> <span>changed his</span> <a href=\"#\">Profile Picture</a></h2>\n\n              <blockquote>Pianoforte principles our unaffected not for astonished travelling are particular.</blockquote>\n\n              <img src=\"http://themes.laborator.co/neon/assets/images/timeline-image-3.png\" class=\"img-responsive img-rounded full-width\">\n            </div>\n          </div>\n        </article>\n\n      </div>\n    </div>\n    <div class=\"panel-footer\">\n      <a href=\"#\">Add a card...</a>\n    </div>\n  </div>\n  <div class=\"panel panel-primary kanban-col\">\n    <div class=\"panel-heading\">\n      TODO\n      <i class=\"fa fa-2x fa-plus-circle pull-right\"></i>\n    </div>\n    <div class=\"panel-body\">\n      <div id=\"TODO\" class=\"kanban-centered\">\n\n        <article class=\"kanban-entry grab\" id=\"item1\" draggable=\"true\">\n          <div class=\"kanban-entry-inner\">\n            <div class=\"kanban-label\">\n              <h2><a href=\"#\">Art Ramadani</a> <span>posted a status update</span></h2>\n              <p>Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.</p>\n            </div>\n          </div>\n        </article>\n\n        <article class=\"kanban-entry grab\" id=\"item2\" draggable=\"true\">\n          <div class=\"kanban-entry-inner\">\n            <div class=\"kanban-label\">\n              <h2><a href=\"#\">Job Meeting</a></h2>\n              <p>You have a meeting at <strong>Laborator Office</strong> Today.</p>\n            </div>\n          </div>\n        </article>\n\n        <article class=\"kanban-entry grab\" id=\"item3\" draggable=\"true\">\n          <div class=\"kanban-entry-inner\">\n            <div class=\"kanban-label\">\n              <h2><a href=\"#\">Arlind Nushi</a> <span>checked in at</span> <a href=\"#\">Laborator</a></h2>\n\n              <blockquote>Great place, feeling like in home.</blockquote>\n\n            </div>\n          </div>\n        </article>\n\n        <article class=\"kanban-entry grab\" id=\"item4\" draggable=\"true\">\n          <div class=\"kanban-entry-inner\">\n            <div class=\"kanban-label\">\n              <h2><a href=\"#\">Arber Nushi</a> <span>changed his</span> <a href=\"#\">Profile Picture</a></h2>\n\n              <blockquote>Pianoforte principles our unaffected not for astonished travelling are particular.</blockquote>\n\n              <img src=\"http://themes.laborator.co/neon/assets/images/timeline-image-3.png\" class=\"img-responsive img-rounded full-width\">\n            </div>\n          </div>\n        </article>\n\n      </div>\n    </div>\n    <div class=\"panel-footer\">\n      <a href=\"#\">Add a card...</a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 624:
/***/ (function(module, exports) {

module.exports = "<!--\n<nav class=\"navbar navbar-toggleable-md navbar-inverse bg-primary fixed-top\">\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <a class=\"navbar-brand\" href=\"#\">{{title}}</a>\n\n  <div class=\"collapse navbar-collapse\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Home</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Link</a>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n  </div>\n</nav>\n-->\n"

/***/ }),

/***/ 625:
/***/ (function(module, exports) {

module.exports = "<header>\n  <app-navbar></app-navbar>\n</header>\n<main>\n  <app-board [board]=\"currentBoard\"></app-board>\n</main>\n"

/***/ }),

/***/ 638:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(353);


/***/ })

},[638]);
//# sourceMappingURL=main.bundle.js.map
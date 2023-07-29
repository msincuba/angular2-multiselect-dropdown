"use strict";
(self["webpackChunkangular_multiselect_dropdown"] = self["webpackChunkangular_multiselect_dropdown"] || []).push([["main"],{

/***/ 4164:
/*!***************************************************************************!*\
  !*** ./projects/angular-multiselect-dropdown-lib/src/lib/clickOutside.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClickOutsideDirective: () => (/* binding */ ClickOutsideDirective),
/* harmony export */   ScrollDirective: () => (/* binding */ ScrollDirective),
/* harmony export */   setPosition: () => (/* binding */ setPosition),
/* harmony export */   styleDirective: () => (/* binding */ styleDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);


class ClickOutsideDirective {
  constructor(_elementRef) {
    this._elementRef = _elementRef;
    this.clickOutside = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  onClick(event, targetElement) {
    if (!targetElement) {
      return;
    }
    const clickedInside = this._elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.clickOutside.emit(event);
    }
  }
}
ClickOutsideDirective.ɵfac = function ClickOutsideDirective_Factory(t) {
  return new (t || ClickOutsideDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};
ClickOutsideDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: ClickOutsideDirective,
  selectors: [["", "clickOutside", ""]],
  hostBindings: function ClickOutsideDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClickOutsideDirective_click_HostBindingHandler($event) {
        return ctx.onClick($event, $event.target);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("touchstart", function ClickOutsideDirective_touchstart_HostBindingHandler($event) {
        return ctx.onClick($event, $event.target);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    }
  },
  outputs: {
    clickOutside: "clickOutside"
  }
});
class ScrollDirective {
  constructor(_elementRef) {
    this._elementRef = _elementRef;
    this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  onClick(event, targetElement) {
    this.scroll.emit(event);
  }
}
ScrollDirective.ɵfac = function ScrollDirective_Factory(t) {
  return new (t || ScrollDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};
ScrollDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: ScrollDirective,
  selectors: [["", "scroll", ""]],
  hostBindings: function ScrollDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function ScrollDirective_scroll_HostBindingHandler($event) {
        return ctx.onClick($event);
      });
    }
  },
  outputs: {
    scroll: "scroll"
  }
});
class styleDirective {
  constructor(el) {
    this.el = el;
  }
  ngOnInit() {
    this.el.nativeElement.style.top = this.styleVal;
  }
  ngOnChanges() {
    this.el.nativeElement.style.top = this.styleVal;
  }
}
styleDirective.ɵfac = function styleDirective_Factory(t) {
  return new (t || styleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};
styleDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: styleDirective,
  selectors: [["", "styleProp", ""]],
  inputs: {
    styleVal: ["styleProp", "styleVal"]
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});
class setPosition {
  constructor(el) {
    this.el = el;
  }
  ngOnInit() {
    if (this.height) {
      this.el.nativeElement.style.bottom = parseInt(this.height + 15 + "") + 'px';
    }
  }
  ngOnChanges() {
    if (this.height) {
      this.el.nativeElement.style.bottom = parseInt(this.height + 15 + "") + 'px';
    }
  }
}
setPosition.ɵfac = function setPosition_Factory(t) {
  return new (t || setPosition)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};
setPosition.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: setPosition,
  selectors: [["", "setPosition", ""]],
  inputs: {
    height: ["setPosition", "height"]
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});

/***/ }),

/***/ 1681:
/*!**************************************************************************!*\
  !*** ./projects/angular-multiselect-dropdown-lib/src/lib/list-filter.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ListFilterPipe: () => (/* binding */ ListFilterPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _multiselect_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./multiselect.service */ 9715);


class ListFilterPipe {
  constructor(ds) {
    this.ds = ds;
    this.filteredList = [];
  }
  transform(items, filter, searchBy) {
    if (!items || !filter || filter == "") {
      return items;
    }
    this.filteredList = items.filter(item => this.applyFilter(item, filter, searchBy));
    return this.filteredList;
  }
  applyFilter(item, filter, searchBy) {
    let found = false;
    if (searchBy.length > 0) {
      if (item.grpTitle) {
        found = true;
      } else {
        for (var t = 0; t < searchBy.length; t++) {
          if (filter && item[searchBy[t]] && item[searchBy[t]] != "") {
            if (item[searchBy[t]].toString().toLowerCase().indexOf(filter.toLowerCase()) >= 0) {
              found = true;
            }
          }
        }
      }
    } else {
      if (item.grpTitle) {
        found = true;
      } else {
        for (var prop in item) {
          if (filter && item[prop]) {
            if (item[prop].toString().toLowerCase().indexOf(filter.toLowerCase()) >= 0) {
              found = true;
            }
          }
        }
      }
    }
    return found;
  }
}
ListFilterPipe.ɵfac = function ListFilterPipe_Factory(t) {
  return new (t || ListFilterPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_multiselect_service__WEBPACK_IMPORTED_MODULE_0__.DataService, 16));
};
ListFilterPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
  name: "listFilter",
  type: ListFilterPipe,
  pure: true
});

/***/ }),

/***/ 4745:
/*!************************************************************************!*\
  !*** ./projects/angular-multiselect-dropdown-lib/src/lib/menu-item.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Badge: () => (/* binding */ Badge),
/* harmony export */   CIcon: () => (/* binding */ CIcon),
/* harmony export */   Item: () => (/* binding */ Item),
/* harmony export */   Search: () => (/* binding */ Search),
/* harmony export */   TemplateRenderer: () => (/* binding */ TemplateRenderer)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);



function CIcon__svg_svg_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 4)(1, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function CIcon__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 6)(1, "g")(2, "g", 7)(3, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
}
function CIcon__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 6)(1, "g")(2, "g", 9)(3, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
}
function CIcon__svg_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 11)(1, "g")(2, "g")(3, "g", 12)(4, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
  }
}
function CIcon__svg_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 14)(1, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
class Item {
  constructor() {}
}
Item.ɵfac = function Item_Factory(t) {
  return new (t || Item)();
};
Item.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: Item,
  selectors: [["c-item"]],
  contentQueries: function Item_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
    }
  },
  decls: 0,
  vars: 0,
  template: function Item_Template(rf, ctx) {},
  encapsulation: 2
});
class Badge {
  constructor() {}
}
Badge.ɵfac = function Badge_Factory(t) {
  return new (t || Badge)();
};
Badge.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: Badge,
  selectors: [["c-badge"]],
  contentQueries: function Badge_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
    }
  },
  decls: 0,
  vars: 0,
  template: function Badge_Template(rf, ctx) {},
  encapsulation: 2
});
class Search {
  constructor() {}
}
Search.ɵfac = function Search_Factory(t) {
  return new (t || Search)();
};
Search.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: Search,
  selectors: [["c-search"]],
  contentQueries: function Search_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
    }
  },
  decls: 0,
  vars: 0,
  template: function Search_Template(rf, ctx) {},
  encapsulation: 2
});
class TemplateRenderer {
  constructor(viewContainer) {
    this.viewContainer = viewContainer;
  }
  ngOnInit() {
    this.view = this.viewContainer.createEmbeddedView(this.data.template, {
      '\$implicit': this.data,
      'item': this.item
    });
  }
  ngOnDestroy() {
    this.view.destroy();
  }
}
TemplateRenderer.ɵfac = function TemplateRenderer_Factory(t) {
  return new (t || TemplateRenderer)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef));
};
TemplateRenderer.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: TemplateRenderer,
  selectors: [["c-templateRenderer"]],
  inputs: {
    data: "data",
    item: "item"
  },
  decls: 0,
  vars: 0,
  template: function TemplateRenderer_Template(rf, ctx) {},
  encapsulation: 2
});
class CIcon {}
CIcon.ɵfac = function CIcon_Factory(t) {
  return new (t || CIcon)();
};
CIcon.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: CIcon,
  selectors: [["c-icon"]],
  inputs: {
    name: "name"
  },
  decls: 5,
  vars: 5,
  consts: [["width", "100%", "height", "100%", "version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 47.971 47.971", "style", "enable-background:new 0 0 47.971 47.971;", 0, "xml", "space", "preserve", 4, "ngIf"], ["version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "width", "100%", "height", "100%", "viewBox", "0 0 612 612", "style", "enable-background:new 0 0 612 612;", 0, "xml", "space", "preserve", 4, "ngIf"], ["version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "width", "100%", "height", "100%", "viewBox", "0 0 615.52 615.52", "style", "enable-background:new 0 0 615.52 615.52;", 0, "xml", "space", "preserve", 4, "ngIf"], ["version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 51.976 51.976", "style", "enable-background:new 0 0 51.976 51.976;", 0, "xml", "space", "preserve", 4, "ngIf"], ["width", "100%", "height", "100%", "version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 47.971 47.971", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 47.971 47.971"], ["d", "M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88\n                                c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242\n                                C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879\n                                s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z"], ["version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "width", "100%", "height", "100%", "viewBox", "0 0 612 612", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 612 612"], ["id", "_x31_0_34_"], ["d", "M604.501,134.782c-9.999-10.05-26.222-10.05-36.221,0L306.014,422.558L43.721,134.782\n\t\t\t\tc-9.999-10.05-26.223-10.05-36.222,0s-9.999,26.35,0,36.399l279.103,306.241c5.331,5.357,12.422,7.652,19.386,7.296\n\t\t\t\tc6.988,0.356,14.055-1.939,19.386-7.296l279.128-306.268C614.5,161.106,614.5,144.832,604.501,134.782z"], ["id", "_x39__30_"], ["d", "M604.501,440.509L325.398,134.956c-5.331-5.357-12.423-7.627-19.386-7.27c-6.989-0.357-14.056,1.913-19.387,7.27\n\t\t\t\tL7.499,440.509c-9.999,10.024-9.999,26.298,0,36.323s26.223,10.024,36.222,0l262.293-287.164L568.28,476.832\n\t\t\t\tc9.999,10.024,26.222,10.024,36.221,0C614.5,466.809,614.5,450.534,604.501,440.509z"], ["version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "width", "100%", "height", "100%", "viewBox", "0 0 615.52 615.52", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 615.52 615.52"], ["id", "Search__x28_and_thou_shall_find_x29_"], ["d", "M602.531,549.736l-184.31-185.368c26.679-37.72,42.528-83.729,42.528-133.548C460.75,103.35,357.997,0,231.258,0\n\t\t\t\t\tC104.518,0,1.765,103.35,1.765,230.82c0,127.47,102.753,230.82,229.493,230.82c49.53,0,95.271-15.944,132.78-42.777\n\t\t\t\t\tl184.31,185.366c7.482,7.521,17.292,11.291,27.102,11.291c9.812,0,19.62-3.77,27.083-11.291\n\t\t\t\t\tC617.496,589.188,617.496,564.777,602.531,549.736z M355.9,319.763l-15.042,21.273L319.7,356.174\n\t\t\t\t\tc-26.083,18.658-56.667,28.526-88.442,28.526c-84.365,0-152.995-69.035-152.995-153.88c0-84.846,68.63-153.88,152.995-153.88\n\t\t\t\t\ts152.996,69.034,152.996,153.88C384.271,262.769,374.462,293.526,355.9,319.763z"], ["version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 51.976 51.976", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 51.976 51.976"], ["d", "M44.373,7.603c-10.137-10.137-26.632-10.138-36.77,0c-10.138,10.138-10.137,26.632,0,36.77s26.632,10.138,36.77,0\n\t\tC54.51,34.235,54.51,17.74,44.373,7.603z M36.241,36.241c-0.781,0.781-2.047,0.781-2.828,0l-7.425-7.425l-7.778,7.778\n\t\tc-0.781,0.781-2.047,0.781-2.828,0c-0.781-0.781-0.781-2.047,0-2.828l7.778-7.778l-7.425-7.425c-0.781-0.781-0.781-2.048,0-2.828\n\t\tc0.781-0.781,2.047-0.781,2.828,0l7.425,7.425l7.071-7.071c0.781-0.781,2.047-0.781,2.828,0c0.781,0.781,0.781,2.047,0,2.828\n\t\tl-7.071,7.071l7.425,7.425C37.022,34.194,37.022,35.46,36.241,36.241z"]],
  template: function CIcon_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CIcon__svg_svg_0_Template, 3, 0, "svg", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CIcon__svg_svg_1_Template, 5, 0, "svg", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CIcon__svg_svg_2_Template, 5, 0, "svg", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CIcon__svg_svg_3_Template, 6, 0, "svg", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CIcon__svg_svg_4_Template, 3, 0, "svg", 3);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name == "remove");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name == "angle-down");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name == "angle-up");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name == "search");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name == "clear");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
  encapsulation: 2
});

/***/ }),

/***/ 2744:
/*!************************************************************************************!*\
  !*** ./projects/angular-multiselect-dropdown-lib/src/lib/multiselect.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AngularMultiSelect: () => (/* binding */ AngularMultiSelect),
/* harmony export */   AngularMultiSelectModule: () => (/* binding */ AngularMultiSelectModule),
/* harmony export */   DROPDOWN_CONTROL_VALIDATION: () => (/* binding */ DROPDOWN_CONTROL_VALIDATION),
/* harmony export */   DROPDOWN_CONTROL_VALUE_ACCESSOR: () => (/* binding */ DROPDOWN_CONTROL_VALUE_ACCESSOR)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _multiselect_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./multiselect.model */ 2753);
/* harmony import */ var _clickOutside__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clickOutside */ 4164);
/* harmony import */ var _list_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-filter */ 1681);
/* harmony import */ var _menu_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-item */ 4745);
/* harmony import */ var _multiselect_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./multiselect.service */ 9715);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var _virtual_scroll_virtual_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./virtual-scroll/virtual-scroll */ 2818);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 655);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 3317);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 3738);
















const _c0 = ["searchInput"];
const _c1 = ["selectedList"];
const _c2 = ["dropdownList"];
const _c3 = ["cuppaDropdown"];
function AngularMultiSelect_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.settings.text);
  }
}
function AngularMultiSelect_span_6_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r27 = ctx.$implicit;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r27[ctx_r26.settings.labelKey], " ");
  }
}
function AngularMultiSelect_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AngularMultiSelect_span_6_span_1_Template, 2, 1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r3.selectedItems)("ngForTrackBy", ctx_r3.trackByFn.bind(ctx_r3));
  }
}
function AngularMultiSelect_span_7_div_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r30[ctx_r32.settings.labelKey]);
  }
}
function AngularMultiSelect_span_7_div_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "c-templateRenderer", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", ctx_r33.badgeTempl)("item", item_r30);
  }
}
function AngularMultiSelect_span_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AngularMultiSelect_span_7_div_1_span_1_Template, 2, 1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AngularMultiSelect_span_7_div_1_span_2_Template, 2, 2, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AngularMultiSelect_span_7_div_1_Template_span_click_3_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r37);
      const item_r30 = restoredCtx.$implicit;
      const k_r31 = restoredCtx.index;
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      ctx_r36.onItemClick(item_r30, k_r31, $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "c-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r29.badgeTempl);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r29.badgeTempl);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("name", "remove");
  }
}
function AngularMultiSelect_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AngularMultiSelect_span_7_div_1_Template, 5, 3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r4.selectedItems)("ngForTrackBy", ctx_r4.trackByFn.bind(ctx_r4));
  }
}
function AngularMultiSelect_div_8_div_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r39[ctx_r41.settings.labelKey]);
  }
}
function AngularMultiSelect_div_8_div_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "c-templateRenderer", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", ctx_r42.badgeTempl)("item", item_r39);
  }
}
function AngularMultiSelect_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AngularMultiSelect_div_8_div_1_span_1_Template, 2, 1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AngularMultiSelect_div_8_div_1_span_2_Template, 2, 2, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AngularMultiSelect_div_8_div_1_Template_span_click_3_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r46);
      const item_r39 = restoredCtx.$implicit;
      const k_r40 = restoredCtx.index;
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      ctx_r45.onItemClick(item_r39, k_r40, $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "c-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const k_r40 = ctx.index;
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", k_r40 > ctx_r38.settings.badgeShowLimit - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r38.badgeTempl);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r38.badgeTempl);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("name", "remove");
  }
}
function AngularMultiSelect_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AngularMultiSelect_div_8_div_1_Template, 5, 4, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r5.selectedItems)("ngForTrackBy", ctx_r5.trackByFn.bind(ctx_r5));
  }
}
function AngularMultiSelect_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("+", (ctx_r6.selectedItems == null ? null : ctx_r6.selectedItems.length) - ctx_r6.settings.badgeShowLimit, "");
  }
}
function AngularMultiSelect_span_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AngularMultiSelect_span_10_Template_span_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r48);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      ctx_r47.clearSelection($event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "c-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("name", "remove");
  }
}
function AngularMultiSelect_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "c-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("name", "angle-down");
  }
}
function AngularMultiSelect_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "c-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("name", "angle-up");
  }
}
function AngularMultiSelect_div_18_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function AngularMultiSelect_div_18_input_1_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r51);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r50.toggleSelectAll($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", ctx_r49.isSelectAll)("disabled", ctx_r49.settings.limitSelection == (ctx_r49.selectedItems == null ? null : ctx_r49.selectedItems.length))("id", ctx_r49.id);
  }
}
function AngularMultiSelect_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AngularMultiSelect_div_18_input_1_Template, 1, 3, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "label", 39)(3, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r11.settings.showCheckbox);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("for", ctx_r11.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx_r11.isSelectAll);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r11.settings.selectAllText);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", !ctx_r11.isSelectAll);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r11.settings.unSelectAllText);
  }
}
function AngularMultiSelect_img_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 42);
  }
}
function AngularMultiSelect_div_20_span_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AngularMultiSelect_div_20_span_3_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r59);
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r58.clearSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "c-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx_r52.filter == undefined || (ctx_r52.filter == null ? null : ctx_r52.filter.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("name", "clear");
  }
}
function AngularMultiSelect_div_20_span_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AngularMultiSelect_div_20_span_4_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r61);
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r60.resetInfiniteSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "c-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx_r53.filter == undefined || (ctx_r53.filter == null ? null : ctx_r53.filter.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("name", "clear");
  }
}
function AngularMultiSelect_div_20_input_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "input", 49, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function AngularMultiSelect_div_20_input_5_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r64);
      const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r63.filter = $event);
    })("keyup", function AngularMultiSelect_div_20_input_5_Template_input_keyup_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r64);
      const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r65.filterGroupedList());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("placeholder", ctx_r54.settings.searchPlaceholderText)("ngModel", ctx_r54.filter);
  }
}
function AngularMultiSelect_div_20_input_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "input", 49, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function AngularMultiSelect_div_20_input_6_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r68);
      const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r67.filter = $event);
    })("keyup", function AngularMultiSelect_div_20_input_6_Template_input_keyup_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r68);
      const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r69.filteritems($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("placeholder", ctx_r55.settings.searchPlaceholderText)("ngModel", ctx_r55.filter);
  }
}
function AngularMultiSelect_div_20_input_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "input", 49, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function AngularMultiSelect_div_20_input_7_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r72);
      const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r71.filter = $event);
    })("keyup", function AngularMultiSelect_div_20_input_7_Template_input_keyup_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r72);
      const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r73.onKeyUp($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("placeholder", ctx_r56.settings.searchPlaceholderText)("ngModel", ctx_r56.filter);
  }
}
function AngularMultiSelect_div_20_c_templateRenderer_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "c-templateRenderer", 30);
  }
  if (rf & 2) {
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", ctx_r57.searchTempl)("item", ctx_r57.item);
  }
}
function AngularMultiSelect_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 43)(1, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "c-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, AngularMultiSelect_div_20_span_3_Template, 2, 2, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, AngularMultiSelect_div_20_span_4_Template, 2, 2, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, AngularMultiSelect_div_20_input_5_Template, 2, 2, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, AngularMultiSelect_div_20_input_6_Template, 2, 2, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, AngularMultiSelect_div_20_input_7_Template, 2, 2, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, AngularMultiSelect_div_20_c_templateRenderer_8_Template, 1, 2, "c-templateRenderer", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("name", "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r13.settings.lazyLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r13.settings.lazyLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r13.settings.groupBy && !ctx_r13.settings.lazyLoading && !ctx_r13.searchTempl);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r13.settings.groupBy && !ctx_r13.settings.lazyLoading && !ctx_r13.searchTempl);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r13.settings.lazyLoading && !ctx_r13.searchTempl);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r13.searchTempl);
  }
}
function AngularMultiSelect_div_21_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AngularMultiSelect_div_21_div_1_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r77);
      const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r76.toggleFilterSelectAll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "label")(3, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", ctx_r74.isFilterSelectAll)("disabled", ctx_r74.settings.limitSelection == (ctx_r74.selectedItems == null ? null : ctx_r74.selectedItems.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx_r74.isFilterSelectAll);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r74.settings.filterSelectAllText);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", !ctx_r74.isFilterSelectAll);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r74.settings.filterUnSelectAllText);
  }
}
function AngularMultiSelect_div_21_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AngularMultiSelect_div_21_div_2_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r79);
      const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r78.toggleFilterSelectAll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "label")(3, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", ctx_r75.isFilterSelectAll && (ctx_r75.filter == null ? null : ctx_r75.filter.length) > 0)("disabled", ctx_r75.settings.limitSelection == (ctx_r75.selectedItems == null ? null : ctx_r75.selectedItems.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx_r75.isFilterSelectAll);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r75.settings.filterSelectAllText);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", !ctx_r75.isFilterSelectAll);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r75.settings.filterUnSelectAllText);
  }
}
function AngularMultiSelect_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AngularMultiSelect_div_21_div_1_Template, 7, 6, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AngularMultiSelect_div_21_div_2_Template, 7, 6, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r14.settings.groupBy && (ctx_r14.filter == null ? null : ctx_r14.filter.length) > 0 && ctx_r14.filterLength > 0 && !ctx_r14.settings.singleSelection);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r14.settings.groupBy && (ctx_r14.filter == null ? null : ctx_r14.filter.length) > 0 && (ctx_r14.groupedData == null ? null : ctx_r14.groupedData.length) > 0 && !ctx_r14.settings.singleSelection);
  }
}
function AngularMultiSelect_div_22_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AngularMultiSelect_div_22_div_1_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r82);
      const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r81.toggleInfiniteFilterSelectAll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "label")(3, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", ctx_r80.isInfiniteFilterSelectAll)("disabled", ctx_r80.settings.limitSelection == (ctx_r80.selectedItems == null ? null : ctx_r80.selectedItems.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx_r80.isInfiniteFilterSelectAll);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r80.settings.filterSelectAllText);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", !ctx_r80.isInfiniteFilterSelectAll);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r80.settings.filterUnSelectAllText);
  }
}
function AngularMultiSelect_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AngularMultiSelect_div_22_div_1_Template, 7, 6, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r15.filter == null ? null : ctx_r15.filter.length) > 0 && ctx_r15.infiniteFilterLength > 0);
  }
}
function AngularMultiSelect_div_23_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 57)(1, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AngularMultiSelect_div_23_div_1_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r85);
      const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r84.addFilterNewItem());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r83.settings.addNewButtonText);
  }
}
function AngularMultiSelect_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AngularMultiSelect_div_23_div_1_Template, 3, 1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r16.settings.addNewItemOnFilter);
  }
}
function AngularMultiSelect_div_24_li_2_input_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "input", 55);
  }
  if (rf & 2) {
    const item_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", ctx_r89.isSelected(item_r87))("disabled", ctx_r89.settings.limitSelection == (ctx_r89.selectedItems == null ? null : ctx_r89.selectedItems.length) && !ctx_r89.isSelected(item_r87) || item_r87.disabled);
  }
}
const _c4 = function (a0) {
  return {
    "selected-item": a0
  };
};
function AngularMultiSelect_div_24_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AngularMultiSelect_div_24_li_2_Template_li_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r92);
      const item_r87 = restoredCtx.$implicit;
      const i_r88 = restoredCtx.index;
      const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r91.onItemClick(item_r87, i_r88, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AngularMultiSelect_div_24_li_2_input_1_Template, 1, 2, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r87 = ctx.$implicit;
    const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](3, _c4, ctx_r86.isSelected(item_r87) == true));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r86.settings.showCheckbox);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r87[ctx_r86.settings.labelKey]);
  }
}
function AngularMultiSelect_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 59)(1, "ul", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AngularMultiSelect_div_24_li_2_Template, 4, 5, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("max-height", ctx_r17.settings.maxHeight + "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r17.data);
  }
}
function AngularMultiSelect_div_25_li_3_input_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "input", 67);
  }
  if (rf & 2) {
    const item_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", ctx_r97.isSelected(item_r95))("disabled", ctx_r97.settings.limitSelection == (ctx_r97.selectedItems == null ? null : ctx_r97.selectedItems.length) && !ctx_r97.isSelected(item_r95) || item_r95.disabled);
  }
}
function AngularMultiSelect_div_25_li_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AngularMultiSelect_div_25_li_3_Template_li_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r100);
      const item_r95 = restoredCtx.$implicit;
      const i_r96 = restoredCtx.index;
      const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r99.onItemClick(item_r95, i_r96, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AngularMultiSelect_div_25_li_3_input_1_Template, 1, 2, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r95 = ctx.$implicit;
    const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](3, _c4, ctx_r94.isSelected(item_r95) == true));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r94.settings.showCheckbox);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r95[ctx_r94.settings.labelKey]);
  }
}
const _c5 = function (a0) {
  return {
    "height": a0
  };
};
function AngularMultiSelect_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 59)(1, "ul", 64, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("vsStart", function AngularMultiSelect_div_25_Template_ul_vsStart_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r102);
      const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r101.onScrollEnd($event));
    })("vsEnd", function AngularMultiSelect_div_25_Template_ul_vsEnd_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r102);
      const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r103.onScrollEnd($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, AngularMultiSelect_div_25_li_3_Template, 4, 5, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](2);
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("max-height", ctx_r18.settings.maxHeight + "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("enableUnequalChildrenSizes", ctx_r18.randomSize)("items", ctx_r18.virtualdata)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](6, _c5, ctx_r18.settings.maxHeight + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _r93.viewPortItems);
  }
}
function AngularMultiSelect_div_26_li_2_input_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "input", 67);
  }
  if (rf & 2) {
    const item_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", ctx_r107.isSelected(item_r105))("disabled", ctx_r107.settings.limitSelection == (ctx_r107.selectedItems == null ? null : ctx_r107.selectedItems.length) && !ctx_r107.isSelected(item_r105) || item_r105.disabled);
  }
}
function AngularMultiSelect_div_26_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r110 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AngularMultiSelect_div_26_li_2_Template_li_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r110);
      const item_r105 = restoredCtx.$implicit;
      const i_r106 = restoredCtx.index;
      const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r109.onItemClick(item_r105, i_r106, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AngularMultiSelect_div_26_li_2_input_1_Template, 1, 2, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "label")(3, "c-templateRenderer", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r105 = ctx.$implicit;
    const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](4, _c4, ctx_r104.isSelected(item_r105) == true));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r104.settings.showCheckbox);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", ctx_r104.itemTempl)("item", item_r105);
  }
}
function AngularMultiSelect_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 59)(1, "ul", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AngularMultiSelect_div_26_li_2_Template, 4, 6, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("max-height", ctx_r19.settings.maxHeight + "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r19.data);
  }
}
function AngularMultiSelect_div_27_li_3_input_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "input", 67);
  }
  if (rf & 2) {
    const item_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", ctx_r115.isSelected(item_r113))("disabled", ctx_r115.settings.limitSelection == (ctx_r115.selectedItems == null ? null : ctx_r115.selectedItems.length) && !ctx_r115.isSelected(item_r113) || item_r113.disabled);
  }
}
function AngularMultiSelect_div_27_li_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r118 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AngularMultiSelect_div_27_li_3_Template_li_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r118);
      const item_r113 = restoredCtx.$implicit;
      const i_r114 = restoredCtx.index;
      const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r117.onItemClick(item_r113, i_r114, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AngularMultiSelect_div_27_li_3_input_1_Template, 1, 2, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "label")(3, "c-templateRenderer", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r113 = ctx.$implicit;
    const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](4, _c4, ctx_r112.isSelected(item_r113) == true));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r112.settings.showCheckbox);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", ctx_r112.itemTempl)("item", item_r113);
  }
}
function AngularMultiSelect_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r120 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 59)(1, "ul", 64, 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("vsStart", function AngularMultiSelect_div_27_Template_ul_vsStart_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r120);
      const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r119.onScrollEnd($event));
    })("vsEnd", function AngularMultiSelect_div_27_Template_ul_vsEnd_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r120);
      const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r121.onScrollEnd($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, AngularMultiSelect_div_27_li_3_Template, 4, 6, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r111 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](2);
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("max-height", ctx_r20.settings.maxHeight + "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("enableUnequalChildrenSizes", ctx_r20.randomSize)("items", ctx_r20.virtualdata)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](6, _c5, ctx_r20.settings.maxHeight + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _r111.viewPortItems);
  }
}
function AngularMultiSelect_div_28_span_3_li_1_input_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "input", 67);
  }
  if (rf & 2) {
    const item_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    const ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", ctx_r128.isSelected(item_r124))("disabled", ctx_r128.settings.limitSelection == (ctx_r128.selectedItems == null ? null : ctx_r128.selectedItems.length) && !ctx_r128.isSelected(item_r124) || item_r124.disabled);
  }
}
const _c6 = function (a0, a1) {
  return {
    "grp-title": a0,
    "grp-item": a1
  };
};
function AngularMultiSelect_div_28_span_3_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r132 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AngularMultiSelect_div_28_span_3_li_1_Template_li_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r132);
      const ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      const item_r124 = ctx_r131.$implicit;
      const i_r125 = ctx_r131.index;
      const ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r130.onItemClick(item_r124, i_r125, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AngularMultiSelect_div_28_span_3_li_1_input_1_Template, 1, 2, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "label")(3, "c-templateRenderer", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](4, _c6, item_r124.grpTitle, !item_r124.grpTitle && !ctx_r126.settings.singleSelection));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r126.settings.showCheckbox && !ctx_r126.settings.singleSelection);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", ctx_r126.itemTempl)("item", item_r124);
  }
}
function AngularMultiSelect_div_28_span_3_li_2_input_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "input", 67);
  }
  if (rf & 2) {
    const item_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    const ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", ctx_r134.isSelected(item_r124))("disabled", ctx_r134.settings.limitSelection == (ctx_r134.selectedItems == null ? null : ctx_r134.selectedItems.length) && !ctx_r134.isSelected(item_r124) || item_r124.disabled);
  }
}
function AngularMultiSelect_div_28_span_3_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AngularMultiSelect_div_28_span_3_li_2_input_1_Template, 1, 2, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "label")(3, "c-templateRenderer", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](4, _c6, item_r124.grpTitle, !item_r124.grpTitle && !ctx_r127.settings.singleSelection));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r127.settings.showCheckbox);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", ctx_r127.itemTempl)("item", item_r124);
  }
}
function AngularMultiSelect_div_28_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AngularMultiSelect_div_28_span_3_li_1_Template, 4, 7, "li", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AngularMultiSelect_div_28_span_3_li_2_Template, 4, 7, "li", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r124 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !item_r124.grpTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r124.grpTitle);
  }
}
function AngularMultiSelect_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r138 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 59)(1, "ul", 64, 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("vsStart", function AngularMultiSelect_div_28_Template_ul_vsStart_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r138);
      const ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r137.onScrollEnd($event));
    })("vsEnd", function AngularMultiSelect_div_28_Template_ul_vsEnd_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r138);
      const ctx_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r139.onScrollEnd($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, AngularMultiSelect_div_28_span_3_Template, 3, 2, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r122 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](2);
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("max-height", ctx_r21.settings.maxHeight + "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("enableUnequalChildrenSizes", ctx_r21.randomSize)("items", ctx_r21.virtualdata)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](6, _c5, ctx_r21.settings.maxHeight + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _r122.viewPortItems);
  }
}
function AngularMultiSelect_div_29_span_2_input_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "input", 67);
  }
  if (rf & 2) {
    const item_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", item_r141.selected)("disabled", ctx_r143.settings.limitSelection == (ctx_r143.selectedItems == null ? null : ctx_r143.selectedItems.length) && !ctx_r143.isSelected(item_r141) || item_r141.disabled);
  }
}
function AngularMultiSelect_div_29_span_2_span_6_input_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "input", 67);
  }
  if (rf & 2) {
    const val_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", ctx_r148.isSelected(val_r146))("disabled", ctx_r148.settings.limitSelection == (ctx_r148.selectedItems == null ? null : ctx_r148.selectedItems.length) && !ctx_r148.isSelected(val_r146) || val_r146.disabled);
  }
}
function AngularMultiSelect_div_29_span_2_span_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r151 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span")(1, "li", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AngularMultiSelect_div_29_span_2_span_6_Template_li_click_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r151);
      const val_r146 = restoredCtx.$implicit;
      const j_r147 = restoredCtx.index;
      const ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      ctx_r150.onItemClick(val_r146, j_r147, $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AngularMultiSelect_div_29_span_2_span_6_input_2_Template, 1, 2, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "label")(4, "c-templateRenderer", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const val_r146 = ctx.$implicit;
    const ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](4, _c6, val_r146.grpTitle, !val_r146.grpTitle && !ctx_r144.settings.singleSelection));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r144.settings.showCheckbox);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", ctx_r144.itemTempl)("item", val_r146);
  }
}
function AngularMultiSelect_div_29_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r153 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span")(1, "li", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AngularMultiSelect_div_29_span_2_Template_li_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r153);
      const item_r141 = restoredCtx.$implicit;
      const ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r152.selectGroup(item_r141));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AngularMultiSelect_div_29_span_2_input_2_Template, 1, 2, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "ul", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, AngularMultiSelect_div_29_span_2_span_6_Template, 5, 7, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r141 = ctx.$implicit;
    const ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](4, _c6, item_r141.grpTitle, !item_r141.grpTitle && !ctx_r140.settings.singleSelection));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r140.settings.showCheckbox && !ctx_r140.settings.singleSelection);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r141[ctx_r140.settings.labelKey]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", item_r141.list);
  }
}
function AngularMultiSelect_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 59)(1, "ul", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AngularMultiSelect_div_29_span_2_Template, 7, 7, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("max-height", ctx_r22.settings.maxHeight + "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r22.groupedData);
  }
}
function AngularMultiSelect_div_30_span_4_li_1_input_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "input", 67);
  }
  if (rf & 2) {
    const item_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    const ctx_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", ctx_r160.isSelected(item_r156))("disabled", ctx_r160.settings.limitSelection == (ctx_r160.selectedItems == null ? null : ctx_r160.selectedItems.length) && !ctx_r160.isSelected(item_r156) || item_r156.disabled);
  }
}
const _c7 = function (a0, a1, a2) {
  return {
    "grp-title": a0,
    "grp-item": a1,
    "selected-item": a2
  };
};
function AngularMultiSelect_div_30_span_4_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AngularMultiSelect_div_30_span_4_li_1_input_1_Template, 1, 2, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r158 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction3"](3, _c7, item_r156.grpTitle, !item_r156.grpTitle && !ctx_r158.settings.singleSelection, ctx_r158.isSelected(item_r156) == true));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r158.settings.showCheckbox && !item_r156.grpTitle && !ctx_r158.settings.singleSelection);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r156[ctx_r158.settings.labelKey]);
  }
}
function AngularMultiSelect_div_30_span_4_li_2_input_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "input", 67);
  }
  if (rf & 2) {
    const item_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    const ctx_r163 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", ctx_r163.isSelected(item_r156))("disabled", ctx_r163.settings.limitSelection == (ctx_r163.selectedItems == null ? null : ctx_r163.selectedItems.length) && !ctx_r163.isSelected(item_r156) || item_r156.disabled);
  }
}
function AngularMultiSelect_div_30_span_4_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r167 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AngularMultiSelect_div_30_span_4_li_2_Template_li_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r167);
      const ctx_r166 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      const item_r156 = ctx_r166.$implicit;
      const i_r157 = ctx_r166.index;
      const ctx_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r165.onItemClick(item_r156, i_r157, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AngularMultiSelect_div_30_span_4_li_2_input_1_Template, 1, 2, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction3"](3, _c7, item_r156.grpTitle, !item_r156.grpTitle && !ctx_r159.settings.singleSelection, ctx_r159.isSelected(item_r156) == true));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r159.settings.showCheckbox && !item_r156.grpTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r156[ctx_r159.settings.labelKey]);
  }
}
function AngularMultiSelect_div_30_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AngularMultiSelect_div_30_span_4_li_1_Template, 4, 7, "li", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AngularMultiSelect_div_30_span_4_li_2_Template, 4, 7, "li", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r156 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r156.grpTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !item_r156.grpTitle);
  }
}
function AngularMultiSelect_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r170 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 59)(1, "virtual-scroller", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("vsUpdate", function AngularMultiSelect_div_30_Template_virtual_scroller_vsUpdate_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r170);
      const ctx_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r169.viewPortItems = $event);
    })("vsEnd", function AngularMultiSelect_div_30_Template_virtual_scroller_vsEnd_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r170);
      const ctx_r171 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r171.onScrollEnd($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "ul", 64, 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("vsStart", function AngularMultiSelect_div_30_Template_ul_vsStart_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r170);
      const ctx_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r172.onScrollEnd($event));
    })("vsEnd", function AngularMultiSelect_div_30_Template_ul_vsEnd_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r170);
      const ctx_r173 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r173.onScrollEnd($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, AngularMultiSelect_div_30_span_4_Template, 3, 2, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const _r154 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](3);
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("max-height", ctx_r23.settings.maxHeight + "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("items", ctx_r23.groupedData)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](8, _c5, ctx_r23.settings.maxHeight + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("enableUnequalChildrenSizes", ctx_r23.randomSize)("items", ctx_r23.virtualdata)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](10, _c5, ctx_r23.settings.maxHeight + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _r154.viewPortItems);
  }
}
function AngularMultiSelect_div_31_span_2_input_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "input", 67);
  }
  if (rf & 2) {
    const item_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", item_r175.selected)("disabled", ctx_r177.settings.limitSelection == (ctx_r177.selectedItems == null ? null : ctx_r177.selectedItems.length) && !ctx_r177.isSelected(item_r175) || item_r175.disabled);
  }
}
function AngularMultiSelect_div_31_span_2_span_6_input_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "input", 67);
  }
  if (rf & 2) {
    const val_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", ctx_r182.isSelected(val_r180))("disabled", ctx_r182.settings.limitSelection == (ctx_r182.selectedItems == null ? null : ctx_r182.selectedItems.length) && !ctx_r182.isSelected(val_r180) || val_r180.disabled);
  }
}
const _c8 = function (a0, a1, a2) {
  return {
    "selected-item": a0,
    "grp-title": a1,
    "grp-item": a2
  };
};
function AngularMultiSelect_div_31_span_2_span_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r185 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span")(1, "li", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AngularMultiSelect_div_31_span_2_span_6_Template_li_click_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r185);
      const val_r180 = restoredCtx.$implicit;
      const j_r181 = restoredCtx.index;
      const ctx_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      ctx_r184.onItemClick(val_r180, j_r181, $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AngularMultiSelect_div_31_span_2_span_6_input_2_Template, 1, 2, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const val_r180 = ctx.$implicit;
    const ctx_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction3"](3, _c8, ctx_r178.isSelected(val_r180) == true, val_r180.grpTitle, !val_r180.grpTitle && !ctx_r178.settings.singleSelection));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r178.settings.showCheckbox);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](val_r180[ctx_r178.settings.labelKey]);
  }
}
function AngularMultiSelect_div_31_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r187 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span")(1, "li", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AngularMultiSelect_div_31_span_2_Template_li_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r187);
      const item_r175 = restoredCtx.$implicit;
      const ctx_r186 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r186.selectGroup(item_r175));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AngularMultiSelect_div_31_span_2_input_2_Template, 1, 2, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "ul", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, AngularMultiSelect_div_31_span_2_span_6_Template, 5, 7, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r175 = ctx.$implicit;
    const ctx_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](4, _c6, item_r175.grpTitle, !item_r175.grpTitle && !ctx_r174.settings.singleSelection));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r174.settings.showCheckbox && !ctx_r174.settings.singleSelection);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r175[ctx_r174.settings.labelKey]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", item_r175.list);
  }
}
function AngularMultiSelect_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 59)(1, "ul", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AngularMultiSelect_div_31_span_2_Template, 7, 7, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("max-height", ctx_r24.settings.maxHeight + "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r24.groupedData);
  }
}
function AngularMultiSelect_h5_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h5", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r25.settings.noDataLabel);
  }
}
const _c9 = function (a0) {
  return {
    "disabled": a0
  };
};
const _c10 = function (a0) {
  return {
    "tagToBody": a0
  };
};
const _c11 = function (a0, a1) {
  return {
    "arrow-up": a0,
    "arrow-down": a1
  };
};
const _c12 = function (a0) {
  return {
    "single-select-mode": a0
  };
};
const DROPDOWN_CONTROL_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.forwardRef)(() => AngularMultiSelect),
  multi: true
};
const DROPDOWN_CONTROL_VALIDATION = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NG_VALIDATORS,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.forwardRef)(() => AngularMultiSelect),
  multi: true
};
const noop = () => {};
class AngularMultiSelect {
  onEscapeDown(event) {
    if (this.settings.escapeToClose) {
      this.closeDropdown();
    }
  }
  onScroll(event) {
    if (this.isActive && this.settings.tagToBody) {
      this.closeDropdown();
      /*             const elem = this.cuppaDropdown.nativeElement;
                  if(this.settings.autoPosition){
                      this.dropDownTop = elem.getBoundingClientRect().y + elem.clientHeight + 1;
                  }
                  this.dropDownLeft = elem.getBoundingClientRect().x; */
    }
  }

  constructor(_elementRef, cdr, filterPipe) {
    this._elementRef = _elementRef;
    this.cdr = cdr;
    this.filterPipe = filterPipe;
    this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.onDeSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.onSelectAll = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.onDeSelectAll = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.onOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.onScrollToEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.onFilterSelectAll = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.onFilterDeSelectAll = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.onAddFilterNewItem = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.onGroupSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.onGroupDeSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.virtualdata = [];
    this.searchTerm$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.isActive = false;
    this.isSelectAll = false;
    this.isFilterSelectAll = false;
    this.isInfiniteFilterSelectAll = false;
    this.chunkIndex = [];
    this.cachedItems = [];
    this.groupCachedItems = [];
    this.itemHeight = 41.6;
    this.filterLength = 0;
    this.infiniteFilterLength = 0;
    this.dropdownListYOffset = 0;
    this.dropDownWidth = 0;
    this.dropDownTop = '';
    this.dropDownBottom = 'unset';
    this.dropDownLeft = 0;
    this.id = Math.random().toString(36).substring(2);
    this.defaultSettings = {
      singleSelection: false,
      text: 'Select',
      enableCheckAll: true,
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      filterSelectAllText: 'Select all filtered results',
      filterUnSelectAllText: 'UnSelect all filtered results',
      enableSearchFilter: false,
      searchBy: [],
      maxHeight: 300,
      badgeShowLimit: 999999999999,
      classes: '',
      disabled: false,
      searchPlaceholderText: 'Search',
      showCheckbox: true,
      noDataLabel: 'No Data Available',
      searchAutofocus: true,
      lazyLoading: false,
      labelKey: 'itemName',
      primaryKey: 'id',
      position: 'bottom',
      autoPosition: true,
      enableFilterSelectAll: true,
      selectGroup: false,
      addNewItemOnFilter: false,
      addNewButtonText: "Add",
      escapeToClose: true,
      clearAll: true,
      tagToBody: true
    };
    this.randomSize = true;
    this.filteredList = [];
    this.virtualScroollInit = false;
    this.isDisabledItemPresent = false;
    this.onTouchedCallback = noop;
    this.onChangeCallback = noop;
    this.searchTerm$.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.debounceTime)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(term => term)).subscribe(val => {
      this.filterInfiniteList(val);
    });
  }
  ngOnInit() {
    this.settings = Object.assign(this.defaultSettings, this.settings);
    this.cachedItems = this.cloneArray(this.data);
    if (this.settings.position == 'top') {
      setTimeout(() => {
        this.selectedListHeight = {
          val: 0
        };
        this.selectedListHeight.val = this.selectedListElem.nativeElement.clientHeight;
      });
    }
    setTimeout(() => {
      this.calculateDropdownDirection();
    });
    this.virtualScroollInit = false;
  }
  onKeyUp(evt) {
    this.searchTerm$.next(evt.target.value);
  }
  ngOnChanges(changes) {
    if (changes.data && !changes.data.firstChange) {
      if (this.settings.groupBy) {
        this.groupedData = this.transformData(this.data, this.settings.groupBy);
        if (this.data.length == 0) {
          this.selectedItems = [];
        }
        this.groupCachedItems = this.cloneArray(this.groupedData);
      }
      this.cachedItems = this.cloneArray(this.data);
    }
    if (changes.settings && !changes.settings.firstChange) {
      this.settings = Object.assign(this.defaultSettings, this.settings);
    }
    if (changes.loading) {}
    if (this.settings.lazyLoading && this.virtualScroollInit && changes.data) {
      this.virtualdata = changes.data.currentValue;
    }
  }
  ngDoCheck() {
    if (this.selectedItems) {
      if (this.selectedItems.length == 0 || this.data.length == 0 || this.selectedItems.length < this.data.length) {
        this.isSelectAll = false;
      }
    }
  }
  ngAfterViewInit() {
    if (this.settings.lazyLoading) {
      // this._elementRef.nativeElement.getElementsByClassName("lazyContainer")[0].addEventListener('scroll', this.onScroll.bind(this));
    }
  }
  ngAfterViewChecked() {
    if (this.selectedListElem.nativeElement.clientHeight && this.settings.position == 'top' && this.selectedListHeight) {
      this.selectedListHeight.val = this.selectedListElem.nativeElement.clientHeight;
      this.cdr.detectChanges();
    }
    //this.calculateDropdownDirection();
  }

  onItemClick(item, index, evt) {
    if (item.disabled) {
      return;
    }
    if (this.settings.disabled) {
      return;
    }
    let found = this.isSelected(item);
    let limit = this.selectedItems.length < this.settings.limitSelection ? true : false;
    if (!found) {
      if (this.settings.limitSelection) {
        if (limit) {
          this.addSelected(item);
          this.onSelect.emit(item);
        }
      } else {
        this.addSelected(item);
        this.onSelect.emit(item);
      }
    } else {
      this.removeSelected(item);
      this.onDeSelect.emit(item);
    }
    if (this.isSelectAll || this.data.length > this.selectedItems.length) {
      this.isSelectAll = false;
    }
    if (this.data.length == this.selectedItems.length) {
      this.isSelectAll = true;
    }
    if (this.settings.groupBy) {
      this.updateGroupInfo(item);
    }
  }
  validate(c) {
    return null;
  }
  writeValue(value) {
    if (value !== undefined && value !== null && value !== '') {
      if (this.settings.singleSelection) {
        if (this.settings.groupBy) {
          this.groupedData = this.transformData(this.data, this.settings.groupBy);
          this.groupCachedItems = this.cloneArray(this.groupedData);
          this.selectedItems = [value[0]];
        } else {
          try {
            if (value.length > 1) {
              this.selectedItems = [value[0]];
              throw new _multiselect_model__WEBPACK_IMPORTED_MODULE_0__.MyException(404, {
                "msg": "Single Selection Mode, Selected Items cannot have more than one item."
              });
            } else {
              this.selectedItems = value;
            }
          } catch (e) {
            console.error(e.body.msg);
          }
        }
      } else {
        if (this.settings.limitSelection) {
          this.selectedItems = value.slice(0, this.settings.limitSelection);
        } else {
          this.selectedItems = value;
        }
        if (this.selectedItems.length === this.data.length && this.data.length > 0) {
          this.isSelectAll = true;
        }
        if (this.settings.groupBy) {
          this.groupedData = this.transformData(this.data, this.settings.groupBy);
          this.groupCachedItems = this.cloneArray(this.groupedData);
        }
      }
    } else {
      this.selectedItems = [];
    }
  }
  //From ControlValueAccessor interface
  registerOnChange(fn) {
    this.onChangeCallback = fn;
  }
  //From ControlValueAccessor interface
  registerOnTouched(fn) {
    this.onTouchedCallback = fn;
  }
  trackByFn(index, item) {
    return item[this.settings.primaryKey];
  }
  isSelected(clickedItem) {
    if (clickedItem.disabled) {
      return false;
    }
    let found = false;
    this.selectedItems && this.selectedItems.forEach(item => {
      if (clickedItem[this.settings.primaryKey] === item[this.settings.primaryKey]) {
        found = true;
      }
    });
    return found;
  }
  addSelected(item) {
    if (item.disabled) {
      return;
    }
    if (this.settings.singleSelection) {
      this.selectedItems = [];
      this.selectedItems.push(item);
      this.closeDropdown();
    } else this.selectedItems.push(item);
    this.onChangeCallback(this.selectedItems);
    this.onTouchedCallback(this.selectedItems);
  }
  removeSelected(clickedItem) {
    this.selectedItems && this.selectedItems.forEach(item => {
      if (clickedItem[this.settings.primaryKey] === item[this.settings.primaryKey]) {
        this.selectedItems.splice(this.selectedItems.indexOf(item), 1);
      }
    });
    this.onChangeCallback(this.selectedItems);
    this.onTouchedCallback(this.selectedItems);
  }
  toggleDropdown(evt) {
    if (this.settings.disabled) {
      return;
    }
    this.isActive = !this.isActive;
    if (this.isActive) {
      this.openDropdown();
    } else {
      this.closeDropdown();
    }
    if (this.settings.lazyLoading) {
      this.virtualdata = this.data;
      this.virtualScroollInit = true;
    }
    evt.preventDefault();
  }
  openDropdown() {
    if (this.settings.disabled) {
      return;
    }
    this.isActive = true;
    this.calculateDropdownDirection();
    if (this.settings.searchAutofocus && this.searchInput && this.settings.enableSearchFilter && !this.searchTempl) {
      setTimeout(() => {
        this.searchInput.nativeElement.focus();
      }, 0);
    }
    this.onOpen.emit(true);
  }
  closeDropdown() {
    if (this.searchInput && this.settings.lazyLoading) {
      this.searchInput.nativeElement.value = "";
    }
    if (this.searchInput) {
      this.searchInput.nativeElement.value = "";
    }
    this.filter = "";
    this.isActive = false;
    this.searchTerm$.next('');
    this.onClose.emit(false);
  }
  closeDropdownOnClickOut() {
    if (this.isActive) {
      if (this.searchInput && this.settings.lazyLoading) {
        this.searchInput.nativeElement.value = "";
      }
      if (this.searchInput) {
        this.searchInput.nativeElement.value = "";
      }
      this.filter = "";
      this.isActive = false;
      this.clearSearch();
      this.searchTerm$.next('');
      this.onClose.emit(false);
    }
  }
  toggleSelectAll(event) {
    if (!this.isSelectAll) {
      this.selectedItems = [];
      if (this.settings.groupBy) {
        this.groupedData.forEach(obj => {
          obj.selected = !obj.disabled;
        });
        this.groupCachedItems.forEach(obj => {
          obj.selected = !obj.disabled;
        });
      }
      // this.selectedItems = this.data.slice();
      this.selectedItems = this.data.filter(individualData => !individualData.disabled);
      this.isSelectAll = true;
      this.onChangeCallback(this.selectedItems);
      this.onTouchedCallback(this.selectedItems);
      this.onSelectAll.emit(this.selectedItems);
    } else {
      if (this.settings.groupBy) {
        this.groupedData.forEach(obj => {
          obj.selected = false;
        });
        this.groupCachedItems.forEach(obj => {
          obj.selected = false;
        });
      }
      this.selectedItems = [];
      this.isSelectAll = false;
      this.onChangeCallback(this.selectedItems);
      this.onTouchedCallback(this.selectedItems);
      this.onDeSelectAll.emit(this.selectedItems);
    }
    setTimeout(() => {
      this.calculateDropdownDirection();
    });
    event.stopPropagation();
  }
  filterGroupedList() {
    if (this.filter == "" || this.filter == null) {
      this.clearSearch();
      return;
    }
    this.groupedData = this.cloneArray(this.groupCachedItems);
    this.groupedData = this.groupedData.filter(obj => {
      let arr = [];
      if (obj[this.settings.labelKey].toLowerCase().indexOf(this.filter.toLowerCase()) > -1) {
        arr = obj.list;
      } else {
        arr = obj.list.filter(t => {
          return t[this.settings.labelKey].toLowerCase().indexOf(this.filter.toLowerCase()) > -1;
        });
      }
      obj.list = arr;
      if (obj[this.settings.labelKey].toLowerCase().indexOf(this.filter.toLowerCase()) > -1) {
        return arr;
      } else {
        return arr.some(cat => {
          return cat[this.settings.labelKey].toLowerCase().indexOf(this.filter.toLowerCase()) > -1;
        });
      }
    });
  }
  toggleFilterSelectAll() {
    if (!this.isFilterSelectAll) {
      let added = [];
      if (this.settings.groupBy) {
        this.groupedData.forEach(item => {
          item.sele;
          if (item.list) {
            item.list.forEach(el => {
              if (!this.isSelected(el)) {
                this.addSelected(el);
                added.push(el);
              }
            });
          }
          this.updateGroupInfo(item);
        });
        this.filteredList.forEach(el => {
          if (!this.isSelected(el) && !el.hasOwnProperty('grpTitle')) {
            this.addSelected(el);
            added.push(el);
          }
        });
      } else {
        this.filteredList.forEach(item => {
          if (!this.isSelected(item)) {
            this.addSelected(item);
            added.push(item);
          }
        });
      }
      this.isFilterSelectAll = true;
      this.onFilterSelectAll.emit(added);
    } else {
      let removed = [];
      if (this.settings.groupBy) {
        this.groupedData.forEach(item => {
          if (item.list) {
            item.list.forEach(el => {
              if (this.isSelected(el)) {
                this.removeSelected(el);
                removed.push(el);
              }
            });
          }
          this.updateGroupInfo(item);
        });
        this.filteredList.forEach(el => {
          if (this.isSelected(el)) {
            this.removeSelected(el);
            removed.push(el);
          }
        });
      } else {
        this.filteredList.forEach(item => {
          if (this.isSelected(item)) {
            this.removeSelected(item);
            removed.push(item);
          }
        });
      }
      this.isFilterSelectAll = false;
      this.onFilterDeSelectAll.emit(removed);
    }
  }
  toggleInfiniteFilterSelectAll() {
    if (!this.isInfiniteFilterSelectAll) {
      this.virtualdata.forEach(item => {
        if (!this.isSelected(item)) {
          this.addSelected(item);
        }
      });
      this.isInfiniteFilterSelectAll = true;
    } else {
      this.virtualdata.forEach(item => {
        if (this.isSelected(item)) {
          this.removeSelected(item);
        }
      });
      this.isInfiniteFilterSelectAll = false;
    }
  }
  clearSearch() {
    if (this.settings.groupBy) {
      this.groupedData = [];
      this.groupedData = this.cloneArray(this.groupCachedItems);
    }
    this.filter = "";
    this.isFilterSelectAll = false;
    this.searchTerm$.next('');
    this.data = this.cachedItems;
  }
  onFilterChange(data) {
    if (this.filter && this.filter == "" || data.length == 0) {
      this.isFilterSelectAll = false;
      this.data = this.cachedItems.slice();
    }
    let cnt = 0;
    data.forEach(item => {
      if (!item.hasOwnProperty('grpTitle') && this.isSelected(item)) {
        cnt++;
      }
    });
    if (cnt > 0 && this.filterLength == cnt) {
      this.isFilterSelectAll = true;
    } else if (cnt > 0 && this.filterLength != cnt) {
      this.isFilterSelectAll = false;
    }
    this.data = data;
  }
  cloneArray(arr) {
    let i, copy;
    if (Array.isArray(arr)) {
      return JSON.parse(JSON.stringify(arr));
    } else if (typeof arr === 'object') {
      throw 'Cannot clone array containing an object!';
    } else {
      return arr;
    }
  }
  updateGroupInfo(item) {
    if (item.disabled) {
      return;
    }
    let key = this.settings.groupBy;
    this.groupedData.forEach(obj => {
      let cnt = 0;
      if (obj.grpTitle && item[key] == obj[key]) {
        if (obj.list) {
          obj.list.forEach(el => {
            if (this.isSelected(el)) {
              cnt++;
            }
          });
        }
      }
      if (obj.list && cnt === obj.list.length && item[key] == obj[key]) {
        obj.selected = true;
      } else if (obj.list && cnt != obj.list.length && item[key] == obj[key]) {
        obj.selected = false;
      }
    });
    this.groupCachedItems.forEach(obj => {
      let cnt = 0;
      if (obj.grpTitle && item[key] == obj[key]) {
        if (obj.list) {
          obj.list.forEach(el => {
            if (this.isSelected(el)) {
              cnt++;
            }
          });
        }
      }
      if (obj.list && cnt === obj.list.length && item[key] == obj[key]) {
        obj.selected = true;
      } else if (obj.list && cnt != obj.list.length && item[key] == obj[key]) {
        obj.selected = false;
      }
    });
  }
  transformData(arr, field) {
    const groupedObj = arr.reduce((prev, cur) => {
      if (!prev[cur[field]]) {
        prev[cur[field]] = [cur];
      } else {
        prev[cur[field]].push(cur);
      }
      return prev;
    }, {});
    const tempArr = [];
    Object.keys(groupedObj).map(x => {
      let obj = {};
      let disabledChildrens = [];
      obj["grpTitle"] = true;
      obj[this.settings.labelKey] = x;
      obj[this.settings.groupBy] = x;
      obj['selected'] = false;
      obj['list'] = [];
      let cnt = 0;
      groupedObj[x].forEach(item => {
        item['list'] = [];
        if (item.disabled) {
          this.isDisabledItemPresent = true;
          disabledChildrens.push(item);
        }
        obj.list.push(item);
        if (this.isSelected(item)) {
          cnt++;
        }
      });
      if (cnt == obj.list.length) {
        obj.selected = true;
      } else {
        obj.selected = false;
      }
      // Check if current group item's all childrens are disabled or not
      obj['disabled'] = disabledChildrens.length === groupedObj[x].length;
      tempArr.push(obj);
      // obj.list.forEach((item: any) => {
      //     tempArr.push(item);
      // });
    });

    return tempArr;
  }
  filterInfiniteList(evt) {
    let filteredElems = [];
    if (this.settings.groupBy) {
      this.groupedData = this.groupCachedItems.slice();
    } else {
      this.data = this.cachedItems.slice();
      this.virtualdata = this.cachedItems.slice();
    }
    if ((evt != null || evt != '') && !this.settings.groupBy) {
      if (this.settings.searchBy.length > 0) {
        for (let t = 0; t < this.settings.searchBy.length; t++) {
          this.virtualdata.filter(el => {
            if (el[this.settings.searchBy[t].toString()].toString().toLowerCase().indexOf(evt.toString().toLowerCase()) >= 0) {
              filteredElems.push(el);
            }
          });
        }
      } else {
        this.virtualdata.filter(function (el) {
          for (let prop in el) {
            if (el[prop].toString().toLowerCase().indexOf(evt.toString().toLowerCase()) >= 0) {
              filteredElems.push(el);
              break;
            }
          }
        });
      }
      this.virtualdata = [];
      this.virtualdata = filteredElems;
      this.infiniteFilterLength = this.virtualdata.length;
    }
    if (evt.toString() != '' && this.settings.groupBy) {
      this.groupedData.filter(function (el) {
        if (el.hasOwnProperty('grpTitle')) {
          filteredElems.push(el);
        } else {
          for (let prop in el) {
            if (el[prop].toString().toLowerCase().indexOf(evt.toString().toLowerCase()) >= 0) {
              filteredElems.push(el);
              break;
            }
          }
        }
      });
      this.groupedData = [];
      this.groupedData = filteredElems;
      this.infiniteFilterLength = this.groupedData.length;
    } else if (evt.toString() == '' && this.cachedItems.length > 0) {
      this.virtualdata = [];
      this.virtualdata = this.cachedItems;
      this.infiniteFilterLength = 0;
    }
    if (this.virtualScroller) {
      this.virtualScroller.refresh();
    }
  }
  resetInfiniteSearch() {
    this.filter = "";
    this.isInfiniteFilterSelectAll = false;
    this.virtualdata = [];
    this.virtualdata = this.cachedItems;
    this.groupedData = this.groupCachedItems;
    this.searchTerm$.next('');
    this.infiniteFilterLength = 0;
  }
  onScrollEnd(e) {
    if (e.endIndex === this.data.length - 1 || e.startIndex === 0) {}
    this.onScrollToEnd.emit(e);
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  selectGroup(item) {
    if (item.disabled) {
      return;
    }
    if (item.selected) {
      item.selected = false;
      item.list.forEach(obj => {
        this.removeSelected(obj);
      });
      this.onGroupDeSelect.emit(item);
      this.updateGroupInfo(item);
    } else {
      item.selected = true;
      item.list.forEach(obj => {
        if (!this.isSelected(obj)) {
          this.addSelected(obj);
        }
      });
      this.onGroupSelect.emit(item);
      this.updateGroupInfo(item);
    }
  }
  addFilterNewItem() {
    this.onAddFilterNewItem.emit(this.filter);
    this.filterPipe.transform(this.data, this.filter, this.settings.searchBy);
  }
  calculateDropdownDirection() {
    let shouldOpenTowardsTop = this.settings.position == 'top';
    const elem = this.cuppaDropdown.nativeElement;
    const dropdownWidth = elem.clientWidth;
    this.dropDownWidth = dropdownWidth;
    this.dropDownLeft = this.settings.tagToBody ? elem.getBoundingClientRect().x : 'unset';
    if (this.settings.position == 'top' && !this.settings.autoPosition) {
      this.openTowardsTop(true);
    } else if (this.settings.position == 'bottom' && !this.settings.autoPosition) {
      this.openTowardsTop(false);
    }
    if (this.settings.autoPosition) {
      const dropdownHeight = this.defaultSettings.maxHeight;
      const viewportHeight = document.documentElement.clientHeight;
      const selectedListBounds = this.selectedListElem.nativeElement.getBoundingClientRect();
      const spaceOnTop = selectedListBounds.top;
      const spaceOnBottom = viewportHeight - selectedListBounds.top;
      if (spaceOnBottom < spaceOnTop && dropdownHeight < spaceOnTop) {
        this.openTowardsTop(true);
      } else {
        this.openTowardsTop(false);
      }
      // Keep preference if there is not enough space on either the top or bottom
      /* 			if (spaceOnTop || spaceOnBottom) {
                      if (shouldOpenTowardsTop) {
                          shouldOpenTowardsTop = spaceOnTop;
                      } else {
                          shouldOpenTowardsTop = !spaceOnBottom;
                      }
                  } */
    }
  }

  openTowardsTop(value) {
    const elem = this.cuppaDropdown.nativeElement;
    if (value && this.selectedListElem.nativeElement.clientHeight) {
      this.dropdownListYOffset = 15 - this.selectedListElem.nativeElement.clientHeight;
      if (this.settings.tagToBody) {
        this.dropDownTop = elem.getBoundingClientRect().y - this.selectedListElem.nativeElement.clientHeight * 2 - 15 - this.defaultSettings.maxHeight + 'px';
      } else {
        this.dropDownBottom = this.selectedListElem.nativeElement.clientHeight + 15 + 'px';
      }
      this.settings.position = 'top';
    } else {
      if (this.settings.tagToBody) {
        this.dropDownTop = elem.getBoundingClientRect().y + elem.clientHeight + 1 + 'px';
      } else {
        this.dropDownTop = 'unset';
        this.dropDownBottom = 'unset';
      }
      this.dropdownListYOffset = 0;
      this.settings.position = 'bottom';
    }
  }
  clearSelection(e) {
    if (this.settings.groupBy) {
      this.groupCachedItems.forEach(obj => {
        obj.selected = false;
      });
    }
    this.clearSearch();
    this.selectedItems = [];
    this.isSelectAll = false;
    this.onChangeCallback(this.selectedItems);
    this.onTouchedCallback(this.selectedItems);
    this.onDeSelectAll.emit(this.selectedItems);
  }
  filteritems(evt) {
    this.filteredList = this.filterPipe.transform(this.cachedItems, evt.target.value, this.settings.searchBy);
    if (this.filteredList) {
      let len = 0;
      this.filteredList.forEach((obj, i) => {
        if (obj.disabled) {
          this.isDisabledItemPresent = true;
        }
        if (!obj.hasOwnProperty('grpTitle')) {
          len++;
        }
      });
      this.filterLength = len;
    }
    this.onFilterChange(this.filteredList);
  }
}
AngularMultiSelect.ɵfac = function AngularMultiSelect_Factory(t) {
  return new (t || AngularMultiSelect)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_list_filter__WEBPACK_IMPORTED_MODULE_2__.ListFilterPipe));
};
AngularMultiSelect.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: AngularMultiSelect,
  selectors: [["angular2-multiselect"]],
  contentQueries: function AngularMultiSelect_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵcontentQuery"](dirIndex, _menu_item__WEBPACK_IMPORTED_MODULE_3__.Item, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵcontentQuery"](dirIndex, _menu_item__WEBPACK_IMPORTED_MODULE_3__.Badge, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵcontentQuery"](dirIndex, _menu_item__WEBPACK_IMPORTED_MODULE_3__.Search, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.itemTempl = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.badgeTempl = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.searchTempl = _t.first);
    }
  },
  viewQuery: function AngularMultiSelect_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c2, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c3, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_virtual_scroll_virtual_scroll__WEBPACK_IMPORTED_MODULE_5__.VirtualScrollerComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.searchInput = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.selectedListElem = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.dropdownListElem = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.cuppaDropdown = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.virtualScroller = _t.first);
    }
  },
  hostVars: 2,
  hostBindings: function AngularMultiSelect_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup.escape", function AngularMultiSelect_keyup_escape_HostBindingHandler($event) {
        return ctx.onEscapeDown($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresolveDocument"])("scroll", function AngularMultiSelect_scroll_HostBindingHandler($event) {
        return ctx.onScroll($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresolveWindow"]);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx.defaultSettings.classes);
    }
  },
  inputs: {
    data: "data",
    settings: "settings",
    loading: "loading"
  },
  outputs: {
    onSelect: "onSelect",
    onDeSelect: "onDeSelect",
    onSelectAll: "onSelectAll",
    onDeSelectAll: "onDeSelectAll",
    onOpen: "onOpen",
    onClose: "onClose",
    onScrollToEnd: "onScrollToEnd",
    onFilterSelectAll: "onFilterSelectAll",
    onFilterDeSelectAll: "onFilterDeSelectAll",
    onAddFilterNewItem: "onAddFilterNewItem",
    onGroupSelect: "onGroupSelect",
    onGroupDeSelect: "onGroupDeSelect"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([DROPDOWN_CONTROL_VALUE_ACCESSOR, DROPDOWN_CONTROL_VALIDATION]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵNgOnChangesFeature"]],
  decls: 33,
  vars: 50,
  consts: [[1, "cuppa-dropdown", 3, "clickOutside"], ["cuppaDropdown", ""], [1, "selected-list"], ["selectedList", ""], [1, "c-btn", 3, "ngClass", "click"], [4, "ngIf"], ["class", "c-list", 4, "ngIf"], ["class", "countplaceholder", 4, "ngIf"], ["class", "c-remove clear-all", 3, "click", 4, "ngIf"], ["class", "c-angle-down", 4, "ngIf"], ["class", "c-angle-up", 4, "ngIf"], [1, "dropdown-list", "animated", "fadeIn", 3, "ngClass", "hidden"], ["dropdownList", ""], [1, "arrow-2", 3, "ngClass"], [3, "ngClass"], [1, "list-area", 3, "ngClass"], ["class", "pure-checkbox select-all", 4, "ngIf"], ["class", "loading-icon", "src", "assets/img/loading.gif", 4, "ngIf"], ["class", "list-filter", 4, "ngIf"], ["class", "filter-select-all", 4, "ngIf"], ["style", "overflow: auto;", 3, "maxHeight", 4, "ngIf"], ["class", "list-message", 4, "ngIf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "c-list"], ["class", "c-token", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "c-token"], ["class", "c-label", 4, "ngIf"], [1, "c-remove", 3, "click"], [3, "name"], [1, "c-label"], [3, "data", "item"], ["class", "c-token", 3, "hidden", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "c-token", 3, "hidden"], [1, "countplaceholder"], [1, "c-remove", "clear-all", 3, "click"], [1, "c-angle-down"], [1, "c-angle-up"], [1, "pure-checkbox", "select-all"], ["type", "checkbox", 3, "checked", "disabled", "id", "change", 4, "ngIf"], [3, "for"], [3, "hidden"], ["type", "checkbox", 3, "checked", "disabled", "id", "change"], ["src", "assets/img/loading.gif", 1, "loading-icon"], [1, "list-filter"], ["id", "searchIcon", 1, "c-search"], ["class", "c-clear", 3, "hidden", "click", 4, "ngIf"], ["class", "c-input", "type", "text", "aria-labelledby", "searchIcon", 3, "placeholder", "ngModel", "ngModelChange", "keyup", 4, "ngIf"], [3, "data", "item", 4, "ngIf"], [1, "c-clear", 3, "hidden", "click"], ["type", "text", "aria-labelledby", "searchIcon", 1, "c-input", 3, "placeholder", "ngModel", "ngModelChange", "keyup"], ["searchInput", ""], [1, "filter-select-all"], ["class", "pure-checkbox select-all", 3, "click", 4, "ngIf"], [1, "pure-checkbox", "select-all", 3, "click"], ["type", "checkbox", "aria-labelledby", "optionName", "aria-label", "option", 3, "checked", "disabled"], ["type", "checkbox", "aria-labelledby", "option", 3, "checked", "disabled"], ["class", "btn-container", 4, "ngIf"], [1, "btn-container"], [1, "c-btn", "btn-iceblue", 3, "click"], [2, "overflow", "auto"], [1, "lazyContainer"], ["class", "pure-checkbox", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "pure-checkbox", 3, "ngClass", "click"], ["type", "checkbox", "aria-labelledby", "option", 3, "checked", "disabled", 4, "ngIf"], ["virtualScroller", "", 1, "lazyContainer", 3, "enableUnequalChildrenSizes", "items", "ngStyle", "vsStart", "vsEnd"], ["scroll", ""], ["type", "checkbox", 3, "checked", "disabled", 4, "ngIf"], ["type", "checkbox", 3, "checked", "disabled"], ["scroll2", ""], ["scroll3", ""], [4, "ngFor", "ngForOf"], ["class", "pure-checkbox", 3, "ngClass", "click", 4, "ngIf"], ["class", "pure-checkbox", 3, "ngClass", 4, "ngIf"], [1, "pure-checkbox", 3, "ngClass"], [3, "items", "ngStyle", "vsUpdate", "vsEnd"], ["scroll4", ""], [1, "list-message"]],
  template: function AngularMultiSelect_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("clickOutside", function AngularMultiSelect_Template_div_clickOutside_0_listener() {
        return ctx.closeDropdownOnClickOut();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2, 3)(4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AngularMultiSelect_Template_div_click_4_listener($event) {
        return ctx.toggleDropdown($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, AngularMultiSelect_span_5_Template, 2, 1, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, AngularMultiSelect_span_6_Template, 2, 2, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, AngularMultiSelect_span_7_Template, 2, 2, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, AngularMultiSelect_div_8_Template, 2, 2, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, AngularMultiSelect_span_9_Template, 2, 1, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, AngularMultiSelect_span_10_Template, 2, 1, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, AngularMultiSelect_span_11_Template, 2, 1, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, AngularMultiSelect_span_12_Template, 2, 1, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 11, 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "div", 13)(16, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, AngularMultiSelect_div_18_Template, 7, 6, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, AngularMultiSelect_img_19_Template, 1, 0, "img", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, AngularMultiSelect_div_20_Template, 9, 7, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, AngularMultiSelect_div_21_Template, 3, 2, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, AngularMultiSelect_div_22_Template, 2, 1, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, AngularMultiSelect_div_23_Template, 2, 1, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, AngularMultiSelect_div_24_Template, 3, 3, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, AngularMultiSelect_div_25_Template, 4, 8, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, AngularMultiSelect_div_26_Template, 3, 3, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, AngularMultiSelect_div_27_Template, 4, 8, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, AngularMultiSelect_div_28_Template, 4, 8, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, AngularMultiSelect_div_29_Template, 3, 3, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, AngularMultiSelect_div_30_Template, 5, 12, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, AngularMultiSelect_div_31_Template, 3, 3, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](32, AngularMultiSelect_h5_32_Template, 2, 1, "h5", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](38, _c9, ctx.settings.disabled));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("tabindex", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx.selectedItems == null ? null : ctx.selectedItems.length) == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.settings.singleSelection && !ctx.badgeTempl);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx.selectedItems == null ? null : ctx.selectedItems.length) > 0 && ctx.settings.singleSelection && ctx.badgeTempl);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx.selectedItems == null ? null : ctx.selectedItems.length) > 0 && !ctx.settings.singleSelection);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx.selectedItems == null ? null : ctx.selectedItems.length) > ctx.settings.badgeShowLimit);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.settings.clearAll && (ctx.selectedItems == null ? null : ctx.selectedItems.length) > 0 && !ctx.settings.disabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isActive);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isActive);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("width", ctx.dropDownWidth, "px")("top", ctx.dropDownTop)("bottom", ctx.dropDownBottom)("left", ctx.dropDownLeft, "px");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](40, _c10, ctx.settings.tagToBody))("hidden", !ctx.isActive);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](42, _c11, ctx.settings.position == "bottom", ctx.settings.position == "top"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](45, _c11, ctx.settings.position == "bottom", ctx.settings.position == "top"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](48, _c12, ctx.settings.singleSelection));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.settings.enableCheckAll && !ctx.settings.singleSelection && !ctx.settings.limitSelection && (ctx.data == null ? null : ctx.data.length) > 0 && !ctx.isDisabledItemPresent);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.settings.enableSearchFilter);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.settings.lazyLoading && ctx.settings.enableFilterSelectAll && !ctx.isDisabledItemPresent);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.settings.lazyLoading && ctx.settings.enableFilterSelectAll && !ctx.isDisabledItemPresent && !ctx.settings.singleSelection);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.filter == null ? null : ctx.filter.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.settings.groupBy && !ctx.settings.lazyLoading && ctx.itemTempl == undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.settings.groupBy && ctx.settings.lazyLoading && ctx.itemTempl == undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.settings.groupBy && !ctx.settings.lazyLoading && ctx.itemTempl != undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.settings.groupBy && ctx.settings.lazyLoading && ctx.itemTempl != undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.settings.groupBy && ctx.settings.lazyLoading && ctx.itemTempl != undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.settings.groupBy && !ctx.settings.lazyLoading && ctx.itemTempl != undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.settings.groupBy && ctx.settings.lazyLoading && ctx.itemTempl == undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.settings.groupBy && !ctx.settings.lazyLoading && ctx.itemTempl == undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx.data == null ? null : ctx.data.length) == 0);
    }
  },
  dependencies: function () {
    return [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _virtual_scroll_virtual_scroll__WEBPACK_IMPORTED_MODULE_5__.VirtualScrollerComponent, _clickOutside__WEBPACK_IMPORTED_MODULE_1__.ClickOutsideDirective, _menu_item__WEBPACK_IMPORTED_MODULE_3__.TemplateRenderer, _menu_item__WEBPACK_IMPORTED_MODULE_3__.CIcon];
  },
  styles: ["virtual-scroll {\n  display: block;\n  width: 100%;\n}\n\n.cuppa-dropdown {\n  position: relative;\n}\n\n.c-btn {\n  display: inline-block;\n  border-width: 1px;\n  line-height: 1.25;\n  border-radius: 3px;\n  font-size: 0.85rem;\n  padding: 5px 10px;\n  cursor: pointer;\n  align-items: center;\n  min-height: 38px;\n}\n\n.c-btn.disabled {\n  background: #ccc;\n}\n\n.selected-list .c-list {\n  float: left;\n  padding: 0px;\n  margin: 0px;\n  width: calc(100% - 20px);\n}\n.selected-list .c-list .c-token {\n  list-style: none;\n  padding: 4px 8px;\n  /*background: $base-color; */\n  /*color: $token-color;*/\n  border-radius: 2px;\n  margin-right: 4px;\n  margin-top: 2px;\n  float: left;\n  position: relative;\n  padding-right: 22px;\n}\n.selected-list .c-list .c-token .c-label {\n  display: block;\n  float: left;\n}\n.selected-list .c-list .c-token .c-remove {\n  position: absolute;\n  right: 8px;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 8px;\n}\n.selected-list .c-list .c-token .c-remove svg {\n  fill: #fff;\n}\n.selected-list .fa-angle-down,\n.selected-list .fa-angle-up {\n  font-size: 15pt;\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.selected-list .c-angle-down,\n.selected-list .c-angle-up {\n  width: 12px;\n  height: 12px;\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  pointer-events: none;\n}\n.selected-list .c-angle-down svg,\n.selected-list .c-angle-up svg {\n  fill: #333;\n}\n.selected-list .countplaceholder {\n  position: absolute;\n  right: 45px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.selected-list .c-btn {\n  width: 100%;\n  /*        box-shadow: 0px 1px 5px $box-shadow-color;\n  */\n  padding: 5px 10px;\n  cursor: pointer;\n  display: flex;\n  position: relative;\n}\n.selected-list .c-btn .c-icon {\n  position: absolute;\n  right: 5px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.dropdown-list.tagToBody {\n  position: fixed;\n}\n\n.dropdown-list {\n  position: absolute;\n  padding-top: 14px;\n  width: 100%;\n  z-index: 99999;\n}\n.dropdown-list ul {\n  padding: 0px;\n  list-style: none;\n  overflow: auto;\n  margin: 0px;\n}\n.dropdown-list ul li {\n  padding: 10px 10px;\n  cursor: pointer;\n  text-align: left;\n}\n.dropdown-list ul li:first-child {\n  padding-top: 10px;\n}\n.dropdown-list ul li:last-child {\n  padding-bottom: 10px;\n}\n.dropdown-list ul li:hover {\n  /*background: $list-hover-background;*/\n}\n.dropdown-list ::-webkit-scrollbar {\n  width: 8px;\n}\n.dropdown-list ::-webkit-scrollbar-thumb {\n  background: #cccccc;\n  border-radius: 5px;\n}\n.dropdown-list ::-webkit-scrollbar-track {\n  background: #f2f2f2;\n}\n\n.arrow-up,\n.arrow-down {\n  width: 0;\n  height: 0;\n  border-left: 13px solid transparent;\n  border-right: 13px solid transparent;\n  border-bottom: 15px solid #fff;\n  margin-left: 15px;\n  position: absolute;\n  top: 0;\n}\n\n.arrow-down {\n  bottom: -14px;\n  top: unset;\n  transform: rotate(180deg);\n}\n\n.arrow-2 {\n  border-bottom: 15px solid #ccc;\n  top: -1px;\n}\n\n.arrow-down.arrow-2 {\n  top: unset;\n  bottom: -16px;\n}\n\n.list-area {\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  background: #fff;\n  margin: 0px;\n  /*box-shadow: 0px 1px 5px $box-shadow-color;*/\n}\n\n.select-all {\n  padding: 10px;\n  border-bottom: 1px solid #ccc;\n  text-align: left;\n}\n\n.list-filter {\n  border-bottom: 1px solid #ccc;\n  position: relative;\n  padding-left: 35px;\n  height: 35px;\n}\n.list-filter input {\n  border: 0px;\n  width: 100%;\n  height: 100%;\n  padding: 0px;\n}\n.list-filter input:focus {\n  outline: none;\n}\n.list-filter .c-search {\n  position: absolute;\n  top: 4px;\n  left: 10px;\n  width: 15px;\n  height: 15px;\n}\n.list-filter .c-search svg {\n  fill: #888;\n}\n.list-filter .c-clear {\n  position: absolute;\n  top: 4px;\n  right: 10px;\n  width: 15px;\n  height: 15px;\n}\n.list-filter .c-clear svg {\n  fill: #888;\n}\n\n.pure-checkbox input[type=checkbox] {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.pure-checkbox input[type=checkbox]:focus + label:before,\n.pure-checkbox input[type=checkbox]:hover + label:before {\n  /*border-color: $base-color;*/\n  background-color: none;\n}\n\n.pure-checkbox input[type=checkbox]:active + label:before {\n  transition-duration: 0s;\n}\n\n.pure-checkbox input[type=checkbox]:disabled + label {\n  color: #cccccc;\n}\n\n.pure-checkbox input[type=checkbox] + label {\n  position: relative;\n  padding-left: 2em;\n  vertical-align: middle;\n  -webkit-user-select: none;\n          user-select: none;\n  cursor: pointer;\n  margin: 0px;\n  /*color: $label-color;*/\n  font-weight: 300;\n}\n\n.pure-checkbox input[type=checkbox] + label:before {\n  box-sizing: content-box;\n  content: \"\";\n  /*color: $base-color;*/\n  position: absolute;\n  top: 50%;\n  left: 0;\n  width: 15px;\n  height: 15px;\n  margin-top: -9px;\n  /*border: 2px solid $base-color;*/\n  text-align: center;\n  transition: all 0.4s ease;\n  border-radius: 3px;\n}\n\n.pure-checkbox input[type=checkbox] + label:after {\n  box-sizing: content-box;\n  content: \"\";\n  /*background-color: $base-color;*/\n  position: absolute;\n  top: 50%;\n  left: 0;\n  width: 15px;\n  height: 15px;\n  margin-top: -9px;\n  transform: scale(0);\n  transform-origin: 50%;\n  transition: transform 200ms ease-out;\n}\n\n.pure-checkbox input[type=checkbox]:disabled + label:before {\n  border-color: #cccccc;\n}\n\n.pure-checkbox input[type=checkbox]:disabled:focus + label:before .pure-checkbox input[type=checkbox]:disabled:hover + label:before {\n  background-color: inherit;\n}\n\n.pure-checkbox input[type=checkbox]:disabled:checked + label:before {\n  background-color: #cccccc;\n}\n\n.pure-checkbox input[type=checkbox] + label:after {\n  background-color: transparent;\n  top: 50%;\n  left: 3px;\n  width: 9px;\n  height: 4px;\n  margin-top: -5px;\n  border-style: solid;\n  border-width: 0 0 2px 2px;\n  border-image: none;\n  transform: rotate(-45deg) scale(0);\n}\n\n.pure-checkbox input[type=checkbox]:checked + label:after {\n  content: \"\";\n  transform: rotate(-45deg) scale(1);\n  transition: transform 200ms ease-out;\n}\n\n.pure-checkbox input[type=radio]:checked + label:before {\n  background-color: white;\n}\n\n.pure-checkbox input[type=radio]:checked + label:after {\n  transform: scale(1);\n}\n\n.pure-checkbox input[type=radio] + label:before {\n  border-radius: 50%;\n}\n\n.pure-checkbox input[type=checkbox]:checked + label:before {\n  /*background: $base-color;*/\n}\n\n.pure-checkbox input[type=checkbox]:checked + label:after {\n  transform: rotate(-45deg) scale(1);\n}\n\n.list-message {\n  text-align: center;\n  margin: 0px;\n  padding: 15px 0px;\n  font-size: initial;\n}\n\n.list-grp {\n  padding: 0 15px !important;\n}\n\n.list-grp h4 {\n  text-transform: capitalize;\n  margin: 15px 0px 0px 0px;\n  font-size: 14px;\n  font-weight: 700;\n}\n\n.list-grp > li {\n  padding-left: 15px !important;\n}\n\n.selected-item {\n  /*background: $selected-background;*/\n}\n\n.grp-item {\n  padding-left: 30px !important;\n}\n\n.grp-title {\n  padding-bottom: 0px !important;\n}\n\n.grp-title label {\n  margin-bottom: 0px !important;\n  font-weight: 800;\n  text-transform: capitalize;\n}\n\n.grp-title:hover {\n  background: none !important;\n}\n\n.loading-icon {\n  width: 20px;\n  position: absolute;\n  right: 10px;\n  top: 23px;\n  z-index: 1;\n}\n\n.nodata-label {\n  width: 100%;\n  text-align: center;\n  padding: 10px 0px 0px;\n}\n\n.btn-container {\n  text-align: center;\n  padding: 5px 5px 5px;\n}\n\n.clear-all {\n  width: 8px;\n  position: absolute;\n  top: 50%;\n  right: 30px;\n  transform: translateY(-50%);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2FuZ3VsYXItbXVsdGlzZWxlY3QtZHJvcGRvd24tbGliL3NyYy9saWIvbXVsdGlzZWxlY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUdFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7QUFBSjtBQUVJO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQU47QUFFTTtFQUNFLGNBQUE7RUFDQSxXQUFBO0FBQVI7QUFHTTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLFVBQUE7QUFEUjtBQUdRO0VBQ0UsVUFBQTtBQURWO0FBT0U7O0VBRUUsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQUxKO0FBUUU7O0VBRUUsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtBQU5KO0FBUUk7O0VBQ0UsVUFBQTtBQUxOO0FBU0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFQSjtBQVVFO0VBQ0UsV0FBQTtFQUNBO0dBQUE7RUFFQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFSSjtBQVVJO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBUk47O0FBWUE7RUFDRSxlQUFBO0FBVEY7O0FBV0E7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFSRjtBQVVFO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFSSjtBQVVJO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFSTjtBQVdJO0VBQ0UsaUJBQUE7QUFUTjtBQVlJO0VBQ0Usb0JBQUE7QUFWTjtBQWFJO0VBQ0Usc0NBQUE7QUFYTjtBQWVFO0VBQ0UsVUFBQTtBQWJKO0FBZ0JFO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtBQWRKO0FBaUJFO0VBQ0UsbUJBQUE7QUFmSjs7QUFtQkE7O0VBRUUsUUFBQTtFQUNBLFNBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtBQWhCRjs7QUFtQkE7RUFDRSxhQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0FBaEJGOztBQW1CQTtFQUNFLDhCQUFBO0VBQ0EsU0FBQTtBQWhCRjs7QUFtQkE7RUFDRSxVQUFBO0VBQ0EsYUFBQTtBQWhCRjs7QUFtQkE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsNkNBQUE7QUFoQkY7O0FBbUJBO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUFoQkY7O0FBbUJBO0VBQ0UsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQWhCRjtBQWtCRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFoQko7QUFtQkU7RUFDRSxhQUFBO0FBakJKO0FBb0JFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBbEJKO0FBb0JJO0VBQ0UsVUFBQTtBQWxCTjtBQXNCRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQXBCSjtBQXNCSTtFQUNFLFVBQUE7QUFwQk47O0FBeUJBO0VBQ0UsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUF0QkY7O0FBeUJBOztFQUVFLDZCQUFBO0VBQ0Esc0JBQUE7QUF0QkY7O0FBeUJBO0VBQ0UsdUJBQUE7QUF0QkY7O0FBeUJBO0VBQ0UsY0FBQTtBQXRCRjs7QUF5QkE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBdEJGOztBQXlCQTtFQUNFLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQXRCRjs7QUF5QkE7RUFDRSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG9DQUFBO0FBdEJGOztBQXlCQTtFQUNFLHFCQUFBO0FBdEJGOztBQXlCQTtFQUVFLHlCQUFBO0FBdkJGOztBQTBCQTtFQUNFLHlCQUFBO0FBdkJGOztBQTBCQTtFQUNFLDZCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7QUF2QkY7O0FBMEJBO0VBQ0UsV0FBQTtFQUNBLGtDQUFBO0VBQ0Esb0NBQUE7QUF2QkY7O0FBMEJBO0VBQ0UsdUJBQUE7QUF2QkY7O0FBMEJBO0VBQ0UsbUJBQUE7QUF2QkY7O0FBMEJBO0VBQ0Usa0JBQUE7QUF2QkY7O0FBMEJBO0VBQ0UsMkJBQUE7QUF2QkY7O0FBMEJBO0VBQ0Usa0NBQUE7QUF2QkY7O0FBMEJBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQXZCRjs7QUEwQkE7RUFDRSwwQkFBQTtBQXZCRjs7QUEwQkE7RUFDRSwwQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBdkJGOztBQTBCQTtFQUNFLDZCQUFBO0FBdkJGOztBQTBCQTtFQUNFLG9DQUFBO0FBdkJGOztBQTBCQTtFQUNFLDZCQUFBO0FBdkJGOztBQTBCQTtFQUNFLDhCQUFBO0FBdkJGOztBQTBCQTtFQUNFLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQXZCRjs7QUEwQkE7RUFDRSwyQkFBQTtBQXZCRjs7QUEwQkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUF2QkY7O0FBMEJBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUF2QkY7O0FBMEJBO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtBQXZCRjs7QUE2QkE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0FBMUJGIiwic291cmNlc0NvbnRlbnQiOlsidmlydHVhbC1zY3JvbGwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jdXBwYS1kcm9wZG93biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmMtYnRuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAzOHB4O1xufVxuXG4uYy1idG4uZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kOiAjY2NjO1xufVxuXG4uc2VsZWN0ZWQtbGlzdCB7XG4gIC5jLWxpc3Qge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW46IDBweDtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG5cbiAgICAuYy10b2tlbiB7XG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgcGFkZGluZzogNHB4IDhweDtcbiAgICAgIC8qYmFja2dyb3VuZDogJGJhc2UtY29sb3I7ICovXG4gICAgICAvKmNvbG9yOiAkdG9rZW4tY29sb3I7Ki9cbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAyMnB4O1xuXG4gICAgICAuYy1sYWJlbCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgIH1cblxuICAgICAgLmMtcmVtb3ZlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogOHB4O1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICB3aWR0aDogOHB4O1xuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgZmlsbDogI2ZmZjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5mYS1hbmdsZS1kb3duLFxuICAuZmEtYW5nbGUtdXAge1xuICAgIGZvbnQtc2l6ZTogMTVwdDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB9XG5cbiAgLmMtYW5nbGUtZG93bixcbiAgLmMtYW5nbGUtdXAge1xuICAgIHdpZHRoOiAxMnB4O1xuICAgIGhlaWdodDogMTJweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuXG4gICAgc3ZnIHtcbiAgICAgIGZpbGw6ICMzMzM7XG4gICAgfVxuICB9XG5cbiAgLmNvdW50cGxhY2Vob2xkZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogNDVweDtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIH1cblxuICAuYy1idG4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8qICAgICAgICBib3gtc2hhZG93OiAwcHggMXB4IDVweCAkYm94LXNoYWRvdy1jb2xvcjtcbiovXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgLmMtaWNvbiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogNXB4O1xuICAgICAgdG9wOiA1MCU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgfVxuICB9XG59XG4uZHJvcGRvd24tbGlzdC50YWdUb0JvZHkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG4uZHJvcGRvd24tbGlzdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZy10b3A6IDE0cHg7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiA5OTk5OTtcblxuICB1bCB7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgbWFyZ2luOiAwcHg7XG5cbiAgICBsaSB7XG4gICAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cblxuICAgIGxpOmZpcnN0LWNoaWxkIHtcbiAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIH1cblxuICAgIGxpOmxhc3QtY2hpbGQge1xuICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgfVxuXG4gICAgbGk6aG92ZXIge1xuICAgICAgLypiYWNrZ3JvdW5kOiAkbGlzdC1ob3Zlci1iYWNrZ3JvdW5kOyovXG4gICAgfVxuICB9XG5cbiAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDhweDtcbiAgfVxuXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQ6ICNjY2NjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB9XG5cbiAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgfVxufVxuXG4uYXJyb3ctdXAsXG4uYXJyb3ctZG93biB7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci1sZWZ0OiAxM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDEzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDE1cHggc29saWQgI2ZmZjtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xufVxuXG4uYXJyb3ctZG93biB7XG4gIGJvdHRvbTogLTE0cHg7XG4gIHRvcDogdW5zZXQ7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG5cbi5hcnJvdy0yIHtcbiAgYm9yZGVyLWJvdHRvbTogMTVweCBzb2xpZCAjY2NjO1xuICB0b3A6IC0xcHg7XG59XG5cbi5hcnJvdy1kb3duLmFycm93LTIge1xuICB0b3A6IHVuc2V0O1xuICBib3R0b206IC0xNnB4O1xufVxuXG4ubGlzdC1hcmVhIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBtYXJnaW46IDBweDtcbiAgLypib3gtc2hhZG93OiAwcHggMXB4IDVweCAkYm94LXNoYWRvdy1jb2xvcjsqL1xufVxuXG4uc2VsZWN0LWFsbCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ubGlzdC1maWx0ZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDM1cHg7XG4gIGhlaWdodDogMzVweDtcblxuICBpbnB1dCB7XG4gICAgYm9yZGVyOiAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgfVxuXG4gIGlucHV0OmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG5cbiAgLmMtc2VhcmNoIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA0cHg7XG4gICAgbGVmdDogMTBweDtcbiAgICB3aWR0aDogMTVweDtcbiAgICBoZWlnaHQ6IDE1cHg7XG5cbiAgICBzdmcge1xuICAgICAgZmlsbDogIzg4ODtcbiAgICB9XG4gIH1cblxuICAuYy1jbGVhciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNHB4O1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIHdpZHRoOiAxNXB4O1xuICAgIGhlaWdodDogMTVweDtcblxuICAgIHN2ZyB7XG4gICAgICBmaWxsOiAjODg4O1xuICAgIH1cbiAgfVxufVxuXG4ucHVyZS1jaGVja2JveCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICBib3JkZXI6IDA7XG4gIGNsaXA6IHJlY3QoMCAwIDAgMCk7XG4gIGhlaWdodDogMXB4O1xuICBtYXJnaW46IC0xcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDFweDtcbn1cblxuLnB1cmUtY2hlY2tib3ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmZvY3VzICsgbGFiZWw6YmVmb3JlLFxuLnB1cmUtY2hlY2tib3ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmhvdmVyICsgbGFiZWw6YmVmb3JlIHtcbiAgLypib3JkZXItY29sb3I6ICRiYXNlLWNvbG9yOyovXG4gIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XG59XG5cbi5wdXJlLWNoZWNrYm94IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTphY3RpdmUgKyBsYWJlbDpiZWZvcmUge1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwcztcbn1cblxuLnB1cmUtY2hlY2tib3ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmRpc2FibGVkICsgbGFiZWwge1xuICBjb2xvcjogI2NjY2NjYztcbn1cblxuLnB1cmUtY2hlY2tib3ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdICsgbGFiZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMmVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDBweDtcbiAgLypjb2xvcjogJGxhYmVsLWNvbG9yOyovXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5wdXJlLWNoZWNrYm94IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSArIGxhYmVsOmJlZm9yZSB7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICBjb250ZW50OiAnJztcbiAgLypjb2xvcjogJGJhc2UtY29sb3I7Ki9cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgbWFyZ2luLXRvcDogLTlweDtcbiAgLypib3JkZXI6IDJweCBzb2xpZCAkYmFzZS1jb2xvcjsqL1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLnB1cmUtY2hlY2tib3ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdICsgbGFiZWw6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgY29udGVudDogJyc7XG4gIC8qYmFja2dyb3VuZC1jb2xvcjogJGJhc2UtY29sb3I7Ki9cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgbWFyZ2luLXRvcDogLTlweDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjAwbXMgZWFzZS1vdXQ7XG59XG5cbi5wdXJlLWNoZWNrYm94IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpkaXNhYmxlZCArIGxhYmVsOmJlZm9yZSB7XG4gIGJvcmRlci1jb2xvcjogI2NjY2NjYztcbn1cblxuLnB1cmUtY2hlY2tib3ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmRpc2FibGVkOmZvY3VzICsgbGFiZWw6YmVmb3JlXG4ucHVyZS1jaGVja2JveCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06ZGlzYWJsZWQ6aG92ZXIgKyBsYWJlbDpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xufVxuXG4ucHVyZS1jaGVja2JveCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06ZGlzYWJsZWQ6Y2hlY2tlZCArIGxhYmVsOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XG59XG5cbi5wdXJlLWNoZWNrYm94IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSArIGxhYmVsOmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiAzcHg7XG4gIHdpZHRoOiA5cHg7XG4gIGhlaWdodDogNHB4O1xuICBtYXJnaW4tdG9wOiAtNXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDAgMCAycHggMnB4O1xuICBib3JkZXItaW1hZ2U6IG5vbmU7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgc2NhbGUoMCk7XG59XG5cbi5wdXJlLWNoZWNrYm94IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgbGFiZWw6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSBzY2FsZSgxKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDIwMG1zIGVhc2Utb3V0O1xufVxuXG4ucHVyZS1jaGVja2JveCBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCArIGxhYmVsOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4ucHVyZS1jaGVja2JveCBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCArIGxhYmVsOmFmdGVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuLnB1cmUtY2hlY2tib3ggaW5wdXRbdHlwZT1cInJhZGlvXCJdICsgbGFiZWw6YmVmb3JlIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4ucHVyZS1jaGVja2JveCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCArIGxhYmVsOmJlZm9yZSB7XG4gIC8qYmFja2dyb3VuZDogJGJhc2UtY29sb3I7Ki9cbn1cblxuLnB1cmUtY2hlY2tib3ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyBsYWJlbDphZnRlciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgc2NhbGUoMSk7XG59XG5cbi5saXN0LW1lc3NhZ2Uge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAxNXB4IDBweDtcbiAgZm9udC1zaXplOiBpbml0aWFsO1xufVxuXG4ubGlzdC1ncnAge1xuICBwYWRkaW5nOiAwIDE1cHggIWltcG9ydGFudDtcbn1cblxuLmxpc3QtZ3JwIGg0IHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIG1hcmdpbjogMTVweCAwcHggMHB4IDBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4ubGlzdC1ncnAgPiBsaSB7XG4gIHBhZGRpbmctbGVmdDogMTVweCAhaW1wb3J0YW50O1xufVxuXG4uc2VsZWN0ZWQtaXRlbSB7XG4gIC8qYmFja2dyb3VuZDogJHNlbGVjdGVkLWJhY2tncm91bmQ7Ki9cbn1cblxuLmdycC1pdGVtIHtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5ncnAtdGl0bGUge1xuICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5ncnAtdGl0bGUgbGFiZWwge1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5ncnAtdGl0bGU6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5sb2FkaW5nLWljb24ge1xuICB3aWR0aDogMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgdG9wOiAyM3B4O1xuICB6LWluZGV4OiAxO1xufVxuXG4ubm9kYXRhLWxhYmVsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAwcHggMHB4O1xufVxuXG4uYnRuLWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNXB4IDVweCA1cHg7XG59XG5cbi5idG4taWNlYmx1ZSB7XG59XG5cbi5jbGVhci1hbGwge1xuICB3aWR0aDogOHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICByaWdodDogMzBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  encapsulation: 2
});
class AngularMultiSelectModule {}
AngularMultiSelectModule.ɵfac = function AngularMultiSelectModule_Factory(t) {
  return new (t || AngularMultiSelectModule)();
};
AngularMultiSelectModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: AngularMultiSelectModule
});
AngularMultiSelectModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  providers: [_multiselect_service__WEBPACK_IMPORTED_MODULE_4__.DataService, _list_filter__WEBPACK_IMPORTED_MODULE_2__.ListFilterPipe],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _virtual_scroll_virtual_scroll__WEBPACK_IMPORTED_MODULE_5__.VirtualScrollerModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AngularMultiSelectModule, {
    declarations: [AngularMultiSelect, _clickOutside__WEBPACK_IMPORTED_MODULE_1__.ClickOutsideDirective, _clickOutside__WEBPACK_IMPORTED_MODULE_1__.ScrollDirective, _clickOutside__WEBPACK_IMPORTED_MODULE_1__.styleDirective, _list_filter__WEBPACK_IMPORTED_MODULE_2__.ListFilterPipe, _menu_item__WEBPACK_IMPORTED_MODULE_3__.Item, _menu_item__WEBPACK_IMPORTED_MODULE_3__.TemplateRenderer, _menu_item__WEBPACK_IMPORTED_MODULE_3__.Badge, _menu_item__WEBPACK_IMPORTED_MODULE_3__.Search, _clickOutside__WEBPACK_IMPORTED_MODULE_1__.setPosition, _menu_item__WEBPACK_IMPORTED_MODULE_3__.CIcon],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _virtual_scroll_virtual_scroll__WEBPACK_IMPORTED_MODULE_5__.VirtualScrollerModule],
    exports: [AngularMultiSelect, _clickOutside__WEBPACK_IMPORTED_MODULE_1__.ClickOutsideDirective, _clickOutside__WEBPACK_IMPORTED_MODULE_1__.ScrollDirective, _clickOutside__WEBPACK_IMPORTED_MODULE_1__.styleDirective, _list_filter__WEBPACK_IMPORTED_MODULE_2__.ListFilterPipe, _menu_item__WEBPACK_IMPORTED_MODULE_3__.Item, _menu_item__WEBPACK_IMPORTED_MODULE_3__.TemplateRenderer, _menu_item__WEBPACK_IMPORTED_MODULE_3__.Badge, _menu_item__WEBPACK_IMPORTED_MODULE_3__.Search, _clickOutside__WEBPACK_IMPORTED_MODULE_1__.setPosition, _menu_item__WEBPACK_IMPORTED_MODULE_3__.CIcon]
  });
})();

/***/ }),

/***/ 2753:
/*!********************************************************************************!*\
  !*** ./projects/angular-multiselect-dropdown-lib/src/lib/multiselect.model.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyException: () => (/* binding */ MyException)
/* harmony export */ });
class MyException {
  constructor(status, body) {
    this.status = status;
    this.body = body;
  }
}

/***/ }),

/***/ 9715:
/*!**********************************************************************************!*\
  !*** ./projects/angular-multiselect-dropdown-lib/src/lib/multiselect.service.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataService: () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


class DataService {
  constructor() {
    this.filteredData = [];
    this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
  }
  setData(data) {
    this.filteredData = data;
    this.subject.next(data);
  }
  getData() {
    return this.subject.asObservable();
  }
  getFilteredData() {
    if (this.filteredData && this.filteredData.length > 0) {
      return this.filteredData;
    } else {
      return [];
    }
  }
}
DataService.ɵfac = function DataService_Factory(t) {
  return new (t || DataService)();
};
DataService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: DataService,
  factory: DataService.ɵfac
});

/***/ }),

/***/ 2818:
/*!********************************************************************************************!*\
  !*** ./projects/angular-multiselect-dropdown-lib/src/lib/virtual-scroll/virtual-scroll.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VIRTUAL_SCROLLER_DEFAULT_OPTIONS_FACTORY: () => (/* binding */ VIRTUAL_SCROLLER_DEFAULT_OPTIONS_FACTORY),
/* harmony export */   VirtualScrollerComponent: () => (/* binding */ VirtualScrollerComponent),
/* harmony export */   VirtualScrollerModule: () => (/* binding */ VirtualScrollerModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tweenjs/tween.js */ 6738);






const _c0 = ["header"];
const _c1 = ["container"];
const _c2 = ["content"];
const _c3 = ["invisiblePadding"];
const _c4 = ["*"];
function VIRTUAL_SCROLLER_DEFAULT_OPTIONS_FACTORY() {
  return {
    scrollThrottlingTime: 0,
    scrollDebounceTime: 0,
    scrollAnimationTime: 750,
    checkResizeInterval: 1000,
    resizeBypassRefreshThreshold: 5,
    modifyOverflowStyleOfParentScroll: true,
    stripedTable: false
  };
}
class VirtualScrollerComponent {
  get viewPortInfo() {
    let pageInfo = this.previousViewPort || {};
    return {
      startIndex: pageInfo.startIndex || 0,
      endIndex: pageInfo.endIndex || 0,
      scrollStartPosition: pageInfo.scrollStartPosition || 0,
      scrollEndPosition: pageInfo.scrollEndPosition || 0,
      maxScrollPosition: pageInfo.maxScrollPosition || 0,
      startIndexWithBuffer: pageInfo.startIndexWithBuffer || 0,
      endIndexWithBuffer: pageInfo.endIndexWithBuffer || 0
    };
  }
  get enableUnequalChildrenSizes() {
    return this._enableUnequalChildrenSizes;
  }
  set enableUnequalChildrenSizes(value) {
    if (this._enableUnequalChildrenSizes === value) {
      return;
    }
    this._enableUnequalChildrenSizes = value;
    this.minMeasuredChildWidth = undefined;
    this.minMeasuredChildHeight = undefined;
  }
  get bufferAmount() {
    if (typeof this._bufferAmount === 'number' && this._bufferAmount >= 0) {
      return this._bufferAmount;
    } else {
      return this.enableUnequalChildrenSizes ? 5 : 0;
    }
  }
  set bufferAmount(value) {
    this._bufferAmount = value;
  }
  get scrollThrottlingTime() {
    return this._scrollThrottlingTime;
  }
  set scrollThrottlingTime(value) {
    this._scrollThrottlingTime = value;
    this.updateOnScrollFunction();
  }
  get scrollDebounceTime() {
    return this._scrollDebounceTime;
  }
  set scrollDebounceTime(value) {
    this._scrollDebounceTime = value;
    this.updateOnScrollFunction();
  }
  updateOnScrollFunction() {
    if (this.scrollDebounceTime) {
      this.onScroll = this.debounce(() => {
        this.refresh_internal(false);
      }, this.scrollDebounceTime);
    } else if (this.scrollThrottlingTime) {
      this.onScroll = this.throttleTrailing(() => {
        this.refresh_internal(false);
      }, this.scrollThrottlingTime);
    } else {
      this.onScroll = () => {
        this.refresh_internal(false);
      };
    }
  }
  get checkResizeInterval() {
    return this._checkResizeInterval;
  }
  set checkResizeInterval(value) {
    if (this._checkResizeInterval === value) {
      return;
    }
    this._checkResizeInterval = value;
    this.addScrollEventHandlers();
  }
  get items() {
    return this._items;
  }
  set items(value) {
    if (value === this._items) {
      return;
    }
    this._items = value || [];
    this.refresh_internal(true);
  }
  get horizontal() {
    return this._horizontal;
  }
  set horizontal(value) {
    this._horizontal = value;
    this.updateDirection();
  }
  revertParentOverscroll() {
    const scrollElement = this.getScrollElement();
    if (scrollElement && this.oldParentScrollOverflow) {
      scrollElement.style['overflow-y'] = this.oldParentScrollOverflow.y;
      scrollElement.style['overflow-x'] = this.oldParentScrollOverflow.x;
    }
    this.oldParentScrollOverflow = undefined;
  }
  get parentScroll() {
    return this._parentScroll;
  }
  set parentScroll(value) {
    if (this._parentScroll === value) {
      return;
    }
    this.revertParentOverscroll();
    this._parentScroll = value;
    this.addScrollEventHandlers();
    const scrollElement = this.getScrollElement();
    if (this.modifyOverflowStyleOfParentScroll && scrollElement !== this.element.nativeElement) {
      this.oldParentScrollOverflow = {
        x: scrollElement.style['overflow-x'],
        y: scrollElement.style['overflow-y']
      };
      scrollElement.style['overflow-y'] = this.horizontal ? 'visible' : 'auto';
      scrollElement.style['overflow-x'] = this.horizontal ? 'auto' : 'visible';
    }
  }
  ngOnInit() {
    this.addScrollEventHandlers();
  }
  ngOnDestroy() {
    this.removeScrollEventHandlers();
    this.revertParentOverscroll();
  }
  ngOnChanges(changes) {
    let indexLengthChanged = this.cachedItemsLength !== this.items.length;
    this.cachedItemsLength = this.items.length;
    const firstRun = !changes.items || !changes.items.previousValue || changes.items.previousValue.length === 0;
    this.refresh_internal(indexLengthChanged || firstRun);
  }
  ngDoCheck() {
    if (this.cachedItemsLength !== this.items.length) {
      this.cachedItemsLength = this.items.length;
      this.refresh_internal(true);
      return;
    }
    if (this.previousViewPort && this.viewPortItems && this.viewPortItems.length > 0) {
      let itemsArrayChanged = false;
      for (let i = 0; i < this.viewPortItems.length; ++i) {
        if (!this.compareItems(this.items[this.previousViewPort.startIndexWithBuffer + i], this.viewPortItems[i])) {
          itemsArrayChanged = true;
          break;
        }
      }
      if (itemsArrayChanged) {
        this.refresh_internal(true);
      }
    }
  }
  refresh() {
    this.refresh_internal(true);
  }
  invalidateAllCachedMeasurements() {
    this.wrapGroupDimensions = {
      maxChildSizePerWrapGroup: [],
      numberOfKnownWrapGroupChildSizes: 0,
      sumOfKnownWrapGroupChildWidths: 0,
      sumOfKnownWrapGroupChildHeights: 0
    };
    this.minMeasuredChildWidth = undefined;
    this.minMeasuredChildHeight = undefined;
    this.refresh_internal(false);
  }
  invalidateCachedMeasurementForItem(item) {
    if (this.enableUnequalChildrenSizes) {
      let index = this.items && this.items.indexOf(item);
      if (index >= 0) {
        this.invalidateCachedMeasurementAtIndex(index);
      }
    } else {
      this.minMeasuredChildWidth = undefined;
      this.minMeasuredChildHeight = undefined;
    }
    this.refresh_internal(false);
  }
  invalidateCachedMeasurementAtIndex(index) {
    if (this.enableUnequalChildrenSizes) {
      let cachedMeasurement = this.wrapGroupDimensions.maxChildSizePerWrapGroup[index];
      if (cachedMeasurement) {
        this.wrapGroupDimensions.maxChildSizePerWrapGroup[index] = undefined;
        --this.wrapGroupDimensions.numberOfKnownWrapGroupChildSizes;
        this.wrapGroupDimensions.sumOfKnownWrapGroupChildWidths -= cachedMeasurement.childWidth || 0;
        this.wrapGroupDimensions.sumOfKnownWrapGroupChildHeights -= cachedMeasurement.childHeight || 0;
      }
    } else {
      this.minMeasuredChildWidth = undefined;
      this.minMeasuredChildHeight = undefined;
    }
    this.refresh_internal(false);
  }
  scrollInto(item, alignToBeginning = true, additionalOffset = 0, animationMilliseconds = undefined, animationCompletedCallback = undefined) {
    let index = this.items.indexOf(item);
    if (index === -1) {
      return;
    }
    this.scrollToIndex(index, alignToBeginning, additionalOffset, animationMilliseconds, animationCompletedCallback);
  }
  scrollToIndex(index, alignToBeginning = true, additionalOffset = 0, animationMilliseconds = undefined, animationCompletedCallback = undefined) {
    let maxRetries = 5;
    let retryIfNeeded = () => {
      --maxRetries;
      if (maxRetries <= 0) {
        if (animationCompletedCallback) {
          animationCompletedCallback();
        }
        return;
      }
      let dimensions = this.calculateDimensions();
      let desiredStartIndex = Math.min(Math.max(index, 0), dimensions.itemCount - 1);
      if (this.previousViewPort.startIndex === desiredStartIndex) {
        if (animationCompletedCallback) {
          animationCompletedCallback();
        }
        return;
      }
      this.scrollToIndex_internal(index, alignToBeginning, additionalOffset, 0, retryIfNeeded);
    };
    this.scrollToIndex_internal(index, alignToBeginning, additionalOffset, animationMilliseconds, retryIfNeeded);
  }
  scrollToIndex_internal(index, alignToBeginning = true, additionalOffset = 0, animationMilliseconds = undefined, animationCompletedCallback = undefined) {
    animationMilliseconds = animationMilliseconds === undefined ? this.scrollAnimationTime : animationMilliseconds;
    let dimensions = this.calculateDimensions();
    let scroll = this.calculatePadding(index, dimensions) + additionalOffset;
    if (!alignToBeginning) {
      scroll -= dimensions.wrapGroupsPerPage * dimensions[this._childScrollDim];
    }
    this.scrollToPosition(scroll, animationMilliseconds, animationCompletedCallback);
  }
  scrollToPosition(scrollPosition, animationMilliseconds = undefined, animationCompletedCallback = undefined) {
    scrollPosition += this.getElementsOffset();
    animationMilliseconds = animationMilliseconds === undefined ? this.scrollAnimationTime : animationMilliseconds;
    let scrollElement = this.getScrollElement();
    let animationRequest;
    if (this.currentTween) {
      this.currentTween.stop();
      this.currentTween = undefined;
    }
    if (!animationMilliseconds) {
      this.renderer.setProperty(scrollElement, this._scrollType, scrollPosition);
      this.refresh_internal(false, animationCompletedCallback);
      return;
    }
    const tweenConfigObj = {
      scrollPosition: scrollElement[this._scrollType]
    };
    let newTween = new _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_0__.Tween(tweenConfigObj).to({
      scrollPosition
    }, animationMilliseconds).easing(_tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_0__.Easing.Quadratic.Out).onUpdate(data => {
      if (isNaN(data.scrollPosition)) {
        return;
      }
      this.renderer.setProperty(scrollElement, this._scrollType, data.scrollPosition);
      this.refresh_internal(false);
    }).onStop(() => {
      cancelAnimationFrame(animationRequest);
    }).start();
    const animate = time => {
      if (!newTween["isPlaying"]()) {
        return;
      }
      newTween.update(time);
      if (tweenConfigObj.scrollPosition === scrollPosition) {
        this.refresh_internal(false, animationCompletedCallback);
        return;
      }
      this.zone.runOutsideAngular(() => {
        animationRequest = requestAnimationFrame(animate);
      });
    };
    animate();
    this.currentTween = newTween;
  }
  constructor(element, renderer, zone, changeDetectorRef, platformId, options) {
    this.element = element;
    this.renderer = renderer;
    this.zone = zone;
    this.changeDetectorRef = changeDetectorRef;
    this.window = window;
    this.executeRefreshOutsideAngularZone = false;
    this._enableUnequalChildrenSizes = false;
    this.useMarginInsteadOfTranslate = false;
    this.ssrViewportWidth = 1920;
    this.ssrViewportHeight = 1080;
    this._bufferAmount = 0;
    this._items = [];
    this.compareItems = (item1, item2) => item1 === item2;
    this.vsUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.vsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.vsStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.vsEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.calculatedScrollbarWidth = 0;
    this.calculatedScrollbarHeight = 0;
    this.padding = 0;
    this.previousViewPort = {};
    this.cachedPageSize = 0;
    this.previousScrollNumberElements = 0;
    this.isAngularUniversalSSR = (0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformServer)(platformId);
    this.scrollThrottlingTime = options.scrollThrottlingTime;
    this.scrollDebounceTime = options.scrollDebounceTime;
    this.scrollAnimationTime = options.scrollAnimationTime;
    this.scrollbarWidth = options.scrollbarWidth;
    this.scrollbarHeight = options.scrollbarHeight;
    this.checkResizeInterval = options.checkResizeInterval;
    this.resizeBypassRefreshThreshold = options.resizeBypassRefreshThreshold;
    this.modifyOverflowStyleOfParentScroll = options.modifyOverflowStyleOfParentScroll;
    this.stripedTable = options.stripedTable;
    this.horizontal = false;
    this.resetWrapGroupDimensions();
  }
  getElementSize(element) {
    let result = element.getBoundingClientRect();
    let styles = getComputedStyle(element);
    let marginTop = parseInt(styles['margin-top'], 10) || 0;
    let marginBottom = parseInt(styles['margin-bottom'], 10) || 0;
    let marginLeft = parseInt(styles['margin-left'], 10) || 0;
    let marginRight = parseInt(styles['margin-right'], 10) || 0;
    return {
      top: result.top + marginTop,
      bottom: result.bottom + marginBottom,
      left: result.left + marginLeft,
      right: result.right + marginRight,
      width: result.width + marginLeft + marginRight,
      height: result.height + marginTop + marginBottom,
      x: result.x,
      y: result.y
    };
  }
  checkScrollElementResized() {
    let boundingRect = this.getElementSize(this.getScrollElement());
    let sizeChanged;
    if (!this.previousScrollBoundingRect) {
      sizeChanged = true;
    } else {
      let widthChange = Math.abs(boundingRect.width - this.previousScrollBoundingRect.width);
      let heightChange = Math.abs(boundingRect.height - this.previousScrollBoundingRect.height);
      sizeChanged = widthChange > this.resizeBypassRefreshThreshold || heightChange > this.resizeBypassRefreshThreshold;
    }
    if (sizeChanged) {
      this.previousScrollBoundingRect = boundingRect;
      if (boundingRect.width > 0 && boundingRect.height > 0) {
        this.refresh_internal(false);
      }
    }
  }
  updateDirection() {
    if (this.horizontal) {
      this._invisiblePaddingProperty = 'width';
      this._offsetType = 'offsetLeft';
      this._pageOffsetType = 'pageXOffset';
      this._childScrollDim = 'childWidth';
      this._marginDir = 'margin-left';
      this._translateDir = 'translateX';
      this._scrollType = 'scrollLeft';
    } else {
      this._invisiblePaddingProperty = 'height';
      this._offsetType = 'offsetTop';
      this._pageOffsetType = 'pageYOffset';
      this._childScrollDim = 'childHeight';
      this._marginDir = 'margin-top';
      this._translateDir = 'translateY';
      this._scrollType = 'scrollTop';
    }
  }
  debounce(func, wait) {
    const throttled = this.throttleTrailing(func, wait);
    const result = function () {
      throttled['cancel']();
      throttled.apply(this, arguments);
    };
    result['cancel'] = function () {
      throttled['cancel']();
    };
    return result;
  }
  throttleTrailing(func, wait) {
    let timeout = undefined;
    let _arguments = arguments;
    const result = function () {
      const _this = this;
      _arguments = arguments;
      if (timeout) {
        return;
      }
      if (wait <= 0) {
        func.apply(_this, _arguments);
      } else {
        timeout = setTimeout(function () {
          timeout = undefined;
          func.apply(_this, _arguments);
        }, wait);
      }
    };
    result['cancel'] = function () {
      if (timeout) {
        clearTimeout(timeout);
        timeout = undefined;
      }
    };
    return result;
  }
  refresh_internal(itemsArrayModified, refreshCompletedCallback = undefined, maxRunTimes = 2) {
    //note: maxRunTimes is to force it to keep recalculating if the previous iteration caused a re-render (different sliced items in viewport or scrollPosition changed).
    //The default of 2x max will probably be accurate enough without causing too large a performance bottleneck
    //The code would typically quit out on the 2nd iteration anyways. The main time it'd think more than 2 runs would be necessary would be for vastly different sized child items or if this is the 1st time the items array was initialized.
    //Without maxRunTimes, If the user is actively scrolling this code would become an infinite loop until they stopped scrolling. This would be okay, except each scroll event would start an additional infinte loop. We want to short-circuit it to prevent this.
    if (itemsArrayModified && this.previousViewPort && this.previousViewPort.scrollStartPosition > 0) {
      //if items were prepended, scroll forward to keep same items visible
      let oldViewPort = this.previousViewPort;
      let oldViewPortItems = this.viewPortItems;
      let oldRefreshCompletedCallback = refreshCompletedCallback;
      refreshCompletedCallback = () => {
        let scrollLengthDelta = this.previousViewPort.scrollLength - oldViewPort.scrollLength;
        if (scrollLengthDelta > 0 && this.viewPortItems) {
          let oldStartItem = oldViewPortItems[0];
          let oldStartItemIndex = this.items.findIndex(x => this.compareItems(oldStartItem, x));
          if (oldStartItemIndex > this.previousViewPort.startIndexWithBuffer) {
            let itemOrderChanged = false;
            for (let i = 1; i < this.viewPortItems.length; ++i) {
              if (!this.compareItems(this.items[oldStartItemIndex + i], oldViewPortItems[i])) {
                itemOrderChanged = true;
                break;
              }
            }
            if (!itemOrderChanged) {
              this.scrollToPosition(this.previousViewPort.scrollStartPosition + scrollLengthDelta, 0, oldRefreshCompletedCallback);
              return;
            }
          }
        }
        if (oldRefreshCompletedCallback) {
          oldRefreshCompletedCallback();
        }
      };
    }
    this.zone.runOutsideAngular(() => {
      requestAnimationFrame(() => {
        if (itemsArrayModified) {
          this.resetWrapGroupDimensions();
        }
        let viewport = this.calculateViewport();
        let startChanged = itemsArrayModified || viewport.startIndex !== this.previousViewPort.startIndex;
        let endChanged = itemsArrayModified || viewport.endIndex !== this.previousViewPort.endIndex;
        let scrollLengthChanged = viewport.scrollLength !== this.previousViewPort.scrollLength;
        let paddingChanged = viewport.padding !== this.previousViewPort.padding;
        let scrollPositionChanged = viewport.scrollStartPosition !== this.previousViewPort.scrollStartPosition || viewport.scrollEndPosition !== this.previousViewPort.scrollEndPosition || viewport.maxScrollPosition !== this.previousViewPort.maxScrollPosition;
        this.previousViewPort = viewport;
        if (scrollLengthChanged) {
          this.renderer.setStyle(this.invisiblePaddingElementRef.nativeElement, this._invisiblePaddingProperty, `${viewport.scrollLength}px`);
        }
        if (paddingChanged) {
          if (this.useMarginInsteadOfTranslate) {
            this.renderer.setStyle(this.contentElementRef.nativeElement, this._marginDir, `${viewport.padding}px`);
          } else {
            this.renderer.setStyle(this.contentElementRef.nativeElement, 'transform', `${this._translateDir}(${viewport.padding}px)`);
            this.renderer.setStyle(this.contentElementRef.nativeElement, 'webkitTransform', `${this._translateDir}(${viewport.padding}px)`);
          }
        }
        if (this.headerElementRef) {
          let scrollPosition = this.getScrollElement()[this._scrollType];
          let containerOffset = this.getElementsOffset();
          let offset = Math.max(scrollPosition - viewport.padding - containerOffset + this.headerElementRef.nativeElement.clientHeight, 0);
          this.renderer.setStyle(this.headerElementRef.nativeElement, 'transform', `${this._translateDir}(${offset}px)`);
          this.renderer.setStyle(this.headerElementRef.nativeElement, 'webkitTransform', `${this._translateDir}(${offset}px)`);
        }
        const changeEventArg = startChanged || endChanged ? {
          startIndex: viewport.startIndex,
          endIndex: viewport.endIndex,
          scrollStartPosition: viewport.scrollStartPosition,
          scrollEndPosition: viewport.scrollEndPosition,
          startIndexWithBuffer: viewport.startIndexWithBuffer,
          endIndexWithBuffer: viewport.endIndexWithBuffer,
          maxScrollPosition: viewport.maxScrollPosition
        } : undefined;
        if (startChanged || endChanged || scrollPositionChanged) {
          const handleChanged = () => {
            // update the scroll list to trigger re-render of components in viewport
            this.viewPortItems = viewport.startIndexWithBuffer >= 0 && viewport.endIndexWithBuffer >= 0 ? this.items.slice(viewport.startIndexWithBuffer, viewport.endIndexWithBuffer + 1) : [];
            this.vsUpdate.emit(this.viewPortItems);
            if (startChanged) {
              this.vsStart.emit(changeEventArg);
            }
            if (endChanged) {
              this.vsEnd.emit(changeEventArg);
            }
            if (startChanged || endChanged) {
              this.changeDetectorRef.markForCheck();
              this.vsChange.emit(changeEventArg);
            }
            if (maxRunTimes > 0) {
              this.refresh_internal(false, refreshCompletedCallback, maxRunTimes - 1);
              return;
            }
            if (refreshCompletedCallback) {
              refreshCompletedCallback();
            }
          };
          if (this.executeRefreshOutsideAngularZone) {
            handleChanged();
          } else {
            this.zone.run(handleChanged);
          }
        } else {
          if (maxRunTimes > 0 && (scrollLengthChanged || paddingChanged)) {
            this.refresh_internal(false, refreshCompletedCallback, maxRunTimes - 1);
            return;
          }
          if (refreshCompletedCallback) {
            refreshCompletedCallback();
          }
        }
      });
    });
  }
  getScrollElement() {
    return this.parentScroll instanceof Window ? document.scrollingElement || document.documentElement || document.body : this.parentScroll || this.element.nativeElement;
  }
  addScrollEventHandlers() {
    if (this.isAngularUniversalSSR) {
      return;
    }
    let scrollElement = this.getScrollElement();
    this.removeScrollEventHandlers();
    this.zone.runOutsideAngular(() => {
      if (this.parentScroll instanceof Window) {
        this.disposeScrollHandler = this.renderer.listen('window', 'scroll', this.onScroll);
        this.disposeResizeHandler = this.renderer.listen('window', 'resize', this.onScroll);
      } else {
        this.disposeScrollHandler = this.renderer.listen(scrollElement, 'scroll', this.onScroll);
        if (this._checkResizeInterval > 0) {
          this.checkScrollElementResizedTimer = setInterval(() => {
            this.checkScrollElementResized();
          }, this._checkResizeInterval);
        }
      }
    });
  }
  removeScrollEventHandlers() {
    if (this.checkScrollElementResizedTimer) {
      clearInterval(this.checkScrollElementResizedTimer);
    }
    if (this.disposeScrollHandler) {
      this.disposeScrollHandler();
      this.disposeScrollHandler = undefined;
    }
    if (this.disposeResizeHandler) {
      this.disposeResizeHandler();
      this.disposeResizeHandler = undefined;
    }
  }
  getElementsOffset() {
    if (this.isAngularUniversalSSR) {
      return 0;
    }
    let offset = 0;
    if (this.containerElementRef && this.containerElementRef.nativeElement) {
      offset += this.containerElementRef.nativeElement[this._offsetType];
    }
    if (this.parentScroll) {
      let scrollElement = this.getScrollElement();
      let elementClientRect = this.getElementSize(this.element.nativeElement);
      let scrollClientRect = this.getElementSize(scrollElement);
      if (this.horizontal) {
        offset += elementClientRect.left - scrollClientRect.left;
      } else {
        offset += elementClientRect.top - scrollClientRect.top;
      }
      if (!(this.parentScroll instanceof Window)) {
        offset += scrollElement[this._scrollType];
      }
    }
    return offset;
  }
  countItemsPerWrapGroup() {
    if (this.isAngularUniversalSSR) {
      return Math.round(this.horizontal ? this.ssrViewportHeight / this.ssrChildHeight : this.ssrViewportWidth / this.ssrChildWidth);
    }
    let propertyName = this.horizontal ? 'offsetLeft' : 'offsetTop';
    let children = (this.containerElementRef && this.containerElementRef.nativeElement || this.contentElementRef.nativeElement).children;
    let childrenLength = children ? children.length : 0;
    if (childrenLength === 0) {
      return 1;
    }
    let firstOffset = children[0][propertyName];
    let result = 1;
    while (result < childrenLength && firstOffset === children[result][propertyName]) {
      ++result;
    }
    return result;
  }
  getScrollStartPosition() {
    let windowScrollValue = undefined;
    if (this.parentScroll instanceof Window) {
      windowScrollValue = window[this._pageOffsetType];
    }
    return windowScrollValue || this.getScrollElement()[this._scrollType] || 0;
  }
  resetWrapGroupDimensions() {
    const oldWrapGroupDimensions = this.wrapGroupDimensions;
    this.invalidateAllCachedMeasurements();
    if (!this.enableUnequalChildrenSizes || !oldWrapGroupDimensions || oldWrapGroupDimensions.numberOfKnownWrapGroupChildSizes === 0) {
      return;
    }
    const itemsPerWrapGroup = this.countItemsPerWrapGroup();
    for (let wrapGroupIndex = 0; wrapGroupIndex < oldWrapGroupDimensions.maxChildSizePerWrapGroup.length; ++wrapGroupIndex) {
      const oldWrapGroupDimension = oldWrapGroupDimensions.maxChildSizePerWrapGroup[wrapGroupIndex];
      if (!oldWrapGroupDimension || !oldWrapGroupDimension.items || !oldWrapGroupDimension.items.length) {
        continue;
      }
      if (oldWrapGroupDimension.items.length !== itemsPerWrapGroup) {
        return;
      }
      let itemsChanged = false;
      let arrayStartIndex = itemsPerWrapGroup * wrapGroupIndex;
      for (let i = 0; i < itemsPerWrapGroup; ++i) {
        if (!this.compareItems(oldWrapGroupDimension.items[i], this.items[arrayStartIndex + i])) {
          itemsChanged = true;
          break;
        }
      }
      if (!itemsChanged) {
        ++this.wrapGroupDimensions.numberOfKnownWrapGroupChildSizes;
        this.wrapGroupDimensions.sumOfKnownWrapGroupChildWidths += oldWrapGroupDimension.childWidth || 0;
        this.wrapGroupDimensions.sumOfKnownWrapGroupChildHeights += oldWrapGroupDimension.childHeight || 0;
        this.wrapGroupDimensions.maxChildSizePerWrapGroup[wrapGroupIndex] = oldWrapGroupDimension;
      }
    }
  }
  calculateDimensions() {
    let scrollElement = this.getScrollElement();
    const maxCalculatedScrollBarSize = 25; // Note: Formula to auto-calculate doesn't work for ParentScroll, so we default to this if not set by consuming application
    this.calculatedScrollbarHeight = Math.max(Math.min(scrollElement.offsetHeight - scrollElement.clientHeight, maxCalculatedScrollBarSize), this.calculatedScrollbarHeight);
    this.calculatedScrollbarWidth = Math.max(Math.min(scrollElement.offsetWidth - scrollElement.clientWidth, maxCalculatedScrollBarSize), this.calculatedScrollbarWidth);
    let viewportWidth = scrollElement.offsetWidth - (this.scrollbarWidth || this.calculatedScrollbarWidth || (this.horizontal ? 0 : maxCalculatedScrollBarSize));
    let viewportHeight = scrollElement.offsetHeight - (this.scrollbarHeight || this.calculatedScrollbarHeight || (this.horizontal ? maxCalculatedScrollBarSize : 0));
    let content = this.containerElementRef && this.containerElementRef.nativeElement || this.contentElementRef.nativeElement;
    let itemsPerWrapGroup = this.countItemsPerWrapGroup();
    let wrapGroupsPerPage;
    let defaultChildWidth;
    let defaultChildHeight;
    if (this.isAngularUniversalSSR) {
      viewportWidth = this.ssrViewportWidth;
      viewportHeight = this.ssrViewportHeight;
      defaultChildWidth = this.ssrChildWidth;
      defaultChildHeight = this.ssrChildHeight;
      let itemsPerRow = Math.max(Math.ceil(viewportWidth / defaultChildWidth), 1);
      let itemsPerCol = Math.max(Math.ceil(viewportHeight / defaultChildHeight), 1);
      wrapGroupsPerPage = this.horizontal ? itemsPerRow : itemsPerCol;
    } else if (!this.enableUnequalChildrenSizes) {
      if (content.children.length > 0) {
        if (!this.childWidth || !this.childHeight) {
          if (!this.minMeasuredChildWidth && viewportWidth > 0) {
            this.minMeasuredChildWidth = viewportWidth;
          }
          if (!this.minMeasuredChildHeight && viewportHeight > 0) {
            this.minMeasuredChildHeight = viewportHeight;
          }
        }
        let child = content.children[0];
        let clientRect = this.getElementSize(child);
        this.minMeasuredChildWidth = Math.min(this.minMeasuredChildWidth, clientRect.width);
        this.minMeasuredChildHeight = Math.min(this.minMeasuredChildHeight, clientRect.height);
      }
      defaultChildWidth = this.childWidth || this.minMeasuredChildWidth || viewportWidth;
      defaultChildHeight = this.childHeight || this.minMeasuredChildHeight || viewportHeight;
      let itemsPerRow = Math.max(Math.ceil(viewportWidth / defaultChildWidth), 1);
      let itemsPerCol = Math.max(Math.ceil(viewportHeight / defaultChildHeight), 1);
      wrapGroupsPerPage = this.horizontal ? itemsPerRow : itemsPerCol;
    } else {
      let scrollOffset = scrollElement[this._scrollType] - (this.previousViewPort ? this.previousViewPort.padding : 0);
      let arrayStartIndex = this.previousViewPort.startIndexWithBuffer || 0;
      let wrapGroupIndex = Math.ceil(arrayStartIndex / itemsPerWrapGroup);
      let maxWidthForWrapGroup = 0;
      let maxHeightForWrapGroup = 0;
      let sumOfVisibleMaxWidths = 0;
      let sumOfVisibleMaxHeights = 0;
      wrapGroupsPerPage = 0;
      for (let i = 0; i < content.children.length; ++i) {
        ++arrayStartIndex;
        let child = content.children[i];
        let clientRect = this.getElementSize(child);
        maxWidthForWrapGroup = Math.max(maxWidthForWrapGroup, clientRect.width);
        maxHeightForWrapGroup = Math.max(maxHeightForWrapGroup, clientRect.height);
        if (arrayStartIndex % itemsPerWrapGroup === 0) {
          let oldValue = this.wrapGroupDimensions.maxChildSizePerWrapGroup[wrapGroupIndex];
          if (oldValue) {
            --this.wrapGroupDimensions.numberOfKnownWrapGroupChildSizes;
            this.wrapGroupDimensions.sumOfKnownWrapGroupChildWidths -= oldValue.childWidth || 0;
            this.wrapGroupDimensions.sumOfKnownWrapGroupChildHeights -= oldValue.childHeight || 0;
          }
          ++this.wrapGroupDimensions.numberOfKnownWrapGroupChildSizes;
          const items = this.items.slice(arrayStartIndex - itemsPerWrapGroup, arrayStartIndex);
          this.wrapGroupDimensions.maxChildSizePerWrapGroup[wrapGroupIndex] = {
            childWidth: maxWidthForWrapGroup,
            childHeight: maxHeightForWrapGroup,
            items: items
          };
          this.wrapGroupDimensions.sumOfKnownWrapGroupChildWidths += maxWidthForWrapGroup;
          this.wrapGroupDimensions.sumOfKnownWrapGroupChildHeights += maxHeightForWrapGroup;
          if (this.horizontal) {
            let maxVisibleWidthForWrapGroup = Math.min(maxWidthForWrapGroup, Math.max(viewportWidth - sumOfVisibleMaxWidths, 0));
            if (scrollOffset > 0) {
              let scrollOffsetToRemove = Math.min(scrollOffset, maxVisibleWidthForWrapGroup);
              maxVisibleWidthForWrapGroup -= scrollOffsetToRemove;
              scrollOffset -= scrollOffsetToRemove;
            }
            sumOfVisibleMaxWidths += maxVisibleWidthForWrapGroup;
            if (maxVisibleWidthForWrapGroup > 0 && viewportWidth >= sumOfVisibleMaxWidths) {
              ++wrapGroupsPerPage;
            }
          } else {
            let maxVisibleHeightForWrapGroup = Math.min(maxHeightForWrapGroup, Math.max(viewportHeight - sumOfVisibleMaxHeights, 0));
            if (scrollOffset > 0) {
              let scrollOffsetToRemove = Math.min(scrollOffset, maxVisibleHeightForWrapGroup);
              maxVisibleHeightForWrapGroup -= scrollOffsetToRemove;
              scrollOffset -= scrollOffsetToRemove;
            }
            sumOfVisibleMaxHeights += maxVisibleHeightForWrapGroup;
            if (maxVisibleHeightForWrapGroup > 0 && viewportHeight >= sumOfVisibleMaxHeights) {
              ++wrapGroupsPerPage;
            }
          }
          ++wrapGroupIndex;
          maxWidthForWrapGroup = 0;
          maxHeightForWrapGroup = 0;
        }
      }
      let averageChildWidth = this.wrapGroupDimensions.sumOfKnownWrapGroupChildWidths / this.wrapGroupDimensions.numberOfKnownWrapGroupChildSizes;
      let averageChildHeight = this.wrapGroupDimensions.sumOfKnownWrapGroupChildHeights / this.wrapGroupDimensions.numberOfKnownWrapGroupChildSizes;
      defaultChildWidth = this.childWidth || averageChildWidth || viewportWidth;
      defaultChildHeight = this.childHeight || averageChildHeight || viewportHeight;
      if (this.horizontal) {
        if (viewportWidth > sumOfVisibleMaxWidths) {
          wrapGroupsPerPage += Math.ceil((viewportWidth - sumOfVisibleMaxWidths) / defaultChildWidth);
        }
      } else {
        if (viewportHeight > sumOfVisibleMaxHeights) {
          wrapGroupsPerPage += Math.ceil((viewportHeight - sumOfVisibleMaxHeights) / defaultChildHeight);
        }
      }
    }
    let itemCount = this.items.length;
    let itemsPerPage = itemsPerWrapGroup * wrapGroupsPerPage;
    let pageCount_fractional = itemCount / itemsPerPage;
    let numberOfWrapGroups = Math.ceil(itemCount / itemsPerWrapGroup);
    let scrollLength = 0;
    let defaultScrollLengthPerWrapGroup = this.horizontal ? defaultChildWidth : defaultChildHeight;
    if (this.enableUnequalChildrenSizes) {
      let numUnknownChildSizes = 0;
      for (let i = 0; i < numberOfWrapGroups; ++i) {
        let childSize = this.wrapGroupDimensions.maxChildSizePerWrapGroup[i] && this.wrapGroupDimensions.maxChildSizePerWrapGroup[i][this._childScrollDim];
        if (childSize) {
          scrollLength += childSize;
        } else {
          ++numUnknownChildSizes;
        }
      }
      scrollLength += Math.round(numUnknownChildSizes * defaultScrollLengthPerWrapGroup);
    } else {
      scrollLength = numberOfWrapGroups * defaultScrollLengthPerWrapGroup;
    }
    if (this.headerElementRef) {
      scrollLength += this.headerElementRef.nativeElement.clientHeight;
    }
    let viewportLength = this.horizontal ? viewportWidth : viewportHeight;
    let maxScrollPosition = Math.max(scrollLength - viewportLength, 0);
    return {
      itemCount: itemCount,
      itemsPerWrapGroup: itemsPerWrapGroup,
      wrapGroupsPerPage: wrapGroupsPerPage,
      itemsPerPage: itemsPerPage,
      pageCount_fractional: pageCount_fractional,
      childWidth: defaultChildWidth,
      childHeight: defaultChildHeight,
      scrollLength: scrollLength,
      viewportLength: viewportLength,
      maxScrollPosition: maxScrollPosition
    };
  }
  calculatePadding(arrayStartIndexWithBuffer, dimensions) {
    if (dimensions.itemCount === 0) {
      return 0;
    }
    let defaultScrollLengthPerWrapGroup = dimensions[this._childScrollDim];
    let startingWrapGroupIndex = Math.floor(arrayStartIndexWithBuffer / dimensions.itemsPerWrapGroup) || 0;
    if (!this.enableUnequalChildrenSizes) {
      return defaultScrollLengthPerWrapGroup * startingWrapGroupIndex;
    }
    let numUnknownChildSizes = 0;
    let result = 0;
    for (let i = 0; i < startingWrapGroupIndex; ++i) {
      let childSize = this.wrapGroupDimensions.maxChildSizePerWrapGroup[i] && this.wrapGroupDimensions.maxChildSizePerWrapGroup[i][this._childScrollDim];
      if (childSize) {
        result += childSize;
      } else {
        ++numUnknownChildSizes;
      }
    }
    result += Math.round(numUnknownChildSizes * defaultScrollLengthPerWrapGroup);
    return result;
  }
  calculatePageInfo(scrollPosition, dimensions) {
    let scrollPercentage = 0;
    if (this.enableUnequalChildrenSizes) {
      const numberOfWrapGroups = Math.ceil(dimensions.itemCount / dimensions.itemsPerWrapGroup);
      let totalScrolledLength = 0;
      let defaultScrollLengthPerWrapGroup = dimensions[this._childScrollDim];
      for (let i = 0; i < numberOfWrapGroups; ++i) {
        let childSize = this.wrapGroupDimensions.maxChildSizePerWrapGroup[i] && this.wrapGroupDimensions.maxChildSizePerWrapGroup[i][this._childScrollDim];
        if (childSize) {
          totalScrolledLength += childSize;
        } else {
          totalScrolledLength += defaultScrollLengthPerWrapGroup;
        }
        if (scrollPosition < totalScrolledLength) {
          scrollPercentage = i / numberOfWrapGroups;
          break;
        }
      }
    } else {
      scrollPercentage = scrollPosition / dimensions.scrollLength;
    }
    let startingArrayIndex_fractional = Math.min(Math.max(scrollPercentage * dimensions.pageCount_fractional, 0), dimensions.pageCount_fractional) * dimensions.itemsPerPage;
    let maxStart = dimensions.itemCount - dimensions.itemsPerPage - 1;
    let arrayStartIndex = Math.min(Math.floor(startingArrayIndex_fractional), maxStart);
    arrayStartIndex -= arrayStartIndex % dimensions.itemsPerWrapGroup; // round down to start of wrapGroup
    if (this.stripedTable) {
      let bufferBoundary = 2 * dimensions.itemsPerWrapGroup;
      if (arrayStartIndex % bufferBoundary !== 0) {
        arrayStartIndex = Math.max(arrayStartIndex - arrayStartIndex % bufferBoundary, 0);
      }
    }
    let arrayEndIndex = Math.ceil(startingArrayIndex_fractional) + dimensions.itemsPerPage - 1;
    let endIndexWithinWrapGroup = (arrayEndIndex + 1) % dimensions.itemsPerWrapGroup;
    if (endIndexWithinWrapGroup > 0) {
      arrayEndIndex += dimensions.itemsPerWrapGroup - endIndexWithinWrapGroup; // round up to end of wrapGroup
    }

    if (isNaN(arrayStartIndex)) {
      arrayStartIndex = 0;
    }
    if (isNaN(arrayEndIndex)) {
      arrayEndIndex = 0;
    }
    arrayStartIndex = Math.min(Math.max(arrayStartIndex, 0), dimensions.itemCount - 1);
    arrayEndIndex = Math.min(Math.max(arrayEndIndex, 0), dimensions.itemCount - 1);
    let bufferSize = this.bufferAmount * dimensions.itemsPerWrapGroup;
    let startIndexWithBuffer = Math.min(Math.max(arrayStartIndex - bufferSize, 0), dimensions.itemCount - 1);
    let endIndexWithBuffer = Math.min(Math.max(arrayEndIndex + bufferSize, 0), dimensions.itemCount - 1);
    return {
      startIndex: arrayStartIndex,
      endIndex: arrayEndIndex,
      startIndexWithBuffer: startIndexWithBuffer,
      endIndexWithBuffer: endIndexWithBuffer,
      scrollStartPosition: scrollPosition,
      scrollEndPosition: scrollPosition + dimensions.viewportLength,
      maxScrollPosition: dimensions.maxScrollPosition
    };
  }
  calculateViewport() {
    let dimensions = this.calculateDimensions();
    let offset = this.getElementsOffset();
    let scrollStartPosition = this.getScrollStartPosition();
    if (scrollStartPosition > dimensions.scrollLength + offset && !(this.parentScroll instanceof Window)) {
      scrollStartPosition = dimensions.scrollLength;
    } else {
      scrollStartPosition -= offset;
    }
    scrollStartPosition = Math.max(0, scrollStartPosition);
    let pageInfo = this.calculatePageInfo(scrollStartPosition, dimensions);
    let newPadding = this.calculatePadding(pageInfo.startIndexWithBuffer, dimensions);
    let newScrollLength = dimensions.scrollLength;
    return {
      startIndex: pageInfo.startIndex,
      endIndex: pageInfo.endIndex,
      startIndexWithBuffer: pageInfo.startIndexWithBuffer,
      endIndexWithBuffer: pageInfo.endIndexWithBuffer,
      padding: Math.round(newPadding),
      scrollLength: Math.round(newScrollLength),
      scrollStartPosition: pageInfo.scrollStartPosition,
      scrollEndPosition: pageInfo.scrollEndPosition,
      maxScrollPosition: pageInfo.maxScrollPosition
    };
  }
}
VirtualScrollerComponent.ɵfac = function VirtualScrollerComponent_Factory(t) {
  return new (t || VirtualScrollerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"]('virtual-scroller-default-options', 8));
};
VirtualScrollerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: VirtualScrollerComponent,
  selectors: [["virtual-scroller"], ["", "virtualScroller", ""]],
  contentQueries: function VirtualScrollerComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _c1, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.headerElementRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.containerElementRef = _t.first);
    }
  },
  viewQuery: function VirtualScrollerComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c3, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.contentElementRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.invisiblePaddingElementRef = _t.first);
    }
  },
  hostVars: 6,
  hostBindings: function VirtualScrollerComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("horizontal", ctx.horizontal)("vertical", !ctx.horizontal)("selfScroll", !ctx.parentScroll);
    }
  },
  inputs: {
    executeRefreshOutsideAngularZone: "executeRefreshOutsideAngularZone",
    enableUnequalChildrenSizes: "enableUnequalChildrenSizes",
    useMarginInsteadOfTranslate: "useMarginInsteadOfTranslate",
    modifyOverflowStyleOfParentScroll: "modifyOverflowStyleOfParentScroll",
    stripedTable: "stripedTable",
    scrollbarWidth: "scrollbarWidth",
    scrollbarHeight: "scrollbarHeight",
    childWidth: "childWidth",
    childHeight: "childHeight",
    ssrChildWidth: "ssrChildWidth",
    ssrChildHeight: "ssrChildHeight",
    ssrViewportWidth: "ssrViewportWidth",
    ssrViewportHeight: "ssrViewportHeight",
    bufferAmount: "bufferAmount",
    scrollAnimationTime: "scrollAnimationTime",
    resizeBypassRefreshThreshold: "resizeBypassRefreshThreshold",
    scrollThrottlingTime: "scrollThrottlingTime",
    scrollDebounceTime: "scrollDebounceTime",
    checkResizeInterval: "checkResizeInterval",
    items: "items",
    compareItems: "compareItems",
    horizontal: "horizontal",
    parentScroll: "parentScroll"
  },
  outputs: {
    vsUpdate: "vsUpdate",
    vsChange: "vsChange",
    vsStart: "vsStart",
    vsEnd: "vsEnd"
  },
  exportAs: ["virtualScroller"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
  ngContentSelectors: _c4,
  decls: 5,
  vars: 0,
  consts: [[1, "total-padding"], ["invisiblePadding", ""], [1, "scrollable-content"], ["content", ""]],
  template: function VirtualScrollerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
  },
  styles: ["[_nghost-%COMP%] {\n      position: relative;\n\t  display: block;\n      -webkit-overflow-scrolling: touch;\n    }\n\t\n\t.horizontal.selfScroll[_nghost-%COMP%] {\n      overflow-y: visible;\n      overflow-x: auto;\n\t}\n\t.vertical.selfScroll[_nghost-%COMP%] {\n      overflow-y: auto;\n      overflow-x: visible;\n\t}\n\t\n    .scrollable-content[_ngcontent-%COMP%] {\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      max-width: 100vw;\n      max-height: 100vh;\n      position: absolute;\n    }\n\n\t.scrollable-content[_ngcontent-%COMP%]     > * {\n\t\tbox-sizing: border-box;\n\t}\n\t\n\t.horizontal[_nghost-%COMP%] {\n\t\twhite-space: nowrap;\n\t}\n\t\n\t.horizontal[_nghost-%COMP%]   .scrollable-content[_ngcontent-%COMP%] {\n\t\tdisplay: flex;\n\t}\n\t\n\t.horizontal[_nghost-%COMP%]   .scrollable-content[_ngcontent-%COMP%]     > * {\n\t\tflex-shrink: 0;\n\t\tflex-grow: 0;\n\t\twhite-space: initial;\n\t}\n\t\n    .total-padding[_ngcontent-%COMP%] {\n      width: 1px;\n      opacity: 0;\n    }\n    \n    .horizontal[_nghost-%COMP%]   .total-padding[_ngcontent-%COMP%] {\n      height: 100%;\n    }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2FuZ3VsYXItbXVsdGlzZWxlY3QtZHJvcGRvd24tbGliL3NyYy9saWIvdmlydHVhbC1zY3JvbGwvdmlydHVhbC1zY3JvbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtJQUNJO01BQ0Usa0JBQWtCO0dBQ3JCLGNBQWM7TUFDWCxpQ0FBaUM7SUFDbkM7O0NBRUg7TUFDSyxtQkFBbUI7TUFDbkIsZ0JBQWdCO0NBQ3JCO0NBQ0E7TUFDSyxnQkFBZ0I7TUFDaEIsbUJBQW1CO0NBQ3hCOztJQUVHO01BQ0UsTUFBTTtNQUNOLE9BQU87TUFDUCxXQUFXO01BQ1gsWUFBWTtNQUNaLGdCQUFnQjtNQUNoQixpQkFBaUI7TUFDakIsa0JBQWtCO0lBQ3BCOztDQUVIO0VBQ0Msc0JBQXNCO0NBQ3ZCOztDQUVBO0VBQ0MsbUJBQW1CO0NBQ3BCOztDQUVBO0VBQ0MsYUFBYTtDQUNkOztDQUVBO0VBQ0MsY0FBYztFQUNkLFlBQVk7RUFDWixvQkFBb0I7Q0FDckI7O0lBRUc7TUFDRSxVQUFVO01BQ1YsVUFBVTtJQUNaOztJQUVBO01BQ0UsWUFBWTtJQUNkIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgOmhvc3Qge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXHQgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAgIH1cblx0XG5cdDpob3N0Lmhvcml6b250YWwuc2VsZlNjcm9sbCB7XG4gICAgICBvdmVyZmxvdy15OiB2aXNpYmxlO1xuICAgICAgb3ZlcmZsb3cteDogYXV0bztcblx0fVxuXHQ6aG9zdC52ZXJ0aWNhbC5zZWxmU2Nyb2xsIHtcbiAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICBvdmVyZmxvdy14OiB2aXNpYmxlO1xuXHR9XG5cdFxuICAgIC5zY3JvbGxhYmxlLWNvbnRlbnQge1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgbWF4LXdpZHRoOiAxMDB2dztcbiAgICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIH1cblxuXHQuc2Nyb2xsYWJsZS1jb250ZW50IDo6bmctZGVlcCA+ICoge1xuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdH1cblx0XG5cdDpob3N0Lmhvcml6b250YWwge1xuXHRcdHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cdH1cblx0XG5cdDpob3N0Lmhvcml6b250YWwgLnNjcm9sbGFibGUtY29udGVudCB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0fVxuXHRcblx0Omhvc3QuaG9yaXpvbnRhbCAuc2Nyb2xsYWJsZS1jb250ZW50IDo6bmctZGVlcCA+ICoge1xuXHRcdGZsZXgtc2hyaW5rOiAwO1xuXHRcdGZsZXgtZ3JvdzogMDtcblx0XHR3aGl0ZS1zcGFjZTogaW5pdGlhbDtcblx0fVxuXHRcbiAgICAudG90YWwtcGFkZGluZyB7XG4gICAgICB3aWR0aDogMXB4O1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgXG4gICAgOmhvc3QuaG9yaXpvbnRhbCAudG90YWwtcGFkZGluZyB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
});
class VirtualScrollerModule {}
VirtualScrollerModule.ɵfac = function VirtualScrollerModule_Factory(t) {
  return new (t || VirtualScrollerModule)();
};
VirtualScrollerModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: VirtualScrollerModule
});
VirtualScrollerModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  providers: [{
    provide: 'virtual-scroller-default-options',
    useFactory: VIRTUAL_SCROLLER_DEFAULT_OPTIONS_FACTORY
  }],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](VirtualScrollerModule, {
    declarations: [VirtualScrollerComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
    exports: [VirtualScrollerComponent]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 4520);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 9736);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 1891);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/service-worker */ 1509);
/* harmony import */ var _check_for_update_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check-for-update.service */ 1354);






class AppComponent {
  constructor(updates, checkForUpdateService, router, activatedRoute) {
    this.updates = updates;
    this.checkForUpdateService = checkForUpdateService;
    this.router = router;
    this.activatedRoute = activatedRoute;
    this.title = 'app works!';
    this.currentComponent = {
      label: '',
      tstitle: '',
      htmltitle: '',
      csstitle: '',
      tsgist: '',
      htmlgist: '',
      cssgist: false
    };
    this.active = 1;
    this.links = [];
    this.singleSelectionList = [];
    this.singleSelectionselectedItems = [];
    this.singleSelectionSettings = {};
    this.basicExampleList = [];
    this.basicExampleSelectedItems = [];
    this.basicExampleSettings = {};
    this.selectedItems3 = [];
    this.dropdownSettings3 = {};
    this.limitSelectionSelectedItems = [];
    this.limitSelectionSettings = {};
    this.disableModeSelectedItems = [];
    this.disableModeSettings = {};
    this.placeholderExampleList = [];
    this.placeholderExampleSelectedItems = [];
    this.placeholderExampleSettings = {};
    this.resetExampleList = [];
    this.resetExampleSelectedItems = [];
    this.resetExampleSettings = {};
    this.groupByExampleList = [];
    this.groupByExampleSelectedItems = [];
    this.groupByExampleSettings = {};
    this.templatingExampleList = [];
    this.templatingExampleSelectedItems = [];
    this.templatingExampleSettings = {};
    this.updates.available.subscribe(event => {
      this.updateToLatest();
    });
    this.updates.activated.subscribe(event => {
      console.log('old version was', event.previous);
      console.log('new version is', event.current);
    });
    console.log(this.router.config);
    this.links = this.router.config;
    this.routeData$ = router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(routeEvent => routeEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(() => activatedRoute), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(activatedRoute => activatedRoute.firstChild), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(firstChild => firstChild.data), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(data => data));
    this.routeData$.subscribe(data => {
      this.active = 1;
      this.currentComponent = Object.assign({}, data);
    });
  }
  showInfo(link) {
    console.log(link);
  }
  updateToLatest() {
    console.log('Updating to latest version.');
    this.updates.activateUpdate().then(() => document.location.reload());
  }
  ngOnInit() {
    this.singleSelectionList = [{
      "id": 1,
      "itemName": "India"
    }, {
      "id": 2,
      "itemName": "Singapore"
    }, {
      "id": 3,
      "itemName": "Australia"
    }, {
      "id": 4,
      "itemName": "Canada"
    }, {
      "id": 5,
      "itemName": "South Korea"
    }];
    this.singleSelectionselectedItems = [{
      "id": 2,
      "itemName": "Singapore"
    }];
    this.singleSelectionSettings = {
      singleSelection: true,
      text: "Select Country"
    };
    this.basicExampleList = [{
      "id": 1,
      "itemName": "India"
    }, {
      "id": 2,
      "itemName": "Singapore"
    }, {
      "id": 3,
      "itemName": "Australia"
    }, {
      "id": 4,
      "itemName": "Canada"
    }, {
      "id": 5,
      "itemName": "South Korea"
    }, {
      "id": 6,
      "itemName": "Brazil"
    }];
    this.basicExampleSelectedItems = [{
      "id": 1,
      "itemName": "India"
    }, {
      "id": 2,
      "itemName": "Singapore"
    }, {
      "id": 3,
      "itemName": "Australia"
    }, {
      "id": 4,
      "itemName": "Canada"
    }];
    this.basicExampleSettings = {
      text: "Select Countries",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: "myclass custom-class"
    };
    this.selectedItems3 = [{
      "id": 1,
      "itemName": "India"
    }, {
      "id": 2,
      "itemName": "Singapore"
    }, {
      "id": 4,
      "itemName": "Canada"
    }, {
      "id": 5,
      "itemName": "South Korea"
    }];
    this.dropdownSettings3 = {
      singleSelection: false,
      text: "Select Countries",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      badgeShowLimit: 3
    };
    this.limitSelectionSelectedItems = [{
      "id": 1,
      "itemName": "India"
    }, {
      "id": 2,
      "itemName": "Singapore"
    }, {
      "id": 3,
      "itemName": "Australia"
    }, {
      "id": 4,
      "itemName": "Canada"
    }];
    this.limitSelectionSettings = {
      text: "Select Countries",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: false,
      classes: "myclass custom-class",
      limitSelection: 4
    };
    this.disableModeSelectedItems = [{
      "id": 1,
      "itemName": "India"
    }, {
      "id": 2,
      "itemName": "Singapore"
    }, {
      "id": 3,
      "itemName": "Australia"
    }, {
      "id": 4,
      "itemName": "Canada"
    }];
    this.disableModeSettings = {
      text: "Select Countries",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: false,
      classes: "myclass custom-class",
      limitSelection: 2,
      disabled: true
    };
    this.placeholderExampleList = [{
      "id": 1,
      "itemName": "India"
    }, {
      "id": 2,
      "itemName": "Singapore"
    }, {
      "id": 3,
      "itemName": "Australia"
    }, {
      "id": 4,
      "itemName": "Canada"
    }, {
      "id": 5,
      "itemName": "South Korea"
    }];
    this.placeholderExampleSelectedItems = [{
      "id": 1,
      "itemName": "India"
    }, {
      "id": 2,
      "itemName": "Singapore"
    }, {
      "id": 3,
      "itemName": "Australia"
    }, {
      "id": 4,
      "itemName": "Canada"
    }];
    this.placeholderExampleSettings = {
      text: "Select Countries",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: "myclass custom-class",
      searchPlaceholderText: "Custom Placeholder text"
    };
    this.resetExampleList = [{
      "id": 1,
      "itemName": "India"
    }, {
      "id": 2,
      "itemName": "Singapore"
    }, {
      "id": 3,
      "itemName": "Australia"
    }, {
      "id": 4,
      "itemName": "Canada"
    }, {
      "id": 5,
      "itemName": "South Korea"
    }];
    this.resetExampleSelectedItems = [{
      "id": 1,
      "itemName": "India"
    }, {
      "id": 2,
      "itemName": "Singapore"
    }, {
      "id": 3,
      "itemName": "Australia"
    }, {
      "id": 4,
      "itemName": "Canada"
    }];
    this.resetExampleSettings = {
      text: "Select Countries",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: false,
      classes: "myclass custom-class"
    };
    this.groupByExampleList = [{
      "id": 1,
      "itemName": "India",
      "category": "asia"
    }, {
      "id": 2,
      "itemName": "Singapore",
      "category": "asia pacific"
    }, {
      "id": 3,
      "itemName": "Germany",
      "category": "Europe"
    }, {
      "id": 4,
      "itemName": "France",
      "category": "Europe"
    }, {
      "id": 5,
      "itemName": "South Korea",
      "category": "asia"
    }, {
      "id": 6,
      "itemName": "Sweden",
      "category": "Europe"
    }];
    this.groupByExampleSelectedItems = [{
      "id": 1,
      "itemName": "India"
    }, {
      "id": 2,
      "itemName": "Singapore"
    }, {
      "id": 3,
      "itemName": "Germany"
    }, {
      "id": 4,
      "itemName": "France"
    }];
    this.groupByExampleSettings = {
      text: "Select Countries",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: "myclass custom-class",
      groupBy: "category"
    };
    this.groupByExampleSettings = {
      singleSelection: false,
      text: "Select Fields",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      searchPlaceholderText: 'Search Fields',
      enableSearchFilter: true,
      badgeShowLimit: 5,
      groupBy: "category"
    };
    this.templatingExampleList = [{
      "id": 1,
      "itemName": "India",
      "capital": "Delhi",
      "image": "http://www.sciencekids.co.nz/images/pictures/flags96/India.jpg"
    }, {
      "id": 2,
      "itemName": "Singapore",
      "capital": "Singapore",
      "image": "http://www.sciencekids.co.nz/images/pictures/flags96/Singapore.jpg"
    }, {
      "id": 3,
      "itemName": "United Kingdom",
      "capital": "London",
      "image": "http://www.sciencekids.co.nz/images/pictures/flags96/United_Kingdom.jpg"
    }, {
      "id": 4,
      "itemName": "Canada",
      "capital": "Ottawa",
      "image": "http://www.sciencekids.co.nz/images/pictures/flags96/Canada.jpg"
    }, {
      "id": 5,
      "itemName": "South Korea",
      "capital": "Seoul",
      "image": "http://www.sciencekids.co.nz/images/pictures/flags96/South_Korea.jpg"
    }, {
      "id": 6,
      "itemName": "Brazil",
      "capital": "Brasilia",
      "image": "http://www.sciencekids.co.nz/images/pictures/flags96/Brazil.jpg"
    }];
    this.templatingExampleSelectedItems = [{
      "id": 1,
      "itemName": "India"
    }, {
      "id": 2,
      "itemName": "Singapore"
    }, {
      "id": 3,
      "itemName": "United Kingdom"
    }, {
      "id": 4,
      "itemName": "Canada"
    }];
    this.templatingExampleSettings = {
      text: "Select Countries",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: "myclass custom-class",
      showCheckbox: true
    };
  }
  onItemSelect(item) {
    console.log(item);
    console.log(this.basicExampleSelectedItems);
  }
  OnItemDeSelect(item) {
    console.log(item);
    console.log(this.basicExampleSelectedItems);
  }
  onSelectAll(items) {
    console.log(items);
  }
  onDeSelectAll(items) {
    console.log(items);
  }
  showModel() {
    console.log(this.singleSelectionselectedItems);
  }
  changeData() {
    this.resetExampleSelectedItems = [];
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_service_worker__WEBPACK_IMPORTED_MODULE_6__.SwUpdate), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_check_for_update_service__WEBPACK_IMPORTED_MODULE_0__.CheckForUpdateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 0,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {},
  styles: [".example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.mat-toolbar[_ngcontent-%COMP%] {\n  position: sticky;\n  position: -webkit-sticky; \n\n  top: 0; \n\n  z-index: 1000; \n\n}\n\n.left-section[_ngcontent-%COMP%] {\n  max-width: 250px !important;\n  width: 250px !important;\n  position: fixed;\n  display: flex;\n  height: calc(100vh - 64px);\n  overflow: auto;\n  border-right: 1px solid #ccc;\n}\n\n.center-section[_ngcontent-%COMP%] {\n  max-width: initial !important;\n  margin-left: 250px;\n  padding-top: 10px;\n}\n\n.right-section[_ngcontent-%COMP%] {\n  max-width: 300px !important;\n}\n\n.mat-grid-list[_ngcontent-%COMP%] {\n  height: calc(100vh - 64px) !important;\n}\n\n.left-sidebar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 65px;\n  height: calc(100vh - 75px);\n  padding-right: 0px;\n  overflow: hidden;\n}\n\n.left-sidebar[_ngcontent-%COMP%], .right-sidebar[_ngcontent-%COMP%] {\n  width: 260px;\n}\n\n.left-sidebar[_ngcontent-%COMP%]:hover {\n  overflow: auto;\n}\n\n.outer-wrapper[_ngcontent-%COMP%] {\n  padding: 30px;\n}\n\n.center-content[_ngcontent-%COMP%] {\n  border-right: 1px solid #dee2e6;\n}\n\n@media (min-width: 768px) {\n  .center-content[_ngcontent-%COMP%] {\n    margin-left: 265px;\n  }\n}\n.nav-sub[_ngcontent-%COMP%] {\n  width: 100%;\n  box-shadow: none;\n  margin-bottom: 6px;\n  padding: 0px;\n  margin-top: 50px;\n}\n\n.nav-wrapper[_ngcontent-%COMP%] {\n  padding: 0px 10px;\n}\n\n.list-group-item[_ngcontent-%COMP%] {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n\n.sidebar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  \n\n\n\n  bottom: 0;\n  \n\n  left: 0;\n  z-index: 100; \n\n  padding: 60px 0 0; \n\n  overflow: auto;\n  width: 250px;\n  border-right: 1px solid #dee2e6;\n}\n\n@media (max-width: 767.98px) {\n  .sidebar[_ngcontent-%COMP%] {\n    top: 5rem;\n  }\n}\n.sidebar-sticky[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  height: calc(100vh - 48px);\n  padding-top: 0.5rem;\n  overflow-x: hidden;\n  overflow-y: auto; \n\n}\n\n.sidebar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   .feather[_ngcontent-%COMP%] {\n  margin-right: 4px;\n  color: #727272;\n}\n\n.sidebar[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  color: #007bff;\n}\n\n.sidebar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover   .feather[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]   .feather[_ngcontent-%COMP%] {\n  color: inherit;\n}\n\n.sidebar-heading[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n}\n\n.center-content[_ngcontent-%COMP%] {\n  margin-left: 250px !important;\n}\n\n.ad-container[_ngcontent-%COMP%] {\n  flex: 0 0 300px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksY0FBQTtBQUhKOztBQUtFO0VBQ0UsZ0JBQUE7RUFDQSx3QkFBQSxFQUFBLHlCQUFBO0VBQ0EsTUFBQSxFQUFBLHlDQUFBO0VBQ0EsYUFBQSxFQUFBLCtEQUFBO0FBRko7O0FBSUE7RUFDSSwyQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtBQURKOztBQUdBO0VBQ0ksNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBRUE7RUFDSSwyQkFBQTtBQUNKOztBQUNBO0VBQ0kscUNBQUE7QUFFSjs7QUFBQTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBR0o7O0FBREE7RUFDSSxZQUFBO0FBSUo7O0FBRkE7RUFDSSxjQUFBO0FBS0o7O0FBREE7RUFDSSxhQUFBO0FBSUo7O0FBRkE7RUFDRSwrQkFBQTtBQUtGOztBQUhBO0VBQ0k7SUFDSSxrQkFBQTtFQU1OO0FBQ0Y7QUFKQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBTUo7O0FBSkE7RUFDSSxpQkFBQTtBQU9KOztBQUxBO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtBQVFKOztBQUhBO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQTs7R0FBQTtFQUdBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUEsRUFBQSxzQkFBQTtFQUNBLGlCQUFBLEVBQUEscUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0FBTUo7O0FBSEU7RUFDRTtJQUNFLFNBQUE7RUFNSjtBQUNGO0FBSEU7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQSxFQUFBLDZEQUFBO0FBS0o7O0FBRkU7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUFLSjs7QUFGRTtFQUNFLGNBQUE7QUFLSjs7QUFGRTs7RUFFRSxjQUFBO0FBS0o7O0FBRkU7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0FBS0o7O0FBSEU7RUFDRSw2QkFBQTtBQU1KOztBQUpBO0VBQ0UsZUFBQTtBQU9GIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIm5vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9mdW5jdGlvbnNcIjtcblxuQGltcG9ydCBcIm5vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy92YXJpYWJsZXNcIjtcblxuLmV4YW1wbGUtc3BhY2VyIHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgfVxuICAubWF0LXRvb2xiYXIge1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5OyAvKiBGb3IgbWFjT1MvaU9TIFNhZmFyaSAqL1xuICAgIHRvcDogMDsgLyogU2V0cyB0aGUgc3RpY2t5IHRvb2xiYXIgdG8gYmUgb24gdG9wICovXG4gICAgei1pbmRleDogMTAwMDsgLyogRW5zdXJlIHRoYXQgeW91ciBhcHAncyBjb250ZW50IGRvZXNuJ3Qgb3ZlcmxhcCB0aGUgdG9vbGJhciAqL1xufVxuLmxlZnQtc2VjdGlvbiB7XG4gICAgbWF4LXdpZHRoOiAyNTBweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAyNTBweCAhaW1wb3J0YW50O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDY0cHgpO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjY2M7XG59XG4uY2VudGVyLXNlY3Rpb24ge1xuICAgIG1heC13aWR0aDogaW5pdGlhbCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAyNTBweDtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbi5yaWdodC1zZWN0aW9uIHtcbiAgICBtYXgtd2lkdGg6IDMwMHB4ICFpbXBvcnRhbnQ7XG59XG4ubWF0LWdyaWQtbGlzdCB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjRweCkgIWltcG9ydGFudDtcbn1cbi5sZWZ0LXNpZGViYXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDY1cHg7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzVweCk7XG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG4ubGVmdC1zaWRlYmFyLCAucmlnaHQtc2lkZWJhciB7XG4gICAgd2lkdGg6IDI2MHB4O1xufVxuLmxlZnQtc2lkZWJhcjpob3ZlciB7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG5cbn1cblxuLm91dGVyLXdyYXBwZXIge1xuICAgIHBhZGRpbmc6IDMwcHg7XG59XG4uY2VudGVyLWNvbnRlbnR7XG4gIGJvcmRlci1yaWdodDogJGJvcmRlci13aWR0aCBzb2xpZCAkZ3JheS0zMDA7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHsgXG4gICAgLmNlbnRlci1jb250ZW50IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI2NXB4O1xuICAgIH1cbn1cbi5uYXYtc3Vie1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuLm5hdi13cmFwcGVyIHtcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcbn1cbi5saXN0LWdyb3VwLWl0ZW0ge1xuICAgIHBhZGRpbmctdG9wOiAwLjVyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcbn1cblxuXG5cbi5zaWRlYmFyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIC8qIHJ0bDpyYXc6XG4gICAgcmlnaHQ6IDA7XG4gICAgKi9cbiAgICBib3R0b206IDA7XG4gICAgLyogcnRsOnJlbW92ZSAqL1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogMTAwOyAvKiBCZWhpbmQgdGhlIG5hdmJhciAqL1xuICAgIHBhZGRpbmc6IDYwcHggMCAwOyAvKiBIZWlnaHQgb2YgbmF2YmFyICovXG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGJvcmRlci1yaWdodDogJGJvcmRlci13aWR0aCBzb2xpZCAkZ3JheS0zMDA7XG4gIH1cbiAgXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkge1xuICAgIC5zaWRlYmFyIHtcbiAgICAgIHRvcDogNXJlbTtcbiAgICB9XG4gIH1cbiAgXG4gIC5zaWRlYmFyLXN0aWNreSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMDtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0OHB4KTtcbiAgICBwYWRkaW5nLXRvcDogLjVyZW07XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIG92ZXJmbG93LXk6IGF1dG87IC8qIFNjcm9sbGFibGUgY29udGVudHMgaWYgdmlld3BvcnQgaXMgc2hvcnRlciB0aGFuIGNvbnRlbnQuICovXG4gIH1cblxuICAuc2lkZWJhciAubmF2LWxpbmsgLmZlYXRoZXIge1xuICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgIGNvbG9yOiAjNzI3MjcyO1xuICB9XG4gIFxuICAuc2lkZWJhciAubmF2LWxpbmsuYWN0aXZlIHtcbiAgICBjb2xvcjogIzAwN2JmZjtcbiAgfVxuICBcbiAgLnNpZGViYXIgLm5hdi1saW5rOmhvdmVyIC5mZWF0aGVyLFxuICAuc2lkZWJhciAubmF2LWxpbmsuYWN0aXZlIC5mZWF0aGVyIHtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgfVxuICBcbiAgLnNpZGViYXItaGVhZGluZyB7XG4gICAgZm9udC1zaXplOiAuNzVyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuICAuY2VudGVyLWNvbnRlbnQge1xuICAgIG1hcmdpbi1sZWZ0OiAyNTBweCAhaW1wb3J0YW50O1xuICB9XG4uYWQtY29udGFpbmVyIHtcbiAgZmxleDogMCAwIDMwMHB4O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _projects_angular_multiselect_dropdown_lib_src_lib_multiselect_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../projects/angular-multiselect-dropdown-lib/src/lib/multiselect.component */ 2744);
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-highlightjs */ 1747);
/* harmony import */ var _components_sourcetab_sourcetab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sourcetab/sourcetab.component */ 3279);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/service-worker */ 1509);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ 553);
/* harmony import */ var _check_for_update_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./check-for-update.service */ 1354);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6101);
/* harmony import */ var ng2_adsense__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-adsense */ 3004);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);

















class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  providers: [_check_for_update_service__WEBPACK_IMPORTED_MODULE_4__.CheckForUpdateService],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule.withServerTransition({
    appId: 'serverApp'
  }), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _projects_angular_multiselect_dropdown_lib_src_lib_multiselect_component__WEBPACK_IMPORTED_MODULE_1__.AngularMultiSelectModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, ng2_adsense__WEBPACK_IMPORTED_MODULE_9__.AdsenseModule.forRoot(), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModule, ngx_highlightjs__WEBPACK_IMPORTED_MODULE_11__.HighlightModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_12__.ServiceWorkerModule.register('ngsw-worker.js', {
    enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.production
  }), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__.BrowserAnimationsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _components_sourcetab_sourcetab_component__WEBPACK_IMPORTED_MODULE_2__.SourceTab],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _projects_angular_multiselect_dropdown_lib_src_lib_multiselect_component__WEBPACK_IMPORTED_MODULE_1__.AngularMultiSelectModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, ng2_adsense__WEBPACK_IMPORTED_MODULE_9__.AdsenseModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModule, ngx_highlightjs__WEBPACK_IMPORTED_MODULE_11__.HighlightModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_12__.ServiceWorkerModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__.BrowserAnimationsModule]
  });
})();

/***/ }),

/***/ 1354:
/*!*********************************************!*\
  !*** ./src/app/check-for-update.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CheckForUpdateService: () => (/* binding */ CheckForUpdateService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 3379);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9644);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 5267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/service-worker */ 1509);




class CheckForUpdateService {
  constructor(appRef, updates) {
    // Allow the app to stabilize first, before starting polling for updates with `interval()`.
    const appIsStable$ = appRef.isStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.first)(isStable => isStable === true));
    const everySixHours$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.interval)(24 * 60 * 60 * 1000);
    const everySixHoursOnceAppIsStable$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.concat)(appIsStable$, everySixHours$);
    everySixHoursOnceAppIsStable$.subscribe(() => {
      console.log("checking for update");
      updates.checkForUpdate();
    });
  }
}
CheckForUpdateService.ɵfac = function CheckForUpdateService_Factory(t) {
  return new (t || CheckForUpdateService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ApplicationRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_service_worker__WEBPACK_IMPORTED_MODULE_4__.SwUpdate));
};
CheckForUpdateService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: CheckForUpdateService,
  factory: CheckForUpdateService.ɵfac
});

/***/ }),

/***/ 3279:
/*!*************************************************************!*\
  !*** ./src/app/components/sourcetab/sourcetab.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SourceTab: () => (/* binding */ SourceTab)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class SourceTab {
  constructor() {
    this.active = 1;
  }
  ngOnInit() {}
}
SourceTab.ɵfac = function SourceTab_Factory(t) {
  return new (t || SourceTab)();
};
SourceTab.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: SourceTab,
  selectors: [["cuppa-source"]],
  inputs: {
    tstitle: "tstitle",
    htmltitle: "htmltitle",
    csstitle: "csstitle",
    tsgist: "tsgist",
    htmlgist: "htmlgist",
    cssgist: "cssgist"
  },
  decls: 0,
  vars: 0,
  template: function SourceTab_Template(rf, ctx) {},
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 553);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map
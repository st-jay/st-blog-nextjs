(() => {
var exports = {};
exports.id = 492;
exports.ids = [492];
exports.modules = {

/***/ 80:
/***/ ((module) => {

// Exports
module.exports = {
	"post_cover": "Post_post_cover__MjQ9s",
	"post_title": "Post_post_title__bS_li",
	"post_date": "Post_post_date__nEgqM",
	"post_content": "Post_post_content__Qa1hp"
};


/***/ }),

/***/ 967:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Post)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(974);
/* harmony import */ var _Post_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80);
/* harmony import */ var _Post_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Post_module_scss__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([marked__WEBPACK_IMPORTED_MODULE_3__, highlight_js__WEBPACK_IMPORTED_MODULE_2__]);
([marked__WEBPACK_IMPORTED_MODULE_3__, highlight_js__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);





function Post({ frontmatter: { title , date , cover_image  } , content  }) {
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        highlight_js__WEBPACK_IMPORTED_MODULE_2__["default"].highlightAll();
    }, []);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "container",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    backgroundImage: `url('${cover_image}')`
                },
                alt: "Post cover",
                className: (_Post_module_scss__WEBPACK_IMPORTED_MODULE_4___default().post_cover)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: (_Post_module_scss__WEBPACK_IMPORTED_MODULE_4___default().post_title),
                children: title
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_Post_module_scss__WEBPACK_IMPORTED_MODULE_4___default().post_date),
                children: [
                    "Posted on ",
                    date
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_Post_module_scss__WEBPACK_IMPORTED_MODULE_4___default().post_content),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    dangerouslySetInnerHTML: {
                        __html: (0,marked__WEBPACK_IMPORTED_MODULE_3__.marked)(content)
                    }
                })
            })
        ]
    }));
};

});

/***/ }),

/***/ 602:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PostPage),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Post_Post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(967);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Post_Post__WEBPACK_IMPORTED_MODULE_4__]);
_components_Post_Post__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];





function PostPage({ frontmatter , content  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Post_Post__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            frontmatter: frontmatter,
            content: content
        })
    }));
};
async function getStaticPaths() {
    const files = fs__WEBPACK_IMPORTED_MODULE_1___default().readdirSync(path__WEBPACK_IMPORTED_MODULE_2___default().join('posts'));
    const paths = files.map((filename)=>({
            params: {
                slug: filename.replace('.md', '')
            }
        })
    );
    return {
        paths,
        fallback: false
    };
}
async function getStaticProps({ params: { slug  }  }) {
    const fileContent = fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_2___default().join('posts', slug + '.md'), 'utf-8');
    const { data: frontmatter , content  } = gray_matter__WEBPACK_IMPORTED_MODULE_3___default()(fileContent);
    return {
        props: {
            frontmatter,
            content
        }
    };
}

});

/***/ }),

/***/ 76:
/***/ ((module) => {

"use strict";
module.exports = require("gray-matter");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 0:
/***/ ((module) => {

"use strict";
module.exports = import("highlight.js");;

/***/ }),

/***/ 974:
/***/ ((module) => {

"use strict";
module.exports = import("marked");;

/***/ }),

/***/ 147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 17:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(602));
module.exports = __webpack_exports__;

})();
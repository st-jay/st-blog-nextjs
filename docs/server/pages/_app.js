(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 953:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "Footer_footer__Dhw_9"
};


/***/ }),

/***/ 72:
/***/ ((module) => {

// Exports
module.exports = {
	"nav": "Header_nav__9EX6V",
	"nav_container": "Header_nav_container__6Sf0b",
	"logo_container": "Header_logo_container__81Hba",
	"logo_img": "Header_logo_img__9EO3S",
	"logo_text": "Header_logo_text__tP0FQ",
	"nav_list": "Header_nav_list__lg7Kd",
	"nav_list_item": "Header_nav_list_item__uZyuR"
};


/***/ }),

/***/ 908:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/Footer/Footer.module.scss
var Footer_module = __webpack_require__(953);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: ./components/Footer/Footer.jsx



function Footer() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Footer_module_default()).footer,
        children: [
            "All rights reserved \xa9 ",
            new Date().getFullYear()
        ]
    }));
};

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
// EXTERNAL MODULE: ./utils/utils.js
var utils = __webpack_require__(364);
// EXTERNAL MODULE: ./components/Header/Header.module.scss
var Header_module = __webpack_require__(72);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
;// CONCATENATED MODULE: ./components/Header/Header.jsx




function Header() {
    return(/*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: (Header_module_default()).nav,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (0,utils/* classList */.s)('container', (Header_module_default()).nav_container),
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: (Header_module_default()).logo_container,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: (Header_module_default()).logo_text,
                            children: "SuperTokens"
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    className: (Header_module_default()).nav_list,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: (Header_module_default()).nav_list_item,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "#",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: "Documentation"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: (Header_module_default()).nav_list_item,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "#",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: "Pricing"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: (Header_module_default()).nav_list_item,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "#",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: "Roadmap"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: (Header_module_default()).nav_list_item,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "3",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: "Discord"
                                })
                            })
                        })
                    ]
                })
            ]
        })
    }));
};

;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./components/Metatags.jsx


function Metatags() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: "Unblocced - Learn blockchain development"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "description",
                content: "Generated by create next app"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "apple-touch-icon",
                sizes: "57x57",
                href: "icons/apple-icon-57x57.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "apple-touch-icon",
                sizes: "60x60",
                href: "icons/apple-icon-60x60.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "apple-touch-icon",
                sizes: "72x72",
                href: "icons/apple-icon-72x72.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "apple-touch-icon",
                sizes: "76x76",
                href: "icons/apple-icon-76x76.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "apple-touch-icon",
                sizes: "114x114",
                href: "icons/apple-icon-114x114.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "apple-touch-icon",
                sizes: "120x120",
                href: "icons/apple-icon-120x120.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "apple-touch-icon",
                sizes: "144x144",
                href: "icons/apple-icon-144x144.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "apple-touch-icon",
                sizes: "152x152",
                href: "icons/apple-icon-152x152.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "apple-touch-icon",
                sizes: "180x180",
                href: "icons/apple-icon-180x180.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "icon",
                type: "image/png",
                sizes: "192x192",
                href: "icons/android-icon-192x192.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: "icons/favicon-32x32.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "icon",
                type: "image/png",
                sizes: "96x96",
                href: "icons/favicon-96x96.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                href: "icons/favicon-16x16.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "manifest",
                href: "/manifest.json"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "msapplication-TileColor",
                content: "#ffffff"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "msapplication-TileImage",
                content: "icons/ms-icon-144x144.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "theme-color",
                content: "#ffffff"
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./pages/_app.js






function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Metatags, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {
            })
        ]
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 364:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ classList),
/* harmony export */   "d": () => (/* binding */ sortByDate)
/* harmony export */ });
// joins a list of classes
const classList = (...classes)=>{
    return classes.join(" ");
};
// sorts posts by date
const sortByDate = (a, b)=>{
    return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
};


/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 14:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664], () => (__webpack_exec__(908)));
module.exports = __webpack_exports__;

})();
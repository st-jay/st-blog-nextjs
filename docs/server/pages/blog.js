(() => {
var exports = {};
exports.id = 195;
exports.ids = [195];
exports.modules = {

/***/ 998:
/***/ ((module) => {

// Exports
module.exports = {
	"hero_container": "Hero_hero_container__o7Ffk",
	"h1": "Hero_h1__T4IIE",
	"h2": "Hero_h2__843ro"
};


/***/ }),

/***/ 507:
/***/ ((module) => {

// Exports
module.exports = {
	"post_section_container": "PostSection_post_section_container__LfzV3",
	"section_title": "PostSection_section_title__5MlLJ",
	"posts_container": "PostSection_posts_container__RvbNa",
	"dotted_bg": "PostSection_dotted_bg__wcLSo",
	"post_card": "PostSection_post_card__g3afH",
	"post_card_img": "PostSection_post_card_img__DqQsT",
	"post_content_container": "PostSection_post_content_container__uaaJd",
	"post_card_title": "PostSection_post_card_title__hO_Jw",
	"post_card_excerpt": "PostSection_post_card_excerpt__8iXVx",
	"post_card_link": "PostSection_post_card_link__x1m7a",
	"posts_tab_section": "PostSection_posts_tab_section__A_G2G",
	"posts_tab_button": "PostSection_posts_tab_button__wczUr",
	"posts_tab_button_active": "PostSection_posts_tab_button_active__NCpds"
};


/***/ }),

/***/ 934:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(147);
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(17);
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);
// EXTERNAL MODULE: external "gray-matter"
var external_gray_matter_ = __webpack_require__(76);
var external_gray_matter_default = /*#__PURE__*/__webpack_require__.n(external_gray_matter_);
// EXTERNAL MODULE: ./utils/utils.js
var utils = __webpack_require__(364);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./components/Hero/Hero.module.scss
var Hero_module = __webpack_require__(998);
var Hero_module_default = /*#__PURE__*/__webpack_require__.n(Hero_module);
;// CONCATENATED MODULE: ./components/Hero/Hero.jsx




function Hero() {
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Hero_module_default()).hero_container,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: (0,utils/* classList */.s)((Hero_module_default()).h1),
                children: "SuperTokens Blog"
            })
        })
    }));
};

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
// EXTERNAL MODULE: ./components/PostSection/PostSection.module.scss
var PostSection_module = __webpack_require__(507);
var PostSection_module_default = /*#__PURE__*/__webpack_require__.n(PostSection_module);
;// CONCATENATED MODULE: ./components/PostSection/PostSection.jsx





function PostSection(props) {
    const { 0: selectedTab , 1: setSelectedTab  } = (0,external_react_.useState)("all");
    const list = (0,external_react_.useMemo)(()=>{
        if (selectedTab === "all") {
            return props.posts;
        }
        return props.posts.filter((post)=>{
            return post.frontmatter.blog_category === selectedTab;
        });
    }, [
        props.posts,
        selectedTab
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (PostSection_module_default()).post_section_container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (PostSection_module_default()).posts_tab_section,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: ()=>setSelectedTab("all")
                        ,
                        className: (0,utils/* classList */.s)((PostSection_module_default()).posts_tab_button, selectedTab === "all" ? (PostSection_module_default()).posts_tab_button_active : ""),
                        children: "All"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: ()=>setSelectedTab("programming")
                        ,
                        className: (0,utils/* classList */.s)((PostSection_module_default()).posts_tab_button, selectedTab === "programming" ? (PostSection_module_default()).posts_tab_button_active : ""),
                        children: "Programming"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: ()=>setSelectedTab("sessions")
                        ,
                        className: (0,utils/* classList */.s)((PostSection_module_default()).posts_tab_button, selectedTab === "sessions" ? (PostSection_module_default()).posts_tab_button_active : ""),
                        children: "Sessions"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (PostSection_module_default()).dotted_bg
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (PostSection_module_default()).section_title,
                        children: props.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (PostSection_module_default()).posts_container,
                        children: list.map((post, idx)=>{
                            return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (PostSection_module_default()).post_card,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (PostSection_module_default()).post_card_img,
                                        style: {
                                            backgroundImage: `url('${post.frontmatter.cover_image}')`
                                        }
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (PostSection_module_default()).post_content_container,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: (PostSection_module_default()).post_card_title,
                                                        children: post.frontmatter.title
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: (PostSection_module_default()).post_card_excerpt,
                                                        children: post.frontmatter.excerpt
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        style: {
                                                            color: "#f93"
                                                        },
                                                        children: post.frontmatter.blog_category
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: `/blog/${post.slug}`,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: (0,utils/* classList */.s)("a", (PostSection_module_default()).post_card_link),
                                                    children: "Read more"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }, idx));
                        })
                    })
                ]
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./pages/blog/index.js








function Home({ posts  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Hero, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(PostSection, {
                title: "See what's new",
                posts: posts
            })
        ]
    }));
};
async function getStaticProps() {
    // Get files from the posts dir
    const files = external_fs_default().readdirSync(external_path_default().join('posts'));
    // Get slug and frontmatter from posts
    const posts = files.map((filename)=>{
        // Create slug
        const slug = filename.replace('.md', '');
        // Get frontmatter
        const markdownWithMeta = external_fs_default().readFileSync(external_path_default().join('posts', filename), 'utf-8');
        const { data: frontmatter  } = external_gray_matter_default()(markdownWithMeta);
        return {
            slug,
            frontmatter
        };
    });
    return {
        props: {
            posts: posts.sort(utils/* sortByDate */.d)
        }
    };
}


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

/***/ 76:
/***/ ((module) => {

"use strict";
module.exports = require("gray-matter");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664], () => (__webpack_exec__(934)));
module.exports = __webpack_exports__;

})();
exports.id = 29;
exports.ids = [29];
exports.modules = {

/***/ 4048:
/***/ ((module) => {

// Exports
module.exports = {
	"DrawrerComponent": "Drawer_DrawrerComponent__z4wSH",
	"overlay": "Drawer_overlay__cfHjk",
	"dialog": "Drawer_dialog__DlG9h"
};


/***/ }),

/***/ 3992:
/***/ ((module) => {

// Exports
module.exports = {
	"ModalComponent": "Modal_ModalComponent__D_gnJ",
	"dialog": "Modal_dialog__rVBKA",
	"close": "Modal_close__ORFYC"
};


/***/ }),

/***/ 2348:
/***/ ((module) => {

// Exports
module.exports = {
	"PostComponent": "Post_PostComponent__mOfX0",
	"meta": "Post_meta__mdr_v",
	"admin": "Post_admin__m1Jyx"
};


/***/ }),

/***/ 9864:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);


function Button(props) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const hasCallback = ()=>{
        return !props.disabled && props.onClick !== null || !props.disabled && props.url;
    };
    const isUrlAbsolute = (url)=>url.indexOf("://") > 0 || url.indexOf("//") === 0
    ;
    const goToUrl = ()=>{
        if (props.url) {
            if (isUrlAbsolute(props.url)) {
                window.open(props.url, "_blank");
            } else {
                router.push(props.url);
            }
        }
    };
    const handleClick = (e)=>{
        // if passed, execute callback.
        e.currentTarget.blur();
        if (props.type !== "submit") {
            if (props.onClick) {
                props.onClick(e); // if no callback was passed, go to url.
            } else if (props.url) {
                goToUrl();
            }
            e.preventDefault();
        }
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            props.priority === "default" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: hasCallback() ? (e)=>handleClick(e)
                 : ()=>{
                },
                className: "mx-1 inline-block bg-neon border-2 border-solid border-black hover:bg-black hover:text-white text-black font-bold py-2 px-4 rounded",
                children: props.children
            }),
            props.priority === "outline" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: hasCallback() ? (e)=>handleClick(e)
                 : ()=>{
                },
                className: "mx-1 inline-block bg-transparent border-2 border-solid border-slate-800 text-black font-bold py-2 px-4 rounded",
                children: props.children
            })
        ]
    }));
};
Button.defaultProps = {
    priority: "default",
    type: "button"
};


/***/ }),

/***/ 6013:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Modal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_components_Modal_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3992);
/* harmony import */ var _styles_components_Modal_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Modal_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9864);



function Modal(props) {
    const handleClose = ()=>{
        if (props.handleClose) {
            props.handleClose();
        }
    };
    const handleConfirm = ()=>{
        if (props.handleConfirm) {
            props.handleConfirm();
        }
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_styles_components_Modal_module_scss__WEBPACK_IMPORTED_MODULE_2___default().ModalComponent) + " bg-slate-900 bg-opacity-80 flex justify-center items-center fixed top-0 right-0 bottom-0 left-0",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_components_Modal_module_scss__WEBPACK_IMPORTED_MODULE_2___default().dialog) + " bg-white p-8 rounded-md text-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                        onClick: handleClose,
                        className: (_styles_components_Modal_module_scss__WEBPACK_IMPORTED_MODULE_2___default().close) + " fa fa-times"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "p-4",
                        children: props.children
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button_component__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        onClick: handleClose,
                        priority: "outline",
                        children: "Cancel"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button_component__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        onClick: handleConfirm,
                        children: props.confirmLabel
                    })
                ]
            })
        })
    }));
};
Modal.defaultProps = {
    confirmLabel: 'Save'
};


/***/ }),

/***/ 3029:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ PostList)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(1187);
// EXTERNAL MODULE: ./styles/components/Post.module.scss
var Post_module = __webpack_require__(2348);
var Post_module_default = /*#__PURE__*/__webpack_require__.n(Post_module);
// EXTERNAL MODULE: ./components/Modal.component.tsx
var Modal_component = __webpack_require__(6013);
// EXTERNAL MODULE: ./styles/components/Drawer.module.scss
var Drawer_module = __webpack_require__(4048);
var Drawer_module_default = /*#__PURE__*/__webpack_require__.n(Drawer_module);
;// CONCATENATED MODULE: ./components/Drawer.component.tsx



function Drawer(props) {
    (0,external_react_.useEffect)(()=>{
    // Anything in here is fired on component mount.
    // document.documentElement.classList.add('drawer-open');
    // document.body.classList.add('drawer-open');
    // return () => {
    //     document.documentElement.classList.remove('drawer-open');
    //     document.body.classList.remove('drawer-open');
    // }
    });
    const handleClose = ()=>{
        if (props.handleClose) {
            props.handleClose();
        }
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (Drawer_module_default()).DrawrerComponent,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Drawer_module_default()).dialog,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex justify-end",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                onClick: handleClose,
                                className: (Drawer_module_default()).close + " absolute p-4 text-2xl fa fa-times"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "p-10",
                            children: props.children
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (Drawer_module_default()).overlay + " shadow-2xl"
                })
            ]
        })
    }));
};

// EXTERNAL MODULE: ./constants.ts
var constants = __webpack_require__(1438);
;// CONCATENATED MODULE: ./components/Post.component.tsx








function Post(props) {
    const { 0: showDeleteModal , 1: setShowDeleteModal  } = (0,external_react_.useState)(false);
    const { 0: url , 1: setUrl  } = (0,external_react_.useState)(props.url || `/posts/${props.id}`);
    const { 0: title , 1: setTitle  } = (0,external_react_.useState)(props.title || "");
    const { 0: content , 1: setContent  } = (0,external_react_.useState)(props.content || "");
    const { 0: isEditMode , 1: setIsEditMode  } = (0,external_react_.useState)(false);
    const isArticle = props.type === "Article" ? true : false;
    const isLink = !isArticle;
    const handleDelete = ()=>{
        setShowDeleteModal(!showDeleteModal);
        try {
            external_axios_default()["delete"](`${constants/* default */.Z}/posts/${props.id}`).then(()=>{
                if (props.refetch) {
                    props.refetch();
                    external_react_toastify_.toast.success("Deleted successfully", {
                        position: "bottom-right",
                        theme: "light"
                    });
                }
            });
        } catch (e) {
            external_react_toastify_.toast.error(e, {
                position: "bottom-right",
                theme: "light"
            });
        }
    };
    (0,external_react_.useEffect)(()=>{
        if (showDeleteModal) {
            setTimeout(()=>{
                setShowDeleteModal(!showDeleteModal);
            }, 10000);
        }
    }, [
        showDeleteModal
    ]);
    (0,external_react_.useEffect)(()=>{
        const id = props.id;
        try {
            external_axios_default().put(`${constants/* default */.Z}/posts/${id}/`, {
                data: {
                    title,
                    url,
                    content
                }
            }).then(()=>{
                if (props.refetchById) props.refetchById(id);
            });
        } catch (e) {
            console.log(e);
        }
        if (showDeleteModal) {
            setTimeout(()=>{
                setShowDeleteModal(!showDeleteModal);
            }, 10000);
        }
    }, [
        title,
        content,
        url
    ]);
    const getPostPreview = ()=>{
        return `url(${props.background_url})`;
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            showDeleteModal && /*#__PURE__*/ jsx_runtime_.jsx(Modal_component/* default */.Z, {
                confirmLabel: "Delete",
                handleConfirm: handleDelete,
                handleClose: ()=>setShowDeleteModal(!showDeleteModal)
                ,
                children: "Are you sure you'd like to delete this?"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Post_module_default()).PostComponent + " rounded-lg",
                style: {
                    height: "300px",
                    backgroundImage: getPostPreview(),
                    backgroundSize: "cover"
                },
                children: [
                    props.isAdmin && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Post_module_default()).admin,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                onClick: ()=>setIsEditMode(!isEditMode)
                                ,
                                className: "fas fa-pen text-white"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                onClick: ()=>setShowDeleteModal(true)
                                ,
                                className: "fa fa-trash text-white"
                            })
                        ]
                    }),
                    isArticle && isEditMode && /*#__PURE__*/ jsx_runtime_.jsx(Drawer, {
                        isOpen: true,
                        handleClose: ()=>{
                            console.log("handle close", isEditMode);
                            setIsEditMode(false);
                            console.log(isEditMode);
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: "text-3xl",
                                    children: title
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: content
                                })
                            ]
                        })
                    }),
                    isEditMode && isLink && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Post_module_default()).meta,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "formGroup",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    id: "title",
                                    type: "text",
                                    style: {
                                        width: "100%"
                                    },
                                    placeholder: props.title,
                                    value: title,
                                    onChange: (e)=>{
                                        setTitle(e.target.value);
                                    },
                                    className: "mt-2 bg-white block p-2 w-100 text-black font-medium text-sm"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "formGroup",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    id: "url",
                                    type: "text",
                                    style: {
                                        width: "100%"
                                    },
                                    placeholder: props.url,
                                    value: url,
                                    onChange: (e)=>{
                                        setUrl(e.target.value);
                                    },
                                    className: "mt-2 bg-white block p-2 w-100 text-black font-medium text-sm"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "formGroup",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    id: "content",
                                    type: "text",
                                    value: content,
                                    style: {
                                        width: "100%"
                                    },
                                    placeholder: props.content,
                                    onChange: (e)=>{
                                        setContent(e.target.value);
                                    },
                                    className: "mt-2 bg-white block p-2 w-100 text-black font-medium text-sm"
                                })
                            })
                        ]
                    }),
                    (isArticle || isLink && !isEditMode) && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Post_module_default()).meta,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            target: "_blank",
                            href: url,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                    className: "font-medium text-white text-3xl",
                                    children: [
                                        title,
                                        " "
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-sm text-white text-base",
                                    children: content.substring(0, 200)
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    }));
};
Post.defaultProps = {
    isAdmin: false,
    isEditMode: false
};

;// CONCATENATED MODULE: ./components/PostList.component.tsx





function PostList(props) {
    console.log("POST LIST", constants/* default */.Z);
    const { 0: posts , 1: setPosts  } = (0,external_react_.useState)([]);
    const refetch = ()=>{
        external_axios_default().get(`${constants/* default */.Z}/posts/?populate=*`).then((response)=>{
            setPosts(response.data.data);
        });
    };
    const refetchById = (id)=>{
        external_axios_default().get(`${constants/* default */.Z}/posts/${id}`).then((response)=>{
            console.log("from ID", response);
            // a singuar bookmark.
            const data = response.data.data;
            const bookmark = posts.find((b)=>b.id === id
            );
            if (bookmark) {
                bookmark.attributes = data.attributes;
            }
        });
    };
    (0,external_react_.useEffect)(()=>{
        external_axios_default().get(`${constants/* default */.Z}/posts/?populate=*`).then((response)=>{
            setPosts(response.data.data);
        });
    }, []);
    if (!posts) return null;
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: Boolean(posts.length > 0) && posts.map((b, i)=>{
            var ref, ref1, ref2, ref3;
            return(/*#__PURE__*/ jsx_runtime_.jsx(Post, {
                refetch: refetch,
                refetchById: refetchById,
                id: b.id,
                type: (ref = b.attributes) === null || ref === void 0 ? void 0 : (ref1 = ref.type) === null || ref1 === void 0 ? void 0 : (ref2 = ref1.data) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.attributes) === null || ref3 === void 0 ? void 0 : ref3.label,
                isAdmin: props.isAdmin,
                url: b.attributes.url,
                title: b.attributes.title,
                background_url: b.attributes.background_url,
                content: b.attributes.content
            }, i));
        })
    }));
};
PostList.defaultProps = {
    isAdmin: false
};


/***/ })

};
;
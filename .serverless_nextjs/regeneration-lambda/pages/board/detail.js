/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 52868:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sx": () => (/* reexport safe */ _TypoGraphy__WEBPACK_IMPORTED_MODULE_0__.s),
/* harmony export */   "kz": () => (/* reexport safe */ _LayoutContainer__WEBPACK_IMPORTED_MODULE_1__.k),
/* harmony export */   "h4": () => (/* reexport safe */ _Header__WEBPACK_IMPORTED_MODULE_3__.h),
/* harmony export */   "Nm": () => (/* reexport safe */ _Top5TextLoop__WEBPACK_IMPORTED_MODULE_4__.N),
/* harmony export */   "mh": () => (/* reexport safe */ _UrlInput__WEBPACK_IMPORTED_MODULE_5__.m),
/* harmony export */   "iL": () => (/* reexport safe */ _TitleHeader__WEBPACK_IMPORTED_MODULE_6__.i)
/* harmony export */ });
/* harmony import */ var _TypoGraphy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94948);
/* harmony import */ var _LayoutContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49123);
/* harmony import */ var _HelperBot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9814);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44194);
/* harmony import */ var _Top5TextLoop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32175);
/* harmony import */ var _UrlInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2);
/* harmony import */ var _TitleHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(84897);
/* harmony import */ var _MessageModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73736);
/* harmony import */ var _BoardList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(88530);
/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(13352);











/***/ }),

/***/ 13643:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Jx": () => (/* reexport safe */ _customColor__WEBPACK_IMPORTED_MODULE_0__.J),
/* harmony export */   "Xd": () => (/* reexport safe */ _settings__WEBPACK_IMPORTED_MODULE_1__.X)
/* harmony export */ });
/* harmony import */ var _customColor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99610);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58826);




/***/ }),

/***/ 38308:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ board_detail),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: ./node_modules/@emotion/styled/base/dist/emotion-styled-base.cjs.js
var emotion_styled_base_cjs = __webpack_require__(22112);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./components/common/index.ts
var common = __webpack_require__(52868);
// EXTERNAL MODULE: ./constants/index.js
var constants = __webpack_require__(13643);
// EXTERNAL MODULE: ./apis/common.js
var apis_common = __webpack_require__(13537);
;// CONCATENATED MODULE: ./apis/scrapApi.js

const scrapApi = {
  getDetail: async params => {
    return await apis_common/* default.get */.Z.get('/petitions', params);
  }
};
// EXTERNAL MODULE: ./apis/boardApi.js
var boardApi = __webpack_require__(19495);
// EXTERNAL MODULE: ./apis/commentApi.js
var commentApi = __webpack_require__(85373);
;// CONCATENATED MODULE: ./apis/memberApi.js

const memberApi = {
  addNickName: async params => {
    return await apis_common/* default.authPost */.Z.authPost('/api/v1/mypage/nickName', params);
  },
  getNickName: async params => {
    return await apis_common/* default.authGet */.Z.authGet('/nickName', params);
  },
  getInfo: async () => {
    return await apis_common/* default.authGet */.Z.authGet('/api/v1/mypage/info');
  },
  boardList: async params => {
    return await apis_common/* default.authGet */.Z.authGet('/api/v1/mypage/boardList', params);
  },
  delete: async () => {
    return await apis_common/* default.authGet */.Z.authGet('/api/v1/mypage/delete');
  }
};
// EXTERNAL MODULE: ./apis/rankApi.js
var rankApi = __webpack_require__(41581);
;// CONCATENATED MODULE: ./apis/index.js





// EXTERNAL MODULE: ./node_modules/react-icons/fa/index.esm.js
var index_esm = __webpack_require__(89583);
// EXTERNAL MODULE: ./node_modules/react-icons/ai/index.esm.js
var ai_index_esm = __webpack_require__(8193);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/app/board/detail/RecommandButton.jsx


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }







const RecommandButton = ({
  type,
  onClick
}) => {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Wrapper, {
    children: [/*#__PURE__*/jsx_runtime.jsx(ButtonWrapper, {
      onClick: onClick,
      children: type === 'like' ? /*#__PURE__*/jsx_runtime.jsx(ai_index_esm/* AiOutlineLike */.DZs, {
        size: "56px",
        color: constants/* customColor.blue */.Jx.blue
      }) : /*#__PURE__*/jsx_runtime.jsx(ai_index_esm/* AiOutlineDislike */.qBr, {
        size: "56px",
        color: constants/* customColor.blue */.Jx.blue
      })
    }), /*#__PURE__*/jsx_runtime.jsx(Gap, {}), /*#__PURE__*/jsx_runtime.jsx(common/* TypoGraphy */.sx, {
      type: "Title",
      fontWeight: "bold",
      textAlign: "center",
      color: constants/* customColor.gray */.Jx.gray,
      children: "320,100"
    })]
  });
};

const Wrapper = (0,emotion_styled_base_cjs.default)("div",  true ? {
  target: "e1jihq822"
} : 0)( true ? "" : 0);

const ButtonWrapper = (0,emotion_styled_base_cjs.default)("div",  true ? {
  target: "e1jihq821"
} : 0)("display:flex;justify-content:center;align-items:center;padding:16px;margin-left:88px;margin-right:88px;background-color:", constants/* customColor.white */.Jx.white, ";border-radius:1000px;cursor:pointer;box-shadow:0px 8px 40px rgba(0, 0, 0, 0.05);" + ( true ? "" : 0));

const Gap = (0,emotion_styled_base_cjs.default)("div",  true ? {
  target: "e1jihq820"
} : 0)( true ? {
  name: "yz1nei",
  styles: "margin-top:16px"
} : 0);
;// CONCATENATED MODULE: ./components/app/board/detail/CommentAddForm.jsx


function CommentAddForm_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }






const CommentAddForm = () => {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(CommentAddForm_Wrapper, {
    children: [/*#__PURE__*/jsx_runtime.jsx(NickNameForm, {
      children: /*#__PURE__*/jsx_runtime.jsx(common/* TypoGraphy */.sx, {
        type: "body2",
        fontWeight: "bold",
        children: "\uB3D9\uCCA0"
      })
    }), /*#__PURE__*/jsx_runtime.jsx(InputComment, {
      placeholder: "\uBB34\uBD84\uBCC4\uD55C \uC545\uD50C\uC740 \uC790\uC81C\uD574\uC8FC\uC138\uC694"
    }), /*#__PURE__*/jsx_runtime.jsx(Divider, {}), /*#__PURE__*/jsx_runtime.jsx(AddButton, {
      children: /*#__PURE__*/jsx_runtime.jsx(common/* TypoGraphy */.sx, {
        type: "body1",
        color: constants/* customColor.white */.Jx.white,
        children: "\uB4F1\uB85D"
      })
    })]
  });
};

const CommentAddForm_Wrapper = (0,emotion_styled_base_cjs.default)("div",  true ? {
  target: "e13t77lf4"
} : 0)("display:flex;flex-direction:column;background-color:", constants/* customColor.white */.Jx.white, ";border:1px solid ", constants/* customColor.gray */.Jx.gray, ";" + ( true ? "" : 0));

const NickNameForm = (0,emotion_styled_base_cjs.default)("div",  true ? {
  target: "e13t77lf3"
} : 0)( true ? {
  name: "1pkis4n",
  styles: "padding-left:2px;margin-top:16px;margin-bottom:16px;margin-left:16px;margin-right:16px"
} : 0);

const InputComment = (0,emotion_styled_base_cjs.default)("textarea",  true ? {
  target: "e13t77lf2"
} : 0)( true ? {
  name: "bv09ee",
  styles: "width:800px;height:56px;outline:none;border:none;resize:none;font-size:14px;margin-left:16px;margin-right:16px"
} : 0);

const Divider = (0,emotion_styled_base_cjs.default)("div",  true ? {
  target: "e13t77lf1"
} : 0)("background-color:", constants/* customColor.grayBg */.Jx.grayBg, ";height:1px;margin-top:16px;" + ( true ? "" : 0));

const AddButton = (0,emotion_styled_base_cjs.default)("div",  true ? {
  target: "e13t77lf0"
} : 0)("background-color:", constants/* customColor.deepBlue */.Jx.deepBlue, ";cursor:pointer;margin-left:auto;padding-top:16px;padding-bottom:16px;padding-left:32px;padding-right:32px;" + ( true ? "" : 0));
// EXTERNAL MODULE: ./node_modules/react-icons/bs/index.esm.js
var bs_index_esm = __webpack_require__(63750);
// EXTERNAL MODULE: ./node_modules/react-icons/ri/index.esm.js
var ri_index_esm = __webpack_require__(79352);
;// CONCATENATED MODULE: ./components/app/board/detail/ApplyItem.jsx


function ApplyItem_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }








const ApplyItem = () => {
  const {
    0: AddApplyVisible,
    1: setAddApplyVisible
  } = (0,react.useState)(false);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(ApplyItem_Wrapper, {
    children: [/*#__PURE__*/jsx_runtime.jsx(Side, {
      children: /*#__PURE__*/jsx_runtime.jsx(bs_index_esm/* BsArrowReturnRight */.hPW, {
        size: "16",
        color: constants/* customColor.gray */.Jx.gray,
        style: {
          marginRight: 4
        }
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(ItemContainer, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Information, {
        children: [/*#__PURE__*/jsx_runtime.jsx(common/* TypoGraphy */.sx, {
          type: "body1",
          color: constants/* customColor.black */.Jx.black,
          fontWeight: "bold",
          children: "\uB3D9\uCCA0"
        }), /*#__PURE__*/jsx_runtime.jsx(common/* TypoGraphy */.sx, {
          type: "body1",
          color: constants/* customColor.gray */.Jx.gray,
          children: "2019-01-11"
        })]
      }), /*#__PURE__*/jsx_runtime.jsx(Content, {
        children: /*#__PURE__*/jsx_runtime.jsx(common/* TypoGraphy */.sx, {
          type: "body2",
          color: constants/* customColor.black */.Jx.black,
          children: "\uB0B4\uC6A9"
        })
      }), /*#__PURE__*/jsx_runtime.jsx(ButtonForm, {
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Button, {
          onClick: () => setAddApplyVisible(cur => !cur),
          children: [/*#__PURE__*/jsx_runtime.jsx(bs_index_esm/* BsArrowReturnRight */.hPW, {
            size: "16",
            color: constants/* customColor.gray */.Jx.gray,
            style: {
              marginRight: 4
            }
          }), /*#__PURE__*/jsx_runtime.jsx(common/* TypoGraphy */.sx, {
            type: "body2",
            color: constants/* customColor.gray */.Jx.gray,
            children: "\uB2F5\uAE00"
          })]
        })
      }), AddApplyVisible && /*#__PURE__*/jsx_runtime.jsx(AddApplyWrapper, {
        children: /*#__PURE__*/jsx_runtime.jsx(CommentAddForm, {})
      })]
    })]
  });
};

const ApplyItem_Wrapper = (0,emotion_styled_base_cjs.default)("div",  true ? {
  target: "e8t2usl7"
} : 0)("background-color:", constants/* customColor.grayBg */.Jx.grayBg, ";display:flex;padding-top:16px;padding-bottom:16px;padding-right:16px;padding-left:32px;border-bottom:1px solid ", constants/* customColor.grayBg */.Jx.grayBg, ";margin-bottom:16px;" + ( true ? "" : 0));

const Side = (0,emotion_styled_base_cjs.default)("div",  true ? {
  target: "e8t2usl6"
} : 0)( true ? "" : 0);

const ItemContainer = (0,emotion_styled_base_cjs.default)("div",  true ? {
  target: "e8t2usl5"
} : 0)( true ? {
  name: "1d3w5wq",
  styles: "width:100%"
} : 0);

const Information = (0,emotion_styled_base_cjs.default)("div",  true ? {
  target: "e8t2usl4"
} : 0)( true ? {
  name: "q6i1bj",
  styles: "display:flex;justify-content:space-between;margin-bottom:8px"
} : 0);

const Content = (0,emotion_styled_base_cjs.default)("div",  true ? {
  target: "e8t2usl3"
} : 0)( true ? {
  name: "14r8e2u",
  styles: "margin-bottom:8px;min-height:32px"
} : 0);

const ButtonForm = (0,emotion_styled_base_cjs.default)("div",  true ? {
  target: "e8t2usl2"
} : 0)( true ? {
  name: "zjik7",
  styles: "display:flex"
} : 0);

const Button = (0,emotion_styled_base_cjs.default)("div",  true ? {
  target: "e8t2usl1"
} : 0)( true ? {
  name: "1lfzvbh",
  styles: "display:flex;cursor:pointer;margin-right:16px"
} : 0);

const AddApplyWrapper = (0,emotion_styled_base_cjs.default)("div",  true ? {
  target: "e8t2usl0"
} : 0)( true ? {
  name: "10rtstj",
  styles: "padding:16px"
} : 0);
;// CONCATENATED MODULE: ./components/app/board/detail/CommentItem.jsx


function CommentItem_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }










const CommentItem = () => {
  const {
    0: ApplyVisible,
    1: setApplyVisible
  } = (0,react.useState)(false);
  const {
    0: AddApplyVisible,
    1: setAddApplyVisible
  } = (0,react.useState)(false);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(CommentItem_Wrapper, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(ItemWrapper, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(CommentItem_Information, {
        children: [/*#__PURE__*/jsx_runtime.jsx(common/* TypoGraphy */.sx, {
          type: "body1",
          color: constants/* customColor.black */.Jx.black,
          fontWeight: "bold",
          children: "\uB3D9\uCCA0"
        }), /*#__PURE__*/jsx_runtime.jsx(common/* TypoGraphy */.sx, {
          type: "body1",
          color: constants/* customColor.gray */.Jx.gray,
          children: "2019-01-11"
        })]
      }), /*#__PURE__*/jsx_runtime.jsx(CommentItem_Content, {
        children: /*#__PURE__*/jsx_runtime.jsx(common/* TypoGraphy */.sx, {
          type: "body2",
          color: constants/* customColor.black */.Jx.black,
          children: "\uB0B4\uC6A9"
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(CommentItem_ButtonForm, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(CommentItem_Button, {
          onClick: () => setAddApplyVisible(cur => !cur),
          children: [/*#__PURE__*/jsx_runtime.jsx(bs_index_esm/* BsArrowReturnRight */.hPW, {
            size: "16",
            color: constants/* customColor.gray */.Jx.gray,
            style: {
              marginRight: 4
            }
          }), /*#__PURE__*/jsx_runtime.jsx(common/* TypoGraphy */.sx, {
            type: "body2",
            color: constants/* customColor.gray */.Jx.gray,
            children: "\uB2F5\uAE00"
          })]
        }), /*#__PURE__*/jsx_runtime.jsx(CommentItem_Button, {
          onClick: () => setApplyVisible(cur => !cur),
          children: ApplyVisible ? /*#__PURE__*/(0,jsx_runtime.jsxs)(ApplyViewWrapper, {
            children: [/*#__PURE__*/jsx_runtime.jsx(ri_index_esm/* RiArrowUpSFill */.Tvk, {
              size: "16",
              color: constants/* customColor.blue */.Jx.blue,
              style: {
                marginRight: 4
              }
            }), /*#__PURE__*/jsx_runtime.jsx(common/* TypoGraphy */.sx, {
              type: "body2",
              color: constants/* customColor.blue */.Jx.blue,
              children: "\uB2F5\uAE00 32\uAC1C \uC811\uAE30"
            })]
          }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(ApplyViewWrapper, {
            children: [/*#__PURE__*/jsx_runtime.jsx(ri_index_esm/* RiArrowDownSFill */.ebp, {
              size: "16",
              color: constants/* customColor.blue */.Jx.blue,
              style: {
                marginRight: 4
              }
            }), /*#__PURE__*/jsx_runtime.jsx(common/* TypoGraphy */.sx, {
              type: "body2",
              color: constants/* customColor.blue */.Jx.blue,
              children: "\uB2F5\uAE00 32\uAC1C \uBCF4\uAE30"
            })]
          })
        })]
      })]
    }), AddApplyVisible && /*#__PURE__*/jsx_runtime.jsx(CommentItem_AddApplyWrapper, {
      children: /*#__PURE__*/jsx_runtime.jsx(CommentAddForm, {})
    }), ApplyVisible && /*#__PURE__*/(0,jsx_runtime.jsxs)(ApplyWrapper, {
      children: [/*#__PURE__*/jsx_runtime.jsx(ApplyItem, {}), /*#__PURE__*/jsx_runtime.jsx(ApplyItem, {}), /*#__PURE__*/jsx_runtime.jsx(ApplyItem, {}), /*#__PURE__*/jsx_runtime.jsx(ApplyItem, {}), /*#__PURE__*/jsx_runtime.jsx(ApplyItem, {}), /*#__PURE__*/jsx_runtime.jsx(MoreApplyButton, {
        children: /*#__PURE__*/jsx_runtime.jsx(common/* TypoGraphy */.sx, {
          color: constants/* customColor.gray */.Jx.gray,
          children: "\uB2F5\uAE00 \uB354\uBCF4\uAE30"
        })
      })]
    })]
  });
};

const CommentItem_Wrapper = (0,emotion_styled_base_cjs.default)("div",  true ? {
  target: "e65iiu49"
} : 0)( true ? "" : 0);

const ItemWrapper = (0,emotion_styled_base_cjs.default)("div",  true ? {
  target: "e65iiu48"
} : 0)("padding:16px;border-bottom:1px solid ", constants/* customColor.grayBg */.Jx.grayBg, ";margin-bottom:16px;" + ( true ? "" : 0));

const CommentItem_Information = (0,emotion_styled_base_cjs.default)("div",  true ? {
  target: "e65iiu47"
} : 0)( true ? {
  name: "q6i1bj",
  styles: "display:flex;justify-content:space-between;margin-bottom:8px"
} : 0);

const CommentItem_Content = (0,emotion_styled_base_cjs.default)("div",  true ? {
  target: "e65iiu46"
} : 0)( true ? {
  name: "15do9w9",
  styles: "margin-bottom:8px;min-height:56px"
} : 0);

const CommentItem_ButtonForm = (0,emotion_styled_base_cjs.default)("div",  true ? {
  target: "e65iiu45"
} : 0)( true ? {
  name: "zjik7",
  styles: "display:flex"
} : 0);

const CommentItem_Button = (0,emotion_styled_base_cjs.default)("div",  true ? {
  target: "e65iiu44"
} : 0)( true ? {
  name: "1lfzvbh",
  styles: "display:flex;cursor:pointer;margin-right:16px"
} : 0);

const ApplyWrapper = (0,emotion_styled_base_cjs.default)("div",  true ? {
  target: "e65iiu43"
} : 0)( true ? "" : 0);

const MoreApplyButton = (0,emotion_styled_base_cjs.default)("div",  true ? {
  target: "e65iiu42"
} : 0)("background-color:", constants/* customColor.grayBg */.Jx.grayBg, ";border:1px solid ", constants/* customColor.gray */.Jx.gray, ";display:flex;justify-content:center;align-items:center;cursor:pointer;padding:16px;margin-bottom:16px;" + ( true ? "" : 0));

const CommentItem_AddApplyWrapper = (0,emotion_styled_base_cjs.default)("div",  true ? {
  target: "e65iiu41"
} : 0)( true ? {
  name: "10rtstj",
  styles: "padding:16px"
} : 0);

const ApplyViewWrapper = (0,emotion_styled_base_cjs.default)("div",  true ? {
  target: "e65iiu40"
} : 0)( true ? {
  name: "zjik7",
  styles: "display:flex"
} : 0);
;// CONCATENATED MODULE: ./components/app/board/detail/CommnetList.jsx







const CommnetList = () => {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(CommnetList_Wrapper, {
    children: [/*#__PURE__*/jsx_runtime.jsx(CommentItem, {}), /*#__PURE__*/jsx_runtime.jsx(MoreCommentButton, {
      children: /*#__PURE__*/jsx_runtime.jsx(common/* TypoGraphy */.sx, {
        color: constants/* customColor.white */.Jx.white,
        children: "\uB313\uAE00 \uB354\uBCF4\uAE30"
      })
    })]
  });
};

const CommnetList_Wrapper = (0,emotion_styled_base_cjs.default)("div",  true ? {
  target: "e6rwgee1"
} : 0)( true ? "" : 0);

const MoreCommentButton = (0,emotion_styled_base_cjs.default)("div",  true ? {
  target: "e6rwgee0"
} : 0)("background-color:", constants/* customColor.deepBlue */.Jx.deepBlue, ";display:flex;justify-content:center;align-items:center;cursor:pointer;padding:16px;" + ( true ? "" : 0));
;// CONCATENATED MODULE: ./components/app/board/detail/index.js
// 묶어주는 영역





;// CONCATENATED MODULE: ./pages/board/detail.jsx


function detail_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }










const detail = ({
  detailInfo
}) => {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(common/* LayoutContainer */.kz, {
    children: [/*#__PURE__*/jsx_runtime.jsx(common/* Header */.h4, {}), /*#__PURE__*/jsx_runtime.jsx(common/* TitleHeader */.iL, {
      title: '글쓴이 제목',
      top5Visible: false
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Container, {
      children: [/*#__PURE__*/jsx_runtime.jsx(PetitionTitle, {
        children: /*#__PURE__*/jsx_runtime.jsx(common/* TypoGraphy */.sx, {
          type: "Head",
          color: constants/* customColor.deepBlue */.Jx.deepBlue,
          textAlign: "center",
          children: detailInfo.title
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(StatusWrapper, {
        children: [/*#__PURE__*/jsx_runtime.jsx(PetitionDivider, {}), /*#__PURE__*/jsx_runtime.jsx(common/* TypoGraphy */.sx, {
          type: "h1",
          color: constants/* customColor.skyBlue */.Jx.skyBlue,
          textAlign: "center",
          children: detailInfo.status
        }), /*#__PURE__*/jsx_runtime.jsx(PetitionDivider, {})]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(InformationForm, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(detail_Information, {
          children: [/*#__PURE__*/jsx_runtime.jsx(common/* TypoGraphy */.sx, {
            type: "h3",
            color: constants/* customColor.black */.Jx.black,
            fontWeight: "bold",
            children: "\uC791\uC131\uC790"
          }), /*#__PURE__*/jsx_runtime.jsx(detail_Gap, {}), /*#__PURE__*/jsx_runtime.jsx(common/* TypoGraphy */.sx, {
            type: "h3",
            color: constants/* customColor.black */.Jx.black,
            children: "\uB124\uAE00\uC790\uC784"
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(detail_Information, {
          children: [/*#__PURE__*/jsx_runtime.jsx(common/* TypoGraphy */.sx, {
            type: "h3",
            color: constants/* customColor.black */.Jx.black,
            fontWeight: "bold",
            children: "\uC870\uD68C\uC218"
          }), /*#__PURE__*/jsx_runtime.jsx(detail_Gap, {}), /*#__PURE__*/jsx_runtime.jsx(common/* TypoGraphy */.sx, {
            type: "h3",
            color: constants/* customColor.black */.Jx.black,
            children: "100,000"
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(detail_Information, {
          children: [/*#__PURE__*/jsx_runtime.jsx(common/* TypoGraphy */.sx, {
            type: "h3",
            color: constants/* customColor.black */.Jx.black,
            fontWeight: "bold",
            children: "\uAC8C\uC2DC\uAE00 \uB4F1\uB85D"
          }), /*#__PURE__*/jsx_runtime.jsx(detail_Gap, {}), /*#__PURE__*/jsx_runtime.jsx(common/* TypoGraphy */.sx, {
            type: "h3",
            color: constants/* customColor.black */.Jx.black,
            children: "2021-09-11"
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(detail_Information, {
          children: [/*#__PURE__*/jsx_runtime.jsx(common/* TypoGraphy */.sx, {
            type: "h3",
            color: constants/* customColor.black */.Jx.black,
            fontWeight: "bold",
            children: "\uCCAD\uC6D0 \uB4F1\uB85D"
          }), /*#__PURE__*/jsx_runtime.jsx(detail_Gap, {}), /*#__PURE__*/jsx_runtime.jsx(common/* TypoGraphy */.sx, {
            type: "h3",
            color: constants/* customColor.black */.Jx.black,
            children: "2021-09-11"
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(UserContent, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(detail_NickNameForm, {
          children: [/*#__PURE__*/jsx_runtime.jsx(index_esm/* FaUserEdit */.dfI, {
            size: "24px",
            colo: constants/* customColor.black */.Jx.black,
            style: {
              marginRight: 8
            }
          }), /*#__PURE__*/jsx_runtime.jsx(common/* TypoGraphy */.sx, {
            type: "h4",
            color: constants/* customColor.black */.Jx.black,
            children: "\uC791\uC131\uC790 \uC758\uACAC"
          })]
        }), /*#__PURE__*/jsx_runtime.jsx(common/* TypoGraphy */.sx, {
          type: "body1",
          color: constants/* customColor.black */.Jx.black,
          fontWeight: "300",
          children: "\uC774\uAC74 \uB2E8\uC9C0 \uC758\uACAC\uC77C \uBFD0\uC774\uB2E4"
        })]
      }), /*#__PURE__*/jsx_runtime.jsx(PepitionContent, {
        children: /*#__PURE__*/jsx_runtime.jsx(common/* TypoGraphy */.sx, {
          type: "h4",
          color: constants/* customColor.black */.Jx.black,
          fontHeight: "1.5",
          children: detailInfo.content.split('\n').map((line, index) => /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
            children: [line, /*#__PURE__*/jsx_runtime.jsx("br", {})]
          }, index.toString()))
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(RecommandWrapper, {
        children: [/*#__PURE__*/jsx_runtime.jsx(RecommandButton, {
          type: "like"
        }), /*#__PURE__*/jsx_runtime.jsx(RecommandButton, {
          type: "unlike"
        })]
      }), /*#__PURE__*/jsx_runtime.jsx(CommentInputForm, {
        children: /*#__PURE__*/jsx_runtime.jsx(CommentAddForm, {})
      }), /*#__PURE__*/jsx_runtime.jsx(CommnetList, {})]
    })]
  });
};

async function getServerSideProps(context) {
  const {
    data: detailInfo
  } = await scrapApi.getDetail({
    id: '60083'
  });
  return {
    props: {
      detailInfo
    }
  };
}

const Container = (0,emotion_styled_base_cjs.default)("div",  true ? {
  target: "e1bmqzgu13"
} : 0)("display:flex;flex-direction:column;width:1178px;min-height:100vh;margin-left:auto;margin-right:auto;margin-top:32px;border:1px solid ", constants/* customColor.grayBg */.Jx.grayBg, ";border-radius:4px;padding:16px;" + ( true ? "" : 0));

const IntroHeader = (0,emotion_styled_base_cjs.default)("div",  true ? {
  target: "e1bmqzgu12"
} : 0)("background-color:", constants/* customColor.deepBlue */.Jx.deepBlue, ";width:100vw;height:480px;" + ( true ? "" : 0));

const AuthorTitle = (0,emotion_styled_base_cjs.default)("div",  true ? {
  target: "e1bmqzgu11"
} : 0)( true ? {
  name: "3hgi0y",
  styles: "margin-top:32px"
} : 0);

const StatusWrapper = (0,emotion_styled_base_cjs.default)("div",  true ? {
  target: "e1bmqzgu10"
} : 0)( true ? {
  name: "wszoq7",
  styles: "display:flex;justify-content:center;align-items:center;margin-top:32px"
} : 0);

const PetitionTitle = (0,emotion_styled_base_cjs.default)("div",  true ? {
  target: "e1bmqzgu9"
} : 0)( true ? {
  name: "3hgi0y",
  styles: "margin-top:32px"
} : 0);

const PetitionDivider = (0,emotion_styled_base_cjs.default)("div",  true ? {
  target: "e1bmqzgu8"
} : 0)("width:64px;height:1px;margin-left:8px;margin-right:8px;background-color:", constants/* customColor.grayBg */.Jx.grayBg, ";" + ( true ? "" : 0));

const InformationForm = (0,emotion_styled_base_cjs.default)("div",  true ? {
  target: "e1bmqzgu7"
} : 0)("background-color:", constants/* customColor.grayBg */.Jx.grayBg, ";border-radius:4px;display:flex;justify-content:center;gap:0px 80px;margin-top:32px;margin-left:16px;margin-right:16px;padding-left:16px;padding-right:16px;padding-top:32px;padding-bottom:32px;" + ( true ? "" : 0));

const detail_Information = (0,emotion_styled_base_cjs.default)("div",  true ? {
  target: "e1bmqzgu6"
} : 0)( true ? {
  name: "zjik7",
  styles: "display:flex"
} : 0);

const UserContent = (0,emotion_styled_base_cjs.default)("div",  true ? {
  target: "e1bmqzgu5"
} : 0)("background-color:", constants/* customColor.grayBg */.Jx.grayBg, ";border-radius:4px;min-height:128px;margin-top:32px;margin-left:16px;margin-right:16px;padding:16px;" + ( true ? "" : 0));

const PepitionContent = (0,emotion_styled_base_cjs.default)("div",  true ? {
  target: "e1bmqzgu4"
} : 0)( true ? {
  name: "dh9t2k",
  styles: "margin-top:16px;padding:16px"
} : 0);

const RecommandWrapper = (0,emotion_styled_base_cjs.default)("div",  true ? {
  target: "e1bmqzgu3"
} : 0)( true ? {
  name: "yjfaez",
  styles: "display:flex;margin-top:32px;justify-content:center;align-items:center;height:280px"
} : 0);

const CommentInputForm = (0,emotion_styled_base_cjs.default)("div",  true ? {
  target: "e1bmqzgu2"
} : 0)( true ? {
  name: "bjk51n",
  styles: "margin-top:32px;margin-bottom:32px"
} : 0);

const detail_NickNameForm = (0,emotion_styled_base_cjs.default)("div",  true ? {
  target: "e1bmqzgu1"
} : 0)( true ? {
  name: "v1u9oh",
  styles: "display:flex;align-items:center;margin-bottom:16px"
} : 0);

const detail_Gap = (0,emotion_styled_base_cjs.default)("div",  true ? {
  target: "e1bmqzgu0"
} : 0)( true ? {
  name: "1oaeivz",
  styles: "margin-right:8px"
} : 0);

/* harmony default export */ const board_detail = (detail);

/***/ }),

/***/ 67378:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Nv": () => (/* reexport safe */ _tokenHelper__WEBPACK_IMPORTED_MODULE_0__.N)
/* harmony export */ });
/* harmony import */ var _tokenHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3388);




/***/ }),

/***/ 76537:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "unstable_getStaticParams": () => (/* binding */ unstable_getStaticParams),
/* harmony export */   "unstable_getStaticProps": () => (/* binding */ unstable_getStaticProps),
/* harmony export */   "unstable_getStaticPaths": () => (/* binding */ unstable_getStaticPaths),
/* harmony export */   "unstable_getServerProps": () => (/* binding */ unstable_getServerProps),
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "_app": () => (/* binding */ _app),
/* harmony export */   "renderReqToHTML": () => (/* binding */ renderReqToHTML),
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70607);
/* harmony import */ var next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59450);
/* harmony import */ var private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97020);
/* harmony import */ var private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73978);
/* harmony import */ var next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99436);

      
      
      
      

      
      const { processEnv } = __webpack_require__(72333)
      processEnv([])
    
      
      const runtimeConfig = {}
      ;

      const documentModule = __webpack_require__(88881)

      const appMod = __webpack_require__(71476)
      let App = appMod.default || appMod.then && appMod.then(mod => mod.default);

      const compMod = __webpack_require__(38308)

      const Component = compMod.default || compMod.then && compMod.then(mod => mod.default)
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Component);
      const getStaticProps = compMod['getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['getStaticProp' + 's'])
      const getStaticPaths = compMod['getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['getStaticPath' + 's'])
      const getServerSideProps = compMod['getServerSideProp' + 's'] || compMod.then && compMod.then(mod => mod['getServerSideProp' + 's'])

      // kept for detecting legacy exports
      const unstable_getStaticParams = compMod['unstable_getStaticParam' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticParam' + 's'])
      const unstable_getStaticProps = compMod['unstable_getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticProp' + 's'])
      const unstable_getStaticPaths = compMod['unstable_getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticPath' + 's'])
      const unstable_getServerProps = compMod['unstable_getServerProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getServerProp' + 's'])

      let config = compMod['confi' + 'g'] || (compMod.then && compMod.then(mod => mod['confi' + 'g'])) || {}
      const _app = App

      const combinedRewrites = Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg)
        ? private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg
        : []

      if (!Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg)) {
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.beforeFiles */ .Dg.beforeFiles)
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.afterFiles */ .Dg.afterFiles)
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.fallback */ .Dg.fallback)
      }

      const { renderReqToHTML, render } = (0,next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__/* .getPageHandler */ .u)({
        pageModule: compMod,
        pageComponent: Component,
        pageConfig: config,
        appModule: App,
        documentModule: documentModule,
        errorModule: __webpack_require__(3359),
        notFoundModule: undefined,
        pageGetStaticProps: getStaticProps,
        pageGetStaticPaths: getStaticPaths,
        pageGetServerSideProps: getServerSideProps,

        assetPrefix: "",
        canonicalBase: "",
        generateEtags: true,
        poweredByHeader: true,

        runtimeConfig,
        buildManifest: private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__,
        reactLoadableManifest: private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__,

        rewrites: combinedRewrites,
        i18n: undefined,
        page: "/board/detail",
        buildId: "pKsWvwoMbMr6NKknFZuDP",
        escapedBuildId: "pKsWvwoMbMr6NKknFZuDP",
        basePath: "",
        pageIsDynamic: false,
        encodedPreviewProps: {previewModeId:"f410c0e9b5a7a3a3b65a53148186605d",previewModeSigningKey:"602a12b3d38d85ae2caf1c3934487152177c74ed82444f61cb673cd00884e8f9",previewModeEncryptionKey:"ff23bc12e13f9de0486d20ae2eab16bc6e57b4a7f4bbe6eb6e002e0c8e086cce"}
      })
      
    

/***/ }),

/***/ 42357:
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ 64293:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 45532:
/***/ ((module) => {

module.exports = require("critters");

/***/ }),

/***/ 76417:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 28614:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 35747:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 98605:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 57211:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 33700:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@ampproject/toolbox-optimizer");

/***/ }),

/***/ 12087:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 85622:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 71191:
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ 92413:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 24304:
/***/ ((module) => {

module.exports = require("string_decoder");

/***/ }),

/***/ 33867:
/***/ ((module) => {

module.exports = require("tty");

/***/ }),

/***/ 78835:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 31669:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 78761:
/***/ ((module) => {

module.exports = require("zlib");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = () => {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [642,639,426,478,697,760,614,669,686,429,30,753,269,296], () => (__webpack_require__(76537)))
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	                // Font manifest declaration
/******/ 	                __webpack_require__.__NEXT_FONT_MANIFEST__ = [];
/******/ 	            // Enable feature:
/******/ 	            process.env.__NEXT_OPTIMIZE_FONTS = JSON.stringify(true);
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			395: 1
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.O.require = (chunkId) => (installedChunks[chunkId]);
/******/ 		
/******/ 		var installChunk = (chunk) => {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 			__webpack_require__.O();
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("../../chunks/" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	(() => {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			__webpack_require__.e(642);
/******/ 			__webpack_require__.e(639);
/******/ 			__webpack_require__.e(426);
/******/ 			__webpack_require__.e(478);
/******/ 			__webpack_require__.e(697);
/******/ 			__webpack_require__.e(760);
/******/ 			__webpack_require__.e(614);
/******/ 			__webpack_require__.e(669);
/******/ 			__webpack_require__.e(686);
/******/ 			__webpack_require__.e(429);
/******/ 			__webpack_require__.e(30);
/******/ 			__webpack_require__.e(753);
/******/ 			__webpack_require__.e(269);
/******/ 			__webpack_require__.e(296);
/******/ 			return next();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;
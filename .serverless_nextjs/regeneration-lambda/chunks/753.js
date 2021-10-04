"use strict";
exports.id = 753;
exports.ids = [753];
exports.modules = {

/***/ 88530:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export BoardList */
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22112);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var components_common_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52868);
/* harmony import */ var constants_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13643);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85893);


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }







const BoardList = ({
  listData
}) => {
  const postPerPage = 10;
  const {
    0: allPage
  } = useState(Math.ceil(listData.length / postPerPage));
  const {
    0: currentPost,
    1: setCurrentPost
  } = useState(listData.slice(0, postPerPage));

  const handleChange = (e, value) => {
    setCurrentPost(listData.slice(value * postPerPage - postPerPage, value * postPerPage));
  };

  return /*#__PURE__*/_jsxs(Container, {
    children: [/*#__PURE__*/_jsxs(ListWrapper, {
      children: [/*#__PURE__*/_jsxs(ListNav, {
        children: [/*#__PURE__*/_jsx(NavCategory, {
          children: /*#__PURE__*/_jsx(TypoGraphy, {
            type: "body1",
            color: customColor.black,
            textAlign: "center",
            fontWeight: "bold",
            children: "\uCE74\uD14C\uACE0\uB9AC"
          })
        }), /*#__PURE__*/_jsx(NavTitle, {
          children: /*#__PURE__*/_jsx(TypoGraphy, {
            type: "body1",
            color: customColor.black,
            textAlign: "center",
            fontWeight: "bold",
            children: "\uC81C\uBAA9"
          })
        }), /*#__PURE__*/_jsx(NavSubNumber, {
          children: /*#__PURE__*/_jsx(TypoGraphy, {
            type: "body1",
            color: customColor.black,
            textAlign: "center",
            fontWeight: "bold",
            children: "\uC870\uD68C\uC218"
          })
        }), /*#__PURE__*/_jsx(NavDay, {
          children: /*#__PURE__*/_jsx(TypoGraphy, {
            type: "body1",
            color: customColor.black,
            textAlign: "center",
            fontWeight: "bold",
            children: "\uB4F1\uB85D\uC77C"
          })
        }), /*#__PURE__*/_jsx(NavGraph, {
          children: /*#__PURE__*/_jsx(TypoGraphy, {
            type: "body1",
            color: customColor.black,
            textAlign: "center",
            fontWeight: "bold",
            children: "\uCC2C\uC131\uB960"
          })
        })]
      }), /*#__PURE__*/_jsx(List, {
        children: currentPost.map(({
          id,
          category,
          title,
          subTitle,
          subNumber,
          day,
          agreePer,
          disagreePer,
          comment
        }) => /*#__PURE__*/_jsx(ListItem, {
          category: category,
          title: title,
          subTitle: subTitle,
          subNumber: subNumber,
          day: day,
          agreePer: agreePer,
          disagreePer: disagreePer,
          comment: comment
        }, id))
      })]
    }), /*#__PURE__*/_jsx(PaginationWrapper, {
      children: /*#__PURE__*/_jsx(Pagination, {
        count: allPage,
        onChange: handleChange,
        shape: "rounded",
        color: "primary"
      })
    })]
  });
};

const Container = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.default)("div",  true ? {
  target: "epcak029"
} : 0)( true ? "" : 0);

const ListWrapper = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.default)("div",  true ? {
  target: "epcak028"
} : 0)("margin-top:20px;margin-bottom:20px;border-top:6px solid ", constants_index__WEBPACK_IMPORTED_MODULE_3__/* .customColor.blue */ .Jx.blue, ";border-bottom:6px solid ", constants_index__WEBPACK_IMPORTED_MODULE_3__/* .customColor.blue */ .Jx.blue, ";" + ( true ? "" : 0));

const ListNav = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.default)("div",  true ? {
  target: "epcak027"
} : 0)("display:flex;justify-content:center;align-items:center;border-bottom:2px solid ", constants_index__WEBPACK_IMPORTED_MODULE_3__/* .customColor.black */ .Jx.black, ";height:50px;" + ( true ? "" : 0));

const NavCategory = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.default)("div",  true ? {
  target: "epcak026"
} : 0)( true ? {
  name: "2wo5c1",
  styles: "width:13%"
} : 0);

const NavTitle = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.default)("div",  true ? {
  target: "epcak025"
} : 0)( true ? {
  name: "mtkqcq",
  styles: "width:61%"
} : 0);

const NavSubNumber = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.default)("div",  true ? {
  target: "epcak024"
} : 0)( true ? {
  name: "s75os9",
  styles: "width:8%"
} : 0);

const NavDay = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.default)("div",  true ? {
  target: "epcak023"
} : 0)( true ? {
  name: "s75os9",
  styles: "width:8%"
} : 0);

const NavGraph = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.default)("div",  true ? {
  target: "epcak022"
} : 0)( true ? {
  name: "1p82uuh",
  styles: "width:10%"
} : 0);

const List = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.default)("div",  true ? {
  target: "epcak021"
} : 0)( true ? "" : 0);

const PaginationWrapper = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.default)("div",  true ? {
  target: "epcak020"
} : 0)( true ? {
  name: "b2zg45",
  styles: "display:flex;justify-content:center;align-items:center;margin:20px auto"
} : 0);

/***/ }),

/***/ 13352:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export ListItem */
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22112);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var components_common_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52868);
/* harmony import */ var constants_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13643);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85893);


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }







const ListItem = ({
  category,
  title,
  subTitle,
  subNumber,
  day,
  agreePer,
  disagreePer,
  comment
}) => {
  return /*#__PURE__*/_jsxs(Wrapper, {
    children: [/*#__PURE__*/_jsx(Category, {
      children: /*#__PURE__*/_jsx(TypoGraphy, {
        type: "body1",
        color: customColor.skyBlue,
        textAlign: "center",
        fontWeight: "bold",
        children: category
      })
    }), /*#__PURE__*/_jsxs(TitleWrapper, {
      children: [/*#__PURE__*/_jsxs(MainTitle, {
        children: [/*#__PURE__*/_jsx(TypoGraphy, {
          type: "body1",
          color: customColor.black,
          textAlign: "left",
          children: title
        }), /*#__PURE__*/_jsx(CommentWrapper, {
          children: /*#__PURE__*/_jsxs(TypoGraphy, {
            type: "body1",
            color: customColor.skyBlue,
            textAlign: "center",
            children: ["\xA0(", comment, ")"]
          })
        })]
      }), /*#__PURE__*/_jsxs(SubTitle, {
        children: [/*#__PURE__*/_jsx(MdSubdirectoryArrowRight, {}), /*#__PURE__*/_jsx(TypoGraphy, {
          type: "body2",
          color: customColor.gray,
          textAlign: "left",
          children: subTitle
        })]
      })]
    }), /*#__PURE__*/_jsx(SubNumber, {
      children: /*#__PURE__*/_jsx(TypoGraphy, {
        type: "body1",
        color: customColor.skyBlue,
        textAlign: "center",
        children: subNumber
      })
    }), /*#__PURE__*/_jsx(Day, {
      children: /*#__PURE__*/_jsx(TypoGraphy, {
        type: "body1",
        color: customColor.black,
        textAlign: "center",
        children: day
      })
    }), /*#__PURE__*/_jsx(GraphWrapper, {
      children: /*#__PURE__*/_jsxs(Bar, {
        children: [/*#__PURE__*/_jsx(AgreeBar, {
          per: agreePer / (agreePer + disagreePer) * 100
        }), /*#__PURE__*/_jsx(DisagreeBar, {
          per: disagreePer / (agreePer + disagreePer) * 100
        })]
      })
    })]
  });
};

const Wrapper = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.default)("div",  true ? {
  target: "ezg6dqa11"
} : 0)("display:flex;justify-content:center;align-items:center;height:90px;border-bottom:1px solid ", constants_index__WEBPACK_IMPORTED_MODULE_3__/* .customColor.gray */ .Jx.gray, ";:hover{cursor:pointer;background-color:", constants_index__WEBPACK_IMPORTED_MODULE_3__/* .customColor.grayBg */ .Jx.grayBg, ";}" + ( true ? "" : 0));

const Category = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.default)("div",  true ? {
  target: "ezg6dqa10"
} : 0)( true ? {
  name: "2wo5c1",
  styles: "width:13%"
} : 0);

const TitleWrapper = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.default)("div",  true ? {
  target: "ezg6dqa9"
} : 0)( true ? {
  name: "9tzwj0",
  styles: "width:61%;flex-direction:column;height:100%"
} : 0);

const MainTitle = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.default)("div",  true ? {
  target: "ezg6dqa8"
} : 0)( true ? {
  name: "1i5u9aj",
  styles: "display:flex;align-items:flex-end;padding-bottom:5px;height:60%"
} : 0);

const CommentWrapper = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.default)("div",  true ? {
  target: "ezg6dqa7"
} : 0)( true ? {
  name: "bpd7z7",
  styles: "margin-bottom:2px"
} : 0);

const SubTitle = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.default)("div",  true ? {
  target: "ezg6dqa6"
} : 0)( true ? {
  name: "kwr1fm",
  styles: "display:flex;align-items:flex-start;display:flex;height:40%"
} : 0);

const SubNumber = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.default)("div",  true ? {
  target: "ezg6dqa5"
} : 0)( true ? {
  name: "s75os9",
  styles: "width:8%"
} : 0);

const Day = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.default)("div",  true ? {
  target: "ezg6dqa4"
} : 0)( true ? {
  name: "s75os9",
  styles: "width:8%"
} : 0);

const GraphWrapper = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.default)("div",  true ? {
  target: "ezg6dqa3"
} : 0)( true ? {
  name: "11vt0s8",
  styles: "display:flex;justify-content:center;align-items:center;width:10%"
} : 0);

const Bar = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.default)("div",  true ? {
  target: "ezg6dqa2"
} : 0)("display:flex;width:80%;height:15px;background-color:", constants_index__WEBPACK_IMPORTED_MODULE_3__/* .customColor.grayBg */ .Jx.grayBg, ";" + ( true ? "" : 0));

const AgreeBar = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.default)("div",  true ? {
  target: "ezg6dqa1"
} : 0)("width:", ({
  per
}) => per + '%', ";height:100%;background-color:", constants_index__WEBPACK_IMPORTED_MODULE_3__/* .customColor.blue */ .Jx.blue, ";" + ( true ? "" : 0));

const DisagreeBar = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.default)("div",  true ? {
  target: "ezg6dqa0"
} : 0)("width:", ({
  per
}) => per + '%', ";height:100%;background-color:", constants_index__WEBPACK_IMPORTED_MODULE_3__/* .customColor.gray */ .Jx.gray, ";" + ( true ? "" : 0));

/***/ })

};
;
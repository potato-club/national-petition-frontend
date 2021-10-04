"use strict";
exports.id = 961;
exports.ids = [961,753];
exports.modules = {

/***/ 88530:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ BoardList)
/* harmony export */ });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22112);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var components_common_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52868);
/* harmony import */ var constants_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13643);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7772);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85893);


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }







const BoardList = ({
  listData
}) => {
  const postPerPage = 10;
  const {
    0: allPage
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Math.ceil(listData.length / postPerPage));
  const {
    0: currentPost,
    1: setCurrentPost
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(listData.slice(0, postPerPage));

  const handleChange = (e, value) => {
    setCurrentPost(listData.slice(value * postPerPage - postPerPage, value * postPerPage));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(Container, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(ListWrapper, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(ListNav, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(NavCategory, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(components_common_index__WEBPACK_IMPORTED_MODULE_2__/* .TypoGraphy */ .sx, {
            type: "body1",
            color: constants_index__WEBPACK_IMPORTED_MODULE_3__/* .customColor.black */ .Jx.black,
            textAlign: "center",
            fontWeight: "bold",
            children: "\uCE74\uD14C\uACE0\uB9AC"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(NavTitle, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(components_common_index__WEBPACK_IMPORTED_MODULE_2__/* .TypoGraphy */ .sx, {
            type: "body1",
            color: constants_index__WEBPACK_IMPORTED_MODULE_3__/* .customColor.black */ .Jx.black,
            textAlign: "center",
            fontWeight: "bold",
            children: "\uC81C\uBAA9"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(NavSubNumber, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(components_common_index__WEBPACK_IMPORTED_MODULE_2__/* .TypoGraphy */ .sx, {
            type: "body1",
            color: constants_index__WEBPACK_IMPORTED_MODULE_3__/* .customColor.black */ .Jx.black,
            textAlign: "center",
            fontWeight: "bold",
            children: "\uC870\uD68C\uC218"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(NavDay, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(components_common_index__WEBPACK_IMPORTED_MODULE_2__/* .TypoGraphy */ .sx, {
            type: "body1",
            color: constants_index__WEBPACK_IMPORTED_MODULE_3__/* .customColor.black */ .Jx.black,
            textAlign: "center",
            fontWeight: "bold",
            children: "\uB4F1\uB85D\uC77C"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(NavGraph, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(components_common_index__WEBPACK_IMPORTED_MODULE_2__/* .TypoGraphy */ .sx, {
            type: "body1",
            color: constants_index__WEBPACK_IMPORTED_MODULE_3__/* .customColor.black */ .Jx.black,
            textAlign: "center",
            fontWeight: "bold",
            children: "\uCC2C\uC131\uB960"
          })
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(List, {
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
        }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(components_common_index__WEBPACK_IMPORTED_MODULE_2__/* .ListItem */ .HC, {
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
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(PaginationWrapper, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Pagination, {
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

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ ListItem)
/* harmony export */ });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22112);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var components_common_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52868);
/* harmony import */ var constants_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13643);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5434);
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
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(Wrapper, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(Category, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(components_common_index__WEBPACK_IMPORTED_MODULE_2__/* .TypoGraphy */ .sx, {
        type: "body1",
        color: constants_index__WEBPACK_IMPORTED_MODULE_3__/* .customColor.skyBlue */ .Jx.skyBlue,
        textAlign: "center",
        fontWeight: "bold",
        children: category
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(TitleWrapper, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(MainTitle, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(components_common_index__WEBPACK_IMPORTED_MODULE_2__/* .TypoGraphy */ .sx, {
          type: "body1",
          color: constants_index__WEBPACK_IMPORTED_MODULE_3__/* .customColor.black */ .Jx.black,
          textAlign: "left",
          children: title
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(CommentWrapper, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(components_common_index__WEBPACK_IMPORTED_MODULE_2__/* .TypoGraphy */ .sx, {
            type: "body1",
            color: constants_index__WEBPACK_IMPORTED_MODULE_3__/* .customColor.skyBlue */ .Jx.skyBlue,
            textAlign: "center",
            children: ["\xA0(", comment, ")"]
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(SubTitle, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_5__/* .MdSubdirectoryArrowRight */ .g3Q, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(components_common_index__WEBPACK_IMPORTED_MODULE_2__/* .TypoGraphy */ .sx, {
          type: "body2",
          color: constants_index__WEBPACK_IMPORTED_MODULE_3__/* .customColor.gray */ .Jx.gray,
          textAlign: "left",
          children: subTitle
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(SubNumber, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(components_common_index__WEBPACK_IMPORTED_MODULE_2__/* .TypoGraphy */ .sx, {
        type: "body1",
        color: constants_index__WEBPACK_IMPORTED_MODULE_3__/* .customColor.skyBlue */ .Jx.skyBlue,
        textAlign: "center",
        children: subNumber
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(Day, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(components_common_index__WEBPACK_IMPORTED_MODULE_2__/* .TypoGraphy */ .sx, {
        type: "body1",
        color: constants_index__WEBPACK_IMPORTED_MODULE_3__/* .customColor.black */ .Jx.black,
        textAlign: "center",
        children: day
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(GraphWrapper, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(Bar, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(AgreeBar, {
          per: agreePer / (agreePer + disagreePer) * 100
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(DisagreeBar, {
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

/***/ }),

/***/ 52868:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sx": () => (/* reexport safe */ _TypoGraphy__WEBPACK_IMPORTED_MODULE_0__.s),
/* harmony export */   "kz": () => (/* reexport safe */ _LayoutContainer__WEBPACK_IMPORTED_MODULE_1__.k),
/* harmony export */   "h4": () => (/* reexport safe */ _Header__WEBPACK_IMPORTED_MODULE_3__.h),
/* harmony export */   "Nm": () => (/* reexport safe */ _Top5TextLoop__WEBPACK_IMPORTED_MODULE_4__.N),
/* harmony export */   "mh": () => (/* reexport safe */ _UrlInput__WEBPACK_IMPORTED_MODULE_5__.m),
/* harmony export */   "iL": () => (/* reexport safe */ _TitleHeader__WEBPACK_IMPORTED_MODULE_6__.i),
/* harmony export */   "Ce": () => (/* reexport safe */ _BoardList__WEBPACK_IMPORTED_MODULE_8__.C),
/* harmony export */   "HC": () => (/* reexport safe */ _ListItem__WEBPACK_IMPORTED_MODULE_9__.H)
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
/* harmony export */   "Jx": () => (/* reexport safe */ _customColor__WEBPACK_IMPORTED_MODULE_0__.J)
/* harmony export */ });
/* harmony import */ var _customColor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99610);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58826);




/***/ }),

/***/ 58826:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export settings */
const settings = {
  apiUrl: 'http://ec2-54-180-73-27.ap-northeast-2.compute.amazonaws.com:30000',
  testUrl: 'https://fogojgtvd5.execute-api.ap-northeast-2.amazonaws.com',
  tokenkey: {
    id: 'ID_TOKEN',
    refresh: 'REFRESH_TOKEN'
  }
};

/***/ }),

/***/ 94686:
/***/ ((module) => {

module.exports = JSON.parse('[{"id":1,"category":"인권/성평등","title":"우리 강아지가 너무 귀엽습니다. 어떻게 할까요???","subTitle":"저희집도 그렇습니다. ㅇㅇ","subNumber":"124,235","day":"2021.09.25","agreePer":5,"disagreePer":3,"comment":4},{"id":2,"category":"교통/건축/국토","title":"20개월 여아를 끔찍하게 학대하고 성폭행하여 살해한 아동학대 살인자를 신상공개해주십시오","subTitle":"와 이게 사람이냐????","subNumber":"90,232","day":"2021.09.25","agreePer":3,"disagreePer":0,"comment":12},{"id":3,"category":"미래","title":"60대 노인에게 담배셔틀\'요구하고 작대기로 머리도 수차례 가격한 10대 강력 처벌과 신상공개를 촉구 합니다.","subTitle":"ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅁㅊ","subNumber":"444,444","day":"2021.09.25","agreePer":0,"disagreePer":0,"comment":141},{"id":4,"category":"인권/성평등","title":"우리 강아지가 너무 귀엽습니다. 어떻게 할까요???","subTitle":"저희집도 그렇습니다. ㅇㅇ","subNumber":"124,235","day":"2021.09.25","agreePer":33,"disagreePer":12,"comment":42},{"id":5,"category":"교통/건축/국토","title":"20개월 여아를 끔찍하게 학대하고 성폭행하여 살해한 아동학대 살인자를 신상공개해주십시오","subTitle":"와 이게 사람이냐????","subNumber":"90,232","day":"2021.09.25","agreePer":79,"disagreePer":3,"comment":4},{"id":6,"category":"미래","title":"10대 학생에게 담배셔틀\'요구하고 작대기로 머리도 수차례 가격한 10대 강력 처벌과 신상공개를 촉구 합니다.","subTitle":"수정된 글이다","subNumber":"444,444","day":"2022.09.25","agreePer":9,"disagreePer":12,"comment":11},{"id":7,"category":"외교/통일/국방","title":"대한민국을 지켜주세요","subTitle":"멋져...","subNumber":"444,444","day":"2021.09.25","agreePer":0,"disagreePer":12,"comment":832},{"id":8,"category":"인권/성평등","title":"가스라이팅 및 가정폭력으로 제 동생을 죽음으로 몰고 간 부사관의 처벌을 요구합니다","subTitle":"와","subNumber":"141,252","day":"2021.09.23","agreePer":100,"disagreePer":12,"comment":4},{"id":9,"category":"인권/성평등","title":"아무거나 쓰는중","subTitle":"오우예","subNumber":"141,252","day":"2021.09.23","agreePer":1,"disagreePer":12,"comment":221},{"id":10,"category":"인권/성평등","title":"블랙서바이벌 영원회귀 재밌음","subTitle":"근데 사람이 없음 ㅇㅇ","subNumber":"999,999","day":"2021.09.21","agreePer":1231,"disagreePer":12,"comment":4},{"id":11,"category":"인권/성평등","title":"요즘 하는 게임이 없다.","subTitle":"술이나 마시고싶다.","subNumber":"999,999","day":"2021.09.21","agreePer":1212,"disagreePer":12212,"comment":4},{"id":12,"category":"인권/성평등","title":"으아아아아아아ㅏ아아아아아ㅏ아아아ㅏ아아ㅏ아앙","subTitle":"이이이이ㅣ이이이이ㅣ이이ㅣ이이이잉이잉","subNumber":"921,311","day":"2021.09.21","agreePer":221,"disagreePer":33,"comment":0}]');

/***/ })

};
;
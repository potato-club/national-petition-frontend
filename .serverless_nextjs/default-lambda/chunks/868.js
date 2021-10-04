"use strict";
exports.id = 868;
exports.ids = [868];
exports.modules = {

/***/ 32175:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export Top5TextLoop */
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22112);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var constants_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13643);
/* harmony import */ var components_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52868);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85893);


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }








const Top5List = [{
  id: 1,
  title: '학교 폭파해주세요',
  sub: '123,334'
}, {
  id: 2,
  title: '우리집 강아지는 멋진 강아지',
  sub: '345,123'
}, {
  id: 3,
  title: '이세상을 살려라 할렐루야',
  sub: '789,345'
}, {
  id: 4,
  title: '너, 내 동료가 되라',
  sub: '111,111'
}, {
  id: 5,
  title: '피..피카츄..!',
  sub: '222,222'
}];
const Top5TextLoop = () => {
  const {
    0: handleDrop,
    1: setHandleDrop
  } = useState(false);
  return /*#__PURE__*/_jsxs(Top5Section, {
    children: [/*#__PURE__*/_jsx(Top5Title, {
      children: /*#__PURE__*/_jsx(TypoGraphy, {
        type: "h4",
        color: customColor.white,
        textAlign: "left",
        fontWeight: "bold",
        children: "Top5"
      })
    }), /*#__PURE__*/_jsxs(Top5ItemBox, {
      handleDrop: handleDrop,
      children: [handleDrop ? /*#__PURE__*/_jsx("div", {
        children: Top5List.map(({
          id,
          title,
          sub
        }) => /*#__PURE__*/_jsxs(ItemWrapper, {
          children: [/*#__PURE__*/_jsx(ItemRanking, {
            children: /*#__PURE__*/_jsx(TypoGraphy, {
              type: "body1",
              color: customColor.skyBlue,
              textAlign: "center",
              fontWeight: "bold",
              children: id
            })
          }), /*#__PURE__*/_jsx(ItemTitle, {
            children: /*#__PURE__*/_jsx(TypoGraphy, {
              type: "body1",
              color: customColor.black,
              textAlign: "left",
              children: title
            })
          }), /*#__PURE__*/_jsx(ItemSubNumber, {
            children: /*#__PURE__*/_jsx(TypoGraphy, {
              type: "body1",
              color: customColor.skyBlue,
              textAlign: "center",
              fontWeight: "bold",
              children: sub
            })
          })]
        }, id))
      }) : /*#__PURE__*/_jsxs(TextLoop, {
        mask: true,
        interval: 5000,
        children: [/*#__PURE__*/_jsxs(ItemWrapper, {
          children: [/*#__PURE__*/_jsx(ItemRanking, {
            children: /*#__PURE__*/_jsx(TypoGraphy, {
              type: "body1",
              color: customColor.skyBlue,
              textAlign: "center",
              fontWeight: "bold",
              children: "1"
            })
          }), /*#__PURE__*/_jsx(ItemTitle, {
            children: /*#__PURE__*/_jsx(TypoGraphy, {
              type: "body1",
              color: customColor.black,
              textAlign: "left",
              children: Top5List[0].title
            })
          }), /*#__PURE__*/_jsx(ItemSubNumber, {
            children: /*#__PURE__*/_jsx(TypoGraphy, {
              type: "body1",
              color: customColor.skyBlue,
              textAlign: "center",
              fontWeight: "bold",
              children: Top5List[0].sub
            })
          })]
        }), /*#__PURE__*/_jsxs(ItemWrapper, {
          children: [/*#__PURE__*/_jsx(ItemRanking, {
            children: /*#__PURE__*/_jsx(TypoGraphy, {
              type: "body1",
              color: customColor.skyBlue,
              textAlign: "center",
              fontWeight: "bold",
              children: "2"
            })
          }), /*#__PURE__*/_jsx(ItemTitle, {
            children: /*#__PURE__*/_jsx(TypoGraphy, {
              type: "body1",
              color: customColor.black,
              textAlign: "left",
              children: Top5List[1].title
            })
          }), /*#__PURE__*/_jsx(ItemSubNumber, {
            children: /*#__PURE__*/_jsx(TypoGraphy, {
              type: "body1",
              color: customColor.skyBlue,
              textAlign: "center",
              fontWeight: "bold",
              children: Top5List[1].sub
            })
          })]
        }), /*#__PURE__*/_jsxs(ItemWrapper, {
          children: [/*#__PURE__*/_jsx(ItemRanking, {
            children: /*#__PURE__*/_jsx(TypoGraphy, {
              type: "body1",
              color: customColor.skyBlue,
              textAlign: "center",
              fontWeight: "bold",
              children: "3"
            })
          }), /*#__PURE__*/_jsx(ItemTitle, {
            children: /*#__PURE__*/_jsx(TypoGraphy, {
              type: "body1",
              color: customColor.black,
              textAlign: "left",
              children: Top5List[2].title
            })
          }), /*#__PURE__*/_jsx(ItemSubNumber, {
            children: /*#__PURE__*/_jsx(TypoGraphy, {
              type: "body1",
              color: customColor.skyBlue,
              textAlign: "center",
              fontWeight: "bold",
              children: Top5List[2].sub
            })
          })]
        }), /*#__PURE__*/_jsxs(ItemWrapper, {
          children: [/*#__PURE__*/_jsx(ItemRanking, {
            children: /*#__PURE__*/_jsx(TypoGraphy, {
              type: "body1",
              color: customColor.skyBlue,
              textAlign: "center",
              fontWeight: "bold",
              children: "4"
            })
          }), /*#__PURE__*/_jsx(ItemTitle, {
            children: /*#__PURE__*/_jsx(TypoGraphy, {
              type: "body1",
              color: customColor.black,
              textAlign: "left",
              children: Top5List[3].title
            })
          }), /*#__PURE__*/_jsx(ItemSubNumber, {
            children: /*#__PURE__*/_jsx(TypoGraphy, {
              type: "body1",
              color: customColor.skyBlue,
              textAlign: "center",
              fontWeight: "bold",
              children: Top5List[3].sub
            })
          })]
        }), /*#__PURE__*/_jsxs(ItemWrapper, {
          children: [/*#__PURE__*/_jsx(ItemRanking, {
            children: /*#__PURE__*/_jsx(TypoGraphy, {
              type: "body1",
              color: customColor.skyBlue,
              textAlign: "center",
              fontWeight: "bold",
              children: "5"
            })
          }), /*#__PURE__*/_jsx(ItemTitle, {
            children: /*#__PURE__*/_jsx(TypoGraphy, {
              type: "body1",
              color: customColor.black,
              textAlign: "left",
              children: Top5List[4].title
            })
          }), /*#__PURE__*/_jsx(ItemSubNumber, {
            children: /*#__PURE__*/_jsx(TypoGraphy, {
              type: "body1",
              color: customColor.skyBlue,
              textAlign: "center",
              fontWeight: "bold",
              children: Top5List[4].sub
            })
          })]
        })]
      }), /*#__PURE__*/_jsx(RiArrowDropDownLine, {
        style: {
          display: 'flex',
          fontSize: '40px',
          justifyContent: 'center',
          cursor: 'pointer',
          marginTop: '3px',
          transform: handleDrop ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform 0.5s '
        },
        onClick: () => setHandleDrop(handleDrop => !handleDrop)
      })]
    })]
  });
};

const Top5Section = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.default)("div",  true ? {
  target: "e1ulxmu36"
} : 0)( true ? "" : 0);

const Top5Title = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.default)("div",  true ? {
  target: "e1ulxmu35"
} : 0)( true ? {
  name: "111cgw7",
  styles: "margin-left:20px;margin-bottom:5px"
} : 0);

const Top5ItemBox = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.default)("div",  true ? {
  target: "e1ulxmu34"
} : 0)("display:flex;justify-content:center;width:600px;height:", ({
  handleDrop
}) => handleDrop ? `225px` : `45px`, ";padding:0px 10px;background-color:", constants_index__WEBPACK_IMPORTED_MODULE_2__/* .customColor.white */ .Jx.white, ";border-radius:20px;" + ( true ? "" : 0));

const ItemWrapper = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.default)("div",  true ? {
  target: "e1ulxmu33"
} : 0)( true ? {
  name: "1vp9xyb",
  styles: "display:flex;justify-content:space-between;align-items:center;width:540px;height:45px"
} : 0);

const ItemRanking = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.default)("div",  true ? {
  target: "e1ulxmu32"
} : 0)( true ? {
  name: "1uo1ml2",
  styles: "display:flex;justify-content:center;align-items:center;width:8%"
} : 0);

const ItemTitle = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.default)("div",  true ? {
  target: "e1ulxmu31"
} : 0)( true ? {
  name: "do6ee4",
  styles: "display:flex;align-items:center;width:77%"
} : 0);

const ItemSubNumber = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.default)("div",  true ? {
  target: "e1ulxmu30"
} : 0)( true ? {
  name: "1e01nxt",
  styles: "display:flex;justify-content:center;align-items:center;width:15%"
} : 0);

/***/ }),

/***/ 2:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export UrlInput */
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22112);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var components_common_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52868);
/* harmony import */ var constants_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13643);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85893);


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }






const UrlInput = () => {
  return /*#__PURE__*/_jsxs(EnrollmentWrapper, {
    children: [/*#__PURE__*/_jsx(UrlTitle, {
      children: /*#__PURE__*/_jsx(TypoGraphy, {
        type: "h1",
        color: customColor.black,
        textAlign: "center",
        children: "URL"
      })
    }), /*#__PURE__*/_jsx(InputUrl, {
      placeholder: "\uCCAD\uC6D0 \uAE00\uC758 URL\uC744 \uB123\uC5B4\uC8FC\uC138\uC694."
    }), /*#__PURE__*/_jsx(EnrollmentButton, {
      children: /*#__PURE__*/_jsx(TypoGraphy, {
        type: "h3",
        color: customColor.white,
        textAlign: "center",
        children: "\uB4F1\uB85D"
      })
    })]
  });
};

const EnrollmentWrapper = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.default)("div",  true ? {
  target: "enovgmi3"
} : 0)("display:flex;justify-content:space-between;align-items:center;width:800px;height:70px;padding:10px 15px;background-color:", constants_index__WEBPACK_IMPORTED_MODULE_3__/* .customColor.white */ .Jx.white, ";border-radius:20px;margin-top:20px;margin-bottom:30px;" + ( true ? "" : 0));

const UrlTitle = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.default)("div",  true ? {
  target: "enovgmi2"
} : 0)("display:flex;justify-content:center;align-items:center;width:10%;height:100%;border-right:2px solid ", constants_index__WEBPACK_IMPORTED_MODULE_3__/* .customColor.grayBg */ .Jx.grayBg, ";" + ( true ? "" : 0));

const InputUrl = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.default)("input",  true ? {
  target: "enovgmi1"
} : 0)( true ? {
  name: "7vxww4",
  styles: "width:75%;height:100%;font-size:20px;border:none;:focus{outline:none;}"
} : 0);

const EnrollmentButton = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.default)("button",  true ? {
  target: "enovgmi0"
} : 0)("border:none;padding:15px 25px;background-color:", constants_index__WEBPACK_IMPORTED_MODULE_3__/* .customColor.skyBlue */ .Jx.skyBlue, ";cursor:pointer;width:13%;border-radius:20px;" + ( true ? "" : 0));

/***/ }),

/***/ 52868:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sx": () => (/* reexport safe */ _TypoGraphy__WEBPACK_IMPORTED_MODULE_0__.s),
/* harmony export */   "kz": () => (/* reexport safe */ _LayoutContainer__WEBPACK_IMPORTED_MODULE_1__.k),
/* harmony export */   "h4": () => (/* reexport safe */ _Header__WEBPACK_IMPORTED_MODULE_3__.h)
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











/***/ })

};
;
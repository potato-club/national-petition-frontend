"use strict";
exports.id = 296;
exports.ids = [296];
exports.modules = {

/***/ 19495:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export boardApi */
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13537);

const boardApi = {
  add: async params => {
    return await _common__WEBPACK_IMPORTED_MODULE_0__/* .default.authPost */ .Z.authPost('/api/v1/board', params);
  },
  update: async params => {
    return await _common__WEBPACK_IMPORTED_MODULE_0__/* .default.authPost */ .Z.authPost('/api/v1/board/update', params);
  },
  like: async params => {
    return await _common__WEBPACK_IMPORTED_MODULE_0__/* .default.authPost */ .Z.authPost('/api/v1/board/like', params);
  },
  likeCancel: async params => {
    return await _common__WEBPACK_IMPORTED_MODULE_0__/* .default.authDelete */ .Z.authDelete('/api/v1/board/like', params);
  },
  getDetail: async boardId => {
    return await _common__WEBPACK_IMPORTED_MODULE_0__/* .default.get */ .Z.get(`/api/v1/getBoard/${boardId}`);
  },
  list: async params => {
    return await _common__WEBPACK_IMPORTED_MODULE_0__/* .default.get */ .Z.get('/api/v1/getBoard/list', params);
  }
};

/***/ }),

/***/ 85373:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export commentApi */
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13537);

const commentApi = {
  edit: async params => {
    return await _common__WEBPACK_IMPORTED_MODULE_0__/* .default.authTextPut */ .Z.authTextPut('/api/v1/comment', params);
  },
  list: async boardId => {
    return await _common__WEBPACK_IMPORTED_MODULE_0__/* .default.get */ .Z.get(`/api/v1/comment/${boardId}`);
  },
  add: async (boardId, params) => {
    return await _common__WEBPACK_IMPORTED_MODULE_0__/* .default.authPost */ .Z.authPost(`/api/v1/comment/${boardId}`, params);
  },
  like: async params => {
    return await _common__WEBPACK_IMPORTED_MODULE_0__/* .default.authPost */ .Z.authPost('/api/v1/comment/like', params);
  },
  pageList: async params => {
    return await _common__WEBPACK_IMPORTED_MODULE_0__/* .default.get */ .Z.get('/api/v1/comment/page', params);
  },
  delete: async commentId => {
    return await _common__WEBPACK_IMPORTED_MODULE_0__/* .default.authDelete */ .Z.authDelete(`api/v1/comment/${commentId}`);
  },
  unlike: async params => {
    return await _common__WEBPACK_IMPORTED_MODULE_0__/* .default.authDelete */ .Z.authDelete('api/v1/comment/unlike', params);
  }
};

/***/ }),

/***/ 13537:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9669);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var constants_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13643);
/* harmony import */ var util_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67378);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  authGet: async (url, params) => {
    return axios__WEBPACK_IMPORTED_MODULE_0___default().get(constants_index__WEBPACK_IMPORTED_MODULE_1__/* .settings.apiUrl */ .Xd.apiUrl + url, {
      params,
      headers: {
        Authorization: `Bearer ${await util_index__WEBPACK_IMPORTED_MODULE_2__/* .tokenHelper.getIdToken */ .Nv.getIdToken()}`
      }
    });
  },
  get: async (url, params) => {
    return axios__WEBPACK_IMPORTED_MODULE_0___default().get(constants_index__WEBPACK_IMPORTED_MODULE_1__/* .settings.apiUrl */ .Xd.apiUrl + url, {
      params
    });
  },
  authPost: async (url, params) => {
    return axios__WEBPACK_IMPORTED_MODULE_0___default().post(constants_index__WEBPACK_IMPORTED_MODULE_1__/* .settings.apiUrl */ .Xd.apiUrl + url, params, {
      headers: {
        Authorization: `Bearer ${await util_index__WEBPACK_IMPORTED_MODULE_2__/* .tokenHelper.getIdToken */ .Nv.getIdToken()}`
      }
    });
  },
  post: async (url, authYn, params) => {
    return axios__WEBPACK_IMPORTED_MODULE_0___default().post(constants_index__WEBPACK_IMPORTED_MODULE_1__/* .settings.apiUrl */ .Xd.apiUrl + url, params);
  },
  authTextPut: async (url, params) => {
    return await axios__WEBPACK_IMPORTED_MODULE_0___default()({
      method: 'put',
      url: constants_index__WEBPACK_IMPORTED_MODULE_1__/* .settings.apiUrl */ .Xd.apiUrl + url,
      data: params,
      headers: {
        Authorization: `Bearer ${await util_index__WEBPACK_IMPORTED_MODULE_2__/* .tokenHelper.getIdToken */ .Nv.getIdToken()}`
      }
    });
  },
  authDelete: async (url, params) => {
    return await axios__WEBPACK_IMPORTED_MODULE_0___default()({
      method: 'delete',
      url: constants_index__WEBPACK_IMPORTED_MODULE_1__/* .settings.apiUrl */ .Xd.apiUrl + url,
      data: params,
      headers: {
        Authorization: `Bearer ${await util_index__WEBPACK_IMPORTED_MODULE_2__/* .tokenHelper.getIdToken */ .Nv.getIdToken()}`
      }
    });
  }
});

/***/ }),

/***/ 41581:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export rankApi */
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13537);

const rankApi = {
  getTop5: async () => {
    return await _common__WEBPACK_IMPORTED_MODULE_0__/* .default.get */ .Z.get('/api/v1/petition/rank');
  }
};

/***/ }),

/***/ 58826:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ settings)
/* harmony export */ });
const settings = {
  apiUrl: 'http://ec2-54-180-73-27.ap-northeast-2.compute.amazonaws.com:30000',
  testUrl: 'https://fogojgtvd5.execute-api.ap-northeast-2.amazonaws.com',
  tokenkey: {
    id: 'ID_TOKEN',
    refresh: 'REFRESH_TOKEN'
  }
};

/***/ }),

/***/ 3388:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ tokenHelper)
/* harmony export */ });
/* harmony import */ var constants_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13643);

const tokenHelper = {
  getIdToken: async () => {
    var _await$localStorage$g;

    return (_await$localStorage$g = await localStorage.getItem(constants_index__WEBPACK_IMPORTED_MODULE_0__/* .settings.tokenkey.id */ .Xd.tokenkey.id)) !== null && _await$localStorage$g !== void 0 ? _await$localStorage$g : '';
  },
  setIdToken: token => localStorage.setItem(constants_index__WEBPACK_IMPORTED_MODULE_0__/* .settings.tokenkey.id */ .Xd.tokenkey.id, token),
  getRefreshToken: async () => {
    var _await$localStorage$g2;

    return (_await$localStorage$g2 = await localStorage.getItem(constants_index__WEBPACK_IMPORTED_MODULE_0__/* .settings.tokenkey.refresh */ .Xd.tokenkey.refresh)) !== null && _await$localStorage$g2 !== void 0 ? _await$localStorage$g2 : '';
  },
  setRefreshToken: token => localStorage.setItem(constants_index__WEBPACK_IMPORTED_MODULE_0__/* .settings.tokenkey.refresh */ .Xd.tokenkey.refresh, token)
};

/***/ })

};
;
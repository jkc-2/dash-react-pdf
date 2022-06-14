webpackHotUpdatedash_react_pdf("main",{

/***/ "./src/demo/App.js":
/*!*************************!*\
  !*** ./src/demo/App.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-pdf/renderer */ "./node_modules/@react-pdf/renderer/lib/react-pdf.browser.es.js");
var _excluded = ["header", "rows"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var TableDocument = function TableDocument(_ref) {
  var header = _ref.header,
      rows = _ref.rows,
      other = _objectWithoutProperties(_ref, _excluded);

  var head = ["Col", "Col", "Col", "Col", "Col"];
  var row = ["Elem", "Elem", "Elem", "Elem", "Elem"];

  var createTableHeader = function createTableHeader(header) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__["View"], {
      style: tableRowStyle,
      fixed: true
    }, header.map(function (col, i) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__["View"], {
        key: i,
        style: tableColHeaderStyle
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        style: tableCellHeaderStyle
      }, col));
    }));
  };

  var createTableRow = function createTableRow(rows) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__["View"], {
      style: tableRowStyle
    }, rows.map(function (row, i) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__["View"], {
        style: tableColStyle
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        style: tableCellStyle
      }, row));
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__["PDFViewer"], {
    style: {
      width: window.innerWidth,
      height: window.innerHeight
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__["Document"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__["Page"], {
    style: pageStyle,
    size: "A4",
    orientation: "portrait"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__["View"], {
    style: tableStyle
  }, createTableHeader(head), createTableRow(row), createTableRow(row), createTableRow(row), createTableRow(row), createTableRow(row), createTableRow(row), createTableRow(row), createTableRow(row), createTableRow(row), createTableRow(row), createTableRow(row), createTableRow(row), createTableRow(row), createTableRow(row), createTableRow(row), createTableRow(row), createTableRow(row), createTableRow(row), createTableRow(row), createTableRow(row), createTableRow(row), createTableRow(row), createTableRow(row), createTableRow(row), createTableRow(row), createTableRow(row), createTableRow(row), createTableRow(row), createTableRow(row), createTableRow(row), createTableRow(row), createTableRow(row), createTableRow(row), createTableRow(row), createTableRow(row), createTableRow(row)))));
};

var pageStyle = {
  paddingTop: 16,
  paddingHorizontal: 40,
  paddingBottom: 56
};
var tableStyle = {
  display: "table",
  width: "auto"
};
var tableRowStyle = {
  flexDirection: "row"
};
var firstTableColHeaderStyle = {
  width: "20%",
  borderStyle: "solid",
  borderColor: "#000",
  borderBottomColor: "#000",
  borderWidth: 1,
  backgroundColor: "#bdbdbd"
};
var tableColHeaderStyle = {
  width: "20%",
  borderStyle: "solid",
  borderColor: "#000",
  borderBottomColor: "#000",
  borderWidth: 1,
  borderLeftWidth: 0,
  backgroundColor: "#bdbdbd"
};
var firstTableColStyle = {
  width: "20%",
  borderStyle: "solid",
  borderColor: "#000",
  borderWidth: 1,
  borderTopWidth: 0
};
var tableColStyle = {
  width: "20%",
  borderStyle: "solid",
  borderColor: "#000",
  borderWidth: 1,
  borderLeftWidth: 0,
  borderTopWidth: 0
};
var tableCellHeaderStyle = {
  textAlign: "center",
  margin: 4,
  fontSize: 12,
  fontWeight: "bold"
};
var tableCellStyle = {
  textAlign: "center",
  margin: 5,
  fontSize: 10
};
/* harmony default export */ __webpack_exports__["default"] = (TableDocument);

/***/ })

})
//# sourceMappingURL=3d68ebe-main-wps-hmr.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIzZDY4ZWJlLW1haW4td3BzLWhtci5qcyIsInNvdXJjZVJvb3QiOiIifQ==